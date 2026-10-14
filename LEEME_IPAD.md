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

## Panel Ø Barras F

Pestaña **Ø Barras F**. Eliges el tipo de barra, la cantidad, el diámetro y (opcional) el espaciamiento; luego arrastras del punto 1 al punto 2, igual que las figuras D.

- **Tipos**: Recta, Recta con quiebre (dos tramos paralelos unidos por un tramo diagonal), U abierta arriba, U abierta abajo, L, Abierta a la izquierda y Estribo cerrado.
- **Cant.** (opcional), **Ø8 / Ø10 / Ø12 / Ø16** y **a** espaciamiento en cm (opcional). Ejemplos de texto: `Ø12`, `2Ø12`, `2Ø16 a 20`. La línea «Texto:» del panel muestra cómo va a quedar.
- El texto sale con su **línea de referencia** (punto sobre la barra, línea hacia afuera y texto sobre una base). **Invertir lado** lo pasa al otro lado; **Con texto** lo apaga; **Tamaño** cambia el texto.
- Comando: `F8`, `F10`, `F12`, `F16` (Enter, escribir, Enter) cambia el diámetro y activa la herramienta con el último tipo usado.
- La selección se guarda en el navegador. Cada barra conserva el texto con que se dibujó. Se mueven, giran y borran por objeto como el resto de las figuras.

**Quiebre:** se dibuja pensando en barras de abajo hacia arriba (punto 1 abajo, punto 2 arriba). El quiebre parte al 30% del largo desde el punto 1 y el tramo superior se desplaza a la derecha (*Quiebre al otro lado* lo cambia). Medidas ideales por defecto: desfase = 2 veces el grosor de la barra y tramo inclinado = 3 veces el desfase. Para fijar medidas propias usa **Quiebre largo** (tramo inclinado) y **Quiebre ancho** (desfase), en cm; vacío = medida ideal. Para cambiar un quiebre ya dibujado: selecciónalo con Mover, ve a *Barras F* y cambia los valores.
