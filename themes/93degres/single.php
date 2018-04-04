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
<div id="introduction" class="overflow post-article col-xs-48 col-xs-offset-0">
                <div id="introduction-title" class="col-xs-40 col-xs-offset-4">
                    <h2 class="categories">
                        <a href="<?php echo $term_url; ?>">
                            <img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ >
                            <?php echo $term_name; ?>
         
                        </a>
                    </h2>
                    <div class="country-code">
                        <h5 class="randomize text--article-color"><?php echo $destination_code; ?></h5>
                    </div>
                    <div class="label randomize">
                        <img class="image" src="<?php bloginfo('template_url') ?>/assets/img/label__carnet-de-voyage.png"/>
                    </div>
                    <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<br>' . get_field('subtitle');}?></h1>
                    <h5><? the_time(get_option('date_format')); ?></h5>
                </div>
                <div class="col-xs-32 col-xs-offset-8">
                    <h3>
                        <?php echo get_field('introduction', false, false); ?>
                    </h3>
                </div>
</div>
<div id="introduction__thumbnail" class="article-background-color col-xs-48">
<div class="cover-image col-xs-40 col-xs-offset-4">
    <div class="image image--1-2" style="background-image: url('<?php echo $thumbnail_url; ?>');"></div>
</div>
</div>
<div class="article-background-color col-xs-48">
<?php
    $posts = get_fields();
    if ($posts):
        while (have_rows('sections')): the_row();
            $template = get_sub_field('template');
            get_template_part('assets/template-parts/tranche', $template);
        endwhile;
    get_template_part('views/content-realated');
    endif;
?>
</div>
</div>
<div class="col-xs-48">
    <div class="col-xs-24 col-xs-offset-12">
        <?php
            if (comments_open() || get_comments_number()): comments_template();
            endif;
        ?>
    </div>
</div>
<?php get_footer(); ?>
<?php include'end.php' ?>