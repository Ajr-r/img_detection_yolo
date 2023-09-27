const exp=require('express')
const axios=require('axios')
const path=require('path')
const multer = require('multer');
const app=exp()
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cors=require('cors')
let cs=''
app.use(cors())
const config = {
    headers: {
      'x-api-key': 'dknk339fbbb',
    },
  };
  
app.get('/api/test',(req,res)=>{
    res.send('gg server')
})
app.post('/api/django',upload.single('file'),(req,res)=>{
  const filedata=req.file.buffer
    axios.get('http://127.0.0.1:8000/token',config)
    .then((r)=>{
      cs=r.data.csrfToken
      console.log(cs)
       axios.get('http://127.0.0.1:8000/test',{
        headers: {
              'x-api-key': 'dknk339fbbb',
              'X-CSRFToken': cs, 
            }, 
       })
      axios.post('http://127.0.0.1:8000/',filedata,{
        headers: {
          'x-api-key': 'dknk339fbbb',
              'X-CSRFToken': cs, 
          
        },
        
      })
      .then((r)=>res.send(r.data))
      .catch((e)=>console.log(e))
    })
})
app.use(exp.static(path.join(__dirname, '../fe/dist_prod')));
app.listen(3000,()=>{
    console.log('serever started')
})