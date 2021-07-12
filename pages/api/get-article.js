import { connectToDatabase } from '../../lib/mongodb';

async function getArticle(req, res){
    const client = await connectToDatabase();
    const collection = client.db.collection('article');
    const data = await collection.find({}).toArray();
    res.json({data});
};

export default getArticle;