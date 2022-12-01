import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
  const { loading, data, error } = useSelector(
    (store) => store.getUser
  );
  return (
    <div className="w-75 m-auto">
      <h2 className="mb-4 text-center ">User and thier followers</h2>
      <div className="p-5 bg-light ">
        {data.length !== 0 &&
          data.map((elem) => (
            <>
              {elem.attributes.followers.data.length !== 0 && (
                <>
                  <div
                    key={elem.id}
                    className="d-flex align-items-center justify-content-left gap-5 p-2 bg-light "
                  >
                    <div className="d-flex align-items-center gap-2 bg-white p-sm-3 p-md-4 rounded w-50 border border-success">
                      <div>
                        <img
                          className="rounded-circle"
                          src="https://dummyimage.com/60x60/b3acb3/bcbdcc"
                          alt=""
                        />
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
                    <div>
                      {elem.attributes.followers.data.map((el) => (
                        <div
                          key={el.id}
                          className="d-flex align-items-center gap-3 p-2 bg-light w-25 "
                        >
                          <div>
                            <img
                              className="rounded-circle"
                              src="https://dummyimage.com/60x60/b3acb3/bcbdcc"
                              alt=""
                            />
                          </div>
                          <div>
                            <h5>
                              {el.attributes.firstName +
                                ' ' +
                                el.attributes.lastName}
                            </h5>
                            <p>{el.attributes.email}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <br />
                  <hr />
                </>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Users;
