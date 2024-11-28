async function Buscarpokemon() {
    let idPokemon = document.getElementById('id-pokemon').value

    const id = idPokemon ? idPokemon : alert('Digite Um Número')

    let url = "https://pokeapi.co/api/v2/pokemon-form/"+id;
    let api = await fetch(url,{
        method: 'GET'
    })

    if (api.ok){
        let resposta = await api.json();
        document.getElementById('txt-name').innerHTML = resposta.name; //name é a resposta da api
        document.getElementById('txt-id').innerHTML = resposta.id;
        document.getElementById('img-perfil').src = resposta.sprites.back_default;

    }
}

Buscarpokemon()

