
 function myFunction() {
 	console.log("inMyfunction")

   try{
            var firstName=document.getElementById("firstName").value;

            var lastName=document.getElementById("lastName").value;

    		    var userId=document.getElementById("userId").value;
            var password=document.getElementById("password").value;
            var mobile=document.getElementById("mobile").value;
                   //     var role=document.getElementById("role").value;
   }
   catch(error)
   {
     console.log(error);
   }     
                        console.log(firstName)

var formData = {};
formData.firstName=firstName;
formData.lastName =lastName;
formData.userId =userId;
formData.password =password;
formData.mobile =mobile;

    // formData.append('firstName',firstName);
    // formData.append('lastName',lastName);
    // formData.append('userId',userId);
    // formData.append('password',password);   
    // formData.append('mobile',mobile);   

 console.log("tring call axios "+formData)

    axios.post("http://localhost:4000/createUser",formData)
        .then((response) => {
          alert(response);
          if(response.data=="work posted")
          alert("Registered Successfully")
          else
          alert("data Issue")
        }).catch((error) => {
          console.log("ERROR "+error);
    });


alert(lastName+" "+mobile)




        }