const wrapper = document.querySelector('.sections-effect');
const sections = document.querySelectorAll('.section');
const className = 'in-view';

wrapper.classList.remove('no-js');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(className);
      return;
    }

    entry.target.classList.remove(className);
  });
}, {
  rootMargin: '0px 0px -400px 100px'
});

sections.forEach(section => observer.observe(section));


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