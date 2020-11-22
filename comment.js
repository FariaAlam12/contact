
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyASQ6bpV3r749cYX5Y0EDLXsHWC7WTm070",
    authDomain: "contact-72259.firebaseapp.com",
    databaseURL: "https://contact-72259.firebaseio.com",
    projectId: "contact-72259",
    storageBucket: "contact-72259.appspot.com",
    messagingSenderId: "739509293525",
    appId: "1:739509293525:web:ff310ad9ce977be8a9ed5c",
    measurementId: "G-2BEQRH8ND1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  var messagesRef = firebase.database().ref('messages');

  database=firebase.database();
  var ref=database.ref('messages');
  ref.on('value', gotdata, errData);

function gotdata(data)
{
  //console.log(data.val());
  var alldata=data.val();
  var keys=Object.keys(alldata);
  console.log(keys);
  for(var i=keys.length-1;i>=0;i--)
  {
     var k=keys[i];
   
     
     var message=alldata[k].message;
     var name=alldata[k].name;
     
     
     console.log(name,message);

  //  document.getElementById("nam").innerHTML=name;
  //  document.getElementById("cmnt").innerHTML=message;

  // var li=createElement('li', name +': '+ message );
  // li.parent('com');

  var sendname=document.createTextNode(name)
  var sendmsg=document.createTextNode(message)
  var newname=document.createElement("p")
  var newmsg=document.createElement("p")
  newmsg.style.background="blue";
  newmsg.appendChild(sendmsg)

  newname.style.background="red";
  newname.appendChild(sendname)
  //newname.appendChild(sendmsg)

 

  document.getElementById("com").appendChild(newname)
  document.getElementById("com").appendChild(newmsg)

  }
}

function  errData(err){

  console.log("Eroor!");
  console.log(err);
}
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


// var messagesRef = firebase.database().ref('messages');



// database=firebase.database();
// var ref=database.ref('messages');
// ref.on('value', gotdata, errData);


// function gotdata(data)
// {
//   //console.log(data.val());
//   var alldata=data.val();
//   var keys=Object.keys(alldata);
//   console.log(keys);
//   for(var i=keys.length-1;i>=0;i--)
//   {
//      var k=keys[i];
   
     
//      var email=alldata[k].email;
//      var message=alldata[k].message;
//      var name=alldata[k].name;
     
     
//      console.log(name,email,message);

//   //  document.getElementById("nam").innerHTML=name;
//   //  document.getElementById("cmnt").innerHTML=message;

//   // var li=createElement('li', name +': '+ message );
//   // li.parent('com');

//   var sendname=document.createTextNode(name)
//   var sendmsg=document.createTextNode(message)
//   var newname=document.createElement("p")
//   var newmsg=document.createElement("p")
//   newmsg.style.background="blue";
//   newmsg.appendChild(sendmsg)

//   newname.style.background="red";
//   newname.appendChild(sendname)
//   //newname.appendChild(sendmsg)

 

//   document.getElementById("com").appendChild(newname)
//   document.getElementById("com").appendChild(newmsg)

//   }
// }

// function  errData(err){

//   console.log("Eroor!");
//   console.log(err);
// }
// // Step 4. Now, "Listen" for specific event to be done by the user, so that you can call your js function
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Step 5. Once the user does the event (here, pressing the "submit" button), call the js function where you store/retrive data from your database
// function submitForm(e){
//   e.preventDefault();

//   // Step 5.1 Accesss the HTML fields/elements and get the specific values inside js vars. 
//   var name = document.getElementById('name').value; 
  
//   var email = getInputVal('email');
  
//   var message = getInputVal('message');

//   // Step 5.2 Call a js function, padd the vars to it. This func will save the values to the cloud database. 
//   saveMessage(name, company, email, phone, message);

//   // Step 5.3 Give users appropriate message regarding the action (here, "your message has been sent")
//   document.querySelector('.alert').style.display = 'block';

//   // Step 5.4 After showing the message, redirct/or you other actions as needed. (Here, clear form, hide alert after 3 seconds and redirect to homepage)
//   //hiding the aleret after 3 sec
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clearing form
//   document.getElementById('contactForm').reset();

//   //redirecting to home page

//   setTimeout(function(){
//     document.location.href="#";
//   },3050);

  

  
// }



// // Function to get form values (optional)
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Step 6. Save the values to firebase (the cloud database)
// function saveMessage(name, email,  message){
//   //create a new reference in "push" mode for writitng to DB
//   var newMessageRef = messagesRef.push();
//   //use the set function to write values to firebase DB
//   newMessageRef.set({
//     //notice the brackets 
//     //and the data format "field name (in firebase): variable name"
//     name: name,
   
//     email:email,
    
//     message:message
//   });
// }
