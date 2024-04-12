import { useState } from "react";
import TapButton from "./TapButton";
import { EXAMPLES } from "../data";

function Examples() {
  const [selectedTopic, setSelectedTopik] = useState();
  function handleClick(selectedButton) {
    setSelectedTopik(selectedButton);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TapButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleClick("components")}
        >
          Components
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          JSX
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleClick("props")}
        >
          Props
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleClick("state")}
        >
          State
        </TapButton>
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
  );
}
export default Examples;
