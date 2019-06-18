import { Component } from "react"; 
import  './todolist'; 
import './todolist.css'; 



class todoitems extends Component {
    constructor(props) {
          super(props);

          this.state (
            items
          )
          

          this.addItem = this.addItem.bind(this);
          this.deleteItem = this.deleteItem.bind(this); 

    }

}

       // addItems
            if (this._inputElement.value !== "") {
                var newItem = {
                    text: this._inpuutElement.value, 
                    key: Date.now()
                };
            }    
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });
            
            this.inputElement.value= ""; 

            console.log(this.state.items); 

            e.preventDefault(); 
        
          deleteItem(key)
          console.log("key in deleteItem: " + key); 
          console.log("key in deleteItems:" + this.state.items)
              var filteredItems = this.state.items.filter.function
              return (item.key != key)
           
        this.setState({
            items: filteredItems
        });        
    
        

   render() 
     return( 
          <div className="todolistMain">
          <div className="header">
          <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}
              placeholder="enter tasks">
          </input>
          <button type="submit">add</button>
          </form>
          </div>
          <todoitems entries="this.state.items"/>
             delete={this.deleteitems}
          </div>
     )

     



    

