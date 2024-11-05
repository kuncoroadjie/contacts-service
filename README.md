# Contacts Service

RESTful API built with TypeScript for managing contacts, addresses, and user authentication.

## Features

- User Management: Register, login, update profile, and logout.
- Contact Management: Create, retrieve, update, delete, and search contacts.
- Address Management: Add, update, delete, and retrieve addresses for each contact.
- Authentication: Token-based authentication to secure endpoints.

For details on endpoint, request and response formats, refer to the API Specification.

## Setup Project

Create .env file

```
DATABASE_URL="mysql://root:@localhost:3306/contacts_db"
```

```shell
npm install
npx prisma migrate dev
npx prisma generate
npm run build
npm run start
```
