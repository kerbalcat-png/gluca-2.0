import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bytes, setBytes] = useState(null); 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  function handleFileInputClick() {
    document.getElementById("fileInput").click();
  }

  // Function to convert file to bytes
  function handleBytes(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setBytes(reader.result); 
    };
    reader.readAsDataURL(file);
  }

  return (
      <section className="hero">
        <div className="hero-left">
          <h1>
            GREAT HEALTH <br />
            DOESN'T HAVE TO <br />
            COST THE EARTH
          </h1>

          <p>
            Gluca helps you scan food products and instantly understand
            their glucose impact.
          </p>

          <Link to="/scan">
            <button className="scan-btn">SCAN NOW</button>
          </Link>
        </div>

        <div className="hero-right">
          <form
            action="http://localhost:5000/barcode"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="product-card" onClick={handleFileInputClick}>
              <h3>Upload Product Image</h3>
              <p>Select a food product image to analyze</p>

              <input
                id="fileInput"
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) => {
                  handleImageUpload(e);
                  handleBytes(e); 
                }}
                className="file-input"
              />

              {selectedImage && (
                <div className="image-preview">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="preview-img"
                  />
                </div>
              )}
            </div>

            <input type="submit" />
          </form>
        </div>
      </section>
  );
}

export default Home;