import './Meme.css'

export default function Meme() {
    return (
        <main>
            <div className='form'>
                <div className='form-input-div'>
                    <input type="text" className='input-field' placeholder='Top Text' />
                    <input type="text" className='input-field' placeholder='Bottom Text' />
                </div>
                <button type='submit' className='btn'>Get a new Meme Image 🖼️</button>
            </div>
        </main>
    )
}