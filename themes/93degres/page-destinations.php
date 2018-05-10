<?php
/*
Template Name: Destinations
*/
?>
<?php include'head.php'; ?>
<body class="all-destinations">
<?php get_header(); ?>
<div class="about--content col-xs-48">
<h1 id="introduction-title">Destinations</h1>

</div>


<div class="grid col-xs-48">
<?php
$cat = get_query_var('cat');
$args = array(
	'child_of' => $cat,
	'orderby' => 'name',
	'order' => 'ASC',
    
  'hierarchical' => 1,
  'taxonomy' => 'category',
  'hide_empty' => 1,
  'parent' => 0,
	);
	
	$categories = get_categories($args);
	foreach($categories as $category) { 

            $thumbnail = get_field('thumbnail', $category);
            $thumbnail_url = $thumbnail['sizes']['large'];
        
	echo '<div class="col-xs-42 col-xs-offset-0 col-xs-push-0 col-sm-12 col-sm-offset-0 col-md-13 col-md-offset-1 col-md-push-3">';
	echo '<a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '>';
    ?>
    <h4><?php echo $category->name; ?></h4>
    <div class="image" style="background-image: url('<?php echo $thumbnail_url; ?>')"></div>
   
    </a>
</div>
    
    <?php } ?>

   
    </div>
    
  


<?php get_footer(); ?>
<?php include'end.php' ?>

   