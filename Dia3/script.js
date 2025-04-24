
let currentPokemonId = null



function displayPoke(data){
    let informacionHTML = document.getElementById('daticos');
    currentPokemonId = data.id; 
   
    const gif = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    const imagenEstatica = data["sprites"]["front_default"];
    let imagenSrc = gif ? gif : imagenEstatica;
    const altText = gif ? `GIF de ${data["name"]}` : `Imagen de ${data["name"]}`;
   
        
        informacionHTML.innerHTML = `
        <div class="pokemon-container">
                <img class="pokemon-image" src="${gif}" alt="GIF de ${data["name"]}" />
               <p class="pokemon-name">${data["name"]}</p> <p class="pokemon-num">${data["id"]}-</p>
        </div>
            
        
            
       
    `;
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
       
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        

        const data = await response.json();

        
        displayPoke(data);
    } catch (error) {
        informacionHTML.innerHTML = `<p>Pokémon no encontrado. Intenta con otro nombre o ID.</p>`;
    }
}
function loadPreviousPokemon() {
    if (currentPokemonId > 1) {
        fetchPokemon(currentPokemonId - 1);
    }
}

function loadNextPokemon() {
    if (currentPokemonId < 1010) {
        fetchPokemon(currentPokemonId + 1);
    }
}

document.getElementById('botoncito').addEventListener('click', loadPreviousPokemon);
document.getElementById('botoncito2').addEventListener('click', loadNextPokemon);


fetchPokemon(1);







