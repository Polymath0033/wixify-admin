const Cancel = ({ value, onClick }) => {
  return (
    <button
      style={{
        borderColor: "#eb5757",
        borderStyle: "solid",
        borderWidth: 1.5 + "px",
        color: "#eb5757",
        width: 100 + "%",
        display: "flex",
        padding: 0.8 + "rem",
        fontWeight: "bold",
        borderRadius: 25 + "px",
        backgroundColor: "#fff",
        textTransform: "capitalize",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1 + "rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Cancel;
