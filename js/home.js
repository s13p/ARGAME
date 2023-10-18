$(document).ready(() => {

    ////BACKGROUND THEME CHANGING
    $('.App, #root').css('background', '#131313');

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////HOME/////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    gsap.to('.home_header_text_1', {
        xPercent: -50,
        duration: 1,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.home_container',
            start: 'min',
            end: 'max',
            scrub: true,
        },
        willChange: 'transform'
    });
    gsap.to('.home_header_text_2', {
        x: 500,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.home_container',
            start: 'min',
            end: 'max',
            scrub: true,
        },
        willChange: 'transform'
    })
    gsap.to('.home_header_text_3', {
        x: 150,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.home_container',
            start: 'min',
            end: 'max',
            scrub: true,
        },
        willChange: 'transform'
    })
    gsap.to('.home_header_text_4', {
        x: 300,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.home_container',
            start: 'min',
            end: 'max',
            scrub: true,
        },
        willChange: 'transform'
    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////PROJECTS/////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const sectionHovering = () => {
        ///FIRST SECTION
        $('.first_title_categories_texts').on('mouseenter', () => {
            $('.first_project_image').css('transform', 'scale(1.05)');
            $('.first_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.first_title_categories_texts').on('mouseleave', () => {
            $('.first_project_image').css('transform', 'scale(1)');
            $('.first_project_detailed_button').css('transform', 'rotate(0)');
        });
        $('.first_project_image').on('mouseenter', () => {
            $('.first_project_image').css('transform', 'scale(1.05)');
            $('.first_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.first_project_image').on('mouseleave', () => {
            $('.first_project_image').css('transform', 'scale(1)');
            $('.first_project_detailed_button').css('transform', 'rotate(0)');
        });
        $('.first_project_detailed_button').on('mouseenter', () => {
            $('.first_project_image').css('transform', 'scale(1.05)');
            $('.first_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.first_project_detailed_button').on('mouseleave', () => {
            $('.first_project_image').css('transform', 'scale(1)');
            $('.first_project_detailed_button').css('transform', 'rotate(0)');
        });

        ///SECOND SECTION
        $('.second_title_categories_texts').on('mouseenter', () => {
            $('.second_project_image').css('transform', 'scale(1.05)');
            $('.second_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.second_title_categories_texts').on('mouseleave', () => {
            $('.second_project_image').css('transform', 'scale(1)');
            $('.second_project_detailed_button').css('transform', 'rotate(0)');
        });
        $('.second_project_image').on('mouseenter', () => {
            $('.second_project_image').css('transform', 'scale(1.05)');
            $('.second_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.second_project_image').on('mouseleave', () => {
            $('.second_project_image').css('transform', 'scale(1)');
            $('.second_project_detailed_button').css('transform', 'rotate(0)');
        });
        $('.second_project_detailed_button').on('mouseenter', () => {
            $('.second_project_image').css('transform', 'scale(1.05)');
            $('.second_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.second_project_detailed_button').on('mouseleave', () => {
            $('.second_project_image').css('transform', 'scale(1)');
            $('.second_project_detailed_button').css('transform', 'rotate(0)');
        });

        ///THIRD SECTION
        $('.third_title_categories_texts').on('mouseenter', () => {
            $('.third_project_image').css('transform', 'scale(1.05)');
            $('.third_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.third_title_categories_texts').on('mouseleave', () => {
            $('.third_project_image').css('transform', 'scale(1)');
            $('.third_project_detailed_button').css('transform', 'rotate(0)');
        });
        $('.third_project_image').on('mouseenter', () => {
            $('.third_project_image').css('transform', 'scale(1.05)');
            $('.third_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.third_project_image').on('mouseleave', () => {
            $('.third_project_image').css('transform', 'scale(1)');
            $('.third_project_detailed_button').css('transform', 'rotate(0)');
        });
        $('.third_project_detailed_button').on('mouseenter', () => {
            $('.third_project_image').css('transform', 'scale(1.05)');
            $('.third_project_detailed_button').css('transform', 'rotate(45deg)');
        });
        $('.third_project_detailed_button').on('mouseleave', () => {
            $('.third_project_image').css('transform', 'scale(1)');
            $('.third_project_detailed_button').css('transform', 'rotate(0)');
        });
    }

    if (window.innerWidth >= 1200) {
        sectionHovering();
    }
    $(window).resize(() => {
        if (window.innerWidth >= 1200) {
            sectionHovering();
        }
    });

    ///////////////////////////////////////////////////////MARQUEE//////////////////////////////////////////////////////
    gsap.to('.home_projects_moving_text_1', {
        x: -1500,
        ease: 'power1.in',
        scrollTrigger: {
            // trigger: '#home_projects_moving_text_1',
            start: 'top top',
            end: 'max',
            scrub: true
        }
    });
    gsap.to('.home_projects_moving_text_2', {
        x: 1500,
        ease: 'power1.in',
        scrollTrigger: {
            // trigger: '#home_projects_moving_text_1',
            start: 'top top',
            end: 'max',
            scrub: true
        }
    });
    gsap.to('.home_projects_moving_text_3', {
        x: -1500,
        ease: 'power1.in',
        scrollTrigger: {
            // trigger: '#home_projects_moving_text_1',
            start: 'top top',
            end: 'max',
            scrub: true
        }
    });

    /////////////////////////////////////////////////////////TEXT SPLITS///////////////////////////////////////
    const splitTextAnim = (className, rotate) => {
        const text = new SplitText(className, {
            type: "words",
            wordsClass: 'text_opening_words_anim'
        });

        gsap.utils.toArray(text).forEach((t) => {
            gsap.from(t.words, {
                duration: .75,
                yPercent: 300,
                stagger: 0.05,
                delay: .15,
                opacity: 0,
                autoAlpha: 0,
                rotate: rotate,
                ease: "Expo.easeOut",
                scrollTrigger: {
                    trigger: t.words
                },
                onComplete: () => {
                    $(t.words).parent().css('overflow', 'visible')
                }
            });
        })
    }

    splitTextAnim('.home_about_integer_text', 5.4);
    splitTextAnim('.home_about_description_text', 5.4);
    splitTextAnim('.home_projects_section_title', 5.4);
    splitTextAnim('.home_projects_first_section_title', 5.4);
    splitTextAnim('.home_projects_first_section_category', 5.4);
    splitTextAnim('.home_projects_first_section_description', 5.4);
    splitTextAnim('.home_projects_second_section_title', 5.4);
    splitTextAnim('.home_projects_second_section_category', 5.4);
    splitTextAnim('.home_projects_second_section_description', 5.4);
    splitTextAnim('.home_projects_third_section_title', 5.4);
    splitTextAnim('.home_projects_third_section_category', 5.4);
    splitTextAnim('.home_projects_third_section_description', 5.4);
    splitTextAnim('.home_services_integer_text', 5.4);

    ////////////////////////////////////////////////////////SERVICES AREA///////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////FOOTER FUNCTIONS////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (window.innerWidth >= 768) {
        gsap.from(".contact_us_section_inner_wrapper_black", {
            y: -450,
            ease: 'none',
            scrollTrigger: {
                trigger: '.contact_us_section_inner_wrapper_black',
                start: 'top bottom',
                end: `max`,
                scrub: true
            }
        });
        gsap.from(".footer_black", {
            y: -600,
            ease: 'none',
            scrollTrigger: {
                trigger: '.footer_black',
                end: `max`,
                scrub: true
            }
        });
    }
})