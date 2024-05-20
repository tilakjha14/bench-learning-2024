const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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
    // const clientConnected = await client.connect();

    // //Send a ping to confirm successful connection
    // const db = clientConnected.db(databaseName);

    // const users = db.collection("users");
    // const doc = {
    //   name: "Test",
    //   age: 31,
    // };
    // const result = await users.insertOne(doc);
    // console.log(
    //   "Inserted document with _id: =" + JSON.stringify(result.insertedId)
    // );
    // const tasks = db.collection("tasks");
    // const doc = [
    //   {
    //     task: "Task 1",
    //     isCompleted: true,
    //   },
    //   {
    //     task: "Task 2",
    //     isCompleted: true,
    //   },
    //   {
    //     task: "Task 3",
    //     isCompleted: false,
    //   },
    // ];

    // const result = await tasks.insertMany(doc);
    // console.log(
    //   "Inserted document with _id: =" + JSON.stringify(result.insertedIds)
    // );

    // db.collection("tasks").findOne({ task: "Task 1" }, (error, result) => {
    //   if (error) {
    //     return console.log("error=", error);
    //   }
    //   console.log("Result=", result);
    // });
    //db.collection.findOne(query, projection, options);

    // await client.connect();
    // const database = client.db("task-manager");
    // const collection = database.collection("tasks");
    // const query = { isCompleted: true };
    // //  const result = await collection.findOne(query);

    // const result = await collection.find(query).next();

    // await client.connect();
    // const database = client.db("task-manager");
    // const collection = database.collection("tasks");
    // const query1 = {
    //   _id: new ObjectId("664323a94208546e56a6824f"),
    // };
    // const result = await collection.findOne(query1);

    // const result2 = await collection.find({ isCompleted: false }).toArray();

    // // Log the result
    // console.log("result=", result, " result2=", result2);

    //Update field

    // await client.connect();
    // const database = client.db("task-manager");
    // const collection = database.collection("tasks");
    // const updateTask = await collection.updateOne(
    //   { task: "Task 3" },
    //   {
    //     $set: {
    //       task: "Task 3 updated",
    //     },
    //   }
    // );
    // console.log("updateTask=", updateTask);

    await client.connect();
    const database = client.db("task-manager");
    const collection = database.collection("users");
    // const updateAge = await collection.updateOne(
    //   { _id: new ObjectId("66430cf70135503b83d98717") },
    //   {
    //     $inc: { age: 100 },
    //   }
    // );
    // console.log("updateAge=", updateAge);

    // await collection
    //   .updateOne(
    //     { _id: new ObjectId("66430cf70135503b83d98717") },
    //     {
    //       $inc: { age: 1 },
    //     }
    //   )
    //   .then((result) => {
    //     console.log("result=", result);
    //   })
    //   .catch((error) => {
    //     console.log("error=", error);
    //   });

    // await collection
    //   .updateMany(
    //     { name1: "Tilak1233434" },
    //     {
    //       $set: {
    //         name12: "Tilak J",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log("Success=", result);
    //   })
    //   .catch((error) => {
    //     console.log("Error=", error);
    //   });

    //deleting field
    await collection
      .deleteOne({ name: "Stefano" })
      .then((result) => {
        console.log("result=", result);
      })
      .catch((error) => {
        console.log("error=", error);
      });
  } finally {
    // Ensures that the client will close when you finish/error

    await client.close();
  }
}
run().catch(console.dir);
