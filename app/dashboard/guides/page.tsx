import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import GuideCard from '@/components/GuideCard'
import GuidePath, { type PathStep } from '@/components/GuidePath'
import type { GuideWithStatus } from '@/lib/types'

export const dynamic = 'force-dynamic'

export default async function GuidesPage() {
  const supabase = await createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('puesto')
    .eq('id', session.user.id)
    .single()
  if (!profile) redirect('/login')

  const { data: guides } = await supabase
    .from('guides')
    .select('*')
    .or(`puestos.cs.{"${profile.puesto}"},puestos.cs.{"todos"}`)
    // La guía principal va siempre primera, sin importar cuándo se creó.
    .order('is_primary', { ascending: false })
    .order('created_at', { ascending: true })

  const { data: exams } = await supabase.from('exams').select('*')

  const { data: results } = await supabase
    .from('exam_results')
    .select('*')
    .eq('user_id', session.user.id)
    .eq('passed', true)

  // El recorrido de su puesto. Consulta aparte, sin join anidado: los joins
  // anidados de PostgREST vienen anulando consultas enteras en este proyecto.
  const { data: rawPath } = await supabase
    .from('guide_paths')
    .select('guide_id, orden, etiqueta')
    .eq('puesto', profile.puesto)
    .order('orden', { ascending: true })

  const guidesWithStatus: GuideWithStatus[] = (guides ?? []).map((guide) => {
    const exam = exams?.find((e) => e.guide_id === guide.id)
    const result = results?.find((r) => r.exam_id === exam?.id)
    return {
      ...guide,
      exam,
      result: result ?? undefined,
      status: result ? 'passed' : exam ? 'exam_pending' : 'not_started',
    }
  })

  const porId = new Map(guidesWithStatus.map((g) => [g.id, g]))

  // Si una guía de la ruta ya no existe o no es visible para este puesto,
  // se saltea en lugar de romper la pantalla.
  const steps: PathStep[] = (rawPath ?? []).flatMap((row) => {
    const g = porId.get(row.guide_id as string)
    if (!g) return []
    return [
      {
        guide_id: g.id,
        etiqueta: row.etiqueta as string,
        title: g.title,
        description: g.description ?? null,
        passed: g.status === 'passed',
        score: g.result?.score ?? null,
        hasExam: Boolean(g.exam),
      },
    ]
  })

  const enLaRuta = new Set(steps.map((s) => s.guide_id))
  const otras = guidesWithStatus.filter((g) => !enLaRuta.has(g.id))

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-xl font-bold text-brand-text">Guías</h1>
        <p className="text-brand-muted text-sm mt-0.5">
          {steps.length > 0
            ? 'Este es el orden en el que te conviene leerlas. Podés saltear si necesitás.'
            : guidesWithStatus.length +
              ' guía' +
              (guidesWithStatus.length !== 1 ? 's' : '') +
              ' disponible' +
              (guidesWithStatus.length !== 1 ? 's' : '') +
              ' para tu puesto'}
        </p>
      </div>

      {steps.length > 0 && <GuidePath puesto={profile.puesto} steps={steps} />}

      {otras.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
            {steps.length > 0 ? 'Otras guías' : 'Guías'}
          </h2>
          {steps.length > 0 && (
            <p className="text-brand-muted text-xs mb-3 leading-relaxed">
              No están en tu recorrido, pero las podés leer y rendir cuando quieras.
            </p>
          )}
          <div className="space-y-3">
            {otras.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>
      )}

      {guidesWithStatus.length === 0 && (
        <div className="text-center py-16">
          <p className="text-brand-muted">No hay guías disponibles todavía.</p>
        </div>
      )}
    </div>
  )
}
