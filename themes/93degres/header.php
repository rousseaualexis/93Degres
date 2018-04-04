<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="description" content="<?php echo get_bloginfo( 'description' ); ?>" />
    <?php wp_head(); ?>
    <noscript>
        <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/noscript.css">
    </noscript>
    
<link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('template_url') ?>/img/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('template_url') ?>/img/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('template_url') ?>/img/favicon-16x16.png">
<link rel="manifest" href="<?php bloginfo('template_url') ?>/img/manifest.json">
<link rel="mask-icon" href="<?php bloginfo('template_url') ?>/img/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
</head>
<body>
    <div id="header" class="col-xs-48">
        <div id="logo" class="col-xs-3 col-xs-offset-4">
            <a href="<?php echo get_bloginfo( 'wpurl' );?>"><img src="<?php bloginfo('template_url') ?>/img/logo.png"/></a>
        </div>
            <?php 
            $args = array(
            'depth'       => 0,
            'sort_column' => 'menu_order',
            'menu_class'  => 'menu',
            'container_id' => 'nav_container',
            'include'     => '',
            'exclude'     => '',
            'echo'        => true,
            'show_home'   => false,
            'link_before' => '',
            'link_after'  => ''
            );
            wp_nav_menu( $args ); ?>
    </div>