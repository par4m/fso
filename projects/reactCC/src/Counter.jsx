import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={increment}>Count {count}</button>
    </>
  );
}

export default Counter;
