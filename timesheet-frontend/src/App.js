import './App.css';
import TimeSheetHome from './components/TimeSheetHome/TimeSheetHome';
import Profile from './components/Profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/timesheet/edit' element={<TimeSheetHome/>}></Route>
      <Route path='/profile/edit' element={<Profile/>}></Route>
    </Routes>
  );
}

export default App;
