const getClonedElements = (contents, delta = 20) => {
  let newContents = [];

  if (typeof contents === "string") {
    newContents = new Array(delta).fill(contents);
    return newContents;
  }
  
  for (let i = 0; i < (contents.length * delta); i++) {
    newContents.push(contents.at(i % contents.length));
  }

  return newContents;
};

export { getClonedElements };
