import { useState, useEffect } from 'react'
import './Meme.css'

export default function Meme() {

    const [memes, setMemes] = useState([])
    const [img, setImg] = useState({url: "images/TrollFace.png", description: "Troll Face"})

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            setMemes(data)
        })
    }, [])

    function loadMeme() {
        let random = Math.floor(Math.random() * 100)
        setImg(memes.data.memes[random])
    }

    return (
        <main>
            <div className='form'>
                <div className='form-input-div'>
                    <input type="text" className='input-field' placeholder='Top Text' />
                    <input type="text" className='input-field' placeholder='Bottom Text' />
                </div>
                <button onClick={loadMeme} type='submit' className='btn'>Get a new Meme Image 🖼️</button>
                <img src={img.url} alt={img.description} className='memeImg'/>
            </div>
        </main>
    )
}