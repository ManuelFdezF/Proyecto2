# Proyecto - La liga V1.0 

En este proyecto creamos una página web de La Liga de Futbol que se divide en tres apartados:
* __Noticias__(Home): En él se verán las diferentes noticias de actualidad. También veremos en el menú de navegación los escudos de los equipos ordenados en función a su posición actual en la clasificación.
* __Resultados__: Se puede ve el calendario de toda la temporada y podemos filtrar por equipo o por jornada. Veremos también los escudos en el menú de navegación al igual que en el Home.
* __Clasificación__: Se muestra el "Notición del día" y la clasificación completa. 



Los datos de resultados y clasificación son en caliente ya que se utiliza una API para descargar los datos, con lo cual siempre estarán actualizados.


El proyecto de la página web se puede ver pinchando [aquí.](https://la-liga21.netlify.app/)

## Tecnologías empleadas:
![logosProgram](https://github.com/ManuelFdezF/Proyecto2/blob/bbecdfeb3bede7b17a087b2c3a5c9db63284a8ac/img/logos.jpg)
* __HTML:__ Para realizar la estructura de la página web.
* __CSS:__ Para el diseño de la página web.
* __Bootstrap:__ Para el diseño y al utilizar este framework obtenemos una página web responsive que se puede ver en cualquier dispositivo.
* __JavaScript:__ Para darle funcionalidad a la página web.
* __Postman:__ Se utilizó al inicio del proyecto para descargar los datos de la API.
* __Git y Github:__ Para almacenar nuestro proyecto en la nube.


## Descripción Técnica:

### __En el apartado de *Clasificación* se utilizan las siguientes funciones:__

* **getDataFetch()**
Primero recibimos los datos a traves de la API mediante la función de *getDataFetch()*. En ella nos logueamos, comprobamos que la respuesta sea positiva y nos devuelve los datos de clasificación en un array. Una vez tenemos los datos los metemos en una variable la cual utilizaremos como argumento para llamar a la función *crearClasificación()*.

* **crearClasificacion()** 
Esta función se llama desde la función de *getDataFetch()* enviando como argumento el array recibido, y mediante un bucle *for* va creando filas y separando en variables cada dato del array recibido (Posición, Nombre de equipo, etc). A continuación se introducen todas las variables en un array (datosClasificación) el cual recorreremos mediante otro bucle *for* en el que se crean celdas *td* y mediante los metodos *append* y *appendChild* añadimos cada dato del array en una celda *td* y esa celda la añadimos a la fila *tr*. Finalmente añadimos esas filas *tr* a la tabla para que se muestren en el DOM.


### __En el apartado de *Resultados* utilizamos las siguientes funciones:__

* **getDataFetch()**
Funciona igual que la del apartado de Clasificación pero se añaden dos eventos *addEventListener* :

  * Dos *keyup*: para los *input* donde se introduce el equipo a buscar o el número de jornada. Cuando se ejecuten, llamarán a la función *datosFiltrados()* enviandole como argumento el array devuelto por la función *getDataFetch()*.
  * Un *click*: que se activa mediante el botón "Reset", el cual deja los *input* en blanco y llama a la función de *crearTabla()* con el array recibido de la función *getDataFetch()* como argumento para que restaure la tabla.

* **crearTabla()**
Funciona igual que la del apartado de Clasificación con la diferencia de que cuando recibimos el resultado hacemos una comparación con un *if*. Los que lleguen con el campo *null-null* lo convertimos a "Prox." para identificar que ese partido se jugará próximamente.

* **datosFiltrados()**
La finalidad de esta función es que cuando el usuario introduzca un equipo para ver sus resultados o una jornada para que se muestren solo esos partidos, el evento llamará a esta función. 
Mediante el metodo *.filter* comparamos si el nombre introducido está incluido (mediante el método *.include* ) en el nombre del equipo local o visitante del array recibido. Los que encuentra los introduce en una variable la cual pasaremos como argumento llamando a la función *crearTabla()* .

### **Escudos en el menú de navegación**

En el apartado "Home" y "Resultados" se mostrarán los escudos de los equipos de la liga ordenados en función de su posición en la clasificación.
Para obtener los escudos utilizamos la función *getDataFetch()* y mediante la función *crearClasificacionEscudos()* se añaden al menú de navegación



Antes de que carguen las tablas de clasificación y de resultados aparace un spinner (loader) que se ocultará cuando éstas tengan todos los datos. El spinner se ha realizado en CSS y se oculta del DOM mediante una función la cual, una vez se carguen los datos en las tablas se le añade al contenedor padre del spinner un *.style.display="none"* para que desaparezca.

## Versiones
* Versión 1.0 - noviembre de 2021

## To Do:
* Añadir más noticias al home
* Añadir ligas de otros países
* Añadir apartado de estadísticas



