import React from "react";
import "../../CSS/index.css";

const inboxMessagesForm = ({ message }) => {

  return (
    <div>
      <div className="header">
        <a href="#" className="logo">
          <span id="whitish">Epic</span>
          <span id="blueish">Mail</span>
        </a>
        <div className="header-right">
          <a href="">Logout</a>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="side-bar">
          <br />
          <a>Compose</a>
          <br />
          <br />
          <a>Inbox</a>
          <br />
          <br />
          <a>Sent</a>
          <br />
          <br />
          <a>Groups</a>
          <br />
          <br />
          <a>Create Group</a>
        </div>
        <div className="messages">
          <h1>My messages</h1>
          {Array.isArray(message)
            ? message.map(item => (
                <div key={item}>
                  <hr />
                  {item.subject}
                </div>
              ))
            : null}
          <hr />
          <p id="no-messages" />
        </div>
      </div>
    </div>
  );
};

export default inboxMessagesForm;
