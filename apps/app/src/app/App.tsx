import { Loader } from '@dataroom/app-shared';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Loader />
    </BrowserRouter>
  );
};

export default App;
