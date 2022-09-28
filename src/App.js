
import './App.css';
import joebruin from "./assets/joebruin.jpg"
import bball from "./assets/bball.jpg"
import hack from "./assets/hack.jpg"
import bear from "./assets/bear.jpg"



function App() {
  return (
    <div>
      <h1>
        Joe Bruin
      </h1>
        <img width = "200px" src={joebruin} alt="logo" />
        <p>
        Hi! My name is Joe Bruin and I am 37th year at UCLA. <b>More importantly, I'm a member
        of the greatest club, <a href="https://hack.uclaacm.com/">ACM Hack.</a></b> I love Yoga, foreign films, and combat sports.<br/>
        <u>One thing you should know about me is that I am extremely passionate about HTML.</u>
        </p>

        <h2>Fun Facts about Me</h2>
        <ul>
          <li>I'm 72 years old</li>
          <li>I never graduated high school</li>
          <li>I can't dunk</li>
        </ul>

        <h2>My favorite foods ranked</h2>
        <ol>
          <li>rissoto</li>
          <li>tonkatsu</li>
          <li>de neve chicken</li>
          <li>chocolate lava cake</li>
        </ol>
  
        <h2>My Camera Roll</h2>

        <div>
          <img src = {bball}/>
          <h5>Another UCLA Victory</h5>
          <p> UCLA wins another hard fought battle. Go Bruins!</p>
        </div>

        <div>
          <img src = {bear}/>
          <h5>Bear Statue</h5>
          <p>One of my favorite parts of campus. Love being greated by another bear on my way up bruin walk.</p>
        </div>

        <div>
          <img src = {hack}/>
          <h5>The best club here at UCLA</h5>
          <p>ACM hack is the on campus organization. I recommend everyone joins.</p>
        </div>

        
      
    </div>
  );
}

export default App;
