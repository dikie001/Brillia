import type { Teaser } from "@/pages/USER/QuickChallenges";

const brainTeasers: Teaser[] = [
  {
    id: 1,
    question:
      "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?",
    answer:
      "The man is looking at a portrait of his own son. The logic is as follows: 'My father's son' is the speaker himself (since he has no brothers). Therefore, the statement simplifies to 'That man's father is me.' If that man's father is the speaker, then the man in the portrait must be the speaker's son.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 2,
    question: "What has an eye, but cannot see?",
    answer:
      "A needle. A needle has a small opening at one end called an 'eye' for the thread to pass through, but it has no biological capacity for sight. This is a classic play on words.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 3,
    question:
      "You have a 7-minute hourglass and an 11-minute hourglass. How can you time the boiling of an egg for exactly 15 minutes?",
    answer:
      "Start both hourglasses simultaneously. When the 7-minute hourglass runs out (at 7 mins), flip it immediately. When the 11-minute hourglass runs out (at 11 mins), flip the 7-minute hourglass again. At this point, the 7-minute hourglass had been running for 4 minutes (11-7=4) on its second turn. Flipping it now means it will run for another 4 minutes. The total time elapsed will be the 11 minutes from the first hourglass plus the final 4 minutes, equaling 15 minutes.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 4,
    question:
      "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?",
    answer:
      "He is playing the board game Monopoly. In Monopoly, a player moves their token (in this case, shaped like a car) around the board. If they land on a property with a hotel and cannot afford the rent, they go bankrupt.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 5,
    question: "What is full of holes but still holds water?",
    answer:
      "A sponge. A sponge is a porous material with many holes, but its structure allows it to absorb and hold a significant amount of water within those very holes.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 6,
    question: "A farmer has 17 sheep, and all but 9 die. How many are left?",
    answer:
      "There are 9 sheep left. The phrase 'all but 9 die' is a tricky way of stating that 9 are the ones that survived. It's a test of careful reading rather than a math problem.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 7,
    question:
      "I am a word of letters three; add two and fewer there will be. What word am I?",
    answer:
      "The word is 'few'. It has three letters. When you add the letters 'er' to it, you get the word 'fewer', which signifies a smaller quantity.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 8,
    question:
      "You see a boat filled with people. You look again, but this time there isn’t a single person on the boat. Why?",
    answer:
      "All the people on the boat are married. The trick is in the word 'single'. There isn't a single (unmarried) person on the boat because they are all in relationships.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 9,
    question: "What can travel all around the world while staying in a corner?",
    answer:
      "A postage stamp. A stamp is placed on the corner of an envelope or package and travels with it to its destination, potentially anywhere in the world, without ever leaving its corner.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 10,
    question:
      "Three doctors say that Robert is their brother. Robert says he has no brothers. How can this be?",
    answer:
      "The three doctors are women; they are Robert's sisters. The riddle plays on the gender assumption often associated with the word 'doctors'.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 11,
    question: "What has to be broken before you can use it?",
    answer:
      "An egg. You must break the shell of an egg to get to the yolk and white inside for cooking or eating.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 12,
    question:
      "You are in a room with three light switches, each controlling one of three light bulbs in the next room. You can only enter the other room once. How can you determine which switch is connected to which bulb?",
    answer:
      "Flip the first switch on and leave it on. Flip the second switch on for a minute, then turn it off. Leave the third switch off. Now, enter the room. The bulb that is lit is connected to the first switch. The bulb that is off but warm to the touch is connected to the second switch. The bulb that is off and cold is connected to the third switch.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 13,
    question:
      "A man is found dead in the middle of a desert, face down, with a pack on his back. There are no tracks. What happened?",
    answer:
      "His parachute failed to open. The 'pack' on his back is a parachute, and he fell from the sky, which explains the lack of tracks in the sand around him.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 14,
    question: "What is always in front of you but can’t be seen?",
    answer:
      "The future. The future is always ahead of us in time, but it is an abstract concept that cannot be physically seen.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 15,
    question:
      "If a plane crashes on the border between the United States and Canada, where do they bury the survivors?",
    answer:
      "You don't bury survivors. This is a classic trick question that plays on your focus on the location ('border') rather than the state of the people ('survivors').",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 16,
    question:
      "The person who makes it has no need of it; the person who buys it has no use for it. The person who uses it can neither see nor feel it. What is it?",
    answer:
      "A coffin. The carpenter who builds it doesn't need it for himself at that time. The person who buys it is purchasing it for someone else. The person who uses it is deceased and therefore cannot see or feel it.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 17,
    question:
      "A man and his son are in a car accident. The father dies on the scene, but the boy is rushed to the hospital. At the hospital, the surgeon looks at the boy and says, 'I cannot operate on this boy. He is my son.' How can this be?",
    answer:
      "The surgeon is the boy's mother. This riddle challenges gender stereotypes by leading the listener to assume the surgeon must be male.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 18,
    question: "If 2 is company and 3 is a crowd, what are 4 and 5?",
    answer:
      "Nine. This is a simple math problem disguised as a riddle based on a common saying. The question is simply asking for the sum of 4 and 5.",
    difficulty: "Easy",
    category: "Math",
  },
  {
    id: 19,
    question: "What question can you never answer 'yes' to?",
    answer:
      "'Are you asleep yet?' If you are truly asleep, you cannot answer. If you are awake enough to answer 'yes,' then the answer is factually incorrect.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 20,
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer:
      "A map. A map is a two-dimensional representation of geographical features like cities, mountains, and bodies of water, but it does not contain the physical objects themselves.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 21,
    question:
      "A woman has two coins that total 30 cents. One of them is not a nickel. What are the two coins?",
    answer:
      "A quarter and a nickel. The riddle states that ONE of the coins is not a nickel, which is the quarter. The other coin IS a nickel. This plays on the assumption that neither coin is a nickel.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 22,
    question: "What has a neck without a head, and a body without legs?",
    answer:
      "A bottle. A bottle has a narrow 'neck' leading to the opening, and a main 'body' to hold liquid, but it lacks a head or legs.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 23,
    question:
      "There are five houses in a row. The Englishman lives in the red house. The Spaniard owns the dog. Coffee is drunk in the green house. The Ukrainian drinks tea. The green house is immediately to the right of the ivory house. The Old Gold smoker owns snails. Kools are smoked in the yellow house. Milk is drunk in the middle house. The Norwegian lives in the first house. The man who smokes Chesterfields lives in the house next to the man with the fox. Kools are smoked in the house next to the house where the horse is kept. The Lucky Strike smoker drinks orange juice. The Japanese smokes Parliaments. The Norwegian lives next to the blue house. Who drinks water? Who owns the zebra?",
    answer:
      "The Norwegian drinks the water, and the Japanese owns the zebra. This is a classic logic puzzle, often called Einstein's Riddle, that requires creating a grid and using deduction to fill in the categories (nationality, pet, drink, smoke, house color) for each of the five houses.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 24,
    question: "What can you catch, but not throw?",
    answer:
      "A cold. You can 'catch a cold,' which is an idiom for becoming sick, but you cannot physically throw an illness.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 25,
    question:
      "A man is condemned to death. He has to choose between three rooms. The first is full of raging fires, the second is full of assassins with loaded guns, and the third is full of lions that haven't eaten in 3 years. Which room is safest for him?",
    answer:
      "The third room. Lions that haven't eaten in three years would be dead. Therefore, the room full of dead lions is the safest option.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 26,
    question: "What is so fragile that saying its name breaks it?",
    answer:
      "Silence. The moment you say the word 'silence,' you are making a sound, which breaks the silence.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 27,
    question:
      "A man is on one side of a river, and his dog is on the other. The man calls his dog, who immediately crosses the river without getting wet and without using a bridge or a boat. How did the dog do it?",
    answer: "The river was frozen. The dog simply walked across the ice.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 28,
    question:
      "If you have me, you want to share me. If you share me, you haven't got me. What am I?",
    answer:
      "A secret. A person who has a secret often feels an urge to share it, but the act of sharing it means it is no longer a secret.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 29,
    question:
      "A man is trapped in a room. The room has only two possible exits: two doors. Through the first door, there is a room constructed from magnifying glass. The blazing sun will instantly fry anything that enters. Through the second door, there is a fire-breathing dragon. How does the man escape?",
    answer:
      "He waits until nightfall. Once the sun goes down, he can safely pass through the room made of magnifying glass.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 30,
    question:
      "I have no voice, but I can tell you stories. I have no legs, but I can travel the world. I have no hands, but I can build empires. What am I?",
    answer:
      "A book. A book can convey stories without a voice, be carried anywhere to 'travel', and contain knowledge that can be used to build great things.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 31,
    question:
      "A girl has as many brothers as she has sisters, but each brother has only half as many brothers as he has sisters. How many brothers and sisters are in the family?",
    answer:
      "There are four sisters and three brothers. From a sister's perspective (e.g., one of the four girls), she has three other sisters and three brothers (equal numbers). From a brother's perspective (e.g., one of the three boys), he has two other brothers and four sisters (half as many brothers as sisters).",
    difficulty: "Hard",
    category: "Math",
  },
  {
    id: 32,
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer:
      "The letter 'R'. The letter 'R' is literally in the middle of the word 'MaRch' and appears in the word 'ApRil', but not at the beginning or end of either word.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 33,
    question:
      "You are a cyclist in a cross-country race. Just before the finish line, you overtake the person in second place. What place are you in now?",
    answer:
      "You are in second place. By overtaking the person who was in second, you have taken their position.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 34,
    question:
      "A man who wants to enter a private club is told by the doorman, 'Twelve.' He replies, 'Six.' and is let in. The next person is told, 'Six.' They reply, 'Three.' and are also let in. You approach and the doorman says, 'Ten.' What should you say?",
    answer:
      "You should say 'Three'. The password is the number of letters in the word the doorman says. 'Twelve' has six letters. 'Six' has three letters. 'Ten' has three letters.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 35,
    question: "What has many keys but can’t open a single lock?",
    answer:
      "A piano or a keyboard. Both instruments have many 'keys' that are played to produce music, but these keys cannot be used to open physical locks.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 36,
    question:
      "A man is found hanging in a locked room with a puddle of water under his feet. The room is completely empty otherwise. How did he die?",
    answer:
      "He stood on a large block of ice to hang himself. After he died, the ice melted, leaving only a puddle of water on the floor, thus removing the 'platform' he used.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 37,
    question: "What can you hold in your left hand but not in your right?",
    answer:
      "Your right elbow (or hand). You can physically grasp your right elbow with your left hand, but it's impossible to hold your right elbow with your right hand.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 38,
    question:
      "If you drop a steel ball from a height of 5 feet onto a solid steel plate, it will bounce approximately 3 feet. If you have a steel ball and a perfectly matched steel plate on a planet with identical gravity to Earth but with no atmosphere, how high would the ball bounce?",
    answer:
      "It would bounce to almost exactly 5 feet. On Earth, air resistance (drag) causes the ball to lose energy and not bounce back to its original height. In a vacuum (no atmosphere), this energy loss from air resistance is eliminated, allowing for a much more efficient energy transfer and a near-perfect bounce.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 39,
    question:
      "What begins with a 'T', is filled with 'T', and ends with a 'T'?",
    answer:
      "A teapot. The word 'Teapot' starts and ends with the letter T, and it is filled with tea, which also starts with T.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 40,
    question:
      "A man walks into a bar and asks for a glass of water. The bartender pulls out a gun and points it at him. The man says, 'Thank you,' and walks out. Why?",
    answer:
      "The man had the hiccups. He asked for water to cure them, but the bartender, knowing a sudden scare can also work, used the gun to startle him. The shock cured his hiccups, so the man was thankful and no longer needed the water.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 41,
    question:
      "How can you throw a ball as hard as you can and have it come back to you, even if it doesn't bounce off anything? There is nothing attached to it.",
    answer:
      "Throw the ball straight up in the air. Gravity will cause it to slow down, stop, and then fall back down to you.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 42,
    question:
      "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody. What am I?",
    answer:
      "Pencil lead (graphite). Graphite is mined, placed inside a wooden pencil, and is 'used' by being worn away onto paper, never being released from its case.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 43,
    question:
      "A man has a wolf, a goat, and a cabbage. He must cross a river with a boat that can only carry him and one other item. If left alone, the wolf will eat the goat, and the goat will eat the cabbage. How does he get all three across?",
    answer:
      "1. Take the goat across. 2. Return alone. 3. Take the wolf across. 4. Bring the goat back. 5. Take the cabbage across. 6. Return alone. 7. Take the goat across.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 44,
    question: "What is at the end of a rainbow?",
    answer:
      "The letter 'W'. This is a wordplay riddle. The word 'rainbow' literally ends with the letter W.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 45,
    question:
      "A man lives on the tenth floor of a building. Every day he takes the elevator to go down to the ground floor to go to work. When he returns, he takes the elevator to the seventh floor and walks up the stairs to reach his apartment on the tenth floor. He hates walking, so why does he do it?",
    answer:
      "The man is too short to reach the button for the 10th floor in the elevator. He can only reach the button for the 7th floor.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 46,
    question: "What has one head, one foot, and four legs?",
    answer:
      "A bed. A bed has a 'headboard' at one end, a 'footboard' at the other, and typically stands on four legs.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 47,
    question: "What has a thumb and four fingers but is not a hand?",
    answer:
      "A glove. A glove is designed to cover a hand and thus has separate sheaths for a thumb and four fingers.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 48,
    question:
      "If you have 12-gram weights, 15-gram weights, and 22-gram weights, how can you measure exactly 5 grams?",
    answer:
      "Place two 15-gram weights on one side of a balance scale (total 30g). On the other side, place a 22-gram weight and a 12-gram weight (total 34g). To balance the scale, you would need to add 4 grams to the first side. This doesn't solve it. The real solution: Place two 15g weights (30g) on one side. On the other side, place one 22g weight. The difference is 8g. Remove one 15g and add a 12g to the first side (27g). The difference is 5g. The answer lies in using the weights against each other on a balance scale. Place two 22-gram weights on one side (44g). On the other side, place three 12-gram weights (36g). The difference is 8g. This is tricky. Here's a common solution: Take one 22g and one 12g. Using a saw, cut exactly 5g off one? No. The answer is usually simpler. How about this: Use a balance scale. Put a 15g and 12g on one side (27g). Put a 22g weight on the other. Add material to the 22g side until it balances. The amount of material you added is 5g.",
    difficulty: "Hard",
    category: "Math",
  },
  {
    id: 49,
    question: "A man is found dead in a room with 53 Bicycles. What happened?",
    answer:
      "The man was cheating at cards. 53 Bicycles refers to a deck of Bicycle playing cards plus one extra card (a joker, or perhaps a card from another deck). He was caught with an extra ace or card up his sleeve.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 50,
    question: "Forward I am heavy, but backward I am not. What am I?",
    answer:
      "The word 'ton'. Spelled forward, it represents a heavy unit of weight. Spelled backward, it becomes 'not'.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 51,
    question:
      "What occurs once in a minute, twice in a moment, but never in a thousand years?",
    answer:
      "The letter 'M'. It appears once in the word 'Minute', twice in the word 'MoMent', and not at all in 'a thousand years'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 52,
    question:
      "You have two ropes that each take exactly one hour to burn from end to end. They do not burn at a uniform rate. How can you measure exactly 45 minutes?",
    answer:
      "Light the first rope at both ends simultaneously, and light the second rope at one end. The first rope will burn completely in 30 minutes. The moment it finishes burning, light the other end of the second rope. Since 30 minutes have passed, the second rope has 30 minutes of burn time left. By lighting the other end, it will now burn in half that time, which is 15 minutes. Total time measured: 30 + 15 = 45 minutes.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 53,
    question:
      "A woman shoots her husband. Then she holds him under water for over 5 minutes. Finally, she hangs him. But 5 minutes later they both go out together and enjoy a wonderful dinner. How can this be?",
    answer:
      "The woman was a photographer. She 'shot' a picture of her husband, developed it in her darkroom (holding it under the developing chemicals), and then hung it up to dry.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 54,
    question: "What can fill a room but takes up no space?",
    answer:
      "Light or sound. Both light and sound can fill an entire room, but they are forms of energy and do not occupy physical volume or have mass in the traditional sense.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 55,
    question:
      "I am an odd number. Take away a letter and I become even. What number am I?",
    answer:
      "Seven. When you take away the letter 'S' from the word 'Seven', it becomes 'even'.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 56,
    question:
      "There are 100 prisoners in solitary cells. The warden devises a plan. He will choose one prisoner at random each day and place them in a special room with a single light switch, which is initially off. The prisoner can choose to toggle the switch or do nothing. At any point, any prisoner can declare, 'All 100 prisoners have been in this room at least once.' If they are right, everyone is freed. If they are wrong, they are all executed. The prisoners have one meeting to devise a strategy. What is their strategy?",
    answer:
      "Designate one prisoner as the 'counter'. When any of the other 99 prisoners enters the room and finds the light OFF, they turn it ON. If they find it ON, they do nothing. This means each of the 99 will only turn the light on once. When the designated 'counter' enters the room and finds the light ON, he turns it OFF and adds one to his mental count. When his count reaches 99, he knows that all other 99 prisoners have visited the room and turned the switch on. He can then confidently make the declaration.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 57,
    question:
      "A man is found dead in a field of snow. The only things near him are his own footprints leading to the spot and a small, unopened package. What happened?",
    answer:
      "He jumped out of a plane, but his parachute (the unopened package) failed to open. The footprints are from him walking to the plane earlier.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 58,
    question:
      "What has cities but no houses, forests but no trees, and water but no fish?",
    answer:
      "A map. A map depicts these features representationally but doesn't contain the actual physical objects.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 59,
    question:
      "A man is driving his son to school. They get into a car crash. The father is killed instantly. The son is rushed to the hospital. The surgeon says, 'I cannot operate on this boy, he is my son.' Who is the surgeon?",
    answer:
      "The surgeon is the boy's mother. This is a classic riddle that plays on gender-role stereotypes.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 60,
    question:
      "If you are running in a race and you pass the person in second place, what place are you in?",
    answer:
      "You are in second place. You have taken the position of the person you passed.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 61,
    question:
      "I have keys, but open no doors. I have a space, but no room. You can enter, but can't go outside. What am I?",
    answer:
      "A keyboard. It has 'keys' (like the space bar and letter keys), a 'space' bar, and an 'enter' key, but these are for typing, not physical access.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 62,
    question:
      "A man stands on one side of a river, his dog on the other. The man calls his dog, who immediately crosses the river without getting wet and without using a bridge or boat. How?",
    answer: "The river was frozen, and the dog walked across the ice.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 63,
    question:
      "You have a barrel of water and you need to measure out exactly 6 gallons. You only have a 4-gallon jug and a 9-gallon jug. How do you do it?",
    answer:
      "1. Fill the 9-gallon jug. 2. Pour from the 9g jug to fill the 4g jug (leaving 5g in the 9g jug). 3. Empty the 4g jug. 4. Pour from the 9g jug to fill the 4g jug again (leaving 1g in the 9g jug). 5. Empty the 4g jug. 6. Pour the 1g from the 9g jug into the 4g jug. 7. Fill the 9g jug. 8. Pour from the 9g jug to fill the 4g jug (which already has 1g), so you pour 3g, leaving exactly 6g in the 9-gallon jug.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 64,
    question:
      "A woman is at her mother's funeral. She meets a man she has never seen before and falls in love instantly. After the funeral, she tries to find him but can't. A week later, she kills her sister. Why?",
    answer:
      "She hopes that the man will attend her sister's funeral, giving her another chance to meet him.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 65,
    question: "What can be measured, but has no length, width, or height?",
    answer:
      "Temperature. Temperature is a measurable quantity, but it is a measure of thermal energy, not a physical dimension.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 66,
    question:
      "Two fathers and two sons go fishing. They each catch one fish. In total, only three fish were caught. How is this possible?",
    answer:
      "There were only three people fishing: a grandfather, his son, and his grandson. This group consists of a grandfather (who is a father), his son (who is both a son and a father), and his grandson (who is a son).",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 67,
    question:
      "What is lighter than a feather, but the strongest person can't hold it for more than a few minutes?",
    answer:
      "Your breath. Breath has negligible weight, but it is impossible to hold it indefinitely.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 68,
    question:
      "Turn me on my side and I am everything. Cut me in half and I am nothing. What am I?",
    answer:
      "The number 8. On its side, it looks like the infinity symbol (everything). Cut in half horizontally, it looks like two zeros (nothing).",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 69,
    question:
      "A man is found dead, face down in the desert. Next to him is an unopened package. There are no tracks for miles around. What happened?",
    answer:
      "He jumped from a plane, and the package is his unopened parachute.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 70,
    question:
      "You have 10 bags of 10 coins each. All coins in one bag are forgeries, and all coins in the other nine bags are real. A real coin weighs 10 grams. A forgery weighs 9 grams. You have a digital scale that you can use only once. How do you find the bag of forgeries?",
    answer:
      "Number the bags from 1 to 10. Take 1 coin from bag #1, 2 coins from bag #2, 3 from bag #3, and so on, up to 10 coins from bag #10. Place all these collected coins on the scale. If all coins were real, the total weight would be (1+2+3+...+10) * 10 grams = 550 grams. The actual weight will be less. If the weight is 549g (1g short), the forgery is in bag #1. If it's 548g (2g short), it's in bag #2, and so on. The number of grams you are short directly corresponds to the bag number with the forgeries.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 71,
    question:
      "What has a mouth but never speaks, a bed but never sleeps, and a bank but no money?",
    answer:
      "A river. A river has a 'mouth' where it meets a larger body of water, a 'riverbed' where it flows, and 'banks' on its sides.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 72,
    question:
      "A man is in a dark room. He has one match. In the room, there is a candle, a fireplace, and a gas lamp. What should he light first?",
    answer:
      "The match. He cannot light any of the other items without first lighting the match.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 73,
    question: "How many months have 28 days?",
    answer:
      "All of them. Every month in the year has at least 28 days. The riddle plays on the fact that only February has *exactly* 28 days (in a non-leap year).",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 74,
    question:
      "A man is washing windows on a 25-story building. He slips and falls off his ladder, yet he is completely uninjured. How is this possible?",
    answer:
      "He was washing the windows on the ground floor. He fell off the bottom rung of his ladder, a very short distance.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 75,
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great person, while the entire word signifies a great woman.",
    answer:
      "Heroine. 'He' is a male. 'Her' is a female. 'Hero' is a great person. 'Heroine' is a great woman.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 76,
    question:
      "There are three chests. One contains gold, the other two are empty. Each chest has an inscription. Chest 1: 'The gold is not in here.' Chest 2: 'The gold is not in here.' Chest 3: 'The gold is in Chest 2.' Only one inscription is true. Where is the gold?",
    answer:
      "The gold is in Chest 1. If the gold were in Chest 2, inscriptions on Chest 1 and 3 would be true. If the gold were in Chest 3, inscriptions on Chest 1 and 2 would be true. If the gold is in Chest 1, only the inscription on Chest 2 is true, which fits the condition that only one inscription is true.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 77,
    question: "What is always coming but never arrives?",
    answer:
      "Tomorrow. 'Tomorrow' is always a day away in the future, a concept that we never actually reach because once it arrives, it is 'today'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 78,
    question:
      "A truck driver is going down a one-way street the wrong way, and he passes at least ten police officers. Why is he not caught?",
    answer:
      "He was walking, not driving his truck. The riddle is designed to make you assume he was in his vehicle.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 79,
    question: "What can you break, even if you never pick it up or touch it?",
    answer:
      "A promise. A promise is a commitment that is broken through action or inaction, not physical force.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 80,
    question:
      "Using only addition, how can you add eight 8s to get the number 1,000?",
    answer:
      "888 + 88 + 8 + 8 + 8 = 1000. The puzzle does not restrict how you arrange the digits, only that you use addition and eight instances of the number 8.",
    difficulty: "Medium",
    category: "Math",
  },
  {
    id: 81,
    question:
      "I have no life, but I can die. I have no wings, but I can fly. What am I?",
    answer:
      "A battery. A battery can 'die' when its charge is depleted, and it is often used to power flying objects like drones.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 82,
    question:
      "A man is in his car. He sees three doors: a golden door, a silver door, and a diamond door. Which door does he open first?",
    answer:
      "His car door. He must first exit his car before he can approach and open any of the other doors.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 83,
    question:
      "There is a house with four walls. All of the walls are facing south, and a bear is circling the house. What color is the bear?",
    answer:
      "White. For all four walls to face south, the house must be located at the North Pole. The only bears native to the North Pole are polar bears, which are white.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 84,
    question:
      "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
    answer:
      "A river. A river 'runs' its course, has a 'mouth' where it meets the sea, a 'head' or source, and a 'riverbed'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 85,
    question:
      "A woman has two sons who were born on the same hour of the same day of the same year. But they are not twins. How can this be?",
    answer:
      "They are two of a set of triplets (or quadruplets, etc.). The riddle tricks you into thinking there are only two children.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 86,
    question: "What has 13 hearts, but no other organs?",
    answer:
      "A deck of playing cards. A standard deck contains 13 cards of the hearts suit (Ace through King).",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 87,
    question:
      "You have 12 balls, all identical in appearance. One ball is either heavier or lighter than the other 11. You have a balance scale and can only use it three times. How do you find the odd ball and determine if it's heavier or lighter?",
    answer:
      "This is a classic weighing puzzle. 1. Weigh balls (1,2,3,4) vs (5,6,7,8). If they balance, the odd one is in (9,10,11,12). If they don't, you know the odd one is in the group that moved and whether it's heavier or lighter. 2. For the balanced case: weigh (9,10) vs (1,2). If they balance, 11 is the odd one. If not, you know if it's 9 or 10. Weigh 9 vs 1. 3. For the unbalanced case: weigh (1,2,5) vs (3,6,9). This gets complex, but through a process of elimination based on how the scale tips (or if it balances), you can isolate the single odd ball and its property within three weighings.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 88,
    question:
      "What is it that lives if it is fed, and dies if you give it a drink?",
    answer:
      "A fire. Fire 'consumes' or is 'fed' by fuel to grow, but it is extinguished ('dies') by water.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 89,
    question:
      "A doctor gives you 3 pills and tells you to take one every half hour. How long would the pills last?",
    answer:
      "One hour. You take the first pill immediately, the second pill 30 minutes later, and the third pill 30 minutes after that. The total time elapsed from the first pill to the last is 60 minutes.",
    difficulty: "Easy",
    category: "Math",
  },
  {
    id: 90,
    question:
      "A man leaves home and makes three left turns. He returns home again. On his way, he passed two men wearing masks. Who were the two men?",
    answer:
      "A catcher and an umpire. The man is playing baseball. He leaves home plate, runs to first, second, and third base (making three left turns), and returns home. The two men in masks are part of the game.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 91,
    question:
      "What is the next letter in this sequence? J, F, M, A, M, J, J, _",
    answer:
      "A. The letters are the first letter of the months of the year: January, February, March, April, May, June, July, August.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 92,
    question: "The more you take, the more you leave behind. What are they?",
    answer:
      "Footsteps. Every step you take creates a footprint that you leave behind.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 93,
    question:
      "What is black when you buy it, red when you use it, and gray when you throw it away?",
    answer:
      "Charcoal. It is black when new, glows red when burning, and turns to gray ash when it's used up.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 94,
    question:
      "A man is looking at his friend's new boat. His friend says, 'If you can tell me the ages of my three daughters, I'll name the boat after you. The product of their ages is 72. The sum of their ages is my house number.' The man runs to check the house number and comes back. 'I still need more information,' he says. The friend replies, 'The oldest daughter loves strawberry ice cream.' The man then correctly states their ages. What are they?",
    answer:
      "The ages are 3, 3, and 8. The possible sets of ages whose product is 72 are (1,1,72), (1,2,36), (1,3,24), (1,4,18), (1,6,12), (1,8,9), (2,2,18), (2,3,12), (2,4,9), (2,6,6), (3,3,8), (3,4,6). The man knows the house number (the sum), but is still confused. This means there must be two sets of ages that add up to the same sum. The sums are 74, 39, 28, 23, 19, 18, 22, 17, 15, 14, 14, 13. The sums of (2,6,6) and (3,3,8) are both 14. The final clue, 'the OLDEST daughter,' implies there is a single oldest daughter, ruling out the (2,6,6) set where there are two oldest daughters. Therefore, the ages must be 3, 3, and 8.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 95,
    question:
      "How can you be standing behind your father while he is standing behind you?",
    answer: "You are standing back-to-back with your father.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 96,
    question:
      "If an electric train is traveling south at 100 mph and the wind is blowing north at 10 mph, which way does the smoke blow?",
    answer: "There is no smoke. Electric trains do not produce smoke.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 97,
    question: "What has 88 keys but cannot open a single door?",
    answer:
      "A piano. It has 88 keys for playing music but none for opening locks.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 98,
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer:
      "An echo. An echo is a sound that is repeated after the original sound has stopped, created by sound waves bouncing off a surface. It 'comes alive' with the 'wind' of a sound wave.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 99,
    question:
      "There are two doors. One leads to certain death, the other to freedom. There are two guards, one at each door. One guard always tells the truth, the other always lies. You don't know which is which. You can ask only one question to one guard to find the door to freedom. What is the question?",
    answer:
      "Go to either guard and ask: 'If I were to ask the other guard which door leads to freedom, what would he say?' Both guards will point to the door of certain death. The truthful guard will honestly report that the liar would point to the death door. The liar will lie about what the truthful guard would say, also pointing to the death door. Therefore, you simply choose the opposite door.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 100,
    question: "How many times can you subtract 10 from 100?",
    answer:
      "Only once. After you subtract 10 from 100 the first time, you are no longer subtracting from 100; you are subtracting from 90.",
    difficulty: "Easy",
    category: "Math",
  },
  {
    id: 101,
    question:
      "I am a protector. I sit on a bridge. One person can see right through me, while others wonder what I hide. What am I?",
    answer:
      "Sunglasses. They sit on the bridge of your nose. The wearer can see through them, while others may see their own reflection or be unable to see the wearer's eyes.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 102,
    question:
      "A man is found dead in his study. He is slumped over his desk, and a gun is in his hand. A cassette recorder is on the desk. The police enter, press play, and hear the man say 'I have nothing left to live for. I can't go on,' followed by the sound of a gunshot. The detective immediately knows it's a murder, not a suicide. How?",
    answer:
      "If the man had shot himself, he would not have been able to rewind the cassette tape back to the beginning for the police to play.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 103,
    question:
      "What is the only word in the English language that is pronounced the same even when you take away four of its five letters?",
    answer:
      "Queue. If you remove the last four letters ('ueue'), it is still pronounced 'Q'.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 104,
    question:
      "A man describes his daughters, saying, 'They are all blonde, but two; all brunette, but two; and all redhead, but two.' How many daughters does he have?",
    answer:
      "He has three daughters: one blonde, one brunette, and one redhead. From this group, it's true that two are not blonde, two are not brunette, and two are not redhead.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 105,
    question: "What has four fingers and a thumb, but is not alive?",
    answer: "A glove. It is shaped to fit a hand but has no life of its own.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 106,
    question:
      "There's a one-story house where everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?",
    answer: "There are no stairs. It's a one-story house.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 107,
    question:
      "A is the brother of B. B is the brother of C. C is the father of D. So how is D related to A?",
    answer:
      "A is D's uncle. Since A and B are brothers, and B is the brother of C, then A and C are also brothers. If C is D's father, then A is D's father's brother, which is the uncle.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 108,
    question: "What belongs to you, but other people use it more than you do?",
    answer:
      "Your name. You rarely say your own name, but others use it frequently when speaking to or about you.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 109,
    question:
      "A man is walking in the rain. He is in the middle of nowhere. He has nothing and nowhere to hide. He comes home all wet, but not a single hair on his head is wet. Why?",
    answer: "The man is bald. He has no hair to get wet.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 110,
    question:
      "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
    answer:
      "The finishing order was C, A, B, D, E. The clues establish a clear sequence: C finished first, then A, then B, then D, and finally E.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 111,
    question: "What can you put in a bucket to make it lighter?",
    answer:
      "Holes. Drilling holes in the bucket would reduce its weight, and it would also make it unable to hold anything that would make it heavier.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 112,
    question:
      "If it takes 8 men 10 hours to build a wall, how long would it take 4 men?",
    answer:
      "Zero hours, because the wall is already built. The question is phrased in the past tense ('it takes'), implying the job is done.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 113,
    question: "A clerk at a butcher shop is 5'10\" tall. What does he weigh?",
    answer: "Meat. As a butcher, his job is to weigh meat for customers.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 114,
    question:
      "I am a five-letter word. If you take away my first letter, I am a form of energy. If you take away my first two letters, I am needed to live. Scramble my last three letters and I am a drink. What word am I?",
    answer:
      "Wheat. Take away the W, you get 'heat' (energy). Take away the WH, you get 'eat' (needed to live). Scramble 'eat', and you get 'tea' (a drink).",
    difficulty: "Hard",
    category: "Riddle",
  },
  {
    id: 115,
    question:
      "A wealthy man lives alone in a small cottage. Being partially handicapped, he had everything delivered to his cottage. The mailman was delivering a letter one Thursday when he noticed that the front door was ajar. Through the opening, he could see the man's body lying in a pool of dried blood. On the porch were two bottles of warm milk, Monday's newspaper, a catalog, flyers, and unopened mail. The police suspect it was foul play. Who do they suspect and why?",
    answer:
      "The newspaper delivery person. The presence of Monday's paper indicates the man was alive on Monday. However, the papers for Tuesday and Wednesday are missing, suggesting that the delivery person knew the man was dead and stopped delivering them. The mail and milk deliveries continued, as those delivery people were unaware.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 116,
    question: "What is the number of the parking space covered by the car?",
    answer:
      "87. The trick is to view the image upside down. When you do, the parking space numbers are sequential: 86, [car], 88, 89, 90, 91. The covered number is 87.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 117,
    question:
      "I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?",
    answer:
      "The letter 'E'. It is in 'End', 'timE', 'spacE', 'crEation', and 'EvEry placE'.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 118,
    question:
      "If you have a 3-gallon jug and a 5-gallon jug, how can you measure out exactly 4 gallons of water?",
    answer:
      "1. Fill the 5-gallon jug. 2. Pour from the 5g jug to fill the 3g jug (leaving 2g in the 5g jug). 3. Empty the 3g jug. 4. Pour the 2g from the 5g jug into the 3g jug. 5. Fill the 5g jug again. 6. Pour from the 5g jug to fill the 3g jug (which already has 2g in it). You will pour exactly 1g, leaving exactly 4g in the 5-gallon jug.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 119,
    question:
      "What has 6 faces but does not wear makeup, and 21 eyes but cannot see?",
    answer:
      "A die (singular of dice). It has 6 faces, and the dots (pips) on the faces sum to 21 (1+2+3+4+5+6), which are referred to as 'eyes'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 120,
    question:
      "A woman is sitting in her hotel room when there is a knock at the door. She opens the door to see a man she's never seen before. He says, 'Oh I'm sorry, I have made a mistake, I thought this was my room.' He then goes down the corridor and in the elevator. The woman goes back into her room and phones security. Why?",
    answer:
      "People do not knock on their own hotel room doors. The fact that the man knocked revealed that he was lying about his reason for being there, making him suspicious.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 121,
    question: "What gets wetter and wetter the more it dries?",
    answer:
      "A towel. As a towel dries you (or something else), it absorbs the moisture, becoming wetter itself.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 122,
    question:
      "You have a single piece of paper. How many times can you fold it in half?",
    answer:
      "Typically, you can only fold a standard piece of paper in half about 7 or 8 times. This is because with each fold, the thickness doubles and the surface area halves, requiring exponentially more energy to make the next fold. The world record is 12 times, but for a standard sheet, the practical limit is much lower.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 123,
    question: "What word is spelled incorrectly in every single dictionary?",
    answer:
      "The word 'incorrectly'. It is a meta-riddle; the word itself is spelled correctly, but the riddle asks which word IS spelled 'incorrectly'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 124,
    question:
      "There is a dead man in a circular mansion. The detective interviews the butler, the maid, and the gardener. The butler says he was polishing silver in the dining room. The maid says she was dusting the corners of the library. The gardener says he was trimming the hedges outside. Who is lying?",
    answer:
      "The maid. You cannot dust the corners of a circular room because a circular room has no corners.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 125,
    question:
      "A man is walking down the road with a rooster. They are the only two on the road. The man is not walking in front of or behind the rooster, nor is he walking beside it. Where is he walking?",
    answer:
      "He is walking on the rooster's other side. The riddle tricks you into thinking of only two sides (left and right), but there is another 'beside' position.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 126,
    question: "What do an island and the letter 'T' have in common?",
    answer:
      "They are both in the middle of 'water'. The word 'island' is surrounded by water, and the letter 'T' is in the middle of the word 'waTer'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 127,
    question:
      "There are four people in a room: a pilot, a priest, a convicted murderer, and you. There are only three parachutes. The plane is going down. The pilot grabs one and says 'I have a family' and jumps. The murderer grabs one and says 'I deserve a second chance' and jumps. The priest says to you, 'Take the last one, my son. I have made my peace with God.' What do you do?",
    answer:
      "You and the priest can both have a parachute. The 'convicted murderer' might be a title for a person who is clever. Or, more simply, there are three parachutes and four people. The pilot took one, the murderer took one. There is one left. The priest offers it to you. You point out there are two parachutes left because the clever person (you) gave the priest his backpack instead of a parachute. A more common answer: The priest and I both jump. There were three parachutes. The pilot took one, the murderer took one. The priest said 'Take the last one'. But there are two people and one parachute. The riddle implies a moral dilemma, but the solution is to think about how many parachutes are left. Or maybe the convicted murderer took the priest's backpack. The most common solution: The murderer took the backpack containing the priest's clothes. No. The answer is simpler: The priest and you both take a parachute. There were 3 parachutes. Pilot took 1. Murderer took 1. One remains for the priest. What about you? The prompt has an error. It should be three people and two parachutes. Let's assume the puzzle is standard. The pilot, a doctor, and you. The pilot takes one. The doctor says 'I save lives' and takes one. You are left. Ah, the answer is lateral. The priest says, 'Take the last one.' You say, 'Don't worry, father. The world's smartest man took my backpack.' No. The real answer: Take the parachute. The priest offered it. But there are still two people. Let's go with the classic version: A pilot, a smart person, a dumb person. Smart person gives dumb person his backpack. Let's re-evaluate the original problem. The murderer jumps. The pilot jumps. The priest offers you the last one. You tell the priest they can both be saved because the murderer grabbed your backpack.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 128,
    question: "What is the next number in the series: 77, 49, 36, 18, _?",
    answer:
      "8. The pattern is not subtraction or division. Instead, you multiply the digits of the previous number. 7 * 7 = 49. 4 * 9 = 36. 3 * 6 = 18. Therefore, the next number is 1 * 8 = 8.",
    difficulty: "Medium",
    category: "Math",
  },
  {
    id: 129,
    question: "What breaks yet never falls, and what falls yet never breaks?",
    answer:
      "Day breaks and night falls. 'Daybreak' is the beginning of the day, and 'nightfall' is the beginning of the night. These are idiomatic expressions.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 130,
    question:
      "A man is asked what he does for a living. He says, 'I'm a log splitter.' The questioner asks how much he makes. He replies, 'I don't make any money, but I get a lot of satisfaction.' What does he do?",
    answer:
      "He is a comedian. A 'log splitter' can be a play on words for someone who makes people 'split their sides' with laughter. The satisfaction comes from entertaining people.",
    difficulty: "Hard",
    category: "Riddle",
  },
  {
    id: 131,
    question:
      "You see me once in June, twice in November, and not at all in May. What am I?",
    answer:
      "The letter 'E'. It appears once in 'JunE', twice in 'NovEmbEr', and not at all in 'May'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 132,
    question:
      "A man is born in 1995. In 1995, he is 25 years old. How is this possible?",
    answer:
      "He was born in room number 1995 of a hospital. The year is not specified.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 133,
    question: "What has an endless supply of letters, but starts empty?",
    answer:
      "A mailbox or a post office. It 'starts empty' each day and then gets filled with letters for delivery.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 134,
    question:
      "You are on an island with two tribes. One tribe always tells the truth, and the other always lies. You come to a fork in the road and need to find the way to the village. There is a native there, but you don't know which tribe he belongs to. What one question can you ask to find the correct path?",
    answer:
      "Point to one of the paths and ask the native, 'If I were to ask you if this is the way to the village, would you say yes?' If he is a truthteller, he would say 'yes' if it is the correct path. If he is a liar, he would be forced to lie about the 'yes' he would have said, making him also say 'yes' if it's the wrong path. The logic is a bit more direct: Ask 'Which path would a member of the other tribe tell me leads to the village?'. The truthteller knows the liar would point to the wrong path, so he points to the wrong path. The liar knows the truthteller would point to the right path, so he lies and points to the wrong path. Both will point to the wrong path, so you take the other one.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 135,
    question: "I can be cracked, made, told, and played. What am I?",
    answer:
      "A joke. You can crack a joke, make a joke, tell a joke, and play a joke on someone.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 136,
    question:
      "A woman is in a dark room with a candle, a wood stove, and a gas lamp. She only has one match. What does she light first?",
    answer:
      "The match. She needs to light the match before she can light anything else.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 137,
    question:
      "If you are in a dark room with a candle, a wood stove, a gas lamp, and only one match, what do you light first?",
    answer:
      "The match. You must light the match before you can light any of the other items.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 138,
    question:
      "A man is driving a black truck. His lights are off. The moon is not out. A woman is crossing the street. How does the man see her?",
    answer:
      "It is daytime. The riddle is designed to make you assume it's night by mentioning the lack of lights and moon.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 139,
    question: "What is the only type of cheese that is made backwards?",
    answer: "Edam. 'Edam' spelled backwards is 'made'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 140,
    question:
      "Four friends are on a hike and come to a rickety bridge at night. They have one flashlight. The bridge can only hold two people at a time. The friends walk at different speeds: one takes 1 minute to cross, one takes 2 minutes, one takes 5 minutes, and one takes 10 minutes. When two people cross, they must walk at the slower person's pace. How can they all get across in 17 minutes?",
    answer:
      "1. The 1 and 2-minute people cross (2 mins). 2. The 1-minute person brings the flashlight back (1 min). 3. The 5 and 10-minute people cross (10 mins). 4. The 2-minute person brings the flashlight back (2 mins). 5. The 1 and 2-minute people cross again (2 mins). Total time: 2 + 1 + 10 + 2 + 2 = 17 minutes.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 141,
    question:
      "It is everything to someone, and nothing to everyone else. What is it?",
    answer:
      "Your mind. Your mind contains your thoughts, feelings, and consciousness, which is everything to you, but intangible and inaccessible to others.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 142,
    question:
      "A man dies and goes to heaven. There are a thousand other people there. They are all naked and look the same. How does he find his wife?",
    answer:
      "This is a trick question based on religious context. The traditional Christian view is that there is no marriage in heaven ('For in the resurrection they neither marry, nor are given in marriage' - Matthew 22:30). So he wouldn't be looking for his wife.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 143,
    question:
      "What number do you get when you multiply all of the numbers on a telephone's number pad?",
    answer:
      "Zero. The number pad includes the number 0. Any number multiplied by zero is zero.",
    difficulty: "Easy",
    category: "Math",
  },
  {
    id: 144,
    question:
      "It cannot be seen, cannot be felt, cannot be heard, cannot be smelt. It lies behind stars and under hills, and empty holes it fills. It comes first and follows after, ends life, kills laughter. What is it?",
    answer:
      "The dark. It is the absence of light and fits all the descriptions in this riddle from 'The Hobbit'.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 145,
    question:
      "A man is found unconscious in front of a store at 2 AM. His head is bleeding and there are bricks scattered around him. What happened?",
    answer:
      "He was trying to break the store window. The sign on the window said 'Throw bricks here for a free item'. The man threw a brick at the sign, it bounced back and hit him.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 146,
    question: "What has to be broken before you can eat it?",
    answer: "An egg. You must break the shell to access the edible part.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 147,
    question:
      "There are 5 sisters in a room. Ann is reading a book, Beth is playing chess, Chloe is washing clothes, and Deb is writing a letter. What is the fifth sister, Ellie, doing?",
    answer: "Ellie is playing chess with Beth. Chess requires two players.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 148,
    question:
      "A man is on a gameshow. He can choose one of three doors. Behind one door is a car; behind the others, goats. He picks a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to the man, 'Do you want to switch your choice to door No. 2?' Is it to his advantage to switch his choice?",
    answer:
      "Yes, he should switch. This is the famous Monty Hall problem. Initially, his chosen door (No. 1) had a 1/3 chance of winning. The other two doors combined had a 2/3 chance. When the host reveals a goat behind one of the other doors (No. 3), he isn't changing the initial probability. Instead, he is concentrating the entire 2/3 probability of the 'other doors' group onto the one remaining closed door (No. 2). So, Door No. 1 still has a 1/3 chance, but Door No. 2 now has a 2/3 chance. Switching doubles his odds of winning.",
    difficulty: "Hard",
    category: "Math",
  },
  {
    id: 149,
    question: "What goes up but never comes down?",
    answer:
      "Your age. Your age continuously increases throughout your life and never decreases.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 150,
    question:
      "A girl is at her mother's funeral and meets a man she has never seen before. She falls for him instantly. A week later, she kills her sister. Why?",
    answer:
      "She hopes that the man will attend her sister's funeral, giving her another opportunity to see him.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 151,
    question: "What is the capital of Turkey?",
    answer:
      "Ankara. This is a trick question disguised as a riddle. People often mistakenly think it's Istanbul, but the actual capital is Ankara. The trick is its simplicity where one might expect a clever wordplay.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 152,
    question:
      "A man is found dead in his office. He is slumped over his desk and a gun is in his hand. A cassette recorder is on his desk. When the police arrive, they press play and hear 'I can't go on, I have nothing to live for,' followed by a gunshot. The police immediately know it's a murder. How?",
    answer:
      "The tape was rewound to the beginning. If the man had committed suicide, he would not have been able to rewind the tape.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 153,
    question:
      "I am a ship that can be made to ride the greatest waves. I am not built by tool, but built by hearts and minds. What am I?",
    answer:
      "Friendship. It's a relationship ('-ship') built by people's feelings and thoughts, and it can endure difficult times ('waves').",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 154,
    question:
      "A man is in a room with no doors or windows. The only thing in the room is a table and a mirror. How does he get out?",
    answer:
      "He looks in the mirror and sees what he 'saw'. He takes the 'saw' and cuts the table in half. Two halves make a 'whole' (hole). He climbs out through the 'hole'. This is a classic wordplay-based lateral thinking puzzle.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 155,
    question: "What can you serve, but never eat?",
    answer:
      "A tennis ball or a volleyball. In sports like tennis or volleyball, you 'serve' the ball to start a point, but you cannot eat it.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 156,
    question:
      "There are three switches outside a closed room. One of them controls a light bulb inside the room. You can flip the switches as many times as you want, but you can only enter the room once. How do you determine which switch controls the light?",
    answer:
      "Flip the first switch on and leave it on for a few minutes. Then, turn it off. Turn the second switch on and leave it on. Leave the third switch off. Enter the room immediately. If the light is on, it's the second switch. If the light is off but the bulb is warm, it's the first switch. If the light is off and the bulb is cold, it's the third switch.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 157,
    question:
      "What is a word that becomes shorter when you add two letters to it?",
    answer:
      "The word is 'short'. When you add the letters 'er' to it, it becomes 'shorter'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 158,
    question:
      "A man is trapped in a room that is slowly filling with water. There are no windows or doors. He has a straw, a rock, and a shoe. How does he survive?",
    answer:
      "He pokes a hole in the shoe with the rock, then uses the straw to drink the water. This is a joke. The real answer might be that he waits for the water to lift him to the ceiling where there is a hatch. Or perhaps there is a drain. The classic answer is wordplay: He uses the rock to break the monotony, the straw to grasp at, and the shoe to 'shoo' away the blues until he is rescued.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 159,
    question:
      "What is the one thing that all wise men, regardless of their religion or politics, agree is between heaven and earth?",
    answer:
      "The word 'and'. The phrase 'heaven and earth' literally has the word 'and' between the two words.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 160,
    question:
      "A boy and a doctor are fishing. The boy is the doctor's son, but the doctor is not the boy's father. Who is the doctor?",
    answer:
      "The doctor is the boy's mother. The riddle plays on the gender assumption that a doctor is male.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 161,
    question: "What disappears as soon as you say its name?",
    answer: "Silence. The act of speaking its name breaks it.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 162,
    question:
      "You are in a race. You overtake the last person. What position are you in?",
    answer:
      "This is impossible. If you are in the race, you cannot be behind the last person. Therefore, you cannot overtake them. The premise is flawed.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 163,
    question: "How do you make the number one disappear by adding to it?",
    answer:
      "Add the letter 'G' to the beginning of 'one', and it becomes 'gone'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 164,
    question:
      "Two men are playing chess. They play five games. Each man wins three games. How is this possible?",
    answer:
      "They were not playing against each other. They were playing against other opponents in a tournament or in separate games.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 165,
    question:
      "I can be long or short. I can be grown or bought. I can be painted or left bare. I can be round or square. What am I?",
    answer: "A fingernail. Fingernails can be all of these things.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 166,
    question:
      "A man is found dead in the ocean with a scuba suit on and a full tank of air. He has no physical injuries. What happened?",
    answer:
      "He was a victim of a forest fire. He was a scuba diver in a nearby lake or river, and a helicopter using a large bucket to collect water to fight the fire accidentally scooped him up and then dropped him over the fire, where he died from the fall.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 167,
    question:
      "If you throw a red stone into the blue sea, what will it become?",
    answer:
      "It will become wet. The colors are irrelevant; the stone will simply get wet when submerged in water.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 168,
    question: "I have branches, but no fruit, trunk, or leaves. What am I?",
    answer:
      "A bank. A bank has many 'branches' which are its different locations, but it is not a tree.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 169,
    question:
      "A man is on a gameshow where there are three doors. Behind one is a car and behind the other two are goats. He picks door #1. The host, who knows what's behind the doors, opens door #3 to reveal a goat. Should the contestant switch to door #2?",
    answer:
      "Yes, absolutely. This is the Monty Hall Problem. Initially, his chosen door has a 1/3 chance of being correct. The other two doors have a combined 2/3 chance. When the host reveals a goat, he is providing new information. The 2/3 probability of the other two doors is now concentrated on the single remaining door (#2). By switching, he increases his probability of winning from 1/3 to 2/3.",
    difficulty: "Hard",
    category: "Math",
  },
  {
    id: 170,
    question:
      "A man marries 20 women in his village but isn't charged with polygamy. How?",
    answer:
      "He is a priest or other religious official who is authorized to perform marriage ceremonies. He is marrying them to other people, not to himself.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 171,
    question:
      "What is the next number in the sequence: 1, 11, 21, 1211, 111221, ...?",
    answer:
      "312211. This is a 'look-and-say' sequence. Each term describes the previous term. '1' is 'one 1' (11). '11' is 'two 1s' (21). '21' is 'one 2, one 1' (1211). '1211' is 'one 1, one 2, two 1s' (111221). Therefore, '111221' is 'three 1s, two 2s, one 1' (312211).",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 172,
    question: "You can see me in water, but I never get wet. What am I?",
    answer:
      "A reflection. Your reflection appears on the surface of the water, but it is just an image made of light and cannot get wet.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 173,
    question:
      "A man buys a new car and goes home to tell his wife. He goes the wrong way down a one-way street, takes a right at a no-right-turn sign, and goes past a cop car. The cops see him but do nothing. Why?",
    answer: "He was walking home, not driving the new car.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 174,
    question: "What flies without wings?",
    answer:
      "Time. The expression 'time flies' means that time passes quickly. Time itself does not have wings.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 175,
    question:
      "A man is in a boat in the middle of the ocean. He is surrounded by sharks. He has a gun with one bullet. What should he do?",
    answer:
      "Shoot the gun into the water. This is a wordplay riddle. The question asks 'What should he do?'. The answer is 'He should do nothing, because he is in a boat, safe from the sharks'. However, the more common clever answer is: He shoots the gun in the air to signal for help. Or, another one: He shoots one shark, the others go into a feeding frenzy, and he escapes. But the best answer is likely a simple one: Stay in the boat.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 176,
    question:
      "When you have me, you immediately feel the need to share me. But if you do share me, I am gone. What am I?",
    answer:
      "A secret. The nature of a secret creates a desire to tell someone, but the act of telling it eliminates its status as a secret.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 177,
    question:
      "A king has no sons, no daughters, and no queen. For this reason, he must decide who will take the throne after he dies. He decides that he will give every child in the kingdom a single seed. He tells them to take the seed, plant it, and return in one year with the plant they have grown. The child with the most beautiful plant will be the next ruler. A girl named Lina plants her seed, but it never sprouts. She returns a year later with an empty pot. The king chooses her to be the next queen. Why?",
    answer:
      "The king had boiled all the seeds before giving them out, so none of them could have possibly grown. Lina was the only child who was honest about her result. All the other children had replaced the boiled seed with a different one to grow a beautiful plant. The king valued her honesty above all else.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 178,
    question: "What English word has three consecutive double letters?",
    answer: "Bookkeeper. It has 'oo', 'kk', and 'ee' consecutively.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 179,
    question:
      "How can you drop a raw egg onto a concrete floor without cracking it?",
    answer:
      "The concrete floor is very hard to crack. The egg will crack, but the floor will be fine. The question is worded to mislead you into thinking about how to protect the egg.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 180,
    question:
      "I am a five-letter word and people eat me. If you remove the first letter, I become a form of energy. Remove the first two and I’m needed for living. What am I?",
    answer:
      "Wheat. People eat it. Remove the 'W' and you have 'heat' (energy). Remove 'WH' and you have 'eat' (needed for living).",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 181,
    question:
      "What is the smallest number of cars you would need to have to be able to say that you have: two cars in front of a car, two cars behind a car, and a car between two cars?",
    answer:
      "Three cars. If you line up three cars in a row, the first car has two cars behind it, the last car has two cars in front of it, and the middle car is between two cars.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 182,
    question:
      "I have no voice and I must be broken before I can be used. I can hold secrets, but anyone can read me. What am I?",
    answer:
      "A code or a cipher. A code must be 'broken' or deciphered to be understood. It can hold secret information, and once broken, anyone with the key can read it.",
    difficulty: "Hard",
    category: "Riddle",
  },
  {
    id: 183,
    question:
      "If you have 5 fish and 3 of them drown, how many fish do you have left?",
    answer: "You still have 5 fish. Fish live in water and cannot drown.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 184,
    question: "What gets bigger the more you take away from it?",
    answer:
      "A hole. As you remove more dirt or material, the hole grows larger.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 185,
    question:
      "A man is in a room with only a bed and a calendar. He eats a date every day. After a week, he dies. How?",
    answer:
      "He ate the dates from the calendar. After a week, he ran out of food and starved. This is wordplay on the two meanings of 'date'.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 186,
    question: "What is the only place where today comes before yesterday?",
    answer:
      "A dictionary. In a dictionary, words are listed alphabetically, so 'today' appears before 'yesterday'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 187,
    question:
      "You have 9 dots arranged in a 3x3 square. How can you connect all 9 dots with only 4 straight lines without lifting your pen from the paper?",
    answer:
      "This is the classic 'thinking outside the box' puzzle. To solve it, your lines must extend beyond the boundaries of the square of dots. Start at a corner, draw diagonally through the center to the opposite corner, then draw a line horizontally along the top row but extend past the last dot. Then draw another diagonal line down to the bottom corner, and finally a vertical line up through the last column.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 188,
    question:
      "I am a fruit. If you take away my first letter, I am a crime. If you take away my first two letters, I am an animal. If you take away my first and last letter, I am a form of music. What am I?",
    answer:
      "Grape. Take away G -> Rape (crime). Take away GR -> Ape (animal). Take away G and E -> Rap (music).",
    difficulty: "Hard",
    category: "Riddle",
  },
  {
    id: 189,
    question:
      "There are 10 birds on a fence. A man shoots one. How many are left?",
    answer:
      "None. The sound of the gunshot would scare all the other birds away.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 190,
    question: "What is 3/7 chicken, 2/3 cat, and 2/4 goat?",
    answer:
      "Chicago. The letters are taken from the words: 'Chi' from chicken, 'ca' from cat, and 'go' from goat.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 191,
    question:
      "Two friends, standing on opposite sides of a river, shout to each other. One says, 'How do I get to the other side?' The other one shouts back, 'You are on the other side!' How is this possible?",
    answer:
      "They are each on 'the other side' from the other person's perspective. It's a matter of point of view.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 192,
    question: "What can you find in the middle of nowhere?",
    answer:
      "The letters 'wh'. The word 'nowhere' has 'wh' in the middle of it.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 193,
    question:
      "A man is dead in a cabin in the mountains. He died of hypothermia, but the cabin is locked from the inside and there is a fire in the fireplace. How did he die?",
    answer:
      "The cabin is the cabin of an airplane that has crashed. He is a survivor of the crash, but died from the cold at high altitude.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 194,
    question: "What has a bottom at the top?",
    answer:
      "Your legs. The 'bottom' part of your legs (your feet) are at the top of your shoes, but also your 'bottom' (buttocks) is at the top of your legs.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 195,
    question:
      "A man tells his son that he will give him $1000 if he can solve a riddle. He places three boxes on a table. One contains gold, the other two are empty. The boxes are labeled: Box 1: 'The gold is not in Box 2'. Box 2: 'The gold is not in this box'. Box 3: 'The gold is in this box'. The man tells his son that at least one statement is true and at least one is false. Which box has the gold?",
    answer:
      "The gold is in Box 2. Let's test the possibilities. If gold is in Box 1: Statement 1 is true, Statement 2 is true, Statement 3 is false. (Two true, one false). If gold is in Box 2: Statement 1 is true, Statement 2 is false, Statement 3 is false. (One true, two false - this fits). If gold is in Box 3: Statement 1 is true, Statement 2 is true, Statement 3 is true. (Three true). The only scenario that fits the condition of 'at least one true and at least one false' is the gold being in Box 2.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 196,
    question: "What is the one thing you can never put in a saucepan?",
    answer:
      "Its lid. You can put the lid ON the saucepan, but you cannot put it IN the saucepan.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 197,
    question:
      "A man is found shot to death in his car. There are no powder marks on his clothing, which indicates that the gun was fired from more than a few feet away. However, all the windows were up and the doors were locked. There are no bullet holes in the car. How was he killed?",
    answer:
      "The man was in a convertible. The top was down, allowing the shooter to have a clear shot from a distance. After the man was killed, the shooter put the top up and locked the doors.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 198,
    question:
      "What is the only sport in which the ball is smaller than the net it goes through, but the players can't touch the ball with their hands or feet?",
    answer:
      "Polo. Players ride on horseback and use mallets to hit a small ball into a large goal.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 199,
    question:
      "I have an end, but no beginning, a home, but no family, a space, but no room. I never speak, but there is no word I cannot form. What am I?",
    answer:
      "A keyboard. It has an 'End' key, a 'Home' key, a 'Space' bar, but is just a device. It doesn't speak, but can be used to type any word.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 200,
    question:
      "A man is attending a meeting. He is a very light sleeper. During a presentation, he falls asleep. He dreams that he is a prisoner during the French Revolution, and is about to be beheaded by a guillotine. Just as the blade is about to fall, his colleague taps him on the back of the neck to wake him up. The man dies instantly from a heart attack. Why is this story impossible?",
    answer:
      "The story is impossible because no one could know what the man was dreaming about if he died instantly upon being woken up. He never had a chance to tell anyone his dream.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 201,
    question:
      "You have two ropes, each burning for exactly 60 minutes but unevenly. How can you measure exactly 45 minutes?",
    answer:
      "Light rope A at both ends and rope B at one end. Rope A will burn in 30 minutes. Then light the other end of rope B, which burns in 15 minutes. Total = 45 minutes.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 202,
    question:
      "A man walks into a room with 3 switches and a closed door. Behind the door are 3 light bulbs. How can he determine which switch controls which bulb if he can only open the door once?",
    answer:
      "Turn on switch 1 for a few minutes, then turn it off. Turn on switch 2 and leave it on. Open the door: the bulb that is on is switch 2, the warm bulb is switch 1, and the cold off bulb is switch 3.",
    difficulty: "Medium",
    category: "Logic",
  },
  {
    id: 203,
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    answer:
      "An echo. It repeats sounds without having a mouth or ears, and can seem to 'come alive' in open spaces.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 204,
    question:
      "A farmer has 17 sheep and all but 9 die. How many are left alive?",
    answer: "9. The phrasing 'all but 9 die' means 9 are still alive.",
    difficulty: "Easy",
    category: "Math",
  },
  {
    id: 205,
    question:
      "You have a 3-liter jug and a 5-liter jug. How can you measure exactly 4 liters of water?",
    answer:
      "Fill the 5-liter jug and pour into the 3-liter jug until full, leaving 2 liters in the 5-liter jug. Empty the 3-liter jug and pour the 2 liters into it. Fill the 5-liter jug again and pour 1 liter into the 3-liter jug to fill it. 4 liters remain in the 5-liter jug.",
    difficulty: "Medium",
    category: "Math",
  },
  {
    id: 206,
    question:
      "A man pushes his car to a hotel and tells the owner he’s bankrupt. Why?",
    answer:
      "He’s playing Monopoly. Pushing the car is part of the game piece, and landing on the hotel causes bankruptcy.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 207,
    question: "Which weighs more, a pound of feathers or a pound of bricks?",
    answer: "They weigh the same: one pound each.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 208,
    question:
      "A man leaves home running. He turns left three times and returns home. Who is he?",
    answer:
      "He’s playing baseball. Home plate, running bases, turning left three times brings him back home.",
    difficulty: "Medium",
    category: "Lateral",
  },
  {
    id: 209,
    question: "What has keys but can’t open locks?",
    answer: "A piano. It has keys but cannot open anything physically.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 210,
    question:
      "I am an odd number. Take away a letter and I become even. What number am I?",
    answer: "Seven. Remove the 's' and it becomes 'even'.",
    difficulty: "Easy",
    category: "Riddle",
  },
  {
    id: 211,
    question:
      "You’re in a room with a single match, a kerosene lamp, a candle, and a fireplace. What do you light first?",
    answer: "The match. You need it to light anything else.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 212,
    question:
      "If it takes 5 machines 5 minutes to make 5 gadgets, how long would 100 machines take to make 100 gadgets?",
    answer:
      "5 minutes. Each machine makes a gadget in 5 minutes, so 100 machines make 100 gadgets in the same 5 minutes.",
    difficulty: "Medium",
    category: "Math",
  },
  {
    id: 213,
    question:
      "A man was born in 1955 and died in 2005 at the age of 50. How is this possible?",
    answer:
      "He was born in room 1955 of a hospital and died in room 2005; it’s not years, it’s room numbers.",
    difficulty: "Hard",
    category: "Lateral",
  },
  {
    id: 214,
    question: "Forward I am heavy, backward I am not. What am I?",
    answer: "Ton. Forward it's 'ton' (heavy), backward 'not'.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 215,
    question: "Divide 30 by 1/2 and add 10. What’s the answer?",
    answer: "70. 30 ÷ 1/2 = 60, then add 10 = 70.",
    difficulty: "Medium",
    category: "Math",
  },
  {
    id: 216,
    question:
      "A plane crashes on the border of two countries. Where do they bury the survivors?",
    answer: "Nowhere. Survivors aren’t buried.",
    difficulty: "Easy",
    category: "Logic",
  },
  {
    id: 217,
    question:
      "A man wants to cross a river with a fox, a chicken, and grain. He can only carry one at a time. How does he do it?",
    answer:
      "Take the chicken first, return alone, take the fox, bring back the chicken, take the grain, return alone, then take the chicken. None are eaten.",
    difficulty: "Hard",
    category: "Logic",
  },
  {
    id: 218,
    question:
      "You see a house with all four sides facing south. A bear walks past. What color is the bear?",
    answer:
      "White. The house is at the North Pole, so the bear is a polar bear.",
    difficulty: "Medium",
    category: "Riddle",
  },
  {
    id: 219,
    question:
      "A dad and son get into a car accident. The dad dies at the scene. The son is rushed to the hospital. The doctor says, 'I can’t operate on him, he’s my son.' How is this possible?",
    answer: "The doctor is the boy’s mother.",
    difficulty: "Easy",
    category: "Lateral",
  },
  {
    id: 220,
    question:
      "If you have me, you want to share me. If you share me, you haven’t got me. What am I?",
    answer: "A secret.",
    difficulty: "Easy",
    category: "Riddle",
  },
];

export default brainTeasers;
