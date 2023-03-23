import React from "react";
import ChildFooter from "../../Home/ChildFooter/ChildFooter";
import "./Certification.css";

const Certificate = () => {
  return (
    <>
      <div className="certificate-parent">
        <div className="certificate_title">
          <h1>My Certificates</h1>
        </div>

        <div className="certificate-container">
          {/* Microsoft SC-900 */}
          <div className="row">
            <div className="col-md-6 pb-5">
              <div className="iconimage">
                <img
                  src={require("../../../assets/Certificate/CertificateIcons/MicrosoftSC-900Icon.png")}
                  alt="No Connection"
                ></img>
              </div>
              <h1>
                Microsoft Security, Compliance and Identity Fundamentals(SC-900)
              </h1>
              <div className="subinformation">
                <h4>
                  <span>Version :</span> Latest
                </h4>
                <h4>
                  <span>Certification Date :</span> 18 April 2022
                </h4>
              </div>
            </div>
            <div className="col-md-6 how-img">
              <img
                src={require("../../../assets/Certificate/SC900.png")}
                alt="No Connection"
              ></img>
            </div>
          </div>
          {/* HTMLCSS */}
          <div className="row">
            <div className="col-md-6 how-img">
              <img
                src={require("../../../assets/Certificate/HtmlCSS.png")}
                alt="No Connection"
              ></img>
            </div>
            <div className="col-md-6 pb-5">
              <div className="iconimage">
                <img
                  src={require("../../../assets/Certificate/CertificateIcons/htmlcssicon.png")}
                  alt="No Connection"
                ></img>
              </div>
              <h1>Build Responsive Real-World websites with HTML & CSS</h1>
              <div className="subinformation">
                <h4>
                  <span>Version :</span> Latest{" "}
                </h4>
                <h4>
                  <span>Certification Date :</span> 7 October 2021
                </h4>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="row">
            <div className="col-md-6 pb-5" style={{ marginTop: 80 }}>
              <div className="iconimage">
                <img
                  src={require("../../../assets/Certificate/CertificateIcons/JSIcon.png")}
                  alt="No Connection"
                ></img>
              </div>
              <h1>JavaScript Basics for Beginners</h1>
              <div className="subinformation">
                <h4>
                  <span>Version :</span> ES6
                </h4>
                <h4>
                  <span>Certification Date :</span> 19 February 2021
                </h4>
              </div>
            </div>
            <div className="col-md-6 how-img">
              <img
                src={require("../../../assets/Certificate/JS.png")}
                alt="No Connection"
              ></img>
            </div>
          </div>

          {/* C# */}
          <div className="row">
            <div className="col-md-6 how-img">
              <img
                src={require("../../../assets/Certificate/CSharp.jpg")}
                alt="No Connection"
              ></img>
            </div>
            <div className="col-md-6 pb-5">
              <div className="iconimage">
                <img
                  src={require("../../../assets/Certificate/CertificateIcons/C#Icon.jpg")}
                  alt="No Connection"
                ></img>
              </div>
              <h1>Complete C# Masterclass</h1>
              <div className="subinformation">
                <h4>
                  <span>Version :</span> C# 9.0
                </h4>
                <h4>
                  <span>Certification Date :</span> 11 March 2021
                </h4>
              </div>
            </div>
          </div>

          {/* Angular */}
          <div className="row">
            <div className="col-md-6 pb-5">
              <div className="iconimage">
                <img
                  src={require("../../../assets/Certificate/CertificateIcons/AngularIcon.png")}
                  alt="No Connection"
                ></img>
              </div>
              <h1>Angular - The Complete Guide (2022 Edition)</h1>
              <div className="subinformation">
                <h4>
                  <span>Version :</span> Angular 12
                </h4>
                <h4>
                  <span>Certification Date :</span> 5 April 2022
                </h4>
              </div>
            </div>
            <div className="col-md-6 how-img">
              <img
                src={require("../../../assets/Certificate/AngularC.jpg")}
                alt="No Connection"
              ></img>
            </div>
          </div>

          {/* React */}
          <div className="row">
            <div className="col-md-6 how-img">
              <img
                src={require("../../../assets/Certificate/ReactJs.png")}
                alt="No Connection"
              ></img>
            </div>
            <div className="col-md-6 pb-5">
              <div className="iconimage">
                <img
                  src={require("../../../assets/Certificate/CertificateIcons/ReactIcon.png")}
                  alt="No Connection"
                ></img>
              </div>
              <h1>React Frontend Developer</h1>
              <div className="subinformation">
                <h4>
                  <span>Version :</span> Latest{" "}
                </h4>
                <h4>
                  <span>Certification Date :</span> 14 Feb 2023
                </h4>
              </div>
            </div>
          </div>

          {/* SQL Server */}
          <div className="row">
            <div className="col-md-6 pb-5">
              <div className="iconimage">
                <img
                  src={require("../../../assets/Certificate/CertificateIcons/SqlServerIcon.png")}
                  alt="No Connection"
                ></img>
              </div>
              <h1>Querying Microsoft SQL SERVER With TRANSACT-SQL</h1>
              <div className="subinformation">
                <h4>
                  <span>Version :</span> 2014
                </h4>
                <h4>
                  <span>Certification Date :</span> 1 April 2021
                </h4>
              </div>
            </div>
            <div className="col-md-6 how-img">
              <img
                src={require("../../../assets/Certificate/SqlServer.jpg")}
                alt="No Connection"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <ChildFooter/>
    </>
  );
};

export default Certificate;
