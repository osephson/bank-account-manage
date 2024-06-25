# Bank Account Application Setup Guide

## Introduction

Welcome to our Bank Account application setup guide. This guide will walk you through the process of setting up the application, including cloning the repository, setting up the database, and running the application.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- MySQL Server

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-repo-url/nestjs-application.git
cd nestjs-application
```

### Set Up the Database

#### Create a MySQL Database

- Log in to your MySQL server.
- Create a new database using the following SQL command: `CREATE DATABASE DB_NAME;`
- Note down the database credentials (host, port, username, password, and database name) as you will need them to fill in the .env file.

## Backend Application

Navigate to the server directory: `cd server`

### Configure Environment Variables

- Copy the .env.example file to create a .env file in the root directory of your project. Edit the .env file to include your database credentials:
- Replace DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, and DB_NAME with the actual values obtained from your MySQL server.

### Install Dependencies

Install the project dependencies by running:

```bash
npm install
```

### Seed Initial Data

Use the provided sample-account.json file to seed initial data into your database.
Run the following command:

```bash
npm run seed
```

This command will insert the data from sample-account.json into your database.

### Start the Application

To start the application in development mode, run:

```bash
npm run start:dev
```

## Frontend Application

Navigate to the server directory: `cd client`

### Environment Configuration

To configure the environment for the application, follow these steps:

1. Create the `environments` directory in the `src` directory.
2. Create two files: `environment.ts` and `environment.prod.ts`.
3. Copy and paste the following content into the respective files:

**environment.ts**

```typescript
export const environment = {
  production: false,
  apiUrl: "http://localhost:3000/accounts",
};
```

**environment.prod.ts**

```typescript
export const environment = {
  production: true,
  apiUrl: "#",
};
```

### Running the Application

Make sure the backend is running on the port 3000.
To run the application, use the following commands:

```bash
npm install
ng serve
```
