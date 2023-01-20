function ShowSelected(){ //funcion que invoco con el 'onchange' en el HTML
    var wrap = document.getElementById('wrapselect').value; //Obtiene el valor del Select
    var ordenTarjetas= document.getElementById('tarj');//identifico el id a modificar
    ordenTarjetas.style.setProperty("flex-wrap",wrap); //asigno la propiedad segun el Select
}