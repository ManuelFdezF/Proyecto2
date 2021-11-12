# Proyecto2
## Proyecto 2 - La Liga

En este proyecto creamos una página web de La Liga de Futbol en la que podemos ver un apartado de Noticias, otro de "Resultados" de toda la temporada, se hayan o no jugado, en la que podremos filtrar los resultados del equipo que se desee buscar, y un apartado de "Clasificación", donde se mostrará la clasificación. Los datos de resultados y clasificación son en caliente ya que se utiliza una API para descargar los datos, con lo cual siempre estarán actualizados.

El proyecto de la página web se puede ver en el siguiente enlace https://la-liga21.netlify.app/

La página web es totalmente responsive ya que hemos utilizado el framework Bootstrap para realizarla.

En el apartado de "Clasificación" se utilizan las siguientes funciones:
* getDataFetch
* crearClasificacion

**getDataFetch**

Primero recibimos los datos a traves de la API mediante la función de "fetch". En ella nos logueamos, comprobamos que la respuesta sea positiva y nos devuelve los datos de clasificación en un array. Una vez tenemos los datos los metemos en una variable la cual utilizaremos como argumento para llamar a la función "crearClasificación" .

**crearClasificacion**

Esta función se llama desde la función de fetch enviando como argumento el array recibido, y mediante un bucle for va creando filas y separando en variables cada dato del array recibido (Posición, Nombre de equipo, etc). A continuación se introducen todas las variables en un array (datosClasificación) el cual a continuación recorreremos mediante otro bucle for para crear una "td" por cada variable y mediante los metodos __append__ y __appendChild__ añadimos las variables a __td__ y las __td__ las metemos en las filas __tr__ para que se muestren en el DOM.


En el apartado de "Resultados utilizamos las siguientes funciones:
*getDataFetch
*crearTabla
*datosFiltrados

**getDataFetch**

Funciona igual que la del apartado de Clasificación pero se añaden dos eventos __addEventListener__ : 
Un __keyup__ : para el input donde se introduce el equipo a buscar. Cuando se ejecute, llamará a la función __datosFiltrados__ enviandole como argumento el array devuelto por la función fetch.
Un __click__ : que se activa mediante el botón "Reset", el cual deja el input en blanco y llama a la función de __crearTabla__ con el array recibido del fetch como argumento para que restaure la tabla.

**crearTabla**

Funciona igual que la del apartado de Clasificación con la diferencia de que cuando recibimos el resultado hacemos una comparación con un __if__ . Los que lleguen con el campo __null-null__ lo convertimos a "Prox." para identificar que ese partido se jugará próximamente.

**datosFiltrados**

La finalidad de esta función es que cuando el usuario introduzca un equipo para ver sus resultados, el evento llamará a esta función. 
Mediante el metodo __.filter__ comparamos si el nombre introducido está incluido (mediante el método __.include__ ) en el nombre del equipo local o visitante del arry recibido. Los que encuentra los mete en una variable la cual pasaremos como argumento llamando a la función __crearTabla__









