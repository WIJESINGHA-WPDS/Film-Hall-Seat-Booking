import { useState } from "react";
import { Link } from "react-router-dom"; // ← Import Link
import "./Register.css"; // You can reuse the styling file

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (form.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert(`Logged in as ${form.email}`);
      // You can add an API call here
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Login</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={errors.email ? "error" : ""}
            required
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className={errors.password ? "error" : ""}
            required
          />
          {errors.password && <span className="error-text">{errors.password}</span>}

          <button type="submit">Login</button>
        </form>

        {/* 👇 Add this Register Link */}
        <div className="register-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
