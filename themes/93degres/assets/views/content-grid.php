<?php if ('travelguide' === get_post_type()): ?>
    <div class="anime post post-guide col-xs-42 col-xs-offset-3 col-md-14 col-md-offset-1 ">
            <?php
                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['thumbnail'];
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
            <a href="<?php the_permalink(); ?>">
                <div class="image image--3-2 image_thumbnail" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                    <div class="image_thumbnail--hover">
                        <div class="table">
                            <div class="table-cell">👁</div>
                            <div class="country-code">
                                <h5 class="randomize text--guide-color"><?php echo $destination_code; ?></h5>
                            </div>
                            <div class="label randomize">
                                <img class="image" src="<?php bloginfo('template_url') ?>/assets/img/label__guide.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
                <h2 class="categories text--guide-color">
                    <a href="<?php echo $term_url; ?>">
                        <img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ >
                        <?php echo $term_name; ?><span> - Guide</span>
                    </a>
                </h2>
                <a href="<?php the_permalink(); ?>">
                <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo ' -&nbsp' . get_field('subtitle');}?></h1>
                <h4><?php echo get_field('summary'); ?></h4>
                </a>
    </div>
<?php else: ?>
    <div class="anime post post-article col-xs-42 col-xs-offset-3 col-md-14 col-md-offset-1 ">
            <?php
                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['thumbnail'];
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
            <a href="<?php the_permalink(); ?>">
                <div class="image image--3-2 image_thumbnail" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                    <div class="image_thumbnail--hover">
                        <div class="table">
                            <div class="table-cell">👁</div>
                            <div class="country-code">
                                <h5 class="randomize text--article-color"><?php echo $destination_code; ?></h5>
                            </div>
                            <div class="label randomize">
                                <img class="image" src="<?php bloginfo('template_url') ?>/assets/img/label__carnet-de-voyage.png"/>
                            </div>
                        </div>
                    </div>
                </div>
               
            </a>
            <h2 class="categories text--article-color">
                <a href="<?php echo $term_url; ?>">
                    <img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ >
                    <?php echo $term_name; ?>
                </a>
            </h2>
            <a href="<?php the_permalink(); ?>">  
                <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo ' -&nbsp' . get_field('subtitle');}?></h1>
                <h4><?php echo get_field('summary'); ?></h4>
                <h5 style="width: 100%; float: left;"> <?php the_time(get_option('date_format')); ?></h5>
            </a>
    </div>
<?php endif; ?>
