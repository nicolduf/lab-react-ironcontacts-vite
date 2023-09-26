import { useState } from "react";
import "./App.css";
import Contacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0,5));

const createRandomContact = () => {
  const remainingContacts = Contacts.slice(6);
  const randomIndex = Math.floor(
    Math.random() * remainingContacts.length - 1
  );
  const randomContact = remainingContacts[randomIndex];

  setContacts([...contacts,randomContact])
}  

const sortName = () => {

  sortName2(contacts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    else if (a.name > b.name) {
      return 1;
    }
    else {return 0};
  }))
  

}

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => createRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortName()}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return (
              <tr key = {oneContact.id}>
                <td>
                  <img
                  src = {oneContact.pictureUrl}
                  style = {{ height: "200px"}}
                  />
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
                <td>{oneContact.wonOscar && "🏆"}</td>
                <td>{oneContact.wonEmmy && "🏆"}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
