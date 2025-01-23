var coll = document.getElementsByClassName("collapsible");
var i;

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

function applyStoredFont() {
  const storedFont = localStorage.getItem('fontFamily');
  if (storedFont) {
    // Apply the stored font to all elements with the "fontchange" class
    document.querySelectorAll('.fontchange').forEach(element => {
      element.style.fontFamily = storedFont;
    });
  }
}

function changeFont(fontFamily) {
  // Save the selected font to localStorage
  localStorage.setItem('fontFamily', fontFamily);

  // Apply the font immediately to the current page
  document.querySelectorAll('.fontchange').forEach(element => {
    element.style.fontFamily = fontFamily;
  });
}