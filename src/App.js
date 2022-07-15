import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from 'Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './components/users/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-2 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:login' element={<User />}></Route>
                <Route path='/notfound' element={<NotFound />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>  
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
