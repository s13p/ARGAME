$(document).ready(() => {

    ////NAVBAR DISPLAY FLEX
    $('.navbar .navbar_inner').css('display', 'flex');

    ///IMAGES LAZY LOADING
    let fullRes = "1200/600"; // replace the final two values in the low-res URLs with these

    ScrollTrigger.config({
        limitCallbacks: true
    });

    gsap.utils.toArray(".lazy").forEach(image => {

        let a = image.src.split("/"),
            newImage = document.createElement("img"),
            newSRC, loaded,
            loadImage = () => {
                if (!loaded) {
                    a.length -= 2; // chop off the last two numbers
                    newSRC = a.join("/") + "/" + fullRes;
                    newImage.onload = () => {
                        newImage.onload = null; // avoid recursion
                        newImage.src = image.src; // swap the src
                        image.src = newSRC;
                        // place the low-res version on TOP and then fade it out.
                        gsap.set(newImage, {
                            position: "absolute",
                            top: image.offsetTop,
                            left: image.offsetLeft,
                            width: image.offsetWidth,
                            height: image.offsetHeight
                        });
                        image.parentNode.appendChild(newImage);
                        gsap.to(newImage, {
                            opacity: 0,
                            onComplete: () => newImage.parentNode.removeChild(newImage)
                        });
                        st && st.kill();
                    }
                    newImage.src = newSRC;
                    loaded = true;
                }
            },
            st = ScrollTrigger.create({
                trigger: image,
                start: "-50% bottom",
                onEnter: loadImage,
                onEnterBack: loadImage // make sure it works in either direction
            });
    });

    ///////CURSOR ANIMATION
    // make follower follow - implified with quickTo
    gsap.set(".cursor", {
        xPercent: -50,
        yPercent: -50
    });

    let xTo = gsap.quickTo(".cursor", "x", {
            duration: 0.6,
            ease: "power3"
        }),
        yTo = gsap.quickTo(".cursor", "y", {
            duration: 0.6,
            ease: "power3"
        });

    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
    });

    //////CURSOR HOVER
    $('.cursor_hover').on('mouseenter', () => {
        $('.cursor').css("width", '40px').css('height', '40px')
    });
    $('.cursor_hover').on('mouseleave', () => {
        $('.cursor').css("width", '20px').css('height', '20px')
    });
    $('.cursor_hover_zeroed').on('mouseenter', () => {
        $('.cursor').css("width", '0').css('height', '0')
    });
    $('.cursor_hover_zeroed').on('mouseleave', () => {
        $('.cursor').css("width", '20px').css('height', '20px')
    });

    //////HOVERED CIRCLE BUTTON
    if (window.innerWidth > 1023) {
        $(".hovered_animated_button").on('mouseenter', function(e) {
            ////Button hover animation
            let x = e.pageX - $(e.target).offset().left;
            let y = e.pageY - $(e.target).offset().top;
            $(".hovered_animated_button_circle").css({
                top: y,
                left: x
            });
        });
    }

    //////NAVBAR FUNCTIONS
    var prevScrollPos = $(window).scrollTop();
    var scrollDirectionLogged = false;
    $(window).scroll(function() {
        var currentScrollPos = $(window).scrollTop();
        if (!scrollDirectionLogged) {
            if (currentScrollPos > prevScrollPos) {
                $('.navbar .navbar_inner').css('transform', 'translate3d(0, -83px, 0)');
            } else if (currentScrollPos < prevScrollPos) {
                $('.navbar .navbar_inner').css('transform', 'translate3d(0, 0, 0)');
            }
            scrollDirectionLogged = true;
            setTimeout(function() {
                scrollDirectionLogged = false;
            }, 100); // Set a delay before allowing the scroll direction to be logged again
        }
        prevScrollPos = currentScrollPos;
    });

    $('#navProjects').mouseenter((e) => {
        $('#navProjects').children().css('color', 'rgba(255,255,255,1)');
        $('#navAbout').children().css('color', 'rgba(255,255,255,0.3)');
        $('#navCareers').children().css('color', 'rgba(255,255,255,0.3)');
        $('.navbar_dot').css('background', 'rgba(255,255,255,0.3)');
        $(e.target).find('.navbar_dot').css('background', 'rgba(255,255,255,1)');
    });
    $('#navAbout').mouseenter((e) => {
        $('#navAbout').children().css('color', 'rgba(255,255,255,1)');
        $('#navProjects').children().css('color', 'rgba(255,255,255,0.3)');
        $('#navCareers').children().css('color', 'rgba(255,255,255,0.3)');
        $('.navbar_dot').css('background', 'rgba(255,255,255,0.3)');
        $(e.target).find('.navbar_dot').css('background', 'rgba(255,255,255,1)');
    });

    $('#navCareers').mouseenter((e) => {
        $('#navCareers').children().css('color', 'rgba(255,255,255,1)');
        $('#navProjects').children().css('color', 'rgba(255,255,255,0.3)');
        $('#navAbout').children().css('color', 'rgba(255,255,255,0.3)');
        $('.navbar_dot').css('background', 'rgba(255,255,255,0.3)');
        $(e.target).find('.navbar_dot').css('background', 'rgba(255,255,255,1)');
    });

    $('#navProjects').on('mouseleave', (e) => {
        $('#navProjects').children().css('color', 'rgba(255,255,255,1)');
        $('#navAbout').children().css('color', 'rgba(255,255,255,1)');
        $('#navCareers').children().css('color', 'rgba(255,255,255,1)');
        $('.navbar_dot').css('background', 'rgba(255,255,255,1)');
    });
    $('#navAbout').on('mouseleave', (e) => {
        $('#navProjects').children().css('color', 'rgba(255,255,255,1)');
        $('#navAbout').children().css('color', 'rgba(255,255,255,1)');
        $('#navCareers').children().css('color', 'rgba(255,255,255,1)');
        $('.navbar_dot').css('background', 'rgba(255,255,255,1)');
    });
    $('#navCareers').on('mouseleave', (e) => {
        $('#navProjects').children().css('color', 'rgba(255,255,255,1)');
        $('#navAbout').children().css('color', 'rgba(255,255,255,1)');
        $('#navCareers').children().css('color', 'rgba(255,255,255,1)');
        $('.navbar_dot').css('background', 'rgba(255,255,255,1)');
    });

    if (window.location.pathname === '/projects') {
        $('.navbar_dot').css('display', 'none');
        $('.navbar_active_dot_projects').css('display', 'block');
    } else if (window.location.pathname === '/about') {
        $('.navbar_dot').css('display', 'none');
        $('.navbar_active_dot_about').css('display', 'block');
    } else if (window.location.pathname === '/careers') {
        $('.navbar_dot').css('display', 'none');
        $('.navbar_active_dot_careers').css('display', 'block');
    } else {
        $('.navbar_dot').css('display', 'none');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////MENU///////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //MENU OPENING FUNCTION
    let menuOpeningFunc = () => {
        $('.menu_section').css('transition', 'all .6s cubic-bezier(.77, 0, .175, 1) .2s');
        $('.menu_bottom_line').css('width', '100%').css('transition-delay', '700ms');
        $('.menu_bottom_socials ul').css('transform', 'translateY(0)').css('transition-delay', '1250ms');
        $('.menu_bottom_legacy').css('transform', 'translateY(-10%)').css('transition-delay', '1250ms');
        $('.menu_middle .link_wrapper a').css('transform', 'translateY(0)').css('transition-delay', '800ms');
        $('html, body').css('overflow-y', 'hidden').css('touch-action', 'none').css('-ms-touch-action', 'none');
    }

    ///MENU OPENING FUNCTION
    $('#menu_open_btn').on('click', () => {
        $('.menu_section').css('right', '0');
        menuOpeningFunc();
    });

    //MENU CLOSING FUNCTION
    const menuClosingFunc = () => {
        $('.menu_section').css('transition', 'all .6s cubic-bezier(.77, 0, .175, 1) .2s');
        $('.menu_bottom_line').css('width', '0').css('transition-delay', '0s');
        $('.menu_bottom_socials ul').css('transform', 'translateY(120%)').css('transition-delay', '0s');
        $('.menu_bottom_legacy').css('transform', 'translateY(100%)').css('transition-delay', '0s');
        $('.menu_middle .link_wrapper a').css('transform', 'translateY(100%)').css('transition-delay', '0s');
        $('html, body').css('overflow-y', 'visible').css('touch-action', 'auto').css('-ms-touch-action', 'auto');
        setTimeout(() => {
            $('.substitute_logo').css('display', 'none');
        }, 500);
        $('.page_container').css('display', 'block');
    }

    ///MENU CLOSING FUNCTION
    $('#menu_close, .menu_link_wrapper, .navbar_inner .logo').on('click', () => {
        $('.menu_section').css('right', '-100%');
        menuClosingFunc();
    });

    ///MENU PROJECTS
    $('#menuProjects').on('mouseenter', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 0.3)');
        $('#menuProjects span, #menuProjects li').css('color', 'rgba(255, 255, 255, 1)');
    });
    $('#menuProjects').on('mouseleave', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 1)');
    });

    //MENU ABOUT
    $('#menuAbout').on('mouseenter', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 0.3)');
        $('#menuAbout span, #menuAbout li').css('color', 'rgba(255, 255, 255, 1)');
    });
    $('#menuAbout').on('mouseleave', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 1)');
    });

    //MENU Careers
    $('#menuCareers').on('mouseenter', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 0.3)');
        $('#menuCareers span, #menuCareers li').css('color', 'rgba(255, 255, 255, 1)');
    });
    $('#menuCareers').on('mouseleave', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 1)');
    });

    //MENU Contact
    $('#menuContact').on('mouseenter', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 0.3)');
        $('#menuContact span, #menuContact li').css('color', 'rgba(255, 255, 255, 1)');
    });
    $('#menuContact').on('mouseleave', () => {
        $('.link_wrapper a span, .link_wrapper a li').css('color', 'rgba(255, 255, 255, 1)');
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////FOOTER FUNCTIONS////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let date = new Date();
    $('.footer_date_rights_text').text(`© ${date.getFullYear()} Onveiv. All rights reserved.`);

    ////////////////////////////////////////////////////////OTHER WORKS WRAPPER PADDING LEFT///////////////////////////////////////////
    if (window.innerWidth > 768) {
        let paddingLeft = $('.centered_wrapper_inner')[0] ? .offsetLeft;
        $(".works-wrapper").css('padding-left', `${paddingLeft}px`);
        $('.other-works-slider-wrapper .swiper').css('padding-right', `${paddingLeft}px`);
    } else {
        $(".works-wrapper").css('padding-left', `0`);
        $('.other-works-slider-wrapper .swiper').css('padding-right', `0`);
    }
    $(window).on('resize', () => {
        if (window.innerWidth > 768) {
            let paddingLeft = $('.centered_wrapper_inner')[0] ? .offsetLeft;
            $(".works-wrapper").css('padding-left', `${paddingLeft}px`);
            $('.other-works-slider-wrapper .swiper').css('padding-right', `${paddingLeft}px`);
        } else {
            $(".works-wrapper").css('padding-left', `0`);
            $('.other-works-slider-wrapper .swiper').css('padding-right', `0`);
        }
    });

});