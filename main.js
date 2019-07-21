//Definiçao do menu
var menuInicio = document.querySelector ("#inicio");

var menuCursos = document.querySelector ("#cursos");

var divInicio = document.querySelector ("#divInicio");

var divCursos = document.querySelector ("#divCursos");

//Capturando a div opcoes
var opcoes = document.querySelector (".opcoes");

//Travar o conteudo da div cursos
divCursos.style.display = "none";

//Travando os videos
var ldp = document.querySelector (".ldp");
var ppi = document.querySelector (".ppi");
var bdd = document.querySelector (".bdd");

ldp.style.display = "none";
ppi.style.display = "none";
bdd.style.display = "none";

//Eventos do menu
menuInicio.addEventListener ("click", function (){
    
    divCursos.style.display = "none";
    divInicio.style.display = "inline-block";
    menuInicio.style.backgroundColor = "rgb(28, 146, 221, .5)";
    menuCursos.style.backgroundColor = "rgb(69, 173, 239, .5)";
    
});

menuCursos.addEventListener ("click", function (){
    
    divInicio.style.display = "none";
    divCursos.style.display = "inline-block";
    menuCursos.style.backgroundColor = "rgb(28, 146, 221, .5)";
    menuInicio.style.backgroundColor = "rgb(69, 173, 239,.5)";
    
    opcoes.style.display = "block";
    ldp.style.display = "none";
    ppi.style.display = "none";
    bdd.style.display = "none";
    
    
});

//Criando eventos dos cursos
var btnLdp = document.querySelector ("#ldp");
var btnPpi = document.querySelector ("#ppi");
var btnBdd = document.querySelector ("#bdd");

btnLdp.addEventListener ("click", function (){
    
    ldp.style.display = "inline-block";
    ppi.style.display = "none";
    bdd.style.display = "none";
    opcoes.style.display = "none";
    
});

btnPpi.addEventListener ("click", function (){
    
    ppi.style.display = "inline-block";
    ldp.style.display = "none";
    bdd.style.display = "none";
    opcoes.style.display = "none";
    
});

btnBdd.addEventListener ("click", function (){
    
    bdd.style.display = "inline-block";
    ppi.style.display = "none";
    ldp.style.display = "none";
    opcoes.style.display = "none";
    
});
