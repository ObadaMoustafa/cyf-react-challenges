function NextBtn({ onclick }) {
  //write code here
  const style = {
    width: "250px",
    height: "35px",
    cursor: "pointer",
  };

  return (
    <button style={style} onClick={onclick}>
      Next Question
    </button>
  );
}

export default NextBtn;
