
function myFunction() {
    var copyText = document.getElementById("address").title;
    document.addEventListener('copy', function(event) {
      event.clipboardData.setData('text/plain', copyText);
      event.preventDefault();
      document.removeEventListener('copy', handler, true);
    }, true);
    document.execCommand('copy');
    document.getElementById('notice').innerHTML = "Copied to Clipboard";
  }

  document.getElementById('address').addEventListener('click', myFunction);