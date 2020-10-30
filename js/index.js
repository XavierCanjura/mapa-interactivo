//Declaracion de variables
const departamentos = document.querySelectorAll('.departamentos');

const fotoDepart = document.getElementById('foto-depart');
const titulo = document.getElementById('titulo-info');
const cabecera = document.getElementById('cabecera');
const superficie = document.getElementById('superficie');
const poblacion = document.getElementById('poblacion');
const fiesta = document.getElementById('fiesta');
const conocerMas = document.getElementById('mas')

//Eventos
departamentos.forEach( (e) =>{
    e.addEventListener('mouseover', obtenerDepart);
});



//Funciones
//Funcion para obtener el nombre del departamento
function obtenerDepart(e)
{
    console.log(e.path[0].id);

    MostrarDepart(e.path[0].id);
}

//Funtion para mostrar informacion del departamento
function MostrarDepart(departamento)
{
    fotoDepart.src = "./img/map_color.png";
    titulo.innerText = "La Libertad";
    cabecera.innerText = "Cabecera: La Libertad";
    superficie.innerText = "Superficie: 3000 km^2";
    poblacion.innerText = "Población: 200 079 hab.";
    fiesta.innerText = "Fiestas Patronales: Hoy";
    conocerMas.href = "desarrolladores.html";
}