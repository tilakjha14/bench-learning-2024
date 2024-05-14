const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const databaseName = "task-manager";

async function run() {
  try {
    //connect the client to server
    const clientConnected = await client.connect();

    //Send a ping to confirm successful connection
    const db = clientConnected.db(databaseName);

    //const users = db.collection("users");
    // const doc = {
    //   name: "Tilak Jha",
    //   age: 31,
    // };
    // const result = await users.insertOne(doc);
    const tasks = db.collection("tasks");
    const doc = [
      {
        task: "Task 1",
        isCompleted: true,
      },
      {
        task: "Task 2",
        isCompleted: true,
      },
      {
        task: "Task 3",
        isCompleted: false,
      },
    ];

    const result = await tasks.insertMany(doc);
    console.log(
      "Inserted document with _id: =" + JSON.stringify(result.insertedIds)
    );
  } finally {
    // Ensures that the client will close when you finish/error

    await client.close();
  }
}
run().catch(console.dir);
