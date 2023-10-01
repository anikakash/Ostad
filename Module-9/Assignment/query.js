const mongoose = require("mongoose");

// Connect to your MongoDB database here (assuming you have defined the database connection)

// 1. Create a new collection
async function createCollection(collectionName) {
  try {
    await mongoose.connection.db.createCollection(collectionName);
    console.log(`Collection "${collectionName}" created successfully.`);
  } catch (error) {
    console.error(`Error creating collection "${collectionName}": ${error}`);
  }
}

// 2. Removes a collection from the database
async function removeCollection(collectionName) {
  try {
    await mongoose.connection.db.dropCollection(collectionName);
    console.log(`Collection "${collectionName}" removed successfully.`);
  } catch (error) {
    console.error(`Error removing collection "${collectionName}": ${error}`);
  }
}

// Define a mongoose model/schema for your collection before using these functions

// 3. Inserts a single document into a collection
async function insertDocument(collectionName, documentData) {
  try {
    const Model = mongoose.model(collectionName); // Replace with your actual model
    const document = new Model(documentData);
    await document.save();
    console.log("Document inserted successfully.");
  } catch (error) {
    console.error(`Error inserting document: ${error}`);
  }
}

// 4. Delete/remove a single document from the collection
async function deleteDocument(collectionName, documentId) {
  try {
    const Model = mongoose.model(collectionName); // Replace with your actual model
    await Model.findByIdAndRemove(documentId);
    console.log("Document deleted successfully.");
  } catch (error) {
    console.error(`Error deleting document: ${error}`);
  }
}

module.exports = {
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocument,
};
