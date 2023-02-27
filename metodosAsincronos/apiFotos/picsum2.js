(function(){
    document.getElementById('btn_aceptar').addEventListener("click", cargarDatos);

    function cargarDatos(){
        const page = document.getElementById('page').value; //Select
        const cantidad = document.getElementById('limit').value; //text

        let urlFinal = "https://picsum.photos/v2/list?";

        if (page > 0 && cantidad > 0 && cantidad < 100) {
            urlFinal += `page=${page}&limit=${cantidad}`;
            renderFotos(urlFinal)
        } else {
            alert('Debe seleccioner correctamente la página y la cantidad')
        }
    }

    function renderFotos(url){
        fetch(`${url}`)
        .then(resp => {
            if(resp.ok && resp.status == 200){
                return resp.json();
            }
        })
        .then(data =>{
            let contenidoDiv = document.getElementById('contenido');
            contenidoDiv.innerHTML = "";
            const escalaGrises = document.getElementById('myCheck').checked; //checkbox
            const blur = document.getElementById('blur').value; //Select
            let urlFoto = "";

            if(escalaGrises) 
                urlFoto += `grayscale`
            
            if(blur > 0)
                urlFoto += `&blur=${blur}`
        
            for(let item of data){
                contenidoDiv.innerHTML += `
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
        })
        .catch(error => {console.log(`Error en API ${error}`);
        })
    }
    
})()

