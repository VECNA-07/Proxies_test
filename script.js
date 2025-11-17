// Run this script when the window is finished loading
window.addEventListener('load', () => {
    // Get the HTML elements we want to update
    const ipElement = document.getElementById('ip-address');
    const latencyElement = document.getElementById('latency');
    const locationElement = document.getElementById('location');

    // Record the start time (in milliseconds)
    const startTime = performance.now();

    // Fetch data from the IP API
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            // Got the data! Record the end time
            const endTime = performance.now();
            
            // Calculate latency
            const latency = Math.round(endTime - startTime);

            // Update the HTML text
            ipElement.textContent = data.ip;
            latencyElement.textContent = `${latency} ms`;
            locationElement.textContent = `${data.city}, ${data.country_name}`;

            // Change the text color to green to show success
            ipElement.style.color = '#1e8e3e';
            latencyElement.style.color = '#1e8e3e';
            locationElement.style.color = '#1e8e3e';
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching IP:', error);
            ipElement.textContent = 'Error';
            latencyElement.textContent = 'Error';
            locationElement.textContent = 'Error';
        });
});