import { useLocation } from 'react-router-dom';
import './Account.css';

export default function Account() {
  const { state } = useLocation();
  const name = state?.name || 'Marry Doe';
  const email = state?.email || 'Marry@Gmail.Com';

  return (
    <div className="account-screen screen">
      <div className="account-header">
        <h1 className="account-title">Account Settings</h1>
      </div>

      <div className="account-divider" />

      <div className="profile-section">
        <div className="avatar-wrap">
          <div className="avatar-img">
            {/* Placeholder avatar with initials */}
            <div className="avatar-placeholder">
              {name.charAt(0)}
            </div>
          </div>
          <div className="camera-btn">
            <span>📷</span>
          </div>
        </div>

        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-email">{email}</p>
        </div>
      </div>

      <div className="account-divider" />

      <div className="account-body">
        <p className="account-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="account-divider dashed" />
    </div>
  );
}
