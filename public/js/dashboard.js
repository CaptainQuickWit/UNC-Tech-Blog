
const editFormHandler = async (event) => {
  //prevents default form behavior from happening
  event.preventDefault();

  let element = event.target;
  console.log("status: "+ element);
  var postid = element.getAttribute("data-postid");
      console.log("getAttribute: "+postid);


  const title="yes";
  const content="yes";
  if (title && content) {
    // Send a POST request to the api 
    const response = await fetch('/api/post/edit/', {
      method: 'POST',
      body: JSON.stringify({ postid }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/editpost');//check this 
    } else {
      console.log("your code failed for the create button. check out ./js/dashboard.js line 65");
      alert(response.statusText);
    }
  }
};

  document
    .querySelector('#main')
    .addEventListener('click', editFormHandler);


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


//this code is for the new post button
const dashboardFormHandler = async (event) => {
  console.log("!!!!!made it to dashboard formhandler!!!!");
  event.preventDefault();
  
  const response = await fetch('/newpost', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    console.log("!!!!!the rendering newpost worked!!!!");
    document.location.replace('/newpost'); // if sucessful user will be redirected to newpost page where they can make a post
  } else {
    alert(response.statusText);
  }
            
  //document.location.replace('/newpost');

};




  
    document
    .querySelector('#newPost')
    .addEventListener('click', dashboardFormHandler);




//this code is for the create button on the dashboard page
const createFormHandler = async (event) => {
  //prevents default form behavior from happening
  console.log("made it to createformhandler");
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
      console.log("response for the create button is ok redirecting to dashboard page");
    } else {
      console.log("your code failed for the create button. check out ./js/dashboard.js line 65");
      alert(response.statusText);
    }
  }
};
document
.querySelector('#create')
.addEventListener('submit', createFormHandler);
