import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import UsersListPage from './pages/usersListPage/UserListPage';
import Menu from './components/Menu';



const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<UserRegisterPage />} />
        <Route path={'/users'} element={<UsersListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
