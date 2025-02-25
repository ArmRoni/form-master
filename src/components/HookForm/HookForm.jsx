import useInputState from "../../hooks/useinputState";

const HookForm = () => {

    // const[name, handleNameChange ] = useInputState('joney talukdar'); use if Array rturnd
    const emailState = useInputState('roni@gmail.com');
  

    const handleSubmit = (e) => {
        console.log("from data", emailState.value);
        e.preventDefault();

    }
    
    return (
        <div>
                <form  onSubmit={handleSubmit}>
                    {/* <input value={name} onChange={handleNameChange} type="text" name = "name"/> */}
                    <br />
                    <input {...emailState} type="email" name="email" />
                    <br />
                    <input type="password" name="password" /> 
                    <br />
                    <input type="submit" value ="Submit" />
                </form>
        </div>
    );
};

export default HookForm;