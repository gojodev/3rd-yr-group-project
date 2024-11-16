document.getElementById('notifyIcon').addEventListener('click', function () {
    const notificationBox = document.getElementById('notificationBox');
    
    // Toggle visibility of the notification box
    if (notificationBox.classList.contains('visible')) {
      notificationBox.classList.remove('visible');
      notificationBox.classList.add('hidden');
    } else {
      notificationBox.classList.add('visible');
      notificationBox.classList.remove('hidden');
    }
  });