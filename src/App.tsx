import React, { useState } from "react";
import "./App.css";
import { InputContainer } from "./components/InputContainer";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { usePersistedList } from "./hooks";

function App() {
  const { list, addListItem, editListItem, removeListItem } = usePersistedList(
    "test-interactive-list"
  );
  const [readOnly, setReadOnly] = useState(false);

  return (
    <div className="App">
      <Header
        title="Interactive list"
        readOnly={readOnly}
        setReadOnly={setReadOnly}
      />

      {!readOnly && <InputContainer onSubmit={addListItem} />}

      <List
        list={list}
        readOnly={readOnly}
        editListItem={editListItem}
        removeListItem={removeListItem}
      />
    </div>
  );
}

export default App;
