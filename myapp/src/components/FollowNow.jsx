import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/getUser/action';

const FollowNow = () => {
  const dispatch = useDispatch();
  const [userFollow, setUserFollow] = useState({});
  const [whomToFollow, setWhomToFollow] = useState({});
  const { data } = useSelector((store) => store.getUser);
  const [followToData, setFollowToData] = useState([]);

  const handleChange = (e) => {
    console.log('e', e);
    console.log(userFollow);
  };
  useEffect(() => {
    dispatch(getUser());
    console.log(data);
  }, []);
  return (
    <div className="w-75 m-auto">
      <h2 className="mb-4 text-center ">Follow Now</h2>
      <div className="d-flex gap-3 flex-wrap align-items-center justify-content-around p-5 bg-light">
        <div>
          <label>Select User</label>
          <select onChange={handleChange} className="form-select">
            <option>Select User</option>
            {data.map((elem) => (
              <option key={elem.id} value={elem}>
                {`${elem.attributes.firstName} ${elem.attributes.lastName}`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Following To</label>
          <select className="form-select">
            <option>Select user to whom to follow</option>
            {data.length !== 0 &&
              data.map((elem) => (
                <option key={elem.id} value={elem}>
                  {`${elem.attributes.firstName} ${elem.attributes.lastName}`}
                </option>
              ))}
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FollowNow;
