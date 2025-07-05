// Task 2: Basic CRUD Operations

// 1. Find all books in a specific genre
db.books.find({ genre: "Memoir" })

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2015 } })

// 3. Find books by a specific author
db.books.find({ author: "Paulo Coelho" })

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { price: 850 } }
)

// 5. Delete a book by its title
db.books.deleteOne({ title: "The Power of Now" })

// Task 3: Advanced Queries

// 1. Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 2. Use projection to return only the title, author, and price fields
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 })

// 3. Sort books by price (ascending)
db.books.find().sort({ price: 1 })

// 4. Sort books by price (descending)
db.books.find().sort({ price: -1 })

// 5. Pagination: limit and skip (e.g. Page 2, 5 books per page)
db.books.find().skip(5).limit(5)

// Task 4: Aggregation Pipeline

// 1. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      average_price: { $avg: "$price" }
    }
  }
])

// 2. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $subtract: ["$published_year", { $mod: ["$published_year", 10] }]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// Task 5: Indexing and Performance Analysis

// 1. Create an index on the title field
db.books.createIndex({ title: 1 })

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// 3. Use explain() to check performance of a query with and without the index
db.books.find({ title: "The Alchemist" }).explain("executionStats")

db.books.find({ author: "Paulo Coelho", published_year: 1988 }).explain("executionStats")
