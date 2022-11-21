

   let banderas = document.getElementById("Banderas");

   let Guatemala = document.getElementById("ejercicio1");
   let NigeriaIndia = document.getElementById("ejercicio2");
   let Francia = document.getElementById("ejercicio3");
   let Suecia = document.getElementById("ejercicio4");
   let Suiza = document.getElementById("ejercicio5");

function mostarBanderas(){
    if (banderas.value == "Guatemala") {
        Guatemala.style.display = "block";
        NigeriaIndia.style.display = "none";
        Francia.style.display = "none";
        Suecia.style.display = "none";
        Suiza.style.display = "none";
    }else if(banderas.value == "Nigeria-India"){
        NigeriaIndia.style.display = "block";
        Guatemala.style.display = "none";
        Francia.style.display = "none";
        Suecia.style.display = "none";
        Suiza.style.display = "none";
    }else if(banderas.value == "Francia"){
        Francia.style.display = "block";
        Guatemala.style.display = "none";
        NigeriaIndia.style.display = "none";
        Suecia.style.display = "none";
        Suiza.style.display = "none";
    }else if(banderas.value == "Suecia"){
        Suecia.style.display = "block";
        Guatemala.style.display = "none";
        NigeriaIndia.style.display = "none";
        Francia.style.display = "none";
        Suiza.style.display = "none";
    }else if(banderas.value == "Suiza"){
        Suiza.style.display = "block";
        Guatemala.style.display = "none";
        NigeriaIndia.style.display = "none";
        Francia.style.display = "none";
        Suecia.style.display = "none";
    }
    }