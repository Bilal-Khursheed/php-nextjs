# Landing Page Project

This project includes a WordPress plugin and a Next.js web application designed for [briefly describe purpose].

## Server (WordPress Plugin)

### Contact Form Plugin

The Contact Form Plugin is a custom WordPress plugin that provides a REST API endpoint for handling form submissions.

#### Installation

1. **Install Code Snippets Plugin:**
   - Navigate to your local WordPress admin dashboard.
   - Go to `Plugins > Add New`.
   - Search for "Code Snippets".
   - Install and activate the "Code Snippets" plugin by Code Snippets Pro.

2. **Setup Form:**

   - Go to `Snippets > Add New` in your WordPress admin dashboard.
   - Title the snippet "Register Form Custom Post Type".
   - Copy and paste the following code into the snippet editor:
     ```php
     // Register Custom Post Type
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
     ```
   - Save and activate the snippet.

3. **Create API Endpoint:**

   - Go to `Snippets > Add New` in your WordPress admin dashboard.
   - Title the snippet "Register Contact Form API Endpoint".
   - Copy and paste the following code into the snippet editor:
     ```php
     // Register REST API endpoint
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
         $message = sanitize_textarea_field( $request['message' );

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
     ```
   - Replace `your_name` in the endpoint URL with your actual name or any preferred identifier.
   - Save and activate the snippet.

#### Usage

- Access the form submission endpoint at `/your_name/v1/contact-form`.
- [Include any additional usage instructions or configuration details.]

## Web (Next.js Application)

### Next.js App

The Next.js web application serves as the frontend landing page for [project purpose].

#### Installation

1. Clone the repository to your local machine.
2. Navigate to `web/nextjs-app/` directory.
3. Run `npm install` to install dependencies.

#### Development

- Start the development server with `npm run dev`.
- Open your browser and visit `http://localhost:3000` to view the application.

## Additional Notes

- [Include any additional information or special instructions here.]

