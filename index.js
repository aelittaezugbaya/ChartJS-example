let ctx = document.getElementById("myChart").getContext('2d');
let labelsC = ["Food", "Appartment", "Car"];
let values = [12, 19, 3];
let colors =[
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235,1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(0, 0, 139, 1)'
];

let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let spends = document.getElementById('spends').value;
    let value = document.getElementById('value').value;
    console.log(spends +' '+ value);
    labelsC.push(spends);
    values.push(value);
    console.log(labelsC)
    form.reset()

})
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labelsC,
        datasets: [{
            label: '# of Votes',
            data: values,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        
    }
});