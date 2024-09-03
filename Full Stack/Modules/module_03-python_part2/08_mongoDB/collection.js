// collection 1
db.books.insertOne({
    "name": "OOP Programming",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Jon Snow"},
        {"name": "Ned Stark"},
    ]
})

// collection 2
db.books.insertOne({
    "name": "OOP Programming",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Jon Snow Jr"},
    ]
})

// collection 3
db.books.insertOne({
    "name": "OOP Programming",
    "startDate": new Date(),
    "authors": [
        {"name": "Jon Snow Jr"},
    ]
})


// INSERT MANY

// collection
db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Avdi Grimm"}
        ]
    },
    {
        "name": "The Art of War",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Steven Pressfield"}
        ]
    },
    {
        "name": "Blink",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Malcom Gladwell"}
        ]
    }
])


db.books.find(
    {
      name: "Confident Ruby"
    },
    {
      _id: 0,
      name: 1,
      authors: 1
    }
  ).pretty()


  db.books.insertOne({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
      { "name": "Malcolm Gladwell" },
      { "name": "Ghost Writer" }
    ]
  });


  db.books.find(
    {
      name: "Blink"
    }
  ).pretty()

  db.books.find(
    {
      name: "Blink"
    },
    {
      publishedDate: 1,
      name: 1,
      authors: { $slice: 1 }
    }
  ).pretty()

  db.books.deleteOne({name: "Blink"}, 1)
  db.books.deleteMany({name: "Blink"})


  db.books.insertOne({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Malcolm Gladwell", "active": "true" },
        { "name": "Ghost Writer", "active": "true" }
    ]
});

db.books.find(
    {
      name: "Blink"
    },
    {
      name: 1,
      publishedDate: 1,
      "authors.name": 1
    }
  ).pretty()

  db.books.find(
    {
      name: "Blink"
    },
    {
      name: 1,
      publishedDate: 1,
      authors: 1
    }
  ).pretty()


  db.books.findOne({name: "Blink"})

  db.books.insertOne({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});

db.books.findOne({ name: /.*deep work.*/i })


db.books.insertOne( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
  )

  db.books.find({ reviews: { $exists: true } })
  db.books.find({ reviews: { $exists: false } })