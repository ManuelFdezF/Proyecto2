// ------------------------------------ CLASIFICACIÓN ----------------------------------

// ----------------- Función de Fetch ----------------------------

function getDataFetch() {
    const url = "https://api.football-data.org/v2/competitions/2014/standings";
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "57c3a86fb0ae410dae1bc3c707d3424b"
        }
    }).then(function (response) {
        if (response.ok == true) {
            return response.json();
        }
    }).then(function (data1) {
        console.log(data1)

        let clasiVivo = data1.standings[0].table;
        console.log(clasiVivo);
        crearClasificacion(clasiVivo)
        
    })
}

getDataFetch();



// ----------------- FUnción Crear Clasificación -----------------

function crearClasificacion(clasi) {

    let clasificacionEquipos = document.getElementById("clasificacion");
    // console.log(clasificacion.standings[0].table[1].team.name)
    // console.log(clasi[0].table.length);
    for (let i = 0; i < clasi.length; i++) {
        const tr = document.createElement("tr")

        let posicionEquipo = document.createElement("p");
        posicionEquipo.innerHTML = clasi[i].position;
        posicionEquipo.classList.add("marginCla", "posicionB");

        let nombreEquipoC = document.createElement("p");
        nombreEquipoC.innerHTML = clasi[i].team.name;
        nombreEquipoC.classList.add("marginCla");

        let imagenEquipo = document.createElement("img");
        imagenEquipo.setAttribute("src", clasi[i].team.crestUrl)
        imagenEquipo.classList.add("escudo")

        let partJugados = document.createElement("p");
        partJugados.innerHTML = clasi[i].playedGames;
        partJugados.classList.add("marginCla");

        let partGanados = document.createElement("p");
        partGanados.innerHTML = clasi[i].won;
        partGanados.classList.add("marginCla");

        let partEmpatados = document.createElement("p");
        partEmpatados.innerHTML = clasi[i].draw;
        partEmpatados.classList.add("marginCla");

        let partPerdidos = document.createElement("p");
        partPerdidos.innerHTML = clasi[i].lost;
        partPerdidos.classList.add("marginCla");

        let golesFavor = document.createElement("p");
        golesFavor.innerHTML = clasi[i].goalsFor;
        golesFavor.classList.add("marginCla");

        let golesContra = document.createElement("p");
        golesContra.innerHTML = clasi[i].goalsAgainst;
        golesContra.classList.add("marginCla");

        let difGoles = document.createElement("p");
        difGoles.innerHTML = clasi[i].goalDifference;
        difGoles.classList.add("marginCla");

        let puntos = document.createElement("p");
        puntos.innerHTML = clasi[i].points;
        puntos.classList.add("pts", "marginCla")


        let datosClasificacion = [posicionEquipo, imagenEquipo, nombreEquipoC, puntos, partJugados, partGanados, partEmpatados, partPerdidos, golesFavor, golesContra, difGoles ];

        for (let j = 0; j < datosClasificacion.length; j++) {
            const td = document.createElement("td");
            td.append(datosClasificacion[j]);
            tr.appendChild(td);
        }

        clasificacionEquipos.appendChild(tr);
    }

}
// crearClasificacion(clasificacion.standings[0].table);