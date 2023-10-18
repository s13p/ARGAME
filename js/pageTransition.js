$(document).ready(() => {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////SCROLL SMOOTHER////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollTrigger.normalizeScroll(true);

    let smoother;

    const smoothFunction = (data) => {
        // if (window.innerWidth <= 1200) {
        //    // create the scrollSmoother before your scrollTriggers
        //    // smoother = ScrollSmoother.create({
        //    //    // smooth: 2,
        //    //    ignoreMobileResize: false, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
        //    //    effects: true,
        //    //    // smoothTouch: 1,
        //    //    force3D: true,
        //    //    normalizeScroll: false
        //    // });
        //    // smoother.scrollTrigger.vars.id = "ScrollSmoother-" + data.next.namespace;
        //    // smoother.kill();
        // } else {
        //    // create the scrollSmoother before your scrollTriggers
        //    smoother = ScrollSmoother.create({
        //       smooth: 2,
        //       // ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
        //       effects: true,
        //       // smoothTouch: 0.1,
        //       force3D: true,
        //       normalizeScroll: true
        //    });
        //    smoother.scrollTrigger.vars.id = "ScrollSmoother-" + data.next.namespace;
        // }

        smoother = ScrollSmoother.create({
            smooth: 2,
            smoothTouch: 1,
            ignoreMobileResize: false,
        });
    }

    // smoothFunction();

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////PAGE TRANSITION////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const leaveTransition = () => {
        var timeline = gsap.timeline();

        timeline.to('.moving_transition_wrapper', {
            top: 0,
            duration: .5
        })
    };

    const loadingTransition = (data, delay) => {
        let tl = gsap.timeline();
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////LOADING//////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        setTimeout(() => {
            $('.loading_anim_text_layer').css("transform", "translateY(-33.3%)");
        }, 1250)
        setTimeout(() => {
            $('.loading_anim_text_layer').css("transform", "translateY(-66.6%)");
        }, 2500)
        setTimeout(() => {
            $('.loading_anim_text_layer').css("transform", "translateY(-99.9%)");
            $('.we_text').css("transform", "translateY(-99.9%)");
        }, 3750)
        setTimeout(() => {
            tl.to('.loading_wrapper', {
                yPercent: -200,
            })
        }, 3650)
        setTimeout(() => {
            $('.secondary-cursor').css('display', 'block');
        }, 3700)
        setTimeout(() => {
            $(".loading_section_wrapper").css('display', 'none');
        }, 4300);
        if (data === 'home') {
            setTimeout(() => {
                ///HEADER OPENING TEXT ANIMATION
                const firstPageLoad = () => {
                    let tl = gsap.timeline();

                    tl.set(".header_title_text .text_layer h1", {
                        y: 0,
                        rotate: 0,
                        stagger: .1,
                        // duration: 2,
                        delay: 0,
                        ease: "Expo.easeOut",
                        onComplete: () => {
                            setTimeout(() => {
                                $('.header_title_text .text_layer').css('overflow', 'visible')
                            }, 1200)
                        }
                    });

                    tl.set(".header_desc_text .text_layer h5", {
                        y: 0,
                        delay: 0.5,
                        ease: "Expo.easeOut"
                    });
                }
                firstPageLoad();
            }, delay)
        }
    }

    const enterAnimation = () => {
        var timeline = gsap.timeline();

        timeline.to('.moving_transition_wrapper', {
            top: '-200%',
            duration: 1
        })
    };

    const afterEnterAnimation = () => {
        var timeline = gsap.timeline();

        timeline.to('.moving_transition_wrapper', {
            top: '200%',
            transition: 'all 0 cubic-bezier(0, 0.69, 1, 0.31)',
            duration: 0,
            delay: 1
        })
    };

    const delay = (n) => {
        n = n || 1000;
        return new Promise((done) => {
            setTimeout(() => {
                done();
            }, n)
        })
    }


    barba.init({
        transitions: [{
            async leave(data) {
                const done = this.async();
                leaveTransition();
                await delay(1000);
                smoother.scrollTo(0, false);
                ScrollTrigger.clearScrollMemory('manual');
                done();
            },

            async afterLeave(data) {
                document.getElementById('pageScript').remove();
                document.getElementById('mainScript').remove();
            },

            async enter(current) {
                enterAnimation();
            },

            async afterEnter(data) {
                ScrollTrigger.refresh();
                afterEnterAnimation();
                loadingTransition(data.next.namespace, 0);
                document.querySelector('body').appendChild(ReturnScriptSrc(data.next.namespace));
                document.querySelector('body').appendChild(ReturnMainSrc());
                var vids = document.querySelectorAll("video");
                vids.forEach(vid => {
                    var playPromise = vid.play();
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {

                        }).catch(error => {

                        });
                    };
                });
            },

            async once(data) {
                loadingTransition(data.next.namespace, 3500);
                document.querySelector('body').appendChild(ReturnScriptSrc(data.next.namespace));
                document.querySelector('body').appendChild(ReturnMainSrc());
                smoothFunction(data);
            }
        }]
    });

    function ReturnScriptSrc(src) {
        var script = document.createElement('script');

        script.id = "pageScript";
        script.src = `/js/${src}.js`;

        return script;
    }

    function ReturnMainSrc() {
        var script = document.createElement('script');

        script.id = "mainScript";
        script.src = `/js/main.js`;

        return script;
    }
})