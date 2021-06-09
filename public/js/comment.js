//!!!!!!!!!!!!!!!!!!!!!!!!!!!
//this code is for the create button on the dashboard page
const commentFormHandler = async (event) => {
    //prevents default form behavior from happening
    event.preventDefault();
    console.log("commentformhandler");

    //const comment = document.querySelector('#comment').value.trim();
    const content = document.querySelector('#content').value.trim();
    


    try {
        const response = await fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({ content}),
        headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/comment');//check this 
            console.log("response for the create button is ok redirecting to dashboard page");}
    } catch (err) {
        alert(response.statusText);
    }

    /*
    if (true) {
      // Send a POST request to the api 
        const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ date_created, content, post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        //document.location.replace('/dashboard');//check this 
        console.log("response for the create button is ok redirecting to dashboard page");
      } else {
        console.log("your code failed for the create button. check out ./js/dashboard.js line 65");
        alert(response.statusText);
      }
    }*/
  };
  document
  .querySelector('#update')
  .addEventListener('submit', commentFormHandler);