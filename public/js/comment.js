//!!!!!!!!!!!!!!!!!!!!!!!!!!!
//this code is for the create button on the dashboard page
const commentFormHandler = async (event) => {
    //prevents default form behavior from happening
    console.log("made it to createformhandler in comment.js");
    event.preventDefault();
  
   
  
    if (true) {
      // Send a POST request to the api 
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        //document.location.replace('/dashboard');//check this 
        console.log("response for the create button is ok redirecting to dashboard page");
      } else {
        console.log("your code failed for the create button. check out ./js/dashboard.js line 65");
        alert(response.statusText);
      }
    }
  };
  document
  .querySelector('#create')
  .addEventListener('submit', commentFormHandler);