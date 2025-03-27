## Proyecto Prueba/Tutorial para aprender React-Native con FrameWork Expo

Tres partes tiene el proyecto:

### PARTE1: BASE DE DATOS

Hay una base datos en mongodb con un mongo-express.

Para desplegar hay que estar en la raiz del proyecto e introducir:

`$ docker compose up`

Esto generará dos contenedores, el de la base de datos y el del visor de base de datos.

Para acceder a mongo-express:
http://localhost:8090

NOTA: He tenido problemas de actualización en mongo-express, de forma que no aparecen los datos insertados directamente. Pero al buscarlos por key aparecen.


### PARTE1: BACKEND

Es un backend en node básico, alojado en el puerto 4000.

Entrar en la carpeta backend y descargar los archivos necesarios con:
`$ npm i`

La primera vez que se inicialice usar el siguiente script para cargar los datos en la BD:

`$ npm run initDB`

Luego de que se inserten los datos se puede arrancar con:

`$ npm start`

### PARTE1: FRONTEND

Es un frontend con react native y framework expo.

Entrar en la carpeta frontend y descargar los archivos necesarios con:
`$ npm i`

Ejecutar el entorno expo con:
`$ npx expo start`

NOTA1: Es necesario cambiar el .env del frontend escribiendo la dirección ip de tu pc.

### INFORMACIÓN ADICIONAL

Vas a necesitar una máquina virtual android studio o tu propio movil android para ejecutar la aplicación.

La prueba de funcionamiento la he realizado con un movil android físico.

