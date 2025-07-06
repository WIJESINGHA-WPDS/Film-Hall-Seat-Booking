import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
   if (!form.name.trim()) {
  newErrors.name = "Name is required";
} else if (!/^[A-Za-z\s]+$/.test(form.name)) {
  newErrors.name = "Name can only contain letters and spaces";
}

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
      alert(`Registered as ${form.name}`);
      // You can add API call here
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={errors.name ? "error" : ""}
            required
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

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

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
