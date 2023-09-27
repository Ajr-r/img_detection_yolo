import axios from "axios";
import React, { useEffect, useState } from "react";
import './main.css'
export function Home(){
    const[file,setfile]=useState( )
    function filechange(e){
        setfile(e.target.files[0]);
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
        }).then((r)=>alert(r.data))
        .catch((e)=>alert(e))
    }
    return(
        <div className="home">
            <div style={{display:'flex'}}>
            <p>Drop an image or &nbsp;</p>
            <input type="file" style={{margin:'16px 0 16px 0',width:"180px"}} onChange={filechange}/>
            </div>
            <br />
            <button onClick={send}>SEND</button>

        </div>
        )
}