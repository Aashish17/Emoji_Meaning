import React from "react";
import Emoji from "../emojipedia";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(function (val) {
          return (
            <Entry
              name={val.name}
              emoji={val.emoji}
              key={val.key}
              meaning={val.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
