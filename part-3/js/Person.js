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
      <p className="msg">Learn some information about this person.</p>
      <div className="info">
        <p className="name">
          <b>Name: </b>
          {name}
        </p>
        <p className={age >= 18 ? "age" : "underage"}>
          <b>Age: </b>
          {name === "Wade Wilson" ? "Life Eternal" : age}
        </p>
      </div>
      <div className="other">
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
      </div>
      <h3>{ageQuote}</h3>
    </div>
  );
};
