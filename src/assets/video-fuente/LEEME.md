# Masters de video

Los originales, tal como llegaron. De acá salen los `public/video/*.mp4` y
`*.webm` que sirve el sitio. Nada de esta carpeta se importa, así que Astro
no la empaqueta.

## dron-complejo-hotel.mp4 → /video/waikiki-dron

Portada del home en pantalla ancha. El complejo desde el dron, el hotel,
las habitaciones y el restaurante frente al mar. 1276x720, 37 s, 25 fps.
El .mp4 es el original sin recomprimir (sólo se le quita el audio): cada
pasada de compresión pierde calidad. El .webm, de reserva, va en VP9.

## dron-predio.mp4 (sin uso)

Fue la portada ancha antes que el de arriba. Llegó en 636x360 y a 330
kb/s, y aun limpio y llevado a 1280x720 se veía blando a pantalla
completa.

## dron-fachada-vertical.mp4 → /video/waikiki-dron-vertical

Portada del home en el celular. La fachada del restaurante y el dron que
sube hasta ver el mar y la ciudad. 720x1280, 15,8 s. Se le quita el
audio y los dos últimos cuadros, que son negros y hacían parpadear el
bucle en cada vuelta.

## complejo-recorrido.mp4 (sin uso)

Fue la portada del home como /video/waikiki-hero.

Recorrido del predio: la bajada a la playa, las carpas, la pileta con el
mirador, el cartel de Ili Ili, el hotel y el puente sobre la pileta.
720x1280, 21,7 s, de teléfono.

Al hero se le recortaba 16:9 desde 330 px de alto —ahí queda el horizonte en
casi todos los planos— y se le sacaba el primer cuadro, que es negro y
hacía parpadear el bucle en cada vuelta.
