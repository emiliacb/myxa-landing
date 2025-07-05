const getClonedElements = (contents) => {
  const REPETITIONS = 5;
  let newContents = [];

  if (typeof contents === "string") {
    return new Array(REPETITIONS).fill(contents);
  }

  for (let i = 0; i < REPETITIONS; i++) {
    newContents.push(...contents);
  }

  return newContents;
};

export { getClonedElements };
