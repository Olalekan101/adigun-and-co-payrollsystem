function FirstLetters({ text }) {
  const words = text.split(" ");
  const firstLetters = words.map((word) => word.charAt(0));

  return <div>{firstLetters.join("")}</div>;
}

export default FirstLetters;
