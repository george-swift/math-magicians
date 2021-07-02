import { quotes } from '../data/quotes.json';
import Clock from '../assets/wuyi-clock.jpg';

const Quote = () => {
  const random = Math.floor(Math.random() * (quotes.length - 1));

  const { from, quote } = quotes[random];
  const [name, achievement] = from.split(',');

  return (
    <div className="container flex-column pt-5">
      <div className="card">
        <div className="card-header">
          Quote of the day
        </div>
        <img src={Clock} alt="math clock" className="w-100" />
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{quote}</p>
            <footer
              className="blockquote-footer"
            >
              {name}
              <cite title="Source Title">{achievement}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Quote;
