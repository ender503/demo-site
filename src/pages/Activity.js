import React from 'react';
import { Link } from 'react-router-dom';

import ActivityItem from '../components/ActivityItem';

const Activity = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map(number => <ActivityItem />);

  return (
    <div>
      <Link class="btn btn-outline-primary" to="/activity/new">
        Activity
      </Link>
      <hr className="mt-5" />
      <div className="row">{listItems}</div>
    </div>
  );
};

export default Activity;
