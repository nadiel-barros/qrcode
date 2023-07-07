import { useState } from "react";
import QRCode from "react-qr-code";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [qrcodeImage, setQRCodeImage] = useState("");

  function handleGenerate(link_url) {
    setQRCodeImage(link_url);
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setInputValue(value);

    if (isPhoneNumber(value)) {
      handleGenerate(`https://wa.me/55${value}`);
    } else {
      handleGenerate(value);
    }
  }

  function isPhoneNumber(content) {
    return /^\d+$/.test(content);
  }

  return (
    <div className="container">
      <div className="containerQrcode">
        <QRCode value={qrcodeImage} />
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Whatsapp, URL ou texto"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="button">
          <a href={qrcodeImage} download={`qrcode.png`}>
            <img src=".\Vector.png" alt="Ícone do botão" className="icon" />
          </a>
        </button>
      </div>
    </div>
  );
  
}

export default App;
