import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
import fs from 'fs';
import mongodb from 'mongodb';

async function fetchFile(file, res){
    let trackID='';
    try {
        trackID = new ObjectId(file);
      } catch(err) {
        return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
      }
      const db = await connectToDatabase().db;
      console.log("db ", db)
      let bucket = new mongodb.GridFSBucket(db, {
        bucketName: 'article'
      });
      let downloadStream = bucket.openDownloadStream(trackID);
      downloadStream.on('data', (chunk) => {
        res.write(chunk);
      });
      downloadStream.on('error', () => {
        res.sendStatus(404);
      });
    
      downloadStream.on('end', () => {
        res.end();
      });
    // console.log(file,"file")
    // const conn = await connectToDatabase();
   
    // const collection = conn.db.collection('article');
    // const oid =new ObjectId(file);
    // console.log("oid", oid)
    // const articles = await collection.find({"_id":new ObjectId(file)}).toArray();
    // console.log(articles);
    // // if(err){
    // //     res.status(500).json({ok:0, message: err})
    // // }
    // console.log(res);
    // // let buf = await articles.article?.data.toString();
    // res.writeHead(200, {
    //     'Content-Type': articles[0].article?.type,
    //     "Content-Disposition": "attachment; filename=" + articles[0].article?.name
    // });
    // fs.writeFileSync(articles[0].article.path, articles[0].article.data,'binary', (err, doc) => {
    //     if(err) {
    //         console.log(err)
    //         res.status(501).json({ok:0, message:'please try later'})
    //     }
    //     console.log('Data written', doc);
    //     res.writeHead(200, {
    //         'Content-Type': articles[0].article?.type,
    //         "Content-Disposition": "attachment; filename=" + articles[0].article?.name
    //     });
    //     res.send(articles[0].article?.name)
    // });
    // res.status(501).json({ok:0, message:'please try later'})
    // console.log(fileName);
    
    
}

export default (req,res)=>fetchFile(req.query.id, res);