import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const Member = ({
  name, thumbnail, email, admin, makeAdmin, removeAdmin,
}) => (
  <div className="member">
    <h1>
      {name}
      {(admin) ? <FaShieldAlt /> : null}
    </h1>
    {
      (admin)
        ? <button type="button" onClick={() => removeAdmin(email)}>Remove Admin</button>
        : <button type="button" onClick={() => makeAdmin(email)}>Make Admin</button>
    }
    <img src={thumbnail} alt="profile pic" />
    <p><a href={`mailto:${email}`}>{email}</a></p>
  </div>
);

export default Member;
