import { connectToDatabase } from '../../lib/mongodb';

const uploadFiles = async (req, res) =>{
  if(req.method==='POST'){
    const data = JSON.parse(req.body);
    const result = await saveFile({article:data.data, title: data.title, img: data.img, createdBy: data.createdBy});
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
    return res.status(200).json({ok:result.ok});
  }
  return res.status(501).json({ok:0});
} 

export default uploadFiles;

const saveFile = async ({...data}) => {
  const client =await connectToDatabase();
  const collection = client.db.collection('article');
  const savedData = await collection.insertOne({...data, date_of_creation: new Date(Date.now()).toISOString()});
  return{ok: savedData.result.ok};
};
