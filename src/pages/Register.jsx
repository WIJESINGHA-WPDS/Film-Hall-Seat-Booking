import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${form.name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required /><br /><br />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required /><br /><br />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
