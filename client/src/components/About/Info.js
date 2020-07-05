import React from "react";
import Image1 from "../../assets/aboutImage/imgInfo.jpeg";
import "../../styles/components/About/info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="info-wrap row">
          {/* text */}
          <div className="info-text col-lg-6 col-md-12">
            <h2>Organic Food - Farm Fresh Produce Right To Your Door</h2>
            <div className="info-text__wrap">
              <h3>Natural Products</h3>
              <p>
                Organically grown crops tend to use natural fertilizers like
                manure to improve plant growth. Animals raised organically are
                also not given antibiotic organic hormones most commonly
                purchased organic .
              </p>
            </div>
            <div className="info-text__wrap">
              <h3>Wheat Cultivation</h3>
              <p>
                Organically grown crops tend to use natural fertilizers like
                manure to improve plant growth. Animals raised organically are
                also not given antibiotic organic hormones most commonly
                purchased organic .
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="info-image col-lg-6 col-md-12">
            <img src={Image1} alt="image-info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
