import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header.jsx";
import TapButton from "./components/TapButton.jsx";
import { CORE_CONCEPTS } from "./data";

function App() {
  let tapContent = "Please click!";
  function handleClick(selectedButton) {
    tapContent = selectedButton;
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
          {tapContent}
        </section>
      </main>
    </div>
  );
}

export default App;
