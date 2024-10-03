import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );
  const letters = selectedLetters.map((letter) => (
    <div key={letter.mailboxId} className="letters">
      <p>Dear {letter.recipient},</p>
      <p>{letter.message}</p>
    </div>
  ));

  console.log(letters);
  return (
    <>
      <h1>Mailbox {mailboxId}</h1>
      <div className="mail-box">
        <h3>Details</h3>
        <p> Boxholder: {selectedBox.boxHolder}</p>
        <p> Box Size: {selectedBox.boxSize}</p>
      </div>
      <div className="letters-container">
        <h3>Letters</h3>
        <div>{letters}</div>
      </div>
    </>
  );
};

export default MailboxDetails;