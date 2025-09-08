import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  function predictGender() {
    // மிக எளிய logic: பெயர் "a" ல முடிந்தா → Female, இல்லையெனில் Male 😅
    if (name.toLowerCase().endsWith("a")) {
      setGender("👩 Female (guess)");
    } else {
      setGender("👨 Male (guess)");
    }
  }

  return (
    <div>
      <h2>Home Page</h2>
      <p>Enter your name to predict gender:</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a name"
      />
      <button onClick={predictGender}>Predict</button>
      <p>{gender}</p>
    </div>
  );
}

export default Home;
