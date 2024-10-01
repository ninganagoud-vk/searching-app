'use client';

import React, { useState, FormEvent } from 'react';

// Define the type for form state
interface FormState {
  name: string;
  location: string;
  termsAccepted: boolean;
}

const PersonalForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    location: '',
    termsAccepted: false,
  });

 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { name, location, termsAccepted } = formState;
    if (name && location && termsAccepted) {
      alert(`Submitted:\nName: ${name}\nLocation: ${location}`);
    } else {
      alert('Please fill out all fields and accept the terms and conditions.');
    }
  };

  return (
    <div className="form-container">
      <h1>Job Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={'avinash'}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Job Location</label>
          <select
            id="location"
            name="location"
            value={formState.location}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formState.termsAccepted}
              onChange={handleChange}
              required
            />
            I accept the terms and conditions
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalForm;
