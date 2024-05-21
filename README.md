# Backend con Node.js y Express

Este proyecto es un proyecto skeleton de backend utilizando Node.js y Express con una arquitectura en 3 capas: controlador (controller), lógica de negocio (logic), y persistencia (persistence).


## Estructura del Proyecto

```bash
project/
│
├── src/
│ ├── api/
│ │ └── index.js
│ │
│ ├── controllers/
│ │ └── notesController.js
│ │
│ ├── logic/
│ │ └── notes.js
│ │
│ ├── persistence/
│ │ └── notesPersistence.js
│ │
│ ├── routes/
│ │ └── index.js
│ │
│ ├── views/
│ │ └── ... archivos EJS
│ │
│ ├── index.js
│ ├── package.json
│ └── README.md
 ```

## Instalación

1. Clona el repositorio
    ```bash
    git clone https://github.com/danialfaro/node3layer.git node3layer
    cd node3layer
    ```

2. Instala las dependencias
    ```bash
    npm install
    ```

3. Configura las variables de entorno

   Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:
    ```plaintext
    PORT=3000
    ```

## Uso

1. Inicia el servidor
    ```bash
    npm start
    ```

2. El servidor estará corriendo en `http://localhost:PORT`

