// src/components/RegisterPage.tsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from '../utils/formValidation';
import { saveUserToLocalStorage } from '../services/authService';
import { RegisterFormValues } from '../types/types';
import { useNavigate } from 'react-router-dom';
import image from '../assets/register.jpg';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  //handle the ragister detail.
  const handleRegister = (values: RegisterFormValues): void => {
    saveUserToLocalStorage(values);
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {() => (
            <Form>
              <div className="container py-4">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right bg-body-tertiary names">
                      <div className="card-body p-5 shadow-5 text-center">
                        <h2 className="fw-bold mb-5">Register now</h2>
               
                          <div className="row">
                              <div data-mdb-input-init className="form-outline mb-2">
                                <label className="form-label">User Name</label>
                                <Field type="text" id="username" name="username" className="form-control" />
                                <ErrorMessage name="username" component="div" className="text-danger" />
                            </div>
                          </div>

                          <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label">Email address</label>
                            <Field type="email" id="email" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                          </div>

                          <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label">Password</label>
                            <Field type="password" id="password" name="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                          </div>

                          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                            Register
                          </button>          
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <img src={image} className="w-100 rounded-4 shadow-4"
                      alt="register-image" />
                  </div>
                </div>
              </div>
            </Form>

          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
