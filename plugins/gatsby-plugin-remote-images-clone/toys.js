const faces = ["😃", "🤠", "🤡", "🤑", "😵", "🌞", "🐶", "😺"];

function addArms(face) {
  return `💪 ${face} 👍`;
}

const toys = faces.map(addArms);
