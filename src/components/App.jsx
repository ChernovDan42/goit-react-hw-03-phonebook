import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { ContactList } from "./ContactList/ContactList"







export class App extends Component {


  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }


  onFilterChange = e => {
   this.setState({
      filter: e.currentTarget.value
    })
  }   
  

  searchName(obj) {
    
return this.state.contacts.find(el=> el.name===obj.name)

  }
  

  onSubmit = obj => {

    if (this.searchName(obj)) {
      return alert(`${obj.name} is already in contacts`)
    }

    this.setState(prevState=>({
      contacts: [...prevState.contacts, obj ]
    
    }))
  }

  
  onClick = (id) => {

    const { contacts } = this.state
    const updateState = contacts.filter(el => el.id !== id);
    
    this.setState({
     contacts: updateState 
    });

  }

  filteredContacts = () => {
    const { filter, contacts } = this.state
  const normalized=filter.toLowerCase()

  
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized))
    

  }

 
  render() {

    const visibleContacts = this.filteredContacts();


    return (
      <div style={{
        marginLeft: 50,
      }}>
        <h1>Phonebook</h1>
        
      <ContactForm onSubmit={this.onSubmit}/>


        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={ this.onFilterChange} />
       
        < ContactList 
          contacts={visibleContacts}
          onClick={this.onClick}
          />
        

    </div>

  
)
  
  }
};
