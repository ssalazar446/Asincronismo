const app = {
    baseurl : 'https://picsum.photos/v2/list?',
    getPictures : async function (){
        const page = document.getElementById("page").value; //Select
        const cantidad = document.getElementById("limit").value; //Text
       /*  const resp = await fetch(`${this.baseurl}/list`)
        const data = await resp.json() */
        let urlFinal = app.baseurl;
        if (page > 0 && cantidad > 0 && cantidad < 100){
            urlFinal += `page=${page}&limit=${cantidad}`;
            const resp = await fetch(urlFinal)
            const data = await resp.json()
            app.renderPictures(data)
        }else {
            alert("Debe seleccionar correctamente la página y la cantidad")
        }
        
    },
    renderPictures: function(data){
        let contenidoDiv = document.getElementById('contenido');
        contenidoDiv.innerHTML = "";
        const escalaGrises = document.getElementById('myCheck').checked; //checkbox
        const blur = document.getElementById('blur').value; //Select
        let urlFoto = "";

        if(escalaGrises) 
            urlFoto += `grayscale`
        
        if(blur > 0)
            urlFoto += `&blur=${blur}`
        for (let item of data) {
            document.getElementById('contenido').innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${item.download_url}?${urlFoto}" class="card-img-top" alt="..." class="img">
                <div class="card-body">
                    <h5 class="card-title">${item.author}</h5>
                    <p class="card-text">ID del author: ${item.id}</p>
                    <a href="${item.url}" class="btn btn-primary" target="_blank">URL</a>
                </div>
            </div>
            `
        }
    }
};

document.getElementById('btn_aceptar').addEventListener('click', app.getPictures)

/* (function(){
    try {
        console.log(app.baseurl);
        app.getPictures();
    }
    catch(error){
        console.log(`Error ${error}`);
    }
})() */