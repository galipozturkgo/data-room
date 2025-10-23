import { Loader } from '@dataroom/app-shared';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: false,
        v7_startTransition: false,
      }}
    >
      <Loader />
    </BrowserRouter>
  );
};

export default App;
