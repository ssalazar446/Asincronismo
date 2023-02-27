let labels1 = ['SI', 'NO'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['SI', 'NO'],
        datasets: [ {
            data: [69, 31],
            backgroundColor: ['#c8b9ff', '#b9ffc8']
        }]
    },
    options: {
        title: {
            text: "¿Conoce las nuevas ofertas academicas del SENA?",
            display: true
        }
    }
});

let labels2 = ['ADSI', 'HSEQ', 'Mantenimiento Automotriz', 'Creación de videojuegos con UNITY'];
let data2 = [199.6, 160.3, 126.3, 180];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "De la siguiente lista de ofertas, ¿Cuál le llamas más la atención?",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels3 = ['Lógica de programación', 'Historia de la programación', 'Hoisting', 'Metologias Agiles', 'Figma'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Conozco',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 10, 32, 20, 44]
          }
        ]
    },
    options: {
        title: {
            text: "¿Qué conocimientos previos tiene del programa ADSI?",
            display: true
        }
    }
});

let labels4 = ['18 - 25', '26 - 30', '31 - 35', '36 - 40',  'Maroyes de 40'];
let data4 = [83, 67, 20, 32, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Rango de edades más interesados en el programa ADSI",
            display: true
        }
    }
});