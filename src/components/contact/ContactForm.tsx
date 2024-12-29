import React from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import SubmitButton from './SubmitButton';

const ContactForm = () => (
  <form className="space-y-6">
    <FormInput
      id="name"
      label="Name"
      type="text"
    />
    
    <FormInput
      id="email"
      label="Email"
      type="email"
    />
    
    <FormTextArea
      id="message"
      label="Message"
      rows={4}
    />
    
    <SubmitButton />
  </form>
);

export default ContactForm;