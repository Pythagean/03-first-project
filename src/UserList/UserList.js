import React from 'react';

import UserItem from '../UserItem/UserItem';
import './UserList.css';

function UserList (props) {
  return (
    <ul className="user-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          onDelete={props.onDeleteItem}
        >
          {user.username} ({user.age})
        </UserItem>
      ))}
    </ul>
  );
};

export default UserList;
