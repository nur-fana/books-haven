import { useState } from "react";

// Contact page with a controlled form and simple validation
function Contact() {
  // One state object holds all form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Update the correct field using the input's "name" attribute
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check each field and return an object with error messages
  const validate = () => {
    const newErrors = {};
    if (formData.name.trim() === "") newErrors.name = "Please enter your name.";
    if (formData.email.trim() === "") {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.subject.trim() === "") newErrors.subject = "Please enter a subject.";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    const newErrors = validate();
    setErrors(newErrors);

    // If there are no errors, show success and clear the form
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setSuccess(false);
    }
  };

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>We'd love to hear from you</h1>
          <p>Questions, recommendations or feedback — send us a message.</p>
        </div>
      </section>

      <section className="section container contact-grid">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p><strong>Email:</strong> hello@bookhaven.com</p>
          <p><strong>Phone:</strong> +961 1 234 567</p>
          <p><strong>Address:</strong> Hamra Street, Beirut, Lebanon</p>
          <p><strong>Hours:</strong> Mon – Sat, 9:00 – 18:00</p>
          <p className="muted">(Sample contact information for this project.)</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {success && (
            <div className="success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Subject
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </label>

          <label>
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
