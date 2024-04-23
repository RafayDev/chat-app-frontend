
import './App.css';
import { Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" Component={HomePage} />
      <Route path ="/chat" Component={ChatPage} />
      </Routes>
    </>
  );
}

export default App;
