import React,{useState,useEffect} from 'react'





// creation de context des messages
const TodosContext = React.createContext({
    messages: [], fetchMsg: () => {}
  })


// creation de component de message 
export default function Message(){  

    const [messages, setMsg] = useState([])

    // get all message in list & get reponses ((all message )from FastAPI
    const fetchMsg = async () => {
      const response = await fetch("http://localhost:8000/message")
      const mess = await response.json()
      setMsg(mess.data)
    }    

    
// exécution effet
    useEffect(()=>{
        
        const timer = setTimeout(() => {
            
            fetchMsg();
          }, 1000);
          return () => clearTimeout(timer);
             
        
    },[])


    return (    
      
        
            <TodosContext.Provider value={{messages, fetchMsg}}>{
                messages.map((msg) => (<b>{msg.id}  : {msg.item} </b>  ))
            }</TodosContext.Provider>
    )
}
