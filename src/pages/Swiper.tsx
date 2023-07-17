import { SwiperJs } from '@/components';
import '../App.css';

const Swiper = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Carousel using SwiperJs</h1>
      </header>
      <main>
        <SwiperJs />
      </main>
    </div>
  );
};

export default Swiper;
