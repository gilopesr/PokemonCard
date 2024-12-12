async function Buscarpokemon() {
    let idPokemon = document.getElementById('id-pokemon').value


    // condição ? valor_se_verdadeiro : valor_se_falso;
    const id = idPokemon ? idPokemon : alert('Digite Um Número')

    let url = "https://pokeapi.co/api/v2/pokemon-form/"+id;
    let api = await fetch(url,{
        method: 'GET'
    })

    if (api.ok){
        let resposta = await api.json();

        console.log(resposta); //resposta da api no console

        document.getElementById('txt-name').innerHTML = resposta.name;
        document.getElementById('txt-id').innerHTML = resposta.id;
        document.getElementById('img-perfil').src = resposta.sprites.back_default;

    }
}

Buscarpokemon()

