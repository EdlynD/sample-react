import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import formHelper from "../Web Tools/FormHelper";
import "./ProfileHelper.css";

const ProfileHelper = () => {
  const { user, setUser } = useContext(LoginContext);
  const [userChanged, setUserChanged] = useState(user);

  const handleOnChange = (e, object) => {
    if (!object) {
      setUserChanged({ ...userChanged, [e.target.name]: e.target.value });
    } else {
      setUserChanged({
        ...userChanged,
        [object]: { ...userChanged[object], [e.target.name]: e.target.value },
      });
    }
  };
  const onChangeCheckHandler = (object) => {
    setUserChanged({
      ...userChanged,
      [object]: {
        ...userChanged[object],
        isPresent: !userChanged[object].isPresent,
      },
    });
  };

  return (
    <div className="profileH-container">
      <form className="formProfileH-container">
        {formHelper.map((item) => (
          <>
            <label>{item.name}</label>
            <input
              name={item.varname}
              className={item.class}
              onChange={(e) =>
                item.type === "checkbox"
                  ? onChangeCheckHandler(item.object)
                  : handleOnChange(e, item.object)
              }
              placeholder={
                item?.object
                  ? user[item.object][item.varname]
                  : user[item.varname]
              }
              type={item.type}
              checked={userChanged.address.isPresent}
            />
          </>
        ))}
        <input type="submit" className="input-text" />
      </form>
    </div>
  );
};

export default ProfileHelper;
