<div class="container_article col-xs-48">
    <div class="anime tranche__grandeimagedroite ">
        <?php
        $image = get_sub_field('grandeimage');
        $image_url = $image['sizes']['large'];
        $texte = get_sub_field('untierstexte');
        ?> 

        <div class="untierstexte col-xs-20 col-xs-offset-2 col-sm-6 col-sm-offset-2 col-md-12 col-md-offset-4">
            <?php echo $texte ?>
        </div>
        <div class=" grandeimage col-xs-20 col-xs-offset-2  col-sm-14 col-sm-offset-2 col-md-28 col-md-offset-2">
            <img src="<?php echo $image_url?>" />
                <p class="caption">
                    <?php echo $image['caption'] ?>
                </p>
        </div>
    </div>
</div>