import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div>
      <h3>
        Audio player in React -{' '}
        <a href="https://www.cvclavoz.com" target="_blank">
          cvc la voz
        </a>
      </h3>
      <ReactPlayer
        url="http://ic.streann.com:8000/cvaudio"
        width="400px"
        height="50px"
        playing={true}
        controls={true}
      />
    </div>
  );
}

export default App;
