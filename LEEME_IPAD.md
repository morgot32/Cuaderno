# Cuaderno en iPad

1. Sube **todos estos archivos** (sin carpetas) a un hosting HTTPS, por ejemplo GitHub Pages.
2. Abre el enlace en **Safari**, con Internet, y espera unos segundos.
3. Toca **Compartir → Añadir a pantalla de inicio**.
4. Abre Cuaderno desde su icono. Funciona sin conexión.

## Notas
- **Sesiones**: se guardan en el dispositivo. La app instalada tiene su propio almacenamiento, separado de Safari; usa *Guardar sesión* / *Abrir sesión* para pasar trabajo.
- **Actualizar**: reemplaza los archivos en el hosting. La app instalada recibe el cambio la siguiente vez que la abras (a veces a la segunda).
- La primera vez con Internet se guardan las tipografías y pdf.js; después funcionan sin conexión.

## Cambios recientes
- **Panel de capas redimensionable:** arrastra la esquina inferior derecha, o usa los botones − ＋ del encabezado. Doble toque en la esquina vuelve al tamaño original. El tamaño se recuerda.
- **Goma y mezclador por capa:** ya no borran la tinta de las capas de abajo, ni dejan huecos en el papel al exportar.
- **Lienzo personalizado:** las medidas se ingresan en cm (2 a 100).
- **Snap INT:** ahora funciona (intersección entre líneas) con la herramienta Línea.
- **Márgenes rojos:** se dibujan una sola vez.
- **Relleno:** más rápido y con menos memoria.

## Figuras D (comandos)
Pestaña **⌐ Figuras D** en la barra de herramientas, o escribe el comando: presiona **Enter** fuera de cualquier campo, escribe `D1`, `D2`… `D6`, `D10`, `D11` y Enter. Arrastra del punto **1** (primera esquina) al punto **2** (esquina opuesta): la figura se estira como un rectángulo. Las líneas ocultas (D4 y D5) salen segmentadas. Funcionan con Mover, Rotar, Espejo, Borrar por objetos y se guardan en la sesión.
Para sumar D7–D9 u otras: agrega una línea en `D_SHAPES` (index.html) y una opción en `#profilePreset`.
