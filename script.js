function showNotification(type, message) {
    const notificationContainer = document.getElementById('notification-container');

    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;

    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in forwards';
        notification.addEventListener('animationend', () => notification.remove());
    }, 3000);
}
