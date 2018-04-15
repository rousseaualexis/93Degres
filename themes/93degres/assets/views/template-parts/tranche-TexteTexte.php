<div class="anime container_article tranche__deuxtierstexte col-xs-48">
   
        <?php
        
        $deuxtexte = get_sub_field('deuxtierstexte');
        $untexte= get_sub_field('untierstexte')
        
        ?> 
    
        
        <div class="deuxtierstexte col-xs-42 col-xs-offset-3 col-sm-24 col-md-22 col-md-offset-6">
        
                <?php echo $deuxtexte ?>
            
            </div>
        
        <div class="untierstexte col-xs-42 col-xs-offset-3 col-sm-15 col-md-12 col-md-offset-2">
        <?php echo $untexte ?>
            </div>
</div>