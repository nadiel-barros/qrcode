import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from 'qrcode';

import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin:3,
    }, function (err, url){
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  
  return (
    <div className="container">


      <div className="containerQrcode">
        <QRCode value={link} />
      </div>


      <div className="input-container">
        <input type="text" className="input" 
        placeholder="Digite algo aqui"
        value={link}
        onChange={  (e) => handleQrcode(e)}
        />
        <button className="button">
          <a href={qrcodeLink}  download={`qrcode.png`}>
            <img src=".\Vector.png" alt="Ícone do botão" className="icon" />
          </a>
          
        </button>
      </div>
    </div>
  );
}

export default App;
