<?php
/*
Template Name: Homepage
*/
?>
<?php get_header(); ?>
<style>
.page_item a, .menu-item a{
    color: #000000;
}
</style>
<div id="home-posts" class="overflow col-xs-48">
    <div class="col-xs-48 col-xs-push-0 col-md-push-3">
        <?php
            $args = array(
                'post_type' => array('travelguide', 'post'),
                'posts_per_page' => 4
            );
            $myquery = new WP_Query( $args );
            if (have_posts()) :
                $post = $posts[0]; $count=0;
                while ($myquery->have_posts()) : $myquery->the_post();
                    $count++;
                    if($count == 1) :
        ?>
        <div id="first-post">
                    <?php if('travelguide' === get_post_type()): ?>
                        <div class="post post-guide col-xs-pull-0 col-xs-48 col-md-pull-3">
                            <div id="first-post-texte" class="col-xs-42 col-xs-pull-0 col-xs-offset-3 col-md-push-6 col-md-offset-0 col-md-20">
                                <?php
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

                                <a class="categories" href="<?php echo $term_url; ?>">
                                    <img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ >
                                    <?php echo $term_name; ?> <span> - Guide</span>
                                </a>
                                    
                    <?php else: ?>
                        <div class="post post-article col-xs-pull-0 col-xs-48 col-md-pull-3">
                            <div id="first-post-texte" class="col-xs-42 col-xs-pull-0 col-xs-offset-3 col-md-push-6 col-md-offset-0 col-md-20">
                                <?php
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
                                <a class="categories" href="<?php echo $term_url; ?>">
                                    <img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ >
                                    <?php echo $term_name; ?>
                                </a>
                    <?php endif; ?>
                                <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<span>' . get_field('subtitle') . '</span>';}?></h1>
                                <h4><?php echo get_field('summary'); ?></h4>
                                <a href="<?php the_permalink(); ?>"><div class="cta">Lire la suite</div>
                                </a>
                            </div>
                        <?php 
                            $thumbnail = get_field( 'thumbnail' );
                            $thumbnail_url = $thumbnail['url'];
                        ?>
                            <div id="first-post-image" class="col-xs-42 col-xs-offset-3 col-md-offset-0 col-md-pull-1 col-md-25">
                                <div class="image image--4-5" style="background-image: url('<?php echo $thumbnail['url'];?>');" title="<?php echo $thumbnail['alt']; ?>">
                                </div>
                            </div>
                            <div class="country-code">
                          <div id="marquee" class="marquee3k" data-speed="1.5" data-reverse="true">

                        <h5><?php echo $destination_code; ?></h5>
                        </div>
                    </div>

                        </div>
        </div>
        <?php
                    else :
                        get_template_part( 'assets/views/content-grid' );
                    endif;
                endwhile;
            endif;
        ?>
    </div>
</div>
<div id="destinations" class="container col-xs-48">
    <h5 class="col-xs-48">Destinations</h5>
    <div class="col-xs-42 col-xs-offset-3">
    <?php
        $args = array(
        'orderby' => 'name',
        'parent' => 0
        );
        $categories = get_categories( $args );
        foreach ( $categories as $category ) {
            $category_link = get_category_link( $category );
    ?>
    <li>
            <a href="<?php echo esc_url( $category_link ); ?>"> <?php echo $category->name; ?></a>
    </li>
    <?php } ?>
</div>
</div>
<div id="about" class="container col-xs-48">
    <div class="texte--center col-xs-42 col-xs-offset-3 col-sm-32 col-sm-offset-8">
        <h2>Nous sommes Agathe&nbsp&&nbspAlexis, deux directeurs artistiques parisiens, passionnés de&nbspvoyage, de design et de photographie.</h2>
        <a href="<?php the_permalink(); ?>"><div class="cta">En savoir plus</div></a>
    </div>
</div>

<?php include'assets/views/content-instagram.php'; ?>
<?php get_footer(); ?>
<script type="text/javascript">
    // Init Contr
    Marquee3k.init();
    // Refresh all instances
    Marquee3k.refreshAll();
</script>
<?php include'end.php' ?>
