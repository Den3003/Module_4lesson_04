'use strict'

{
  const getFirstLetterUpper = line => {
    let modifyLine = line.trim();
    return modifyLine[0].toUpperCase() + modifyLine.substring(1).toLowerCase();
  }
  
  console.log(getFirstLetterUpper('   приВет мир   '));
}