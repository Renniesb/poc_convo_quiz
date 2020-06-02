import audio1 from './audio/family1.mp3'
import audio2 from './audio/family2.mp3'
import audio3 from './audio/family3.mp3'
import audio4 from './audio/family4.mp3'
import audio5 from './audio/family5.mp3'
import audio6 from './audio/family6.mp3'
import audio7 from './audio/family7.mp3'
import audio8 from './audio/family8.mp3'
import audio9 from './audio/family9.mp3'
import audio10 from './audio/family10.mp3'
import audio11 from './audio/family11.mp3'
import audio12 from './audio/family12.mp3'
import audio13 from './audio/food1.mp3'
import audio14 from './audio/food2.mp3'
import audio15 from './audio/food3.mp3'
import audio16 from './audio/food4.mp3'
import audio17 from './audio/food5.mp3'
import audio18 from './audio/food6.mp3'
import audio19 from './audio/food7.mp3'
import audio20 from './audio/food8.mp3'
import audio21 from './audio/food9.mp3'
import audio22 from './audio/food10.mp3'
import audio23 from './audio/food11.mp3'
import audio24 from './audio/food12.mp3'
export default[{
      id:"1",
      blanks:["blank1","blank2"],
      answers: "largeolder",
      incorrectText: '<span class="incorrect">Incorrect</span><div class="correct-answer">Correct Answer: I have a <u>large</u> family. There is my mother and father. Plus I have two <u>older</u> brothers and a sister.</div>',
      questionText: "Tell me something about your family.",
      responseText: 'I have a <input autoComplete="off" id="blank1"> family. There is my mother and father. Plus I have two <input autoComplete="off" id="blank2"> brothers and a younger sister.',
      audioLink: audio1
},
{     id:"2",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "smallunclescousinslarge",
      incorrectText: '<span class="incorrect">Incorrect</span><div class="correct-answer"> Correct Answer: I have a <u>small</u> family, just me and my mother and father. But my <u>uncles</u> and aunts and <u>cousins</u> live very nearby, so we seem like a <u>large</u> family.</div>',
      questionText: "Tell me something about your family.",
      responseText: 'I have a <input autoComplete="off" id="blank1"> family, just me and my mother and father. But my <input autoComplete="off" id="blank2"> and aunts and <input autoComplete="off" id="blank3"> live very nearby, so we seem like a <input autoComplete="off" id="blank4"> family.',
      audioLink: audio2
},
{
      id:"3",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "wifeparentsrelativesclose",
      incorrectText: '<span class="incorrect">Incorrect</span><div class="correct-answer">Correct Answer: I recently got married, and my <u>wife</u> and I live alone in a small apartment. But her <u>parents</u> live nearby, and she has lots of <u>relatives</u>. She’s very <u>close</u> to her family.</div>',
      questionText: "Tell me something about your family.",
      responseText: 'I recently got married, and my <input autoComplete="off" id="blank1"> and I live alone in a small apartment. But her <input autoComplete="off" id="blank2"> live nearby, and she has lots of <input autoComplete="off" id="blank3">. She’s very <input autoComplete="off" id="blank4"> to her family.',
      audioLink: audio3
},
{
      id:"4",
      blanks:["blank1","blank2","blank3"],
      answers: "twinquietdistant",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I have a <u>twin</u> brother. He is my only sibling, so ours is a <u>quiet</u> family. Most of our relatives live in another city, so we don't see them often. We have some <u>distant</u> cousins who live near us but I don't know them well.</div>",
      questionText: "Tell me something about your family.",
      responseText: "I have a <input autoComplete='off' id='blank1'> brother. He is my only sibling, so ours is a <input autoComplete='off' id='blank2'> family. Most of our relatives live in another city, so we don't see them often. We have some <input autoComplete='off' id='blank3'> cousins who live near us but I don't know them well.",
      audioLink: audio4
},
{
      id:"5",
      blanks:["blank1","blank2","blank3"],
      answers: "sportsvisitmeal",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: My brothers and sisters and I all enjoy <u>sports</u>, so we spend a lot ot time playing soccer and tennis together. Also, we usually <u>visit</u> our cousins every weekend and have a big <u>meal</u> with them.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: "My brothers and sisters and I all enjoy <input autoComplete='off' id='blank1'>, so we spend a lot ot time playing soccer and tennis together. Also, we usually <input autoComplete='off' id='blank2'> our cousins every weekend and have a big <input autoComplete='off' id='blank3'> with them.",
      audioLink: audio5
},
{
      id:"6",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "readdiscussingopinionsstrange",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: We all like to <u>read</u> in our family, and we really enjoy <u>discussing</u> books together. We don't always have the same <u>opinions</u> about books, so we argue a lot. It may sound <u>strange</u>, but we think that's really fun.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: "We all like to <input autoComplete='off' id='blank1'> in our family, and we really enjoy <input autoComplete='off' id='blank2'> books together. We don't always have the same <input autoComplete='off' id='blank3'> about books, so we argue a lot. It may sound <input autoComplete='off' id='blank4'>, but we think that's really fun.",
      audioLink: audio6
},
{
      id:"7",
      blanks:["blank1","blank2","blank3"],
      answers: "vacationrentinvite",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: We usually take a big family <u>vacation</u> every summer. We <u>rent</u> a big house at the beach and <u>invite</u> all our cousins to stay with us.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: " We usually take a big family <input autoComplete='off' id='blank1'> every summer. We <input autoComplete='off' id='blank2'> a big house at the beach and <input autoComplete='off' id='blank3'> all our cousins to stay with us.",
      audioLink: audio7
},
{
      id:"8",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "busycookstalkrelaxing",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: Unfortunately, I am usually too <u>busy</u> to spend much time with my family because of my job. But I visit my parents when I can. My mother <u>cooks</u> a nice dinner for me, and we sit around and <u>talk</u> about things. It’s quiet and <u>relaxing</u>.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: "Unfortunately, I am usually too <input autoComplete='off' id='blank1'> to spend much time with my family because of my job. But I visit my parents when I can. My mother <input autoComplete='off' id='blank2'> a nice dinner for me, and we sit around and <input autoComplete='off' id='blank3'> about things. It’s quiet and <input autoComplete='off' id='blank4'>.",
      audioLink: audio8
},
{
      id:"9",
      blanks:["blank1","blank2","blank3"],
      answers: "funshareinterests",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I like spending time with both family and friends. But to tell the truth, I have more <u>fun</u> with my friends. My friends and I <u>share</u> a lot of <u>interests</u>. That's why they're my friends.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "I like spending time with both family and friends. But to tell the truth, I have more <input autoComplete='off' id='blank1'> with my friends. My friends and I <input autoComplete='off' id='blank2'> a lot of <input autoComplete='off' id='blank3'>. That's why they're my friends.",
      audioLink: audio9
},
{
      id:"10",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "babyattentionhusbandfine",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I have a new <u>baby</u> so I don't have much time for friends. He takes most of my <u>attention</u>. For now, my friends are my <u>husband</u> and my son. That's <u>fine</u> with me.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "I have a new <input autoComplete='off' id='blank1'> so I don't have much time for friends. He takes most of my <input autoComplete='off' id='blank2'>. For now, my friends are my <input autoComplete='off' id='blank3'> and my son. That's <input autoComplete='off' id='blank4'> with me.",
      audioLink: audio10
},
{
      id:"11",
      blanks:["blank1","blank2"],
      answers: "activitiesin common",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I really enjoy spending time with my family. My brothers and sisters and I enjoy many of the same <u>activities</u>. We have a lot <u>in common</u>.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "I really enjoy spending time with my family. My brothers and sisters and I enjoy many of the same <input autoComplete='off' id='blank1'>. We have a lot <input autoComplete='off' id='blank2'>.",
      audioLink: audio11
},
{
      id:"12",
      blanks:["blank1","blank2","blank3"],
      answers: "groupslikeget along",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I have a lot of friends, and I enjoy spending time with them. We go out together in large <u>groups</u>. My friends are <u>like</u> a large family to me. I <u>get along</u> better with my friends than I do with my family.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "I have a lot of friends, and I enjoy spending time with them. We go out together in large <input autoComplete='off' id='blank1'>. My friends are <input autoComplete='off' id='blank2'> a large family to me. I <input autoComplete='off' id='blank3'> better with my friends than I do with my family.",
      audioLink: audio12
},
{
      id:"13",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "tryingdishesforeigndifferent",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I like <u>trying</u> all kinds of food. I especially like <u>dishes</u> from <u>foreign</u> countries. I always enjoy trying food that is new and <u>different</u>.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "I like <input autoComplete='off' id='blank1'> all kinds of food. I especially like <input autoComplete='off' id='blank2'> from <input autoComplete='off' id='blank3'> countries. I always enjoy trying food that is new and <input autoComplete='off' id='blank4'>.",
      audioLink: audio13
},
{
      id:"14",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "mealstraditionaldeliciouswell",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I like the <u>meals</u> my mother cooks. She cooks food that is <u>traditional</u> in our country. It's really <u>delicious</u>. Nobody cooks as <u>well</u> as my mother does.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "I like the <input autoComplete='off' id='blank1'> my mother cooks. She cooks food that is <input autoComplete='off' id='blank2'> in our country. It's really <input autoComplete='off' id='blank3'>. Nobody cooks as <input autoComplete='off' id='blank4'> as my mother does.",
      audioLink: audio14
},
{
      id:"15",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "vegetarianpreparedfreshfruit",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I am a <u>vegetarian</u>, so I never eat meat. I prefer food that's <u>prepared</u> with <u>fresh</u> vegetables. I eat a lot of <u>fruit</u>, too.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "I am a <input autoComplete='off' id='blank1'>, so I never eat meat. I prefer food that's <input autoComplete='off' id='blank2'> with <input autoComplete='off' id='blank3'> vegetables. I eat a lot of <input autoComplete='off' id='blank4'>, too.",
      audioLink: audio15
},
{
      id:"16",
      blanks:["blank1","blank2","blank3","blank4","blank5"],
      answers: "chickenricedessertssweetvegetables",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I generally prefer to eat beef or <u>chicken</u> with <u>rice</u>. And I love <u>desserts</u>. I like anything that's <u>sweet</u>. I almost never eat <u>vegetables</u>.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "I generally prefer to eat beef or <input autoComplete='off' id='blank1'> with <input autoComplete='off' id='blank2'>. And I love <input autoComplete='off' id='blank3'>. I like anything that's <input autoComplete='off' id='blank4'>. I almost never eat <input autoComplete='off' id='blank5'>.",
      audioLink: audio16
},
{
      id:"17",
      blanks:["blank1"],
      answers: "out",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I almost always eat at restaurants because I am <u>out</u> all day.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "I almost always eat at restaurants because I am <input autoComplete='off' id='blank1'> all day.",
      audioLink: audio17
},
{
      id:"18",
      blanks:["blank1","blank2","blank3"],
      answers: "breakfastdinnerweekends",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I always eat <u>breakfast</u> and <u>dinner</u> at home, and I eat lunch at home, too, when I can. But on <u>weekends</u>, I often go to restaurants with my friends.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "I always eat <input autoComplete='off' id='blank1'> and <input autoComplete='off' id='blank2'> at home, and I eat lunch at home, too, when I can. But on <input autoComplete='off' id='blank3'>, I often go to restaurants with my friends.",
      audioLink: audio18
},
{
      id:"19",
      blanks:["blank1","blank2","blank3"],
      answers: "expensivehavespecial occasion",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I usually eat at home because it's too <u>expensive</u> to eat at restaurants. I only <u>have</u> a meal at a restaurant when it's a <u>special occasion</u>, for example, someone’s birthday.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "I usually eat at home because it's too <input autoComplete='off' id='blank1'> to eat at restaurants. I only <input autoComplete='off' id='blank2'> a meal at a restaurant when it's a <input autoComplete='off' id='blank3'>, for example, someone’s birthday.",
      audioLink: audio19
},
{
      id:"20",
      blanks:["blank1","blank2","blank3"],
      answers: "convenientneighborhoodtastes",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I eat at home because it's more <u>convenient</u>. I have three children, so it's easier for us to eat at home. Also, there aren't many good restaurants in my <u>neighborhood</u>. I think the food we eat at home <u>tastes</u> better.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "I eat at home because it's more <input autoComplete='off' id='blank1'>. I have three children, so it's easier for us to eat at home. Also, there aren't many good restaurants in my <input autoComplete='off' id='blank2'>. I think the food we eat at home <input autoComplete='off' id='blank3'> better.",
      audioLink: audio20
},
{
      id:"21",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "servescakessnackfrequently",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: My favorite restaurant is a small place near my house. It <u>serves</u> the most delicious <u>cakes</u>. It’s a great place to go for an afternoon <u>snack</u>. I <u>frequently</u> meet my friends there.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "My favorite restaurant is a small place near my house. It <input autoComplete='off' id='blank1'> the most delicious <input autoComplete='off' id='blank2'>. It’s a great place to go for an afternoon <input autoComplete='off' id='blank3'>. I <input autoComplete='off' id='blank4'> meet my friends there.",
      audioLink: audio21
},
{
      id:"22",
      blanks:["blank1","blank2","blank3"],
      answers: "elegantbirthdayprices",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: There is a very <u>elegant</u> restaurant downtown that has French food. I had my <u>birthday</u> dinner there last year. The <u>prices</u> are high, so I can't go there very often, but I really like it.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "There is a very <input autoComplete='off' id='blank1'> restaurant downtown that has French food. I had my <input autoComplete='off' id='blank2'> dinner there last year. The <input autoComplete='off' id='blank3'> are high, so I can't go there very often, but I really like it.",
      audioLink: audio22
},
{
      id:"23",
      blanks:["blank1","blank2","blank3","blank4"],
      answers: "fast foodhamburgerquicklycheap",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: I like to go to a <u>fast food</u> restaurant near my school. I don't usually have a lot of time for lunch so it's a good place for me. I can get a <u>hamburger</u> or a sandwich there and eat it <u>quickly</u>. It’s <u>cheap</u>, too.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "I like to go to a <input autoComplete='off' id='blank1'> restaurant near my school. I don't usually have a lot of time for lunch so it's a good place for me. I can get a <input autoComplete='off' id='blank2'> or a sandwich there and eat it <input autoComplete='off' id='blank3'>. It’s <input autoComplete='off' id='blank4'>, too.",
      audioLink: audio23
},
{
      id:"24",
      blanks:["blank1","blank2","blank3"],
      answers: "seafoodfishmenu",
      incorrectText: "<span class='incorrect'>Incorrect</span><div class='correct-answer'>Correct Answer: My favorite restaurant is a <u>seafood</u> restaurant near my house. I like it because I like <u>fish</u>. It has lots of other kinds of food on the <u>menu</u>, too.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "My favorite restaurant is a <input autoComplete='off' autoComplete='off' id='blank1'> restaurant near my house. I like it because I like <input autoComplete='off' autoComplete='off' id='blank2'>. It has lots of other kinds of food on the <input autoComplete='off' autoComplete='off' id='blank3'>, too.",
      audioLink: audio24
}

];
