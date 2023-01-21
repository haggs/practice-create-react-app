import {
  Autocomplete,
  Tooltip,
} from 'practice-react-from-scratch-component-library';
import styles from './App.module.css';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [movie, setMovie] = useState('');

  return (
    <div className={styles.wrapper}>
      <Tooltip text="Pick a movie!">
        <Autocomplete
          value={movie}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovie(e.target.value)
          }
          options={[
            'The Godfather',
            'The Godfather Part 2',
            'Shrek',
            'Shrek 2',
          ]}
        />
      </Tooltip>
    </div>
  );
};

export default App;
