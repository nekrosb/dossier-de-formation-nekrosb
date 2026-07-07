---
title: PostgreSQL
---

PostgreSQL is a powerful open-source relational database management system. It is widely used for storing, managing, and querying structured data while providing reliability, performance, and advanced SQL features.

## Code example

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO users (name, email)
VALUES ('John Doe', 'john@example.com');

SELECT * FROM users;
```
