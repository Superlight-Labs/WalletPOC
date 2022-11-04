import * as React from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = React.useState('');

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit: React.FormEventHandler = event => {
    event.preventDefault();
  };

  return (
    <section>
      <label htmlFor="WaitlistForm" className="text-xs">
        Sign up here to join the Waitlist and keep updated
      </label>
      <form id="WaitlistForm" onSubmit={handleSubmit}>
        <input autoComplete="email" className="text-gray-900" type="email" onChange={changeValue} />
        <button type="submit">Enroll!</button>
      </form>
    </section>
  );
};

export default WaitlistForm;
