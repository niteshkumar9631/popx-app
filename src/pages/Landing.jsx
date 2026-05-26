import { useNavigate } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-screen screen">
      {/* Bottom content */}
      <div className="landing-bottom">
        <h1 className="landing-title">Welcome to PopX</h1>

        <p className="landing-desc">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button
          className="btn-purple"
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>

        <button
          className="btn-light"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}