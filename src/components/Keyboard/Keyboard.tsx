import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearPassword, denyAccess, grantAccess, setPassword, RootState} from '../../store';

const Keyboard: React.FC = () => {
  const dispatch = useDispatch();
  const {password, correctPassword, isAccessGranted, message} = useSelector(
    (state: RootState) => state.auth
  );

  const handleButtonClick = (value: string) => {
    if (value === '<') {
      dispatch(clearPassword());
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
    <div style={{backgroundColor: isAccessGranted ? 'green' : 'red', padding: '20px'}}>
      <div>{password.length > 0 && '*'.repeat(password.length)}</div>
      <div>{message}</div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '<', 'E'].map((value) => (
          <button key={value.toString()} onClick={() => handleButtonClick(value.toString())}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
