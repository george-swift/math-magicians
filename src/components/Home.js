import { Link } from 'react-router-dom';
import Blackboard from '../assets/roman-mager.jpg';

const Home = () => (
  <div className="container flex-column text-center pt-5">
    <h1>Welcome to our page</h1>
    <div className="mt-4 card bg-dark text-white">
      <img src={Blackboard} alt="A blackboard" className="w-100" />
      <div className="card-body">
        <p className="card-text">
          Math Magicians is a single page web app that provides an easy way of solving
          arithmetic problems. Built with React, React Router v6, Javascript, Bootstrap,
          HTML5/CSS3.
        </p>
        <Link to="/calculator" className="btn btn-warning">Get Started</Link>
      </div>
    </div>
  </div>
);

export default Home;
