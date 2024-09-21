// src/components/Form/Form.js
import React from 'react';
import './Form.css'; // Tambahkan file CSS khusus untuk form jika diperlukan

const Form = () => {
  return (
    <form className="login-form">
      <div className="form-group">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-user"></span>
        </div>
        <input type="text" className="form-control" placeholder="Username" required />
      </div>
      <div className="form-group">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-lock"></span>
        </div>
        <input type="password" className="form-control" placeholder="Password" required />
      </div>
    </form>
  );
};

export default Form;
