import './HomepageComponent.css';
import Login from '../Login/LoginComponent';
import { useSelector} from "react-redux";

import MainHeader from './MainHeader';

function Homepage() {
    //const authentication = useSelector((state) => state.auth.isAuthenticated);
    return (
        <div>
            <MainHeader></MainHeader>
    
            {/* {!authentication && <Login ></Login>}
            {authentication && <Dashboard></Dashboard>} */}
        </div>


    );

}

export default Homepage;