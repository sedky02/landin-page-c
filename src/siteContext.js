import React,{useState,createContext} from 'react';
export const SiteContext = createContext();
export const SiteProvider =props =>{
    const [toggle,setToggle] = useState(false);
    function toggleClass(){
        setToggle(true);
        setTimeout(()=>{
            setToggle(false);
        },400)
    }
    return(
        <SiteContext.Provider>
            {props.children}
        </SiteContext.Provider>
    );
} 
