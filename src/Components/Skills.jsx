import React from "react";

const Skills = () => {
  return (
    <>
     <h1 align="center">SKILLS</h1>
     <div style={{display:"flex",justifyContent:"center"}}>
      <div className="skills">
       
        <div className="items">
          <div className="item">
          <img src="./assets/skills/css.png" alt="" />
          <h4>CSS</h4>
          </div>
          <div className="item">
          <img src="./assets/skills/figma.png" alt="" />
          <h4>FIGMA</h4>
          </div>
          <div className="item">
          <img src="./assets/skills/react.png" alt="" />
          <h4>REACT</h4>
          </div>
          <div className="item">
          <img src="./assets/skills/node.png" alt="" />
          <h4>NODE</h4>
          </div>
          <div className="item">
          <img src="./assets/skills/javascript.png" alt="" />
          <h4>JAVA SCRIPT</h4>
          </div>
          <div className="item">
          <img src="./assets/skills/html.png" alt="" />
          <h4>HTML</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
