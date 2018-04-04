<?php
/*
Template Name: Guide
*/
?>
<?php get_header(); ?>

<div class="overflow col-xs-48">
    <div class="col-md-push-3 col-xs-48">
<?php
            //list terms in a given taxonomy using wp_list_categories  (also useful as a widget)
            $post_type = 'travelguide';
            $taxonomy = 'category';
            $args = array(
                          'taxonomy' => $taxonomy,
                          'post_type' => $post_type
        );?>
        <?php
            $categories = get_categories($args);
            foreach( $categories as $category ) {
                $category_link = sprintf( 
                    '<a href="%1$s?type=travelguide" alt="%2$s">%3$s</a><span>(%4$s)</span>',
                    esc_url( get_category_link( $category->term_id ) ),
                    esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ),
                    esc_html( $category->name ),
                    esc_html( $category->category_count )
                );
                echo sprintf( esc_html__( '%s', 'textdomain' ), $category_link );
            } 
            ?>   
            </div>
</div>

<div class="overflow col-xs-48">
    <div class="col-md-push-3 col-xs-48">
            <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$args = array( 'post_type' => array('travelguide'), 'travelguide', 'posts_per_page' => 6, 'paged' => $paged );
$wp_query = new WP_Query($args);
while ( have_posts() ) : the_post(); ?>
                <?php get_template_part( 'template-parts/grid' );?>

            <?php
            // End the loop.
            endwhile;?>
        
</div>
        </div>


<?php get_template_part('template-parts/pagination')?>
<?php get_footer(); ?>
<?php include'end.php' ?>