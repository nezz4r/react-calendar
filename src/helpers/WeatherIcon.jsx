import {
  Sunny,
  Stormy,
  Snow,
  Shower,
  PartlySunny,
  Downpour,
  Cloudy,
} from '../components/Icons';

export default function getWeatherIcon({ name, ...props }) {
  let element;
  switch (name) {
    case 'Clouds':
      element = <Cloudy {...props} />;
      break;
    case 'Clear':
      element = <Sunny {...props} />;
      break;
    case 'Drizzle':
      element = <Shower {...props} />;
      break;
    case 'Rain':
      element = <Downpour {...props} />;
      break;
    case 'Thunderstorm':
      element = <Stormy {...props} />;
      break;
    case 'Snow':
      element = <Snow {...props} />;
      break;
    default:
      element = <PartlySunny {...props} />;
      break;
  }
  return element;
}
