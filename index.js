let ctx = document.getElementById("myChart").getContext('2d');
let labelsC = ["Food", "Appartment", "Car"];
let value = [12, 19, 3];
let colors =[
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235,1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(0, 0, 139, 1)'
];
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labelsC,
        datasets: [{
            label: '# of Votes',
            data: value,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        
    }
});