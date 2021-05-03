import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Products from './components/Products';
import { palette } from './themes/navbar-theme'
const App = () => {

  const images = [
    {
      src: '/images/spiderman.jpg',
      description: 'spiderman selfie'
    },
    {
      src: '/images/rocket.jpg',
      description: 'foto de rocket de marvel'
    },
    {
      src: '/images/strange.jpg',
      description: 'doctor strange'
    }
  ];

  const products = [
    {
      src: '/images/infinity.jpg',
      description: 'spiderman selfie'
    },
    {
      src: '/images/mjolnir.jpg',
      description: 'foto de rocket de marvel'
    },
    {
      src: '/images/shield.jpg',
      description: 'doctor strange'
    },
    {
      src: '/images/teseracto.png',
      description: 'doctor strange'
    }
  ];

  return (
    <div style={{ backgroundColor: palette.primary.dark }}>
      <Header images={images}/>
      <AboutMe />
      <Products images={products} />
    </div>
  );
}

export default App;
