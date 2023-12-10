import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicapario!</Heading>
      </Oscar>
      <Greet name="Ashish" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("button", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ backgroundColor: "red", border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
