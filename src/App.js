import Joke from "./Joke";

function App() {
  return (
    <>
      <Joke
        setup="I got my daughter a fridge for her birthday"
        Punchline="I can't wait to see her face light up when she opens it"
        vote={0}
        isPun={true}
      />
      <Joke
        setup="How did the hacker escape the police?"
        Punchline="He just ransomware!"
        vote={0}
        isPun={true}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        Punchline="Scurvy."
        vote={0}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        Punchline="Swarm."
        vote={0}
      />
    </>
  );
}

export default App;
