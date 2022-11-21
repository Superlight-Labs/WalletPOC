import * as React from "react";
import { useEffect } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = React.useState("");

  useEffect(() => {
    fetch("/api/email", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Test", data);
      });
  }, []);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center px-12">
      <label htmlFor="WaitlistForm" className="text-xs sr-only">
        Sign up here to join the Waitlist and keep updated
      </label>
      <form
        id="WaitlistForm"
        onSubmit={handleSubmit}
        className="sm:bg-stone-900 flex flex-col sm:flex-row rounded-full"
      >
        <input
          className=" bg-stone-900 text-slate-300 px-8 fw py-4 rounded-full mb-4 sm:mb-0"
          autoComplete="email"
          placeholder="max.musterman@email.com"
          type="email"
          onChange={changeValue}
        />
        <button className="bg-white text-black px-12 fw py-4 font-bold rounded-full" type="submit">
          Join the waitlist
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
