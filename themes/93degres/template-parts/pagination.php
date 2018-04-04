<div id="pagination_container" class="anime col-xs-20 col-xs-offset-2 col-sm-18 col-sm-offset-3">
    <?php
        the_posts_pagination( array(
            'type' => 'list',
            'screen_reader_text' => ' ', 
            'prev_text'          => __( 'Previous page'),
            'next_text'          => __( 'Next page'),
        ) );
    ?>
 </div>