(function($) {

  $.fn.callMe = function(options) {
        var buttonCall = this;
        var textNumber = options.textNumber;
        var formCall = options.formCall;

        // formCall.valid = function(){ return true;};
        buttonCall.click(function (event) {


            let telefono = textNumber.val();
            // let telefono = $("#flex_landingccflex1_telefono").val();

            if( telefono !== ""  && formCall.valid() && !NumberConsecutiveValidator.test( telefono ) ){
                if (event) event.preventDefault();
                // alert("ajax execute");

                options.fSendCallBack( telefono );
            }
            else {

                if( NumberConsecutiveValidator.test( telefono ) ){
                    alert("Número telefónico inválido.");
                    if (event) event.preventDefault();
                }
                // var temp = $("#flex_ayuda_telefono").val();
                // alert( temp );
                // $("#flex_ayuda_telefono").attr("placeholder", temp );
                // $("#flex_ayuda_telefono").val( "" );
                // $("#flex_ayuda_telefono").valid();
                // $("#flex_ayuda_telefono-error").append("Número telefónico inválido.");
                // var iEl = '<label id="flex_crearcuenta_correo-error" class="error" for="flex_crearcuenta_correo">Debe ser un correo válido.</label>';
                // $("#flex_ayuda_telefono").parent().append( iEl );
                // $("#flex_ayuda_telefono").val( temp );
            }
        });

  }
})(jQuery);


$(document).ready(function () {

    if( localStorage )
        localStorage.setItem( "typeProduct", "Pocket" );

    $("#sendCall").callMe({"fSendCallBack":fSendCallMeNew,"textNumber":$("#flex_landingccpocket1_telefono"),"formCall":$("#flex_landingccpocket1_form")});
    $("#sendCall2").callMe({"fSendCallBack":fSendCallMeNew,"textNumber":$("#flex_landingccpocket2_telefono"),"formCall":$("#flex_landingccpocket2_form")});
    $("#sendCallMobile").callMe({"fSendCallBack":fSendCallMeNew,"textNumber":$("#landingform_tel"),"formCall":$("#landing_llamame_movil")});

    function fSendCallMeNew( telefono ){
        axios({
            "method": "GET",
            "url": "https://dev.izziapiweb.mx/api/v1/address/GetCallerAddress",
            "data": {},
            }
        ).then(result => {
          let address = result.data.caller.address;
          axios({
              "method": "POST",
              "url": "https://dev.izziapiweb.mx/api/v1/CallmeGenesysRegister",
              "data": {
              	"phone":telefono,
              	"address":address,
              	"pageUrl":"izziflex.mx/pocket1"
              }
            },
          ).then(result => {
            console.log( result );
            document.getElementById('btnModal').click();
          }, error => {
              console.log( 'ERROR CallmeGenesysRegister' );
              document.getElementById('btnModalError').click();
          });
        }, error => {
            console.log( 'ERROR GetCallerAddress' );
        });
    }
    function fSendCall( telefono ){
        var _name = (function(){
                        var d = new Date();
                        var str = d.getFullYear();
                        str = str+''+formatMonth(d.getMonth());
                        str = str + putZero(d.getDate());
                        str = str + putZero(d.getHours());
                        str = str + putZero(d.getMinutes());
                        str = str + putZero(d.getSeconds());
                        return str;
                        function formatMonth ( n ){
                        return putZero( ++n );
                        }
                        function putZero (n){
                        return n <10? '0'+n: n;
                        }
                })();

        var _canal = 'llamame';
        var _flujo = 'pocket1';


        axios({
            "method": "POST",
            "url": "https://izzi.mx/chats1/chats1/generateRightNowIncident",
            "data": {
                "contrato": "",
                "nombre": _name,
                "paterno": "",
                "telefono": telefono,
                "email": _name+'@izzi.mx',
                "mensaje": "El cliente "+_name+" desea contratar servicio, desea que le llamen al siguiente numero: local "+telefono,
                "idIzzi": "",
                "canal": _canal,
                "utm": _utm,
                "asunto": "Landing",
                "flujo": _flujo
            }, crossdomain: true },

        ).then(result => {
            var respS1 = result.data;
            console.log('Response generateRightNowIncident S1:');
            console.log( respS1 );


            $.ajax({
                type : 'POST',
                url : "https://www.izzi.mx/chats1/chats1/saveContactEvent",
                dataType : "json",
                async: false,
                data : {
                    correo : _name+'@izzi.mx',
                    nombre : _name,
                    canal : _canal,
                    telefono : telefono,
                    contrato : '',
                    flujo: _flujo,
                    utm:  _utm,
                    asunto : 'Landing',
                    idS1:respS1,

                },
                cache : false,
                crossDomain : false,
                success : function(data) {
                    idIzzi = data.idEvento;

                    console.log("saveContactEvent :: [izziID = "+ idIzzi + "]");


                    var urlCallMe = env.serverURL + "/lead/callMe";

                    $.ajax({
                        crossOrigin: true,
                        cache: false,
                        headers: {
                            'Access': '*/*',
                        },
                        url: urlCallMe,
                        data: { telefono: telefono, 'canal':_canal},
                        type: 'POST',
                        async: false,
                        success: function (response) {
                            console.log("Respuesta de envio para que llamen");
                            console.log(response);
                        },
                        error : function(data) {
                            console.error("ERROR: Al invocar lead/callMe");
                        }
                    });
                },
                error : function(data) {
                    console.error("ERROR: Al invocar /chats1/saveContactEvent]");
                }
            });

            document.getElementById('btnModal').click();

        }, error => {
            console.log( 'ERROR S1' );
        });


    }
});
