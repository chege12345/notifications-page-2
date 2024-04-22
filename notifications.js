 const allRead = document.querySelector('.js-readAll');
 const readButton = document.querySelectorAll('.js-red-dot');
 const notificationSection = document.querySelectorAll('.js-notification-section');
 const notificationCount = document.querySelector('.js-notification-count');
 
 
 function readNotifications(){
  readButton.forEach(button => button.classList.remove('red-dot'));
  notificationSection.forEach( section => section.classList.add('notification-section-2'));
  notificationCount.innerHTML = '0';
}

allRead.addEventListener('click', readNotifications);