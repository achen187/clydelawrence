$(document).ready(function () {
    var nav = $('.sticky-navigation'); // Change to nav div
var nav_class = 'add_shadow'; // Change to class name

$('#content').scroll(function () {
    var position = $(this).scrollTop();
    if (position > 0) { // If scrolled past threshold
        nav.addClass(nav_class); // Add class to nav
    } else { // If user scrolls back to top
        if (nav.hasClass(nav_class)) { // And if class has been added
            nav.removeClass(nav_class); // Remove it
        }
    }
});
    var height = nav.height()-2;
    $('.beneath').css({'margin-top': height + 'px'});
    
    $('.fa-youtube').click(function() {
        window.open("https://youtube.com/clydelawrencemusic");
    });
    
    $('.fa-facebook').click(function() {
        window.open("http://facebook.com/clydelawrencemusic");
    });
    
    $('.fa-instagram').click(function() {
        window.open("https://instagram.com/clydelawrencemusic");
    });
    
    $('.fa-spotify').click(function() {
        window.open("http://open.spotify.com/artist/6MvAhgguWcse6KN2pwv4MP");
    });
    
    $('.fa-twitter').click(function() {
        window.open("https://twitter.com/clydelmusic");
    });
    
    $('.fa-soundcloud').click(function() {
        window.open("https://soundcloud.com/clydelawrencemusic");
    });
    
    var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
    };
    
    if(isMobile.any() ) {
        $('.toggle-wrapper').css("display", "block");
        $('#nav-bar').css("display", "none");
    }
    
});