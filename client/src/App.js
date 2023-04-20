import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import BuyMedicine from './pages/BuyMedicine';
import BookAppointment from './pages/BookAppointment';
import NearHealthcare from './pages/NearHealthcare';
import Register from './pages/Register';
import { useSelector } from 'react-redux'
import LoadingSection from './components/LoadingSection';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import Doctors from './pages/Admin/Doctors';
import Users from './pages/Admin/Users';
import Profile from './pages/Doctor/Profile';
import BookingPage from './pages/BookingPage';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import HealthCareFAQ from './pages/HealthCareFAQ';

function App() {

  const { loading } = useSelector(state => state.alerts);

  return (
    <>
      {loading ? <LoadingSection /> :
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/services' element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq-section' element={<ProtectedRoute><HealthCareFAQ /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route path='/buymedicine' element={<ProtectedRoute><BuyMedicine /></ProtectedRoute>} />
          <Route path='/bookappointment' element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
          <Route path='/nearhealthcare' element={<ProtectedRoute><NearHealthcare /></ProtectedRoute>} />
          <Route path='/apply-doctor' element={<ProtectedRoute><ApplyDoctor /></ProtectedRoute>} />
          <Route path='/notification' element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
          <Route path='/admin/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path='/admin/doctors' element={<ProtectedRoute><Doctors /></ProtectedRoute>} />
          <Route path='/doctor/profile/:id' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/doctor/book-appointment/:doctorId' element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
          <Route path='/doctor/doctor-appointments' element={<ProtectedRoute><DoctorAppointments /></ProtectedRoute>} />
          {/* <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Errorpage />} /> */}
        </Routes>
      }
    </>
  );
}

export default App;
