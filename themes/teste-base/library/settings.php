<?php

namespace teste-base;

function get_default_card_model () {
    return 'vertical';
}

function get_card_models () {
    return [
        'cover' => [
            'slug' => 'cover',
            'label' => __('Cover card', 'teste-base'),
        ],
        'horizontal' => [
            'slug' => 'horizontal',
            'label' => __('Horizontal card', 'teste-base'),
        ],
        'vertical' => [
            'slug' => 'vertical',
            'label' => __('Vertical card', 'teste-base'),
        ],
    ];
}

function get_card_modifiers () {
    return [];
}

function register_youtube_settings () {
    register_setting(
        'general',
        'youtube_key',
        'esc_attr'
    );

    add_settings_field(
        'youtube_key',
        '<label for="youtube_key">' . __( 'YouTube Key', 'teste-base') . '</label>',
        'teste-base\\youtube_key_html',
        'general'
    );
}
add_action( 'admin_init', 'teste-base\\register_youtube_settings' );

function youtube_key_html() {
    $youtube_key_option = get_option( 'youtube_key', '' );
    echo '<input type="text" name="youtube_key" id="youtube_key" value="' . $youtube_key_option . '" autocomplete="off">';
    echo '<p><i>Crie uma chave de API do YouTube em <a href="https://console.cloud.google.com/apis/credentials">https://console.cloud.google.com/apis/credentials</a></i></p>';
}

