"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "./style/page.css";
import { FaPhone } from "react-icons/fa";
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message : "",
  });

  const myImage = require("/public/Images/myImage.png");
  const htmlImage = require("/public/Images/html.png");
  const cssImage = require("/public/Images/css.png");
  const jsImage = require("/public/Images/js.png");
  const tsImage = require("/public/Images/ts.png");
  const reactImage = require("/public/Images/react.png");
  const nodeJsImage = require("/public/Images/nodeJs.png");
  const mongodbImage = require("/public/Images/mongodb.png");
  const sqlImage = require("/public/Images/sql.png");
  const cSharpImage = require("/public/Images/cSharp.png");
  const pythonImage = require("/public/Images/python.png");
  const gitHubImage = require("/public/Images/git.png");
  const postManImage = require("/public/Images/postman.png");
  const ComputerStoreImage = require("/public/Images/ComputerStore.png");
  const speedCameraImage = require("/public/Images/Speed-Camera-Image.png");
  const AdministrationExams = require("/public/Images/AdministrationExams.png");

  const handleParam = () => (e : any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendMessage = () => {
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try{
      fetch("https://getform.io/f/0d7d39dc-f65a-4c55-99f0-2791c37b374a", {
        method: "POST",
        body: formData
      }).then(() => setQuery({ name: "", email: "", message: "" }));
    }catch(err)
    {
      console.log(err)
    }
  };

  const checkValues = () =>{
    console.log(query)
    if (query.name && query.email && query.message)
      {
        sendMessage();
      }
      alert("missing parameters")
  }

  return (
    <div className="container">
      <ul className="nav-bar">
        <li className="nav-item">
          <a className="nav-link active nav-link-over" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active nav-link-over" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-over" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-over" href="#contact-me">
            Contact
          </a>
        </li>
      </ul>
      <section id="home">
      <div className="home-container">
        <div className="home-inner-left">
          <h1 className="text-style-hello">Hello! </h1>
          <h1 className="text-style-display">I am Aviv Turgeman, </h1>
          <h1 className="text-style-end">A Software Developer</h1>
        </div>
        <div className="home-inner-right">
          <Image
            className="img-style"
            src={myImage}
            alt="my-photo"
            width={0}
            height={0}
          />
        </div>
      </div>
      </section>
      <section id="about">  
        <div className="about-container">
          <h1 className="title-style"> About Me </h1>
          <p className="about-style">
            I am a qualified Practical Software Engineer and I am bring with me
            a lot of knowledge that I gained during my studies and preparing
            projects to my portfolio. I have high ambitions and a desire to
            develop in the software field, diligent, adapts quickly and works
            well in a team.
          </p>
          <div className="my-skills-container">
          <h1 className="title-style"> My Skills</h1>
          <div className="card-skill">
          <div className="card-style">
            <Image
              className="images-style"
              src={htmlImage}
              alt="htmlImage"
              width={100}
              height={100}
            ></Image>
            </div>
            <div className="card-style">
            <Image
              className="images-style"
              src={cssImage}
              alt="cssImage"
              width={100}
              height={100}
            ></Image>
           <p className="skill-name">CSS</p>

            </div>

            <div className="card-style">
            <Image
              className="images-style"
              src={jsImage}
              alt="jsImage"
              width={100}
              height={100}
            ></Image>
            <p className="skill-name">JavaScript</p>

            </div>

            <div className="card-style">
            <Image
              className="images-style"
              src={tsImage}
              alt="tsImage"
              width={100}
              height={100}
            ></Image>
                        <p className="skill-name">TypeScript</p>

            </div>

            <div className="card-style">
            <Image
              className="images-style"
              src={reactImage}
              alt="reactImage"
              width={100}
              height={100}
            ></Image>
             </div>
            
             <div className="card-style">
            <Image
              className="images-style"
              src={nodeJsImage}
              alt="nodeJsImage"
              width={100}
              height={100}
            ></Image>
             </div>

             <div className="card-style">
            <Image
              className="images-style"
              src={mongodbImage}
              alt="mongodbImage"
              width={100}
              height={100}
            ></Image>
             </div>

             <div className="card-style">
            <Image
              className="images-style"
              src={sqlImage}
              alt="sqlImage"
              width={100}
              height={100}
            ></Image>
            </div>

            <div className="card-style">
            <Image
              className="images-style"
              src={cSharpImage}
              alt="cSharpImage"
              width={100}
              height={100}
            ></Image>
            </div>

           <div className="card-style">
            <Image
              className="images-style"
              src={pythonImage}
              alt="pythonImage"
              width={100}
              height={100}
            ></Image>
            </div>

            <div className="card-style">
            <Image
              className="images-style"
              src={gitHubImage}
              alt="gitHubImage"
              width={100}
              height={100}
            ></Image>
            </div>
            <div className="card-style">
            <Image
              className="images-style"
              src={postManImage}
              alt="postManImage"
              width={100}
              height={100}
            ></Image>
                              </div>
          </div>
              <div className="title-style"> </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
      <div className="portfolio-container">
        <h1 className="title-style"> My Projects </h1>
          <div className="my-projects-container">
          <div className="card-project-style"> 
            <Image className="img-style-project image-project-transition" src={speedCameraImage} alt="Speed-Camera-Image"/>
            <div className="card-project-inner-style"> 
            <h1 className="title-style-project"> Speed Camera </h1>
            <p className="about-project">An application to identify speed cameras. Development using a client-server model. Using MongoDB database.</p>
            <a href={"https://github.com/avivt10/SpeedCamera"} target="_blank" className="link-to-git">
                <BsGithub className="git-icon-project"/> 
                <h5>Source Code</h5>
                </a>
             </div>
          </div>
          <div className="card-project-style"> 
            <Image className="img-style-project image-project-transition" src={ComputerStoreImage} alt="ComputerStoreImage" width={0} height={0}/>
            <div className="card-project-inner-style"> 
                <h1 className="title-style-project"> Computer Store </h1>
                <p className="about-project"> Computer Store Website application. The site administrator can update products. User can buy products. Using MongoDB database. </p>
                <a href={"https://github.com/avivt10/ComputerShop"} target="_blank" className="link-to-git">
                <BsGithub className="git-icon-project"/> 
                <h5>Source Code</h5>
                </a>
            </div>
          </div>
          <div className="card-project-style"> 
          <Image className="img-style-project image-project-transition" src={AdministrationExams} alt="examProjectWeb" width={0} height={0}/>
            <div className="card-project-inner-style"> 
              <h1 className="title-style-project"> Exam Administration </h1>
              <p className="about-project"> A exam management project. Lecturer adds and deletes a exam, adds and updates questions. A student can log in and take an exam. </p>
              <a href={"https://github.com/avivt10/Exam_Administration"} target="_blank" className="link-to-git">
                <BsGithub className="git-icon-project"/> 
                <h5>Source Code</h5>
                </a>
             </div>
          </div>
          </div>
        </div>
      </section>
      <section id="contact-me">
        <div className="contact-me-container">
          <div className="title-style">
            <h1>Contact Me </h1>
          </div>
          <div className="contact-inner-container">
              <div className="card-contact-me-container">
                <form className="form-container">
                  <div className="form-group">
                    <label className="text-form">Name</label>
                    <input
                      onChange={handleParam()}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-form">Email address</label>
                    <input
                      onChange={handleParam()}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-form">Message</label>
                    <textarea
                      onChange={handleParam()}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="typing message..."
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      style={{fontSize:"20px"}}
                      className="btn btn-primary btn-style"
                      value="Send"
                      placeholder="Send"
                      onClick={checkValues}
                    ></input>
                  </div>
                  <div className="icons-container">
                  <BsGithub className="icon-color gitHub-style" style={{height:"50px",width:"50px",color:"#050505"}}/>
                  <BsLinkedin className="icon-color linkedin-style" style={{height:"50px",width:"50px"}}/>
                  </div>

                </form>
                <div className="content-center">
                  <div className="pulse">
                    {" "}
                    <FaPhone className= "phone-icon"> </FaPhone>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <footer className="footer-container">
        <p className="style-text-footer"> Aviv Turgeman || 054-7654-959 </p>
      </footer>
    </div>
  );
}