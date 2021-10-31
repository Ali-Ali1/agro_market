import logo from '../logo.png';
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
    return (
        <header>
           <img src={logo} alt={logo} className="App-logo"></img> 
           <label>Search</label>
           <label>Profile</label>
           <MdShoppingCart style={{ height: '10vmin' }} />
        </header>
    )
}

export default Header
