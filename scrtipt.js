const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const msNotifLasts = 3000;

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four', 'This is invalid data'];
const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.classList.add('show');
  }, 0);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => {
      toasts.removeChild(notif);
    }, 1000);
  }, msNotifLasts);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
