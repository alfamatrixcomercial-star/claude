/**
 * Arranca un video de fondo mudo y en bucle: el del home y el de la
 * portada de una sección en el celular.
 *
 *  · Se pide recién cuando terminó de cargar la página: la foto que está
 *    debajo pinta primero y lo importante no compite con varios megas.
 *  · No arranca si el visitante pide menos movimiento o tiene ahorro de
 *    datos: queda la foto.
 *  · El iPhone en ahorro de batería no deja arrancar videos solos y play()
 *    falla; sí los deja después de un gesto, así que se reintenta con el
 *    primer toque (que es también como empieza un scroll en el celular).
 *  · Cuando arranca de verdad se le pone la clase `visible`, para que
 *    aparezca con un fundido encima de la foto.
 *
 * Devuelve la función que lo suelta al cambiar de página (para enCadaPagina).
 */
export function arrancarVideoFondo(video: HTMLVideoElement, src: string): (() => void) | undefined {
  const quietud = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ahorro = (navigator as any).connection?.saveData === true;
  if (quietud || ahorro) return;

  const mostrar = () => video.classList.add("visible");

  const GESTOS = ["touchstart", "pointerdown", "keydown"] as const;
  const conGesto = () => {
    soltarGestos();
    video.play().then(mostrar).catch(() => {});
  };
  const soltarGestos = () => GESTOS.forEach((g) => window.removeEventListener(g, conGesto));
  const reintentar = () =>
    GESTOS.forEach((g) => window.addEventListener(g, conGesto, { once: true, passive: true }));

  const arrancar = () => {
    /* El mp4 va primero: lo lee todo el mundo. El webm queda de reserva
       para los navegadores compilados sin H.264. */
    for (const [tipo, ext] of [
      ["video/mp4", "mp4"],
      ["video/webm", "webm"],
    ]) {
      const fuente = document.createElement("source");
      fuente.src = `${src}.${ext}`;
      fuente.type = tipo;
      video.appendChild(fuente);
    }
    video.muted = true;
    video.load();
    video.play().then(mostrar).catch(reintentar);
  };
  if (document.readyState === "complete") arrancar();
  else window.addEventListener("load", arrancar, { once: true });

  /* Al irse de la página el video sale del documento pero sigue bajando
     hasta que el navegador lo descarta. Sin fuentes y con load() corta la
     descarga en el momento. */
  return () => {
    window.removeEventListener("load", arrancar);
    soltarGestos();
    video.pause();
    video.querySelectorAll("source").forEach((f) => f.remove());
    video.load();
  };
}
