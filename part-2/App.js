/** @format */
const App = () => (
  <div>
    <Tweet
      name="Micha"
      userName="MichaMan"
      date={new Date().toDateString()}
      message="I am one Mighty Mighty MICHAMAN!"
    />
    <Tweet
      name="Lara Croft"
      userName="LC-licous"
      date={new Date().toDateString()}
      message="#Lets get down there!"
    />
    <Tweet
      name="SHD network"
      userName="Issac"
      date={new Date().toDateString()}
      message="My sensors have detected hostiles near by."
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
