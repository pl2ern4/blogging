import formidable from "formidable";
import fs from "fs";
import { connectToDatabase } from '../../lib/mongodb';
import nextConnect from 'next-connect';

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
  if (req.method === 'OPTIONS'){
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Credentials', true);
      return res.status(200).json({});
  }
  next();
});

apiRoute.post(async (req, res) => {
    const form = new formidable.IncomingForm()
    const data = form.parse(req, async (err, fields, files) => {
      if (err){
        res.status(500).json({ok:0, message:err});
      }
      let articles = fields.article;
      if(!!files && Object.keys(files).length>0){
        articles = await fs.readFileSync(files.article.path);
        articles = await Buffer(articles);
        articles = { 
          type: files.article.type, 
          name: files.article.name, 
          path: files.article.path,
          data: articles
        }
      }
      console.log(">>>>", articles);
      const savedMessage = await saveFile({article: articles,title: fields.title, img:fields.img, createdBy: fields.createdBy})
      res.status(200).json({...savedMessage});
    }) 
  
});

export default apiRoute;

const saveFile = async ({...data}) => {
  const client =await connectToDatabase();
  const collection = client.db.collection('article'); console.log(collection);
  const savedData = await collection.insertOne({...data, date_of_creation: new Date(Date.now()).toISOString()}); console.log(savedData);
  return{ok: savedData.result.ok};
};
