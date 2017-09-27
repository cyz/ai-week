! function(e) {
    function t() {
        2 == Q && e("header").addClass("transparent"), 2 == b ? e("#mainmenu").addClass("line-separator") : 3 == b ? e("#mainmenu").addClass("circle-separator") : 4 == b ? e("#mainmenu").addClass("square-separator") : 5 == b ? e("#mainmenu").addClass("plus-separator") : 6 == b ? e("#mainmenu").addClass("strip-separator") : 7 == b ? e("#mainmenu").addClass("heart-separator") : 0 == b && e("#mainmenu").addClass("no-separator"), 2 == v && e("header").addClass("header-light"), 2 == w && e("header").addClass("scroll-light"), 1 == j && e("body").addClass("boxed")
    }

    function i() {
        jQuery("header").addClass("clone", 1e3, "easeOutBounce");
        var t = 0;
        e(document).scrollTop() >= 50 && 0 == t ? (jQuery("header.autoshow").removeClass("scrollOff"), jQuery("header.autoshow").addClass("scrollOn"), jQuery("header.autoshow").css("height", "auto"), t = 1) : (jQuery("header.autoshow").removeClass("scrollOn"), jQuery("header.autoshow").addClass("scrollOff"), t = 0)
    }

    function a() {
        jQuery(".simple-ajax-popup-align-top").magnificPopup({
            type: "ajax",
            alignTop: !0,
            overflowY: "scroll"
        }), jQuery(".simple-ajax-popup").magnificPopup({
            type: "ajax"
        }), jQuery(".zoom-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: !1,
            closeBtnInside: !1,
            mainClass: "mfp-with-zoom mfp-img-mobile",
            image: {
                verticalFit: !0,
                titleSrc: function(e) {
                    return e.el.attr("title")
                }
            },
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function(e) {
                    return e.find("img")
                }
            }
        }), jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), e(".image-popup").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "mfp-with-zoom",
            image: {
                verticalFit: !0
            }
        }), e(".image-popup-vertical-fit").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "mfp-img-mobile",
            image: {
                verticalFit: !0
            }
        }), e(".image-popup-fit-width").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            image: {
                verticalFit: !1
            }
        }), e(".image-popup-no-margins").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            closeBtnInside: !1,
            fixedContentPos: !0,
            mainClass: "mfp-no-margins mfp-with-zoom",
            image: {
                verticalFit: !0
            },
            zoom: {
                enabled: !0,
                duration: 300
            }
        }), e(".image-popup-gallery").magnificPopup({
            type: "image",
            closeOnContentClick: !1,
            closeBtnInside: !1,
            mainClass: "mfp-with-zoom mfp-img-mobile",
            image: {
                verticalFit: !0,
                titleSrc: function(e) {
                    return e.el.attr("title")
                }
            },
            gallery: {
                enabled: !0
            }
        }), e(".images-group").each(function() {
            e(this).magnificPopup({
                delegate: "a",
                type: "image",
                gallery: {
                    enabled: !0
                }
            })
        }), e(".images-popup").magnificPopup({
            delegate: "a",
            type: "image"
        })
    }

    function n() {
        enquire.register("screen and (min-width: 993px)", {
            match: function() {
                jQuery("#mainmenu").show(), C = 1
            },
            unmatch: function() {
                jQuery("#mainmenu").hide(), C = 0, jQuery("#menu-btn").show()
            }
        }), enquire.register("screen and (max-width: 993px)", {
            match: function() {
                e("header").addClass("header-mobile")
            },
            unmatch: function() {
                e("header").removeClass("header-mobile")
            }
        }), f(), y(), h(), jQuery("#gallery").isotope({
            itemSelector: ".item",
            filter: "*"
        }), jQuery("#gallery").isotope("reLayout"), e("header").removeClass("smaller"), e("header").removeClass("logo-smaller"), e("header").removeClass("clone"), window.matchMedia("(max-width: 992px)").matches ? (jQuery(".owl-slide-wrapper").find("img").css("height", e(window).innerHeight()), jQuery(".owl-slide-wrapper").find("img").css("width", "auto")) : (jQuery(".owl-slide-wrapper").find("img").css("width", "100%"), jQuery(".owl-slide-wrapper").find("img").css("height", "auto"))
    }

    function r() {
        jQuery("#gallery-carousel").owlCarousel({
            items: 4,
            navigation: !1,
            pagination: !1
        }), jQuery("#gallery-carousel-2").owlCarousel({
            items: 2,
            navigation: !1,
            pagination: !1
        }), jQuery("#gallery-carousel-3").owlCarousel({
            items: 3,
            navigation: !1,
            pagination: !1
        }), jQuery("#gallery-carousel-4").owlCarousel({
            items: 4,
            navigation: !1,
            pagination: !1
        }), jQuery("#gallery-carousel-5").owlCarousel({
            items: 5,
            navigation: !1,
            pagination: !1
        }), jQuery("#gallery-carousel-6").owlCarousel({
            items: 6,
            navigation: !1,
            pagination: !1
        }), jQuery(".carousel-gallery").owlCarousel({
            items: 4,
            navigation: !1,
            pagination: !1
        }), jQuery("#carousel-3,#carousel-services-3,#blog-carousel").owlCarousel({
            items: 3,
            navigation: !1,
            pagination: !0
        }), jQuery("#testimonial-carousel").owlCarousel({
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            navigation: !1
        }), jQuery("#testimonial-carousel-3").owlCarousel({
            items: 3,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            navigation: !1
        }), jQuery("#logo-carousel").owlCarousel({
            items: 5,
            navigation: !1,
            pagination: !1,
            mouseDrag: !1,
            touchDrag: !1,
            autoPlay: !0
        }), jQuery("#contact-carousel").owlCarousel({
            items: 1,
            singleItem: !0,
            navigation: !1,
            pagination: !1,
            autoPlay: !0
        }), jQuery(".text-slider").owlCarousel({
            items: 1,
            singleItem: !0,
            navigation: !1,
            pagination: !1,
            mouseDrag: !1,
            touchDrag: !1,
            autoPlay: 2500,
            transitionStyle: "goDown"
        }), jQuery(".blog-slide").owlCarousel({
            items: 1,
            singleItem: !0,
            navigation: !1,
            pagination: !1,
            autoPlay: !1
        }), jQuery(".project-slide").owlCarousel({
            items: 1,
            singleItem: !0,
            navigation: !1,
            pagination: !1,
            autoPlay: !1,
            mouseDrag: !1,
            touchDrag: !0,
            transitionStyle: "fade"
        }), jQuery(".testimonial-list").owlCarousel({
            items: 1,
            singleItem: !0,
            navigation: !1,
            pagination: !0,
            autoPlay: !0,
            mouseDrag: !1,
            mouseDrag: !1,
            touchDrag: !0,
            transitionStyle: "fade"
        }), jQuery("#custom-owl-slider").owlCarousel({
            items: 1,
            singleItem: !0,
            navigation: !1,
            pagination: !1,
            autoPlay: !0,
            mouseDrag: !1,
            touchDrag: !0,
            transitionStyle: "fade"
        }), e(".next").on("click", function() {
            e(this).parent().parent().find(".blog-slide").trigger("owl.next")
        }), e(".prev").on("click", function() {
            e(this).parent().parent().find(".blog-slide").trigger("owl.prev")
        }), jQuery(".owl-custom-nav").each(function() {
            var t = e(".owl-custom-nav").next(),
                i = parseInt(t.css("height"), 10);
            e(this).css("margin-top", i / 2 - 25), t.owlCarousel(), e(".btn-next").on("click", function() {
                t.trigger("owl.next")
            }), e(".btn-prev").on("click", function() {
                t.trigger("owl.prev")
            })
        });
        var t = e("#custom-owl-slider"),
            i = e(".owl-slider-nav"),
            a = e(window).innerHeight();
        i.css("top", a / 2 - 25), t.owlCarousel(), i.find(".next").on("click", function() {
            t.trigger("owl.next")
        }), i.find(".prev").on("click", function() {
            t.trigger("owl.prev")
        }), jQuery(".owl-slide-wrapper").on("mouseenter", function() {
            i.find(".next").css("right", "40px"), i.find(".prev").css("left", "40px")
        }).on("mouseleave", function() {
            i.find(".next").css("right", "-50px"), i.find(".prev").css("left", "-50px")
        })
    }

    function o() {
        var e = jQuery("#gallery");
        e.isotope({
            itemSelector: ".item",
            filter: "*"
        }), jQuery("#filters a").on("click", function() {
            var t = jQuery(this);
            if (t.hasClass("selected")) return !1;
            t.parents().find(".selected").removeClass("selected"), t.addClass("selected");
            var i = jQuery(this).attr("data-filter");
            return e.isotope({
                filter: i
            }), !1
        })
    }

    function s() {
        var t = e(window).scrollTop();
        t > I && (e("#back-to-top").addClass("show"), e("#back-to-top").removeClass("hide"), T = 1), t < I && 1 == T && e("#back-to-top").addClass("hide"), e("#back-to-top").on("click", function(t) {
            t.preventDefault(), e("html,body").stop(!0).animate({
                scrollTop: 0
            }, 700)
        })
    }

    function u() {
        jQuery(".timer").each(function() {
            jQuery(this).offset().top < jQuery(window).scrollTop() + jQuery(window).height() && "0" == x && jQuery(function(e) {
                jQuery(".timer").each(function(t) {
                    x = "1";
                    var i = jQuery(this);
                    t = e.extend({}, t || {}, i.data("countToOptions") || {}), i.countTo(t)
                })
            })
        })
    }

    function l() {
        jQuery(".de-progress").each(function() {
            var e = jQuery(this).offset().top,
                t = jQuery(this).find(".progress-bar").attr("data-value");
            e < jQuery(window).scrollTop() + 500 && jQuery(this).find(".progress-bar").css({
                width: t
            }, "slow")
        })
    }

    function c() {
        e("div,section").css("background-color", function() {
            return jQuery(this).data("bgcolor")
        }), e("div,section").css("background-image", function() {
            return jQuery(this).data("bgimage")
        }), e("div,section").css("background-size", function() {
            return "cover"
        })
    }

    function d() {
        jQuery(".de_tab").find(".de_tab_content > div").hide(), jQuery(".de_tab").find(".de_tab_content > div:first").show(), jQuery("li").find(".v-border").fadeTo(150, 0), jQuery("li.active").find(".v-border").fadeTo(150, 1), jQuery(".de_nav li").on("click", function() {
            jQuery(this).parent().find("li").removeClass("active"), jQuery(this).addClass("active"), jQuery(this).parent().parent().find(".v-border").fadeTo(150, 0), jQuery(this).parent().parent().find(".de_tab_content > div").hide();
            var e = jQuery(this).index();
            jQuery(this).parent().parent().find(".de_tab_content > div:eq(" + e + ")").fadeIn(), jQuery(this).find(".v-border").fadeTo(150, 1)
        });
        jQuery("#request_form .btn-right").on("click", function() {
            var t = e("#rq_name").val(),
                i = e("#rq_email").val(),
                a = e("#rq_phone").val();
            0 == t.length ? e("#rq_name").addClass("error_input") : e("#rq_name").removeClass("error_input"), 0 == i.length ? e("#rq_email").addClass("error_input") : e("#rq_email").removeClass("error_input"), 0 == a.length ? e("#rq_phone").addClass("error_input") : e("#rq_phone").removeClass("error_input"), 0 != t.length && 0 != i.length && 0 != a.length && (jQuery("#rq_step_1").hide(), jQuery("#rq_step_2").fadeIn())
        }), jQuery(".de_review").find(".de_tab_content > div").hide(), jQuery(".de_review").find(".de_tab_content > div:first").show(), jQuery(".de_review").find(".de_nav li:first").fadeTo(150, 1), jQuery(".de_nav li").on("click", function() {
            jQuery(this).parent().find("li").removeClass("active"), jQuery(this).addClass("active"), jQuery(this).fadeTo(150, 1), jQuery(this).parent().parent().find(".de_tab_content > div").hide();
            var e = jQuery(this).index();
            jQuery(this).parent().parent().find(".de_tab_content > div:eq(" + e + ")").show()
        }), jQuery(".toggle-list h2").addClass("acc_active"), jQuery(".toggle-list h2").toggle(function() {
            jQuery(this).addClass("acc_noactive"), jQuery(this).next(".ac-content").slideToggle(200)
        }, function() {
            jQuery(this).removeClass("acc_noactive").addClass("acc_active"), jQuery(this).next(".ac-content").slideToggle(200)
        })
    }

    function h() {
        jQuery(".de-video-container").each(function() {
            var e = jQuery(this).css("height"),
                t = jQuery(this).find(".de-video-content").css("height"),
                i = (e.substring(0, e.length - 2) - t.substring(0, t.length - 2)) / 2;
            jQuery(this).find(".de-video-overlay").css("height", e), jQuery(this).find(".de-video-content").animate({
                "margin-top": i
            }, "fast")
        })
    }

    function p() {
        jQuery(".center-xy").each(function() {
            jQuery(this).parent().find("img").on("load", function() {
                var e = parseInt(jQuery(this).parent().find(".center-xy").css("width"), 10),
                    t = parseInt(jQuery(this).parent().find(".center-xy").css("height"), 10),
                    i = jQuery(this).css("width"),
                    a = jQuery(this).css("height");
                jQuery(this).parent().find(".center-xy").css("left", parseInt(i, 10) / 2 - e / 2), jQuery(this).parent().find(".center-xy").css("top", parseInt(a, 10) / 2 - t / 2), jQuery(this).parent().find(".bg-overlay").css("width", i), jQuery(this).parent().find(".bg-overlay").css("height", a)
            }).each(function() {
                this.complete && e(this).load()
            })
        })
    }

    function m() {
        jQuery("#mainmenu li a").each(function() {
            e(this).next("ul").length > 0 && e("<span></span>").insertAfter(e(this))
        }), jQuery("#mainmenu > li > span").on("click", function() {
            e("header").css("height", "auto");
            var t = e(this).data("iteration") || 1;
            switch (t) {
                case 1:
                    e(this).addClass("active"), e(this).parent().find("ul:first").css("height", "auto");
                    var i = e(this).parent().find("ul:first").height();
                    e(this).parent().find("ul:first").css("height", "0"), e(this).parent().find("ul:first").animate({
                        height: i
                    }, 400, "easeInOutQuint");
                    break;
                case 2:
                    e(this).removeClass("active"), e(this).parent().find("ul:first").animate({
                        height: "0"
                    }, 400, "easeInOutQuint")
            }++t > 2 && (t = 1), e(this).data("iteration", t)
        }), jQuery("#mainmenu > li > ul > li > span").on("click", function() {
            var t = e(this).data("iteration") || 1;
            switch (t) {
                case 1:
                    e(this).addClass("active"), e(this).parent().find("ul:first").css("height", "auto"), e(this).parent().parent().parent().find("ul:first").css("height", "auto");
                    var i = e(this).parent().find("ul:first").height();
                    e(this).parent().find("ul:first").css("height", "0"), e(this).parent().find("ul:first").animate({
                        height: i
                    }, 400, "easeInOutQuint");
                    break;
                case 2:
                    e(this).removeClass("active"), e(this).parent().find("ul:first").animate({
                        height: "0"
                    }, 400, "easeInOutQuint")
            }++t > 2 && (t = 1), e(this).data("iteration", t)
        })
    }

    function f() {
        var t = jQuery("#de-sidebar").css("height"),
            i = jQuery(window).innerHeight(),
            a = parseInt(t) - parseInt(i);
        ! function() {
            var e = window.matchMedia("(min-width: 993px)");
            window.matchMedia("(min-width: 768px)");
            if (e.matches) {
                var n = window.pageYOffset || document.documentElement.scrollTop,
                    r = jQuery("header");
                n > 0 ? r.addClass("smaller") : r.hasClass("smaller") && r.removeClass("smaller")
            }
            e.matches && jQuery("header").hasClass("side-header") && (jQuery(document).scrollTop() >= a ? (jQuery("#de-sidebar").css("position", "fixed"), parseInt(t) > parseInt(i) && jQuery("#de-sidebar").css("top", -a), jQuery("#main").addClass("col-md-offset-3"), jQuery("h1#logo img").css("padding-left", "7px"), jQuery("header .h-content").css("padding-left", "7px"), jQuery("#mainmenu li").css("width", "103%")) : (jQuery("#de-sidebar").css("position", "relative"), parseInt(t) > parseInt(i) && jQuery("#de-sidebar").css("top", 0), jQuery("#main").removeClass("col-md-offset-3"), jQuery("h1#logo img").css("padding-left", "0px"), jQuery("header .h-content").css("padding-left", "0px"), jQuery("#mainmenu li").css("width", "100%")))
        }(), jQuery(".btn-rsvp").on("click", function() {
            var t = e(this).data("iteration") || 1;
            switch (t) {
                case 1:
                    jQuery("#popup-box").addClass("popup-show"), jQuery("#popup-box").removeClass("popup-hide")
            }++t > 2 && (t = 1), e(this).data("iteration", t)
        }), jQuery(".btn-close").on("click", function() {
            var t = e(this).data("iteration") || 1;
            switch (t) {
                case 1:
                    jQuery("#popup-box").addClass("popup-hide"), jQuery("#popup-box").removeClass("popup-show")
            }++t > 2 && (t = 1), e(this).data("iteration", t)
        })
    }

    function y() {
        jQuery(".de-team-list").each(function() {
            jQuery(this).find("img").on("load", function() {
                var e = jQuery(this).css("width"),
                    t = jQuery(this).css("height");
                jQuery(this).parent().parent().find(".team-pic").css("height", t), jQuery(this).parent().parent().find(".team-desc").css("width", e), jQuery(this).parent().parent().find(".team-desc").css("height", t), jQuery(this).parent().parent().find(".team-desc").css("top", t)
            }).each(function() {
                this.complete && e(this).load()
            })
        }), jQuery(".de-team-list").on("mouseenter", function() {
            jQuery(this).find("img").css("height"), jQuery(this).find(".team-desc").stop(!0).animate({
                top: "0px"
            }, 350, "easeOutQuad"), jQuery(this).find("img").stop(!0).animate({
                "margin-top": "-100px"
            }, 400, "easeOutQuad")
        }).on("mouseleave", function() {
            var e;
            e = jQuery(this).find("img").css("height"), jQuery(this).find(".team-desc").stop(!0).animate({
                top: e
            }, 350, "easeOutQuad"), jQuery(this).find("img").stop(!0).animate({
                "margin-top": "0px"
            }, 400, "easeOutQuad")
        }), jQuery(".item .picframe").each(function() {
            jQuery(this).find("img").css("width", "100%"), jQuery(this).find("img").css("height", "auto"), jQuery(this).find("img").on("load", function() {
                jQuery(this).css("width");
                var e = jQuery(this).css("height");
                jQuery(this).parent().css("height", e)
            }).each(function() {
                this.complete && e(this).load()
            })
        }), jQuery(".overlay").fadeTo(1, 0), jQuery(".item .picframe").on("mouseenter", function() {
            jQuery(this).parent().find(".overlay").width(jQuery(this).find("img").css("width")), jQuery(this).parent().find(".overlay").height(jQuery(this).find("img").css("height")), jQuery(this).parent().find(".overlay").stop(!0).fadeTo(200, .8);
            var e, t = jQuery(this).find("img").css("height");
            e = t.substring(0, t.length - 2) / 2 - 10, jQuery(this).parent().find(".pf_text").css("margin-top", e), jQuery(this).parent().find(".pf_text").stop(!0).animate({
                opacity: "1"
            }, 1e3, "easeOutCubic");
            var i = jQuery(this).find("img").css("width"),
                a = jQuery(this).find("img").css("height"),
                i = parseInt(i, 10),
                a = parseInt(a, 10);
            jQuery(this).find("img").stop(!0).animate({
                width: 1.1 * i,
                height: 1.1 * a,
                "margin-left": -i * (1.1 - 1) / 2,
                "margin-top": -a * (1.1 - 1) / 2
            }, 400, "easeOutCubic")
        }).on("mouseleave", function() {
            var e = jQuery(this).find("img").css("height");
            e.substring(0, e.length - 2), jQuery(this).parent().find(".pf_text").stop(!0).animate({
                opacity: "0"
            }, 400, "easeOutCubic"), jQuery(this).parent().find(".overlay").stop(!0).fadeTo(200, 0), jQuery(this).find("img").stop(!0).animate({
                width: "100%",
                height: "100%",
                "margin-left": 0,
                "margin-top": 0
            }, 400, "easeOutQuad")
        }), jQuery(".overlay").fadeTo(1, 0);
        var t = parseInt(jQuery(window).innerHeight() / 2) - 30;
        e(".preloader1").css("top", t)
    }

    function g() {
        jQuery(".full-height").each(function() {
            var e = jQuery(window).innerHeight();
            jQuery(this).css("height", e)
        })
    }
    var j = 0,
        Q = 2,
        v = 1,
        w = 2,
        b = 0,
        C = 0,
        x = "0",
        _ = [],
        k = e(window);
    ! function(e) {
        e.fn.fitVids = function(t) {
            var i = {
                    customSelector: null
                },
                a = document.createElement("div"),
                n = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
            return a.className = "fit-vids-style", a.innerHTML = "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>", n.parentNode.insertBefore(a, n), t && e.extend(i, t), this.each(function() {
                var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
                i.customSelector && t.push(i.customSelector), e(this).find(t.join(",")).each(function() {
                    var t = e(this);
                    if (!("embed" == this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                        var i = ("object" == this.tagName.toLowerCase() || t.attr("height") ? t.attr("height") : t.height()) / (t.attr("width") ? t.attr("width") : t.width());
                        if (!t.attr("id")) {
                            var a = "fitvid" + Math.floor(999999 * Math.random());
                            t.attr("id", a)
                        }
                        t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * i + "%"), t.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(jQuery);
    var I = 500,
        T = 0;
    e.scrollTo = e.fn.scrollTo = function(t, i, a) {
        return this instanceof e ? (a = e.extend({}, {
            gap: {
                x: 0,
                y: 0
            },
            animation: {
                easing: "easeInOutExpo",
                duration: 600,
                complete: e.noop,
                step: e.noop
            }
        }, a), this.each(function() {
            e(this).stop().animate({
                scrollLeft: isNaN(Number(t)) ? e(i).offset().left + a.gap.x : t,
                scrollTop: isNaN(Number(i)) ? e(i).offset().top + a.gap.y - 69 : i
            }, a.animation)
        })) : e.fn.scrollTo.apply(e("html, body"), arguments)
    }, text_rotate = function() {
        function t() {
            ++a, i.eq(a % i.length).fadeIn(1).delay(1500).fadeOut(1, t)
        }
        var i = e(".text-rotate-wrap .text-item"),
            a = -1;
        t()
    }, sequence = function() {
        var e = jQuery(".sequence > .sq-item .picframe"),
            t = e.length;
        e.addClass("slideInUp");
        for (var i = 0; i <= t; i++) sqx = jQuery(".sequence > .sq-item:eq(" + i + ") .picframe"), sqx.attr("data-wow-delay", i / 8 + "s")
    }, sequence_a = function() {
        var e = jQuery(".sequence > .sq-item"),
            t = e.length;
        e.addClass("fadeInRight");
        for (var i = 0; i <= t; i++) sqx = jQuery(".sequence > .sq-item:eq(" + i + ")"), sqx.attr("data-wow-delay", i / 8 + "s")
    }, e.fn.moveIt = function() {
        e(this).each(function() {
            _.push(new O(e(this)))
        })
    }, moveItItemNow = function() {
        var e = k.scrollTop();
        _.forEach(function(t) {
            t.update(e)
        })
    };
    var O = function(t) {
        this.el = e(t), this.speed = parseInt(this.el.attr("data-scroll-speed"))
    };
    O.prototype.update = function(e) {
        var t = e / this.speed;
        this.el.css("transform", "translateY(" + t + "px)")
    }, e(function() {
        e("[data-scroll-speed]").moveIt()
    }), jQuery(document).ready(function() {
        "use strict";
        e("body").show(), e("body").addClass("de_light"), (new WOW).init(), t(), a(), p(), y(), n();
        var j = jQuery(window).innerHeight();
        jQuery("#homepage #content.content-overlay").css("margin-top", j), jQuery(".full-height .de-video-container").css("min-height", j), g(), jQuery(".blog-list").on("mouseenter", function() {
            var e = jQuery(this).find(".blog-slide").css("height"),
                t = jQuery(this).find(".blog-slide").css("width"),
                i = e.substring(0, e.length - 2) / 2 - 40;
            jQuery(this).find(".owl-arrow").css("margin-top", i), jQuery(this).find(".owl-arrow").css("width", t), jQuery(this).find(".owl-arrow").fadeTo(150, 1)
        }).on("mouseleave", function() {
            jQuery(this).find(".owl-arrow").fadeTo(150, 0)
        }), jQuery("#logo-carousel img").on("mouseenter", function() {
            jQuery(this).fadeTo(150, .5)
        }).on("mouseleave", function() {
            jQuery(this).fadeTo(150, 1)
        }), e("#back-to-top").length && s(), jQuery(".nav-exit").on("click", function() {
            e.magnificPopup.close()
        }), jQuery("#menu-btn").on("click", function() {
            0 == C ? (jQuery("#mainmenu").slideDown(), C = 1) : (jQuery("#mainmenu").slideUp(), C = 0)
        }), jQuery("a.btn").on("click", function(e) {
            -1 != this.href.indexOf("#") && (e.preventDefault(), jQuery("html,body").scrollTo(this.hash, this.hash))
        }), jQuery(".de-gallery .item .icon-info").on("click", function() {
            jQuery(".page-overlay").show(), url = jQuery(this).attr("data-value"), jQuery("#loader-area .project-load").load(url, function() {
                jQuery("#loader-area").slideDown(500, function() {
                    jQuery(".page-overlay").hide(), jQuery("html, body").animate({
                        scrollTop: jQuery("#loader-area").offset().top - 70
                    }, 500, "easeOutCubic"), jQuery(".image-slider").owlCarousel({
                        items: 1,
                        singleItem: !0,
                        navigation: !1,
                        pagination: !0,
                        autoPlay: !1
                    }), jQuery(".container").fitVids(), jQuery("#btn-close-x").on("click", function() {
                        return jQuery("#loader-area").slideUp(500, function() {
                            jQuery("html, body").animate({
                                scrollTop: jQuery("#section-portfolio").offset().top - 70
                            }, 500, "easeOutCirc")
                        }), !1
                    })
                })
            })
        }), jQuery(".de-gallery .item").on("click", function() {
            e("#navigation").show()
        }), jQuery(".arrow-up").on("click", function() {
            jQuery(".coming-soon .coming-soon-content").fadeOut("medium", function() {
                jQuery("#hide-content").fadeIn(600, function() {
                    jQuery(".arrow-up").animate({
                        bottom: "-40px"
                    }, "slow"), jQuery(".arrow-down").animate({
                        top: "0"
                    }, "slow")
                })
            })
        }), jQuery(".arrow-down").on("click", function() {
            jQuery("#hide-content").fadeOut("slow", function() {
                jQuery(".coming-soon .coming-soon-content").fadeIn(800, function() {
                    jQuery(".arrow-up").animate({
                        bottom: "0px"
                    }, "slow"), jQuery(".arrow-down").animate({
                        top: "-40"
                    }, "slow")
                })
            })
        }), jQuery(window).load(function() {
            h(), o(), c(), m(), r(), d(), f(), jQuery("#preloader").delay(500).fadeOut(500), jQuery("#homepage nav a, .scroll-to").on("click", function(e) {
                -1 != this.href.indexOf("#") && (e.preventDefault(), jQuery("html,body").scrollTo(this.hash, this.hash))
            }), sequence(), sequence_a()
        }), e(window).resize(function() {
            n(), g()
        }), jQuery(window).on("scroll", function() {
            i(), u(), l(), f(), s(), moveItItemNow(), e.stellar({
                horizontalScrolling: !1,
                verticalOffset: 0
            });
            var t = e(".fadeScroll"),
                a = t.outerHeight(),
                n = (a - window.scrollY) / a;
            n >= 0 ? t.css("opacity", n) : t.css("opacity", 0), jQuery(".side-bg").each(function() {
                jQuery(this).find(".image-container").css("height", jQuery(this).find(".image-container").parent().css("height"))
            }), jQuery("#mainmenu li a").each(function() {
                if (-1 != this.href.indexOf("#")) {
                    var e = jQuery(this).attr("href");
                    jQuery(window).scrollTop() > jQuery(e).offset().top - 140 && (jQuery("#mainmenu li a").removeClass("active"), jQuery(this).addClass("active"))
                }
            })
        }), e(function() {
            var t = 0;
            setInterval(function() {
                t -= 1, e(".bg-loop").css("background-position", t + "px 0")
            }, 50)
        })
    })
}(jQuery);