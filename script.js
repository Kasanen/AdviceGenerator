// Nappi
document.getElementById("circle").addEventListener("click", clicked);

async function clicked() {
    console.log("clicked");
    let data = await fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => { return data });

    console.log(data);

    document.getElementById("adviceNum").innerText = "ADVICE #" + (data.slip.id);
    document.getElementById("advice").innerText = `"${data.slip.advice}"`;
}