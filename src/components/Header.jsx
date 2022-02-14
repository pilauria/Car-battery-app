import '../App.css';
import logoUrl from '../assets/SuperCar.png';

export const Header = () => {
  return (
    <div className='header'>
      <img src={logoUrl} alt='car' />
    </div>
  );
};
