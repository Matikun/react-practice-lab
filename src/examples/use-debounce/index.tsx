import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const UseDebounceExample: React.FC = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Debounce Example</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default UseDebounceExample;