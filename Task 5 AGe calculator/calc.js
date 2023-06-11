$(document).ready(function() {
    $("#datepicker").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: '1960:' + new Date().getFullYear(),
      onSelect: function(dateText) {
        document.getElementById("birthday").value = dateText;
        $("#datepicker").hide();
      }
    });
  });
  
  function showCalendar() {
    $("#datepicker").toggle();
  }
  
  function formatBirthDate() {
    var birthday = document.getElementById("birthday");
    var value = birthday.value;
    if (value.length === 2 || value.length === 5) {
      birthday.value = value + "-";
    }
  }
  
  function calculateAge() {
    var birthday = document.getElementById("birthday").value;
  
    if (birthday) {
      var today = new Date();
      var birthDate = new Date(birthday);
      var age = today.getFullYear() - birthDate.getFullYear();
      var month = today.getMonth() - birthDate.getMonth();
  
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      document.getElementById("output").innerText = "You are " + age + " years old.";
    } else {
      document.getElementById("output").innerText = "Please enter a valid birthday.";
    }
  }
  