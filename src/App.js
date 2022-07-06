import './App.css';
import FriendsMenu from './components/FriendsMenu';
import HousesSection from './components/HousesSection';
import NavMenu from './components/NavMenu';


function App() {
  return (
    <div className="App">
      <NavMenu />
      <FriendsMenu />
      <HousesSection />
    </div>
  );
}

export default App;
