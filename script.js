const country = document.getElementById('country')
const search = document.getElementById('search')

search.addEventListener('submit', (event) => {
    event.preventDefault()
    const url = `https://xeno-canto.org/api/2/recordings?query=cnt:${country.value}`
    console.log(url)
    let searchData = []

    fetch(url)
        .then(response => response.json())
        .then(data => {
            searchData = data.recordings

            const randomIndex = Math.floor(Math.random() * searchData.length);
            const randomElement = searchData[randomIndex];
            const randomElementSound = randomElement.file

            function audioPlayer() {
                const container = document.getElementById("audio");
                container.innerHTML = "";
                container.innerHTML += `
                <br>
                <audio id="audioPlayer" controls autoplay>
                <source src=${randomElementSound}>
                </audio>
                `
            }

            audioPlayer()

            function showData() {
                const container = document.getElementById("list");
                container.innerHTML = "";
                container.innerHTML +=`
                <li><b>Name:</b> ${randomElement.en}</li>
                <li><b>Stage:</b> ${randomElement.stage}</li>
                <li><b>Location:</b> ${randomElement.loc}</li>
                <li><b>Type:</b> ${randomElement.type}</li>
                `
                }

            showData()
        }
        )
        .catch((error) => { alert('Try Again') })

})
