import React from 'react';

import './style.css';

const ActivityIndicator = ({ isLoading }) => (
  (isLoading)
    ? (
      <div className="activity-indicator activity-indicator-view
       activity-indicator-background activity-indicator-animation"
      />
    )
    : null
);

export default ActivityIndicator;
