// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBoxData) => {
    const newMailbox = {
      ...newBoxData,
      _id: mailboxes.length + 1
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<main><h1>Welcome to the Post Office!</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;