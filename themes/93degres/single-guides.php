<?php get_header(); ?>
<?php $thumbnail = get_field('thumbnail');
    if ($thumbnail) :
    $thumbnail_url = $thumbnail['sizes']['large'];
    endif;
    $id = get_the_id();
    $terms = get_the_terms( $id, 'category' );
        foreach($terms as $term) {
            $destination_code = get_field('destination_code', $term);
            $flag = get_field('flag', $term);
            $flag_url = $flag['sizes']['thumbnail'];
            $term_url = get_term_link($term);
            $term_name = $term->name;
        }
?>

<div id="guide" class="container col-xs-48">
    <div id="introduction" class="col-xs-48 col-xs-offset-0">
        <div id="introduction-title" class="col-xs-42 col-xs-offset-3">
            <a class="categories" href="<?php echo $term_url; ?>">
                <img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ >
                <?php echo $term_name; ?>

            </a>
            <div id="country-code" class="country-code">
                <h5 class="randomize"><?php echo $destination_code; ?></h5>
            </div>
            <div id="label" class="label">
                <img class="randomize" src="<?php bloginfo('template_url') ?>/assets/img/label__guidex.png"/>
            </div>
            <div id="date" class="date">
                <h5 class="randomize"><? the_time(get_option('date_format')); ?></h5>
            </div>
            <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?></h1>
        </div>
        <h3 class="col-xs-42 col-xs-offset-3 col-md-32 col-md-offset-8"><?php echo strip_tags(get_field('introduction'), '<br><em><strong>');?></h3>
     </div>

    <div id="introduction__thumbnail" class="col-xs-48">
        <div class="cover-image col-xs-42 col-xs-offset-3 col-md-40 col-md-offset-4">
            <div class="image image--1-2" style="background-image: url('<?php echo $thumbnail_url; ?>');"></div>
        </div>
    </div>
    <?php include'assets/views/layout-loop.php'; ?>
</div>

<?php include'assets/views/comments.php'; ?>
<?php get_footer(); ?>
<script>
window.requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(f){setTimeout(f, 1000/60)}

var country_code = document.getElementById('country-code')
var label = document.getElementById('label')
var date = document.getElementById('date')

function parallax(){
var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
country_code.style.marginTop = scrolltop * .5 + 'px' // move b_lines at 20% of scroll rate
label.style.marginTop = scrolltop * .15 + 'px' // move b_lines at 20% of scroll rate
date.style.marginTop = scrolltop * .1 + 'px' // move b_lines at 20% of scroll rate
country_code.style.transform = 'rotate(' + -scrolltop * .025 + 'deg)' // move b_lines at 20% of scroll rate
label.style.transform = 'rotate(' +scrolltop * 0.03 + 'deg)' // move b_lines at 20% of scroll rate
date.style.transform = 'rotate(' +scrolltop * 0.01 + 'deg)' // move b_lines at 20% of scroll rate
}

window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallax) // call parallaxbubbles() on next available screen paint
}, false);
</script>
<?php include'end.php' ?>