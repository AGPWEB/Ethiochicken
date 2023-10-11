import {Link} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Header(){
     const {setUserInfo, userInfo} = useContext(UserContext);
    //const [username, setUsername] = useState(null);
    useEffect(() => {
      fetch('http://process.env.REACT_APP_URL/profile', {
        credentials: 'include',
      }).then(response =>{
          response.json().then(userInfo => {
             setUserInfo(userInfo);
          });
      });
    }, []);

     function logout() {
      fetch('http://process.env.REACT_APP_URL/logout',{
        credentials: 'include',
        method: 'POST'
      });
      setUserInfo(null);
     }

     const username = userInfo?.username;

    return (
       <header>
           <Link to="/" className="logo">My Blog</Link>
           <nav>
            {username && (
                <>
                   <Link to="/create">Create new post</Link>
                   <a onClick={logout}>Logout</a>
                </>
            )}
            {!username && (
               <>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
               </>
             )}
             
           </nav>
       </header>
    );
}
