import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account', { state: { name: form.fullName, email: form.email } });
  };

  return (
    <div className="register-screen screen">
      <div className="register-content">
        <h1 className="register-title">Create your<br />PopX account</h1>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="field-group">
            <label className="field-label">Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Phone number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="Marry Doe"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Email address*</label>
            <input
              type="email"
              name="email"
              placeholder="Marry Doe"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Company name</label>
            <input
              type="text"
              name="company"
              placeholder="Marry Doe"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className="agency-group">
            <p className="agency-label">Are you an Agency?*</p>
            <div className="radio-row">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={handleChange}
                />
                <span className="custom-radio" />
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={handleChange}
                />
                <span className="custom-radio" />
                <span>No</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-purple create-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
