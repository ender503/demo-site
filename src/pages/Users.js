import React from 'react';

import UserItem from '../components/UserItem';

const Users = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map(number => <UserItem />);

  return (
    <div>
      <hr className="mt-5" />

      <div className="row">{listItems}</div>
    </div>
  );
};

export default Users;
