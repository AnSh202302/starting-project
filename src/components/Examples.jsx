import { useState } from "react";
import TapButton from "./TapButton";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

function Examples() {
  const [selectedTopic, setSelectedTopik] = useState();
  function handleClick(selectedButton) {
    setSelectedTopik(selectedButton);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tabs
        buttons={
          <>
            <TapButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TapButton>
          </>
        }
      >
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
      </Tabs>
    </section>
  );
}
export default Examples;
