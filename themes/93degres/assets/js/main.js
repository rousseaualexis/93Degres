/*app = {
    transformElem: function (t, e) {
        for (var n = ["webkitTransform", "mozTransform", "msTransform", "OTransform", "transform"], o = n.length, i = 0; o > i; i++) t.style[n[i]] = e
    }
    , init: function () {
        this.initVar(), this.initElem()
    }
    , initVar: function () {}
    , initElem: function () {
        this.title = document.e("title"),this.out_un = document.e("out_un"), this.in_un = document.e("in_un"), this.top_image = document.e("top_image"), this.top_title = document.e("top_title"), this.grey_top_guide = document.e("grey_top_guide"), this.grey_extract = document.e("grey_extract"), this.grey_top_home = document.e("grey_top_home"), this.inner_top_home = document.e("inner_top_home"), this.inner_title_guide = document.e("inner_title_guide"), this.real_img = document.e("real_img"), this.grey_bgd_about = document.e("grey_bgd_about"), this.about_us_home_content = document.e("about_us_home_content"), this.top_article_image = document.e("top_article_image"), this.all_guides = document.e("all-guides"), this.all_articles = document.e("all-articles"), this.top_img = document.e("top_img"), this.list_sous_cat = document.e("list-sous-cat"), this.contenu = document.e("contenu"), this.all_about_content = document.e("all_about_content"), this.top_image_guide = document.e("top_image_guide")
    }
    , next: function (t) {
      //  app.transformElem(out_un, "translate(0,0)")
        
    }
    
    , open: function () {
       // app.transformElem(in_un, "translate(0,-100%)")
    }
    , open_top_filter: function () {
        app.title.style.bottom = "0",
        app.title.style.opacity = "1",
        app.list_sous_cat.style.top = "0",
        app.list_sous_cat.style.opacity = "1"
    }
}, Object.prototype.e = function (t) {
    var e = this.valueOf().getElementById(t);
    return e
};

    if (window.innerWidth > 768) {
        document.getElementById("nav").style.display = "block";
    }
    else {
        document.getElementById("nav").style.display = "none";
    };
    window.addEventListener('resize', resize);

    function resize() {
        if (window.innerWidth > 768) {
            document.getElementById("nav").style.display = "block";
        }
        else {
            document.getElementById("nav").style.display = "none";
        };
    };
    document.getElementById("mobile-menu").onclick = function () {
        myFunction()
    };
    // myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content 
    function myFunction() {
        var style = document.getElementById("nav").style;
        if (style.display == "none") {
            style.display = "block";
        }
        else {
            style.display = "none";
        }
    };

*/


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


