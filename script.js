const url = 'https://pokeapi.co/api/v2/pokemon'
let searchData = []

fetch(url)
.then (response => response.json())
.then (data => {
    searchData = data.results
    showList(searchData)
}
)
.catch((error)=>{alert(error)})


function showList(array) {
    const container = document.getElementById("list");
    container.innerHTML = "";
   array.forEach((element) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(element.name));
      container.appendChild(li);
    });}    