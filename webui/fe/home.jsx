import axios from "axios";
import React, { useEffect, useState } from "react";
import './main.css'
export function Home(){
    const[file,setfile]=useState( )
    const [image,setimage]=useState()
    const [oimage,setoimage]=useState()
    const [opens,setpones]=useState('images sm')
    const [left,setleft]=useState('left')
    const [data,setdata]=useState()
    
    function filechange(e){
        setfile(e.target.files[0]);
        setimage(URL.createObjectURL(e.target.files[0]))
    }
    console.log(file)



    function send(){
        if(!file)alert('No files selected')
        const formdata=new FormData()
    formdata.append('file',file)
    axios.post('http://localhost:3000/api/django',formdata,{
        headers:{
            'Content-Type':'multipart/form-data',
            
        }
    }).then((r)=>{
        let f=r.data
        let arr= (f.split(','))
        
         let y=arr.map((i)=>{

            return i=i.replace(/[^\w\s]/gi, '').replace(/\n/g, '');
         }) 
        
        console.log(y)
        setdata(y)
        setTimeout(()=>{

            setoimage('yes')
        },1000)
        setpones('images lg')
        setleft('left move')
        })
        .catch((e)=>alert(e))
    }
    function clear(){
        setpones('images sm')
        setoimage()
        setleft('left')
        setfile()

    }
    return(
        <div className="home">
            <div style={{display:'flex',flexDirection:'column'}}>
                <div className={opens}>
                    {/* <div style={{height:'600px',width:'700px',margin:'10px',background:'black'}}></div> */}
                {oimage&&<div style={{height:'600px',width:'700px',margin:'10px'}}></div>}
                {image&&<img style={{height:'600px',width:'700px',margin:'10px'}} className={left} src={image} alt="" />}
                {oimage&&<img style={{height:'600px',width:'700px',margin:'10px'}} className='opac'src={'http://localhost:3000/output/f.jpg'} alt="" />}
               
                
      {oimage&&<div class="con-tooltip bottom opac">
        <p style={{position:'relative',bottom:'10px'}}> i </p>
        <div className="tooltip ">
          {data.map((i)=>{
            console.log(i)
            return <p>{i}</p>

          })}
        </div>
      </div>}

  
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>

            <p>Drop an image or &nbsp;</p>
            <input type="file" name="pic" style={{margin:'16px 0 16px 0',width:"180px"}} onChange={filechange} onClick={clear}/>
            </div>
            <br />
                </div>
            <button onClick={send}>Identify</button>

        </div>
        )
}