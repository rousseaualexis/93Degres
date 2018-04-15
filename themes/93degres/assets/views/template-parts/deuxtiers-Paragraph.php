<?php
    $texte = strip_tags(get_sub_field('paragraph'), '<br><em><strong><a>');
?>
<p class="deux-tiers deux-tiers__paragraph col-xs-42 col-xs-offset-3 col-sm-24 col-md-40 col-md-offset-4">
    <?php echo $texte ?>
</p>
