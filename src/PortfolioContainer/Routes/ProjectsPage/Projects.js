import React from "react";
import ChildFooter from "../../Home/ChildFooter/ChildFooter";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="project-container">
        <h1>My Projects</h1>

        <div className="project-list mt-4">
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src={require("../../../assets/Project/BloodBank.png")}
                  alt="No Connection"
                ></img>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">Blood Bank System</h5>
                    </div>
                  </div>
                  <p className="card-text">
                    Blood Bank and Donor System is an web application which is
                    used to simplify and automate the process of searching blood
                    in case of emergency and maintain the records of blood
                    donors, recipients and blood stocks in the bank.
                  </p>
                </div>

                <div className="flipcontent">
                  <div className="colz">
                    <div className="colz-icon">
                      <a href="http://www.mybloodbp0.com:81/">
                        <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;
                      <a href="https://github.com/CoderPoojam/Blood-Bank-and-Donor-System-using-MVC">
                        <i
                          className="fa fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <h4>Please login into website using this credentials</h4>
                  <h5>
                    <b>EmailID</b> : pooja@gmail.com{" "}
                  </h5>
                  <h5>
                    <b>Password</b> : pooja@123
                  </h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={require("../../../assets/Project/Topper.png")}
                  alt="No Connection"
                ></img>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">TOPPER</h5>
                    </div>
                  </div>
                  <p className="card-text">
                    Topper is a leaning website, Its an fastest way to find, buy
                    that course and learn it on your device. It also included
                    some reviews and ratings from people so its easy to
                    understand how popular is that.
                  </p>
                </div>

                <div className="flipcontent">
                  <div className="colz">
                    <div className="colz-icon">
                      <a href="https://topperscssdatabase.firebaseapp.com/firstmainpage">
                        <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;
                      <a href="https://github.com/CoderPoojam/TopperWebsite-using-Angular">
                        <i
                          className="fa fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <h4>Please login into website using this credentials</h4>
                  <h5>
                    <b>EmailID</b> : pooja1@gmail.com{" "}
                  </h5>
                  <h5>
                    <b>Password</b> : pooja@123
                  </h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={require("../../../assets/Project/BuyClothStore.png")}
                  alt="No Connection"
                ></img>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">Buy Cloth Store</h5>
                    </div>
                  </div>
                  <p className="card-text">
                    Buy Cloth Store is an shopping site for fashion and
                    lifestyle. Admin can Add, delete and update the product.
                  </p>
                </div>

                <div className="flipcontent">
                  <div className="colz">
                    <div className="colz-icon">
                      <a href="http://www.webapiprojectp0.com:82/BuyCloth">
                        <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;
                      <a href="https://github.com/CoderPoojam/E-Commerce-Website-using-Angular-11-and-WebAPI">
                        <i
                          className="fa fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <h4>This is Demo website</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-8">
              <div className="card">
                <img
                  src={require("../../../assets/Project/WeatherApp.png")}
                  alt="No Connection"
                ></img>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">React Basic Weather App</h5>
                    </div>
                  </div>
                  <p className="card-text">
                    Weather App is an site for detecting location and showing
                    weather of your area with temperature, humidity and much
                    more.
                  </p>
                </div>

                <div className="flipcontent">
                  <div className="colz">
                    <div className="colz-icon">
                      <a href="https://coderpoojam.github.io/ReactWeatherApplication/">
                        <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;
                      <a href="https://github.com/CoderPoojam/ReactWeatherApplication">
                        <i
                          className="fa fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <h4>This is Wheather website</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChildFooter />
    </>
  );
};

export default Projects;