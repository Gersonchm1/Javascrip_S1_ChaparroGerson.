

function fetchPoke(){
    let xhr = new XMLHttpRequest();
    let numPokemon=101;
    let link= `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;
    
    xhr.open('GET',link,true);
    
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            let respuesta = JSON.parse(this.responseText);
            
            displayPoke(respuesta);
        }
    };
    
    xhr.send();
}

fetchPoke();

function displayPoke(data){
    let informacionHTML = document.getElementById('daticos');
   
    const gif = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    const imagenEstatica = data["sprites"]["front_default"];
    if (gif) {
        
        informacionHTML.innerHTML = `
        <div class="pokemon-container">
                <img class="pokemon-image" src="${gif}" alt="GIF de ${data["name"]}" />
               <p class="pokemon-name">${data["name"]}</p> <p class="pokemon-num">${data["id"]}-</p>
        </div>
            
        
            
            
        `}
        else if (imagenEstatica) {
            informacionHTML.innerHTML= `
                
                <div class="pokemon-container">
                    <img class="pokemon-image" src="${imagenEstatica}" alt="Imagen de ${data["name"]}" />
                    <p class="pokemon-name">${data["name"]}</p> <p class="pokemon-num">${data["id"]}-</p>
                </div>
            `; }
       
    
}
document.getElementById('pokemon-input').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        const query = event.target.value.trim(); 
        if (query) fetchPokemon(query); 
    }
});
async function fetchPokemon(query) {
    const informacionHTML = document.getElementById('daticos');
    try {
       
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
        

        const data = await response.json();

        
        displayPoke(data);
    } catch (error) {
        informacionHTML.innerHTML = `<p>Pokémon no encontrado. Intenta con otro nombre o ID.</p>`;
    }
}








