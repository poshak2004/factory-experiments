// Copies utm_source / utm_campaign from the page URL into hidden form fields. No network calls.
(function () {
  var p = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_campaign'].forEach(function (k) {
    var el = document.getElementById(k);
    if (el && p.get(k)) el.value = p.get(k).slice(0, 80);
  });
})();
