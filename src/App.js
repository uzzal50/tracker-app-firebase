import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className='App'>
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to='/login' />}
            ></Route>
            <Route
              path='/signup'
              element={user ? <Navigate to='/' /> : <SignUp />}
            ></Route>
            <Route
              path='/login'
              element={user ? <Navigate to='/' /> : <Login />}
            ></Route>
          </Routes>
        </Router>
      )}
    </div>
  )
}

export default App
