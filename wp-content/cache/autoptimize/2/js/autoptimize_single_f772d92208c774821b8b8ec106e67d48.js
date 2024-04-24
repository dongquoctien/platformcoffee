(function (document, window) {
    if (!document || !window) {
        return;
    }
    var styleText =
        "::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;";
    var unfocus_style = document.createElement("STYLE");
    window.unfocus = function () {
        document.getElementsByTagName("HEAD")[0].appendChild(unfocus_style);
        document.addEventListener("mousedown", function () {
            unfocus_style.innerHTML = styleText + "}";
        });
        document.addEventListener("keydown", function () {
            unfocus_style.innerHTML = "";
        });
    };
    unfocus.style = function (style) {
        styleText += style;
    };
    unfocus();
})(document, window);
jQuery(".subtitle-block").next().css("margin-top", "12px");
jQuery(".subtitle-above").next().css("margin-top", "12px");
jQuery(".divider-block").next().css("margin-top", "24px");
jQuery(document).ready(function () {
    "use strict";
    var skin = amaya_variables.skin;
    function themeskin() {
        return [skin];
    }
    var shopproductfont = amaya_variables.shopproductfont;
    jQuery(".wc-block-grid").addClass("product-title-" + shopproductfont);
    var jQuerycontainer = jQuery(".masonry");
    if (jQuery("body").hasClass("rtl")) {
        var rtlorigin = false;
    } else {
        var rtlorigin = true;
    }
    jQuerycontainer.imagesLoaded(function () {
        jQuerycontainer.masonry({
            itemSelector: ".masonry-item",
            isOriginLeft: rtlorigin,
        });
    });
    var jQuerygallerycontainer = jQuery(".gallery");
    jQuerygallerycontainer.imagesLoaded(function () {
        jQuerygallerycontainer.masonry({
            itemSelector: ".gallery-item",
            gutter: 12,
            percentPosition: true,
            isOriginLeft: rtlorigin,
        });
    });
    var jQueryblockgallerycontainer = jQuery(
        ".wp-block-gallery:not(.is-cropped)"
    );
    jQueryblockgallerycontainer.imagesLoaded(function () {
        jQueryblockgallerycontainer.masonry({
            itemSelector: ".blocks-gallery-item",
            gutter: 16,
            percentPosition: true,
            isOriginLeft: rtlorigin,
        });
    });
    var jQuerygallerygrid = jQuery(".gallery-images-masonry");
    jQuerygallerygrid.imagesLoaded(function () {
        jQuerygallerygrid.masonry({ percentPosition: true });
    });
    var jQuerycontentboxesgrid = jQuery(".contentboxes-masonry");
    jQuerycontentboxesgrid.imagesLoaded(function () {
        jQuerycontentboxesgrid.masonry({
            percentPosition: true,
            isOriginLeft: rtlorigin,
        });
    });
    var jQuerygridnested = jQuery(".menu-items.masonry-nested");
    jQuerygridnested.imagesLoaded(function () {
        jQuerygridnested.masonry({
            itemSelector: ".masonry-box-nested",
            percentPosition: true,
            isOriginLeft: rtlorigin,
        });
    });
    var jQuerymenugrid = jQuery(".menu-categories.menu-masonry");
    jQuerymenugrid.imagesLoaded(function () {
        jQuerymenugrid.masonry({
            itemSelector: ".masonry-box",
            percentPosition: true,
            isOriginLeft: rtlorigin,
        });
    });
    if (jQuery.fn.magnificPopup) {
        jQuery(".entry-content, .gallery, .gallery-wrap, .menu-wrap").magnificPopup(
            {
                fixedContentPos: true,
                delegate: "a.links_to_image",
                type: "image",
                gallery: { enabled: true, titleSrc: "caption", tCounter: "" },
                image: { titleSrc: "caption" },
            }
        );
    }
    jQuery(".gallery-item").on({
        mouseenter: function () {
            jQuery(this).addClass("gallery-item-hover");
        },
        mouseleave: function () {
            jQuery(this).removeClass("gallery-item-hover");
        },
    });
    jQuery(document).ready(function () {
        jQuery(document).on("click", ".search-close", function () {
            jQuery("#search-overlay").fadeOut();
        });
        jQuery(document).on("click", ".searchbutton", function () {
            jQuery("#search-overlay").fadeIn();
            jQuery(".search-content-wrap .search-field").focus();
        });
    });
    jQuery(".has-color.shortcode-button.button-outline").on({
        mouseenter: function () {
            var jQuerythis = jQuery(this);
            var colorValue = jQuerythis.data("color");
            jQuerythis.css("background-color", colorValue);
            jQuerythis.css("color", "#ffffff");
        },
        mouseleave: function () {
            var jQuerythis = jQuery(this);
            var colorValue = jQuerythis.data("color");
            jQuerythis.css("background-color", "transparent");
            jQuerythis.css("color", colorValue);
        },
    });
});
jQuery(window).on("load", sizeContent);
jQuery(window).on("resize", sizeContent);
function sizeContent() {
    "use strict";
    var windowWidth = jQuery(window).width();
    var windowHeight = jQuery(window).height();
    var newHeight = jQuery(window).height();
    var wpadmin = jQuery("#wpadminbar").height();
    var headerHeight = jQuery("header").height();
    jQuery(".section-hero").each(function () {
        var imageheight = jQuery(this).find(".hero-background").height();
        var contentheight = jQuery(this).find(".hero-content").outerHeight();
        if (contentheight > imageheight) {
            jQuery(this).find(".hero-background").css("height", contentheight);
        } else if (imageheight > contentheight) {
            jQuery(this).find(".hero-background").css("height", "");
        }
    });
    var topbartext = jQuery(".topbar-text-wrap").outerWidth();
    var topbarright = jQuery(".topbar-right").outerWidth();
    if (jQuery(".topbar-left").length) {
        var topbarleft = topbarright;
    } else {
        var topbarleft = 0;
    }
    var topbarRight = jQuery(".topbar-right").outerWidth();
    var topbarcontent = topbartext + topbarRight + topbarleft + 120;
    if (topbarcontent > windowWidth) {
        jQuery(".topbar-content").addClass("is-wrapped");
        jQuery(".topbar-content").removeClass("not-wrapped");
        jQuery(".topbar-content.center .topbar-left").css("width", 0);
    } else if (topbarcontent < windowWidth) {
        jQuery(".topbar-content").addClass("not-wrapped");
        jQuery(".topbar-content").removeClass("is-wrapped");
        jQuery(".topbar-content.center .topbar-left").css("width", topbarRight);
    }
    var contentboxeswidth = jQuery(".contentboxes-masonry").width();
    var onethirdwidth = contentboxeswidth / 3;
    var onethirdwidthround = Math.round(onethirdwidth);
    var twothirdwidthround = onethirdwidthround * 2;
    jQuery(".contentboxes-image-wrap.one-third-width").each(function () {
        jQuery(this).css("width", onethirdwidthround);
    });
    jQuery(".contentboxes-image-wrap.two-third-width").each(function () {
        jQuery(this).css("width", twothirdwidthround);
    });
    jQuery(".contentboxes-image-wrap, .contentboxes-image-wrap.square").each(
        function () {
            var boxheight = jQuery(this).find(".contentboxes-content").outerHeight();
            var boxwidth = jQuery(this).outerWidth();
            if (boxheight < boxwidth) {
                jQuery(this).addClass("use-defined-height centered-content");
            } else if (boxheight > boxwidth) {
                jQuery(this).removeClass("use-defined-height centered-content");
            }
        }
    );
    jQuery(".contentboxes-image-wrap.half-height").each(function () {
        var boxheight = jQuery(this).find(".contentboxes-content").height();
        var halfboxheight = boxheight * 2;
        var boxwidth = jQuery(this).width();
        if (halfboxheight < boxwidth) {
            jQuery(this).addClass("use-defined-height");
        } else if (halfboxheight > boxwidth) {
            jQuery(this).removeClass("use-defined-height");
        }
    });
    jQuery(".contentboxes-image-wrap.one-and-a-half-height").each(function () {
        var boxheight = jQuery(this).find(".contentboxes-content").height();
        var oneandahalfheight = boxheight / 1.5;
        var boxwidth = jQuery(this).width();
        if (oneandahalfheight < boxwidth) {
            jQuery(this).addClass("use-defined-height");
        } else if (oneandahalfheight > boxwidth) {
            jQuery(this).removeClass("use-defined-height");
        }
    });
    jQuery(".contentboxes-image-wrap.double-height").each(function () {
        var boxheight = jQuery(this).find(".contentboxes-content").height();
        var doubleheight = boxheight / 2;
        var boxwidth = jQuery(this).width();
        if (doubleheight < boxwidth) {
            jQuery(this).addClass("use-defined-height");
        } else if (doubleheight > boxwidth) {
            jQuery(this).removeClass("use-defined-height");
        }
    });
    var totalWidth = 0;
    jQuery(".header1 ul.menu-logo-centered > li").each(function (index) {
        totalWidth += parseInt(jQuery(this).outerWidth(), 10);
    });
    var leftAndLogoWidth = 0;
    var leftitems = jQuery(".main-navigation").data("leftitems");
    jQuery("ul.menu-logo-centered > li:nth-child(-n+" + leftitems + ")").each(
        function (index) {
            leftAndLogoWidth += parseInt(jQuery(this).outerWidth(), 10);
        }
    );
    var logoWidth = jQuery("ul.menu-logo-centered .menu-item-logo").outerWidth();
    var leftWidth = leftAndLogoWidth - logoWidth;
    var rightWidth = totalWidth - leftAndLogoWidth;
    var padding = rightWidth - leftWidth;
    if (padding > 0) {
        jQuery(".navi-items-centered .main-navigation ul.menu-logo-centered").css(
            "padding-left",
            padding
        );
        jQuery(
            ".navi-items-space-between .main-navigation ul.menu-logo-centered .menu-item-logo"
        ).css("padding-left", padding + 18);
    } else {
        var paddingRight = Math.abs(padding);
        jQuery(".navi-items-centered ul.menu-logo-centered").css(
            "padding-right",
            paddingRight
        );
        jQuery(
            ".navi-items-space-between .main-navigation ul.menu-logo-centered .menu-item-logo"
        ).css("padding-right", paddingRight + 18);
    }
    if (jQuery(".sticky").length) {
        if (windowWidth > 960) {
            jQuery(".right-sidebar.sticky").theiaStickySidebar({
                additionalMarginTop: 96,
                additionalMarginBottom: 24,
            });
        }
    }
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery("header.transparent-header").addClass("stuck");
            jQuery(
                "header.transparent-header.transparent-header-color img.logoimage"
            ).attr("src", amaya_variables.custom_logo_url);
        } else {
            jQuery("header.transparent-header").removeClass("stuck");
            jQuery(
                "header.transparent-header.transparent-header-color img.logoimage"
            ).attr("src", amaya_variables.transparent_logo_url);
        }
    });
}
jQuery(document).ready(function () {
    "use strict";
    jQuery("#toggle").on("click", function () {
        jQuery("#toggle .bar").toggleClass("animate");
        jQuery("#header.has-transparent-header").toggleClass("transparent-header");
        jQuery(".navi-wrap-responsive").slideToggle(200);
        jQuery("header.transparent-header-color img.logoimage").attr(
            "src",
            amaya_variables.custom_logo_url
        );
        jQuery(
            "header.transparent-header.transparent-header-color img.logoimage"
        ).attr("src", amaya_variables.transparent_logo_url);
    });
    jQuery(".navi-wrap-responsive .menu-item a").on("click", function () {
        jQuery(".navi-wrap-responsive").slideUp(200);
    });
    jQuery(".navi-wrap-responsive .menu-item-has-children").addClass("open");
    jQuery(".navi-wrap-responsive .menu-item-has-children").on(
        "click",
        function () {
            jQuery(this).first().toggleClass("open");
        }
    );
    jQuery(".navi-wrap-responsive .menu-item-has-children").on(
        "click",
        function () {
            jQuery(this).find(".sub-menu").first().slideToggle(200);
        }
    );
    jQuery(".navi-wrap-responsive .menu-item-has-children *").click(function (e) {
        e.stopPropagation();
    });
    jQuery('.navi-wrap-responsive .menu-item a[href^="#"]').click(function () {
        jQuery("#toggle .bar").toggleClass("animate");
        jQuery("#header.has-transparent-header").toggleClass("transparent-header");
    });
});
jQuery(window).on("load", function () {
    "use strict";
    var jQuerycontainer = jQuery(".masonry");
    jQuerycontainer.imagesLoaded(function () {
        jQuerycontainer.masonry("layout");
    });
    var jQuerycontentboxesgrid = jQuery(".contentboxes-masonry");
    jQuerycontentboxesgrid.imagesLoaded(function () {
        jQuerycontentboxesgrid.masonry("layout");
    });
    var jQuerygallerycontainer = jQuery(".gallery");
    jQuerygallerycontainer.imagesLoaded(function () {
        jQuerygallerycontainer.masonry("layout");
    });
    var jQueryblockgallerycontainer = jQuery(
        ".wp-block-gallery:not(.is-cropped)"
    );
    jQueryblockgallerycontainer.imagesLoaded(function () {
        jQueryblockgallerycontainer.masonry("layout");
    });
    var jQuerygallerygrid = jQuery(".gallery-images.masonry");
    jQuerygallerygrid.imagesLoaded(function () {
        jQuerygallerygrid.masonry("layout");
    });
    var jQuerygridnested = jQuery(".menu-items.masonry-nested");
    jQuerygridnested.imagesLoaded(function () {
        jQuerygridnested.masonry("layout");
    });
    var jQuerymenugrid = jQuery(".menu-categories.menu-masonry");
    jQuerymenugrid.imagesLoaded(function () {
        jQuerymenugrid.masonry("layout");
    });
    jQuery("body").imagesLoaded(function () {
        AOS.init({ duration: 600, once: true, disable: "mobile" });
    });
    document
        .querySelectorAll("img")
        .forEach((img) => img.addEventListener("load", () => AOS.refresh()));
    jQuery(function () {
        "use strict";
        jQuery(".question").on("click", function (e) {
            e.preventDefault();
            if (jQuery(this).hasClass("active")) {
                jQuery(this).removeClass("active");
                jQuery(this).next().stop().slideUp(300);
            } else {
                jQuery(this).addClass("active");
                jQuery(this).next().stop().slideDown(300);
            }
        });
    });
    jQuery(
        ".main-navigation ul.primary-menu > li.menu-item-has-children > a"
    ).after("<i class=chevron-down></i>");
});
