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
        // console.log(data1)

        let clasiVivo = data1.standings[0].table;
        // console.log(clasiVivo);
        crearClasificacionEscudos(clasiVivo)
        
        
    })
}

getDataFetch();


function crearClasificacionEscudos(escud) {

    let logoteams2 = document.getElementById("logoTeams");
    
    for (let i = 0; i < escud.length; i++) {
        const li = document.createElement("li")

        let escudoEquipo = document.createElement("img");
        escudoEquipo.setAttribute("src", escud[i].team.crestUrl)
        escudoEquipo.classList.add("escudo2")

        let listadoEscudos = [ escudoEquipo ];

        for (let j = 0; j < listadoEscudos.length; j++) {
            // const li = document.createElement("li");
            li.append(listadoEscudos[j]);
            // li.appendChild(li);
        }

        logoteams2.appendChild(li);
    }

}