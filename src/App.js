import Button from "./Button";

function App() {
  return (
    <div>
        <div>
        <Button primary>Button1</Button>
        </div>
        <div>
        <Button secondary>Button2</Button>
        </div>
        <div>
        <Button success>Button3</Button>
        </div>
        <div>
        <Button warning>Button4</Button>
        </div>
        <div>
        <Button danger rounded>Button5</Button>
        </div>
    </div>
    
  );
}

export default App;