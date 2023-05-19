import axios from "axios";
import { useState } from "react";

const LoginForm = () =>{
    const [ username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const[error,setError] = useState('');

    const handleSubmit = async (e) => {
       e.preventDefault();
       
       const authObj = {'project-ID' : "6f1fe1e5-e4dd-425d-b5d8-8a8c67bfa55c", 'User-Name': username, 'User-Secret': password};
    
    try{
          await axios.get('https://api.chatengine.io/chats', {headers: authObj});
    
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);

      window.location.reload();
        }catch(error){
           setError('Oops, incorrect credentials.');
    }
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value) }
                        className= "input"
                        placeholder="UserName"
                        required
                        />
                        <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                        className= "input"
                        placeholder="PassWord"
                        required
                        />
                        <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                        </div>
                        <h2 className="error">
                            {error}
                        </h2>
                    </form>
                </h1>
            </div>
        </div>
    )
}

export default LoginForm;