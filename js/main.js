
$(document).ready(function () {
    $(".click").click(function () {
        $(".show").slideToggle();
        $(".hide").slideToggle();
    });
});

$(document).ready(function () {
    $(".clicked").click(function () {
        $(".show1").toggle();
        $(".hide1").toggle();
    });
});
$(document).ready(function () {
    $(".clickable").click(function () {
        $(".show2").fadeToggle();
        $(".hide2").fadeToggle();
    });
});
//Pirate Translator

const Text = document.querySelector(".search");
const button = document.querySelector("#click");
const responseDiv = document.querySelector(".pirates-result");

button.addEventListener("click", display);
const options = {
    method: 'GET',
    headers: {
        'X-Funtranslations-Api-Secret': "R4J8vGElmITc5ltlqaiLuweF"
}
}
let url= "https://api.funtranslations.com/translate/pirate.json"
function display() {
    let word = Text.value;
    Url1 = `${url}?text=${word}`
    fetch(Url1,options).then((data) => data.json()).then((data) => {
        console.log(data);
        responseDiv.innerHTML= data.contents.translated;
       
    })
  
}
// Minion Translator
const input= document.querySelector(".search-minion");
const click= document.querySelector(".clickButton");
const resultDiv = document.querySelector(".minion-result");

click.addEventListener("click", displayPhrase);
const option= {
    method: 'GET',
    headers: {
        'X-Funtranslations-Api-Secret': "IAmXQY7HKtJzul5HwP0sJAeF"
    }
}
let link = "https://api.funtranslations.com/translate/minion.json"
function displayPhrase() {
    let phrase = input.value;
    newLink = `${link}?text=${phrase}`
    fetch(newLink, option).then((res) => res.json()).then((res) => {
        console.log(res);
        resultDiv.innerHTML = res.contents.translated;

    })

}
//Shakespeare Translator
const search = document.querySelector(".search-shake");
const respond = document.querySelector(".button");
const result = document.querySelector(".shake-result");

respond.addEventListener("click", displayShake);
const info = {
    method: 'GET',
    headers: {
        'X-Funtranslations-Api-Secret': "wCcfGAN5ik75lj2DLNTHNQeF"
    }
}
let theLink = "https://api.funtranslations.com/translate/shakespeare.json"
function displayShake() {
    let words = search.value;
    Url2 = `${theLink}?text=${words}`
    fetch(Url2, info).then((data) => data.json()).then((data) => {
        console.log(data);
        result.innerHTML = data.contents.translated;

    })

}
