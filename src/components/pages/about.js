import React from 'react';
import '../About.css';
import '../../App.css';
import MemberProfile from '../MemberProfile';
import { Link } from 'react-router-dom';

const About = () => {
  const members = [
    {
      name: 'Angelina',
      nim: '00000071861',
      quote: 'Believe you can and you\'re halfway there.',
      photo: "images/Angel.jpg"
    },
    {
      name: 'Jason Jonathan',
      nim: '00000071890',
      quote: 'The only way to do great work is to love what you do.',
      photo: 'images/jason.png'
    },
    {
      name: 'Luis Gantar',
      nim: '00000073190',
      quote: 'Success is not the key to happiness. Happiness is the key to success.',
      photo: 'images/Luis1.jpeg'
    },
    {
      name: 'Wency Yvonney Wijaya',
      nim: '00000071833',
      quote: 'In the middle of difficulty lies opportunity.',
      photo: 'images/Wency.jpg'
    },
  ];

  return (
    <div id="about-root">
      <div className="about-us">
      <div id="artikel">
        <h1>About Us</h1>
        <p>
          Sebagai warga Indonesia sudah sepatutnya memiliki rasa cinta tanah air.
          Negara Indonesia memiliki kekayaan alam yang melimpah serta keberagaman
          suku, budaya, adat, bahasa, dan agama. Karena itu, kami sampaikan rasa
          bangga terhadap Negara Kesatuan Republik Indonesia dalam Website yang kami
          namai JAOA (Java Oasis).
        </p>
        <p>
          Java Oasis mencerminkan keindahan pulau Jawa seperti air di tengah padang
          pasir. Banyak keindahan alam yang belum terekpos di sosial media maupun
          media lainnya. Dengan didirikannya website ini, kami berharap dapat
          memperlihatkan keindahan pulau Jawa yang tersembunyi.
        </p>
      </div>
      <div className="member-profiles">
        {members.map((member, index) => (
          <MemberProfile key={index} member={member} />
        ))}
      </div>
      <footer className='aboutinformation'>
        <div className='footersss'>
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
  </div>
  );
};

export default About;
