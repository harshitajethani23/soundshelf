
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./views/Home.jsx";
import SongDetails from "./views/SongDetails.jsx";
import NewSong from "./views/NewSong.jsx"
import EditSong from "./views/EditSong.jsx"
import { BrowserRouter,Routes,Route } from 'react-router';


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/song/:id" element={<SongDetails />} />
  <Route path="/new" element={<NewSong />} />
  <Route path="/song/edit/:id" element={<EditSong />} />
  </Routes>
  </BrowserRouter>
   );