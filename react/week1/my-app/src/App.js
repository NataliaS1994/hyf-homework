import React from 'react';
import './App.css';

function Header () {
   return (
    <header className="App-header">
      <h1>Todo List</h1>
    </header>
   );
}

function List (props) {

  //using idx key
  const items = props.items.map((item, idx) => {
    return <li key={idx}>{item.description}: {item.deadline}</li>
  });

  return (<ul>{items}</ul>);
}

function ListSection (props) {
  return (
      <section className="List">
          <List items={props.items}/>
      </section>
  );
}
function App() {
 
  const ListItems = [
    {description: "Get out of bed" , deadline: "Wed Sep 13 2017"},
    {description: "Brush teeth" , deadline: "Thu Sep 14 2017"},
    {description: "Eat breakfast" , deadline: "Fri Sep 15 2017"},
  ];

  // using hooks 
  const [state, setState] = React.useState(null);
  if (state === null) setTimeout(() => setState(ListItems), 2000);

  return (
    // rendering list with three items
    <div className="App">
      <Header />
      {state ? <ListSection items={state}/> : <p>Loading todo list...</p>}
    </div>
  );
}

export default App;