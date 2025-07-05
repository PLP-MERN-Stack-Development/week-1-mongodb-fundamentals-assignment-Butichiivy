// Use the plp_bookstore database
plp_bookstore;
db.books.insertMany([
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        published_year: 2019,
        price: 1200,
        in_stock: true,
        pages: 325,
        publisher: "Celadon Books"
    },
    {
        title: "Becoming",
        author: "Michelle Obama",
        genre: "Memoir",
        published_year: 2018,
        price: 1500,
        in_stock: true,
        pages: 426,
        publisher: "Crown Publishing"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        published_year: 2018,
        price: 1000,
        in_stock: true,
        pages: 320,
        publisher: "Penguin"
    },
    {
        title: "Born a Crime",
        author: "Trevor Noah",
        genre: "Biography",
        published_year: 2016,
        price: 950,
        in_stock: false,
        pages: 304,
        publisher: "Spiegel & Grau"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        published_year: 1988,
        price: 800,
        in_stock: true,
        pages: 197,
        publisher: "HarperOne"
    },
    {
        title: "Educated",
        author: "Tara Westover",
        genre: "Memoir",
        published_year: 2018,
        price: 1100,
        in_stock: false,
        pages: 352,
        publisher: "Random House"
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        published_year: 2011,
        price: 1600,
        in_stock: true,
        pages: 443,
        publisher: "Harvill Secker"
    },
    {
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        genre: "Self-help",
        published_year: 2016,
        price: 900,
        in_stock: true,
        pages: 224,
        publisher: "Harper"
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Business",
        published_year: 1937,
        price: 700,
        in_stock: true,
        pages: 238,
        publisher: "The Ralston Society"
    },
    {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genre: "Spirituality",
        published_year: 1997,
        price: 950,
        in_stock: false,
        pages: 236,
        publisher: "New World Library"
    }
]);

