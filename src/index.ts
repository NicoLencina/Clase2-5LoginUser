//datos traidos del HTML
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let ok = document.getElementById("buttonOk");
//creo Usuario y contraseña
let user: string = "Nks";
let password1: string = "4444";
//se inicia cuando el usuario da click
ok.addEventListener("click", () => {
  //guardo los valores extraidos el HTML en nuevas variables
  let usuarioIngresado: string = usuario.value;
  let passwordIngresada: string = password.value;
  //por medio de comparaciones logicas comparo si el usuario esta registrado
  if (user === usuarioIngresado && password1 === passwordIngresada) {
    console.log("Bienvenido");
  }
  if (user === usuarioIngresado && !(password1 === passwordIngresada)) {
    console.log("Contraseña Incorrecta");
  }
  if (!(user === usuarioIngresado) && password1 === passwordIngresada) {
    console.log("El usuario o clave son incorrectos");
  }
});
//En caso de cancelar el usuario que se resete los input

//Salen muchos errores en sambox , pa la proxima sera
