// !!!fix this code this code will break and fail routes do not work!!!

// code for the user to log in 
const loginFormHandler = async (event) => {
  //prevents default form behavior from happening
  event.preventDefault();

  //gets user name as well as password from the login form 
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    // Send a POST request to the api 
    const response = await fetch('/api/members/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/'); // if sucessful user will be redirected to home page 
    } else {
      console.log("your code failed for the login button. check ou ./js/login.js line 14")
      alert(response.statusText);
    }
  }
};

// code for user to sign up and make a unc-tech-blog account 
const signupFormHandler = async (event) => {


  event.preventDefault();

  const username = document.querySelector('#username').value.trim();

  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    //later change the route to '/api/members/signup'
    const response = await fetch('/api/members/', {
      method: 'POST',
      body: JSON.stringify({ username, password}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {



      // if account is created make second request to log in
      const response = await fetch('/api/members/login', {
       method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard'); // if sucessful user will be redirected to home page 
      } else {
        console.log("your code failed for the login button. check ou ./js/login.js line 14")
        alert(response.statusText);
      }



      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.submit-form')
  .addEventListener('submit', signupFormHandler);
