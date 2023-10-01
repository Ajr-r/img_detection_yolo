import axios from "axios";
import React, { useEffect, useState } from "react";
import './main.css'
import pl from './pl.svg'
export function Home() {
    const [file, setfile] = useState()
    const [image, setimage] = useState()
    const [oimage, setoimage] = useState()
    const [opens, setpones] = useState('images sm')
    const [left, setleft] = useState('left')
    const [data, setdata] = useState()

    function filechange(e) {
       
        setfile(e.target.files[0]);
        setimage(URL.createObjectURL(e.target.files[0]))
    }

    function send() {
    if (!file) {
        alert('No files selected')
        return
    }
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post('http://localhost:3000/api/django', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',

            }
        }).then((r) => {
            if (r.data=='error'){
                alert('Some error occured in the backend')
                return
            }
            if(r.data==''){
                alert('Failed to recoginze the image try another image')
                return
            }
            let f = r.data
            let arr = (f.split(','))

            let y = arr.map((i) => {

                return i = i.replace(/[^\w\s]/gi, '').replace(/\n/g, '');
            })

            setdata(y)
            setTimeout(() => {

                setoimage('yes')
            }, 1000)
            setpones('images lg')
            setleft('left move')
        })
            .catch((e) => alert(e))
    }
    function clear() {
        setpones('images sm')
        setoimage()
        setleft('left')
        setfile()

    }
    return (
        <div className="home">
            <h1 style={{marginBottom:'60px'}}> Image recogintion</h1>
            {!image&&<img src={pl} alt="" style={{width:'600px',height:'600px',position:'fixed',top:'170px',opacity:'0.6'}}/>}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={opens}>
                    {/* <div style={{height:'600px',width:'700px',margin:'10px',background:'black'}}></div> */}
                    {oimage && <div style={{ height: '600px', width: '700px', margin: '10px' }}></div>}
                    {image && <img style={{ height: '600px', width: '700px', margin: '10px' }} className={left} src={image} alt="" />}
                    {oimage && <img style={{ height: '600px', width: '700px', margin: '10px' }} className='opac' src={'http://localhost:3000/output/f.jpg'} alt="" />}


                    {oimage && <div className="tooltip opac" style={{position:'fixed',left:'1640px',top:'155px'}}>
                        <div className="re">

                            <b >i</b> </div>
                        <div className="msg">
                     <ul>

                            {data.map((i)=>{
                                return <li key={i}>{i}</li>
                                
                            })}
                            </ul> 
                           
                        </div>
                    </div>}


                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <input type="file" name="pic" style={{ margin: '16px 0 16px 0', width: "180px" }} onChange={filechange} onClick={clear} />
                </div>
                <br />
            </div>
            <button onClick={send}>Identify</button>

        </div>
    )
}