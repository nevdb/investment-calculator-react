import calculator from "./../assets/calculator.png";

export default function Header() {
  return (
    <header className="App-header">
      <img src={calculator} className="App-logo" alt="logo calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
