import '../App.css';
import logoUrl from '../assets/logo.svg';

export const Header = () => {
  return (
    <div className='header'>
      <img src={logoUrl} alt='car' />
    </div>
  );
};
