// Book data: a simple JavaScript array of objects.
// Cover images come from the free Open Library Covers service (by ISBN).

const cover = (isbn) => `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 12.99,
    category: "Classics",
    image: cover("9780141439518"),
    featured: true,
    bestseller: false,
    description:
      "A witty and timeless story of love, class and first impressions, following Elizabeth Bennet as she navigates society and her complicated feelings for the proud Mr. Darcy.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 10.5,
    category: "Classics",
    image: cover("9780451524935"),
    featured: false,
    bestseller: true,
    description:
      "A chilling vision of a world ruled by total surveillance and propaganda, where Winston Smith dares to question the Party and its leader, Big Brother.",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.25,
    category: "Fiction",
    image: cover("9780061120084"),
    featured: true,
    bestseller: true,
    description:
      "Seen through the eyes of young Scout Finch, this powerful novel explores justice, prejudice and courage in a small Southern town.",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 9.99,
    category: "Classics",
    image: cover("9780743273565"),
    featured: false,
    bestseller: false,
    description:
      "In the glittering Jazz Age, the mysterious millionaire Jay Gatsby pursues a dream that may always remain just out of reach.",
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 18.99,
    category: "Non-Fiction",
    image: cover("9780062316097"),
    featured: true,
    bestseller: true,
    description:
      "A bold, readable journey through the history of humankind, from the first humans to the scientific and technological revolutions of today.",
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.5,
    category: "Self-Help",
    image: cover("9780735211292"),
    featured: false,
    bestseller: true,
    description:
      "A practical guide to building good habits and breaking bad ones through tiny changes that lead to remarkable results.",
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 13.75,
    category: "Fantasy",
    image: cover("9780547928227"),
    featured: true,
    bestseller: false,
    description:
      "Bilbo Baggins is swept into an unexpected adventure with a wizard and thirteen dwarves on a quest to reclaim a treasure guarded by a dragon.",
  },
  {
    id: 8,
    title: "Dune",
    author: "Frank Herbert",
    price: 17.25,
    category: "Science Fiction",
    image: cover("9780441172719"),
    featured: false,
    bestseller: true,
    description:
      "On the desert planet Arrakis, young Paul Atreides becomes caught in a struggle for power, survival and destiny.",
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 11.99,
    category: "Fiction",
    image: cover("9780062315007"),
    featured: true,
    bestseller: false,
    description:
      "A shepherd boy named Santiago travels in search of treasure and discovers the importance of listening to his heart and following his dreams.",
  },
  {
    id: 10,
    title: "Educated",
    author: "Tara Westover",
    price: 15.99,
    category: "Non-Fiction",
    image: cover("9780399590504"),
    featured: false,
    bestseller: false,
    description:
      "A memoir about a young woman who grows up without formal schooling and eventually earns a PhD from Cambridge University.",
  },
  {
    id: 11,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 13.49,
    category: "Thriller",
    image: cover("9781250301697"),
    featured: false,
    bestseller: true,
    description:
      "A famous painter shoots her husband and then never speaks again. A psychotherapist becomes obsessed with uncovering her motive.",
  },
  {
    id: 12,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 19.5,
    category: "Self-Help",
    image: cover("9780374533557"),
    featured: false,
    bestseller: false,
    description:
      "A Nobel Prize winner explains the two systems that drive the way we think, and how they shape our judgments and decisions.",
  },
];

// List of categories used on the Home and Shop pages
export const categories = [
  "Classics",
  "Fiction",
  "Fantasy",
  "Science Fiction",
  "Non-Fiction",
  "Self-Help",
  "Thriller",
];

export default books;
