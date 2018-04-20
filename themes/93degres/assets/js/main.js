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
     * Init tools
     */
    var init = function() {
        bindEvents();
    }


    /**
     * Bind events
     */
    var bindEvents = function() {
        // Prevent image dragging
        $('body').on('mousedown', 'img', function() { return false; });
    }


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
        init: init,
        isDesktop: isDesktop,
        isTablet: isTablet,
        isSmartphone: isSmartphone,
    }


})();
var site = (function() { 
    var init = function() {
        // Tools
        tools.init();
        bindEvents();

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
        linkTransition = false;
        $('.js-link').removeClass('js-link');

        // Global things to do on page init
        $(window).trigger('resize');

        canReveal = false;
        setTimeout(function(){

            canReveal = true;
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

        TweenLite.set($('.sitenav--logo'),             {alpha:0});
        TweenLite.set($('.sitenav--menu-link-text'),   {alpha:0});
        TweenLite.set($('.sitenav--menu-link-stroke'), {alpha:0});
        TweenLite.set($('.sitesurnav li'),             {alpha:0});

        TweenLite.to($('.preload'), 1, {alpha:0, delay:1.25, onComplete:function(){
            $('.preload').remove();
        }});

        /*TweenLite.set($('.sitesurnav'), {alpha:0});
        TweenLite.set($('.sitenav'), {alpha:0});*/

        /*var tl1 = new TimelineLite();
        tl1.staggerFromTo($('.preload--shapes-1 .preload--shape'), 1.2, {alpha:0, y:20}, {alpha:1, y:0, ease:Power3.easeOut}, 0.1, 0.25);
        tl1.staggerFromTo($('.preload--shapes-2 .preload--shape'), 1,   {alpha:0, y:20}, {alpha:1, y:0, ease:Power3.easeOut}, 0.1, 0.25);
        tl1.staggerTo($('.preload--shapes-1 .preload--shape'), .5, {alpha:0, y:-20, ease:Power3.easeIn}, 0.05, 0.2+2);
        tl1.staggerTo($('.preload--shapes-2 .preload--shape'), .5, {alpha:0, y:-20, ease:Power3.easeIn}, 0.05,   2);
        tl1.to($('.preload'), .5, {alpha:0, ease:Power3.easeIn, onComplete:function(){
            $('.preload').remove();
        }}, 2.5);

        setTimeout(function(){
            init();
        }, 3200);*/

        setTimeout(function(){
            init();
        }, 1500);
    }


    /*============================================================
            Events
    ============================================================== */

        var bindEvents = function() {
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
        });

        }


 /*  =============================================================================
        MODULES INIT - Les modules à lancer à chaque fois qu'une page est chargée
    ============================================================================== */

  var allModules = function() {

        hero();
    }



 /*  =============================================================================
        MODULES
    ============================================================================== */

    var hero = function(){

        var $el = $('#first-post-texte');
        var $text = $("#title h1")
            var split = new SplitText($text,{charsClass: "charsplit", wordsClass: "wordsplit"
                }
            );

        //new SplitText(('#title') ,{linesChars:"split-line-overflow"})
           /* var split = new SplitText(
                ('#title'),{
                    type: 'lines',
                    linesClass: 'split-line-overflow',
                    wordsClass: 'split-word',
                    charsClass: 'split-char'
                }
            );*/
            var tl = new TimelineLite();

            tl.from($('.mask'), 1.4, {display: 'block', ease:Power1.easeOut}, 0.2);
            tl.to($('.mask'), 1.4, {alpha: 0, display: 'none', ease:Power1.easeOut}, 0.2);
            tl.from($el.find('.image'), 1.4, {y:'100%', ease:Power4.easeOut}, 0.3);
            tl.staggerFrom($el.find('h1 .charsplit'), 1.2, {y:'150%', ease:Power4.easeOut}, 0.01, '-=1');
            tl.from($el.find('p'), 0.8, {width:'0', ease:Power4.easeInOut}, '-=0.6');
            tl.from($el.find('.cta'), 1, {y:'300%', ease:Power4.easeOut}, '-=1.6');


            
 
    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $('.mask').fadeIn('slow', redirectPage);
      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }

             }
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

    }


return {
        showPreloader: showPreloader
    }
  

})();
// Launch site
site.showPreloader();