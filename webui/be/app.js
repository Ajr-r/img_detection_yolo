const exp=require('express')
const axios=require('axios')
const path=require('path')
const multer = require('multer');
const app=exp()
const { exec } = require('child_process');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const originalname ='sample'
    cb(null, originalname);
  },
});
const upload = multer({ storage });
const cors=require('cors');
let cs=''
app.use('/output', exp.static(path.join(__dirname,'output'),{
  maxAge:'1000',
}));
app.use(cors())
app.post('/api/django',upload.single('file'),(req,res)=>{
  try{
    exec('python ml.py',(error,stdout)=>{
      res.send(stdout)
    })
  }
  catch{
    res.send('error')
  }
})
app.use(exp.static(path.join(__dirname, '../fe/dist_prod')));
app.listen(3000,()=>{
    console.log('serever started')
})