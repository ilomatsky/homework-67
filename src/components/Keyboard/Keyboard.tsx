import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {denyAccess, grantAccess, setPassword, RootState} from '../../store';

const Keyboard: React.FC = () => {
  const dispatch = useDispatch();
  const {password, correctPassword, isAccessGranted, message} = useSelector(
    (state: RootState) => state.auth
  );

  const handleButtonClick = (value: string) => {
    if (value === '<') {
      dispatch(setPassword(password.slice(0, -1)));
    } else if (value === 'E') {
      if (password === correctPassword) {
        dispatch(grantAccess());
      } else {
        dispatch(denyAccess());
      }
    } else if (password.length < 4) {
      dispatch(setPassword(password + value));
    }
  };

  return (
    <div style={{
      backgroundColor: isAccessGranted ? 'green' : 'red',
      padding: '30px 20px',
      width: '215px',
      borderRadius: '15px',
      border: '1px solid black',
    }}>
      <div style={{
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
        minHeight: '25px',
        borderRadius: '15px',
        margin: '0 auto',
        width: '190px',
        padding: '5px 0 2px'
      }}>{password.length > 0 && '*'.repeat(password.length)}</div>
      <div style={{
        minHeight: '25px',
      }}>{message}</div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '<', 0, 'E'].map((value) => (
          <button style={{margin: '10px'}} key={value.toString()} onClick={() => handleButtonClick(value.toString())}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
