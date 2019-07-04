// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID;
// const {MongoClient, ObjectID } = require('mongodb');

// const connectionUrl = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
//     if( error ) {
//         return console.log(error);
//     }

//     const db = client.db(databaseName);
//     db.collection('users').insertOne({
//         name:'ll',
//         age: 27
//     })
//     db.collection('users').findOne({ name : 'jane'}, (error, user)=> {
//         if(error) {
//             console.log('There are an error');
//         }
//     })


//     db.collection('users').find({ age: 27 }).toArray((error, users) => {
//         console.log(users); 
//     })

//     db.collection('tasks').updateMany({
//         completed: false
//     }, {
//         $set: {
//             completed: true
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

//     db.collection('users').deleteMany({
//         age: 27
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// })