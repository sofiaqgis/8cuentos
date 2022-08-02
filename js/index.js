let miFormulario = document.getElementById('form'); 
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

miFormulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
    e.preventDefault ()
    sendEmail()
   }

function sendEmail() {

  Email.send({
    SecureToken: "432ea85a-38fc-4f03-837a-14108b0bd30b",
    To : 'ochocuentos@gmail.com',
    From : "you@isp.com",
    Subject : `${asunto}`,
    Body : `Nombre: ${nombre.value} Correo electronico ${email.value} Asunto: ${asunto.value} Mensaje: ${mensaje.value}`
}).then(
   alert("Mensaje enviado")
);


}
  

