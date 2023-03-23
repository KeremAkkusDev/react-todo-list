import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Auth() {
    const {isLoggedIn, setIsLoggedIn}=useAuth();
    const [loginInput, setLoginInput] = useState("");
    
    const users={
      user:"Kerem",
      pass:"12345"
    }

    const authLogin = (e) =>{
      if(!loginInput.user || !loginInput.pass){
        alert("Lütfen kullanıcı adı ve şifreyi doldurun")
      }else{
        (loginInput.user === users.user && loginInput.pass === users.pass) ? (setIsLoggedIn(true)) : (alert("Yanlış Girdiniz"))
      }
      e.preventDefault();
    }

  return ( isLoggedIn
    ?
    <>
        <button className="ui inverted red button" onClick={()=>{(setIsLoggedIn(false))}}>Çıkış Yap</button>
    </>
    : 
    <div class="page-login">
      <div class="ui centered grid container">
        <div class="nine wide column">
            <div class="ui icon warning message">
              <i class="lock icon"></i>
              <div class="content">
                <div class="header">
                  Login failed!
                </div>
                <p>You might have misspelled your username or password!</p>
              </div>
            </div>
            <div className="ui fluid card">
              <div className="content">
              <form className="ui form">
                <div className="field">
                  <label>User</label>
                  <input type="text" name="user" placeholder="User" onChange={(e)=>{setLoginInput({...loginInput,user:e.target.value})}}/>
                </div>
                <div className="field">
                  <label>Password</label>
                  <input type="password" name="pass" placeholder="Password" onChange={(e)=>{setLoginInput({...loginInput,pass:e.target.value})}}/>
                </div>
                <button className="ui primary labeled icon button" type="submit" 
                onClick={authLogin}>
                  <i className="unlock alternate icon"></i>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth