import React from 'react';

const FollowNow = () => {
  return (
    <div className="w-75 m-auto">
      <h2 className="mb-4 text-center ">Follow Now</h2>
      <div className="d-flex gap-3 flex-wrap align-items-center justify-content-around p-5 bg-light">
        <div>
          <label>Select User</label>
          <select className="form-select">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <label>Following To</label>
          <select className="form-select">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FollowNow;
