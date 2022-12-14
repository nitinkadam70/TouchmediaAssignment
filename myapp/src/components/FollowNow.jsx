import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/getUser/action';
const API_url = process.env.REACT_APP_REGISTER_API_URL;
const token = process.env.REACT_APP_JWT_TOKEN;

const FollowNow = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.getUser);
  const [followToData, setFollowToData] = useState(data);
  const [followers, setFollowers] = useState(null);
  const [whomToFollow, setWhomToFollow] = useState(null);

  const handleChange = (e) => {
    const newData = data.filter((elem) => {
      //data filteting
      if (e.target.value != elem.id) {
        return elem;
      }
    });
    setFollowToData(newData);
    setFollowers(e.target.value);
  };

  const handleFollow = () => {
    if (followers != null) {
      const followArray = data.filter((elem) => {
        if (elem.id == followers) {
          return elem;
        }
      });
      const payloadTwo = {
        data: [...followArray],
      };

      const payload = {
        data: {
          followers: { ...payloadTwo },
        },
      };
      console.log(payload);
      axios({
        url: `${API_url}/${whomToFollow}`,
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          AUTHORIZATION: `Bearer ${token}`,
        },
      })
        .then((res) => {
          dispatch(getUser());
          alert('success');
        })
        .catch((err) => {
          console.log(err);
          alert(
            err.response.data.error.name +
              ' : ' +
              err.response.data.error.message
          );
        });
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getUser());
    }
  }, [data.length]);

  return (
    <div className="w-75 m-auto">
      <h2 className="mb-4 text-center ">Follow Now</h2>

      <div className=" d-flex gap-3 align-self-center flex-wrap align-items-center justify-content-around p-5 bg-light">
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
          <select
            onChange={(e) => setWhomToFollow(e.target.value)}
            className="form-select"
          >
            <option>Select user to whom to follow</option>
            {followToData.length != 0 &&
              followToData.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {`${elem.attributes.firstName} ${elem.attributes.lastName}`}
                </option>
              ))}
          </select>
        </div>
      </div>
      <center>
        <button
          onClick={() => handleFollow()}
          className="btn btn-danger w-25"
        >
          Follow
        </button>
      </center>
    </div>
  );
};

export default FollowNow;
