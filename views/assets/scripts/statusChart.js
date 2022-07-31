const ctx_host = $("#statusChart");

let chart_host = new Chart(ctx_host, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            label: "使用率",
            data: [8.0, 9.4, 11.9, 15.4, 21.1, 23.4, 26.4, 28.0, 25.9, 20.5, 14.9, 10.3],
            borderColor: '#ff6347',
            backgroundColor: '#ff6347',
        }],
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
                position: 'top',
                display: true,
                text: 'CPU使用率'
            },
            legend: {
                display: false,
                position: "bottom"
            },
        },
        scales: {
            y: {
                min: 0,
                max: 100,
                ticks: {
                    beginAtZero: true,
                    stepSize: 25
                }
            }
        },
    },
    
})