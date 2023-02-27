document.querySelector("#lista_paises").addEventListener('change', infocountry);
const url = 'https://restcountries.com/v3.1';
setCountries();


function setCountries () {
    console.log('Set countries V3.1')
    fetch(`${url}/all`)
    .then(resp => resp.json()) //Se convierte la respuesta a JSON
    .then(data => {             //Se obtiene los datos en formato JSON
        let htmlOptions = "";
        // for (let item of data) {
        //     document.getElementById("lista_paises").innerHTML += `<option value="${item.ccn3}">${item.name.common}</option>    `
        // }
        data.map((item)=> {
            return htmlOptions += `<option value="${item.ccn3}">${item.name.common}</option>`
        });
        document.getElementById("lista_paises").innerHTML = htmlOptions;
    })
}

function infocountry() {
    console.log("Info Pais...");
    fetch(`${url}/alpha/${this.value}`)
    .then(resp => {
        if (resp.ok) {
            return resp.json()
        } else {
            throw new Error ("Error en API")
        }
    })
    .then(data => {
        console.log(data[0].name.common);
        const tabla_paises= document.getElementById('tabla_paises');
        tabla_paises.innerHTML += 
        `<tr>
            <td><img src="${data[0].flags.png}" width="150"></td>
            <td>${data[0].name.common}</td>
            <td>${data[0].region}</td>
            <td>${data[0].population}</td>
            <td>${data[0].area}</td>
            <td><a href="${data[0].maps.googleMaps}" target="_blank">Google Maps</a></td>
            <td>${data[0].borders}</td>
          
        </tr>`;
    })
}