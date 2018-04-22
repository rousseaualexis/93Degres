// ====================================== RANDOMIZE ================================== //
$( document ).ready(function() {
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
        // Tools
        //tools.init();
        onClick();
        // init modules that requires being init only once
        //modulesOnce();
        // Init page
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
    }

    /**
     * Init page
     */
    var pageInit = function() {
        setTimeout(function(){
            //$(document).scrollTop(0)
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




    var scrollReveal = function() {

        //get viewport size
        var windowHeight = $(window).innerHeight(),
            windowWidth = $(window).width(),
            initialScroll = $(window).scrollTop(),
            items = $('.scroll-reveal'),
            bottomScreen = windowHeight + initialScroll
            scroll;

        //hide anything not in the viewport
        items.each(function(){
            if(bottomScreen > $(this).offset().top){
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
            tl.staggerFrom($el.find('.post'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.1, 0.2);
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
           // tl = new TimelineLite();
           // tl.staggerFrom($el, 1, {y:'500%', ease:Power4.easeOut}, 0.5, 0.2);
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
        $("h1 > div:nth-child(2)").append('<div class="trait"></div>');
        var tl = new TimelineLite();

            tl.from($el.find('.image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2);
            tl.from($el.find('.categories img'), 0.6, {y:'300%', ease:Power2.easeOut}, '-=1.2');
            tl.staggerFrom($el.find('.categories .wordsplit'), 0.6, {y:'300%', ease:Power2.easeOut}, 0.1, '-=1.1');
            tl.staggerFrom($el.find('h1 .charsplit'), 1.2, {y:'150%', ease:Power4.easeOut}, 0.01, '-=1');
            tl.from($el.find('.trait'), 0.6, {scaleX:'0', transformOrigin:"left", ease:Power4.easeOut}, 2);
            tl.from($el.find('strong'), 0.8, {left:'-120%', ease:Power4.easeOut}, '-=0.8');
            tl.from($el.find('.a-cta'), 1, {opacity:0, y:'300%', ease:Power4.easeOut}, '-=1.6');
    }


return {
        init: init
    }

})();
var archive = (function() {
    
    var init = function() {
        
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.post')) {

            $('.post').each(function(index, element){
                if ($('.post').hasClass('scroll-reveal--revealed'))
                    return false;
                else{
                TweenLite.from(element, 1.2, {y: 400, delay: index * 0.1, ease:Power4.easeOut})
                }
                
            })

            //tl = new TimelineLite();
            //tl.staggerFromTo($el.children(), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2);
        }
    }


return {
        init: init
    }

})();
// Launch site
site.showPreloader();
    if( $('body').hasClass('homepage') === true ) 
        $('body').removeClass('homepage'); 
        $('body').removeAttr('class');
    {   
        setTimeout(function(){
            homepage.init();
        }, 200);
    };
    if( $('body').hasClass('archive') === true )
        $('body').removeClass('archive'); 
        $('body').removeAttr('class');
    {   
        setTimeout(function(){
            archive.init();
        }, 200);
    };