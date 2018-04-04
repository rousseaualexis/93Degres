<div class="anime container_article tranche__deuxtierstexte col-xs-48">
   
        <?php
        
        $deuxtexte = get_sub_field('deuxtierstexte');
        $untexte= get_sub_field('untierstexte')
        
        ?> 
    
        
        <div class="deuxtierstexte col-xs-20 col-xs-offset-2 col-sm-12 col-sm-offset-2 col-md-22 col-md-offset-6">
        
                <?php echo $deuxtexte ?>
            
            </div>
        
        <div class="untierstexte col-xs-20 col-xs-offset-2  col-sm-6 col-sm-offset-2 col-md-12 col-md-offset-2">
        <?php echo $untexte ?>
            </div>
</div>