<div class="anime container_article tranche__oneimagefull col-xs-48">
    <div class="oneimagefull col-xs-20 col-xs-offset-2  col-md-36 col-md-offset-6">
        <?php
        
        $image = get_sub_field('image_oneimagefull');
        $image_url = $image['sizes']['large'];
        
        
        ?> <img src="<?php echo $image_url?>" />
            <p class="caption">
                <?php echo $image['caption'] ?>
            </p>
    </div>
</div>