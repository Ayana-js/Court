import './App.css';
import Error from './Error';
import Preloader from './Preloader';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='content'>
        <h2> Канатбек Улуу Баскенович </h2>
        <p className='description'> Судебный орган </p>
        <p className='text'> Араванский районный ПССИ Ошской области </p>
        <p className='description'>Судебный исполнитель</p>
        <p className='text'>Элдаров Аман Ававававич</p>
        <p className='description'>Номер телефона</p>
        <p className='text'> +996 (550) 455-234</p>
        <p className='description'>Номер дела</p>
        <p className='text'>02-5/1029</p>
        <p className='description'>Адрес должника</p>
        <p className='text'>Село Араван, улица Чкалова, 3</p>
        <p className='description'>Сумма задолженности</p>
        <p className='text'>00.00 сом</p>
        <a className='button'> <span> </span> Поделиться </a>
        <Error />
        <Preloader />
      </div>
    </div>
  );
}

export default App;
