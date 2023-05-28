import React, { useState, useEffect } from 'react';
import '../SignUp.css';
import * as fs from 'fs';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const SignUp = ({ handleSignUp }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const history = useHistory();
  const [LoggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(()=>{
    const data = localStorage.getItem('userData');
    if(data == undefined){
      setLoggedIn(false)
    }else{
      setLoggedIn(true)
    }
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);

    localStorage.setItem('userData', jsonData);

    const data = localStorage.getItem('userData')

    if(data == undefined){
      setLoggedIn(false)
    }else{
      setLoggedIn(true)
    }
    setFormData({
      nama: '',
      email: '',
      password: '',
    })
    // handleSignUp(email, password);
    // setEmail('');
    // setPassword('');
  };

  return (
    <div className="details">
      {LoggedIn && (
        history.push("/services")
      )}
      <h2 className="sign">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          id='nama'
          type="text"
          placeholder="Nama"
          name='nama'
          value={formData.nama}
          onChange={handleInputChange}
          required
        />
        <input
          id='email'
          type="email"
          placeholder="Email"
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          id='password'
          type="password"
          placeholder="Password"
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <footer className='signupinformation'>
        <div className='footerss'>
          <small className='website-rights'>Jaoa © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
