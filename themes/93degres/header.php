<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="description" content="<?php echo get_bloginfo( 'description' ); ?>" />
    <?php wp_head(); ?>
    
<link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('template_url') ?>/assets/img/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('template_url') ?>/assets/img/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('template_url') ?>/assets/img/favicon-16x16.png" />
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,900" rel="stylesheet">
<meta name="theme-color" content="#ffffff" />
</head>
<body>
    <div id="header" class="col-xs-48">
        <div id="logo" class="col-xs-8 col-xs-offset-2 col-sm-5 col-md-3 col-md-offset-4">
            <a href="<?php echo get_bloginfo( 'wpurl' );?>"><img src="<?php bloginfo('template_url') ?>/assets/img/logo.png" alt="93degres"/></a>
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