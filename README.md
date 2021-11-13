# Proyecto La Liga V1.0


En este proyecto creamos una página web de La Liga de Futbol en la que podemos ver un apartado de "Noticias" (Home), otro de "Resultados" de toda la temporada, se hayan o no jugado, en la que podemos filtrar los resultados del equipo que se desee buscar, y un apartado de "Clasificación", donde se mostrará la clasificación. Los datos de resultados y clasificación son en caliente ya que se utiliza una API para descargar los datos, con lo cual siempre estarán actualizados.


El proyecto de la página web se puede ver pinchando [aquí](https://la-liga21.netlify.app/)

## Tecnologías empleadas:
* __HTML:__ Para realizar la estructura de la página web.
* __CSS:__ Para el diseño de la página web.
* __Bootstrap:__ Para el diseño y al utilizar este framework obtenemos una página web responsive que se puede ver en cualquier dispositivo.
* __JavaScript:__ Para darle funcionalidad a la página web.
* __Postman:__ Se utilizó al inicio del proyecto para descargar los datos de la API.
* __Git y Github:__ Para almacenar nuestro proyecto en la nube.


## Parte Técnica:

### __En el apartado de "Clasificación" se utilizan las siguientes funciones:__

* **getDataFetch()**
Primero recibimos los datos a traves de la API mediante la función de *getDataFetch()*. En ella nos logueamos, comprobamos que la respuesta sea positiva y nos devuelve los datos de clasificación en un array. Una vez tenemos los datos los metemos en una variable la cual utilizaremos como argumento para llamar a la función *crearClasificación()*.

* **crearClasificacion()** 
Esta función se llama desde la función de fetch enviando como argumento el array recibido, y mediante un bucle for va creando filas y separando en variables cada dato del array recibido (Posición, Nombre de equipo, etc). A continuación se introducen todas las variables en un array (datosClasificación) el cual a continuación recorreremos mediante otro bucle for para crear una *td* por cada variable y mediante los metodos *append* y *appendChild* añadimos las variables a *td* y las *td* las metemos en las filas *tr* para que se muestren en el DOM.


### __En el apartado de "Resultados" utilizamos las siguientes funciones:__

* **getDataFetch()**
Funciona igual que la del apartado de Clasificación pero se añaden dos eventos *addEventListener* :

  * Un *keyup* : para el input donde se introduce el equipo a buscar. Cuando se ejecute, llamará a la función *datosFiltrados* enviandole como argumento el array devuelto por la función fetch.

  * Un *click* : que se activa mediante el botón "Reset", el cual deja el input en blanco y llama a la función de *crearTabla* con el array recibido del fetch como argumento para que restaure la tabla.

* **crearTabla()**
Funciona igual que la del apartado de Clasificación con la diferencia de que cuando recibimos el resultado hacemos una comparación con un *if* . Los que lleguen con el campo *null-null* lo convertimos a "Prox." para identificar que ese partido se jugará próximamente.

* **datosFiltrados()**
La finalidad de esta función es que cuando el usuario introduzca un equipo para ver sus resultados, el evento llamará a esta función. 
Mediante el metodo *.filter* comparamos si el nombre introducido está incluido (mediante el método *.include* ) en el nombre del equipo local o visitante del array recibido. Los que encuentra los introduce en una variable la cual pasaremos como argumento llamando a la función *crearTabla* .


Antes de que carguen las tablas aparace un spinner (loader) que se ocultará cuando estás tengan todos los datos. El spinner es realizado en CSS y se oculta del DOM mediante una función la cual, una vez se carguen los datos en las tablas se le añade al contenedor padre del spinner un *.style.display="none"* para que desaparezca.


## To Do:
* Añadir más noticias al home
* Añadir ligas de otros países
* Añadir apartado de estadísticas



