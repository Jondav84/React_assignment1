/** @format */

const Person = ({ name, age, hobbies }) => {
  let ageQuote =
    age < 18
      ? "You must be 18 to vote."
      : name === "Wade Wilson"
      ? "Please Leave!"
      : "Please go vote!";

  return (
    <div className="person">
      <p>Learn some information about this person.</p>
      <p className="name">
        <b>Name: </b>
        {name}
      </p>
      <p className={age >= 18 ? "age" : "underage"}>
        <b>Age: </b>
        {name === "Wade Wilson" ? "Life Eternal" : age}
      </p>
      <p className="hobbies">
        <b>Hobbies:</b>
      </p>
      {name === "Wade Wilson" ? (
        <ol>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ol>
      ) : (
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      )}
      <h3>{ageQuote}</h3>
    </div>
  );
};
