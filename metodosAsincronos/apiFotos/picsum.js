const btnAceptar = document.getElementById('btn_aceptar');
const checkTrue = document.getElementById('myCheck');
const valueBlur = document.getElementById('blur');
btnAceptar.addEventListener('click', list);
const url = 'https://picsum.photos/v2/list';



//LIST
function list(){
    fetch(`${url}`) //llamado al API externo
        .then( resp => {
            if (resp.ok && resp.status == 200) {
                return resp.json()

            }
        }) //obtengo la respuesta en el primer THEN
        .then(data => {
            //console.log(data);
            let grayscale = ""
            let blur = ""
            let combination = ""
            let limit = ""
            if (checkTrue.checked == true) {
                grayscale += "grayscale"
            }
            if (valueBlur.value >= 1 && valueBlur.value <= 10) {
                    blur += `blur=${valueBlur.value}`
            }

            if(limit.value >= 1 && limit.value <= 100){
                    limit += `limit=${limit.value}`
            }

            else if (checkTrue.checked == true && valueBlur.value >= 1 && valueBlur.value <= 10) {
                combination = `${grayscale}${blur}`
            }
            for (let item of data) {
                document.getElementById('contenido').innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${item.download_url}?${grayscale}&${blur}${combination} " class="card-img-top" alt="..." class="img">
                    <div class="card-body">
                        <h5 class="card-title">${item.author}</h5>
                        <p class="card-text">ID del author: ${item.id}</p>
                        <a href="${item.url}" class="btn btn-primary" target="_blank">URL</a>
                    </div>
                </div>
                `
            }
        })
        .catch(resp => console.log("Error en el llamdo de la API"))
}

/* //CHECK
function checked () {
        if (checkTrue.checked == true || valueBlur.value >= 1 && valueBlur.value <= 10) {
            list()
    } else  {

    }      
} */
    




/* (function(){
    fetch(`${url}`) //llamado al API externo
        .then( resp => {
            if (resp.ok && resp.status == 200) {
                return resp.json()

            }
        }) //obtengo la respuesta en el primer THEN
        .then(data => {
            //console.log(data);
            let grayscale = ""
            let blur = ""
            let combination = ""
            if (checkTrue.checked == true) {
                    grayscale += "grayscale"
            }
            if (valueBlur.value >= 1 && valueBlur.value <= 10) {
                    blur += `blur=${valueBlur.value}`
            }

            else if (checkTrue.checked == true && valueBlur.value >= 1 && valueBlur.value <= 10) {
                combination = `${grayscale}${blur}`
            }
            for (let item of data) {
                document.getElementById('contenido').innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${item.download_url}?${grayscale}&${blur}${combination} " class="card-img-top" alt="..." class="img">
                    <div class="card-body">
                        <h5 class="card-title">${item.author}</h5>
                        <p class="card-text">ID del author: ${item.id}</p>
                        <a href="${item.url}" class="btn btn-primary" target="_blank">URL</a>
                    </div>
                </div>
                `
            }
        })
        .catch(resp => console.log("Error en el llamdo de la API"))
}


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
}, 200);

/* //CHECK
function checked () {
        if (checkTrue.checked == true || valueBlur.value >= 1 && valueBlur.value <= 10) {
            list()
    } else  {
    }      
} */
    




/* (function(){
    fetch(`${url}`) //llamado al API externo
        .then( resp => {
            if (resp.ok && resp.status == 200) {
                return resp.json()
            }
        }) //obtengo la respuesta en el primer THEN
        .then(data => {
            //console.log(data);
            for (let item of data) {
                document.getElementById('contenido').innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${item.download_url}" class="card-img-top" alt="..." class="img">
                    <div class="card-body">
                        <h5 class="card-title">${item.author}</h5>
                        <p class="card-text">ID del author: ${item.id}</p>
                        <a href="${item.url}" class="btn btn-primary" target="_blank">URL</a>
                    </div>
                </div>
                `
            }
        })
        .catch(resp => console.log("Error en el llamdo de la API"))
}) () */






   /* function FuncRespuesta(resp) {
        console.log(resp);
        console.log("Esta es una respuesta");
    } OTRA MANERA DE HACERLO */