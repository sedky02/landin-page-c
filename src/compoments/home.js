import React,{useState} from "react";
function Home(){
    const [toggle,setToggle] = useState(false)
    const checkClass = toggle? "clicked": "";
    function toggleClass(){
        setToggle(true);
        setTimeout(()=>{
            setToggle(false);
        },400)
    }
    return(
        <div className="home center-content" >
            <div className="home-text">
                <h1>Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <button style={{fontSize:"1rem",padding:"1rem 3rem " }} className={`getStarted ${checkClass}`} onClick={toggleClass}>get started</button>
            </div>
            <div className="home-img">
                
            </div>
        </div>
    );
}


export default Home ;