import AddTextPic from "../assets/addboxexample.png"
import frogBlack from '../assets/froglines.png'
import frogGreen from '../assets/frogicon.png'

export default function HowItWorks() {
  return (
    <div className="how-it-works-box">
      <h2>How It Works</h2>

      <h3>Creating a Task</h3>

      <p>Add your task by typing it into the text box.
        <div></div>
      </p>

      <img className="add-example-img" src={AddTextPic}></img>

      <p>Then rate it using the sliders.</p>

      <h4>Tedium</h4>
      <div className="rating-example">
        <span>1 = Not tedious</span>
        <span>10 = Very tedious</span>
      </div>

      <h4>Difficulty</h4>
      <div className="rating-example">
        <span>1 = Not difficult</span>
        <span>10 = Very difficult</span>
      </div>

      <h4>Time</h4>
      <div className="rating-example">
        <span>1 = Very quick</span>
        <span>10 = Takes a very long time</span>
      </div>

      <h3>Add a frog</h3>

      <p>
        If the task is the one you dread the most, make it your frog by clicking the frog.
      </p>

      <div className="example-frog-box">
        <img className="example-frog example-frog-lines" src={frogBlack}/>
        <div>&#8594;</div>
        <img className="example-frog" src={frogGreen}/>
      </div>

      <p>Then click <strong className="add-button-example">Add to List</strong></p>

      <hr></hr>

      <h3>Choosing Your Approach</h3>

      <p>
        Change the order of your list by selecting a method.
      </p>

      <p>
        Each method has different advantages and works better for different
        people depending on what they find motivating or what helps them avoid
        procrastination. Find what works for you.
      </p>

      <h4>Eat the Frog</h4>
      <p>
        Do what you dread most first, then work from the hardest tasks through
        to the easiest.
      </p>
      <p>
        <em>
          Best for people who can put off tasks for months if they don't get
          them done right away.
        </em>
      </p>

      <h4>Frog with a Chaser</h4>
      <p>
        The same as Eat the Frog, but after your frog you complete your two
        easiest or most enjoyable tasks. This gives you a little break after
        eating that frog.
      </p>
      <p>
        <em>
          Helps keep morale up if the frog was as unpleasant as it seemed.
        </em>
      </p>

      <h4>Snowball</h4>
      <p>
        This method is all about momentum. Start with the quickest tasks and
        work through to the longest. This allows you to tick off lots of items
        in a short amount of time.
      </p>
      <p>
        <em>
          Great for people who work best when they feel they're on a roll, or
          who struggle most with simply getting started.
        </em>
      </p>

      <h4>One for Me, One for Them</h4>
      <p>
        Sometimes it's you against the world. This method starts with one easy then a tough, then follows every tough
        task with one you're more likely to enjoy. It spreads out the pain and
        keeps motivation up.
      </p>
      <p>
        <em>
          A sensible option for people who tend to do only what they want to
          do and never quite get around to what they should do.
        </em>
      </p>

      <h4>Hump</h4>
      <p>
        
        
      </p>
      <p>
        Need momentum but don't want to finish your day with the hardest jobs?
        This method is perfect. The difficulty peaks in the middle of the day
        while you still have the energy to tackle the hardest tasks while enjoying
        an easier run toward the finish.
      </p>
      <p>
        <em>Great if you're Worried you won't get around to important tasks if they're
          set for last, and you can feel smug with an afternoon of plain sailing.</em>
      </p>
    </div>
  )
}


