//navbar collapse
/*(function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
  }());*/
  function sendMail()
{
  var link = "Info@smilogistics.com"+
             "&subject=" + escape("This is subject")+
             "&body=" + escape("This is body");
  window.location.href = link;
}

