function myFunction() {
    // Type your code here.
    var name = document.getElementById('myname').value;
    var phone = document.getElementById('myphone').value;
    var country = document.getElementById('mycontry').value;
    var mail = document.getElementById('mymail').value;
    var message = name+","+phone+","+country+","+mail;
    alert(message);
    return message; 
    //Enter your return statement here
  }
  
  