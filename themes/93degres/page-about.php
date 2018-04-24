<?php
/*
Template Name: À propos
*/
?>
<?php include'head.php'; ?>
<body>
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
<div id="about" class="container">
    <div id="introduction" class="col-xs-48 col-xs-offset-0">
        <div id="introduction-title" class="col-xs-32 col-xs-offset-8">
            <h2>À propos</h2>
            <h1><?php echo strip_tags(get_field('introduction'), '<br><em><strong>');?></h1>
        </div>
    </div>
    <h3 class="col-xs-42 col-xs-offset-3 col-md-32 col-md-offset-4"></h3>
    <div id="layout" class="col-xs-48">
    <?php
    // check if the flexible content field has rows of data
    if( have_rows('layout') ):
        // loop through the rows of data
        while ( have_rows('layout') ) : the_row();
            // check current row layout
            if( get_row_layout() == 'deux_tiers' ):
                /*$posts = get_fields();
                echo'<pre>';
                    var_dump($posts);
                echo '</pre>';
                */
                if (have_rows('deux_tiers')) :  
                    echo '<div class="deux-tiers--container col-md-26 col-md-offset-4">';
                    while (have_rows('deux_tiers')): the_row();
                        $template = get_sub_field('bloc');
                        get_template_part('assets/template-parts/deuxtiers', $template);
                    endwhile;
                    echo '</div>';
                endif;
            endif;
            if( get_row_layout() == 'deux_tiers_un_tiers' ):
    /*
                $posts = get_fields();
                echo'<pre>';
                    var_dump($posts);
                echo '</pre>';
            */  
                if (have_rows('deux_tiers')) :
                    echo '<div class="deux-tiers--container col-md-26 col-md-offset-4">';
                    while (have_rows('deux_tiers')): the_row();
                        $template = get_sub_field('bloc');
                        get_template_part('assets/template-parts/deuxtiers', $template);
                    endwhile;
                    echo '</div>';
                endif;
                if (have_rows('un_tiers')) :
                    echo '<div class="un-tiers--container col-xs-42 col-xs-offset-3 col-md-14 col-md-offset-2">';
                    while (have_rows('un_tiers')): the_row();
                        $template = get_sub_field('bloc');
                        get_template_part('assets/template-parts/untiers', $template);
                    endwhile;
                    echo '</div>';
                endif;
            endif;
            if( get_row_layout() == 'full_width' ):
    /*
                $posts = get_fields();
                echo'<pre>';
                    var_dump($posts);
                echo '</pre>';
            */  
                if (have_rows('full_width')) :
                    echo '<div class="full-width--container col-md-48">';
                    while (have_rows('full_width')): the_row();
                        $template = get_sub_field('bloc');
                        get_template_part('assets/template-parts/fullwidth', $template);
                    endwhile;
                    echo '</div>';
                endif;
            endif;
        endwhile;
    else :
        // no layouts found
    endif;
    ?>
    </div>  
</div>
<div class="col-xs-48">
    <div class="col-xs-42 col-xs-offset-3 col-sm-32 col-sm-offset-8 col-md-24 col-md-offset-12  ">
        <?php
            if (comments_open() || get_comments_number()): comments_template();
            endif;
        ?>
    </div>
</div>
<?php get_footer(); ?>
<?php include'end.php' ?>