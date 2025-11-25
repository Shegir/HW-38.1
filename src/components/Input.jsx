export default function Input({ placeholder, type = "text", onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px"
      }}
    />
  );
}
