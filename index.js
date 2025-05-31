async function Buscarpokemon() {
    let idPokemon = document.getElementById('id-pokemon').value

    const id = idPokemon ? idPokemon : alert('Digite Um Número')

    let url = "https://pokeapi.co/api/v2/pokemon-form/"+id;
    let api = await fetch(url,{
        method: 'GET'
    })

    if (api.ok) {
        let resposta = await api.json();

        console.log(resposta);

        document.getElementById('txt-name').innerHTML = resposta.name;
        document.getElementById('txt-id').innerHTML = resposta.id;
        document.getElementById('img-perfil').src = resposta.sprites.front_default;

        if (resposta.types && resposta.types.length > 0) {
            document.getElementById('txt-tipo').innerHTML = resposta.types[0].type.name;
        } else {
            document.getElementById('txt-tipo').innerHTML = 'N/A';
        }

        const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/'+id;
        let speciesApi = await fetch(speciesUrl, {
            method: 'GET'
        });

        if (speciesApi.ok) {
            let speciesResposta = await speciesApi.json();


            if (speciesResposta.color && speciesResposta.color.name) {
                document.getElementById('txt-cor').innerHTML = speciesResposta.color.name;
            } else {
                document.getElementById('txt-cor').innerHTML = 'N/A';
            }
        } else {
            console.error("Erro ao buscar dados da espécie:", speciesApi.status);
            document.getElementById('txt-cor').innerHTML = 'Erro';
        }

    } else {
        
        document.getElementById('txt-name').innerHTML = '';
        document.getElementById('txt-id').innerHTML = '';
        document.getElementById('img-perfil').src = 'perfil.png';
        document.getElementById('txt-tipo').innerHTML = '';
        document.getElementById('txt-cor').innerHTML = '';
    }
}