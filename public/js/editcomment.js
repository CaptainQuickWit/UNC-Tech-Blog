

//work here
const updateFormHandler = async (event) => {
    console.log("!!!!!made it to dashboard formhandler!!!!");
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    
    const response = await fetch('/api/post/edit', {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log("!!!!!the editing the post worked!!!!");
      document.location.replace('/dashboard'); // if sucessful user will be redirected to newpost page where they can make a post
    } else {
      alert(response.statusText);
    }
              
    document.location.replace('/dashboard');
  
  };
  

      
      document
      .querySelector('#update')
      .addEventListener('submit', updateFormHandler);
  
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
  const deleteFormHandler = async (event) => {
    //prevents default form behavior from happening
    console.log("you entered the deleteformhandler");
    event.preventDefault();
  
    const title = "test";
    const content = "test";
  
    if (title && content) {
      // Send a POST request to the api 
      const response = await fetch('/api/post/delete/', {
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
  
  document
    .querySelector('#delete')
    .addEventListener('click', deleteFormHandler);

    
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
    
  
    /* this is not used
  document
    .querySelector('.submit-form')
    .addEventListener('submit', signupFormHandler);*/
  
  