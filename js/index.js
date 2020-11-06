//Declaracion de variables
const departamento = document.querySelectorAll('.departamentos');
const fotoDepart = document.getElementById('foto-depart');
const titulo = document.getElementById('titulo-info');
const cabecera = document.getElementById('cabecera');
const superficie = document.getElementById('superficie');
const poblacion = document.getElementById('poblacion');
const fiesta = document.getElementById('fiesta');
const conocerMas = document.getElementById('mas')



//Eventos
departamento.forEach( (e) =>{
    e.addEventListener('mouseover', obtenerDepart);
});

//Funciones
//Funcion para obtener el nombre del departamento
function obtenerDepart(e)
{
    console.log(e.path[0].id);

    MostrarDepart(e.path[0].id);
}
// morazan[0] , cabanas[1], chalatenango[2], cuscatlan[3], la libertad[4], la paz[5], la union[6],
// ahuchapan[7],santa ana[8], san salvador[9], san vicente[10], san miguel[11], usulutan[12], cabanas[13]

var imgpath = ["./img/map_color.png","",""]

//Funtion para mostrar informacion del departamento
function MostrarDepart(idDepa) {
    
    fetch("./js/departamentos.json")
 .then(function(resp) {
     return resp.json();
 })
 .then(function(info) {
    i = info.findIndex(obj => obj.id==idDepa);
     console.log(i);
     console.log(info)
     // cuando esten las imagenes listas cambiar el 0 por la varibale i....
     fotoDepart.src = imgpath[0];
     titulo.innerText = info[i].departamento;
     cabecera.innerText = "Cabecera: " + info[i].cabecera;
     superficie.innerText = "Superficie: " + info[i].extension_territorial;
     poblacion.innerText = "Poblacion: " + info[i].habitantes;
     fiesta.innerText = "Fiestas Patronales: "+info[i].fiesta_patronales;
     conocerMas.href = "departamentos.html?id="+info[i].id;  
 });

}




