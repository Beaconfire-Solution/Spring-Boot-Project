import './App.css';
import TimeSheetHome from './components/TimeSheetHome/TimeSheetHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/timesheet/edit' element={<TimeSheetHome/>}></Route>
    </Routes>
    // <div className="TimeSheetHome">
    //   <TimeSheetHome></TimeSheetHome>
    // </div>
  );
}

export default App;
