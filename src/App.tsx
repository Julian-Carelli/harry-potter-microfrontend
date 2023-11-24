import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import CharacterGallery from "./components/characterGallery/characterGallery";
import CharacterDetails from "./components/characterDetails/characterDetails"

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/characters" element={<CharacterGallery />} />
          <Route path="/characters/:characterId" element={<CharacterDetails />} />
        </Routes>
    </Router>
  );
}