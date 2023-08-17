# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Enunciado
Crea una app para buscar pelis

API a usar:
https://www.omdbapi.com/
API_KEY: [.env.local] ## please,submit an API key

Requirements
- Need un input y un botón p/buscar pelis
- Lista las pelis encontradas y muestra Title, year, poster.
- Haz que las pelis se muestren en un grid responsive.

Primera iteración

- Evita que se haga la misma búsqueda 2 veces seguidas
- Que la búsqueda se haga automáticamente al escribir
- Evita que la búsqueda se haga continuamente al escribir (debounce)

---------------------

zsh: npm create@latest (con React + JS+SWC alternativa a Babel con Rust)

useRef()
Es un hook que nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente, es decir no se reinicia. Es muy útil para guardar cualquier valor que podamos mutar, como un identificador, un elemento del DOM, como un contador,etc, que cada vez que cambia, no vuelve a renderizar el componente. Esto lo hace diferente al useState(), el cual cada vez que cambia, vuelve a renderizar el componente.

useMemo()
Es un Hook de React que te permite guardar en caché el resultado de un cálculo entre renderizados.
Referencia

    useMemo(calcularValor, dependencias) 

Uso

    Evitar recálculos costosos
    Omitir el rerenderizado de componentes
    Memoizar una dependencia de otro Hook
    Memoizar una función 
