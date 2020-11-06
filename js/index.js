//Declaracion de variables
const departamento = document.querySelectorAll('.departamentos');
var i=0, img;
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


// class class_depa_i{
//     constructor(fotoDepart,titulo, cabecera, superficie, poblacion,fiesta,conocerMas){
//         this.fotoDepart = fotoDepart;
//         this.titulo = titulo;
//         this.cabecera = cabecera;
//         this.superficie = superficie;
//         this.poblacion = poblacion;
//         this.fiesta = fiesta;
//         this.conocerMas = conocerMas;
//     }
// }

//Funciones
//Funcion para obtener el nombre del departamento
function obtenerDepart(e)
{
    console.log(e.path[0].id);

    MostrarDepart(e.path[0].id);
}
// morazan[0] , cabanas[1], chalatenango[2], cuscatlan[3], la libertad[4], la paz[5], la union[6],
// ahuchapan[7],santa ana[8], san salvador[9], san vicente[10], san miguel[11], usulutan[12], cabanas[13]

//Funtion para mostrar informacion del departamento
function MostrarDepart(departamento) {
    switch (departamento) {
        case "morazan":
            i=0;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "cabanas":
            i=1;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "chalatenango":
            i=2;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "cuscatlan":
            i=3;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "la_libertad":
            i=4;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "la_paz":
            i=5;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "la_union":
            i=6;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "ahuachapan":
            i=7;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "santa_ana":
            i=8;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "san_salvador":
            i=9;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "san_vicente":
            i=10;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "san_miguel":
            i=11;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        case "usulutan":
            i=12;
            img="./img/departamentos/usulutan.png";
            InsertInfo(i,img)
            break;
        case "cabanas":
            i=13;
            img="./img/map_color.png";
            InsertInfo(i,img)
            break;
        default:
            break;
    }

}


function InsertInfo(i, path){

    fetch("./js/departamentos.json")
 .then(function(resp) {
     return resp.json();
 })
 .then(function(info) {
     console.log(info)
     fotoDepart.src = path;
     titulo.innerText = info[i].departamento;
     cabecera.innerText = "Cabecera: " + info[i].cabecera;
     superficie.innerText = "Superficie: " + info[i].extension_territorial;
     poblacion.innerText = "Poblacion: " + info[i].habitantes;
     fiesta.innerText = "Fiestas Patronales: "+info[i].fiesta_patronales;
     conocerMas.href = inf.conocerMas;  
 });
}

