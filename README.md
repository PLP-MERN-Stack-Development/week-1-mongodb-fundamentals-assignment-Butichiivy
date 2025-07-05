[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19654738&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 



# 📚 PLP MongoDB Assignment – Week 1

## 👨‍💻 Project: `plp_bookstore`

This project is part of the Power Learn Project MERN Stack course. It showcases practical use of MongoDB for backend development by creating a bookstore database. The assignment covers:

- MongoDB setup
- Creating a database and collection
- Performing CRUD operations
- Writing advanced queries
- Using aggregation pipelines
- Creating indexes and analyzing query performance

---

## 🧪 Technologies Used

- MongoDB Community Edition
- MongoDB Shell (`mongosh`)
- MongoDB Compass

---

## 📁 Project Structure

| File              | Description                                                 |
|-------------------|-------------------------------------------------------------|
| `insert_books.js` | Inserts 10 book documents into the `books` collection        |
| `queries.js`      | Contains all MongoDB queries for Tasks 2–5                   |
| `screenshot.png`  | Screenshot of MongoDB Compass showing inserted documents     |
| `README.md`       | Instructions for running and testing the project             |

---

## 🛠️ How to Run the Project

### ✅ Step 1: Start MongoDB

Make sure MongoDB is installed and running. Then open a terminal:

```bash
mongosh



Paste the content of insert_books.js into the shell to insert book documents.

✅ Step 2: Run Queries
Copy and paste the queries from queries.js into the same shell. The queries include:

Task 2: CRUD operations (find, update, delete)

Task 3: Advanced queries (filters, projections, sorting, pagination)

Task 4: Aggregation pipelines (grouping and analysis)

Task 5: Index creation and performance analysis using .explain()

🖼️ Screenshot
screenshot.png shows:

The plp_bookstore database in MongoDB Compass

The books collection

Several documents with fields like title, author, and price

✅ Submission Checklist
 Inserted 10 books using insert_books.js

 All required queries written in queries.js

 Screenshot of MongoDB Compass added as screenshot.png

 README with instructions included

 Everything committed and pushed to GitHub

💡 Notes
You can use mongosh to run and test queries

Use MongoDB Compass to view data and take a screenshot

Ensure your local MongoDB server is running before inserting or querying
