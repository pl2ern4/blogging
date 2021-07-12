//   // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // const { MongoClient } = require('mongodb');
// import nextConnect from 'next-connect';
import { connectToDatabase } from '../../lib/mongodb';

// import {ObjectID} from 'mongodb';

// const handler = nextConnect();

// handler.use(middleware());

// handler.get(async (req, res) => { console.log(">>> ",res,req)
//     // const dataModel = {};

//     // let doc = {}

//     // if(date){
//     //     doc = await req.db.collection('article').findOne({date: new Date(date)})
//     // } else {
//     //     doc = await req.db.collection('article').find().toArray();
//     // }
//     // if(doc == null){
//     //     doc = dataModel
//     // }
//     res.json({test:"test"})
// });

// handler.post(async (req, res) => {
//     // let data = req.body
//     // data = JSON.parse(data);
//     // data.date = new Date(data.date);
//     // let doc = await req.db.collection('article').updateOne({date: new Date(data.date)}, {$set:data}, {upsert: true})

//     res.json({message: 'ok'});
// })

export default async (req, res) => {
    const client = await connectToDatabase();
    const collection = client.db.collection('article');
    const data = await collection.find({}).toArray();
    res.json({data});
};