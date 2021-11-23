  function goToPage() {
    var page = document.getElementById('page').value;
    var bgimage = document.querySelector('input[name="backgroundimage"]:checked').value;
        window.location = "https://cdn.make.cm/make/s/grat07?&data[headline]=" + page + "&data[backgroundImage]=" + bgimage;
    }

  function displayText() {
        document.getElementById("smalltext").innerHTML = "Your image is being created...";
  }

      function changeImage() {

          if (document.getElementById("imgClickAndChange").src == "https://files.outfit.io/media_library_items/349582/gratitude-bg-option1-withtext.png")
          {
              document.getElementById("imgClickAndChange").src = "https://files.outfit.io/media_library_items/349586/gratitude-bg-option2-withtext.png";
          }
          else
          {
              document.getElementById("imgClickAndChange").src = "https://files.outfit.io/media_library_items/349582/gratitude-bg-option1-withtext.png";
          }
      }
