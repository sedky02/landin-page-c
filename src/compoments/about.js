import React,{useState} from 'react';
function About (){
    const cardList = [
        {
            img:"./images/avatar-anisha.png",
            name:"Anisha Li",
            p: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" 
        },
        {
            img:"./images/avatar-ali.png",
            name:"Ali Bravo",
            p:"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        },
        {
            img:"./images/avatar-richard.png",
            name:"Richard Watts",
            p:"“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
        }
    ]
    const Card=({image,name,p})=>{
        return(
            <div className="card">
                <div className="img" ></div>
                <h2>{name}</h2>
                <p>{p}</p>
            </div>
        );
    }
    const [toggle,setToggle] = useState(false)
    const checkClass = toggle? "clicked": "";
    function toggleClass(){
        setToggle(true);
        setTimeout(()=>{
            setToggle(false);
        },400)
    }
    return(
        <div className="about center-content">
            <h1>What they've said</h1>
            <div className="card-box">
                {cardList.map(card=>(
                    <Card image={card.img}
                    name={card.name}
                    p={card.p}
                    />
                ))}
            </div>
            <button style={{fontSize:"1rem",padding:"1rem 3rem " }} className={`getStarted ${checkClass}`} onClick={toggleClass}>get started</button>
        </div>
    );
}

export default About;