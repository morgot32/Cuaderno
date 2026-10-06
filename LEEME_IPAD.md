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

## Rectángulo relleno
Botón **▮ Relleno** (pestaña Figuras y texto), **Mayús+R** o el comando `RR`. Se dibuja igual que el rectángulo (punto 1 → punto 2), sin borde, con el color de tinta. Opacidad: el control ◐ antes de dibujar, o el control de opacidad del panel de selección para cambiarla después (sirve también con varios elementos seleccionados). El radio de esquinas va en cm.

## Colores y lápices guardados, Lápiz variable y Pluma

**Colores guardados (hasta 20):** junto a los colores de tinta aparece una tira con tus colores. Pestaña **★ Mis lápices** → *Guardar color actual*. Para borrar, activa *Borrar* y toca el color.

**Lápices con nombre:** deja la herramienta, grosor y opacidad como quieras → *★ Mis lápices* → *Guardar lápiz* → escribe el nombre (ej. "Lápiz anotar"). Mismo nombre = sobrescribe. Se aplican tocando el botón o escribiendo su nombre en la línea de comandos (Enter, escribir, Enter).

**◢ Lápiz variable** (Mayús+V, comando `LV`): defines *Punta* y *Final* en px; el trazo cambia de grosor de uno a otro.

**✒ Pluma** (Mayús+P, comando `PL`): dibuja a mano alzada; el trazo queda con nodos suavizados (control *Suavizado*). Con **Mover** selecciona el trazo: arrastra los nodos para corregirlo, doble clic/toque sobre la curva agrega un nodo y doble clic sobre un nodo lo elimina.

Notas: los colores y lápices se guardan en este navegador/dispositivo (no viajan en el archivo de sesión). Los cambios de nodos no se deshacen con Ctrl+Z.
