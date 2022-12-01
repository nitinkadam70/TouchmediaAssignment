import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/getUser/action';

const FollowNow = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.getUser);
  const [followToData, setFollowToData] = useState(data);

  const handleChange = (e) => {
    const newData = data.filter((elem) => {
      //data filteting
      if (e.target.value != elem.id) {
        return elem;
      }
    });
    setFollowToData(newData);
  };
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getUser());
    }
  }, [data.length]);
  return (
    <div className="w-75 m-auto">
      <h2 className="mb-4 text-center ">Follow Now</h2>
      <div className="d-flex gap-3 flex-wrap align-items-center justify-content-around p-5 bg-light">
        <div>
          <label>Select User</label>
          <select onChange={handleChange} className="form-select">
            <option>Select User</option>
            {data.map((elem) => (
              <option key={elem.id} value={elem.id}>
                {`${elem.attributes.firstName} ${elem.attributes.lastName}`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Following To</label>
          <select className="form-select">
            <option>Select user to whom to follow</option>
            {followToData.length !== 0 &&
              followToData.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {`${elem.attributes.firstName} ${elem.attributes.lastName}`}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FollowNow;
