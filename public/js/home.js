const editFormHandler = async (event) => {
  //prevents default form behavior from happening
  console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>you have entered the editformhandler>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  let element = event.target;
  //console.log("status: "+ element);
  var postid = element.getAttribute("data-postid");
  


  const title="yes";
  const content="yes";
  if (title && content) {
    // Send a POST request to the api 
    const response = await fetch('/api/comment/', {
      method: 'POST',
      body: JSON.stringify({ postid }),
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
    .querySelector('#main')
    .addEventListener('click', editFormHandler);
