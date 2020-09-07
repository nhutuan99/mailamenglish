
$(function() {
    "use strict";

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

}); /* End Fn */



(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/

  

    var name = $('.contact-from .validate-input input[name="name"]');
    var phoneNumber = $('.contact-from .validate-input input[name="phoneNumber"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.contact-from .validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }
        if($(phoneNumber).val().trim()==''){
            showValidate(phoneNumber);
            check=false;
        }


        // if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //     showValidate(email);
        //     check=false;
        // }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }
        if(check == true){
            alert("Thông tin đã được ghi nhận")
        }
        
        return check;
    });


    $('.contact-from .validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

function check(e){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNumber = document.getElementById('phoneNumber');
    var message = document.getElementById('message');
    var check = true;
    if(name.value == ''){
        showValidate(name);
        check=false;
    }
    if(phoneNumber.value == ''){
        showValidate(phoneNumber);
        check=false;
    }
    if(message.value == ''){
        showValidate(message);
        check=false;
    }

    return check;
  
}

function change(e){
    if(e.id==1){
        document.getElementById("largeImg").src = 'upload/login.png';

    }
    if(e.id == 2){
        document.getElementById("largeImg").src = 'upload/baihoc.png';
    }
    if(e.id == 3){
        document.getElementById("largeImg").src = 'upload/login.png';
    }
    if(e.id == 4){
        document.getElementById("largeImg").src = 'upload/baihoc.png';
    }
}

document.getElementById("link").onclick = function() {
    if( /iPhone|iPad/i.test(navigator.userAgent) ) {
  document.getElementById("link").href="https://apps.apple.com/us/app/anh-ngữ-mai-lâm/id1509669643"; 
    }
    else if( /Android/i.test(navigator.userAgent) ) {
       document.getElementById("link").href="https://apps.apple.com/us/app/anh-ngữ-mai-lâm/id1509669643"; 
    }
    else{
       alert("Ứng dụng chưa hỗ trợ trên PC")
    }
}