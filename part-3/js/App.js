/** @format */
const App = () => (
  <div>
    <Person
      name="James T. Kirk"
      age={36}
      hobbies={["Exploring", "Negotiation", "Chess", "Romancing Aliens"]}
    />
    <Person
      name="Anakin Skywalker"
      age={9}
      hobbies={[
        "Podracing",
        "Mechanical engineering",
        "Starship modal building",
        "Exploration",
        "Jedi training",
      ]}
    />
    <Person
      name="Dr Jekyle"
      age={50}
      hobbies={[
        "Science",
        "Alchemy",
        "Psychology",
        "Reading",
        "Oddities collecting",
        '"Hyding" out',
      ]}
    />
    <Person
      name="King Kong"
      age={16}
      hobbies={[
        "Eating",
        "Fighting",
        "Kiddnaping (Unintentionally)",
        "Climbing",
      ]}
    />
    <Person
      name="Wade Wilson"
      age={28}
      hobbies={[
        "Merc work",
        "Pranking",
        "Talking smack",
        "Pew pew",
        "Chimmichangas",
        "Getting Shot(I do it alot)",
        "Wait what were we doing....",
      ]}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
