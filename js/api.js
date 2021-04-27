
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
    // const flex = document.querySelector(".flex");

    // const template = document.getElementById("template-clima").content;

    // const fragment = document.createDocumentFragment();


    // template.getElementById("TEMP").textContent = data.main.temp;
    // template.getElementById("TEMPMAX").textContent = data.main.temp_max
    // template.getElementById("TEMPMIN").textContent = data.main.temp_min;
    // template.getElementById("UBIC").textContent = data.name + " " + data.sys.country;
    // var date = getdate();
    // template.getElementById("FECHA").textContent = getdate();
    // template.getElementById("KM").textContent = data.wind.speed;
    // template.getElementById("HUMEDAD").textContent = data.main.humidity;
    // template.getElementById("VISIBILIDAD").textContent = data.visibility;
    // template.getElementById("PRESION").textContent = data.main.pressure;

    // template.getElementById('imagen').setAttribute("src", "img/" + data.weather[0].icon + ".png");
    // //  template.getElementById('imagen').setAttribute("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");

    // console.log(data.weather[0].icon)
    // console.log(data.weather[0].main)
    // console.log(data.main.temp_max)
    // console.log(data.main.temp_min)

   


    // const clone = template.cloneNode(true);
    // fragment.appendChild(clone);
    // flex.appendChild(fragment);

    
    document.getElementById("TEMP").textContent = data.main.temp;
    document.getElementById("TEMPMAX").textContent = data.main.temp_max
    document.getElementById("TEMPMIN").textContent = data.main.temp_min;
    document.getElementById("UBIC").textContent = data.name + " " + data.sys.country;
    var date = getdate();
    document.getElementById("FECHA").textContent = getdate();
    document.getElementById("KM").textContent = data.wind.speed;
    document.getElementById("HUMEDAD").textContent = data.main.humidity;
    document.getElementById("VISIBILIDAD").textContent = data.visibility;
    document.getElementById("PRESION").textContent = data.main.pressure;

    document.getElementById('imagen').setAttribute("src", "img/" + data.weather[0].icon + ".png");
    //  template.getElementById('imagen').setAttribute("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");

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
 
    var entrada = document.getElementById("inputCiudad").value;  

    var alerttext = document.getElementById("TEXTALERT").textContent; 

    var alert = document.getElementById("ALERT");
   

    if((document.getElementById("inputCiudad").value.length == 0)){
        console.log("vacio")
        alert.classList.remove("d-none");

    }else{
        alert.classList.add("d-none");
        console.log(entrada)
         LimiarDatos();
         fetcClima(entrada);
        
    }

}

function LimiarDatos(){    
    
    document.getElementById("TEMP").textContent="";
    document.getElementById("TEMPMAX").textContent="";
    document.getElementById("TEMPMIN").textContent="";
    document.getElementById("UBIC").textContent="";  
    document.getElementById("FECHA").textContent="";
    document.getElementById("KM").textContent="";
    document.getElementById("HUMEDAD").textContent="";
    document.getElementById("VISIBILIDAD").textContent="";
    document.getElementById("PRESION").textContent="";
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