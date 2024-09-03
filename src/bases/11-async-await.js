const getImagen = async() => {
    try {
        const apiKey = 'JG3W9QTiW9OyrYca7h55ck6lLcNR5CgC';
        const apiUrl = 'https://api.giphy.com/v1/gifs/random'

        const respt = await fetch(`${apiUrl}?api_key=${apiKey}`)
        const { data } = await respt.json()

        const { url } = data.images.original;
        console.log(url)

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error('Error:', error);
    }
}

getImagen();

// const apiKey = 'JG3W9QTiW9OyrYca7h55ck6lLcNR5CgC';
// const apiUrl = 'https://api.giphy.com/v1/gifs/random'

// const peticion = fetch(`${apiUrl}?api_key=${apiKey}`)

// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         console.log(url)

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);