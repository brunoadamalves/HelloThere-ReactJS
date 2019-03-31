import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default ApprovalCard;