//this event viewer watch's if member hits the new post button

//var mainEl = document.getElementById("main");

const dashboardFormHandler = async (event) => {
  console.log("!!!!!made it to dashboard formhandler!!!!");
  event.preventDefault();
  /*
  const response = await fetch('/newpost', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    console.log("!!!!!the rendering newpost worked!!!!");
    document.location.replace('/newpost'); // if sucessful user will be redirected to newpost page where they can make a post
  } else {
    alert(response.statusText);
  }*/
            
  document.location.replace('/newpost');

};



/*
  function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);*/

  
    document
    .querySelector('#newPost')
    .addEventListener('click', dashboardFormHandler);

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////



//!!!!!!!!!!!!!!!!!!!!!!!!!!!
//login form is really for the create button ignore the name
//!!!!!!!!!!!!!!!!!!!!!!!!!!!
const createFormHandler = async (event) => {
  //prevents default form behavior from happening
  event.preventDefault();


  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    // Send a POST request to the api 
    const response = await fetch('/api/post/', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');//check this 
    } else {
      console.log("your code failed for the create button. check out ./js/dashboard.js line 65");
      alert(response.statusText);
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


//!!!!!!!!!!!!!!!!!!!!!!!!!!!
//login form is really for the create button ignore the name
//!!!!!!!!!!!!!!!!!!!!!!!!!!!
  document
  .querySelector('#create')
  .addEventListener('submit', createFormHandler);

  /* this is not used
document
  .querySelector('.submit-form')
  .addEventListener('submit', signupFormHandler);*/

