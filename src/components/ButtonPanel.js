import { groups } from '../data/groups.json';
import Button from './Button';

const ButtonPanel = () => (
  <>
    {Object.keys(groups).map((name) => (
      <div key={name} className={name}>
        {groups[name].map((btn) => (
          <Button key={btn} name={btn} />
        ))}
      </div>
    ))}
  </>
);

export default ButtonPanel;
