const fetcClima = async (ciudad) => {
    try {

        //datos por horas
        var link = 'https://api.openweathermap.org/data/2.5/forecast?q=' + ciudad + '&units=metric&appid=842edb09e4dd681ac0e703858836d5cd';

        //Solo por datos por 1 dia
        var link2 = 'https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&units=metric&appid=842edb09e4dd681ac0e703858836d5cd';
        const res = await fetch(link)

        const data = await res.json();

        //console.log(data.list[0].main.temp);

        var alert = document.getElementById("ALERT");

        if (data.cod == 200) {
            alert.classList.add("d-none");
            LLenar(data);
        } else {
            console.log(data.cod)
            alert.classList.remove("d-none");
        }
    } catch (error) {
        console.log(error)
    }

}
var ciudad = 'Buenos Aires'
fetcClima(ciudad);

const LLenar = data => {


    document.getElementById("TEMP").textContent = data.list[0].main.temp;
    document.getElementById("DESC").textContent = data.list[0].weather[0].description.toUpperCase();
    document.getElementById("TEMPMAX").textContent = data.list[0].main.temp_max;
    document.getElementById("TEMPMIN").textContent = data.list[0].main.temp_min;
    document.getElementById("UBIC").textContent = data.city.name + " " + data.city.country;   
    document.getElementById("FECHA").textContent = getTodayDate();
    document.getElementById("KM").textContent = data.list[0].wind.speed;
    document.getElementById("HUMEDAD").textContent = data.list[0].main.humidity + "%";
    document.getElementById("BARRAHUMEDAD").style.width = data.list[0].main.humidity + "%";
    document.getElementById("VISIBILIDAD").textContent = data.list[0].visibility;
    document.getElementById("PRESION").textContent = data.list[0].main.pressure;


    document.getElementById('imagen').setAttribute("src", "img/" + data.list[0].weather[0].icon + ".png");

    ClimaDiasPosteriores(data.list)
    

}

function getTodayDate() {

    var today = new Date().toLocaleDateString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'short'
    });

    return today;
}

function BuscarCiudad() {

    var entrada = document.getElementById("inputCiudad").value;

    var alerttext = document.getElementById("TEXTALERT").textContent;

    var alert = document.getElementById("ALERT");


    if ((document.getElementById("inputCiudad").value.length == 0)) {
        console.log("vacio")
        alert.classList.remove("d-none");

    } else {
        LimiarDatos()
        fetcClima(entrada)
    }

}

const ClimaDiasPosteriores = data => {

    const row = document.getElementById("rowContenedor");
    const template = document.getElementById("tempalteCard").content;
    const fragment = document.createDocumentFragment();


    //console.log(data[0].dt)
    for (var i = 0; i < data.length; i = i + 3) {
        // console.log(data[i].main.temp)
        template.getElementById("DIADIARIO").textContent =getDateTimeStamp(data[i].dt);

        template.getElementById("HORADIARIO").textContent =getHoursTimeStamp(data[i].dt);
        
        template.getElementById("MAXDIARIO").textContent = data[i].main.temp_max;
        template.getElementById("MINDIARIO").textContent = data[i].main.temp_min;
        try{
            template.getElementById('IMAGENDIARIO').setAttribute("src", "img/" + data[i].weather[0].icon + ".png");
        }catch{

        }
        
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);

    }

    row.appendChild(fragment);
}
function LimiarDatos() {

    document.getElementById("TEMP").textContent = "";
    document.getElementById("TEMPMAX").textContent = "";
    document.getElementById("TEMPMIN").textContent = "";
    document.getElementById("UBIC").textContent = "";
    document.getElementById("FECHA").textContent = "";
    document.getElementById("KM").textContent = "";
    document.getElementById("HUMEDAD").textContent = "";
    document.getElementById("VISIBILIDAD").textContent = "";
    document.getElementById("PRESION").textContent = "";
    document.getElementById('BARRAHUMEDAD').setAttribute("width", 0);
}
function getDateTimeStamp(timestamp) {
    let unix_timestamp = timestamp

    var date = new Date(unix_timestamp * 1000);

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var days = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    //var formattedTime = days + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var formattedTime = days + '/' + month + '/' + year 
    console.log(formattedTime)
    return formattedTime
}
function getHoursTimeStamp(timestamp) {
    let unix_timestamp = timestamp

    var date = new Date(unix_timestamp * 1000);

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var days = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    //var formattedTime = days + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var formattedTime = hours + ':' + minutes.substr(-2) 
    console.log(formattedTime)
    return formattedTime
}