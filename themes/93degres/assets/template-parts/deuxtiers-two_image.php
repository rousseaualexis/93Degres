
        <?php
        $deuximage = get_sub_field('image_01');
        $deuximage_url = $deuximage['sizes']['medium'];
        $deuximage_caption = $deuximage['caption'];
        $unimage= get_sub_field('image_02');
        $unimage_url = $unimage['sizes']['medium'];
        $unimage_caption = $unimage['caption'];
        ?> 
    
        <div class="deux-tiers">
        <div class="deux-tiers__two-image col-xs-48 col-xs-offset-0 col-sm-24 col-sm-offset-3 col-md-22 col-md-offset-0">
        <img src="<?php echo $deuximage_url ?>"/>
        <?php if (!empty($deuximage_caption)): ?>
            <p class="caption">
                <?php echo $deuximage_caption; ?>
            </p>
        <?php endif; ?>
        </div>
        
        <div class="deux-tiers__two-image col-xs-48 col-xs-offset-0  col-sm-15 col-sm-offset-3 col-md-22 col-md-offset-4">
            <img src="<?php echo $unimage_url?>"/>
        <?php if (!empty($unimage_caption)): ?>
            <p class="caption">
                <?php echo $unimage_caption; ?>
            </p>
        <?php endif; ?>
        </div>
    </div>

