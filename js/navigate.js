document.querySelector(".menu-button").addEventListener("click", () => {
  var elem = document.querySelector(".navigate");
  if (elem.style.display == "") {
    elem.style.display = "block";
    elem.style.position = "absolute";
    elem.style.width = "100%";
  } else {
    elem.style.display = "";
    elem.style.position = "";
    elem.style.width = "";
  }
});

var btns = document.querySelector(".navigate").contentDocument.querySelectorAll("button");
btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    if (document.querySelector(".navigate").style.display != "") {
      document.querySelector(".navigate").style.display = "";
      document.querySelector(".navigate").style.position = "";
      document.querySelector(".navigate").style.width = "";
    }
    document.querySelector(".viewer").contentDocument.location.href = (window.location.origin + "/" + e.target.getAttribute("href"));
  });
})