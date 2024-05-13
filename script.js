window.saveDataAcrossSessions = true

function sendDataToServer(data, timestamp) {
    fetch('http://localhost:3000/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data, timestamp: timestamp }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => console.log(text))
        .catch(error => console.error('Error:', error));
}

webgazer.setGazeListener((data, timestamp) => {
    sendDataToServer(data, timestamp);
    console.log(timestamp)
}).begin()