import './App.scss';

// import Button from "./components/button/Button";
import Card from "./components/card/Card";
import team from './data/team';

import Team from "./data/team";

function App() {
  // console.log(Team);
  const teamCards = Team.map((member) => <Card key ={member["id"]} displayValue={0} cardName={member["name"]} cardJob={member["role"]} /> );
  //I'd ideally prefer to have an index of "firstname.Lastname", but we'll work on that as we go.
  return (
    <main  className='main__wrapper'>
      {teamCards}
    </main>
  );
}

export default App;
