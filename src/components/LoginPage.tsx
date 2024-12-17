import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationLoginSchema } from '../utils/formValidation';
import { LoginFormValues } from '../types/types';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const handleLogin = (values: LoginFormValues): void => {
    // Retrieve the 'user' object from localStorage and parse it to an object
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    // Check if the stored user's email matches the entered email
    if (storedUser.email === values.email && storedUser.password === values.password) {
      navigate('/account');
    } else {
      setError('Invalid username or email');
    }
  };

  const navigateUser = () => {
    navigate('/register')
  };

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">

        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0 z-10">
              <h1 className="my-5 display-5 fw-bold ls-tight offer">
                Login <br />
                <span className='spans'>Account Detail App</span>
              </h1>
              <p className="mb-4 opacity-70 main-data">
                Welcome the Account Detail Application. Enjoy Your Day.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">


                  <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationLoginSchema}
                    onSubmit={handleLogin}
                  >
                    {() => (
                      <Form>


                        <div className="row">
                          <div data-mdb-input-init className="form-outline">
                            <label className="form-label">Email</label>
                            <Field type="email" id="form3Example1" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                          </div>


                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <label className="form-label mt-2">Password</label>
                          <Field type="password" id="form3Example4" name="password" className="form-control" />
                          <ErrorMessage name="password" component="div" className="text-danger" />

                        </div>

                        {error && <div className="text-danger mb-3">{error}</div>}
                        <div className="d-grid gap-2">
                          <button type="submit" className="btn btn-primary btn-block"> Sign up</button>
                        </div>

                        <div className="text-right mt-4">
                          <p>
                          Don't have an account?{' '}
                            <span onClick={navigateUser} className="text-success" style={{ cursor: 'pointer' }}>
                              Register
                            </span>
                          </p>
                        </div>
                      </Form>
                    )}
                  </Formik>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
