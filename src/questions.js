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
      incorrectText: '<span class="incorrect">Incorrect</span><div>Correct Answer: I have a <u>large</u> family. There is my mother and father. Plus I have two <u>older</u> brothers and a sister.</div>',
      questionText: "Tell me something about your family.",
      responseText: '<p>I have a <input name="blank1"> family. There is my mother and father. Plus I have two <input name="blank2"> brothers and a younger sister.</p>',
      audioLink: audio1
},
{     id:"2",
      blanks:["blank3","blank4","blank5","blank6"],
      answers: "smallunclescousinslarge",
      incorrectText: '<span class="incorrect">Incorrect</span><div>I have a <u>small</u> family, just me and my mother and father. But my <u>uncles</u> and aunts and <u>cousins</u> live very nearby, so we seem like a <u>large</u> family.</div>',
      questionText: "Tell me something about your family.",
      responseText: 'I have a <input name="blank3"> family, just me and my mother and father. But my <input name="blank4"> and aunts and <input name="blank5"> live very nearby, so we seem like a <input name="blank6"> family.',
      audioLink: audio2
},
{
      id:"3",
      blanks:["blank7","blank8","blank9","blank10"],
      answers: "wifeparentsrelativesclose",
      incorrectText: '<span class="incorrect">Incorrect</span><div>Correct Answer: I recently got married, and my <u>wife</u> and I live alone in a small apartment. But her <u>parents</u> live nearby, and she has lots of <u>relatives</u>. She’s very <u>close</u> to her family.</div>',
      questionText: "Tell me something about your family.",
      responseText: '<p>I recently got married, and my <input name="blank7"> and I live alone in a small apartment. But her <input name="blank8"> live nearby, and she has lots of <input name="blank9">. She’s very <input name="blank10"> to her family.</p>',
      audioLink: audio3
},
{
      id:"4",
      blanks:["blank11","blank12","blank13"],
      answers: "twinquietdistant",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I have a <u>twin</u> brother. He is my only sibling, so ours is a <u>quiet</u> family. Most of our relatives live in another city, so we don't see them often. We have some <u>distant</u> cousins who live near us but I don't know them well.</div>",
      questionText: "Tell me something about your family.",
      responseText: "<form><p>I have a <input name='blank11'> brother. He is my only sibling, so ours is a <input name='blank12'> family. Most of our relatives live in another city, so we don't see them often. We have some <input name='blank13'> cousins who live near us but I don't know them well.</p></form>",
      audioLink: audio4
},
{
      id:"5",
      blanks:["blank14","blank15","blank16"],
      answers: "sportsvisitmeal",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: My brothers and sisters and I all enjoy <u>sports</u>, so we spend a lot ot time playing soccer and tennis together. Also, we usually <u>visit</u> our cousins every weekend and have a big <u>meal</u> with them.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: "<form><p>My brothers and sisters and I all enjoy <input name='blank14'>, so we spend a lot ot time playing soccer and tennis together. Also, we usually <input name='blank15'> our cousins every weekend and have a big <input name='blank16'> with them.</p></form>",
      audioLink: audio5
},
{
      id:"6",
      blanks:["blank17","blank18","blank19","blank20"],
      answers: "readdiscussingopinionsstrange",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: We all like to <u>read</u> in our family, and we really enjoy <u>discussing</u> books together. We don't always have the same <u>opinions</u> about books, so we argue a lot. It may sound <u>strange</u>, but we think that's really fun.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: "<form><p>We all like to <input name='blank17'> in our family, and we really enjoy <input name='blank18'> books together. We don't always have the same <input name='blank19'> about books, so we argue a lot. It may sound <input name='blank20'>, but we think that's really fun.</p></form>",
      audioLink: audio6
},
{
      id:"7",
      blanks:["blank21","blank22","blank23"],
      answers: "vacationrentinvite",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: We usually take a big family <u>vacation</u> every summer. We <u>rent</u> a big house at the beach and <u>invite</u> all our cousins to stay with us.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: "<form><p>We usually take a big family <input name='blank21'> every summer. We <input name='blank22'> a big house at the beach and <input name='blank23'> all our cousins stay with us.</p></form>",
      audioLink: audio7
},
{
      id:"8",
      blanks:["blank24","blank25","blank26","blank27"],
      answers: "busycookstalkrelaxing",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: Unfortunately, I am usually too <u>busy</u> to spend much time with my family because of my job. But I visit my parents when I can. My mother <u>cooks</u> a nice dinner for me, and we sit around and <u>talk</u> about things. It’s quiet and <u>relaxing</u>.</div>",
      questionText: "What do you enjoy doing with your family?",
      responseText: "<form><p>Unfortunately, I am usually too <input name='blank24'> to spend much time with my family because of my job. But I visit my parents when I can. My mother <input name='blank25'> a nice dinner for me, and we sit around and <input name='blank26'> about things. It’s quiet and <input name='blank27'>.</p></form>",
      audioLink: audio8
},
{
      id:"9",
      blanks:["blank28","blank29","blank30"],
      answers: "funshareinterests",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I like spending time with both family and friends. But to tell the truth, I have more <u>fun</u> with my friends. My friends and I <u>share</u> a lot of <u>interests</u>. That's why they're my friends.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "<form><p>I like spending time with both family and friends. But to tell the truth, I have more <input name='blank28'> with my friends. My friends and I <input name='blank29'> a lot of <input name='blank30'>. That's why they're my friends.</p></form>",
      audioLink: audio9
},
{
      id:"10",
      blanks:["blank31","blank32","blank33","blank34"],
      answers: "babyattentionhusbandfine",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I have a new <u>baby</u> so I don't have much time for friends. He takes most of my <u>attention</u>. For now, my friends are my <u>husband</u> and my son. That's <u>fine</u> with me.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "<form><p>I have a new <input name='blank31'> so I don't have much time for friends. He takes most of my <input name='blank32'>. For now, my friends are my <input name='blank33'> and my son. That's <input name='blank34'> with me.</p></form>",
      audioLink: audio10
},
{
      id:"11",
      blanks:["blank35","blank36"],
      answers: "activitiesin common",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I really enjoy spending time with my family. My brothers and sisters and I enjoy many of the same <u>activities</u>. We have a lot <u>in common</u>.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "<form><p>I really enjoy spending time with my family. My brothers and sisters and I enjoy many of the same <input name='blank35'>. We have a lot <input name='blank36'>.</p></form>",
      audioLink: audio11
},
{
      id:"12",
      blanks:["blank37","blank38","blank39"],
      answers: "groupslikeget along",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I have a lot of friends, and I enjoy spending time with them. We go out together in large <u>groups</u>. My friends are <u>like</u> a large family to me. I <u>get along</u> better with my friends than I do with my family.</div>",
      questionText: "Do you prefer spending time with your family or with friends?",
      responseText: "<form><p>I have a lot of friends, and I enjoy spending time with them. We go out together in large <input name='blank37'>. My friends are <input name='blank38'> a large family to me. I <input name='blank39'> better with my friends than I do with my family.</p></form>",
      audioLink: audio12
},
{
      id:"13",
      blanks:["blank40","blank41","blank42","blank43"],
      answers: "tryingdishesforeigndifferent",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I like <u>trying</u> all kinds of food. I especially like <u>dishes</u> from <u>foreign</u> countries. I always enjoy trying food that is new and <u>different</u>.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "<form><p>I like <input name='blank40'> all kinds of food. I especially like <input name='blank41'> from <input name='blank42'> countries. I always enjoy trying food that is new and <input name='blank43'>.</p></form>",
      audioLink: audio13
},
{
      id:"14",
      blanks:["blank44","blank45","blank46","blank47"],
      answers: "mealstraditionaldeliciouswell",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I like the <u>meals</u> my mother cooks. She cooks food that is <u>traditional</u> in our country. It's really <u>delicious</u>. Nobody cooks as <u>well</u> as my mother does.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "<form><p>I like the <input name='blank44'> my mother cooks. She cooks food that is <input name='blank45'> in our country. It's really <input name='blank46'>. Nobody cooks as <input name='blank47'> as my mother does.</p></form>",
      audioLink: audio14
},
{
      id:"15",
      blanks:["blank48","blank49","blank50","blank51"],
      answers: "vegetarianpreparedfreshfruit",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I am a <u>vegetarian</u>, so I never eat meat. I prefer food that's <u>prepared</u> with <u>fresh</u> vegetables. I eat a lot of <u>fruit</u>, too.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "<form><p>I am a <input name='blank48'>, so I never eat meat. I prefer food that's <input name='blank49'> with <input name='blank50'> vegetables. I eat a lot of <input name='blank51'>, too.</p></form>",
      audioLink: audio15
},
{
      id:"16",
      blanks:["blank52","blank53","blank54","blank55","blank56"],
      answers: "chickenricedessertssweetvegetables",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I generally prefer to eat beef or <u>chicken</u> with <u>rice</u>. And I love <u>desserts</u>. I like anything that's <u>sweet</u>. I almost never eat <u>vegetables</u>.</div>",
      questionText: "What kinds of food do you prefer to eat?",
      responseText: "<form><p>I generally prefer to eat beef or <input name='blank52'> with <input name='blank53'>. And I love <input name='blank54'>. I like anything that's <input name='blank55'>. I almost never eat <input name='blank56'>.</p></form>",
      audioLink: audio16
},
{
      id:"17",
      blanks:["blank57"],
      answers: "out",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I almost always eat at restaurants because I am <u>out</u> all day.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "<form><p>I almost always eat at restaurants because I am <input name='blank57'> all day.</p></form>",
      audioLink: audio17
},
{
      id:"18",
      blanks:["blank58","blank59","blank60"],
      answers: "breakfastdinnerweekends",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I always eat <u>breakfast</u> and <u>dinner</u> at home, and I eat lunch at home, too, when I can. But on <u>weekends</u>, I often go to restaurants with my friends.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "<form><p>I always eat <input name='blank58'> and <input name='blank59'> at home, and I eat lunch at home, too, when I can. But on <input name='blank60'>, I often go to restaurants with my friends.</p></form>",
      audioLink: audio18
},
{
      id:"19",
      blanks:["blank61","blank62","blank63"],
      answers: "expensivehavespecial occasion",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I usually eat at home because it's too <u>expensive</u> to eat at restaurants. I only <u>have</u> a meal at a restaurant when it's a <u>special occasion</u>, for example, someone’s birthday.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "<form><p>I usually eat at home because it's too <input name='blank61'> to eat at restaurants. I only <input name='blank62'> a meal at a restaurant when it's a <input name='blank63'>, for example, someone’s birthday.</p></form>",
      audioLink: audio19
},
{
      id:"20",
      blanks:["blank64","blank65","blank66"],
      answers: "convenientneighborhoodtastes",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I eat at home because it's more <u>convenient</u>. I have three children, so it's easier for us to eat at home. Also, there aren't many good restaurants in my <u>neighborhood</u>. I think the food we eat at home <u>tastes</u> better.</div>",
      questionText: "Do you usually eat at home or at restaurants?",
      responseText: "<form><p>I eat at home because it's more <input name='blank64'>. I have three children, so it's easier for us to eat at home. Also, there aren't many good restaurants in my <input name='blank65'>. I think the food we eat at home <input name='blank66'> better.</p></form>",
      audioLink: audio20
},
{
      id:"21",
      blanks:["blank67","blank68","blank69","blank70"],
      answers: "servescakessnackfrequently",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: My favorite restaurant is a small place near my house. It <u>serves</u> the most delicious <u>cakes</u>. It’s a great place to go for an afternoon <u>snack</u>. I <u>frequently</u> meet my friends there.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "<form><p>My favorite restaurant is a small place near my house. It <input name='blank67'> he most delicious <input name='blank68'>. It’s a great place to go for an afternoon <input name='blank69'>. I <input name='blank70'> meet my friends there.</p></form>",
      audioLink: audio21
},
{
      id:"22",
      blanks:["blank71","blank72","blank73"],
      answers: "elegantbirthdayprices",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: There is a very <u>elegant</u> restaurant downtown that has French food. I had my <u>birthday</u> dinner there last year. The <u>prices</u> are high, so I can't go there very often, but I really like it.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "<form><p>There is a very <input name='blank71'> restaurant downtown that has French food. I had my <input name='blank72'> dinner there last year. The <input name='blank73'> are high, so I can't go there very often, but I really like it.</p></form>",
      audioLink: audio22
},
{
      id:"23",
      blanks:["blank74","blank75","blank76","blank77"],
      answers: "fast foodhamburgerquicklycheap",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: I like to go to a <u>fast food</u> restaurant near my school. I don't usually have a lot of time for lunch so it's a good place for me. I can get a <u>hamburger</u> or a sandwich there and eat it <u>quickly</u>. It’s <u>cheap</u>, too.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "<form><p>I like to go to a <input name='blank74'> restaurant near my school. I don't usually have a lot of time for lunch so it's a good place for me. I can get a <input name='blank75'> or a sandwich there and eat it <input name='blank76'>. It’s <input name='blank77'>, too.</p></form>",
      audioLink: audio23
},
{
      id:"24",
      blanks:["blank78","blank79","blank80"],
      answers: "seafoodfishmenu",
      incorrectText: "<span class='incorrect'>Incorrect</span><div>Correct Answer: My favorite restaurant is a <u>seafood</u> restaurant near my house. I like it because I like <u>fish</u>. It has lots of other kinds of food on the <u>menu</u>, too.</div>",
      questionText: "What is your favorite restaurant?",
      responseText: "<form><p>My favorite restaurant is a <input name='blank78'> restaurant near my house. I like it because I like <input name='blank79'>. It has lots of other kinds of food on the <input name='blank80'>, too.</p></form>",
      audioLink: audio24
}

];
