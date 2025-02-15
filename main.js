var coll = document.getElementsByClassName("collapsible");
var i;

// collapsible button
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "inline-block";
    } else {
      content.style.display = "none";
    }
  });
}

// change font
function applyStoredFont() {
  const storedFont = localStorage.getItem('fontFamily');
  if (storedFont) {
    // apply stored font to "fontchange" class
    document.querySelectorAll('.fontchange').forEach(element => {
      element.style.fontFamily = storedFont;
    });
  }
}

function changeFont(fontFamily) {
  // save selected font to localStorage
  localStorage.setItem('fontFamily', fontFamily);

  // apply font to current page
  document.querySelectorAll('.fontchange').forEach(element => {
    element.style.fontFamily = fontFamily;
  });
}


function recompose() {
  const images = document.querySelectorAll('.media');
  
  images.forEach(img => {
      // random ranges
      let width = Math.random() * 25 + 7;
      let topMargin = Math.random() * 30;
      let leftMargin = Math.random() * 30;
      let zIndex = Math.floor(Math.random() * 20) + 2;
      let rotate = Math.random() * 360;

      // apply styles
      img.style.width = `${width}vw`;
      img.style.marginTop = `${topMargin}vh`;
      img.style.marginLeft = `${leftMargin}vw`;
      img.style.zIndex = zIndex;
      img.style.rotate = `${rotate}deg`;

      img.style.marginRight = "0";
      img.style.marginBottom = "0";
      img.style.display = "inline-block";
  });
}