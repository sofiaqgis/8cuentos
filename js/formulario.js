function onSubmit (response) {
    g_response = response;
  }
  
  
  function enviarEmail(e) {
      e.preventDefault ();
      conectarFetch();    
  }
  
    async function conectarFetch() {
  
      if (!g_response)
        {
          Swal.fire({
              icon: 'error',
              title: 'El campo de captcha es requerido',
              text: 'Por favor complete el campo.'});
          return;
        }
  
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
  
    var url = 'https://ochocuentos.com/mail.php';
      var params = '?Nombre=' + name.value + '&Email=' + email.value + '&Mensaje=' + message.value + '&Captcha=' + g_response;
      url = url + params;
      
    const response = await fetch(url, {
        method: 'GET'
      })
   
  
      if (!response.ok) 
      {
      Swal.fire({
              icon: 'error',
              title: 'Hubo un error',
              text: 'Su mensaje no pudo ser enviado.'}),
      document.getElementById('form').reset();
      }
      else
      {
      Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: '¡Gracias por contactarnos!'}),
      document.getElementById('form').reset();
      }
  
  
   }
  
  var g_response;
  let form = document.getElementById('form'); 
  let error = document.getElementById('error'); 
  error.style.visibility = 'hidden';
  form.addEventListener('submit', enviarEmail);