document.getElementById('notifyIcon').addEventListener('click', async function () {
  async function priceAlert() {
    try {
        const response = await fetch('https://pricealert-ieevug7ulq-nw.a.run.app', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

  const stockTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"];
  const cryptoTickers = ["BTC-USD", "ETH-USD", "DOGE-USD"];
  const notificationBox = document.getElementById('notificationBox');

  // Toggle visibility of the notification box
  if (notificationBox.classList.contains('visible')) {
      notificationBox.classList.remove('visible');
      notificationBox.classList.add('hidden');
      notificationBox.innerHTML = ''; // Clear alerts when hidden
  } else {
        // Make the notification box visible
        notificationBox.classList.add('visible');
        notificationBox.classList.remove('hidden');

        const alertData = await priceAlert();
        console.log(alertData); 

        const cryptoAlerts = alertData.cryptoAlerts || [];
        const stockAlerts = alertData.stockAlerts || [];

        // Format alerts as HTML
        let notificationContent = `<h4>Crypto Alerts</h4>`;
        if (cryptoAlerts.length > 0) {
            notificationContent += `<ul>`;
            cryptoAlerts.forEach(alert => {
                notificationContent += `<li>${alert}</li>`;
            });
            notificationContent += `</ul>`;
        } else {
            notificationContent += `<p>No crypto alerts available.</p>`;
        }

        notificationContent += `<h4>Stock Alerts</h4>`;
        if (stockAlerts.length > 0) {
            notificationContent += `<ul>`;
            stockAlerts.forEach(alert => {
                notificationContent += `<li>${alert}</li>`;
            });
            notificationContent += `</ul>`;
        } else {
            notificationContent += `<p>No stock alerts available.</p>`;
        }

        // Update the notification box
        notificationBox.innerHTML = notificationContent;
      
  }
});

