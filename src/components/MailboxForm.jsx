import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    _id: null,
    boxSize: "",
    boxHolder: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddBox(formData, (formData._id = props.mailboxes.length + 1));
    navigate("/mailboxes");
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Enter the name of the boxholder</label>
        <input
          type="text"
          name="boxHolder"
          onChange={handleChange}
          id="boxHolder"
          required
        />
        <label htmlFor="boxSize">
          {" "}
          Choose a mailbox size{" "}
          <select name="boxSize" onChange={handleChange} id="boxSize" required>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;