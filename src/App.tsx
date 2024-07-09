import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import EditMeal from './containers/EditMeal/EditMeal';
import AddMeal from './containers/AddMeal/AddMeal';

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/meals/add-meal" element={<AddMeal/>} />
          <Route path="/meals/edit-meal/:id" element={<EditMeal/>} />
          <Route path="*" element={<h3 className="mt-3 mb-5 text-center">Page not found</h3>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
