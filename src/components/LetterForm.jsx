import { useState } from "react";

const LetterForm = (props) => {
  const mailboxOptions = props.mailboxes.map((mailbox) => (
    <option key={mailbox._id} value={mailbox._id}>
      Mailbox {mailbox._id}
    </option>
  ));

  const [formData, setFormData] = useState({
    mailboxId: 1,
    recipient: "",
    message: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddLetter(
      formData,
      (formData.mailboxId = parseInt(formData.mailboxId))
    );
    console.log(formData);
  };

  return (
    <div>
      <h1> New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select
          id="mailboxId"
          name="mailboxId"
          onChange={handleChange}
          value={formData.mailboxId}
        >
          {mailboxOptions}
        </select>
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          placeholder="Recipient Name"
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send letter</button>
      </form>
    </div>
  );
};

export default LetterForm;