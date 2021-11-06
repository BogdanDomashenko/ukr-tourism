import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
// const connectionString = 'mongodb://localhost/UkrainianTourismAnalyzer';

// const MongoClient = require("mongodb").MongoClient;
    
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);

// let visited_countries = new Schema({
//     username: String,
//     password: String
// }, {collection: 'adminLogin'});

// let adminLogin = mongoose.model('adminLogin', adminLogin);
 
// async function run() {
//     try {
//         await mongoClient.connect();
//         const db = mongoClient.db("UkrainianTourismAnalyzer");
//         console.log(db.collection("visited_countries"));
//         // const collection = db.collection("users");
//         // const count = await collection.countDocuments();
//         // console.log(`В коллекции users ${count} документов`);
//     }catch(err) {
//         console.log(err);
//     } finally {
//         await mongoClient.close();
//     }
// }
// run();

app.get('/api/internalExternal', (req, res) => {
    res.status(200).json({totalInernalexternal: 122000, inernalCount: 12324234, externalCount: 13242343});
});


app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/../public/index.html`);
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});