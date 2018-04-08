<?php
	$image = get_sub_field('image');
    $image_url = $image['sizes']['medium'];
?>
	<div class="un-tiers un-tiers__image col-xs-40 col-md-41">
        <img src="<?php echo $image_url; ?>" />
    </div>
