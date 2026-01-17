import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionate web developer with hands-on experience in HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, and MySQL. I enjoy building clean, user-friendly, and scalable web applications, and I am highly motivated to continuously learn new technologies and modern design <br />patterns to improve product quality and user experience. </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src="./src/assets/images/qatester.jpeg" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Software Tester</h2>
            <p>I have hands-on experience as a software tester, having worked at Seamfix where I played a proactive and detail-oriented role in ensuring product quality. In this role, I collaborated closely with developers, designers, and other team members to test applications, identify bugs, and verify that features met functional and usability requirements. My work involved executing test cases, reporting issues clearly, and contributing feedback that helped improve system reliability and user experience. Through curiosity and continuous learning, I actively engaged in understanding system behavior and supporting the team in delivering stable and efficient software solutions.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src="./src/assets/images/Web2.jpeg" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Designer</h2>
            <p>Designed responsive, user-friendly website interfaces. Converted UI/UX designs into clean HTML, CSS, and JavaScript.
                Ensured cross-browser compatibility and consistent visual design.
                Collaborated with team members to deliver high-quality web experiences.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src="./src/assets/images/App.jpeg" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Desiger</h2>
            <p>I design and develop intuitive, user-friendly applications using HTML, CSS, JavaScript, and React.js, with hands-on experience in backend development using Node.js, Express, and database technologies. I collaborate effectively across teams to deliver scalable and responsive web solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
