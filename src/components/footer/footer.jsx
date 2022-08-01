import { BsFacebook, BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs';
import 'components/footer/footer.css';

const Footer = ({ redesSociales }) => (
  <div className='flex flex-col p-3 tablet:flex-row desktop:bg-black w-full justify-around'>
    <a
      href='https://www.facebook.com/jhonier.jimenez.5/'
      className='flex justify-center items-center mb-2 desktop:text-white'
    >
      <BsFacebook size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[0]}</h2>
    </a>

    <a
      href='https://github.com/Jhonier-Jimenez'
      className='flex justify-center items-center mb-2 desktop:text-white'
    >
      <BsGithub size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[1]}</h2>
    </a>

    <a
      href='https://www.cloudskillsboost.google/public_profiles/d2f1f278-fe8a-4288-a3ed-4fc3c2fc2f80'
      className='flex justify-center items-center mb-2 desktop:text-white'
    >
      <BsGoogle size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[2]}</h2>
    </a>

    <a
      href='https://www.linkedin.com/in/jhonier-jimenez/'
      className='flex justify-center items-center mb-2 desktop:text-white'
    >
      <BsLinkedin size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[3]}</h2>
    </a>
  </div>
);

export default Footer;
