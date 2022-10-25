import React from "react";

function Button () {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const procentNo = Math.trunc(count2 / count * 100);
  const procentYes = Math.trunc(100 - procentNo);


  function resetCounter() {
    setCount(0);
    setCount2(0);
  }


  return (
    <div>
      <p>Du synes bildet av Norge var fint: {count}</p>
      <p>Du synes bildet av Norge ikke var fint: {count2}</p>
      <button onClick={() => setCount(count + 1)}>
        Ja
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Nei
      </button>
      <button onClick={resetCounter}>
        Reset
      </button>
        <p>Prosentvis ja: {procentYes}%</p>
        <p>Prosentvis nei: {procentNo}%</p>
    </div>
  );
}

export default Button;