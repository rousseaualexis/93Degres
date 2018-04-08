    <div class="deux-tiers deux-tiers__one-image col-xs-48 col-xs-offset-0 col-md-48">
        <?php
        
        $image = get_sub_field('image');
        $image_url = $image['sizes']['large'];
        
        
        ?>
        <img src="<?php echo $image_url ?>" />
            <p class="caption">
                <?php echo $image['caption'] ?>
            </p>
    </div>