# 🔐 Security Codes - Proyecto de práctica con React

Este proyecto es parte de una práctica educativa centrada en **React.js**, donde se exploran los fundamentos del manejo de estado tanto en **componentes de clase** como en **componentes funcionales con hooks** (`useState`, `useReducer`).

---

## 📌 Descripción

La aplicación **Security Codes** simula un sistema de seguridad donde el usuario debe ingresar un código correcto para realizar una acción crítica como eliminar contenido. 

A través de esta lógica, se aprenden conceptos fundamentales de React como:

- Manejo de estado con **`useState`**
- Estados complejos con **`useReducer`**
- Comparación entre **componentes de clase** y **funcionales**
- Ciclo de vida de componentes (clase vs funciones)
- Implementación de estados declarativos
- Lógica condicional para flujos de decisión

---

## 🧠 ¿Cómo funciona?

1. **Pantalla inicial**: se solicita el código de seguridad.
2. Si el código es correcto:
   - Se muestra un mensaje de confirmación con dos opciones: continuar con la eliminación o cancelar.
3. Si el código es incorrecto:
   - Se muestra un estado de error.
4. Si se elimina:
   - Se puede restaurar el estado inicial con un botón.

---