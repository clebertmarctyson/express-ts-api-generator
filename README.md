# express-ts-api-generator

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The `express-ts-api-generator` package is a powerful tool designed to simplify the process of starting a Node.js Express API project using TypeScript. It provides a convenient way to scaffold the project structure, configure TypeScript settings, and set up essential components such as routes, controllers, services, and middleware.

## Features

-   Quick project setup: Generate a TypeScript-based Express API project with just a few simple commands.
-   TypeScript configuration: Automatically configure TypeScript settings for seamless integration with Express.
-   Boilerplate code: Get started with preconfigured routes, controllers, services, and middleware for common API functionalities.
-   Testing support: Set up a testing environment with Jest for testing your Express API.
-   Development convenience: Utilize Nodemon for automatic server restarting during development.
-   CORS support: Easily handle Cross-Origin Resource Sharing (CORS) with the included CORS middleware.
-   Environment variables: Use dotenv to manage your environment variables effortlessly.

## Installation

You can install the `express-ts-api-generator` package via npm. Run the following command:

```shell
npm install express-ts-api-generator
```

## Usage

To use the `express-ts-api-generator` package, follow these steps:

1. Create a new directory for your project and navigate to it in the command line.

2. Run the following command to generate a new TypeScript-based Express API project:

```shell
npx express-ts-api-generator
```

3. After the project is generated, navigate into the project directory and install the dependencies:

```shell
cd your-project-name
npm install
```

4. Start the development server with the following command:

```shell
npm run dev
```

5. You can now access your Express API at `http://localhost:3001`.

## Scripts

-   `npm run build`: Build the TypeScript source code.
-   `npm start`: Start the Express API server.
-   `npm run dev`: Start the development server with automatic server restarting using Nodemon.
-   `npm test`: Run tests using Jest.
-   `npm run test:coverage`: Run tests and generate coverage reports using Jest.
-   `npm run test:watch`: Run tests in watch mode using Jest.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/clebertmarctyson/express-ts-api-generator).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
