var ciudad = 'Japan'
const fetcClima = async (x) => {
    try {
        console.log(ciudad)
        const res = await fetch('  http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&units=metric&appid=842edb09e4dd681ac0e703858836d5cd')

        const data = await res.json();

        LLenar(data);

    } catch (error) {
        console.log(error)
    }

}

fetcClima();

const LLenar = data => {


    const flex = document.querySelector(".flex");

    const template = document.getElementById("template-clima").content;


    const fragment = document.createDocumentFragment();


     template.getElementById("TEMP").textContent = data.main.temp;
     template.getElementById("TEMPMAX").textContent = data.main.temp_max
     template.getElementById("TEMPMIN").textContent = data.main.temp_min;
    template.getElementById("UBIC").textContent = data.name+" "+data.sys.country;

  template.getElementById('imagen').setAttribute("src", "img/" + data.weather[0].icon + ".png");
  //  template.getElementById('imagen').setAttribute("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
    
    console.log(data.weather[0].icon)
    console.log(data.weather[0].main)
    // console.log(data.weather[0])

    // console.log(data.weather[0].id)


    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    flex.appendChild(fragment);

    // data.forEach(data => {

    //     template.getElementById("NombreEquipo").textContent = Equipo.Equipo;


    //     template.getElementById("PENDIENTES").textContent = Equipo.Pendientes;


    //     template.getElementById("ENTREGADOS").textContent = Equipo.Entregados;


    //     const clone = template.cloneNode(true);
    //     fragment.appendChild(clone);

    // });

    // flex.appendChild(fragment);

}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);

    var res = Math.round((valNum - 32) * 5 / 9);
    return res
}


function Limpiar(cant) {

    console.log("cant a limpiar: " + cant)

    for (var i = 0; i <= cant + cant; i++) {

        var templateLimpiar = document.querySelectorAll('[id=templateID]');
        try {
            templateLimpiar[i].remove()
        } catch {
            // console.log("no existe template en la posicion: "+i)
        }

    }



}


// var x = 0
// setInterval(function () {
//     console.log(x)
//     if (x == 1) {

//         fetcClima(x)

//     } else if (x == 5) {

//         fetcClima(x)
//         x = 0;
//         console.clear();
//     }
//     x = x + 1
// }, 1000);