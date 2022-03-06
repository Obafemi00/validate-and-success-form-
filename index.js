//An event listener that loads the API for countries

document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#Countries");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      let output = "";
      data.forEach((country) => {
        output += `<option>${country.name.common}</option>`;
      });

      selectDrop.innerHTML = output;
    })

    .catch((err) => {
      console.log(err);
    });
});


// To pop out the password option

const targetDiv = document.querySelectorAll(".password");
function buttonclick() {
  for (let i = 0; i < targetDiv.length; i++)
    if (targetDiv[i].style.display !== "none") {
      targetDiv[i].style.display = "none";
    } else {
      targetDiv[i].style.display = "flex";
    }
}



// To add success Story

$(document).ready(function () {
$('#myForm').submit(function(e) {
    e.preventDefault();
    $('#success').show()
})
})


$(document).ready(function() {
  $('form').on('submit', function(event) {
        
      // It returns an array of object 
      let userinfo = $(this).serializeArray();
      let user = {};
      userinfo.forEach((value) => {
            
          // Dynamically create an object
          user[value.name] = value.value;
      });
      let url = "https://reqres.in/api/users";
      $.ajax({
          method: "POST",
          url: url,
          data: user
      });
  });
});

//To validate the form

$("#myForm").validate({
  rules: {
email: {
    email:true
},
password1: {
    minlength: 5
},
Confirmpassword : {
    minlength: 5,
    equalTo: "#password1"
}

  },
  messages: {
      password1: {
          minlength: "Please enter at least 5 characters for the password"
      },
confirmpassword: {
    minlength: "Please enter at least 5 characters",
    equalTo: "Please enter the same value as the password above"
}
  },
  submitHandler: function (form) {
    form.submit();
  },
});


