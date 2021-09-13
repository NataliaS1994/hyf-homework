const btnGetGif = document.getElementById('btnGetGif');
const numberInput = document.getElementById('numberInput');
const displayResult = document.getElementById("searchInput");

btnGetGif.addEventListener("click", getDataFromGify);
numberInput.addEventListener("input", limitNumberOfGifs);

let imgUrlArray;

function getDataFromGify() {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput) {
        displayResult.innerHTML = "Processing"
        const url = `https://api.giphy.com/v1/gifs/search?api_key=TiUGh7M7GYEDMAHpGFi43098D7Ort4ij&q=${searchInput}&lang=en`
        fetchGifs(url);
    } else {
        displayResult.innerHTML = "Specify search word first"
    }
}

function limitNumberOfGifs() {
    const number = inputNumber.value;
    if (!isNaN(number) && number > 0) {
        const limitedUrlsArray = imgUrlArray.slice(0, number);
        renderGifs(limitedUrlsArray);
    }
}

function fetchGifs(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            imgUrlArray = data.data.map(x => x.images.fixed_height_small.url);
            renderGifs(imgUrlArray);
        });
}

function renderGifs(urlsArray) {
    displayResult.innerHTML = "";
    urlsArray.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        displayResult.appendChild(img);
    })
} 