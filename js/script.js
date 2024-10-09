// Fetch the data from your hosted Flask app
fetch('https://your-heroku-app.herokuapp.com/data') // Update this URL
    .then(response => response.json())
    .then(data => {
        const trace = {
            x: data.dates,
            y: data.prices,
            mode: 'lines+markers',
            type: 'scatter'
        };

        const layout = {
            title: 'Gold Prices Over Time',
            xaxis: { title: 'Date' },
            yaxis: { title: 'Price (USD)' }
        };

        Plotly.newPlot('plot', [trace], layout);
    })
    .catch(error => console.error('Error fetching data:', error));
