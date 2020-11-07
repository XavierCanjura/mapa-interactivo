//Declaracion de Variables
const dHistoria = document.getElementById('dHistoria');
var muni,turis;


window.onload = () => {
    try 
    {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        onloadinfo(id);       
        console.log(id);
    } 
    catch (err)
    {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}

function onloadinfo(id) 
{
    fetch("./js/departamentos.json")
        .then(function(resp) 
        {
            return resp.json();
        })
        .then(function(info) 
        {
            i = info.findIndex(obj => obj.id == id);
            console.log("index id : " + i);
            muni = info[i].municipios; 
            turis = info[i].centros_turisticos;
            console.log("lenght del array: "+ muni.length)
            var NombreDepa = document.getElementById('depaN');
            var listam = document.getElementById('municipios');

            for (var b = 0; b < muni.length; b++) 
            {
                var entrada = document.createElement('li');
                entrada.appendChild(document.createTextNode(muni[b]));
                console.log(muni[b])
                listam.appendChild(entrada);
            }

            dHistoria.innerHTML = info[i].dato_historico;

            var lista2 = document.getElementById('cturistico');
            for (var t = 0; t < turis.length; t++) {
                var entrada2 = document.createElement('li');
                entrada2.appendChild(document.createTextNode(turis[t]));
                console.log(turis[t])
                lista2.appendChild(entrada2);
            }  
            
            NombreDepa.innerHTML= info[i].departamento;
        })
}



