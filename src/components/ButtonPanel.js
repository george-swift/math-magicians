import { groups } from '../data/groups.json';
import Button from './Button';

const ButtonPanel = () => (
  <div className="col-12 h-75">
    {Object.keys(groups).map((name) => (
      <div key={name} className={name}>
        {groups[name].map((btn) => (
          <Button key={btn} name={btn} />
        ))}
      </div>
    ))}
  </div>
);

export default ButtonPanel;
