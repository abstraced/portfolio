// Hamburgber nav

function navMobile() {
  var x = document.getElementById("myLinks");
  if (x.className === "nav_items") {
    x.className += " responsive";
  } else {
    x.className = "nav_items";
  }
}


// Landing pageXOffset, disappear when scrolling

$(document).ready(function () {
    
    
	$(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        
		 if (currentScroll > 0 ) {
			
				hideNav();
			} else {
				showNav();
			
			
		}
	});

	function hideNav() {
        // $(".landing_page").removeClass("is-visible").addClass("is-hidden");
        $(".landing_page").fadeOut("slow");
        $(".scroll_down").fadeOut("slow");
	}

	function showNav() {
        // $(".landing_page").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
        $(".landing_page").fadeIn("slow");
        $(".scroll_down").fadeIn("slow");
	}
});






// Landing page animation 
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};