# 💸 CashTrack - Gestor de Ingresos y Gastos Personales

**CashTrack** es una aplicación web interactiva diseñada para el control y seguimiento de finanzas personales. Permite registrar transacciones de ingresos y gastos, visualizar un balance general calculado en tiempo real y mantener los datos guardados en el navegador.

---

## 📸 Vista Previa e Interfaz
Diseño moderno basado en **Glassmorphism UI** con interfaz responsiva, colores pastel translúcidos y efectos visuales de profundidad.

---

## 🚀 Funcionalidades Clave
* **Resumen Financiero Dinámico:** Cálculo en tiempo real de Balance Total, Total de Ingresos y Total de Gastos.
* **Registro de Movimientos:** Formulario intuitivo con validaciones nativas para capturar descripción, monto y tipo de transacción.
* **Persistencia de Datos:** Utiliza `localStorage` para conservar las transacciones al recargar o cerrar el navegador.
* **Gestión de Lista:** Renderizado dinámico de la lista de movimientos con opción de eliminación individual y recalculado automático.
* **Diseño Responsivo:** Adaptado para una experiencia óptima en dispositivos móviles y de escritorio.

---

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Semántica web y maquetación de formularios.
* **CSS3:** Estilos avanzados, Flexbox, CSS Grid, Variables CSS y efectos Glassmorphic (`backdrop-filter`).
* **JavaScript (ES6+):** Manipulación del DOM, eventos, manejo de arreglos/objetos y almacenamiento con `localStorage`.
* **Git & GitHub:** Control de versiones y alojamiento del código fuente.

---

## 📂 Estructura del Proyecto

```text
cashtrack/
├── index.html      # Estructura semántica de la aplicación
├── styles.css      # Hoja de estilos con efectos Glassmorphism
├── app.js          # Lógica de negocio y manejo del DOM
└── README.md       # Documentación oficial del proyecto