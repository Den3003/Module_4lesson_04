'use strict'

{
  const getFirstLetterUpper = line => line[0].toUpperCase() + line.substring(1).toLowerCase();
  const modifyLine = getFirstLetterUpper('приВет мир');
  console.log(modifyLine);
}