
const fetcClima = async (ciudad) => {
    try {

        var link = 'https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&units=metric&appid=842edb09e4dd681ac0e703858836d5cd';
        const res = await fetch(link)

        const data = await res.json();

        LLenar(data);

    } catch (error) {
        console.log(error)
    }

}
var ciudad = 'Buenos Aires'
fetcClima(ciudad);

const LLenar = data => {


    const flex = document.querySelector(".flex");

    const template = document.getElementById("template-clima").content;

    const fragment = document.createDocumentFragment();


    template.getElementById("TEMP").textContent = data.main.temp;
    template.getElementById("TEMPMAX").textContent = data.main.temp_max
    template.getElementById("TEMPMIN").textContent = data.main.temp_min;
    template.getElementById("UBIC").textContent = data.name + " " + data.sys.country;
    var date = getdate();
    template.getElementById("FECHA").textContent = getdate();
    template.getElementById("KM").textContent = data.wind.speed;
    template.getElementById("HUMEDAD").textContent = data.main.humidity;
    template.getElementById("VISIBILIDAD").textContent = data.visibility;
    template.getElementById("PRESION").textContent = data.main.pressure;

    template.getElementById('imagen').setAttribute("src", "img/" + data.weather[0].icon + ".png");
    //  template.getElementById('imagen').setAttribute("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");

    console.log(data.weather[0].icon)
    console.log(data.weather[0].main)
    console.log(data.main.temp_max)
    console.log(data.main.temp_min)

   


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

function getdate() {

    var today = new Date().toLocaleDateString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'long'
    });

    return today;
}

function BuscarCiudad(){
 
    var x = document.getElementById("inputCiudad").value; 
    console.log(x)

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