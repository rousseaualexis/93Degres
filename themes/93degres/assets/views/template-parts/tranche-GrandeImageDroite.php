<div class="container_article col-xs-48">
    <div class="anime tranche__grandeimagedroite ">
        <?php
        $image = get_sub_field('grandeimage');
        $image_url = $image['sizes']['large'];
        $texte = get_sub_field('untierstexte');
        ?> 

        <div class="untierstexte col-xs-42 col-xs-offset-3 col-sm-15 col-md-12 col-md-offset-3">
            <?php echo $texte ?>
        </div>
        <div class=" grandeimage col-xs-48 col-xs-offset-0  col-sm-24 col-sm-offset-3 col-md-28 col-md-offset-2">
            <img src="<?php echo $image_url?>" />
                <p class="caption">
                    <?php echo $image['caption'] ?>
                </p>
        </div>
    </div>
</div>