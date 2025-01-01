function Contact() {
  return (
    <div>
      <div className="container">
        <div className=" mb-5  mt-3 d-flex flex-column align-items-center">
          <h2 className="text-uppercase fw-bold">conatct section</h2>
          <div className="icon-info-port">
            <i className="fs-5 fa-solid fa-star"></i>
          </div>
        </div>
        <div className="form my-3">
          <div className="row g-4">
            <div className="col-md-6 offset-md-3">
              <div className="div-input">
                <input type="text" placeholder="Name.." className="form-control" />
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="div-input">
                <input type="text" placeholder="userAge.." className="form-control" />
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="div-input">
                <input type="text" placeholder="userEmail.." className="form-control" />
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="div-input">
                <input type="text" placeholder="userPassword.." className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-3 offset-md-3">
            <button className="btn btn-bg w-100 d-block">send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
