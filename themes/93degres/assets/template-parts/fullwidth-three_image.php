<?php
	$image_01 = get_sub_field('image_01');
    $image_01_url = $image_01['sizes']['medium'];
	$image_02 = get_sub_field('image_02');
    $image_02_url = $image_02['sizes']['medium'];
	$image_03 = get_sub_field('image_03');
    $image_03_url = $image_03['sizes']['medium'];
?>  
<div class="full-width">
	<div class="un-tiers un-tiers__image col-xs-40 col-md-12 col-md-offset-4">
        <img src="<?php echo $image_01_url; ?>" />
    </div>
    <div class="un-tiers un-tiers__image col-xs-40 col-md-12 col-md-offset-2">
        <img src="<?php echo $image_02_url; ?>" />
    </div>
    <div class="un-tiers un-tiers__image col-xs-40 col-md-12 col-md-offset-2">
        <img src="<?php echo $image_03_url; ?>" />
    </div>
</div>
