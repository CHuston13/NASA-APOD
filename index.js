

const getButton = document.getElementById("images");
const getApod = document.getElementById("APOD");
const getDate = document.getElementById("apodDate");
const getpTag = document.getElementById("apod-explain");
const geth1 = document.getElementById("apod-header");



 getButton.addEventListener("click",() => {
    const selectDate = getDate.value;
    const apiKey = "Cr7L6qTBYsBkY9u98ZpxJgM56UZghiVnTDPi26ho";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectDate}`;

fetch(apiUrl)
.then(response => response.json())

.then(data => {
    console.log(data);
    getApod.src = data.url;
    getpTag.textContent = data.explanation
    geth1.textContent = data.title
})
.catch(error => {
    console.error("error",error);
});
}

);



