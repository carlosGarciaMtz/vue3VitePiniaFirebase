$(document).ready(function () {

    if( localStorage )
    localStorage.setItem( "typeProduct", "Flex" );
            
    let uri = window.location.origin;
    let urlCallMe =     uri +':9091/lead/callMe';

    $("#enviar_pp").click(function (e) {

        let telefono = $("input[name='flex_ayuda_telefono']").val();

        
        if( telefono !== ""  && $("#flex_ayuda_telefono").valid() && !NumberConsecutiveValidator.test( telefono ) ){
            // alert("ajax execute");
            $.ajax({
                crossOrigin: true,
                cache: false,
                headers: {
                    'Access': '*/*',
                },
                url: urlCallMe,
                data: { telefono: telefono, 'canal':'IzziFlex'},
                type: 'POST',
                async: false,
                success: function (response) {
                    //console.log(response);
                    console.log("Respuesta de envio para que llamen");
                }
            });
        } 
        else {
            
            if( NumberConsecutiveValidator.test( telefono ) )
                alert("Número telefónico inválido.");
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
});
