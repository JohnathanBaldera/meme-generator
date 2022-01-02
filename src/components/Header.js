import './Header.css';

export default function Header() {
  return (
    <nav className='nav'>
      <div className='nav-title'>
        <img src='./images/TrollFace.png' alt='Troll Face Logo' className='nav-logo' />
        <h1>Meme Generator</h1>
      </div>
      <div className='nav-label'>
          <p>Developed By: Johnathan Baldera</p>
      </div>
    </nav>
  );
}
