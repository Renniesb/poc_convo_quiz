
export default[{
      id:"1",
      blanks:["blank1","blank2"],
      answers: "largeolder",
      incorrectText: '<span class="incorrect">Incorrect</span><div>Correct Answer: I have a <u>large</u> family. There is my mother and father. Plus I have two <u>older</u> brothers and a sister.</div>',
      questionText: "Tell me something about your family.",
      responseText: '<p>I have a <input name="blank1"> family. There is my mother and father. Plus I have two <input name="blank2"> brothers and a sister.</p>'
},
{     id:"2",
      blanks:["blank3","blank4","blank5","blank6"],
      answers: "smallunclescousinslarge",
      incorrectText: '<span class="incorrect">Incorrect</span><div>I have a <u>small</u> family, just me and my mother and father. But my <u>uncles</u> and aunts and <u>cousins</u> live very nearby, so we seem like a <u>large</u> family.</div>',
      questionText: "Tell me something about your family.",
      responseText: 'I have a <input name="blank3"> family, just me and my mother and father. But my <input name="blank4"> and aunts and <input name="blank5"> live very nearby, so we seem like a <input name="blank6"> family.'
}];
