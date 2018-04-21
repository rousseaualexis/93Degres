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
                'position' : 'absolute',
                'left': Math.floor( Math.random() * 100 ) + '%',
                'top' : Math.floor( Math.random() * 100 ) + '%',
                '-webkit-transform': 'rotate(' + $degree + 'deg)',
                '-moz-transform': 'rotate(' + $degree + 'deg)',
                '-ms-transform': 'rotate(' + $degree + 'deg)',
                '-o-transform': 'rotate(' + $degree + 'deg)',
                'transform': 'rotate(' + $degree + 'deg)'
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
    var init = function() {
        // Tools
        //tools.init();
        onClick();

        // init modules that requires being init only once
        //modulesOnce();

        // Init page
        pageInit();
    }

    /**
     * Init parallax
     */
    var scrollParallaxInit = function() {
        var scrollElements = $('.scroll-parallax');
        scrollElements.each(function() {
            var level = $(this).attr('para-strength') || 1;
            $(this).attr('para-strength', level);
        });
        scrollParallaxResize();
    }


    /**
     * Resize parallax
     */
    var scrollParallaxResize = function() {
        $('.scroll-parallax').each(function() {
            var element = $(this);
            var transform = element.css('transform');

            element.css({transform: ''});
            var offTop = element.offset().top;
            element.css({transform: transform});

            element.attr('data-top',    offTop);
            element.attr('data-bottom', offTop+element.outerHeight());
            element.attr('data-start',  offTop-$(window).height());
            element.attr('data-stop',   offTop+element.outerHeight());
        });
    }

   /**
     * Resize container
     */
    var resizeContainer = function() {
        /*var container = $('.scroll-container');
        containerHeight = container.outerHeight();
        $('body').css({height: containerHeight});*/
    }


    /**
     * Init page
     */
    var pageInit = function() {
        setTimeout(function(){
            $(document).scrollTop(0)
            allModules();
        }, 200);
    }
/*  =============================================================================
        PRELOADER
    ============================================================================== */

    /**
     * Show preloader
     */
    var showPreloader = function() {

        TweenLite.to($('.mask'), 0.5, {bottom:'100%', delay:0.75, onComplete:function(){
            $('.mask').remove();
        }});

        setTimeout(function(){
            init();
        }, 100);
    }


    /*============================================================
            Events
    ============================================================== */

        var onClick = function() {
            $('body').on('click', 'a', function(e){
            var url = $(this).attr('href');

            // check if the link has a hash
                if (url.charAt(0) === "#") {
                    e.preventDefault();
                    // if the link has only "#"
                    if (url.length == 1) {
                        smoothScrollTo(0);
                        return;
                    }
                    // #someElement
                    var $target = $(url)
                    if (!$target.length)
                        return;
                    smoothScrollTo($target.offset().top);
                    return;
                }

                else{      
                             e.preventDefault();            
                    //wait 600 ms and redirect to the URL we grabbed earlier
                    mask = $("<div/>").appendTo("body").addClass('mask');
                    var tl = new TimelineLite();
  
                    tl.from(mask, 0.1, {display: "none", opacity: 0});
                    tl.to(mask, 0.75, {display:"block", opacity:1, onComplete:function(){
                setTimeout(function(){ 
                        window.location = url;
                    }, 200, url);
            }, ease:Power1.easeInOut}, 0);
                  
                   
                }
            });


        }


 /*  =============================================================================
        MODULES INIT - Les modules à lancer à chaque fois qu'une page est chargée
    ============================================================================== */

  var allModules = function() {
        firstPost();
        navItem();
    
    }



 /*  =============================================================================
        MODULES
    ============================================================================== */

     var firstPost = function(){
        var $el = $('#first-post-texte');
        var $text = $("#title h1");
        var $categories = $el.find('.categories div');
        var split = new SplitText($text,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var splitCategories = new SplitText($categories,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var tl = new TimelineLite();

            tl.from($el.find('.image'), 1.8, {y:'100%', ease:Power4.easeOut}, 1.2);
                                                tl.from($text, 1.2, {x:'-100%', ease:Power4.easeOut}, 1.4);
            tl.from($el.find('.categories img'), 0.6, {y:'300%', ease:Power2.easeOut}, '-=1.2');
            tl.staggerFrom($el.find('.categories .wordsplit'), 0.6, {y:'300%', ease:Power2.easeOut}, 0.1, '-=1');

            tl.staggerFrom($el.find('h1 .charsplit'), 1.2, {y:'150%', ease:Power4.easeOut}, 0.01, '-=1');

            tl.from($el.find('strong'), 0.8, {left:'-100%', ease:Power4.easeOut}, '-=0.6');
            tl.from($el.find('.cta'), 1, {y:'300%', ease:Power4.easeOut}, '-=1.6');
    }


    var navItem = function(){

        var $el = $('#header');
        var $text = $(".menu a")
            var split = new SplitText($text,{charsClass: "charsplit", wordsClass: "wordsplit"
                }
            );
            var tl = new TimelineLite();
            tl.staggerFrom($el.find('.charsplit'), 1.2, {y:'400%', ease:Power4.easeOut}, 0.008, 0.6);




    }

    /*
    var paralol = function(){

        scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Move parallax
        var scrollElements = $('.scroll-parallax');
        if (scrollElements != null) {
            scrollElements.each(function() {
                var element = $(this);
                var offsetTop = element.attr('data-top');
                var offsetBottom = element.attr('data-bottom');

                var level = Number(element.attr('para-strength')/2.5);
                var amplitude = -windowHeight;
                var movement = amplitude/(5/level);

                if (offsetTop > (scrollTop+(windowHeight*1.3))) {
                    element.css({transform: 'translate3d(0, '+(-movement*0.5)+'px, 0)'});
                } else if (offsetBottom < (scrollTop*0.7)) {
                    element.css({transform: 'translate3d(0, '+(movement*0.5)+'px, 0)'});
                } else if (offsetTop < (scrollTop+(windowHeight*1.3)) && offsetBottom > (scrollTop*0.7)) {
                    var start = element.attr('data-start');
                    var stop = element.attr('data-stop');
                    var percent = (scrollTop-start)/(stop-start);
                    percent = percent-0.5;

                    var destY = movement*percent;
                    //TweenLite.to(element, .75, { y:destY, ease:Power3.easeOut, force3D : true });
                    TweenLite.set(element, { y:destY });
                }
            });
        }

    }*/


return {
        showPreloader: showPreloader
    }
  

})();
// Launch site
site.showPreloader();