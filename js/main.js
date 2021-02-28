// Dom Elements 
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

  //  show Time
  function showTime() {
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    // 12hr format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

  }

  // ADD ZERO FUNCTION
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
    
  }

  // Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();  

    if(hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      greeting.textContent = 'Good Morning';
      document.body.style.color = 'white';
    } else if(hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
      greeting.textContent = 'Good Afternoon';
    } else {
      // evenning
      document.body.style.backgroundImage = "url('../img/evening.jpg')";
      greeting.textContent = 'Good Evening';
      document.body.style.color = 'white';
    }
}

// Get Name function 
function getName() {
  if(localStorage.getItem('name') === null) {
   name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Get Focus function
  // Run
  showTime();
  setBgGreet();
  getName();