import '../App.css';
import PropTypes from 'prop-types';

export const CarStats = ({ carstats }) => {
  const listItems = carstats.map(stat => (
    <li key={stat.model}>
      <div
        className={`car-stats-icon car-stats-icon--${stat.model.toLowerCase()}`}
      ></div>
      <p>{stat.miles}</p>
    </li>
  ));
  return (
    <div className='car-stats'>
      <h1>Vehicle Models</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

CarStats.propTypes = {
  carstats: PropTypes.array,
};
