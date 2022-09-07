export const getGifs = async(category) => {

    

    const url = `https://api.giphy.com/v1/gifs/search?api_key=yXQw6nwifsWlA3Aos7IUC54xEddNtr9J&q='${ category }'&limit=10`;
    console.log(url);
    const resp  = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}