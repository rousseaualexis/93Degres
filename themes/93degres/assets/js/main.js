
// ====================================== RANDOMIZE ================================== //
/*$( document ).ready(function() {
    $( '.randomize' ).each(function() {
        $minRotate = -45;
        $maxRotate = 45;
        $holder    = $(this).parent();
        $divWidth  = $holder.width() * 0.15;
        $divHeight = $holder.height()* 0.15;
        $degree = Math.floor(Math.random()*( $maxRotate - $minRotate + 1 ) + $minRotate);

           $(this).css({
                "position" : "absolute",
                "left": Math.floor( Math.random() * 100 ) + "%",
                "top" : Math.floor( Math.random() * 100 ) + "%",
                "-webkit-transform": "rotate(" + $degree + "deg)",
                "-moz-transform": "rotate(" + $degree + "deg)",
                "-ms-transform": "rotate(" + $degree + "deg)",
                "-o-transform": "rotate(" + $degree + "deg)",
                "transform": "rotate(" + $degree + "deg)"
           });        
    })
});
*/




// ===================================== INITIAL ===================================== //
var tools = (function() { 

    /**
     * Check if device is desktop
     */
    var isDesktop = function() {
        return ($(window).width() >= 992);
    }

    /**
     * Check if device is tablet
     */
    var isTablet = function() {
        return ($(window).width() < 992 && $(window).width() >= 768);
    }

    /**
     * Check if device is smartphone
     */
    var isSmartphone = function() {
        return ($(window).width() < 768);
    }

    /**
     * Check if device is handheld
     */
    var isTabletOrSmart = function() {
        return (isTablet() || isSmartphone());
    }

    var scrollPos = {
        y:$(window).scrollTop(),
        x:0
    }

  return {
        isDesktop: isDesktop,
        isTablet: isTablet,
        isSmartphone: isSmartphone,
    }


})();
var site = (function() { 

    /*  =============================================================================
        PRELOADER
    ============================================================================== */

    /**
     * Show preloader
     */
    var showPreloader = function() {

        TweenLite.to($(".mask"), 0.5, {bottom:"100%", delay:0.75, onComplete:function(){
            $(".mask").remove();
        }});

        setTimeout(function(){
            init();
        }, 100);
    }

    var init = function() {

        onClick();
        pageInit();
    }


    var onClick = function() {
        $("body").on("click", "a", function(e){
        var url = $(this).attr('href');
        var isblank = this.target === '_blank';
        // check if the link has a hash
                if (isblank) {
                e.preventDefault();
                // if the link has only "#"
                window.open(url);
                return;

            }
            else{     
                e.preventDefault();  
                mask = $("<div/>").appendTo("body").addClass("mask");
                var tl = new TimelineLite();
                    tl.from(mask, 0.3, {display: "none", top: "100%", onComplete:function(){
                        setTimeout(function(){ 
                            window.location = url;
                        }, 200, url);
                    }});        
            }
        });
            $("#mobile-menu").on('click', function() {
            $('.menu-principal-container').toggleClass('active-menu');
        });
    }

    /**
     * Init page
     */
    var pageInit = function() {
        setTimeout(function(){
            allModules();
        }, 200);
    }


    /*============================================================
            Events
    ============================================================== */

    


 /*  =============================================================================
        MODULES INIT - Les modules à lancer à chaque fois qu'une page est chargée
    ============================================================================== */

  var allModules = function() {
        navItem();
        randomize();
        scrollReveal();
    }



 /*  =============================================================================
        MODULES
    ============================================================================== */

    
    var navItem = function(){

        var $el = $('#header'),
            $text = $('.menu a'),
            split = new SplitText($text,{charsClass: 'charsplit', wordsClass: 'wordsplit'}),
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.wordsplit'), 1.2, {y:'400%', ease:Power4.easeOut}, 0.03, 1);
        }

    var randomize = function(){
        var tl = new TimelineLite();
        $( '.randomize' ).each(function() {
            $minRotate = -45;
            $maxRotate = 45;
            $randomX = Math.floor( Math.random() * 100 ) + "%"
            $randomY = Math.floor( Math.random() * 100 ) + "%"
            $degree = Math.floor(Math.random()*( $maxRotate - $minRotate + 1 ) + $minRotate);
            tl.to($(this), 0.1, {rotation:$degree, y:$randomY, x:$randomX, ease:Power2.easeOut}, 0.1);
        })
    }

    var scrollReveal = function() {
        //get viewport size
        var windowHeight = $(window).innerHeight(),
            windowWidth = $(window).width(),
            initialScroll = $(window).scrollTop(),
            items = $('.scroll-reveal'),
            bottomScreen = initialScroll + windowHeight
            scroll;
        //hide anything not in the viewport
        items.each(function(){
            if( (bottomScreen - 35) > $(this).offset().top){
                var $self = $(this);
                setTimeout(function(){
                    $self.trigger('reveal');
                    $self.addClass('scroll-reveal--revealed')
                }, 400);
            }
        });
        //on scroll
        $(window).scroll(function (event) {
            //get the current scroll position
            scroll = $(window).scrollTop();
            items.each( function(){
            //show anything that is now in view (scroll + windowHeight)
            var $self = $(this);
            if ($self.hasClass('scroll-reveal--revealed')) {
                        return;
                    }
            var offsetTop = $self.offset().top;
            if (scroll + windowHeight >= offsetTop) {
                $self.trigger('reveal');
                $self.addClass('scroll-reveal--revealed')
                        }   
            });
         });
    }

    return {
        showPreloader: showPreloader
    }
})();

var homepage = (function() {
    
    var init = function() {
        firstPost();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.grid')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
        }

        else if ($el.is('#destinations h5')) {
            var split = new SplitText($el,{charsClass: "charsplit", wordsClass: "wordsplit"});
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.charsplit'), 1.2, {y:'200%', ease:Power4.easeOut}, 0.04, 0.2);
        }

        else if ($el.is('#destinations li')) {
            $('#destinations li').each(function(index, element){
                if ($('#destinations li').hasClass('scroll-reveal--revealed'))
                    return false;
                else{
                TweenLite.from(element, 1.8, {y: 150, delay: index * 0.1, ease:Power4.easeOut})
                }
            })
        }

        else if ($el.is('#about h2')) {
            var split = new SplitText($el,{charsClass: "charsplit", wordsClass: "wordsplit"});
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.wordsplit'), 1, {y:'200%', ease:Power4.easeOut}, 0.05, 0.2);
        }
    }

    var firstPost = function(){
        var $el = $('.first-post-texte'),
            $text = $("#title h1"),
            $categories = $el.find('.categories div'),
            split = new SplitText($text,{charsClass: "charsplit", wordsClass: "wordsplit"}),
            splitCategories = new SplitText($categories,{charsClass: "charsplit", wordsClass: "wordsplit"});
            $("h1").prepend('<div class="trait"></div>');
        var tl = new TimelineLite();
            tl.from($el.find('.country-code'), 1.8, { alpha:'0', ease:Power4.easeOut}, '+=0.6');
            tl.from($el.find('.image'), 1.8, {y:'200%', ease:Power4.easeOut}, '-=1.6');
            tl.from($el.find('.categories img'), 0.6, {y:'300%', ease:Power2.easeOut}, '-=1.2');
            tl.staggerFrom($el.find('.categories .wordsplit'), 0.6, {y:'300%', ease:Power2.easeOut}, 0.1, '-=1.1');
            tl.staggerFrom($el.find('h1 .charsplit'), 1.2, {y:'150%', ease:Power4.easeOut}, 0.01, '-=1');
            tl.from($el.find('strong'), 0.8, {left:'-120%', ease:Power4.easeOut}, '-=0.8');
            tl.from($el.find('.trait'), 0.6, {scaleX:'0', transformOrigin:"left", ease:Power4.easeOut}, '-=0.4');
            tl.from($el.find('.a-cta'), 1, {opacity:0, y:'300%', ease:Power4.easeOut}, '-=1.6');
    }

    return {
            init: init
    }
})();

var archive = (function() {
    
    var init = function() {
        top();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var top = function(){     
        var $coverArchive = $('.cover-archive h5'),
            $sousCat = $('.list-sous-cat'),
            split = new SplitText($coverArchive,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var tl = new TimelineLite();
            tl.staggerFrom($coverArchive.find('.charsplit'), 1.2, {y:'300%', ease:Power4.easeOut}, 0.02, 0.6);
            tl.from($sousCat, 0.8, {y: '400%', ease:Power2.easeOut}, '-=0.8');
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.grid')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'250%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
            /*$('.post').each(function(index, element){
                if ($('.post').hasClass('scroll-reveal--revealed'))
                    return false;
                else{tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
                }  
            })*/
        }
    }

    return {
            init: init
    }
})();

var single = (function() {
    
    var init = function() {
        introduction();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var introduction = function(){
        var $title = $("#introduction h1"),
        $subtitle = $("#introduction h4"),
        $summary = $("#introduction p");
        $categories = $("#introduction .categories");
        $categoriesImg = $("#introduction .categories img");
        var splitTitle = new SplitText($title,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var splitSubtitle = new SplitText($subtitle,{charsClass: "charsplit", wordsClass: "wordsplit"});
        //var splitSummary = new SplitText($summary,{wordsClass: "wordsplit"});
        var splitCategories = new SplitText($categories.find('div'),{charsClass: "charsplit", wordsClass: "wordsplit"});
            var tl = new TimelineLite();
            $( '.random' ).each(function() {
                $minRotate = -45;
                $maxRotate = 45;
                $randomX = Math.floor( Math.random() * 100 ) + "%"
                $randomY = Math.floor( Math.random() * 100 ) + "%"
                $degree = Math.floor(Math.random()*( $maxRotate - $minRotate + 1 ) + $minRotate);
                tl.to($(this), 2, {rotation:$degree, y:$randomY, x:$randomX, ease:Power4.easeOut}, 0.6);
            })
            tl.from($categoriesImg, 0.6, {y:'250%', ease:Power2.easeOut}, 1.8);
            tl.staggerFrom($categories.find('.wordsplit'), 0.6, {y:'250%', ease:Power2.easeOut}, 0.1, '-=0.8');
            tl.staggerFrom($title.find('.charsplit'), 1.5, {y:'250%', ease:Power4.easeOut}, 0.01, '-=1.4');
            tl.from($subtitle, 1.5, {y: '200%', ease:Power4.easeOut}, '-=1.4');
            tl.staggerFrom($subtitle.find('.charsplit'), 1, {y:'250%', ease:Power4.easeOut}, 0.01, '-=1');
            tl.staggerFrom($summary, 1.2, {y:'500%', ease:Power2.easeOut}, 0.4, '-=1.2');
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.deux-tiers')) {
            tl = new TimelineLite();
            tl.from($el, 1.8, {alpha: 0, y:'100%', ease:Power4.easeOut}, 0.2);
        }

        else if ($el.is('.un-tiers')) {
            tl = new TimelineLite();
            tl.from($el, 1.8, {alpha: 0, y:'100%', ease:Power4.easeOut}, 0.2);
        }

        else if ($el.is('#introduction__thumbnail .image')) {    
            tl = new TimelineLite();
            tl.from($el, 1.8, {alpha: 0, y:'100%', ease:Power4.easeOut}, 0.2);
        }

        else if ($el.is('.full-width blockquote')) {
            var splitQuote = new SplitText($el,{charsClass: "charsplit", wordsClass: "wordsplit"});  
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.wordsplit'), 1.5, {y:'250%', ease:Power4.easeOut}, 0.02, 0.3);
        }
    }

    return {
            init: init
        }
})();


var about = (function() {
    
    var init = function() {
        summary();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var summary = function(){
        var $title = $(".about--content h1"),
        $social = $("#social"),
        $summary = $("#summary p");
        $contact = $("#contact");
        var splitTitle = new SplitText($title,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var $summaryline = $("#summary > div");
            var tl = new TimelineLite();
            tl.staggerFrom($title.find('.charsplit'), 1.2, {y:'250%', ease:Power4.easeOut}, 0.05, 0.6);
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.instagram_shots')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('li'), 1.8, {y:'250%', ease:Power4.easeOut}, 0.12, 0);
            /*$('.post').each(function(index, element){
                if ($('.post').hasClass('scroll-reveal--revealed'))
                    return false;
                else{tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
                }  
            })*/
        }
    }


    return {
        init: init
    }

})();
// Launch site
window.onload = function(){

    site.showPreloader();
    
    if( $('body').hasClass('homepage') === true ) {

        setTimeout(function(){
            homepage.init();
        }, 200);
    };
    
    if( $('body').hasClass('archive') === true ){

        setTimeout(function(){
            archive.init();
        }, 200);
    };

    if( $('body').hasClass('single') === true ){

        setTimeout(function(){
            single.init();
        }, 200);
    };

    if( $('body').hasClass('about') === true ){

        setTimeout(function(){
            about.init();
        }, 200);
    };
}