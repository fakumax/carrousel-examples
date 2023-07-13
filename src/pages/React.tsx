import { CarrouselSimple } from '@/components';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Carousel using React & CSS</h1>
      </header>
      <main>
        <CarrouselSimple />
      </main>
    </div>
  );
};

export default Home;
