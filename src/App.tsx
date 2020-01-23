import React from 'react';
import ProductRow from "./components/ProductRow";

const App: React.FC = () => {
  return (
    <div className="App" >
      <ProductRow />
      <ProductRow isNotify={true} />
    </div>
  );
}

export default App;
