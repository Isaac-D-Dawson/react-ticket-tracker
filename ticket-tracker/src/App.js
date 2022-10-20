import './App.scss';

// import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Header from "./components/Header/Header";

import Team from "./data/team";

function App() {
  // console.log(Team);
  const teamCards = Team.map((member) => <Card key={member["id"]} displayValue={0} cardName={member["name"]} cardJob={member["role"]} /> );
  const teamRoles = Team.reduce((result, member) => {
    if (! result.includes(member["role"])) {
      result.push(member["role"])
    }
    return result
  }, [])

  return (
    <main>
      <Header 
        dropdownOptions={teamRoles}
      />
      <div
        className="results__wrapper"
      >
        {teamCards}
      </div>
    </main>
  );
}

export default App;
