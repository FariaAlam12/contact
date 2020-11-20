
var messagesRef = firebase.database().ref('messages');

// Step 4. Now, "Listen" for specific event to be done by the user, so that you can call your js function
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Step 5. Once the user does the event (here, pressing the "submit" button), call the js function where you store/retrive data from your database
function submitForm(e){
  e.preventDefault();

  // Step 5.1 Accesss the HTML fields/elements and get the specific values inside js vars. 
  var name = document.getElementById('name').value; 
  
  var email = getInputVal('email');

  var message = getInputVal('message');

  // Step 5.2 Call a js function, padd the vars to it. This func will save the values to the cloud database. 
  saveMessage(name,  email, message);

  // Step 5.3 Give users appropriate message regarding the action (here, "your message has been sent")
  document.querySelector('.alert').style.display = 'block';

  // Step 5.4 After showing the message, redirct/or you other actions as needed. (Here, clear form, hide alert after 3 seconds and redirect to homepage)
  //hiding the aleret after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clearing form
  document.getElementById('contactForm').reset();

  //redirecting to home page

  setTimeout(function(){
    document.location.href="#";
  },3050);

  
}

// Function to get form values (optional)
function getInputVal(id){
  return document.getElementById(id).value;
}

// Step 6. Save the values to firebase (the cloud database)
function saveMessage(name, email, message){
  //create a new reference in "push" mode for writitng to DB
  var newMessageRef = messagesRef.push();
  //use the set function to write values to firebase DB
  newMessageRef.set({
    //notice the brackets 
    //and the data format "field name (in firebase): variable name"
    name: name,
   
    email:email,
   
    message:message
  });
}
