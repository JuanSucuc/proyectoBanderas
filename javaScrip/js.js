

   let banderas = document.getElementById("Banderas");

function mostarBanderas(){
    if (banderas.value == "Guatemala") {
        document.getElementById("ejercicio1").style.display = "block";
        document.getElementById("ejercicio2").style.display = "none";
        document.getElementById("ejercicio3").style.display = "none";
        document.getElementById("ejercicio4").style.display = "none";
        document.getElementById("ejercicio5").style.display = "none";
    }else if(banderas.value == "Nigeria-India"){
        document.getElementById("ejercicio2").style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio3").style.display = "none";
        document.getElementById("ejercicio4").style.display = "none";
        document.getElementById("ejercicio5").style.display = "none";
    }else if(banderas.value == "Francia"){
        document.getElementById("ejercicio3").style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio2").style.display = "none";
        document.getElementById("ejercicio4").style.display = "none";
        document.getElementById("ejercicio5").style.display = "none";
    }else if(banderas.value == "Suecia"){
        document.getElementById("ejercicio4").style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio2").style.display = "none";
        document.getElementById("ejercicio3").style.display = "none";
        document.getElementById("ejercicio5").style.display = "none";
    }else if(banderas.value == "Suiza"){
        document.getElementById("ejercicio5").style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio2").style.display = "none";
        document.getElementById("ejercicio3").style.display = "none";
        document.getElementById("ejercicio4").style.display = "none";
    }
    }