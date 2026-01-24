1. Definition of a Database Relationship
A Database Relationshipdefines how two or more tables in a database are logically connected to each other. These relationships are created using primary keys and foreign keys to ensure data consistency, reduce redundancy, and enable efficient data retrieval.

2. Types of Database Relationships
a. One-to-One (1:1)
b. One-to-Many (1:N)
c. Many-to-Many (M:N)

a. One-to-One (1:1)
A One-to-One (1:1) occurs when a single record in one table is associated with exactly one record in another table.
Eg:  Customer -- CustomerProfile.. 
Each customer has exactly one profile and each profile belongs to only one customer.

b. One-to-Many (1:N)
A one-to-many relationship exists when one record in a table can be associated with multiple records in another table.
Eg: Customer -- Orders..
A customer can place many orders and each order belongs to only one customer.

c. Many-to-Many (M:N)
A many-to-many relationship occurs when multiple records in one table are associated with multiple records in another table. This type of relationship requires a junction (bridge) table.
Eg: Orders -- Products..
An order can contain many products and a product can appear in many orders.



