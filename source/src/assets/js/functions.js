function Start() {

    $('.li-home').on({
    
    mouseenter: function () { $('.home-hover').prop('src', '../../assets/images/li-animation.gif') },
    mouseleave: function () { $('.home-hover').prop('src', '') }
    
      });
    $('.li-team').on({

    mouseenter: function () { $('.team-hover').prop('src', '../../assets/images/li-animation.gif') },
    mouseleave: function () { $('.team-hover').prop('src', '') }
    
        });
    $('.li-projects').on({

    mouseenter: function () { $('.projects-hover').prop('src', '../../assets/images/li-animation.gif') },
    mouseleave: function () { $('.projects-hover').prop('src', '') }
    
        });
    $('.li-contact').on({

    mouseenter: function () { $('.contact-hover').prop('src', '../../assets/images/li-animation.gif') },
    mouseleave: function () { $('.contact-hover').prop('src', '') }
    
        });
    }
    
  $(Start);