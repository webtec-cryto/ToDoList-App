import React, { Component } from 'React'; 


class todoitems extends Component {
        constructor(props) {
            super(props);

            this.createTasks = this.createTasks.bind(this); 
        }


        }

    createTasks(item) 
        return <li onClick={() => this.delete(item.key)}
         key={item.key}>{item.text}</li>


    

    deleteItem(key) 
    console.log("key is: " + key);
        this.props.delete(key)

    

    
        render()  
            var todoEntries = this.props.entries; 
            var listitems = todoentries.map(this.createsTasks)
        
        

        return (     
        <ul className="theList">
        {listitems}
        </ul>
        );
    
