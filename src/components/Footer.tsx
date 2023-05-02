import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <Link to="/about-us" className='link'>O nama</Link>
          <Link to="/animals" className='link'>Popis</Link>
          <Link to="/donations" className='link'>Donacije</Link>
          <Link to="/notifications" className='link'>Obavijesti</Link>
      </div>
    </div>
  );
}

export default Footer;
