// -------------------------------------------PARTIDOS ------------------------------------------------


// ----------------------- FUNCIÓN DE FETCH -------------------------



function getDataFetch() {
    const url = "https://api.football-data.org/v2/competitions/2014/matches ";
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
        console.log(data)

        let encuentros = data.matches;
        console.log(encuentros);
        crearTabla(encuentros);
        ocultarSpinner();

        let datoInput1 = document.getElementById("datoInput")
        datoInput1.addEventListener("keyup", function () {
            datosFiltrados(encuentros);
        })

        let buttonReset = document.getElementById("botonReset")
        buttonReset.addEventListener("click", () => {
            datoInput.value = ""
            crearTabla(encuentros);
        })

    })
}

getDataFetch();


// ---------------------- FUNCIÓN DE CREAR TABLA --------------------

function crearTabla(parti) {

    let tabla = document.getElementById("bodyTable");

    bodyTable.innerHTML = "";

    for (let i = 0; i < parti.length; i++) {
        const tr = document.createElement("tr")

        // let fechaPartido = parti[i].utcDate;
        // let jornada = parti[i].matchday;

        let jornada = document.createElement("p");
        jornada.innerHTML = parti[i].matchday;
        jornada.classList.add("numJornada");

        let imgEquipLocal = document.createElement("img");
        imgEquipLocal.setAttribute("src", "https://crests.football-data.org/" + parti[i].homeTeam.id + ".svg");
        imgEquipLocal.classList.add("escudo");

        // let nombreEquipoLocal = document.createElement("p");
        // nombreEquipoLocal.innerHTML = parti[i].homeTeam.name;

        let nombreEquipoLocal = parti[i].homeTeam.name;
        nombreEquipoLocal.innerHTML = nombreEquipoLocal;

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

        let fechaPartido = document.createElement("p");
        fechaPartido.innerHTML = parti[i].utcDate;
        // console.log(fechaPartido)


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

let spinner = document.querySelector('.containerSpinner')
function ocultarSpinner() {
    spinner.style.display = 'none';
    // console.log(spinner)
}




// ------------------- Empieza la función para filtar los partidos

function datosFiltrados(partidosFil) {
    let datoInput = document.querySelector("input").value
    // console.log("funciona")
    let partidosFiltrados = partidosFil.filter((p) => {
        if (p.homeTeam.name.toLowerCase().includes(datoInput.toLowerCase()) || p.awayTeam.name.toLowerCase().includes(datoInput.toLowerCase())) {
            return true;
        } else {

            return false;
        }
    })
    // datoInput.value = "";
    crearTabla(partidosFiltrados);
}