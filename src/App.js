import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Tab from './components/Tab'

function App() {

  const [tabs, setTabs] = useState([
    {
      label: "Tab 1",
      content: "Tab 1 content is showing here"
    },

    {
      label: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    {
    label: "Tab 3",
      content: "Tab 3 content is showing here"
    }
  ]);

  const [index, setIndex] = useState(0);

  return (
    <div className="App bg-light">
        <div>
          <div>
            { tabs.map((item,i) =>
              <Tab key={i} tab={item} index={i} setIndex={setIndex}></Tab>
            )}
            <div>
              <p>{tabs[index].content}</p>
            </div>
          </div>
        </div>
    </div>

  );
}

export default App;
