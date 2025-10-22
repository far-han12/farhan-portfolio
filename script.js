(function () {
  try {
    var yearEl = document.getElementById("year");
    if (yearEl) {
      var y = new Date().getFullYear();
      yearEl.appendChild(document.createTextNode(String(y)));
    }

    var locEl = document.getElementById("pageLocation");
    if (locEl) {
      var href = window.location.href;
      locEl.appendChild(document.createTextNode("Page: " + href));
    }

    var lmEl = document.getElementById("lastModified");
    if (lmEl) {
      lmEl.appendChild(
        document.createTextNode("Last Modified: " + document.lastModified)
      );
    }
  } catch (e) {}
})();
