import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
  const { loading, data, error } = useSelector(
    (store) => store.getUser
  );
  console.log('follow', data);
  return (
    <div className="w-75 m-auto">
      <h2 className="mb-4 text-center ">User and thier followers</h2>
      <div className="p-5 bg-light">
        {data.length !== 0 &&
          data.map((elem) => (
            <div key={elem.id}>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h5>
                  {elem.attributes.firstName +
                    ' ' +
                    elem.attributes.lastName}
                </h5>
                <p>{elem.attributes.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;
