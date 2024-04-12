import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header.jsx";
import TapButton from "./components/TapButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopik] = useState();
  function handleClick(selectedButton) {
    setSelectedTopik(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleClick("components")}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleClick("jsx")}>JSX</TapButton>
            <TapButton onSelect={() => handleClick("props")}>Props</TapButton>
            <TapButton onSelect={() => handleClick("state")}>State</TapButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
