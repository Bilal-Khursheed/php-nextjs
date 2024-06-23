# Landing Page Project

This project includes a WordPress plugin and a Next.js web application designed for Job Test.

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
   - Copy and paste the code from file `./server/create-form-post.php` into the snippet editor:
   - Save and activate the snippet.

3. **Create API Endpoint:**

   - Go to `Snippets > Add New` in your WordPress admin dashboard.
   - Title the snippet "Register Contact Form API Endpoint".
   - Copy and paste the code from `./server/from-api.php` into the snippet editor:
   - Save and activate the snippet.

#### Usage

- Access the form submission endpoint at `/bilal/v1/contact-form`.

## Web (Next.js Application)

### Next.js App

The Next.js web application serves as the frontend landing page for Job Test.

#### Installation

1. Clone the repository to your local machine.
2. Navigate to `web/nextjs-app/` directory.
3. Run `npm install` to install dependencies.
4. Open file `web/src/app/components/ContactUsForm.jsx` and replace variable `apiUrl` with your url e.g `{your-site-urk}/wp-json/bilal/v1/contact-form`.
5. Save Changes.

#### Development

- Start the development server with `npm run dev`.
- Open your browser and visit `http://localhost:3000` to view the application.

