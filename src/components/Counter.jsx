import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  console.log("counter component loaded");
}, []); // Empty dependency array

  const Increment = () => {
    if (count !== 20) setCount(count + 1);
  };

  const Decrement = () => {
    if (count !== 0) setCount(count - 1);
  };

  const Reset = () => setCount(0);

  // Inline CSS styles
  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      padding: "30px",
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    title: {
      marginBottom: "20px",
      color: "#333"
    },
    count: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "25px",
      color: "#007bff"
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px"
    },
    button: {
      flex: 1,
      padding: "10px 0",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      color: "#fff",
      backgroundColor: "#007bff",
      transition: "background-color 0.3s"
    },
    buttonDisabled: {
      backgroundColor: "#cccccc",
      cursor: "not-allowed"
    },
    resetButton: {
      backgroundColor: "#dc3545"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Counter</h1>
      <div style={styles.count}>{count}</div>
      <div style={styles.buttonGroup}>
        <button
          onClick={Increment}
          style={count === 20 ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          disabled={count === 20}
        >
          Increment
        </button>
        <button
          onClick={Decrement}
          style={count === 0 ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button
          onClick={Reset}
          style={{ ...styles.button, ...styles.resetButton }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;