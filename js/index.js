//Declaracion de variables
const departamento = document.querySelectorAll('.departamentos');


//llamando al json
fetch("./js/departamentos.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(info){
        console.log(info)
    });



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


class class_depa_i{
    constructor(fotoDepart,titulo, cabecera, superficie, poblacion,fiesta,conocerMas){
        this.fotoDepart = fotoDepart;
        this.titulo = titulo;
        this.cabecera = cabecera;
        this.superficie = superficie;
        this.poblacion = poblacion;
        this.fiesta = fiesta;
        this.conocerMas = conocerMas;
    }
}

//  [0] morazan, [1] cabañas, [2] chalate , [3] cusca

// Foto, Nombre, cabercera, superficie, poblacion, fiesta, conocemas
const morazan_i = new class_depa_i ("./img/map_color.png",info[0].departamento,info[0].cabecera, info[0].extension_territorial,
info[0].habitantes,info[0].fiesta_patronales)


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
    switch (departamento) {
		case "santa_ana":
			InsertInfo(santa_ana_i);
			break;
		case "sonsonate":
			InsertInfo(sonsonate_i);
			break;
		case "san_salvador":
			InsertInfo(santa_ana_i);
			break;
		case "san_salvador":
			InsertInfo(santa_ana_i);
			break;
		case "san_salvador":
			InsertInfo(santa_ana_i);
			break;
		case "san_salvador":
			InsertInfo(santa_ana_i);
			break;
		case "san_salvador":
			InsertInfo(santa_ana_i);
			break;
		
		default:
			
	}
    
}

function InsertInfo(class_depa){

    fotoDepart.src = class_depa.fotoDepart;
    titulo.innerText = class_depa.titulo;
    cabecera.innerText = class_depa.cabecera;
    superficie.innerText = class_depa.superficie;
    poblacion.innerText = class_depa.poblacion;
    fiesta.innerText = class_depa.fiesta;
    conocerMas.href = class_depa.conocerMas;
}

