# Masters de video

Los originales, tal como llegaron. De acá salen los `public/video/*.mp4` y
`*.webm` que sirve el sitio. Nada de esta carpeta se importa, así que Astro
no la empaqueta.

## dron-complejo-hotel.mp4 → /video/waikiki-complejo-hd

Portada del home en pantalla ancha. El complejo desde el dron, el hotel,
las habitaciones y el restaurante frente al mar. Llegó en 1276x720, 37 s,
25 fps. A pantalla completa el navegador lo estiraba a 1920 y se veía
blando, así que se prepara a 1920x1080: se limpia el ruido de compresión
(hqdn3d suave), se agranda con lanczos y se le da nitidez adaptativa
(cas), sin audio, x264 CRF 23 (unos 20 MB). Se probó también un
agrandado con red neuronal (FSRCNN): ganaba menos que esto.

El nombre cambia con cada video nuevo a propósito (antes waikiki-dron,
después waikiki-complejo): con el mismo, los navegadores que ya lo tenían
guardado seguían mostrando el viejo.

## dron-fachada-vertical.mp4 → /video/waikiki-dron-vertical

Portada del home en el celular. La fachada del restaurante y el dron que
sube hasta ver el mar y la ciudad. 720x1280, 15,8 s. Se le quita el
audio y los dos últimos cuadros, que son negros y hacían parpadear el
bucle en cada vuelta.

## restaurante-vertical.mp4 → /video/waikiki-restaurante-vertical

Portada de la página del restaurante en el celular (videoCelu en
restaurante.yaml): el salón, las rabas y la terraza al atardecer.
720x1280, 14,3 s. Sólo se le quita el audio y se vuelve a comprimir.

## complejo-recorrido.mp4 (sin uso)

Fue la portada del home como /video/waikiki-hero.

Recorrido del predio: la bajada a la playa, las carpas, la pileta con el
mirador, el cartel de Ili Ili, el hotel y el puente sobre la pileta.
720x1280, 21,7 s, de teléfono.

Al hero se le recortaba 16:9 desde 330 px de alto —ahí queda el horizonte en
casi todos los planos— y se le sacaba el primer cuadro, que es negro y
hacía parpadear el bucle en cada vuelta.
