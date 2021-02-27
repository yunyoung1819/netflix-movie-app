import React from 'react';

function Food(props) {
    console.log(props);
    return <h1> I like Potato2 </h1>
}

function App() {
  return (
      <div>
        <h1>Hello!! 클론코딩 </h1>
          <Food fav="kimchi" something={true} papapapa={['hello', 1, 2, 3, 4, true]}/>
      </div>
  );
}

export default App;