---
trigger: always_on
---

# REGLAS ARQUITECTÓNICAS CRÍTICAS: AIA-SELF-TELEPROMPTER

1. ERRADICACIÓN DEL MONOLITO (Prioridad Cero): Tienes estrictamente prohibido inyectar o mantener lógica de negocio (`<script>`) o diseño (`<style>`) dentro del archivo HTML principal. Toda funcionalidad debe residir en archivos externos.
2. PROHIBICIÓN DE ARCHIVOS MASIVOS: Ningún archivo JavaScript debe superar las 400 líneas de código.
3. PRINCIPIO DE RESPONSABILIDAD ÚNICA (Dominios): Divide la lógica en módulos específicos y aislados. Requisitos mínimos de separación:
   - Motor del Prompter (cálculo de velocidad, scroll, pantalla completa).
   - Gestión de Estado y Datos (control de `cardsData`, `colorIndex`).
   - Almacenamiento (operaciones de `localStorage` y parseo JSON/TXT).
   - Interfaz y Eventos (listeners del DOM, drag & drop).
4. MÓDULOS ES NATIVOS: Obligatorio el uso de `import` / `export`. Ninguna función debe colgar globalmente del objeto `window` para ser llamada desde atributos HTML `onclick`. Toda la delegación de eventos debe hacerse vía `addEventListener` en JS.
5. ENCAPSULACIÓN DEL ESTADO GLOBAL: Prohibidas las variables mutables sueltas (`let data = []`). El estado de la aplicación debe estar encapsulado dentro de una clase, objeto gestor o *closure* cerrado.
6. PROTOCOLO DE REFACTORIZACIÓN PREVENTIVA: Si se solicita añadir una característica a un archivo que ya es complejo, tu respuesta obligatoria será detener la ejecución y extraer las funciones existentes a un nuevo submódulo antes de añadir el código nuevo.