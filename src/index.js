import cipher from './cipher.js';

document.addEventListener("DOMContentLoaded", function() {
  const botonBorrar = document.getElementById("borrardatos");
  const cifrar = document.getElementById("cifrar")
  const descifrar = document.getElementById("descifrar")
  const resultadoCifrar = document.getElementById("resultadoCifrar")
  const resultadoDescifrar = document.getElementById("resultadoDescifrar")
  const clave  = document.getElementById("clave")

  botonBorrar.addEventListener("click", function() {
    cifrar.value ="";
    descifrar.value ="";
    resultadoCifrar.innerHTML ="mensaje cifrado";
    resultadoDescifrar.innerHTML ="mensaje descifrado";
    clave.value ="1";
  });
  const div = document.getElementById("clave");

  function capturaNumero(){
  // alert("inputType.vale);
  //console.log('numero',div.value);

    return div.value
  }
  div.addEventListener("click", capturaNumero)


  const boton = document.getElementById("cifrarval");
  const btn= document.getElementById("descifrarval");
  const type= document.getElementById("descifrar");
  const inputType = document.querySelector("#cifrar")
  function capturaText(){
  
  //console.log(inputType.value);
  //console.log(type.value);
  //console.log(btn.value);
    // console.log(boton.value);
  }
  boton.addEventListener("click", capturaText)
  btn.addEventListener("click", capturaText)
  type.addEventListener("click", capturaText)
  inputType.addEventListener("click", capturaText)
  btn.addEventListener("click", function(){
    //resultadoDescifrar.value = cipher.decode( parseInt(div.value), type.value );
    resultadoDescifrar.innerHTML = cipher.decode( parseInt(div.value), type.value );
  //console.log('numero de desplazamiento',parseInt(div.value))
  //console.log('texto ', type.value )
    //console.log('resultado',resultadoDescifrar.value )
  });
  boton.addEventListener("click", function() {
    // resultadoCifrar.value = cipher.encode( parseInt(div.value), inputType.value );
    resultadoCifrar.innerHTML = cipher.encode( parseInt(div.value), inputType.value );
    // console.log('numero de desplazamiento',parseInt(div.value))
    //console.log('texto ', inputType.value )
    // console.log('resultado',resultadoCifrar.value )
  });
});   



