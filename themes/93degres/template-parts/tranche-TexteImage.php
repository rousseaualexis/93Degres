<div class="anime container_article tranche__texteimage col-xs-48">
    
        <?php
        
        $deuxtexte = get_sub_field('deuxtierstexte');
        $unimage= get_sub_field('untiersimage');
        $unimage_url = $unimage['sizes']['medium'];
            
        
        ?> 
    
        
        <div class="deuxtierstexte col-xs-20 col-xs-offset-2 col-sm-12 col-sm-offset-2 col-md-22 col-md-offset-6">
        
                <?php echo $deuxtexte ?>
            
            </div>
        
        <div class="untiersimage col-xs-20 col-xs-offset-2 col-sm-6 col-sm-offset-2 col-md-12 col-md-offset-2">
        <img src="<?php echo $unimage_url ?>" />
            <p class="caption">
                <?php echo $unimage['caption'] ?>
            </p>
            </div>
</div>