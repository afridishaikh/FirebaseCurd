function insert(){
  var Nname= document.getElementById("Nname").value;
  var Ntype = document.getElementById("Ntype").value;
  var Nphoto= document.getElementById("Nphoto").value;
  var Nupi= document.getElementById("Nupi").value;
  var Nemail= document.getElementById("Nemail").value;
  var Nnumber= document.getElementById("Nnumber").value;
  var Nusername= document.getElementById("Nusername").value;
  var Npassword= document.getElementById("Npassword").value;
  //firebase
firebase.database().ref('NgoData/'+Nname).set({
  name : Nname,
  type : Ntype,
  photo : Nphoto,
  upi : Nupi,
  email : Nemail,
  number : Nnumber,
  username : Nusername,
  password : Npassword
});
}



function data(){
  var Ngo= document.getElementById("ngo").value;
 
  //firebase
firebase.database().ref('NgoData/'+user).once('value').then(function(snapshot){
  
 var name = snapshot.val().username;
 var type = snapshot.val().type;
 var upi = snapshot.val().upi;
 var email= snapshot.val().email;
 document.getElementById("name").innerHTML.name;
 document.getElementById("type").innerHTML.type;
 document.getElementById("upi").innerHTML.upi;
 document.getElementById("email").innerHTML.email;
});
}