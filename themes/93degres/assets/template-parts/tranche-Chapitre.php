<div class="container_article anime col-xs-48 tranche__chapitre">
    
        <?php
        $texte = get_sub_field('zonetexte', false, false);
        ?> 

        <div class="chapitre col-xs-42 col-xs-offset-3 col-sm-42 col-md-22 col-md-offset-6">
        	<?php if('travelguide' === get_post_type()): ?>
        	<h2 class="text--guide-color"><?php echo $texte ?></h2>
        	<?php elseif('advice' === get_post_type()): ?>
        	<h2 class="text--advice-color"><?php echo $texte ?></h2>
        	<?php else: ?>
        	<h2 class="text--article-color"><?php echo $texte ?></h2>
        	<?php endif; ?>
        	</div>
</div>