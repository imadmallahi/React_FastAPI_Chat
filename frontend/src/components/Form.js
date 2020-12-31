import React, { Component } from 'react'

 class Form extends Component {
     
    constructor(props){
        super(props)        
        this.state={
            username:'',
            message :''
        }    
    }

    handeUsernameChange =event =>{
         this.setState({
             username :event.target.value
         })
    }
    handeCommentChange = event =>{
        this.setState({
            message : event.target.value
        })
    }

    // event of button 
    handSubmit = event =>{
        // alert pour la verification 
        alert( ` Bonjour  ${this.state.username} ,Êtes-vous sûr d'envoyer votre message " ${this.state.message}" !!`)

        // preparer le message sur dict
        const newMsg = {
            "id": `${this.state.username}`,
            "item": `${this.state.message}`
          }
          //envoyer  msg Backend
          fetch("http://localhost:8000/message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMsg)
        })
        
        

    }

    
    render() {
        return (
            setTimeout(function() {
                window.location.reload()            
            },20000),
            <form onSubmit={this.handSubmit}>
                <div>                 
                    <div>
                        <label>User:   </label>
                    </div>
                    <div>
                        <input type='text' value={this.state.username} onChange={this.handeUsernameChange}></input>
                    </div>
                    <div>
                        <label>Message :</label>
                    </div>
                    <div>
                        <textarea type='text'  name={this.state.message}  onChange={this.handeCommentChange}></textarea>
                    </div>              
                    
                    <button type='submit' >Envoyer</button>
                </div>
            </form>                  
        )
    }
}

export default Form