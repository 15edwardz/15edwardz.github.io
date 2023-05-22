/* Code personalization */
$(document).ready(function () {
    // Create input fields for links upon user manipulation
    $("#links").on("input", function () {
      var numLinks = parseInt($(this).val());
      var linksContainer = $("#linksContainer");
      linksContainer.empty();

      for (var i = 1; i <= numLinks; i++) {
        var linkGroup = $("<div>").addClass("link-group");

        var linkLabel = $("<label>").text("Link " + i + " Name:");
        var linkInput = $("<input>")
          .attr({
            type: "text",
            name: "linkName" + i,
            required: true,
          })
          .css({
            "border-radius": "10px",
            "margin-right": "10px",
          });

        var urlLabel = $("<label>").text("Link " + i + " URL:");
        var urlInput = $("<input>")
          .attr({
            type: "url",
            name: "linkURL" + i,
            value: "https://",
            required: true,
          })
          .click(function () {
            $(this).select();
          })
          .css({
            "border-radius": "10px",
          });

        var linkIconLabel = $("<label>").text("Link " + i + " Icon:");
        var linkIconInput = $("<input>")
          .attr({
            type: "text",
            name: "linkIcon" + i,
            value: "fa fa-iconname",
            onfocus: "this.value='fa fa-'",
          })
          .css({
            "border-radius": "10px",
          });

        linkGroup.append(
          linkLabel,
          linkInput,
          urlLabel,
          urlInput,
          linkIconLabel,
          linkIconInput
        );
        linksContainer.append(linkGroup);
      }
    });
  });

  // Create input fields for links upon user manipulation
  $("#icons").on("input", function () {
    var numIcons = parseInt($(this).val());
    var iconsContainer = $("#iconsContainer");
    iconsContainer.empty();

    for (var i = 1; i <= numIcons; i++) {
      var iconLabel = $("<label>").text("Icon " + i + " Name:");
      var iconInput = $("<input>")
        .attr({
          type: "text",
          value: "fa fa-iconname",
          onfocus: "this.value='fa fa-'",
          name: "iconName" + i,
          style: "border-radius:10px",
          required: true,
        })
        .css({
          "margin-right": "10px",
        });
      var urlLabel = $("<label>").text("Icon " + i + " URL:");
      var urlInput = $("<input>")
        .attr({
          type: "url",
          name: "iconURL" + i,
          value: "https://",
          style: "border-radius:10px",
          required: true,
        })
        .click(function () {
          $(this).select();
        });

      iconsContainer.append(iconLabel, iconInput, urlLabel, urlInput);
    }
  });

  // Generate HTML code on form submission
  $("#builderForm").on("submit", function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var bio = $("#bio").val();
    var links = parseInt($("#links").val());
    var icons = parseInt($("#icons").val());

    var htmlCode = "<!DOCTYPE html>\n";
    htmlCode += '<html lang="en">\n';
    htmlCode += "  <head>\n";
    htmlCode += "    <title>" + name + "</title>\n";
    htmlCode +=
      '    <meta charset= "utf-8"; />\n' +
      '    <meta name="author" content="' +
      name +
      '" />\n' +
      '    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>\n';
    htmlCode +=
      '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>\n' +
      '    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>\n' +
      '    <link rel="preconnect" href="https://fonts.googleapis.com"/>\n' +
      '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
      '    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans&family=Nabla&family=Signika+Negative:wght@500&display=swap" rel="stylesheet"/>\n';
    htmlCode +=
      '    <script src="https://kit.fontawesome.com/d7010814d9.js" crossorigin="anonymous">\<\/script>\n';
    htmlCode += "  </head>\n";
    htmlCode +=
      "  <style>\n" +
      "    html, body {scroll-behavior: smooth; overflow-x: hidden; min-height: 100vh; background-color: rgb(90, 88, 133);}\n" +
      "    header {margin-top: 10vw;}\n" +
      "    .center {margin: auto; width: 60%; padding: 10px; text-align: center;}\n" +
      '    h1 {font-family: "Signika Negative", sans-serif; padding-bottom: 150px;}\n' +
      "    .container-flexible {transition: transform 300ms ease-in-out;}\n" +
      "    .container-flexible:hover {transform: translateY(-0.5rem);}\n" +
      "    .icenter {margin: auto;width: 60%;padding: 10px; text-align: center;}\n" +
      "    .icons {transition: transform 300ms ease-in-out;}\n" +
      "    .icons:hover {transform: scale(1.12);}\n" +
      "    .linkpc {display: inline-block; margin-left: 10px;}" +
      "@media (max-width: 600px) {div.linkpc {display: block;}}";
    htmlCode += "  \<\/style>\n";
    htmlCode += "  <body>\n";
    htmlCode +=
      "    <header>\n" +
      "      <div>\n" +
      '        <h1 class="center" style="color: white">' +
      name +
      "</h1>\n" +
      '        <p class="center" style="padding-bottom: 20px; color: rgb(198, 190, 190)">' +
      bio +
      "</p>\n" +
      "      </div>\n" +
      "    </header>\n";

    htmlCode += "    <main>\n";

    for (var i = 1; i <= links; i++) {
      var linkName = $("input[name=linkName" + i + "]").val();
      var linkURL = $("input[name=linkURL" + i + "]").val();
      var linkIcon = $("input[name=linkIcon" + i + "]").val();

      htmlCode +=
        '      <a class="container-flexible center clickable-container" href="' +
        linkURL +
        '"target="_blank" style="display: block; background-color: aliceblue; border-radius: 10px; box-shadow: 0 0 10px rgb(61, 61, 61); padding: 20px; margin-bottom: 20px; color: black; text-decoration: none;">\n' +
        '          <i class="' +
        linkIcon +
        '" style="vertical-align: middle"></i>\n' +
        '          <div class="linkpc">' +
        linkName +
        "</div>\n" +
        "      </a>\n";
    }

    htmlCode += '      <div class="icenter" style="margin-bottom: 30px">\n';
    for (var i = 1; i <= icons; i++) {
      var iconName = $("input[name=iconName" + i + "]").val();
      var iconURL = $("input[name=iconURL" + i + "]").val();
      htmlCode +=
        '        <a style="color: black; text-decoration: none; margin-right: 10px" href="' +
        iconURL +
        '" target="_blank">\n' +
        '          <i class="' +
        iconName +
        ' icons" style="font-size: 48px"></i>\n' +
        "        </a>\n";
    }

    htmlCode += "      </div>\n";
    htmlCode += "    </main>\n";
    htmlCode += "  </body>\n";
    htmlCode +=
      "  <footer>\n" +
      '    <div style="text-align: center; color: rgb(218, 230, 241)">\n' +
      '        <a href="https://www.edwardzhang.dev/linkinbio/link-builder" target="_blank" style="text-decoration:none; color: #bdaebd">Created using Link in Bio</a>\n' +
      "    </div>\n" +
      "  </footer>\n";
    htmlCode += "</html>";

    // Display the generated code
    $("#outputCode").text(htmlCode).css({
      "min-width": "auto",
      "border-bottom": "1px solid #b9a2eb",
      "border-left": "1px solid #b9a2eb",
      "padding-left": "10px",
      "padding-bottom": "10px",
    });

    $("#outputContainer").removeClass("hide");
  });

/* Copy to clipboard */
function copyToClipboard() {
    var copyText = document.getElementById("outputCode");
    var textArea = document.createElement("textarea");

    textArea.value = copyText.textContent;

    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand("copy");

    document.body.removeChild(textArea);

    alert("Code copied to clipboard!");
  }