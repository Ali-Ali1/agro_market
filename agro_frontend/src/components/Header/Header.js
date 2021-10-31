import logo from '../../logo.png';
import { MdShoppingCart } from "react-icons/md";
import SearchBar from './SearchBar';
import Profile from './Profile';

const Header = () => {
    return (
        <header style={headerStyle}>
           <img src={logo} alt={logo} className="App-logo"></img>
           <span></span> 
           <SearchBar />
           <Profile />
           <MdShoppingCart style={{color: '#378C84', fontSize: 30}} />
        </header>
    )
}

const headerStyle = {
    display: 'grid',
    gridTemplateColumns: '10vw auto 300px 50px 50px',
    alignItems: 'center',
  }

export default Header
