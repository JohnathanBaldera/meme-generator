import { useState, useEffect } from 'react';
import './Meme.css';

export default function Meme() {
  const [memes, setMemes] = useState([]);
  const [img, setImg] = useState({
    url: 'images/TrollFace.png',
    description: 'Troll Face',
  });
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        setMemes(data);
      });
  }, []);

  function loadMeme() {
    let random = Math.floor(Math.random() * 100);
    setImg(memes.data.memes[random]);
  }

  function addTopText(e) {
    let text = e.target.value;
    setTopText(text)
  }

  function addBottomText(e) {
    let text = e.target.value;
    setBottomText(text)
  }

  return (
    <main>
      <div className='form'>
        <div className='form-input-div'>
          <input
            type='text'
            className='input-field'
            placeholder='Top Text'
            onChange={(e) => addTopText(e)}
            value={topText}
          />
          <input
            type='text'
            className='input-field'
            placeholder='Bottom Text'
            onChange={(e) => addBottomText(e)}
            value={bottomText}
          />
        </div>
        <button onClick={loadMeme} type='submit' className='btn'>
          Get a new Meme Image 🖼️
        </button>
        <div className="memeDiv">
            <p className="memeText">{topText}</p>
            <img src={img.url} alt={img.description} className='memeImg' />
            <p className="memeText bottomText">{bottomText}</p>
        </div>
      </div>
    </main>
  );
}
