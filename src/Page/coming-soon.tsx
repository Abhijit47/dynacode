import { Link } from 'react-router-dom';

export default function ComingSoon() {
  return (
    <div className='section notfound-section'>
      <div className='hero-container'>
        <div className='notfound-container'>
          <span className='text-404'>Coming soon</span>
          <h2>Oops! This page is under construction.</h2>
          <p>We're working hard to bring you this feature. Stay tuned!</p>
          <div>
            <Link to='/' className='btn btn-accent'>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
