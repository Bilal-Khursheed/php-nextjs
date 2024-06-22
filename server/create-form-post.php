<?php
// Create Custom Post Type
function create_form_cpt() {
    $labels = array(
        'name' => _x( 'Forms', 'Post Type General Name', 'textdomain' ),
        'singular_name' => _x( 'Form', 'Post Type Singular Name', 'textdomain' ),
        'menu_name' => _x( 'Forms', 'Admin Menu text', 'textdomain' ),
        'name_admin_bar' => _x( 'Form', 'Add New on Toolbar', 'textdomain' ),
    );

    $args = array(
        'label' => __( 'Form', 'textdomain' ),
        'labels' => $labels,
        'supports' => array( 'title' ),
        'public' => true,
        'show_in_rest' => true,
        'has_archive' => true,
    );

    register_post_type( 'form', $args );
}

add_action( 'init', 'create_form_cpt', 0 );


