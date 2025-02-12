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

