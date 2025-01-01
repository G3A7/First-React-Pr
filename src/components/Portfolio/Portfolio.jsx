import { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
function Portfolio() {
  const [img, setImg] = useState(0);
  let images = [img1, img2, img3, img1, img2, img3];
  const [flag, setFlag] = useState(true);
  return (
    <div className="bg-portfolio">
      <div
        onClick={() => {
          setFlag(true);
        }}
        className={`box ${flag ? "d-none" : "d-flex"} `}
      >
        <div className="img-big ">
          <img src={img} className="w-100 d-block" alt="" />
        </div>
      </div>

      <div className="container py-3">
        <div className=" mb-5  mt-2 d-flex flex-column align-items-center">
          <h2 className="text-uppercase fw-bold">portfolio component</h2>
          <div className="icon-info-port">
            <i className="fs-5 fa-solid fa-star"></i>
          </div>
        </div>
        <div className="row g-4">
          {images.map((e, idx) => {
            return (
              <div key={idx} className="col-lg-4 col-md-6">
                <div
                  onClick={function () {
                    setImg(e);
                    setFlag(false);
                  }}
                  className="img-port position-relative rounded-1"
                >
                  <img src={e} className="img-fluid rounded-1" alt="" />
                  <div className="hoverimg rounded-1">
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
