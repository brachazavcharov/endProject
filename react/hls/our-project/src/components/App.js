import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Icon, Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Button.Group>
        <Button>Cancel</Button>
        <Button.Or />
        <Button positive>Save</Button>
      </Button.Group>
    </div>
  );
}

export default App;
