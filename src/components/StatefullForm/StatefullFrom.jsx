
import { useState } from "react";

const StatefullFrom = () => {
    const [name, setName] = useState("Rojoni kanto");
    const [email, setEamill] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");
    
    // Submit Handler function
    const handleSubmit = (e) => {
       e.preventDefault();
       if(password.length < 6) {
            setError('password must be 6 characters or lorger');
       } else {
          setError('');  
            console.log(name, email, password);
       }
     
    }



    //======== Name Change Handler function======//
    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value);
    }

    // Email Change Handler function 
    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEamill(e.target.value);
    }
    // Password Change Handler function
    const handlePassworrdChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
             {/* Form tag with onSubmit handler */}
            <form  onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange}  name = "name"/>
                <br />
                <input onChange= {handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePassworrdChange} type="password" name="password" /> 
                <br />
                <input type="submit" value ="Submit" /> 
                {
                    error && <p>{error}</p>
                }
             </form>


        </div>
    );
};

export default StatefullFrom;