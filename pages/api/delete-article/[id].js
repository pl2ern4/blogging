import { connectToDatabase } from '../../../lib/mongodb';
import mongodb from 'mongodb';

async function deleteArticle(req, res){
    let id = req?.query?.id;
    if(!id){
        return res.status(501).json({ok:0, message:'id not valid'});
    }
    id = new mongodb.ObjectId(id);
    if(req.method==='DELETE'){
        const client =await connectToDatabase();
        const collection = client.db.collection('article');
        const savedData = await collection.deleteOne({_id: id});
        return res.status(200).json({...savedData})
    }
    return res.status(501).json({message:'invalid method', ok:1})
}

export default deleteArticle;