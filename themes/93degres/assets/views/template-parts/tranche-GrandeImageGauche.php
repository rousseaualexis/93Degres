<div class="container_article col-xs-48">
    <div class="anime tranche__grandeimagegauche">
        <?php
        $image = get_sub_field('grandeimage');
        $image_url = $image['sizes']['large'];
        $texte = get_sub_field('untierstexte');
        ?> 
        <div class="grandeimage col-xs-48 col-xs-offset-0 col-sm-27 col-md-28 col-md-offset-0">
            <img src="<?php echo $image_url?>"/>
            <p class="caption">
                <?php echo $image['caption'] ?>
            </p>
        </div>
        
        <div class="untierstexte col-xs-42 col-xs-offset-3 col-sm-15 col-md-offset-2 col-md-12">
            <?php echo $texte ?>
        </div>
    </div>
</div>