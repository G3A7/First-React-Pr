import img from "../../assets/avataaars.svg";
function DefaultPage() {
  return (
    <div className="bg-custom-body">
      <div className="container py-5 text-white">
        <div className="info">
          <div className="img-info mt-5">
            <img src={img} className="img-fluid" alt="" />
          </div>
          <h2 className="mt-4 txt-custom-main text-uppercase">start Framework</h2>
          <div className="icon-info">
            <i className="fs-5 fa-solid fa-star"></i>
          </div>
          <p className="mt-3 p-custom-fs">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;
