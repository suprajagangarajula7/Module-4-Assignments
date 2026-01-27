1. schema design:
Schema design is organizing how data will be stored in a relational database. A database schema is the blueprint of the database. It defines tables, columns, data types, relationships between tables, and constraints.
For example, users table with columns like id, name, and email, and an orders table that is linked to users through a foreign key, everything is stored in a meaningful way.

2. Why schema design is required:
Schema design must be done before backend development because the backend depends on how data is structured. all the backend work first  interact with the database schema.If the schema is not clear, backend code breaks. A structured  schema provides a stable code.

3. How poor schema design impacts data consistency, maintenance, and scalability:
Poor schema design can cause several problems:Data inconsistency, maintenance issues, scalability problems
Duplicate data maybe stored and it there is huge data there wil not be a proper structure and it will be dificult to handle the database.

4. What validations are in schema design and why databases enforce them:
Validations are rules applied to database.Databases checks for  validations to access the data so that it is correctly stored and no duplicate or invalid data is stored. 
Example: NOT NULl, UNIQUE, DEFAULT, PRIMARY KEY

5. The difference between a database schema and a database table:
A database schema is the complete design of the database, including all tables, relationships, and constraints.
A database table is a single table within the schema that stores data related to one entity.

6. Why a table should represent only one entity:
Each table should represent a single entity to maintain clear and good structured code. So that whe multiple tables are present we can built a good relationship among them.
For example, storing user details and order details in the same table would lead to duplicated user.

7. Why redundant or derived data should be avoided in table design:

Redundant data means storing the same information multiple times, and derived data is calculated from existing values. Both should be avoided because:they increase storage, duplicate data 
For example, storing both date_of_birth and age is unnecessary 

8. The importance of choosing correct data types while designing tables:
Choosing the correct data type improves performance, accuracy, and avoide duplicate data. 
For example:Using INTEGER for age instead of TEXT

