
import './App.css';
import './style.css';



function App() {
  return (
    <div className="App container">
      <div className="Container-body">
        <div className="glass-rect">
          <nav className="nav-bar">
            <div className="nav-brand">Camping</div>
            <ul className="nav-items">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="http://localhost:5000/campgrounds">Camps</a>
              </li>
              <li className="nav-item">
                <a href="http://localhost:5000/campgrounds/new">Posting-camp</a>
              </li>
              <li className="nav-item">
                <a href="http://localhost:5000/about">About</a>
              </li>
              <li className="nav-item">
                <a href="http://localhost:5000/contact">contact</a>
              </li>
              <li className="nav-item">
                <a href="http://localhost:5000/login">Login</a>
              </li>
              {/* <li className="nav-item">Register</li> */}
            </ul>
          </nav>

          <div className="main">
            <div className="img-wrapper">
              <img
                src="https://static.tildacdn.com/tild3732-6161-4133-a233-346331353330/pic_1_1-min.png"
                width="400px"
                class="feat-img"
              />
            </div>
            <h2 className="main-title">
              Yo! 👋,
              <br />
              Find yourself outside.
            </h2>
            <h4 className="main-desc">
              Discover and book tent camping, treehouses. camp is a growing
              community of good-natured people and the most comprehensive
              resource for unique outdoor stays. By connecting people with the
              land and each other, camp works to support those who care for the
              land and get more people out under the stars. We do this because
              we believe humans in nature bring out the best of human nature.
            </h4>
            <br />
            <br />
            <h4 className="main-desc">Embrace the Nature Around You</h4>

            <h4>Because, Human will not let the nature be as it was earlier nor in the coming generation.</h4>
            <h3 className="main-title"> So, Live your life Better.</h3>
            <button className="btn-boost">
              <a href="http://localhost:5000/campgrounds">Get Started </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
