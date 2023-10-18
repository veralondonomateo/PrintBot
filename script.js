


    // Obtén una referencia al botón "Entrar a la lista"
    var botonEntrar = document.querySelector('.my-form__button');

    // Obtén referencias a las pantallas
    var pantalla1 = document.getElementById('pantalla1');
    var pantalla2 = document.getElementById('pantalla2');

    // Agrega un evento click al botón
    botonEntrar.addEventListener('click', function(event) {
        // Evita que el formulario se envíe y la página se recargue
        
        event.preventDefault();
        
        // Oculta la primera pantalla y muestra la segunda
        pantalla1.style.display = 'none';
        pantalla2.style.display = 'block';
    });

    var botondevolverse = document.getElementById("botonvolver")

    botondevolverse.addEventListener('click', function(){
        
        pantalla1.style.display = 'block';
        pantalla2.style.display = 'none';
    });

    function SendFormGoogleSheets (){
        $.ajax({
          url:'https://script.google.com/macros/s/AKfycbwjHIoDQDRa0mp8vjfQYaANEqT5xQIp_GbNyAx_Id5eXAT7kyIwYkPOOwanMsgGzHV9/exec',
          type:'post',
          data:$("#my-form").serializeArray(),
          success: function(){
            alert("Registro exitoso")
          },
          error: function(){
            alert("Error en el Registro :(")
          }
      });
    }