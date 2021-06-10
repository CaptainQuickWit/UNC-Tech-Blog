

//work here
const updateFormHandler = async (event) => {
    console.log("!!!!!made it to dashboard formhandler!!!!");
    event.preventDefault();
    
    const content = document.querySelector('#content').value.trim();
    
    const response = await fetch('/api/comment/edit', {
      method: 'PUT',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log("!!!!!the editing the comment worked!!!!");
      document.location.replace('/comment'); // if sucessful user will be redirected to newpost page where they can make a post
    } else {
      alert(response.statusText);
    }
    
    document.location.replace('/comment');
  
  };
  

      
      document
      .querySelector('#update')
      .addEventListener('submit', updateFormHandler);
  

  
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
      const response = await fetch('/api/comment/delete/', {
        method: 'DELETE',
        body: JSON.stringify({ }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/comment');//check this 
      } else {
        console.log("your code failed for the create button. check out ./js/dashboard.js line 65");
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#delete')
    .addEventListener('click', deleteFormHandler);

  