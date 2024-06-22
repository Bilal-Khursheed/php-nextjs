<?php
// CREATE REST API endpoint
function register_contact_form_endpoint() {
    register_rest_route( 'bilal/v1', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'handle_contact_form_submission',
        'permission_callback' => '__return_true',
    ) );
}

add_action( 'rest_api_init', 'register_contact_form_endpoint' );

function handle_contact_form_submission( $request ) {
    $name = sanitize_text_field( $request['name'] );
    $email = sanitize_email( $request['email'] );
    $message = sanitize_textarea_field( $request['message'] );

    if ( empty( $name ) || empty( $email ) || empty( $message ) ) {
        return new WP_Error( 'missing_data', 'Name, email, and message are required.', array( 'status' => 400 ) );
    }

    // Check for existing submissions with the same email in the past hour
    $args = array(
        'post_type' => 'form',
        'meta_query' => array(
            array(
                'key' => 'email',
                'value' => $email,
                'compare' => '=',
            ),
        ),
        'date_query' => array(
            array(
                'after' => '1 hour ago'
            ),
        ),
    );

    $query = new WP_Query( $args );

    if ( $query->have_posts() ) {
        return new WP_Error( 'duplicate_submission', 'A form submission with this email has been received within the past hour.', array( 'status' => 400 ) );
    }

    // Create new form post
    $post_id = wp_insert_post( array(
        'post_title' => $name,
        'post_type' => 'form',
        'post_status' => 'publish',
    ) );

    if ( is_wp_error( $post_id ) ) {
        return new WP_Error( 'post_error', 'There was an error saving the form submission.', array( 'status' => 500 ) );
    }

    // Save email and message as post meta
    update_post_meta( $post_id, 'email', $email );
    update_post_meta( $post_id, 'message', $message );

    return new WP_REST_Response( array( 'message' => 'Form submission successful.' ), 200 );
}
