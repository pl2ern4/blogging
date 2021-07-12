import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
import mongodb from 'mongodb';

async function fetchFile(file, res){
    let trackID='';
    try {
        trackID = new ObjectId(file);
      } catch(err) {
        return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
      }
      const db = await connectToDatabase().db;
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
}

export default (req,res)=>fetchFile(req.query.id, res);