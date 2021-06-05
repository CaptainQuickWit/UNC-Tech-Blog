//this event viewer watch's if member hits the new post button

var mainEl = document.getElementById("main");

const dashboardFormHandler = async (event) => {
   
  const response = await fetch('/newpost', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    console.log("the rendering newpost worked");
    document.location.replace('/newpost'); // if sucessful user will be redirected to newpost page where they can make a post
  } else {
    alert(response.statusText);
  }
            
  

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
