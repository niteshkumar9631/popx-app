import { useNavigate } from 'react-router-dom';
import './Landing.css';

// Floating bubble positions from the design
const bubbles = [
  { id: 1,  top: '22%', left: '42%' },
  { id: 2,  top: '28%', left: '36%' },
  { id: 3,  top: '34%', left: '46%' },
  { id: 4,  top: '40%', left: '56%' },
  { id: 5,  top: '46%', left: '64%' },
  { id: 6,  top: '16%', left: '22%' },
  { id: 7,  top: '20%', left: '34%' },
  { id: 8,  top: '6%',  left: '76%' },
  { id: 9,  top: '73%', left: '46%' },
  { id: 10, top: '73%', left: '18%' },
  { id: 11, top: '60%', left: '72%' },
  { id: 12, top: '4%',  left: '6%'  },
  { id: 13, top: '48%', left: '14%' },
  { id: 14, top: '60%', left: '4%'  },
  { id: 15, top: '46%', left: '60%' },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-screen screen">
      {/* Floating numbered bubbles */}
      <div className="bubbles-area">
        {bubbles.map(b => (
          <div
            key={b.id}
            className="bubble"
            style={{ top: b.top, left: b.left }}
          >
            {b.id}
          </div>
        ))}
      </div>

      {/* Bottom content */}
      <div className="landing-bottom">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-desc">
          Lorem ipsum dolor sit amet,<br />
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
