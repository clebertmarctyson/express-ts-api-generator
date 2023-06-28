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

## Usage

To use the cloned `express-ts-api-generator` repository, you can follow these steps:

1. Clone the repository to your local machine:

    ```shell
    git clone https://github.com/clebertmarctyson/express-ts-api-generator.git
    ```

2. Rename the cloned directory to your preferred project name:

    ```shell
    mv express-ts-api-generator your-project-name
    ```

3. Navigate to the project directory:

    ```shell
    cd your-project-name
    ```

4. Install the project dependencies:

    ```shell
    npm install
    ```

5. Start the development server:

    ```shell
    npm run dev
    ```

6. You can now access your Express API at `http://localhost:3001`.

Make sure to replace `your-project-name` with the desired name for your project. By renaming the directory, you can create a new project with a custom name based on the cloned repository.

## Scripts

The following scripts are available in the project:

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
