import "./styles.css";
import Tabs from "./Tabs";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Tabs
        tabs={[
          { label: "Tab1", content: "this is 1" },
          { label: "Tab2", content: "this is 2" },
          { label: "Tab3", content: "this is 3" },
        ]}
      />
    </div>
  );
}
