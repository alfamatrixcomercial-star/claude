/**
 * Engancha un script de componente a cada página, no sólo a la primera.
 *
 * Con el ClientRouter, Astro corre cada script una sola vez por visita: al
 * navegar reemplaza el <body> pero no vuelve a ejecutar lo que ya corrió.
 * Un script que busca sus elementos al cargar queda atado a los de la
 * primera página y, después del primer clic, apunta a nodos que ya no están.
 *
 * `preparar` corre ahora y después de cada cambio de página. Si devuelve una
 * función, esa función se llama justo antes del cambio, para soltar lo que
 * quedó enganchado a la página vieja (observers, videos, diálogos).
 *
 * Se usa `astro:after-swap` y no `astro:page-load` porque corre antes de que
 * la página nueva se pinte: el menú, por ejemplo, llega ya abierto y no se
 * ve un cuadro con la barra vacía. Cuando un componente aparece por primera
 * vez en una página a la que se llegó navegando, su script se evalúa después
 * del swap, así que la llamada inicial cubre ese caso y no hay doble
 * enganche.
 */
export function enCadaPagina(preparar: () => void | (() => void)) {
  let soltar: void | (() => void) = preparar();

  document.addEventListener("astro:before-swap", () => {
    soltar?.();
    soltar = undefined;
  });
  document.addEventListener("astro:after-swap", () => {
    soltar = preparar();
  });
}
