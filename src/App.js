
import './App.css';
import téléchargement from './imgs/téléchargement.jpg'
import './style.css';
import myvideo from './myVideo.mp4'




  
    function App() {
      return (
        <>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="titlered">Your name here</h1>
        <br />
        <img  src="/img/nature1.JPG" />
        <br />
        <img src={téléchargement} />
      </div>
      <video width={320} height={240} controls>
        <source src={myvideo} type="video/mp4" />
      </video>
      <p>Enter your HTML here</p>
    </>)

    ;
      }

  export default App
