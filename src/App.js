import "./styles.css";
import React from "react";
//display users

const users = [
  { name: "John Doe", id: 1 },
  { name: "Femi Emmanuel", id: 2 },
  { name: "Iyanuoluwa Ife", id: 3 }
];
const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

function App() {
  return (
    <div className="App">
      <h3>Users</h3>
      <ul> {userItems}</ul>
    </div>
  );
}
//toggle APButton App
function Toggle() {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Hide Element below</button>
      {show && <div>Toggle chalenge</div>}
    </div>
  );
}

export default App;
export { Toggle };
