import React from 'react';
import Pages from './pages'
import ViewportRestrict from './components/viewport/index'

function App() {
  return (
    <div>
      <ViewportRestrict type="landscape" display={true}
        text="Please turn your smartphone to a portrait position for better visuals"
      />
      <div className="App">
        <Pages />
      </div>
    </div>
  );
}

export default App;
