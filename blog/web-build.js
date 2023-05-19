// Generate HTML code on form submission
$('#builderForm').on('submit', function(event) {
    event.preventDefault();
  
    var name = $('#name').val();
    var links = parseInt($('#links').val());
    var icons = parseInt($('#icons').val());
  
    // Generate the HTML code with the provided layout
    var htmlCode = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${name}</title>
        <link rel="icon" type="image/x-icon" href="https://github.com/15edwardz/15edwardz.github.io/blob/master/Images/edward-logo-favicon.png?raw=true">
        <meta charset="utf-8">
        <meta name="author" content="Edward Zhang">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans&family=Nabla&family=Signika+Negative:wght@500&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/d7010814d9.js" crossorigin="anonymous"></script>
        <style>
          html,
          body {
            scroll-behavior: smooth;
            overflow-x: hidden;
            min-height: 100vh;
            background-color: rgb(90, 88, 133);
          }
  
          header {
            margin-top: 10vw;
          }
  
          .center {
            margin: auto;
            width: 60%;
            padding: 10px;
            text-align: center;
          }
          h1 {
            font-family: "Signika Negative", sans-serif;
            padding-bottom: 150px;
          }
          .container-flexible {
            transition: transform 300ms ease-in-out;
          }
          .container-flexible:hover {
            transform: translateY(-0.5rem);
          }
  
          .icenter {
            margin: auto;
            width: 60%;
            padding: 10px;
            text-align: center;
          }
  
          .icons {
            transition: transform 300ms ease-in-out;
          }
          .icons:hover {
            transform: scale(1.12);
          }
        </style>
      </head>
      <body>
        <header>
          <div>
            <!--<img src="" alt="Edward Zhang" width="500" height="600">-->
  
            <h1 class="center" style="color: white">${name}</h1>
            <br>
          </div>
        </header>
        <main>
          <div class="container-flexible center" style="background-color: aliceblue; border-radius: 10px; box-shadow: 0 0 10px rgb(61, 61, 61); padding: 20px; margin-bottom: 20px;">
            <i class="fa-solid fa-globe" style="vertical-align: middle"></i>
            <div style="display: inline-block; margin-left: 10px">My Website</div>
          </div>
  
          <div class="container-flexible center" style="background-color: aliceblue; border-radius: 10px; box-shadow: 0 0 10px rgb(61, 61, 61); padding: 20px; margin-bottom: 20px;">
            <i class="fa-regular fa-envelope" style="vertical-align: middle"></i>
            <div style="display: inline-block; margin-left: 10px">Contact Me</div>
          </div>
  
          <div class="icenter" style="margin-bottom: 30px">`;
  
    // Generate the icon elements
    for (var i = 0; i < icons; i++) {
      htmlCode += `
        <a style="color: black; text-decoration: none; margin-right: 10px" href="https://github.com/15edwardz" target="_blank">
          <i class="fa fa-github icons" style="font-size: 48px"></i>
        </a>`;
    }
  
    htmlCode += `
          </div>
        </main>
  
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
      </body>
    </html>`;
  
    // Display the generated code
    $('#outputCode').text(htmlCode);
    $('#outputContainer').removeClass('hide');
  });
  