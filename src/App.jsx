import { GlobalStyle } from 'styles/globalStyle';
import Calendar from 'components/Calendar';
import ReminderModal from 'components/ReminderModal';

function App() {
  return (
    <>
      <GlobalStyle />
      <ReminderModal />
      <Calendar />
    </>
  );
}

export default App;
