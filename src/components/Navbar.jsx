//import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    //const {pathname} = useLocation();

    return (
        <nav>
            <div>
                <img src="../img/Bill_Gates.jpg" alt="Bill Gates" width="180px" height="180px" />
            </div>
            <Link className="link" to={'/#about'} >About</Link>
            <Link className="link" to={'/#experience'} >Experience</Link >
            <Link className="link" to={'/#skills'} >Skills</Link >
            <Link className="link" to={'/#interest'} >Interest</Link >
            <Link className="link" to={'/#awards'} >Awards</Link >
        </nav >
    )
}

export default Navbar