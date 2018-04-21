<?php
/*
Template Name: Guides
*/
?><?php include'head.php';?>
<body class="all-articles">
<?php get_header(); ?>


<div class="overflow col-xs-48">
    <div id="list-sous-cat" class="col-md-push-4 col-xs-42">
<?php
$paged = ( get_query_var( 'paged' ) ) ? absint( get_query_var( 'paged' ) ) : 1;
            //list terms in a given taxonomy using wp_list_categories  (also useful as a widget)
            $post_type = 'guides';
            $taxonomy = 'category';
            $args = array(
                          'taxonomy' => $taxonomy,
                          'post_type' => $post_type,

    'paged' => $paged,
        );?>
        <?php
            $categories = get_categories($args);
            foreach( $categories as $cat ) {
                
                // Get current category's children
                $children = get_categories('show_count=1&child_of='.$cat->cat_ID);
                $child_count = 0;
                if ($children != '') {
                    foreach ($children as $child)
                    {
                        // Count the childrens post and add to total sum
                        $child_count = $child_count + $child->category_count;
                    }
                }
                $catlink = get_category_link( $cat->cat_ID );
                $catname = $cat->cat_name;
                $count = $cat->category_count;
                // Sum of count and all childrens counts
                $count = $count + $child_count;
                if ($count >= $options['min'])
                {
                    $counts{$catname} = $count;
                    $catlinks{$catname} = $catlink;
                    $category_link = sprintf( 
                    '<a href="%1$s?type=guides" alt="%2$s">%3$s<span>(%4$s)</span></a>',
                    esc_url( $catlink),
                    esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $catname ) ),
                    esc_html( $catname ),
                    esc_html( $count )
                );
                echo sprintf( esc_html__( '%s', 'textdomain' ), $category_link );
                }
            } 
            ?>   
            </div>
</div>

<div class="overflow col-xs-48">
    <div class="col-md-push-3 col-xs-44">
        <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $args = array('post_type' => array('guides'), 'posts_per_page' => 6, 'paged' => $paged );
            $wp_query = new WP_Query($args);
            while ( have_posts() ) : the_post();
                get_template_part('assets/views/content-grid');
            endwhile;
        ?>    
    </div>
</div>

<?php get_template_part('assets/views/content-pagination'); ?>
<?php get_footer(); ?>
<?php include'end.php' ?>