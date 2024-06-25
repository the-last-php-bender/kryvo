# Krývo

![Krývo Logo](https://dummy-link-to-kryvo-logo.com/logo.png) <!-- Replace this with the actual logo link -->

Krývo is a secure URL shortener application that allows users to shorten long URLs while ensuring the security of the stored URLs using bcrypt encryption. This application is built with Express.js, Sequelize ORM, MySQL, and bcrypt.

## Features

- Shorten long URLs to shorter ones.
- Securely store URLs with bcrypt encryption.
- Redirect short URLs to their original long URLs.
- Comprehensive API documentation with Swagger.

## Installation

1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure your MySQL database connection in `config/database.js` and your environment variables in `.env`.
4. Run the migrations to set up the database schema:
    ```bash
    npx sequelize-cli db:migrate
    ```
5. Start the application:
    ```bash
    npm start
    ```

## Usage

Access the API documentation at `${process.env.BASE_URL}/api-docs`.

## Endpoints

- `POST ${process.env.BASE_URL}/api/`: Shorten a long URL.
- `GET ${process.env.BASE_URL}/api/:shortUrl`: Redirect to the original URL.

## License

This project is licensed under the MIT License.
