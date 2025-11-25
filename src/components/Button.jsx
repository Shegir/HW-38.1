export default function Button({ text, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 16px",
        backgroundColor: "#4a90e2",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      {text}
    </button>
  );
}
