<?php get_header(); ?>
<div class="error-404">
        <h1>
            <span class="error"><?php _e('error', 'teste-base') ?></span>
            <span class="num">404</span>
        </h1>

        <p><?php _e('Page not found', 'teste-base') ?></p>
        <a href="<?= home_url() ?>" class="button"> <span><?php _e('Return to home page', 'teste-base') ?></span> </a>
    </div>

<?php get_footer(); ?>
