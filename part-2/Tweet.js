/** @format */

const Tweet = ({ userName, name, date, message }) => (
  <div className="tweet">
    <span className="userName">{userName}</span>
    <span className="name">{name}</span>
    <span className="date">{date}</span>
    <p>{message}</p>
  </div>
);
