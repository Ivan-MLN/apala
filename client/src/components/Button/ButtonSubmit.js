import React from 'react';

const Button = ({ text }) => {
  return (
    <div className="form-group">
      <button type="submit" className="btn form-control btn-primary rounded submit px-3">
        {text}
      </button>
    </div>
  );
};

export default Button;
