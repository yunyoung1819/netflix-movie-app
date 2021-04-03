import React from 'react';

// 구조 분해 할당 (destructuring-assignment)
function Food({ fav }) {
    return <h1> I like { fav } </h1>
}

const foodILike = [];   // foodiLike 변수에 빈 배열을 저장

function App() {
  return (
      <div>
        <h1>Hello!! 클론코딩 </h1>
          <Food fav="kimchi" />
      </div>
  );
}

export default App;