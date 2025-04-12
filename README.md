# Blog App

## Overview

Blog App is a web application built with Next.js and Material-UI. It provides a platform for users to create and view posts. The application fetches data from an API and displays it in a user-friendly interface.

## Features

- View a list of posts with truncated titles and bodies.
- Create new posts.
- Navigate to detailed views of individual posts.

## Folder Structure

- `src/app/`: Contains the main application components, including pages and layouts.
- `src/services/`: Includes API and store configurations.
- `src/theme.ts`: Defines the Material-UI theme for the application.
- `public/`: Stores static assets like SVG files.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-app
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
