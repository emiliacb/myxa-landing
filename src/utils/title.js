const getClonedElements = (contents) => {
  const REPETITIONS = 10;
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
