import React from "react";
import "./index.css";
import { NavBar } from "../../Components/NavBar/NavBar";
export function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5 skill-container">
          <div className="col w-50">
            <h1 className="fs-1 fw-bold mb-5">About Hatsume</h1>
            <p className="descSkills fs-6">
              Hatsume is a multi function bot which was created in the year 2021
              in order to entertain people and also on the other hand learn
              programming, this is created with only 1 person which was striving
              hard and learning every day more to improve the bot .... Right now
              it is in a few servers but if you give us support, suggestions we
              can reach more!
            </p>
          </div>
          <div className="col text-center donate-box">
            <h1 className="fs-1 fw-bold mb-5 mt-4">¡ Donate !</h1>
            <p className="descSkills fs-6 w-75 mx-auto">
              Hello, I hope you're well, I'll explain you look... I need help to
              be able to continue entertaining them since I can not alone I hope
              you can help me and I would appreciate it very much with benefits 
              <span role='img' aria-label='hearth'>💙</span>.
            </p>
            <a href="/suscribtion" className="donate_button pink-button mx-auto">
              Donate
            </a>
            <img
              src="/img/hatsumedonation.png"
              className="hatsumedonation"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div className="footerGuild w-100">
        <div className="text-center">
          <p className="footerT fs-5">© Hatsume 2021</p>
        </div>
      </div>
    </>
  );
}
