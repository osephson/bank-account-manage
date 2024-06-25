# Angular Application: Accounts Management

This Angular application is designed for managing accounts with features for displaying account details and an overview of accounts. It includes routing for navigating between different pages and uses various libraries and tools such as toasters, Tailwind CSS, animations, and FontAwesome icons.

## Project Structure

The project is structured as follows:

- **src/app/accounts**:

  - **account-details**: Component and HTML for displaying account details.
  - **models**: Contains the `account.model.ts` file defining the account model.
  - **overview**: Component and HTML for displaying an overview of accounts.
  - **routes**: Defines the routing for the accounts module in `accounts-routing.module.ts`.
  - **services**: Contains the `accounts.service.ts` file for handling account-related services.
  - **types**: Defines types specific to accounts in `accounts.types.ts`.

- **src/app**:
  - **app-routing.module.ts**: Defines the routing for the entire application.
  - **component and html**: Other components and HTML files for the application.
  - **app.module.ts**: Main module file for the application.

## Pages and Routes

The application consists of two main pages:

- **Overview**: Displays an overview of accounts.
- **Account Details**: Displays detailed information about a specific account.

The routes for these pages are defined as follows:

- `/accounts`: Displays the overview page.
- `/accounts/:id`: Displays the account details page for the account with the specified ID.

## Environment Configuration

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

## Running the Application

Make sure the backend is running on the port 3000.
To run the application, use the following commands:

```bash
npm install
ng serve
```
