import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

const Route = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Route;