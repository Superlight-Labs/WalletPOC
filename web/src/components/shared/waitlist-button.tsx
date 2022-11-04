const WaitlistButton = () => {
  const click = () => {
    const form = document.querySelector('#WaitlistForm');
    form.scrollIntoView();

    form.querySelector('input').focus();
  };

  return (
    <button onClick={click} className="bg-button text-contrast px-8 fw py-2 font-bold rounded-full">
      Join the waitlist
    </button>
  );
};

export default WaitlistButton;
