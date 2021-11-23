  function goToPage() {
    var page = document.getElementById('page').value;
    var bgimage = document.querySelector('input[name="backgroundimage"]:checked').value;
        window.location = "https://cdn.make.cm/make/s/grat07?&data[headline]=" + page + "&data[backgroundImage]=" + bgimage;
    }

  function displayText() {
        document.getElementById("smalltext").innerHTML = "Please standby. Your image is being created...";
  }
