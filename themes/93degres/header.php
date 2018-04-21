<div class="mask"></div>
    <div id="header" class="col-xs-48">
        <div id="logo" class="col-xs-8 col-xs-offset-2 col-sm-5 col-md-3 col-md-offset-4">
            <a href="<?php echo get_bloginfo( 'wpurl' );?>"><img src="<?php bloginfo('template_url') ?>/assets/img/logo_grey.png" alt="93degres"/></a>
        </div>
            <?php 
            $args = array(
            'depth'       => 0,
            'sort_column' => 'menu_order',
            'menu_class'  => 'menu',
            'include'     => '',
            'exclude'     => '',
            'echo'        => true,
            'show_home'   => false,
            'link_before' => '',
            'link_after'  => ''
            );
            wp_nav_menu( $args ); ?>
    </div>