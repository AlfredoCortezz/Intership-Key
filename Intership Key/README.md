# Portal del Estudiante - Key Institute (Frontend)

Este repositorio contiene el frontend del **Portal del Estudiante de Key Institute**, una aplicación web de vanguardia desarrollada con React, TypeScript y Vite. El portal sirve como un expediente digital e interactivo del estudiante, centralizando información sobre su rendimiento académico, competencias interpersonales, actividades co-curriculares y dimensiones de bienestar (programa WELL).

---

## 🚀 Tecnologías Clave

El proyecto está construido sobre un stack moderno y eficiente diseñado para alto rendimiento y excelente experiencia visual:

*   **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) para un desarrollo robusto y tipado.
*   **Build Tool**: [Vite](https://vite.dev/) para compilaciones y recarga en caliente (HMR) ultra rápidas.
*   **Estilado y UI**: [Tailwind CSS v3](https://tailwindcss.com/) para diseño rápido y responsivo, combinado con variables CSS para el soporte nativo de temas.
*   **Fuentes**: Font familiar `Albert Sans` importada desde Google Fonts.
*   **Gráficos Interactivos**: [Recharts](https://recharts.org/) para visualización interactiva y animada de datos (gráficas de radar y de pastel/donas).
*   **Iconografía**: [Lucide React](https://lucide.dev/) para iconos vectoriales limpios y consistentes.
*   **Exportación de Reportes**: [jsPDF](https://github.com/parallax/jsPDF) y [html2canvas](https://html2canvas.hertzen.com/) para compilación y descarga de expedientes PDF en tiempo de ejecución.
*   **Enrutamiento**: [React Router DOM v7](https://reactrouter.com/) para la gestión de rutas y layouts de la aplicación.
*   **Utilidades de Clase**: `clsx` y `tailwind-merge` con una utilidad centralizada `cn` en [cn.ts](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/utils/cn.ts).

---

## 📂 Estructura del Proyecto (`src/`)

La estructura de carpetas sigue un patrón limpio y modular:

*   📂 [`components/`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/components): Componentes reutilizables de la interfaz y la estructura general.
    *   [`Layout.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/components/Layout.tsx): Componente estructural maestro que define el contenedor responsivo, el menú lateral para pantallas de escritorio y móvil, la navegación superior y la plantilla oculta para exportación de PDF.
    *   [`Sidebar.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/components/Sidebar.tsx): Menú de navegación lateral, adaptativo según la ruta activa y el tema activo (cargando logotipos azul/blanco correspondientes).
    *   [`TopNav.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/components/TopNav.tsx): Barra superior que incluye el título dinámico, control de cambio de tema (Modo Oscuro), enlaces externos (LinkedIn, reglamentos), botón de descarga de reporte general, notificaciones y opción de cierre de sesión.
*   📂 [`pages/`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/pages): Páginas principales asociadas a las rutas.
    *   [`Dashboard.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/pages/Dashboard.tsx): Vista del perfil estudiantil resumido, tarjetas de categorías, indicadores de horas globales de progreso, insignias y recomendaciones académicas. Cuenta con un **Centro de Descargas** interactivo para exportar datos agrupados.
    *   [`PowerSkills.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/pages/PowerSkills.tsx): Vista de evaluación de habilidades blandas basada en gráficos de radar e indicadores de dominio.
    *   [`Academico.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/pages/Academico.tsx): Gestión de proyectos PBL (Project Based Learning), retos, cursos libres, horas de beca e intercambio académico.
    *   [`Extra.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/pages/Extra.tsx): Historial de actividades extra-curriculares (asistente de profesor, pasantías, investigación, Servicio Social y clubes).
    *   [`Well.tsx`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/pages/Well.tsx): Módulo enfocado en el programa WELL (bienestar integral) que incluye dimensiones físicas, espirituales y sociales, así como mentoría estudiantil.
*   📂 [`data/`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/data): Datos simulados estáticos para alimentar la vista del portal.
    *   [`mockData.ts`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/data/mockData.ts): Contiene el perfil del estudiante piloto, horas acumuladas, insignias iniciales, recomendaciones y puntuaciones de habilidades de radar.
*   📂 [`utils/`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/utils): Utilidades de código generales.
    *   [`cn.ts`](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/utils/cn.ts): Función auxiliar que envuelve a `clsx` y `tailwind-merge` para combinar clases condicionales de Tailwind sin colisiones.

---

## 🛠️ Detalle de Funcionalidades

### 1. Dashboard (Vista General)
La página principal consolida la información general del alumno (en este caso Rodrigo, estudiante de Ingeniería Mecatrónica y Robótica con Beca Key Transform al 80%):
*   **Resumen de Perfil**: Muestra datos básicos y permite navegar al **Centro de Descargas**.
*   **Sección de Horas Estudiante**: Desglosa gráficamente en barras el avance en las subcategorías (WELL: 45%, Sociales: 35%, Key: 25%).
*   **Insignias y Reconocimientos**: Cuadrícula interactiva con los logros visuales e insignias acumuladas.
*   **Estado Disciplinario e Información**: Visualiza recomendaciones personalizadas generadas por el sistema y el estatus de amonestaciones ("Sin amonestaciones" verificado con checkmark verde).
*   **Centro de Descargas**: Permite tanto la descarga del expediente general completo como la descarga específica segmentada de cada uno de los bloques (Power Skills, Académico, WELL, Extra).

### 2. Power Skills
Permite evaluar el desempeño del estudiante en 6 competencias clave para la empleabilidad: **Comunicación, Liderazgo, Trabajo en Equipo, Resolución, Creatividad y Adaptabilidad**.
*   **Radar Chart interactivo**: Un gráfico de radar que dibuja el área de fortalezas mediante un degradado suave.
*   **Tarjetas de Competencia**: Tarjetas individuales que muestran el porcentaje numérico de dominio de cada habilidad, acompañadas de barras de progreso que cambian de color condicionalmente (Verde para dominio >= 80%, Azul para >= 70% y Morado para puntuaciones menores). Las habilidades validadas superiores a 80% muestran un distintivo verde.

### 3. Académico
Presenta el progreso puramente formativo. Esta sección incluye:
*   **Resumen de Horas Key**: Utiliza un gráfico de dona/pastel interactivo (`PieChart`) que muestra el avance (70% completado - 57h completadas de 81h requeridas).
*   **Filtros Interactivos**: Menú de pestañas autodesplazables (*Todo*, *PBL*, *Cursos*, *Retos*, *Horas Key*, *Experiencias Internacionales*).
*   **Modo Interactivo (CRUD)**:
    *   **Agregar Actividad**: Abre un Formulario Modal donde se define el título de la actividad, la categoría asociada y la materia/tema, agregándose dinámicamente al inicio de la lista con un estado verificado por defecto.
    *   **Eliminar Actividad**: Botón integrado en cada tarjeta para eliminar elementos específicos de la lista actual del estado local de la aplicación.
*   **Detalles por Tarjeta**: Soporte para mostrar calificaciones (ej. 9.5), premios como trofeos (ej. "Primer lugar"), certificados enlazados y aprendizajes clave (*takeaways*).

### 4. Extra (Actividades Co-curriculares)
Expone el historial fuera de la currícula estándar del alumno:
*   **Puestos de Asistente (TA)**: Ej. Asistente en Mecatrónica I para el Dr. Eduardo Torres.
*   **Pasantías (Internship)**: Registro del paso por Bosch México (6 créditos, duración de 6 meses) con etiqueta de validación.
*   **Investigación Científica**: Detalles de proyectos como "Robótica Cognitiva" bajo la tutela del Dr. Ramírez, computando un acumulado de 192 horas.
*   **Talleres Key Spark**: Talleres de diseño CAD y Manufactura Aditiva (16 horas).
*   **Servicio Social**: Muestra el progreso actual (70% completado, 350 horas de 500h totales) desglosado en tabla de actividades y un gráfico de pastel complementario.
*   **Proyectos Sociales y Clubes**: Participación en programas de electrificación solar rural y roles de operador CNC en el Club de Manufactura Avanzada.

### 5. WELL (Bienestar Estudiantil)
Documenta el desarrollo y hábitos de vida del alumno de acuerdo a la metodología integral de bienestar:
*   **Créditos WELL**: Actividades certificadas (ej. Charla de Diseño Sostenible e Hike en Sierra de Guadalupe).
*   **Dimensiones del Bienestar**: Visualización detallada de las 7 dimensiones (Físico: 95%, Espiritual: 95%, Social: 78%, Emocional: 65%, Financiero: 55%, Intelectual: 40%, Ambiental: 30%) representadas en un gráfico de pastel concéntrico multicolor y barras porcentuales horizontales.
*   **Peer Mentor**: Detalla el rol semestral de mentoría entre pares de Rodrigo (15 alumnos asesorados).
*   **Horas WELL**: Porcentaje acumulado (70% completado - 57h de 81h requeridas) renderizado mediante un gráfico circular dinámico.

---

## ⚡ Características Avanzadas del Sistema

### 📄 Exportación de Expediente en PDF
La aplicación implementa una sofisticada exportación de PDF generada en el lado del cliente (sin llamadas de servidor) accesible desde la barra superior (`TopNav`) y el Dashboard:
1.  **Plantilla Oculta**: En [Layout.tsx](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/components/Layout.tsx) se encuentra maquetado un contenedor oculto fuera del viewport (`#pdf-report-template`) que se divide estrictamente en 3 bloques independientes (`#pdf-page-1`, `#pdf-page-2`, `#pdf-page-3`).
2.  **Dimensiones A4 exactas**: Cada una de las 3 páginas está calibrada con una resolución fija de `800px` de ancho por `1130px` de alto, garantizando un escalado perfecto a tamaño de hoja A4.
3.  **Procesamiento de Lienzos**: Al activar la exportación, la función asíncrona `handleDownloadPdf` itera por las páginas, renderizándolas como imágenes PNG de alta resolución mediante `html2canvas` con una escala de renderizado de `scale: 2` (para asegurar nitidez en textos y gráficos).
4.  **Ensamble de Documento**: Usando `jspdf`, las imágenes generadas se cosen secuencialmente en páginas individuales de un único documento PDF, el cual se autodescarga con el nombre `reporte-estudiante.pdf`.
5.  **Diseño Profesional e Institucional**: El reporte incluye headers institucionales, códigos de validación internos, pie de página numerado e incluso un "Sello de Validación Oficial" con estilo de trazo discontinuo.

### 🌓 Modo Oscuro Inteligente
La aplicación admite cambio de tema ágil y agradable a la vista:
*   El estado inicial en [TopNav.tsx](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/components/TopNav.tsx) detecta si el documento tiene la clase `.dark` activa en el sistema.
*   La alternancia añade o remueve la clase `dark` de la etiqueta raíz `<html>` del documento.
*   Las variables CSS nativas (`--bg-color`, `--surface-color`, `--text-primary`, etc.) declaradas en [index.css](file:///c:/Users/AlfredoEnmanuelCorte/Documents/Intership%20Key/Intership%20Key/src/index.css) cambian sus valores gradualmente con transiciones animadas de `300ms`, modificando instantáneamente el fondo general, las superficies de las tarjetas y el color de fuente del texto.

### 🎯 Resaltado de Sección por Scroll (Navegación Reactiva)
En las vistas de **Académico**, **Extra** y **WELL**, que constan de múltiples secciones verticales extensas en un solo documento:
*   Se implementa un efecto de seguimiento reactivo en el scroll del contenedor principal (`#export-content`).
*   A través de un escuchador activo en el scroll (`scrollContainer.addEventListener`), la app calcula mediante `getBoundingClientRect()` cuál sección se encuentra centrada en la pantalla del usuario en tiempo real.
*   El sub-menú de pestañas sticky superior se actualiza de manera automatizada para resaltar la pestaña de la sección en la que el usuario está posicionado, ofreciendo una experiencia sumamente fluida.

---

## 🛠️ Instalación y Ejecución

Para clonar y poner en marcha el proyecto de forma local, sigue los siguientes pasos:

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-del-repositorio>
    cd "Intership Key"
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    *(El portal se abrirá típicamente en [http://localhost:5173/](http://localhost:5173/))*

4.  **Compilar para producción**:
    ```bash
    npm run build
    ```
    *(Esto generará los archivos estáticos listos para desplegar en la carpeta `/dist`)*

5.  **Ejecutar Linter**:
    ```bash
    npm run lint
    ```
    *(Ejecuta las reglas de validación estática configuradas mediante Oxlint en `.oxlintrc.json`)*
