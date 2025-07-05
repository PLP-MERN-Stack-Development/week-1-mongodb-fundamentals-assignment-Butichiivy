Basic CRUD Operations

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
