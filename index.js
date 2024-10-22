const getJokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();

        const myJoke = document.getElementById("myjoke");
        myJoke.innerHTML = data.value;
    }
    catch (error) {
        console.error("Error fetching joke:", error);
    }
}

window.addEventListener("load", () => {
    getJokes();
});
