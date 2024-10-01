import React, { useState } from 'react';

 function NewPersonalForm({onUserAdd}:any) {
  // State to store input data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function called on form submission
  const handleSubmit = (event:any) => {
    event.preventDefault(); // Prevent default form submission behavior
    alert(`Thanks for submitting! Name: ${name}, Email: ${email}`);
    onUserAdd({name,email})
    setName('')
    setEmail('')

  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Input */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required // This field is required
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // This field is required
        />
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPersonalForm;