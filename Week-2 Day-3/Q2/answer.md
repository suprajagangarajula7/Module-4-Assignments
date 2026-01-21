Database Fundamentals – Conceptual Understanding

1. Why is db.json not suitable as a database for real projects?

Using a `db.json` file is helpful for learning and small demos, but it is not suitable for real-world applications.

Limitations of file-based storage:

Performance
- Every read or write operation requires reading or writing the entire file.
- As data grows, operations become slow.
- No indexing support for faster queries.

Scalability
- File-based storage cannot handle large datasets efficiently.
- It does not support distributed systems or horizontal scaling.
- Multiple users accessing the file at the same time can cause conflicts.

Reliability
- High risk of data corruption if the server crashes during a write operation.
- No backup, rollback, or recovery mechanisms.
- No transaction support (ACID properties are missing).

Because of these limitations, `db.json` is only suitable for practice or small prototypes, not production systems.


2. What are the ideal characteristics of a database system (apart from just storage)?

A good database system provides much more than data storage. Key characteristics include:

Performance
- Fast data retrieval and insertion.
- Uses indexing, caching, and query optimization.

Concurrency
- Allows multiple users to read and write data simultaneously.
- Prevents data conflicts using locking or version control.

Reliability
- Ensures data is not lost during crashes or failures.
- Supports backup and recovery mechanisms.

Data Integrity
- Maintains accuracy and consistency of data.
- Enforces constraints like primary keys, foreign keys, and validations.

Scalability
- Can handle increasing data size and user load.
- Supports vertical scaling (better hardware) and horizontal scaling (distributed systems).

Fault Tolerance
- Continues working even if some components fail.
- Replication and redundancy ensure availability.

3. How many types of databases are there? What are their use cases or applications?

Databases are mainly classified into two major types:

1. Relational Databases (SQL)
- Store data in tables with rows and columns.
- Use structured schema and relationships between tables.
- Follow ACID properties.

Examples
- MySQL
- PostgreSQL
- Oracle
- SQL Server
Use Cases
- Banking systems
- E-commerce applications
- School and college management systems
- Applications requiring strong data consistency


2. Non-Relational Databases (NoSQL)
- Store data in flexible formats like documents, key-value pairs, or graphs.
- Schema-less or semi-structured.
- Designed for high scalability and large datasets.

Examples
- MongoDB (Document-based)
- Redis (Key-value)
- Cassandra (Column-based)
- Neo4j (Graph-based)
Use Cases
- Social media platforms
- Real-time analytics
- Chat applications
- IoT and big data applications

