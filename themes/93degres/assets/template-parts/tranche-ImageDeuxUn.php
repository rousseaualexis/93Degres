<div class="container_article col-xs-48 anime tranche__imagedeuxun">
        <?php
        $deuximage = get_sub_field('deuxtiersimage');
        $deuximage_url = $deuximage['sizes']['medium'];
        $deuximage_caption = $deuximage['caption'];
        $unimage= get_sub_field('untiersimage');
        $unimage_url = $unimage['sizes']['medium'];
        $unimage_caption = $unimage['caption'];
        ?> 
    
        
        <div class="deuxtiersimage col-xs-48 col-xs-offset-0 col-sm-24 col-sm-offset-3 col-md-22 col-md-offset-6">
        <img src="<?php echo $deuximage_url ?>"/>
        <?php if (!empty($deuximage_caption)): ?>
            <p class="caption">
                <?php echo $deuximage_caption; ?>
            </p>
        <?php endif; ?>
        </div>
        
        <div class="untiersimage col-xs-48 col-xs-offset-0  col-sm-15 col-sm-offset-3 col-md-12 col-md-offset-2">
            <img src="<?php echo $unimage_url?>"/>
        <?php if (!empty($unimage_caption)): ?>
            <p class="caption">
                <?php echo $unimage_caption; ?>
            </p>
        <?php endif; ?>
        </div>

</div>