function Footer() {
  return (
    <section className=" pt-custom text-white text-center  footer-bg">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h4>LOCATION</h4>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h4>AROUND THE WEB</h4>
            <div className="icons-footer">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fas fa-globe"></i>
            </div>
          </div>
          <div className="col-md-4">
            <h4>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 py-4 footer-bg-last">Copyright © Your Website 2025</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

/*
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin-in"></i>
<i class="fa-solid fa-globe"></i>
--
<i class="fa-solid fa-star"></i>
*/
