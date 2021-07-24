import "../../styles/Flutter.css";
import "../../styles/Buttons.css";
import { useEffect } from "react";
export default function Flutter() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
  return (
    <div className='flutter'>
      <h1>Flutter Rush</h1>
      <div className='flutter-container'>
        <div className='flutter-left1'>
          <p>
            Here’s an opportunity for you to flex your coding muscles and win
            cash prizes ranging over 10000Rs and also an opportunity to get
            selected as PAID INTERNS at Master Mentors , a Blockchain Oriented
            Consulting Startup. Top 10 Performers also get access to exclusive
            courses for free of cost.
          </p>
        </div>
        <div className='flutter-right1'>
          {/* <img src={Poster1} alt=''></img> */}
        </div>
      </div>
      <div className='flutter-container'>
        <div className='flutter-left2'>
          {/* <img src={Poster2} alt=''></img> */}
        </div>
        <div className='flutter-right2'>
          <h3>Process:-</h3>
          <ol>
            <li>Will consist of 2 rounds.</li>
            <li>1st round: -Resume Shortlisting. (Resume/CV)</li>
            <li>2nd round (7-10 Days): - Application Development</li>
          </ol>
        </div>
      </div>
      <div className='button-container-flutter'>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://forms.gle/r9JndHuUxJwvh82z9'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1hXxJWu3iWMIGfC7v33rgArYqWebz2XlK7O3Y86TgzB0/edit?usp=sharing'>
              <span id='registration'>Rules & Regulations</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
      <h3>
            Kick in your ingenuity and creativity. Brace yourself to take your
            coding skills to the next level.{" "}
          </h3>
          <h3>Any further queries, contact: -</h3>
          <h3>Mr.Sajith Surendran</h3>
          <h3>
            <a id="email" href='mailto:21f1003283@student.onlinedegree.iitm.ac.in'>
              21f1003283@student.onlinedegree.iitm.ac.in
            </a>
          </h3>
    </div>
  );
}
