// -------------------------------------------PARTIDOS ------------------------------------------------


// ----------------------- FUNCIÓN DE FETCH -------------------------



function getDataFetch(url) {
    // const url = "https://api.football-data.org/v2/competitions/2014/matches ";
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "57c3a86fb0ae410dae1bc3c707d3424b"
        }
    }).then(function (response) {
        if (response.ok == true) {
            return response.json();
        }
    }).then(function (data) {
        // console.log(data)
        // tituloLigas1.innerHTML = "Resultados La Liga";
        let encuentros = data.matches;
        // console.log(encuentros);
        // console.log(encuentros)
        crearTabla(encuentros);
        ocultarSpinner();

        // let datoInput1 = document.getElementById("datoInput")
        // datoInput1.addEventListener("keyup", function () {
        //     datosFiltrados(encuentros);
        // })

        let botonFil = document.getElementById("botonFiltrado")
        botonFil.addEventListener("click", () =>{
            datosFiltrados(encuentros)
        })

        let datoInput2 = document.getElementById("datoInputJornada")
        datoInput2.addEventListener("keyup", function () {
            if (datoInput2.value == "") {
                crearTabla(encuentros)
            } else {
                jornadasFiltrados(encuentros);
            }
        })
        
        let checkedButton = document.getElementsByName("estadistica")

        let buttonReset = document.getElementById("botonReset")
        buttonReset.addEventListener("click", () => {
            datoInput.value = ""
            datoInputJornada.value = ""
            // checkedButton.checked = "false"
            for (let i = 0; i < checkedButton.length; i++) {
                checkedButton[i].checked = false
                
            }

            crearTabla(encuentros);
        })



    })
}

getDataFetch("https://api.football-data.org/v2/competitions/2014/matches");




let tituloLigas1 = document.getElementById("tituloLigas")

// ---------------- Botones de ligas -------------------

let Premier1 = document.getElementById("Premier")
Premier1.addEventListener("click", () => {
    tituloLigas1.innerHTML = "Resultados Premier League";
    bodyTable.innerHTML = "";
    mostrarSpinner();
    getDataFetch("https://api.football-data.org/v2/competitions/2021/matches")
    // ocultarSpinner();
})

let LaLiga1 = document.getElementById("Laliga")
Laliga.addEventListener("click", () => {
    tituloLigas1.innerHTML = "Resultados La Liga";
    bodyTable.innerHTML = "";
    mostrarSpinner();
    getDataFetch("https://api.football-data.org/v2/competitions/2014/matches")
})

let Ligue1 = document.getElementById("Ligue")
Ligue1.addEventListener("click", () => {
    tituloLigas1.innerHTML = "Resultados Ligue 1";
    bodyTable.innerHTML = "";
    mostrarSpinner();
    getDataFetch("https://api.football-data.org/v2/competitions/2015/matches")
})

let Bundesliga1 = document.getElementById("Bundesliga")
Bundesliga1.addEventListener("click", () => {

    tituloLigas1.innerHTML = "Resultados Bundesliga";
    bodyTable.innerHTML = "";
    mostrarSpinner();
    getDataFetch("https://api.football-data.org/v2/competitions/2002/matches")
})

// ---------------------- FUNCIÓN DE CREAR TABLA --------------------

function crearTabla(parti) {

    let tabla = document.getElementById("bodyTable");

    bodyTable.innerHTML = "";

    for (let i = 0; i < parti.length; i++) {
        const tr = document.createElement("tr")

        let jornada = document.createElement("p");
        jornada.innerHTML = parti[i].matchday;
        jornada.classList.add("numJornada");

        let imgEquipLocal = document.createElement("img");
        imgEquipLocal.setAttribute("src", "https://crests.football-data.org/" + parti[i].homeTeam.id + ".svg");
        imgEquipLocal.classList.add("escudo");

        let nombreEquipoLocal = document.createElement("p");
        nombreEquipoLocal.innerHTML = parti[i].homeTeam.name;
        nombreEquipoLocal.classList.add("equipLocalM");
        // let nombreEquipoLocal = parti[i].homeTeam.name;
        // nombreEquipoLocal.innerHTML = nombreEquipoLocal;

        let resultado = parti[i].score.fullTime.homeTeam + "-" + parti[i].score.fullTime.awayTeam;
        // console.log(resultado)
        if (resultado === "null-null") {
            resultado = "Prox."
        } else {
            resultado.textContent = parti[i].score.fullTime.homeTeam + "-" + parti[i].score.fullTime.awayTeam;
        }

        let nombreEquipoVisit = document.createElement("p");
        nombreEquipoVisit.innerHTML = parti[i].awayTeam.name;

        let imgEquipVisit = document.createElement("img");
        imgEquipVisit.setAttribute("src", "https://crests.football-data.org/" + parti[i].awayTeam.id + ".svg");
        imgEquipVisit.classList.add("escudo");

        // let fechaPartido = document.createElement("p");
        // fechaPartido.innerHTML = parti[i].utcDate;
        // console.log(fechaPartido)
        let fechaPartido = document.createElement("p");
        date = new Date(parti[i].utcDate)
        year = date.getFullYear();
        month = date.getMonth() + 1;
        dt = date.getDate();
        hour = date.getHours();
        minutes = date.getMinutes();
        // console.log("Día: ", dt)
        // console.log("Mes: ", month)
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        fechaPartido.innerHTML = dt + "/" + month + "/" + year + " - " + hour + ":" + minutes;


        let = datosPartidos = [jornada, imgEquipLocal, nombreEquipoLocal, resultado, nombreEquipoVisit, imgEquipVisit, fechaPartido]

        for (let j = 0; j < datosPartidos.length; j++) {
            const td = document.createElement("td");
            td.append(datosPartidos[j]);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}
// crearTabla(partidos.matches);


let spinner = document.querySelector('.containerSpinner')

function ocultarSpinner() {
    spinner.style.display = 'none';
    // console.log(spinner)
}

function mostrarSpinner() {
    spinner.style.display = '';
}

// ------------------- Empieza la función para filtar los partidos


// let radioBotonChecked = document.querySelector('input[name="estadistica"]:checked').value



function datosFiltrados(partidosFil) {
    let datoInput = document.querySelector("input").value
    // console.log("funciona")
    // console.log(datoInput)

    const proxMatches = document.getElementById("proxParti")
    const wonMatches = document.getElementById("radioGanados")
    const drawMatches = document.getElementById("radioEmpatados")
    const lostMatches = document.getElementById("radioPerdidos")

    // Comparo cual está seleccionado para hacer el filtro
        
        if (wonMatches.checked == true){
            filteredTable = partidosFil.filter((p) => p.homeTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == "HOME_TEAM" || p.awayTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == "AWAY_TEAM" )  
        } else if (drawMatches.checked == true){
            filteredTable = partidosFil.filter((p) => p.homeTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == "DRAW" || p.awayTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == "DRAW" )  
        } else if (lostMatches.checked == true){
            filteredTable = partidosFil.filter((p) => p.homeTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == "AWAY_TEAM" || p.awayTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == "HOME_TEAM" )  
        } else if (proxMatches.checked == true){
            filteredTable = partidosFil.filter((p) => p.homeTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == null || p.awayTeam.name.toLowerCase().includes(datoInput.toLowerCase()) && p.score.winner == null )  
        } else {
            filteredTable = partidosFil.filter((p) => p.homeTeam.name.toLowerCase().includes(datoInput.toLowerCase()) || p.awayTeam.name.toLowerCase().includes(datoInput.toLowerCase())) 
    }
        
        // return filteredTable;
        crearTabla(filteredTable);
    }


// -------------------- función de filtrar por Jornada 



function jornadasFiltrados(jornadaFil) {
    let datoInputJornada = document.querySelector("input[type=number]").value
    // console.log(jornadaFil)
    // console.log("Jornada introducida: ", datoInputJornada)
    let jornadaFiltrados = jornadaFil.filter((n) => {
        // console.log ("n.matchday vale: ", n.matchday)
        if (n.matchday == datoInputJornada) {

            return true;
        } else {

            return false;
        }
    })



    // console.log(jornadaFiltrados)
    // datoInput.value = "";
    crearTabla(jornadaFiltrados);
}

// ----------------------- Radio - Estadisticas





// let resultado = document.createElement("p");
// resultado.classList.add("resul");
// resultado.innerHTML = parti[i].score.fullTime.homeTeam + "-" + parti[i].score.fullTime.awayTeam;
// console.log(resultado)
// if (resultado === "null-null") {
//     resultado = "Prox."
//     console.log("entra en el if")
// } else {
//     resultado.textContent = parti[i].score.fullTime.homeTeam + "-" + parti[i].score.fullTime.awayTeam;
//     console.log("entra en el else")
// }




// Creo los eventos de los botones y el keyup y el spinner

// let buttonSearch = document.getElementById("search")
// buttonSearch.addEventListener("click", function () {
//     datosFiltrados(partidos.matches);
// })


// let datoInput1 = document.getElementById("datoInput")
// datoInput1.addEventListener("keyup", function () {
//     datosFiltrados(partidos.matches);
// })

// let buttonReset = document.getElementById("botonReset")
// buttonReset.addEventListener("click", () => {
//     datoInput.value = ""
//     crearTabla(partidos.matches);
// })

// let spinner = document.querySelector('.spinner1')
// window.addEventListener('load', function () {
//     spinner.style.display = 'none';
//     // console.log(spinner)
// })