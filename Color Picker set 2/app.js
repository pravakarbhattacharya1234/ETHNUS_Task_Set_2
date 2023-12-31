import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
