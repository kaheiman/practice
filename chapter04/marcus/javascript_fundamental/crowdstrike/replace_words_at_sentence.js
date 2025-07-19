const smartEdit = (sentence, startIdx, endIdx, replacement) => {
    const words = sentence.split(" ")
    const segmentToReplace = words.slice(startIdx, endIdx + 1)
    let replacementWords = replacement.split(" ")
    if (replacement === '') replacementWords = []    
    words.splice(startIdx, segmentToReplace.length, ...replacementWords)
    return words.join(" ")
}

/* -------------------- Example usage -------------------- */
console.log(
    smartEdit(
      'the quick brown fox jumps over the lazy dog',
      2,
      4,
      'red panda silently'
    )
  ); // → "the quick red panda silently over the lazy dog"
  
  console.log(
    smartEdit('alpha beta gamma delta', 1, 2, 'one two three')
  ); // → "alpha one two three delta"
  
  console.log(
    smartEdit('just one word', 0, 0, '')
  ); // → ""  (entire sentence removed)