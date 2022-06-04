import { Link,Outlet } from "react-router-dom";
import './Layout.css'


function Layout(){

    return(
        <>  
        <header className="header">
            <Link to='/'>Home</Link>
            <Link to='/category'>Category</Link>
        </header>
        <div className="outlet">
            <Outlet />

        </div>
        </>
    )
}

export default Layout