
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
const Text = document.querySelector(".search-shake");
const button = document.querySelector(".button");
const divi = document.querySelector("shake-result");

button.addEventListener("click", translate);
let url1 = "https://api.funtranslations.com/translate/shakespeare.json"
function translate() {
    let input = Text.value;
    newUrl = `${url1}?text=${input}`
    fetch(newUrl).then((data) => data.json()).then((data) => {
        console.log(data);
        divi.innerHTML = data.contents.translated;
    })
    response = request.get(url)
    if (response.status === 429) {
        console.log('Rate limited. Waiting to retry…')
        wait(response.retry - after)
        retry(url1)
    }
}
/*Minion Translator
const inputText = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const div = document.querySelector(".show");

btn.addEventListener("click", translate);
let url = "https://api.funtranslations.com/translate/pig-latin.json"
function translate() {
    let input = inputText.value;
    newUrl = `${url}?text=${input}`
    fetch(newUrl).then((data) => data.json()).then((data) => {
        console.log(data);
        div.innerHTML = data.contents.translated;
    })
    response = request.get(url)
    if (response.status === 429) {
        console.log('Rate limited. Waiting to retry…')
        wait(response.retry - after)
        retry(url)
    }
}
//Shakespeare Translator
const inputText = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const div = document.querySelector(".show");

btn.addEventListener("click", translate);
let url = "https://api.funtranslations.com/translate/pig-latin.json"
function translate() {
    let input = inputText.value;
    newUrl = `${url}?text=${input}`
    fetch(newUrl).then((data) => data.json()).then((data) => {
        console.log(data);
        div.innerHTML = data.contents.translated;
    })
    response = request.get(url)
    if (response.status === 429) {
        console.log('Rate limited. Waiting to retry…')
        wait(response.retry - after)
        retry(url)
    }
}*/