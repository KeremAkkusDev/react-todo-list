import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import Filter from "./Filter";
import Form from "./Form";
import Auth from "./Auth";


function Container() {
    const { theme } = useTheme();
    const {isLoggedIn} = useAuth();
    
  return ( isLoggedIn 
    ?
    <> 
      <div className={`containerr ${theme}`}>
        <div className="vertical-center">
          <h1>Todo List App</h1>
          <Filter/>
        </div>
        <div className="form-buttons">
          <Form/>
          <Auth/>
        </div>
      </div>
    </>
    :
    <div className="center"><Auth/></div>
  )
}

export default Container