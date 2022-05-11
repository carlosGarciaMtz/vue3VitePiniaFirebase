var idIzzi;
var hasWSBeenCalled = false;
var wsSaveContactEvent = "https://www.izzi.mx/chats1/chats1/saveContactEvent"; // https://jsonplaceholder.typicode.com/posts

var url_string = window.location.href;
var url = new URL(url_string);
// var _gclid = url.searchParams.get("gclid");
// var _utm = (_gclid != "" && _gclid != null )? "?gclid="+_gclid:"";
_utm = url.search;



let prevUrl = document.referrer;
prevUrl = prevUrl. replace('https://www.','');
prevUrl = prevUrl. replace('http://www.','');
prevUrl = prevUrl. replace('https://','');
prevUrl = prevUrl. replace('http://','');
prevUrl = prevUrl. replace('.html','');

var char = prevUrl.substring(prevUrl.length-1,prevUrl.length);
if(char==='/')
    prevUrl = prevUrl.substring(0,prevUrl.length-1);

$(document).ready(function(){
    $("#utmF").val( _utm );
});


function getIzziId() {
    console.log("saveContactEvent :: [\n" + "    IdIzzi:" + $("#IdIzzi").val()
        + "\n" + "    Email:" + $("#email").val() + "\n"
        + "    Nombre:" + $("#name").val() + "\n"
        + "    Asunto:" + $("#asunto").val() + "\n"
        + "    cpgid:" + $("#cpgid").val() + "\n" + "    nw:"
        + $("#nw").val() + "\n" + "    autosubmit:"
        + $("#autosubmit").val() + "\n" + "    Origen:"
        + $("#Origen").val() + "\n" + "]");
    if ($("#telefono").val() == "") {
        $("#telefono").val(" ");
    }


    $("#last_name").val('');
    $("#phone").val($("#telefono").val());
    var _flujo = localStorage.getItem( "typeProduct" ).toLowerCase();
    $.ajax({
        type : 'POST',
        url : wsSaveContactEvent,
        dataType : "json",
        async: false,
        data : {
            correo : $("#email").val(),
            nombre : $("#name").val(),
            canal : $("#Origen").val(),
            telefono : $("#telefono").val(),
            contrato : ' ',
            flujo: _flujo,
            utm:  $("#utmF").val(),
            asunto : $("#asunto").val(),
            url : prevUrl,

        },
        cache : false,
        crossDomain : false,
        success : function(data) {
            idIzzi = data.idEvento;
            //alert('idIzzi = '+idIzzi );
            console.log("saveContactEvent :: [izziID = "+ idIzzi + "]");
            $("#IdIzzi").val(idIzzi);
            hasWSBeenCalled = true;
            //alert("aqui se hace el submit del formulario chat.hatml (datosCliente). quitar linea 44 en chatIzzi para implementar");
            $("#url").val(prevUrl);
            $("#datosCliente").submit();
        },
        error : function(data) {
            hideLoader();
            $("#IdIzzi").val('000');
            $("#datosCliente").submit();
            hasWSBeenCalled = true;
            console.error("ERROR: Al invocar /chats1/saveContactEvent]");
        }
    });
}

function enviaS1() {
//	alert('===> ***  ENVIANDO a S1');
    if ($("#asunto").val() == "Ventas") {
        $("#cpgid").val("43371088");
    } else if ($("#asunto").val() == "Soporte") {
        $("#cpgid").val("42441560");
    }
    console.log('===> ***  asunto: '+$("#asunto").val() + ' / cpgid: '+$("#cpgid").val());

    if (!hasWSBeenCalled) {
        getIzziId();
    } else {
        console.log("onSubmitForm :: [\n" + "    IdIzzi:" + $("#IdIzzi").val()
            + "\n" + "    Email:" + $("#email").val() + "\n"
            + "    Nombre:" + $("#name").val() + "\n"
            + "    Asunto:" + $("#asunto").val() + "\n"
            + "    cpgid:" + $("#cpgid").val() + "\n" + "    nw:"
            + $("#nw").val() + "\n" + "    autosubmit:"
            + $("#autosubmit").val() + "\n" + "    Origen:"
            + $("#Origen").val() + "\n" + "]");
    }
    return true; // Siempre se envia al Chat de S1
}

function cargarCiudades(){
    /*
    var opcionInicio = document.createElement("option");
    var textoOpcion = document.createTextNode("- Seleccione ciudad -");
    opcionInicio.appendChild(textoOpcion);
    var lista = document.getElementById("ciudad");
    lista.appendChild(opcionInicio);
    */
    var ciudades = [ "ACAPULCO","AGUASCALIENTES","ALTAMIRA","AMECAMECA","BUCTZOTZ","CAMARGO","CAMPECHE","CANCUN",
        "CD. DE MEXICO","CELAYA","CHALCO","CHEMAX","CHICOLOAPAN","CHIHUAHUA","CHILPANCINGO","CHIMALHUACAN",
        "CIUDAD DEL CARMEN","CIUDAD DELICIAS","CIUDAD JUAREZ","CIUDAD MENDOZA","CIUDAD VICTORIA","COACALCO",
        "COATZACOALCOS","COATZINTLA","COBA","CORDOBA","COSOLEACAQUE","CUAUHTEMOC","CUAUTITLAN","CUAUTLA",
        "CUERNAVACA","ECATEPEC","ENSENADA","ESPITA","FORTIN DE LAS FLORES","HIDALGO DEL PARRAL","IRAPUATO",
        "IXTAPALUCA","IZAMAL","JALTIPAN DE MORELOS","LAGOS DE MORENO","LOS REYES ACOZAC","MACULTEPEC",
        "MATAMOROS","MELCHOR OCAMPO","MEOQUI","MERIDA","MEXICALI","MINATITLAN","MONTERREY","MOTUL","NANCHITAL",
        "NEZAHUALCOYOTL","NUEVO LAREDO","OAXACA","OJO DE AGUA","ORIZABA","PACHUCA","PARRILLA","PLAYA DEL CARMEN",
        "PLAYAS DEL ROSARIO","POZA RICA","PROGRESO","PUERTO VALLARTA","REYNOSA","RIO BLANCO","ROSARITO","SALTILLO",
        "SAN BUENAVENTURA","SAN JUAN DEL RIO","SAN LUIS POTOSI","SOLEDAD DE GRACIANO SANCHEZ","TAMPICO","TECAMAC",
        "TECATE","TEMAX","TEMOZON","TEOLOYUCAN","TEOTIHUACAN","TEPEXPAN","TEPOTZOTLAN","TEXCOCO","TIHUATLAN",
        "TIJUANA","TIZIMIN","TULANCINGO","TULTEPEC","TULTITLAN","UMAN","VALLADOLID","VILLAHERMOSA","XICO",
        "YAUTEPEC","ZAPOPAN","ZUMPANGO","ZUMPANGO DEL RIO"
    ];

    // Generar el resto de elementos de la lista (dinamicamente)
    for(var elem = 0; elem < ciudades.length; elem ++ ){
        var item = document.createElement("option");
        item.setAttribute("value", ciudades[elem]);
        var texto = document.createTextNode(ciudades[elem]);
        item.appendChild(texto);
        document.getElementById("ciudad").appendChild(item);
    }
}
