import type { QuizType } from "@/pages/USER/QuickQuiz";

const quizzes: QuizType[] = [
  {
    id: 1,
    subject: "Mathematics",
    question: "What is the value of 'x' in the equation 3x - 7 = 14?",
    options: {
      A: "5",
      B: "7",
      C: "21",
      D: "3",
    },
    correctAnswer: "B",
    explanation:
      "To solve for x, first add 7 to both sides (3x = 21), then divide both sides by 3 (x = 7).",
  },
  {
    id: 2,
    subject: "English",
    question: "Which of the following words is a synonym for 'happy'?",
    options: {
      A: "Sorrowful",
      B: "Joyful",
      C: "Angry",
      D: "Tired",
    },
    correctAnswer: "B",
    explanation:
      "A synonym is a word that has the same or nearly the same meaning as another word. 'Joyful' means feeling, expressing, or causing great pleasure and happiness.",
  },
  {
    id: 3,
    subject: "Kiswahili",
    question: "Kamilisha methali: 'Haraka haraka ...'",
    options: {
      A: "haina baraka",
      B: "hujaza kibaba",
      C: "huzaa mwana",
      D: "ni ya shetani",
    },
    correctAnswer: "A",
    explanation:
      "Methali kamili ni 'Haraka haraka haina baraka', ikimaanisha kwamba mambo yanayofanywa kwa pupa hayafanikiwi vizuri.",
  },
  {
    id: 4,
    subject: "Social Studies",
    question: "Who was the first president of Kenya?",
    options: {
      A: "Daniel arap Moi",
      B: "Mwai Kibaki",
      C: "Jomo Kenyatta",
      D: "Uhuru Kenyatta",
    },
    correctAnswer: "C",
    explanation:
      "Jomo Kenyatta was the first president of Kenya, serving from 1964 until his death in 1978.",
  },
  {
    id: 5,
    subject: "Agriculture",
    question:
      "Which of the following is a leguminous crop known for fixing nitrogen in the soil?",
    options: {
      A: "Maize",
      B: "Wheat",
      C: "Beans",
      D: "Potatoes",
    },
    correctAnswer: "C",
    explanation:
      "Legumes, such as beans, have root nodules that house nitrogen-fixing bacteria, which convert atmospheric nitrogen into a form plants can use, thereby enriching the soil.",
  },
  {
    id: 6,
    subject: "Home Science",
    question: "Which food group is the primary source of energy for the body?",
    options: {
      A: "Proteins",
      B: "Vitamins",
      C: "Carbohydrates",
      D: "Fats and Oils",
    },
    correctAnswer: "C",
    explanation:
      "Carbohydrates are the body's main source of energy. They are broken down into glucose, which fuels cells, tissues, and organs.",
  },
  {
    id: 7,
    subject: "Pre-Technical Studies",
    question:
      "In technical drawing, what does a short-dashed line typically represent?",
    options: {
      A: "Center lines",
      B: "Cutting planes",
      C: "Visible outlines",
      D: "Hidden details",
    },
    correctAnswer: "D",
    explanation:
      "Short-dashed lines, also known as hidden lines, are used in technical drawings to show edges, surfaces, or corners of an object that are hidden from view.",
  },
  {
    id: 8,
    subject: "Creative Art",
    question: "Red, yellow, and blue are known as what type of colors?",
    options: {
      A: "Secondary colors",
      B: "Tertiary colors",
      C: "Primary colors",
      D: "Complementary colors",
    },
    correctAnswer: "C",
    explanation:
      "Primary colors (red, yellow, blue) are the fundamental colors from which all other colors are mixed. They cannot be created by mixing other colors.",
  },
  {
    id: 9,
    subject: "sports",
    question:
      "How many players are on a standard football (soccer) team on the field at the start of a match?",
    options: {
      A: "7",
      B: "9",
      C: "11",
      D: "15",
    },
    correctAnswer: "C",
    explanation:
      "A standard football match is played by two teams, each with a maximum of eleven players on the field, one of whom must be the goalkeeper.",
  },
  {
    id: 10,
    subject: "Mathematics",
    question:
      "What is the area of a rectangle with a length of 12 cm and a width of 5 cm?",
    options: {
      A: "17 cm²",
      B: "34 cm²",
      C: "60 cm²",
      D: "144 cm²",
    },
    correctAnswer: "C",
    explanation:
      "The area of a rectangle is calculated by multiplying its length by its width (Area = L × W). So, 12 cm × 5 cm = 60 cm².",
  },
  {
    id: 11,
    subject: "English",
    question:
      "Identify the figure of speech in the sentence: 'The wind whispered through the trees.'",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Hyperbole",
    },
    correctAnswer: "C",
    explanation:
      "Personification is a figure of speech where human qualities or abilities are given to inanimate objects. The wind cannot literally 'whisper'.",
  },
  {
    id: 12,
    subject: "Kiswahili",
    question: "Neno 'gari' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "I-ZI",
      C: "LI-YA",
      D: "U-I",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'gari' liko katika ngeli ya LI-YA. Katika umoja ni 'gari' (li-) na katika wingi ni 'magari' (ya-).",
  },
  {
    id: 13,
    subject: "Social Studies",
    question:
      "The Great Rift Valley is a major physical feature in which continent?",
    options: {
      A: "Asia",
      B: "South America",
      C: "Africa",
      D: "Europe",
    },
    correctAnswer: "C",
    explanation:
      "The Great Rift Valley is a series of contiguous geographic trenches, approximately 7,000 kilometres in total length, that runs from the Beqaa Valley in Lebanon in Asia to Mozambique in Southeastern Africa.",
  },
  {
    id: 14,
    subject: "Agriculture",
    question:
      "What is the practice of growing two or more crops in the same piece of land during the same growing season known as?",
    options: {
      A: "Monocropping",
      B: "Intercropping",
      C: "Crop rotation",
      D: "Shifting cultivation",
    },
    correctAnswer: "B",
    explanation:
      "Intercropping is the cultivation of two or more crops simultaneously on the same field. It is a form of polyculture, and it often improves soil fertility and maximizes land use.",
  },
  {
    id: 15,
    subject: "Home Science",
    question:
      "What is the first step in providing first aid to a person with a minor cut?",
    options: {
      A: "Apply a bandage",
      B: "Wash your hands",
      C: "Apply antiseptic",
      D: "Stop the bleeding",
    },
    correctAnswer: "B",
    explanation:
      "Before treating any wound, it is crucial to wash your hands with soap and water to prevent transferring bacteria and causing an infection.",
  },
  {
    id: 16,
    subject: "Pre-Technical Studies",
    question:
      "Which tool is best suited for marking lines parallel to the edge of a piece of wood?",
    options: {
      A: "Try square",
      B: "Marking gauge",
      C: "Sliding bevel",
      D: "Steel rule",
    },
    correctAnswer: "B",
    explanation:
      "A marking gauge is a specialized tool used in woodworking to scribe a line parallel to a reference edge or surface.",
  },
  {
    id: 17,
    subject: "Creative Art",
    question: "What is a 'monochromatic' color scheme?",
    options: {
      A: "A scheme using colors opposite each other on the color wheel",
      B: "A scheme using many different bright colors",
      C: "A scheme using only black and white",
      D: "A scheme based on several tints and shades of a single hue",
    },
    correctAnswer: "D",
    explanation:
      "A monochromatic color scheme uses variations in lightness and saturation of a single color. It is derived from a single base hue and extended using its shades, tones, and tints.",
  },
  {
    id: 18,
    subject: "sports",
    question: "In athletics, what is the standard distance of a marathon race?",
    options: {
      A: "26.2 kilometers",
      B: "42.2 kilometers",
      C: "10 kilometers",
      D: "21.1 kilometers",
    },
    correctAnswer: "B",
    explanation:
      "The official distance for a marathon is 42.195 kilometers (approximately 26.2 miles).",
  },
  {
    id: 19,
    subject: "Mathematics",
    question:
      "If a circle has a radius of 7 cm, what is its circumference? (Use π ≈ 22/7)",
    options: {
      A: "22 cm",
      B: "44 cm",
      C: "154 cm",
      D: "49 cm",
    },
    correctAnswer: "B",
    explanation:
      "The formula for the circumference of a circle is C = 2πr. So, C = 2 * (22/7) * 7 cm = 44 cm.",
  },
  {
    id: 20,
    subject: "English",
    question:
      "Choose the correct verb to complete the sentence: 'Neither the students nor the teacher ____ present.'",
    options: {
      A: "were",
      B: "was",
      C: "are",
      D: "have been",
    },
    correctAnswer: "B",
    explanation:
      "When using 'neither/nor' or 'either/or', the verb agrees with the noun or pronoun closest to it. In this case, 'teacher' is singular, so the verb 'was' is correct.",
  },
  {
    id: 21,
    subject: "Kiswahili",
    question: "Neno 'simba' lina silabi ngapi?",
    options: {
      A: "Moja",
      B: "Mbili",
      C: "Tatu",
      D: "Nne",
    },
    correctAnswer: "B",
    explanation: "Neno 'simba' lina silabi mbili: 'sim' na 'ba'.",
  },
  {
    id: 22,
    subject: "Social Studies",
    question: "Which of these is a function of the legislature in Kenya?",
    options: {
      A: "To interpret laws",
      B: "To implement laws",
      C: "To make laws",
      D: "To arrest criminals",
    },
    correctAnswer: "C",
    explanation:
      "The legislature (Parliament, consisting of the National Assembly and the Senate) is the arm of government responsible for creating, amending, and repealing laws.",
  },
  {
    id: 23,
    subject: "Agriculture",
    question:
      "Which type of soil is characterized by fine particles, feels sticky when wet, and has poor drainage?",
    options: {
      A: "Sandy soil",
      B: "Loam soil",
      C: "Clay soil",
      D: "Silt soil",
    },
    correctAnswer: "C",
    explanation:
      "Clay soil consists of very fine particles. It retains a lot of water, which makes it sticky when wet and slow to drain. It can be very fertile but is hard to work.",
  },
  {
    id: 24,
    subject: "Home Science",
    question:
      "A balanced diet should contain adequate amounts of which nutrients?",
    options: {
      A: "Only carbohydrates and proteins",
      B: "Only vitamins and minerals",
      C: "Carbohydrates, proteins, fats, vitamins, minerals, and water",
      D: "Only fats and water",
    },
    correctAnswer: "C",
    explanation:
      "A balanced diet provides all the essential nutrients your body needs to function correctly, including carbohydrates, proteins, fats, vitamins, minerals, fibre and water.",
  },
  {
    id: 25,
    subject: "Pre-Technical Studies",
    question: "Which of the following is a primary safety rule in a workshop?",
    options: {
      A: "Working as fast as possible",
      B: "Wearing appropriate personal protective equipment (PPE)",
      C: "Keeping the tools anywhere you like",
      D: "Listening to loud music while working",
    },
    correctAnswer: "B",
    explanation:
      "Wearing appropriate PPE, such as safety glasses, gloves, and proper footwear, is a fundamental rule to protect yourself from injuries in a workshop environment.",
  },
  {
    id: 26,
    subject: "Creative Art",
    question: "The illusion of depth on a flat surface is called?",
    options: {
      A: "Pattern",
      B: "Texture",
      C: "Perspective",
      D: "Balance",
    },
    correctAnswer: "C",
    explanation:
      "Perspective in art is the technique used to represent three-dimensional objects and space on a two-dimensional surface, creating an impression of their height, width, depth, and position in relation to each other.",
  },
  {
    id: 27,
    subject: "sports",
    question:
      "Which Kenyan athlete is known as the 'King of the Steeplechase'?",
    options: {
      A: "Eliud Kipchoge",
      B: "David Rudisha",
      C: "Ezekiel Kemboi",
      D: "Paul Tergat",
    },
    correctAnswer: "C",
    explanation:
      "Ezekiel Kemboi is a celebrated Kenyan athlete who specialized in the 3000 metres steeplechase, winning multiple Olympic and World Championship gold medals in the event.",
  },
  {
    id: 28,
    subject: "Mathematics",
    question:
      "Calculate the simple interest on a principal of Ksh. 5,000 for 2 years at a rate of 10% per annum.",
    options: {
      A: "Ksh. 500",
      B: "Ksh. 1,000",
      C: "Ksh. 2,000",
      D: "Ksh. 10,000",
    },
    correctAnswer: "B",
    explanation:
      "Simple Interest (I) is calculated as I = P × R × T, where P is principal, R is rate, and T is time. So, I = 5000 × (10/100) × 2 = Ksh. 1,000.",
  },
  {
    id: 29,
    subject: "English",
    question: "An autobiography is a story of a person's life written by ____.",
    options: {
      A: "a journalist",
      B: "another person",
      C: "that person himself or herself",
      D: "a family member",
    },
    correctAnswer: "C",
    explanation:
      "An autobiography is a self-written account of one's own life. A biography, on the other hand, is written by someone else.",
  },
  {
    id: 30,
    subject: "Kiswahili",
    question: "Kitabu, kiti na meza ni mifano ya nomino za aina gani?",
    options: {
      A: "Nomino za pekee",
      B: "Nomino za kawaida",
      C: "Nomino za dhahania",
      D: "Nomino za jamii",
    },
    correctAnswer: "B",
    explanation:
      "Nomino za kawaida ni majina ya vitu, watu au mahali kwa jumla. 'Kitabu', 'kiti' na 'meza' ni majina ya jumla ya vitu visivyo na uhai.",
  },
  {
    id: 31,
    subject: "Social Studies",
    question: "What is the capital city of Tanzania?",
    options: {
      A: "Nairobi",
      B: "Kampala",
      C: "Dodoma",
      D: "Dar es Salaam",
    },
    correctAnswer: "C",
    explanation:
      "Dodoma is the official political capital city of Tanzania. Dar es Salaam serves as a major commercial port and the former capital.",
  },
  {
    id: 32,
    subject: "Agriculture",
    question:
      "The process by which plants lose water vapor through small pores in their leaves is called?",
    options: {
      A: "Photosynthesis",
      B: "Respiration",
      C: "Transpiration",
      D: "Germination",
    },
    correctAnswer: "C",
    explanation:
      "Transpiration is the process of water movement through a plant and its evaporation from aerial parts, such as leaves, stems and flowers.",
  },
  {
    id: 33,
    subject: "Home Science",
    question:
      "Which of these is a method of preserving food by removing moisture?",
    options: {
      A: "Freezing",
      B: "Canning",
      C: "Drying",
      D: "Pickling",
    },
    correctAnswer: "C",
    explanation:
      "Drying (or dehydration) is a food preservation method that works by removing water or moisture from the food, which inhibits the growth of bacteria, yeasts, and mold.",
  },
  {
    id: 34,
    subject: "Pre-Technical Studies",
    question:
      "Which type of wood comes from coniferous trees and is generally softer?",
    options: {
      A: "Hardwood",
      B: "Softwood",
      C: "Plywood",
      D: "MDF",
    },
    correctAnswer: "B",
    explanation:
      "Softwood comes from gymnosperm trees, which are usually evergreen conifers like pine or fir. It is generally less dense than hardwood.",
  },
  {
    id: 35,
    subject: "Creative Art",
    question:
      "What is the term for the area around and between the subjects of an image?",
    options: {
      A: "Positive space",
      B: "Negative space",
      C: "Foreground",
      D: "Background",
    },
    correctAnswer: "B",
    explanation:
      "Negative space, in art, is the space around and between the subject(s) of an image. It is just as important as the positive space (the subject itself) in creating a balanced composition.",
  },
  {
    id: 36,
    subject: "sports",
    question: "In basketball, how many points is a free throw worth?",
    options: {
      A: "One point",
      B: "Two points",
      C: "Three points",
      D: "Four points",
    },
    correctAnswer: "A",
    explanation:
      "A free throw is an unopposed attempt to score a basket, worth one point, from a line 15 feet (4.6 m) from the basket.",
  },
  {
    id: 37,
    subject: "Mathematics",
    question: "What is the sum of the interior angles of a triangle?",
    options: {
      A: "90 degrees",
      B: "180 degrees",
      C: "270 degrees",
      D: "360 degrees",
    },
    correctAnswer: "B",
    explanation:
      "A fundamental theorem in Euclidean geometry states that the sum of the measures of the three interior angles in any triangle is always 180 degrees.",
  },
  {
    id: 38,
    subject: "English",
    question: "What is the plural form of the word 'child'?",
    options: {
      A: "Childs",
      B: "Childes",
      C: "Children",
      D: "Childrens",
    },
    correctAnswer: "C",
    explanation: "'Child' is an irregular noun. Its plural form is 'children'.",
  },
  {
    id: 39,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'panda' ni nini?",
    options: {
      A: "Ruka",
      B: "Inua",
      C: "Shuka",
      D: "Simama",
    },
    correctAnswer: "C",
    explanation:
      "Kinyume (antonym) cha kitenzi 'panda' ni 'shuka'. Unapanda mlima na kisha unashuka mlima.",
  },
  {
    id: 40,
    subject: "Social Studies",
    question:
      "The process by which the constitution of a country is changed or modified is known as?",
    options: {
      A: "Referendum",
      B: "Legislation",
      C: "Amendment",
      D: "Devolution",
    },
    correctAnswer: "C",
    explanation:
      "An amendment is a formal or official change made to a law, contract, constitution, or other legal document.",
  },
  {
    id: 41,
    subject: "Agriculture",
    question: "Which of these is a common pest that attacks maize crops?",
    options: {
      A: "Aphid",
      B: "Boll weevil",
      C: "Stalk borer",
      D: "Tsetse fly",
    },
    correctAnswer: "C",
    explanation:
      "The maize stalk borer is a significant pest of maize in Africa. Its larvae bore into the stems of the maize plant, causing damage and reducing yield.",
  },
  {
    id: 42,
    subject: "Home Science",
    question: "What is the main function of protein in the human body?",
    options: {
      A: "Providing energy",
      B: "Insulating the body",
      C: "Building and repairing tissues",
      D: "Regulating body temperature",
    },
    correctAnswer: "C",
    explanation:
      "Proteins are essential for growth, as well as for the repair and maintenance of all body tissues, including muscles, organs, and the immune system.",
  },
  {
    id: 43,
    subject: "Pre-Technical Studies",
    question:
      "A drawing that shows an object as it appears to the eye is called a...",
    options: {
      A: "Schematic drawing",
      B: "Orthographic projection",
      C: "Isometric drawing",
      D: "Perspective drawing",
    },
    correctAnswer: "D",
    explanation:
      "Perspective drawing is a technique used to create a realistic depiction of an object by representing depth and distance on a flat surface, much like how the human eye perceives it.",
  },
  {
    id: 44,
    subject: "Creative Art",
    question:
      "A sculpture that is not attached to a background and can be viewed from all sides is known as?",
    options: {
      A: "A relief",
      B: "A mobile",
      C: "An installation",
      D: "Freestanding",
    },
    correctAnswer: "D",
    explanation:
      "A freestanding sculpture, or sculpture in-the-round, is unattached to a background and has space on all sides. It is meant to be viewed from any angle.",
  },
  {
    id: 45,
    subject: "sports",
    question: "What is the national sport of Kenya?",
    options: {
      A: "Football",
      B: "Rugby",
      C: "Athletics",
      D: "Cricket",
    },
    correctAnswer: "C",
    explanation:
      "While football is very popular, athletics (especially long-distance running) is considered Kenya's de facto national sport due to the country's immense international success and cultural significance.",
  },
  {
    id: 46,
    subject: "Mathematics",
    question:
      "Find the average (mean) of the following numbers: 4, 8, 9, 3, 6.",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    correctAnswer: "B",
    explanation:
      "To find the mean, you add all the numbers together and divide by the count of the numbers. (4 + 8 + 9 + 3 + 6) / 5 = 30 / 5 = 6.",
  },
  {
    id: 47,
    subject: "English",
    question: "Which of these sentences is grammatically correct?",
    options: {
      A: "He done his work yesterday.",
      B: "He did his work yesterday.",
      C: "He have done his work yesterday.",
      D: "He do his work yesterday.",
    },
    correctAnswer: "B",
    explanation:
      "The sentence is in the past tense, so the simple past form of the verb 'do', which is 'did', is the correct choice.",
  },
  {
    id: 48,
    subject: "Kiswahili",
    question: "Neno 'shule' lina asili ya lugha gani?",
    options: {
      A: "Kiarabu",
      B: "Kireno",
      C: "Kijerumani",
      D: "Kibantu",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'shule' ni neno kopwa kutoka lugha ya Kijerumani, 'Schule', ambalo linamaanisha mahali pa masomo.",
  },
  {
    id: 49,
    subject: "Social Studies",
    question: "Which ocean borders Kenya to the east?",
    options: {
      A: "Atlantic Ocean",
      B: "Pacific Ocean",
      C: "Arctic Ocean",
      D: "Indian Ocean",
    },
    correctAnswer: "D",
    explanation:
      "Kenya has a coastline on the Indian Ocean, which lies to its east and southeast.",
  },
  {
    id: 50,
    subject: "Agriculture",
    question: "What is the term for the rearing of fish for food?",
    options: {
      A: "Apiculture",
      B: "Aquaculture",
      C: "Horticulture",
      D: "Sericulture",
    },
    correctAnswer: "B",
    explanation:
      "Aquaculture is the farming of fish, crustaceans, mollusks, aquatic plants, algae, and other organisms. Apiculture is bee-keeping, horticulture is garden cultivation, and sericulture is silk farming.",
  },
  {
    id: 51,
    subject: "Home Science",
    question: "Iron is a mineral that is essential for...",
    options: {
      A: "Strong bones and teeth",
      B: "The formation of hemoglobin in red blood cells",
      C: "Good eyesight",
      D: "Maintaining fluid balance",
    },
    correctAnswer: "B",
    explanation:
      "Iron is a crucial component of hemoglobin, the protein in red blood cells that carries oxygen from the lungs to the rest of the body. A deficiency in iron can lead to anemia.",
  },
  {
    id: 52,
    subject: "Pre-Technical Studies",
    question: "Which of these materials is a good electrical insulator?",
    options: {
      A: "Copper",
      B: "Aluminum",
      C: "Steel",
      D: "Rubber",
    },
    correctAnswer: "D",
    explanation:
      "An electrical insulator is a material whose internal electric charges do not flow freely. Rubber is an excellent insulator, which is why it's used to cover electrical wires.",
  },
  {
    id: 53,
    subject: "Creative Art",
    question:
      "The art of folding paper to create decorative shapes and figures is called?",
    options: {
      A: "Origami",
      B: "Calligraphy",
      C: "Macramé",
      D: "Pottery",
    },
    correctAnswer: "A",
    explanation:
      "Origami is the Japanese art of paper folding. 'Ori' means 'folding' and 'kami' means 'paper'.",
  },
  {
    id: 54,
    subject: "sports",
    question:
      "How many rounds are there in a standard Olympic boxing match for men?",
    options: {
      A: "3",
      B: "5",
      C: "10",
      D: "12",
    },
    correctAnswer: "A",
    explanation:
      "A standard men's Olympic boxing match consists of three rounds, each lasting three minutes.",
  },
  {
    id: 55,
    subject: "Mathematics",
    question: "Which of the following is a prime number?",
    options: {
      A: "9",
      B: "15",
      C: "21",
      D: "23",
    },
    correctAnswer: "D",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 23 can only be divided by 1 and 23.",
  },
  {
    id: 56,
    subject: "English",
    question: "Which punctuation mark is used to show possession?",
    options: {
      A: "Comma (,)",
      B: "Full stop (.)",
      C: "Apostrophe (')",
      D: "Question mark (?)",
    },
    correctAnswer: "C",
    explanation:
      "The apostrophe is used to indicate the possessive case of nouns (e.g., 'the student's book') and to show the omission of letters (e.g., 'don't').",
  },
  {
    id: 57,
    subject: "Kiswahili",
    question: "Sentensi 'Mtoto analia' iko katika wakati gani?",
    options: {
      A: "Wakati uliopita",
      B: "Wakati ujao",
      C: "Wakati uliopo",
      D: "Wakati timilifu",
    },
    correctAnswer: "C",
    explanation:
      "Kiambishi tamati '-na-' katika kitenzi 'analia' kinaonyesha kuwa kitendo kinafanyika sasa hivi, yaani, wakati uliopo.",
  },
  {
    id: 58,
    subject: "Social Studies",
    question: "What does the green color on the Kenyan flag represent?",
    options: {
      A: "The people of Kenya",
      B: "Peace and unity",
      C: "Natural wealth and agriculture",
      D: "The struggle for freedom",
    },
    correctAnswer: "C",
    explanation:
      "The green color on the Kenyan flag symbolizes the country's rich agricultural land and natural wealth.",
  },
  {
    id: 59,
    subject: "Agriculture",
    question: "The removal of unwanted plants from a field is known as?",
    options: {
      A: "Pruning",
      B: "Thinning",
      C: "Weeding",
      D: "Mulching",
    },
    correctAnswer: "C",
    explanation:
      "Weeding is the process of removing weeds (unwanted plants) that compete with crops for sunlight, water, and nutrients.",
  },
  {
    id: 60,
    subject: "Home Science",
    question: "Which one of the following is a symptom of dehydration?",
    options: {
      A: "Clear urine",
      B: "High energy levels",
      C: "Dry mouth and thirst",
      D: "Frequent urination",
    },
    correctAnswer: "C",
    explanation:
      "Dehydration occurs when you lose more fluid than you take in. Early signs include feeling thirsty, having a dry mouth, and passing dark-colored urine.",
  },
  {
    id: 61,
    subject: "Pre-Technical Studies",
    question:
      "The process of joining two pieces of metal together by melting and fusing them is called?",
    options: {
      A: "Riveting",
      B: "Soldering",
      C: "Welding",
      D: "Gluing",
    },
    correctAnswer: "C",
    explanation:
      "Welding is a fabrication process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool, causing fusion.",
  },
  {
    id: 62,
    subject: "Creative Art",
    question: "Mixing blue and yellow paint creates which secondary color?",
    options: {
      A: "Orange",
      B: "Green",
      C: "Purple",
      D: "Brown",
    },
    correctAnswer: "B",
    explanation:
      "In subtractive color mixing (like with paint), mixing the primary colors blue and yellow produces the secondary color green.",
  },
  {
    id: 63,
    subject: "sports",
    question:
      "In volleyball, a team can hit the ball a maximum of how many times before it must cross the net?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correctAnswer: "C",
    explanation:
      "Each team is allowed a maximum of three successive contacts of the ball in order to return it to the opponent's side (not including a block contact).",
  },
  {
    id: 64,
    subject: "Mathematics",
    question: "Convert 0.75 into a fraction in its simplest form.",
    options: {
      A: "1/2",
      B: "3/4",
      C: "75/100",
      D: "4/3",
    },
    correctAnswer: "B",
    explanation:
      "0.75 can be written as 75/100. To simplify, divide both the numerator and the denominator by their greatest common divisor, which is 25. 75 ÷ 25 = 3 and 100 ÷ 25 = 4, so the fraction is 3/4.",
  },
  {
    id: 65,
    subject: "English",
    question: "A word that is opposite in meaning to another is called an...",
    options: {
      A: "Antonym",
      B: "Synonym",
      C: "Homonym",
      D: "Acronym",
    },
    correctAnswer: "A",
    explanation:
      "An antonym is a word that has the opposite meaning of another word. For example, 'hot' is the antonym of 'cold'.",
  },
  {
    id: 66,
    subject: "Kiswahili",
    question: "Ukubwa wa neno 'nyumba' ni upi?",
    options: {
      A: "Kijumba",
      B: "Majumba",
      C: "Jumba",
      D: "Nyumbani",
    },
    correctAnswer: "C",
    explanation:
      "Ukubwa (augmentative) wa nomino 'nyumba' ni 'jumba'. Hii inaonyesha nyumba kubwa. 'Kijumba' ni udogo (diminutive).",
  },
  {
    id: 67,
    subject: "Social Studies",
    question: "The head of the Judiciary in Kenya holds the title of?",
    options: {
      A: "Attorney General",
      B: "Chief Justice",
      C: "Speaker of the National Assembly",
      D: "President",
    },
    correctAnswer: "B",
    explanation:
      "The Chief Justice is the president of the Supreme Court and the head of the Judiciary, which is the arm of government responsible for interpreting laws.",
  },
  {
    id: 68,
    subject: "Agriculture",
    question:
      "The practice of growing crops without using synthetic fertilizers and pesticides is known as?",
    options: {
      A: "Conventional farming",
      B: "Organic farming",
      C: "Mixed farming",
      D: "Pastoral farming",
    },
    correctAnswer: "B",
    explanation:
      "Organic farming is an agricultural system that uses fertilizers of organic origin such as compost manure, and places emphasis on techniques such as crop rotation and companion planting.",
  },
  {
    id: 69,
    subject: "Home Science",
    question: "Stitching a torn seam on a piece of clothing is an example of?",
    options: {
      A: "Laundering",
      B: "Darning",
      C: "Mending",
      D: "Ironing",
    },
    correctAnswer: "C",
    explanation:
      "Mending is the general term for repairing clothes. Darning specifically refers to repairing holes by interweaving thread.",
  },
  {
    id: 70,
    subject: "Pre-Technical Studies",
    question: "Which of these is a ferrous metal?",
    options: {
      A: "Aluminum",
      B: "Copper",
      C: "Steel",
      D: "Zinc",
    },
    correctAnswer: "C",
    explanation:
      "Ferrous metals are metals that contain iron. Steel is an alloy of iron and carbon, making it a ferrous metal. Aluminum, copper, and zinc are non-ferrous.",
  },
  {
    id: 71,
    subject: "Creative Art",
    question:
      "Which element of art refers to the surface quality of an object, i.e., how it feels or looks like it would feel?",
    options: {
      A: "Line",
      B: "Shape",
      C: "Color",
      D: "Texture",
    },
    correctAnswer: "D",
    explanation:
      "Texture is the element of art that refers to the way things feel, or look as if they might feel if touched. It can be real (tactile) or implied (visual).",
  },
  {
    id: 72,
    subject: "sports",
    question: "The Kenya national rugby sevens team is popularly known as?",
    options: {
      A: "Harambee Stars",
      B: "Malkia Strikers",
      C: "Shujaa",
      D: "Simba",
    },
    correctAnswer: "C",
    explanation:
      "'Shujaa' is the Swahili word for 'hero', and it is the nickname for the Kenya men's national rugby sevens team. Harambee Stars is the football team.",
  },
  {
    id: 73,
    subject: "Mathematics",
    question: "A polygon with 8 sides is called an...",
    options: {
      A: "Hexagon",
      B: "Heptagon",
      C: "Octagon",
      D: "Nonagon",
    },
    correctAnswer: "C",
    explanation:
      "A polygon is named based on its number of sides. A hexagon has 6, a heptagon has 7, an octagon has 8, and a nonagon has 9.",
  },
  {
    id: 74,
    subject: "English",
    question: "Which of these words is a conjunction?",
    options: {
      A: "quickly",
      B: "beautiful",
      C: "and",
      D: "under",
    },
    correctAnswer: "C",
    explanation:
      "A conjunction is a word used to connect clauses or sentences or to coordinate words in the same clause (e.g., and, but, if). 'Quickly' is an adverb, 'beautiful' is an adjective, and 'under' is a preposition.",
  },
  {
    id: 75,
    subject: "Kiswahili",
    question: "Mtu anayefanya kazi ya kuandika habari gazetini huitwaje?",
    options: {
      A: "Mhariri",
      B: "Mwandishi",
      C: "Mchapishaji",
      D: "Mwanahabari",
    },
    correctAnswer: "D",
    explanation:
      "Mwanahabari ni mtu ambaye hukusanya, kuandika, na kusambaza habari na taarifa nyingine. Mwandishi ni neno la jumla zaidi, na mhariri husahihisha maandishi.",
  },
  {
    id: 76,
    subject: "Social Studies",
    question:
      "Lake Victoria, the largest lake in Africa, is shared by Kenya, Uganda, and which other country?",
    options: {
      A: "Tanzania",
      B: "Rwanda",
      C: "Ethiopia",
      D: "Somalia",
    },
    correctAnswer: "A",
    explanation:
      "Lake Victoria is bordered by three countries: Kenya to the northeast, Uganda to the north and west, and Tanzania to the south and east.",
  },
  {
    id: 77,
    subject: "Agriculture",
    question: "A young sheep is called a...",
    options: {
      A: "Kid",
      B: "Calf",
      C: "Lamb",
      D: "Foal",
    },
    correctAnswer: "C",
    explanation:
      "A lamb is a young sheep. A kid is a young goat, a calf is a young cow, and a foal is a young horse.",
  },
  {
    id: 78,
    subject: "Home Science",
    question:
      "Which vitamin is also known as ascorbic acid and is found in citrus fruits?",
    options: {
      A: "Vitamin A",
      B: "Vitamin B12",
      C: "Vitamin C",
      D: "Vitamin D",
    },
    correctAnswer: "C",
    explanation:
      "Vitamin C, or ascorbic acid, is an essential nutrient found in various foods, especially fruits like oranges and lemons. It's important for the immune system and skin health.",
  },
  {
    id: 79,
    subject: "Pre-Technical Studies",
    question:
      "In a third-angle orthographic projection, where is the top view placed in relation to the front view?",
    options: {
      A: "Below the front view",
      B: "To the right of the front view",
      C: "Above the front view",
      D: "To the left of the front view",
    },
    correctAnswer: "C",
    explanation:
      "In third-angle projection (commonly used in the USA and Canada), the top view is placed directly above the front view, and the right-side view is placed to the right of the front view.",
  },
  {
    id: 80,
    subject: "Creative Art",
    question:
      "The arrangement of elements such as line, shape, and color in a work of art is called?",
    options: {
      A: "Composition",
      B: "Technique",
      C: "Medium",
      D: "Subject matter",
    },
    correctAnswer: "A",
    explanation:
      "Composition is the placement or arrangement of visual elements in a work of art. It is the organization of the elements of art according to the principles of art.",
  },
  {
    id: 81,
    subject: "sports",
    question: "Which of these strokes is NOT used in competitive swimming?",
    options: {
      A: "Freestyle",
      B: "Backstroke",
      C: "Dog paddle",
      D: "Butterfly",
    },
    correctAnswer: "C",
    explanation:
      "The four official competitive swimming strokes are freestyle (front crawl), backstroke, breaststroke, and butterfly. Dog paddle is a simple, non-competitive swimming style.",
  },
  {
    id: 82,
    subject: "Mathematics",
    question: "What is 25% of 200?",
    options: {
      A: "25",
      B: "40",
      C: "50",
      D: "75",
    },
    correctAnswer: "C",
    explanation:
      "To find 25% of a number, you can convert the percentage to a decimal (0.25) and multiply, or recognize that 25% is equal to 1/4. 0.25 × 200 = 50, or 200 / 4 = 50.",
  },
  {
    id: 83,
    subject: "English",
    question: "A group of lions is called a...",
    options: {
      A: "Herd",
      B: "Flock",
      C: "Pack",
      D: "Pride",
    },
    correctAnswer: "D",
    explanation:
      "The collective noun for a group of lions is a 'pride'. A herd is for cattle, a flock is for sheep or birds, and a pack is for wolves or dogs.",
  },
  {
    id: 84,
    subject: "Kiswahili",
    question: "Kifaa kinachotumika kupimia joto la mwili huitwaje?",
    options: {
      A: "Saa",
      B: "Mizani",
      C: "Kipimajoto",
      D: "Darubini",
    },
    correctAnswer: "C",
    explanation:
      "Kipimajoto (thermometer) ni kifaa kinachotumika kupima halijoto, iwe ya mwili, hewa, au kimiminika.",
  },
  {
    id: 85,
    subject: "Social Studies",
    question:
      "The system of government where citizens elect representatives to make decisions on their behalf is called a?",
    options: {
      A: "Monarchy",
      B: "Dictatorship",
      C: "Republic",
      D: "Theocracy",
    },
    correctAnswer: "C",
    explanation:
      "A republic is a form of government in which 'supreme power is held by the people and their elected representatives', as opposed to a monarchy where power is held by a monarch.",
  },
  {
    id: 86,
    subject: "Agriculture",
    question: "What is soil erosion?",
    options: {
      A: "The process of adding fertilizers to soil",
      B: "The wearing away and removal of the top layer of soil",
      C: "The formation of new soil from rocks",
      D: "The mixing of different soil types",
    },
    correctAnswer: "B",
    explanation:
      "Soil erosion is a naturally occurring process that affects all landforms. It refers to the wearing away of a field's topsoil by the natural physical forces of water and wind.",
  },
  {
    id: 87,
    subject: "Home Science",
    question:
      "What is the primary reason for washing fruits and vegetables before eating them?",
    options: {
      A: "To make them taste better",
      B: "To make them ripen faster",
      C: "To remove dirt, pesticides, and germs",
      D: "To increase their vitamin content",
    },
    correctAnswer: "C",
    explanation:
      "Washing produce helps to remove surface dirt, bacteria, and residual pesticides, reducing the risk of foodborne illnesses.",
  },
  {
    id: 88,
    subject: "Pre-Technical Studies",
    question:
      "What is the name of the L-shaped tool used for drawing or checking 90-degree angles?",
    options: {
      A: "Protractor",
      B: "Try square",
      C: "Sliding bevel",
      D: "Compass",
    },
    correctAnswer: "B",
    explanation:
      "A try square is a woodworking or metalworking tool used for marking and checking 90° angles on pieces of wood or metal.",
  },
  {
    id: 89,
    subject: "Creative Art",
    question:
      "A portrait is a painting, photograph, or other artistic representation of...",
    options: {
      A: "A landscape",
      B: "An animal",
      C: "A person",
      D: "A building",
    },
    correctAnswer: "C",
    explanation:
      "A portrait is an artistic representation of a person, in which the face and its expression is predominant. The intent is to display the likeness, personality, and even the mood of the person.",
  },
  {
    id: 90,
    subject: "sports",
    question: "In athletics, what does a false start mean?",
    options: {
      A: "Finishing the race in the wrong lane",
      B: "Starting to run before the starting signal",
      C: "Failing to finish the race",
      D: "Running slower than the expected time",
    },
    correctAnswer: "B",
    explanation:
      "A false start occurs when a competitor begins the race before the official starting signal has been given. In many events, this results in disqualification.",
  },
  {
    id: 91,
    subject: "Mathematics",
    question: "What is the next number in the sequence: 2, 5, 8, 11, ...?",
    options: {
      A: "12",
      B: "13",
      C: "14",
      D: "15",
    },
    correctAnswer: "C",
    explanation:
      "This is an arithmetic sequence where each term is found by adding 3 to the previous term. 11 + 3 = 14.",
  },
  {
    id: 92,
    subject: "English",
    question: "Choose the correct spelling.",
    options: {
      A: "Neccessary",
      B: "Necesary",
      C: "Necessary",
      D: "Neccesary",
    },
    correctAnswer: "C",
    explanation:
      "The correct spelling of the word is 'necessary', with one 'c' and double 's'.",
  },
  {
    id: 93,
    subject: "Kiswahili",
    question: "Nahau 'piga moyo konde' ina maana gani?",
    options: {
      A: "Kupigana",
      B: "Kujipa moyo au kuvumilia",
      C: "Kuwa na hasira",
      D: "Kuumiza moyo",
    },
    correctAnswer: "B",
    explanation:
      "Kupiga moyo konde ni msemo unaomaanisha kujikaza, kustahimili, au kuvumilia jambo gumu au la kuhuzunisha.",
  },
  {
    id: 94,
    subject: "Social Studies",
    question:
      "The arm of government that is responsible for implementing and enforcing laws is the...",
    options: {
      A: "Judiciary",
      B: "Legislature",
      C: "Executive",
      D: "County Assembly",
    },
    correctAnswer: "C",
    explanation:
      "The Executive branch, headed by the President, is responsible for implementing, supporting, and enforcing the laws made by the legislative branch and interpreted by the judicial branch.",
  },
  {
    id: 95,
    subject: "Agriculture",
    question: "Which of the following is an example of a root tuber crop?",
    options: {
      A: "Maize",
      B: "Cassava",
      C: "Beans",
      D: "Cabbage",
    },
    correctAnswer: "B",
    explanation:
      "Root tubers, like cassava and sweet potatoes, are storage organs formed by the swelling of roots. Maize is a cereal, beans are legumes, and cabbage is a leafy vegetable.",
  },
  {
    id: 96,
    subject: "Home Science",
    question:
      "A set of instructions for preparing a particular dish is called a...",
    options: {
      A: "Menu",
      B: "Recipe",
      C: "Budget",
      D: "Timetable",
    },
    correctAnswer: "B",
    explanation:
      "A recipe is a list of ingredients and a set of instructions that tell you how to cook something.",
  },
  {
    id: 97,
    subject: "Pre-Technical Studies",
    question:
      "Which simple machine consists of a grooved wheel and a rope or cable?",
    options: {
      A: "Lever",
      B: "Inclined plane",
      C: "Wedge",
      D: "Pulley",
    },
    correctAnswer: "D",
    explanation:
      "A pulley is a wheel on an axle or shaft that is designed to support movement and change of direction of a taut cable or belt. It is used to lift heavy objects.",
  },
  {
    id: 98,
    subject: "Creative Art",
    question: "What is a 'still life' in art?",
    options: {
      A: "A drawing of a person who is not moving",
      B: "An arrangement of inanimate objects as a subject",
      C: "A painting of a calm, quiet landscape",
      D: "A sculpture that does not have moving parts",
    },
    correctAnswer: "B",
    explanation:
      "A still life is a work of art depicting mostly inanimate subject matter, typically commonplace objects which are either natural (food, flowers) or man-made (vases, books).",
  },
  {
    id: 99,
    subject: "sports",
    question: "Eliud Kipchoge is a world-famous Kenyan athlete in which sport?",
    options: {
      A: "Javelin throw",
      B: "High jump",
      C: "Marathon running",
      D: "800 meters",
    },
    correctAnswer: "C",
    explanation:
      "Eliud Kipchoge is widely regarded as the greatest marathon runner of all time, holding world records and being the first person to run a marathon in under two hours.",
  },
  {
    id: 100,
    subject: "Mathematics",
    question: "What is the value of 5 squared (5²)?",
    options: {
      A: "10",
      B: "25",
      C: "15",
      D: "52",
    },
    correctAnswer: "B",
    explanation:
      "Squaring a number means multiplying it by itself. 5² = 5 × 5 = 25.",
  },
  {
    id: 101,
    subject: "Mathematics",
    question:
      "If the perimeter of a square is 36 cm, what is the length of one side?",
    options: {
      A: "4 cm",
      B: "6 cm",
      C: "9 cm",
      D: "12 cm",
    },
    correctAnswer: "C",
    explanation:
      "A square has four equal sides. The perimeter is the total length of all sides (P = 4s). To find the length of one side, divide the perimeter by 4. 36 cm / 4 = 9 cm.",
  },
  {
    id: 102,
    subject: "English",
    question:
      "Which part of speech describes a verb, adjective, or another adverb?",
    options: {
      A: "Noun",
      B: "Pronoun",
      C: "Adjective",
      D: "Adverb",
    },
    correctAnswer: "D",
    explanation:
      "An adverb is a word that modifies or describes a verb (e.g., 'he sings loudly'), an adjective (e.g., 'very tall'), or another adverb (e.g., 'ended too quickly').",
  },
  {
    id: 103,
    subject: "Kiswahili",
    question:
      "Katika sentensi 'Juma alikimbia mbio', neno 'mbio' ni la aina gani?",
    options: {
      A: "Kitenzi",
      B: "Kivumishi",
      C: "Kielezi",
      D: "Nomino",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'mbio' linaelezea jinsi kitendo cha 'kukimbia' kilivyofanyika. Maneno yanayoelezea vitenzi huitwa vielezi.",
  },
  {
    id: 104,
    subject: "Social Studies",
    question: "Mount Kenya is an example of which type of mountain?",
    options: {
      A: "Fold mountain",
      B: "Volcanic mountain",
      C: "Block mountain",
      D: "Residual mountain",
    },
    correctAnswer: "B",
    explanation:
      "Mount Kenya is an extinct stratovolcano, which means it was formed by layers of hardened lava, tephra, pumice, and volcanic ash from past eruptions.",
  },
  {
    id: 105,
    subject: "Agriculture",
    question: "Which of these is NOT a method of soil conservation?",
    options: {
      A: "Terracing",
      B: "Contour ploughing",
      C: "Overgrazing",
      D: "Afforestation",
    },
    correctAnswer: "C",
    explanation:
      "Overgrazing exposes soil to agents of erosion like wind and water. Terracing, contour ploughing, and afforestation (planting trees) are all effective methods for conserving soil.",
  },
  {
    id: 106,
    subject: "Home Science",
    question: "What does a budget help a family to do?",
    options: {
      A: "Earn more income",
      B: "Spend money without limits",
      C: "Plan and control their spending",
      D: "Avoid paying taxes",
    },
    correctAnswer: "C",
    explanation:
      "A budget is a financial plan that helps individuals or families to track their income and expenses, enabling them to manage their money effectively and avoid overspending.",
  },
  {
    id: 107,
    subject: "Pre-Technical Studies",
    question: "Which of these hand tools is used for cutting wood?",
    options: {
      A: "Hammer",
      B: "Screwdriver",
      C: "Saw",
      D: "Spanner",
    },
    correctAnswer: "C",
    explanation:
      "A saw is a tool consisting of a tough blade with a hard toothed edge. It is used to cut through material, most often wood, by placing the toothed edge against the material and moving it forcefully.",
  },
  {
    id: 108,
    subject: "Creative Art",
    question:
      "What art technique involves creating an image by assembling small pieces of colored glass, stone, or other materials?",
    options: {
      A: "Fresco",
      B: "Collage",
      C: "Mosaic",
      D: "Etching",
    },
    correctAnswer: "C",
    explanation:
      "A mosaic is a piece of art or image made from the assemblage of small pieces of colored glass, stone, or other materials. It is often used in decorative art or as interior decoration.",
  },
  {
    id: 109,
    subject: "sports",
    question: "In a game of tennis, what is the term for a score of zero?",
    options: {
      A: "Nil",
      B: "Duck",
      C: "Love",
      D: "Zero",
    },
    correctAnswer: "C",
    explanation:
      "In tennis, 'love' is used to represent a score of zero or nil. For example, a score of 15-0 is announced as 'fifteen-love'.",
  },
  {
    id: 110,
    subject: "Mathematics",
    question:
      "An angle that is greater than 90 degrees but less than 180 degrees is called...",
    options: {
      A: "An acute angle",
      B: "A right angle",
      C: "An obtuse angle",
      D: "A reflex angle",
    },
    correctAnswer: "C",
    explanation:
      "An obtuse angle is one which is more than 90° but less than 180°. An acute angle is less than 90°, a right angle is exactly 90°, and a reflex angle is greater than 180°.",
  },
  {
    id: 111,
    subject: "English",
    question: "What is the past tense of the verb 'begin'?",
    options: {
      A: "Begun",
      B: "Began",
      C: "Beginned",
      D: "Begined",
    },
    correctAnswer: "B",
    explanation:
      "'Begin' is an irregular verb. Its simple past tense is 'began', and its past participle is 'begun'.",
  },
  {
    id: 112,
    subject: "Kiswahili",
    question: "Mnyama anayetumika kubebea mizigo hasa milimani ni yupi?",
    options: {
      A: "Ngamia",
      B: "Farasi",
      C: "Punda",
      D: "Ng'ombe",
    },
    correctAnswer: "C",
    explanation:
      "Punda (donkey) ni mnyama anayejulikana kwa uwezo wake wa kubeba mizigo mizito, na hutumika sana katika maeneo yenye miinuko na njia nyembamba.",
  },
  {
    id: 113,
    subject: "Social Studies",
    question:
      "What is the main role of the opposition party in a democratic government?",
    options: {
      A: "To oppose every government policy",
      B: "To provide checks and balances on the ruling party",
      C: "To cause chaos in parliament",
      D: "To prepare for the next election only",
    },
    correctAnswer: "B",
    explanation:
      "The opposition's primary role is to question the government of the day and hold them accountable to the public. This provides a system of checks and balances.",
  },
  {
    id: 114,
    subject: "Agriculture",
    question: "A building where harvested crops are kept is called a...",
    options: {
      A: "Greenhouse",
      B: "Silo",
      C: "Barn",
      D: "Shed",
    },
    correctAnswer: "C",
    explanation:
      "A barn is a large farm building used for storage of harvested crops, housing livestock, or as a covered workplace. A silo is typically used for storing grain or fermented feed known as silage.",
  },
  {
    id: 115,
    subject: "Home Science",
    question: "Scurvy is a disease caused by a deficiency of which vitamin?",
    options: {
      A: "Vitamin A",
      B: "Vitamin B",
      C: "Vitamin C",
      D: "Vitamin D",
    },
    correctAnswer: "C",
    explanation:
      "Scurvy results from a lack of vitamin C (ascorbic acid). Early symptoms include weakness, feeling tired, and sore arms and legs. It was common among sailors on long voyages.",
  },
  {
    id: 116,
    subject: "Pre-Technical Studies",
    question: "A floor plan is a type of drawing that shows...",
    options: {
      A: "The side view of a building",
      B: "The view of a building from above, as if it were cut open",
      C: "A 3D model of a building",
      D: "The electrical wiring of a building",
    },
    correctAnswer: "B",
    explanation:
      "A floor plan is a scaled diagram of a room or building viewed from above. It shows the relationships between rooms, spaces, and other physical features at one level of a structure.",
  },
  {
    id: 117,
    subject: "Creative Art",
    question:
      "The three-dimensional quality of an object, referring to its height, width, and depth is called?",
    options: {
      A: "Shape",
      B: "Form",
      C: "Space",
      D: "Line",
    },
    correctAnswer: "B",
    explanation:
      "In art, 'shape' is two-dimensional and flat (e.g., a square), while 'form' is three-dimensional and has volume (e.g., a cube).",
  },
  {
    id: 118,
    subject: "sports",
    question:
      "In rugby, what is it called when a player touches the ball down in the opponent's in-goal area?",
    options: {
      A: "A goal",
      B: "A try",
      C: "A touchdown",
      D: "A point",
    },
    correctAnswer: "B",
    explanation:
      "A try is the primary method of scoring in rugby. It is scored by grounding the ball in the opposition's in-goal area and is worth five points.",
  },
  {
    id: 119,
    subject: "Mathematics",
    question: "What is the value of pi (π) approximately?",
    options: {
      A: "2.14",
      B: "3.14",
      C: "4.13",
      D: "1.34",
    },
    correctAnswer: "B",
    explanation:
      "Pi (π) is a mathematical constant, the ratio of a circle's circumference to its diameter, approximately equal to 3.14159.",
  },
  {
    id: 120,
    subject: "English",
    question: "A story that is not real and has been made up is called...",
    options: {
      A: "Fiction",
      B: "Non-fiction",
      C: "Biography",
      D: "History",
    },
    correctAnswer: "A",
    explanation:
      "Fiction refers to literature created from the imagination, not presented as fact, though it may be based on a true story or situation.",
  },
  {
    id: 121,
    subject: "Kiswahili",
    question: "Sentensi 'Gari limeharibika' imekanushwa ipasavyo kama...",
    options: {
      A: "Gari halikuharibika",
      B: "Gari halitaharibika",
      C: "Gari halijaharibika",
      D: "Gari siharibiki",
    },
    correctAnswer: "C",
    explanation:
      "Wakati uliopo timilifu (perfect tense) '-me-' hukanushwa kwa kutumia kiambishi '-ja-'. Hivyo, 'limeharibika' inakuwa 'halijaharibika'.",
  },
  {
    id: 122,
    subject: "Social Studies",
    question:
      "The 'Big Five' game animals in Kenya include the lion, leopard, rhinoceros, elephant, and...",
    options: {
      A: "Giraffe",
      B: "Zebra",
      C: "Cheetah",
      D: "Cape Buffalo",
    },
    correctAnswer: "D",
    explanation:
      "The term 'Big Five' was coined by big-game hunters and refers to the five most difficult animals in Africa to hunt on foot. They are the African lion, African leopard, African bush elephant, black rhinoceros, and the Cape buffalo.",
  },
  {
    id: 123,
    subject: "Agriculture",
    question:
      "Which farming system involves the keeping of animals and the growing of crops on the same farm?",
    options: {
      A: "Pastoralism",
      B: "Arable farming",
      C: "Mixed farming",
      D: "Ranching",
    },
    correctAnswer: "C",
    explanation:
      "Mixed farming is a type of agriculture that involves both the growing of crops and the raising of livestock. This system allows for nutrient recycling, as manure from animals can be used to fertilize crops.",
  },
  {
    id: 124,
    subject: "Home Science",
    question: "Which of the following is a water-borne disease?",
    options: {
      A: "Malaria",
      B: "Tuberculosis",
      C: "Cholera",
      D: "Measles",
    },
    correctAnswer: "C",
    explanation:
      "Water-borne diseases are caused by pathogenic microorganisms that are most commonly transmitted in contaminated fresh water. Cholera is a classic example, often spread through contaminated drinking water or food.",
  },
  {
    id: 125,
    subject: "Pre-Technical Studies",
    question: "What is the purpose of a fuse in an electrical circuit?",
    options: {
      A: "To increase the voltage",
      B: "To act as a switch",
      C: "To protect the circuit from excessive current",
      D: "To store electrical energy",
    },
    correctAnswer: "C",
    explanation:
      "A fuse is a safety device containing a wire designed to melt and open the circuit if the current exceeds a safe level, thus preventing damage to the appliance or causing a fire.",
  },
  {
    id: 126,
    subject: "Creative Art",
    question:
      "The use of light and shadow in a drawing or painting to create the illusion of three-dimensional form is called?",
    options: {
      A: "Hatching",
      B: "Shading",
      C: "Outlining",
      D: "Sketching",
    },
    correctAnswer: "B",
    explanation:
      "Shading is used in drawing for depicting levels of darkness on paper by applying media more densely or with a darker shade for darker areas, and less densely or with a lighter shade for lighter areas.",
  },
  {
    id: 127,
    subject: "sports",
    question: "Which city hosted the 2016 Summer Olympics?",
    options: {
      A: "London",
      B: "Tokyo",
      C: "Rio de Janeiro",
      D: "Beijing",
    },
    correctAnswer: "C",
    explanation:
      "The 2016 Summer Olympics, officially known as the Games of the XXXI Olympiad, were held in Rio de Janeiro, Brazil.",
  },
  {
    id: 128,
    subject: "Mathematics",
    question:
      "If a car travels at a speed of 60 km/h, how far will it travel in 3 hours?",
    options: {
      A: "20 km",
      B: "120 km",
      C: "180 km",
      D: "240 km",
    },
    correctAnswer: "C",
    explanation:
      "Distance is calculated by multiplying speed by time (Distance = Speed × Time). So, 60 km/h × 3 h = 180 km.",
  },
  {
    id: 129,
    subject: "English",
    question: "The main character in a story is called the...",
    options: {
      A: "Antagonist",
      B: "Protagonist",
      C: "Narrator",
      D: "Author",
    },
    correctAnswer: "B",
    explanation:
      "The protagonist is the central character or leading figure in poetry, narrative, novel or any other story. The antagonist is the character who opposes the protagonist.",
  },
  {
    id: 130,
    subject: "Kiswahili",
    question: "Kazi ya fasihi ambayo huigizwa jukwaani huitwaje?",
    options: {
      A: "Riwaya",
      B: "Ushairi",
      C: "Tamthilia",
      D: "Hadithi fupi",
    },
    correctAnswer: "C",
    explanation:
      "Tamthilia ni utungo wa kisanaa unaowasilishwa kwa njia ya mazungumzo na matendo, na ambao umeandikwa ili uigizwe mbele ya hadhira.",
  },
  {
    id: 131,
    subject: "Social Studies",
    question: "What is democracy?",
    options: {
      A: "A system of government by one person with absolute power.",
      B: "A system of government where the military is in control.",
      C: "A system of government by the whole population, typically through elected representatives.",
      D: "A system of government based on religious law.",
    },
    correctAnswer: "C",
    explanation:
      "The word democracy comes from the Greek words 'demos', meaning people, and 'kratos' meaning power; so democracy can be thought of as 'power of the people'.",
  },
  {
    id: 132,
    subject: "Agriculture",
    question: "The process of providing water to crops artificially is called?",
    options: {
      A: "Irrigation",
      B: "Precipitation",
      C: "Fertilization",
      D: "Harvesting",
    },
    correctAnswer: "A",
    explanation:
      "Irrigation is the agricultural process of applying controlled amounts of water to land to assist in the production of crops, especially in areas with insufficient rainfall.",
  },
  {
    id: 133,
    subject: "Home Science",
    question: "Which of these is a good source of calcium?",
    options: {
      A: "Oranges",
      B: "Bread",
      C: "Milk",
      D: "Meat",
    },
    correctAnswer: "C",
    explanation:
      "Dairy products like milk, yogurt, and cheese are rich sources of calcium, which is essential for building and maintaining strong bones and teeth.",
  },
  {
    id: 134,
    subject: "Pre-Technical Studies",
    question: "Which drawing instrument is used to draw circles and arcs?",
    options: {
      A: "Set square",
      B: "Protractor",
      C: "T-square",
      D: "A pair of compasses",
    },
    correctAnswer: "D",
    explanation:
      "A pair of compasses is a technical drawing instrument that can be used for inscribing circles or arcs. It can also be used as a tool to measure distances.",
  },
  {
    id: 135,
    subject: "Creative Art",
    question:
      "A type of fine art printmaking where an image is incised into a surface is known as?",
    options: {
      A: "Lithography",
      B: "Screen printing",
      C: "Engraving",
      D: "Monotyping",
    },
    correctAnswer: "C",
    explanation:
      "Engraving is an intaglio printmaking process in which lines are cut into a metal plate in order to hold the ink. The plate is then used to print the image.",
  },
  {
    id: 136,
    subject: "sports",
    question:
      "What is the object used to hit the ball in the sport of cricket?",
    options: {
      A: "A stick",
      B: "A club",
      C: "A bat",
      D: "A racket",
    },
    correctAnswer: "C",
    explanation:
      "In cricket, a batsman uses a wooden bat to strike the hard, leather-bound ball.",
  },
  {
    id: 137,
    subject: "Mathematics",
    question: "Simplify the ratio 15:25.",
    options: {
      A: "1:2",
      B: "3:5",
      C: "5:3",
      D: "15:25",
    },
    correctAnswer: "B",
    explanation:
      "To simplify a ratio, find the greatest common divisor (GCD) of both numbers and divide them by it. The GCD of 15 and 25 is 5. 15 ÷ 5 = 3 and 25 ÷ 5 = 5. The simplified ratio is 3:5.",
  },
  {
    id: 138,
    subject: "English",
    question: "Which sentence uses 'their', 'there', and 'they're' correctly?",
    options: {
      A: "Their going to leave there car over they're.",
      B: "They're going to leave their car over there.",
      C: "There going to leave they're car over their.",
      D: "They're going to leave there car over their.",
    },
    correctAnswer: "B",
    explanation:
      "'They're' is a contraction of 'they are'. 'Their' is a possessive pronoun. 'There' refers to a place or location.",
  },
  {
    id: 139,
    subject: "Kiswahili",
    question: "Jina la pamoja la kundi la nyuki ni nini?",
    options: {
      A: "Kundi",
      B: "Tuta",
      C: "Mzinga",
      D: "Rundo",
    },
    correctAnswer: "B",
    explanation:
      "Jina la pamoja (collective noun) linalotumika kurejelea kundi kubwa la nyuki (hasa wanapohama) ni 'tuta'. 'Mzinga' ni makazi yao.",
  },
  {
    id: 140,
    subject: "Social Studies",
    question: "What is citizenship?",
    options: {
      A: "The act of living in a city",
      B: "The position or status of being a citizen of a particular country",
      C: "The right to vote in an election",
      D: "A document that allows you to travel",
    },
    correctAnswer: "B",
    explanation:
      "Citizenship is the relationship between an individual and a state to which the individual owes allegiance and in turn is entitled to its protection. It implies status with accompanying rights and responsibilities.",
  },
  {
    id: 141,
    subject: "Agriculture",
    question: "The male parent of a chicken is called a...",
    options: {
      A: "Hen",
      B: "Chick",
      C: "Rooster",
      D: "Pullet",
    },
    correctAnswer: "C",
    explanation:
      "A rooster, also known as a cockerel or cock, is the adult male chicken. A hen is the female, a chick is a baby, and a pullet is a young female.",
  },
  {
    id: 142,
    subject: "Home Science",
    question: "Personal hygiene refers to...",
    options: {
      A: "Keeping the house clean",
      B: "Maintaining cleanliness of one's own body and clothing",
      C: "Cooking food properly",
      D: "Washing dishes after meals",
    },
    correctAnswer: "B",
    explanation:
      "Personal hygiene involves all the practices performed by an individual to care for one's bodily health and well-being, through cleanliness. It includes bathing, washing hands, brushing teeth, etc.",
  },
  {
    id: 143,
    subject: "Pre-Technical Studies",
    question: "What type of energy is generated by a flowing river?",
    options: {
      A: "Solar energy",
      B: "Wind energy",
      C: "Geothermal energy",
      D: "Hydroelectric energy",
    },
    correctAnswer: "D",
    explanation:
      "Hydroelectric energy, or hydropower, is a form of renewable energy that uses the water stored in dams, as well as flowing in rivers, to create electricity.",
  },
  {
    id: 144,
    subject: "Creative Art",
    question: "A light, transparent watercolor paint is known as a...",
    options: {
      A: "Wash",
      B: "Glaze",
      C: "Gouache",
      D: "Tempera",
    },
    correctAnswer: "A",
    explanation:
      "In watercolor painting, a wash is a term for a visual layer of paint that is diluted with water, creating a semi-transparent effect.",
  },
  {
    id: 145,
    subject: "sports",
    question:
      "What is the maximum number of substitutions a team can make in a standard football (soccer) match?",
    options: {
      A: "3",
      B: "5",
      C: "7",
      D: "11",
    },
    correctAnswer: "B",
    explanation:
      "As of rules updated by IFAB, teams in top-level competitions are permitted to use a maximum of five substitutions.",
  },
  {
    id: 146,
    subject: "Mathematics",
    question: "Which of these numbers is NOT a factor of 24?",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "9",
    },
    correctAnswer: "D",
    explanation:
      "A factor is a number that divides into another number exactly and without leaving a remainder. 24 can be divided by 4, 6, and 8, but not by 9.",
  },
  {
    id: 147,
    subject: "English",
    question: "The phrase 'it's raining cats and dogs' is an example of...",
    options: {
      A: "A simile",
      B: "A metaphor",
      C: "An idiom",
      D: "Personification",
    },
    correctAnswer: "C",
    explanation:
      "An idiom is a phrase or an expression that has a figurative, or sometimes literal, meaning. 'Raining cats and dogs' means it is raining very heavily.",
  },
  {
    id: 148,
    subject: "Kiswahili",
    question: "Ni kiungo gani cha mwili kinachotumika kwa kusikia?",
    options: {
      A: "Jicho",
      B: "Pua",
      C: "Ulimi",
      D: "Sikio",
    },
    correctAnswer: "D",
    explanation:
      "Sikio ndicho kiungo cha mwili kinachohusika na hisia za usikivu. Jicho ni la kuona, pua ni la kunusa, na ulimi ni la kuonja.",
  },
  {
    id: 149,
    subject: "Social Studies",
    question:
      "The process of sharing powers between the national and county governments is known as...",
    options: {
      A: "Democracy",
      B: "Devolution",
      C: "Decentralization",
      D: "Delegation",
    },
    correctAnswer: "B",
    explanation:
      "Devolution is the statutory delegation of powers from the central government of a sovereign state to govern at a subnational level, such as a regional or local level. In Kenya, this is from the national to county governments.",
  },
  {
    id: 150,
    subject: "Agriculture",
    question:
      "The controlled decomposition of organic matter, such as food scraps and yard waste, is called?",
    options: {
      A: "Fertilizing",
      B: "Composting",
      C: "Mulching",
      D: "Eroding",
    },
    correctAnswer: "B",
    explanation:
      "Composting is a process that turns organic materials into a dark, rich soil conditioner known as compost. It is a form of recycling and is very beneficial for soil health.",
  },
  {
    id: 151,
    subject: "Home Science",
    question: "Which of the following is a symptom of malaria?",
    options: {
      A: "Stomach ache",
      B: "High fever and chills",
      C: "A skin rash",
      D: "A broken bone",
    },
    correctAnswer: "B",
    explanation:
      "The classic symptoms of malaria, a disease spread by mosquitoes, include cycles of high fever, shaking chills, and sweating.",
  },
  {
    id: 152,
    subject: "Pre-Technical Studies",
    question: "Which of these is a renewable source of energy?",
    options: {
      A: "Coal",
      B: "Natural Gas",
      C: "Petroleum",
      D: "Solar Power",
    },
    correctAnswer: "D",
    explanation:
      "Renewable energy sources are naturally replenished. Solar power from the sun is renewable, whereas fossil fuels like coal, oil, and natural gas are non-renewable.",
  },
  {
    id: 153,
    subject: "Creative Art",
    question:
      "The principle of design that refers to the distribution of visual weight in a work of art is...",
    options: {
      A: "Rhythm",
      B: "Balance",
      C: "Contrast",
      D: "Emphasis",
    },
    correctAnswer: "B",
    explanation:
      "Balance is a principle of design concerned with arranging the elements in a piece so that there is an equality of visual weight. It can be symmetrical, asymmetrical, or radial.",
  },
  {
    id: 154,
    subject: "sports",
    question: "How long is a standard Olympic swimming pool?",
    options: {
      A: "25 meters",
      B: "50 meters",
      C: "75 meters",
      D: "100 meters",
    },
    correctAnswer: "B",
    explanation:
      "A standard Olympic-sized swimming pool is 50 meters in length, which qualifies it as a long course pool.",
  },
  {
    id: 155,
    subject: "Mathematics",
    question:
      "What is the area of a triangle with a base of 10 cm and a height of 8 cm?",
    options: {
      A: "18 cm²",
      B: "40 cm²",
      C: "80 cm²",
      D: "9 cm²",
    },
    correctAnswer: "B",
    explanation:
      "The area of a triangle is calculated using the formula A = 1/2 × base × height. So, A = 1/2 × 10 cm × 8 cm = 40 cm².",
  },
  {
    id: 156,
    subject: "English",
    question:
      "A word that sounds the same as another word but has a different meaning and spelling is a...",
    options: {
      A: "Homophone",
      B: "Synonym",
      C: "Antonym",
      D: "Palindrome",
    },
    correctAnswer: "A",
    explanation:
      "A homophone is a word that is pronounced the same as another word but differs in meaning. Examples include 'to', 'too', and 'two'.",
  },
  {
    id: 157,
    subject: "Kiswahili",
    question: "Neno 'mwalimu' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "U-I",
      C: "I-ZI",
      D: "KI-VI",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'mwalimu' liko katika ngeli ya A-WA kwa sababu linawakilisha mtu. Umoja ni 'mwalimu' (a-) na wingi ni 'walimu' (wa-).",
  },
  {
    id: 158,
    subject: "Social Studies",
    question: "Which body in Kenya is responsible for conducting elections?",
    options: {
      A: "The Judiciary",
      B: "The National Police Service",
      C: "The Independent Electoral and Boundaries Commission (IEBC)",
      D: "The Parliament",
    },
    correctAnswer: "C",
    explanation:
      "The IEBC is an independent regulatory agency that was founded in 2011 by the Constitution of Kenya. It is responsible for conducting or supervising referenda and elections to any elective body or office established by the Constitution.",
  },
  {
    id: 159,
    subject: "Agriculture",
    question: "Which of these animals is a ruminant?",
    options: {
      A: "Pig",
      B: "Chicken",
      C: "Cow",
      D: "Horse",
    },
    correctAnswer: "C",
    explanation:
      "Ruminants are mammals that are able to acquire nutrients from plant-based food by fermenting it in a specialized stomach prior to digestion. Cows, goats, and sheep are ruminants.",
  },
  {
    id: 160,
    subject: "Home Science",
    question: "The process of cleaning clothes and other textiles is called?",
    options: {
      A: "Cooking",
      B: "Mending",
      C: "Laundering",
      D: "Budgeting",
    },
    correctAnswer: "C",
    explanation:
      "Laundering is the process of washing or dry-cleaning clothing and other textiles. It includes washing, drying, and ironing.",
  },
  {
    id: 161,
    subject: "Pre-Technical Studies",
    question:
      "A material that allows electricity to pass through it easily is called a...",
    options: {
      A: "Insulator",
      B: "Conductor",
      C: "Resistor",
      D: "Semiconductor",
    },
    correctAnswer: "B",
    explanation:
      "An electrical conductor is a substance in which electrical charge carriers, usually electrons, move easily from atom to atom with the application of voltage. Metals like copper and aluminum are good conductors.",
  },
  {
    id: 162,
    subject: "Creative Art",
    question:
      "The material that an artist uses to create a work of art is called the...",
    options: {
      A: "Technique",
      B: "Style",
      C: "Medium",
      D: "Subject",
    },
    correctAnswer: "C",
    explanation:
      "The term medium refers to the materials that are used to create a work of art. Examples include paint, clay, charcoal, and bronze.",
  },
  {
    id: 163,
    subject: "sports",
    question:
      "A standard game of chess is played on a board with how many squares?",
    options: {
      A: "36",
      B: "49",
      C: "64",
      D: "100",
    },
    correctAnswer: "C",
    explanation:
      "A chessboard is a square board with an 8x8 grid of 64 squares of alternating colors.",
  },
  {
    id: 164,
    subject: "Mathematics",
    question: "How many millimeters are in one meter?",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "10000",
    },
    correctAnswer: "C",
    explanation:
      "The metric system is base-10. There are 100 centimeters in a meter, and 10 millimeters in a centimeter. Therefore, 100 x 10 = 1000 millimeters in a meter.",
  },
  {
    id: 165,
    subject: "English",
    question: "The comparative form of the adjective 'good' is...",
    options: {
      A: "Gooder",
      B: "More good",
      C: "Best",
      D: "Better",
    },
    correctAnswer: "D",
    explanation:
      "'Good' is an irregular adjective. Its comparative form is 'better', and its superlative form is 'best'.",
  },
  {
    id: 166,
    subject: "Kiswahili",
    question: "Chombo cha usafiri kinachopaa angani ni kipi?",
    options: {
      A: "Meli",
      B: "Treni",
      C: "Basi",
      D: "Ndege",
    },
    correctAnswer: "D",
    explanation:
      "Ndege (aeroplane) ni chombo cha usafiri kinachotumia mabawa na injini kusafiri hewani. Meli husafiri majini, na treni na basi husafiri ardhini.",
  },
  {
    id: 167,
    subject: "Social Studies",
    question: "What is the national language of Kenya?",
    options: {
      A: "English",
      B: "Kiswahili",
      C: "French",
      D: "There is no national language",
    },
    correctAnswer: "B",
    explanation:
      "The Constitution of Kenya establishes Kiswahili as the national language and both Kiswahili and English as the official languages.",
  },
  {
    id: 168,
    subject: "Agriculture",
    question:
      "The practice of clearing a piece of land by burning the vegetation, cultivating it for a few years, and then abandoning it is known as?",
    options: {
      A: "Crop rotation",
      B: "Shifting cultivation",
      C: "Intensive farming",
      D: "Agroforestry",
    },
    correctAnswer: "B",
    explanation:
      "Shifting cultivation, also known as slash-and-burn agriculture, is a farming method that involves clearing land, farming it until the soil is depleted of nutrients, and then moving to a new plot.",
  },
  {
    id: 169,
    subject: "Home Science",
    question:
      "The immediate care given to a victim of an accident or sudden illness before medical help is available is called?",
    options: {
      A: "Diagnosis",
      B: "Treatment",
      C: "First Aid",
      D: "Surgery",
    },
    correctAnswer: "C",
    explanation:
      "First aid is the first and immediate assistance given to any person suffering from either a minor or serious illness or injury, with care provided to preserve life, prevent the condition from worsening, or to promote recovery.",
  },
  {
    id: 170,
    subject: "Pre-Technical Studies",
    question: "Which of these is NOT a simple machine?",
    options: {
      A: "Lever",
      B: "Pulley",
      C: "Engine",
      D: "Inclined Plane",
    },
    correctAnswer: "C",
    explanation:
      "The six classical simple machines are the lever, wheel and axle, pulley, inclined plane, wedge, and screw. An engine is a complex machine made up of many parts, including simple machines.",
  },
  {
    id: 171,
    subject: "Creative Art",
    question:
      "The path of a moving point through space is the definition of which element of art?",
    options: {
      A: "Shape",
      B: "Texture",
      C: "Form",
      D: "Line",
    },
    correctAnswer: "D",
    explanation:
      "A line is the most basic element of art. It is defined as a mark made on a surface that connects two points and can be used to define shapes, create texture, and suggest form and movement.",
  },
  {
    id: 172,
    subject: "sports",
    question: "Which country won the first ever FIFA World Cup in 1930?",
    options: {
      A: "Brazil",
      B: "Argentina",
      C: "Uruguay",
      D: "Italy",
    },
    correctAnswer: "C",
    explanation:
      "The first FIFA World Cup was hosted and won by Uruguay in 1930. They defeated Argentina 4-2 in the final.",
  },
  {
    id: 173,
    subject: "Mathematics",
    question: "A number that is a multiple of 2 is called an...",
    options: {
      A: "Odd number",
      B: "Even number",
      C: "Prime number",
      D: "Integer",
    },
    correctAnswer: "B",
    explanation:
      "An even number is an integer that is exactly divisible by 2. Examples include 2, 4, 6, and 8.",
  },
  {
    id: 174,
    subject: "English",
    question: "A poem that tells a story is called a...",
    options: {
      A: "Sonnet",
      B: "Haiku",
      C: "Limerick",
      D: "Narrative poem",
    },
    correctAnswer: "D",
    explanation:
      "A narrative poem is a form of poetry that tells a story, often making use of the voices of a narrator and characters as well. It usually has a plot, setting, and characters.",
  },
  {
    id: 175,
    subject: "Kiswahili",
    question: "Mtu asiyeweza kuona huitwaje?",
    options: {
      A: "Kiziwi",
      B: "Bubu",
      C: "Kipofu",
      D: "Kilema",
    },
    correctAnswer: "C",
    explanation:
      "Kipofu ni mtu ambaye hana uwezo wa kuona. Kiziwi ni mtu asiyesikia, na bubu ni mtu asiyeweza kusema.",
  },
  {
    id: 176,
    subject: "Social Studies",
    question:
      "Which document contains the supreme law of the Republic of Kenya?",
    options: {
      A: "The Penal Code",
      B: "The Constitution",
      C: "The Bill of Rights",
      D: "The National Anthem",
    },
    correctAnswer: "B",
    explanation:
      "The Constitution of Kenya is the supreme law of the land. Any other law that is inconsistent with the Constitution is void to the extent of the inconsistency.",
  },
  {
    id: 177,
    subject: "Agriculture",
    question: "What is the process of loosening and turning over soil called?",
    options: {
      A: "Harvesting",
      B: "Weeding",
      C: "Ploughing",
      D: "Irrigating",
    },
    correctAnswer: "C",
    explanation:
      "Ploughing (or tilling) is the process of preparing land for growing crops. It helps to aerate the soil, mix in organic matter, and control weeds.",
  },
  {
    id: 178,
    subject: "Home Science",
    question:
      "Which of these is a method of cooking using dry heat in an oven?",
    options: {
      A: "Boiling",
      B: "Steaming",
      C: "Frying",
      D: "Baking",
    },
    correctAnswer: "D",
    explanation:
      "Baking is a method of preparing food that uses dry heat, typically in an oven. Boiling and steaming use moist heat (water/steam), and frying uses hot fat or oil.",
  },
  {
    id: 179,
    subject: "Pre-Technical Studies",
    question:
      "The force that opposes motion between two surfaces in contact is called...",
    options: {
      A: "Gravity",
      B: "Friction",
      C: "Magnetism",
      D: "Inertia",
    },
    correctAnswer: "B",
    explanation:
      "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.",
  },
  {
    id: 180,
    subject: "Creative Art",
    question: "In pottery, a special oven used to fire clay is called a...",
    options: {
      A: "Furnace",
      B: "Stove",
      C: "Kiln",
      D: "Grill",
    },
    correctAnswer: "C",
    explanation:
      "A kiln is a thermally insulated chamber, a type of oven, that produces temperatures sufficient to complete some process, such as hardening, drying, or chemical changes. In pottery, it is used to turn clay into ceramic.",
  },
  {
    id: 181,
    subject: "sports",
    question: "What sport is played at Wimbledon?",
    options: {
      A: "Golf",
      B: "Cricket",
      C: "Tennis",
      D: "Rugby",
    },
    correctAnswer: "C",
    explanation:
      "The Championships, Wimbledon, commonly known simply as Wimbledon, is the oldest tennis tournament in the world and is widely regarded as the most prestigious.",
  },
  {
    id: 182,
    subject: "Mathematics",
    question: "What is the volume of a cube with a side length of 4 cm?",
    options: {
      A: "12 cm³",
      B: "16 cm³",
      C: "32 cm³",
      D: "64 cm³",
    },
    correctAnswer: "D",
    explanation:
      "The volume of a cube is calculated by cubing the side length (V = s³). So, V = 4 cm × 4 cm × 4 cm = 64 cm³.",
  },
  {
    id: 183,
    subject: "English",
    question:
      "A comparison between two unlike things using 'like' or 'as' is called a...",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Hyperbole",
    },
    correctAnswer: "B",
    explanation:
      "A simile is a figure of speech that directly compares two things. For example, 'as brave as a lion' or 'sings like an angel'.",
  },
  {
    id: 184,
    subject: "Kiswahili",
    question: "Wazazi wa mama yako ni nani kwako?",
    options: {
      A: "Wajomba",
      B: "Mashangazi",
      C: "Babu na nyanya",
      D: "Binamu",
    },
    correctAnswer: "C",
    explanation:
      "Wazazi wa mzazi wako (baba au mama) ni babu (grandfather) na nyanya (grandmother) kwako.",
  },
  {
    id: 185,
    subject: "Social Studies",
    question: "Which of these is a right of a Kenyan citizen?",
    options: {
      A: "The right to refuse to pay taxes",
      B: "The right to freedom of expression",
      C: "The right to disobey laws",
      D: "The right to damage public property",
    },
    correctAnswer: "B",
    explanation:
      "The Constitution of Kenya guarantees fundamental rights and freedoms, including the freedom of expression. However, this right comes with responsibilities and does not extend to hate speech or incitement.",
  },
  {
    id: 186,
    subject: "Agriculture",
    question:
      "The process by which green plants use sunlight, water, and carbon dioxide to create their own food is called?",
    options: {
      A: "Respiration",
      B: "Transpiration",
      C: "Photosynthesis",
      D: "Pollination",
    },
    correctAnswer: "C",
    explanation:
      "Photosynthesis is the fundamental process used by plants and other organisms to convert light energy into chemical energy, through a cellular process that creates glucose (food).",
  },
  {
    id: 187,
    subject: "Home Science",
    question: "Which of these cleaning agents is best for removing grease?",
    options: {
      A: "Water",
      B: "Vinegar",
      C: "Soap or detergent",
      D: "Bleach",
    },
    correctAnswer: "C",
    explanation:
      "Soap and detergents have molecules that are hydrophilic (attracted to water) on one end and hydrophobic (repelled by water, but attracted to oil/grease) on the other. This allows them to break up grease and wash it away with water.",
  },
  {
    id: 188,
    subject: "Pre-Technical Studies",
    question: "What is the unit of measurement for electrical resistance?",
    options: {
      A: "Volt (V)",
      B: "Ampere (A)",
      C: "Watt (W)",
      D: "Ohm (Ω)",
    },
    correctAnswer: "D",
    explanation:
      "The ohm (symbol: Ω) is the SI derived unit of electrical resistance. The volt measures electric potential, the ampere measures current, and the watt measures power.",
  },
  {
    id: 189,
    subject: "Creative Art",
    question: "Which color is NOT a primary color?",
    options: {
      A: "Red",
      B: "Yellow",
      C: "Green",
      D: "Blue",
    },
    correctAnswer: "C",
    explanation:
      "The primary colors are red, yellow, and blue. Green is a secondary color, created by mixing blue and yellow.",
  },
  {
    id: 190,
    subject: "sports",
    question: "The term 'knockout' or 'KO' is used in which sport?",
    options: {
      A: "Football",
      B: "Boxing",
      C: "Swimming",
      D: "Basketball",
    },
    correctAnswer: "B",
    explanation:
      "A knockout (KO) is a fight-ending, winning criterion in several full-contact combat sports, such as boxing, kickboxing, and mixed martial arts. It occurs when a participant is unable to rise from the canvas within a specified period of time.",
  },
  {
    id: 191,
    subject: "Mathematics",
    question: "What is the Roman numeral for 50?",
    options: {
      A: "X",
      B: "L",
      C: "C",
      D: "D",
    },
    correctAnswer: "B",
    explanation:
      "In Roman numerals, L represents 50. X is 10, C is 100, and D is 500.",
  },
  {
    id: 192,
    subject: "English",
    question: "An adjective describes a...",
    options: {
      A: "Verb",
      B: "Noun",
      C: "Conjunction",
      D: "Adverb",
    },
    correctAnswer: "B",
    explanation:
      "An adjective is a word that modifies or describes a noun or pronoun. For example, in 'the red car', 'red' is an adjective describing the noun 'car'.",
  },
  {
    id: 193,
    subject: "Kiswahili",
    question: "Msemo 'kuvunja ungo' unamaanisha nini?",
    options: {
      A: "Kuharibu chombo",
      B: "Kubalehe au kupevuka",
      C: "Kufanya kazi kwa bidii",
      D: "Kuanza safari",
    },
    correctAnswer: "B",
    explanation:
      "Katika jamii za Waswahili, 'kuvunja ungo' ni msemo unaorejelea msichana anapofikia umri wa kubalehe, hasa anapoanza kupata hedhi yake ya kwanza.",
  },
  {
    id: 194,
    subject: "Social Studies",
    question: "What are taxes?",
    options: {
      A: "Voluntary contributions to the government",
      B: "Compulsory financial charges imposed by a government on individuals and businesses",
      C: "Fines paid for breaking the law",
      D: "Payments for goods and services",
    },
    correctAnswer: "B",
    explanation:
      "Taxes are mandatory contributions levied on individuals or corporations by a government entity to fund government spending and various public expenditures like roads, schools, and healthcare.",
  },
  {
    id: 195,
    subject: "Agriculture",
    question: "A female cattle that has not had a calf is called a...",
    options: {
      A: "Cow",
      B: "Bull",
      C: "Heifer",
      D: "Steer",
    },
    correctAnswer: "C",
    explanation:
      "A heifer is a young female cow before she has had her first calf. A cow is a female that has had a calf, a bull is an uncastrated male, and a steer is a castrated male.",
  },
  {
    id: 196,
    subject: "Home Science",
    question: "The fibre obtained from the fleece of sheep is called...",
    options: {
      A: "Cotton",
      B: "Silk",
      C: "Wool",
      D: "Linen",
    },
    correctAnswer: "C",
    explanation:
      "Wool is the textile fiber obtained from sheep and other animals. Cotton comes from a plant, silk from silkworms, and linen from the flax plant.",
  },
  {
    id: 197,
    subject: "Pre-Technical Studies",
    question:
      "Which of these devices converts chemical energy into electrical energy?",
    options: {
      A: "A motor",
      B: "A generator",
      C: "A battery",
      D: "A light bulb",
    },
    correctAnswer: "C",
    explanation:
      "A battery is a device consisting of one or more electrochemical cells with external connections for powering electrical devices. It stores chemical energy and converts it into electrical energy.",
  },
  {
    id: 198,
    subject: "Creative Art",
    question: "A collage is an artwork made from...",
    options: {
      A: "Folding paper into shapes",
      B: "Carving wood or stone",
      C: "An assemblage of different forms, thus creating a new whole",
      D: "Painting directly onto a wet plaster wall",
    },
    correctAnswer: "C",
    explanation:
      "Collage is a technique of art creation, primarily used in the visual arts, by which art results from an assemblage of different forms, thus creating a new whole. A collage may sometimes include magazine and newspaper clippings, ribbons, paint, bits of colored or handmade papers, portions of other artwork or texts, photographs and other found objects, glued to a piece of paper or canvas.",
  },
  {
    id: 199,
    subject: "sports",
    question: "In which sport would you perform a slam dunk?",
    options: {
      A: "Volleyball",
      B: "Tennis",
      C: "Basketball",
      D: "Badminton",
    },
    correctAnswer: "C",
    explanation:
      "A slam dunk is a type of shot in basketball that is performed when a player jumps in the air, controls the ball above the horizontal plane of the rim, and scores by putting the ball directly through the basket with one or both hands.",
  },
  {
    id: 200,
    subject: "Mathematics",
    question: "What does the 'M' in the Roman numeral 'CM' represent?",
    options: {
      A: "100",
      B: "500",
      C: "1000",
      D: "50",
    },
    correctAnswer: "C",
    explanation:
      "In Roman numerals, M represents 1000. C represents 100. When C comes before M, it means 1000 - 100, so CM is 900.",
  },
  {
    id: 201,
    subject: "Mathematics",
    question:
      "A straight line that touches a circle at only one point is called a...",
    options: {
      A: "Radius",
      B: "Chord",
      C: "Diameter",
      D: "Tangent",
    },
    correctAnswer: "D",
    explanation:
      "In geometry, a tangent line to a curve at a given point is the straight line that 'just touches' the curve at that point. It does not cross through the circle.",
  },
  {
    id: 202,
    subject: "English",
    question: "A group of fish is known as a...",
    options: {
      A: "Herd",
      B: "Swarm",
      C: "School",
      D: "Pack",
    },
    correctAnswer: "C",
    explanation:
      "While 'shoal' is also correct, 'school' is a commonly used collective noun for a large group of fish swimming together.",
  },
  {
    id: 203,
    subject: "Kiswahili",
    question: "Neno 'chai' lina asili ya lugha gani?",
    options: {
      A: "Kihindi",
      B: "Kichina",
      C: "Kiajemi",
      D: "Kiarabu",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'chai' ni neno kopwa kutoka lugha ya Kihindi (na Kichina kupitia lugha nyingine). Asili yake kuu ni neno 'chá' la Kichina.",
  },
  {
    id: 204,
    subject: "Social Studies",
    question: "The National Anthem of Kenya is titled...",
    options: {
      A: "Kenya, My Country",
      B: "Ee Mungu Nguvu Yetu",
      C: "Harambee Kenya",
      D: "Tushangilie Kenya",
    },
    correctAnswer: "B",
    explanation:
      "The title of the Kenyan National Anthem is 'Ee Mungu Nguvu Yetu', which translates to 'O God of all creation'. It is based on a Pokomo lullaby.",
  },
  {
    id: 205,
    subject: "Agriculture",
    question: "Which of these is a poultry bird?",
    options: {
      A: "Goat",
      B: "Sheep",
      C: "Turkey",
      D: "Pig",
    },
    correctAnswer: "C",
    explanation:
      "Poultry refers to domesticated birds kept by humans for their eggs, their meat or their feathers. Examples include chickens, turkeys, ducks, and geese.",
  },
  {
    id: 206,
    subject: "Home Science",
    question:
      "Which of these is a permanent stitch used for joining fabric firmly?",
    options: {
      A: "Tacking stitch",
      B: "Backstitch",
      C: "Basting stitch",
      D: "Tailor's tacks",
    },
    correctAnswer: "B",
    explanation:
      "A backstitch is a strong and permanent hand-sewing stitch. Tacking and basting stitches are temporary stitches used to hold fabric in place before the final sewing.",
  },
  {
    id: 207,
    subject: "Pre-Technical Studies",
    question: "Which of the following is an output device for a computer?",
    options: {
      A: "Keyboard",
      B: "Mouse",
      C: "Scanner",
      D: "Monitor",
    },
    correctAnswer: "D",
    explanation:
      "An output device is any piece of computer hardware that conveys information to a user. A monitor displays information visually. Keyboards, mice, and scanners are all input devices.",
  },
  {
    id: 208,
    subject: "Creative Art",
    question:
      "The property of color that refers to its name (e.g., red, blue, yellow) is called...",
    options: {
      A: "Value",
      B: "Intensity",
      C: "Hue",
      D: "Shade",
    },
    correctAnswer: "C",
    explanation:
      "Hue is one of the main properties of a color, defined as the pure spectrum color name. Value refers to lightness or darkness, and intensity refers to brightness or dullness.",
  },
  {
    id: 209,
    subject: "sports",
    question:
      "What is the name of the stadium in Nairobi that is the home of Kenyan athletics?",
    options: {
      A: "Kasarani Stadium",
      B: "Nyayo National Stadium",
      C: "City Stadium",
      D: "Kipchoge Keino Stadium",
    },
    correctAnswer: "A",
    explanation:
      "The Moi International Sports Centre, Kasarani, is a multi-purpose stadium in Nairobi. It is the largest stadium in Kenya and primarily hosts athletics and football events.",
  },
  {
    id: 210,
    subject: "Mathematics",
    question: "What is the least common multiple (LCM) of 4 and 6?",
    options: {
      A: "2",
      B: "10",
      C: "12",
      D: "24",
    },
    correctAnswer: "C",
    explanation:
      "The LCM is the smallest positive integer that is a multiple of both numbers. Multiples of 4 are 4, 8, 12, 16... Multiples of 6 are 6, 12, 18... The smallest number in both lists is 12.",
  },
  {
    id: 211,
    subject: "English",
    question: "The sentence 'The cat sat on the mat' is in which tense?",
    options: {
      A: "Present Tense",
      B: "Past Tense",
      C: "Future Tense",
      D: "Present Perfect Tense",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'sat' is the simple past tense of 'sit', indicating that the action has already happened.",
  },
  {
    id: 212,
    subject: "Kiswahili",
    question: "Wingi wa neno 'ua' (flower) ni upi?",
    options: {
      A: "Maua",
      B: "Ua",
      C: "Nyua",
      D: "Vyua",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'ua' liko katika ngeli ya LI-YA. Umoja ni 'ua' (li-) na wingi ni 'maua' (ya-).",
  },
  {
    id: 213,
    subject: "Social Studies",
    question:
      "The exchange of goods and services between countries is called...",
    options: {
      A: "Domestic trade",
      B: "Retail trade",
      C: "Wholesale trade",
      D: "International trade",
    },
    correctAnswer: "D",
    explanation:
      "International trade is the exchange of capital, goods, and services across international borders or territories. Domestic trade occurs within a country.",
  },
  {
    id: 214,
    subject: "Agriculture",
    question:
      "A prolonged period of abnormally low rainfall, leading to a shortage of water is known as a...",
    options: {
      A: "Flood",
      B: "Drought",
      C: "Monsoon",
      D: "Hurricane",
    },
    correctAnswer: "B",
    explanation:
      "A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water.",
  },
  {
    id: 215,
    subject: "Home Science",
    question:
      "Which nutrient is essential for vision, growth, and immune function?",
    options: {
      A: "Vitamin A",
      B: "Vitamin K",
      C: "Calcium",
      D: "Iron",
    },
    correctAnswer: "A",
    explanation:
      "Vitamin A is a fat-soluble vitamin that is important for normal vision, the immune system, and reproduction. It is found in foods like carrots, sweet potatoes, and spinach.",
  },
  {
    id: 216,
    subject: "Pre-Technical Studies",
    question:
      "A lever is a simple machine consisting of a beam or rigid rod pivoted at a fixed hinge, or...",
    options: {
      A: "Axle",
      B: "Fulcrum",
      C: "Gear",
      D: "Wedge",
    },
    correctAnswer: "B",
    explanation:
      "A lever pivots around a fixed point called the fulcrum. The three parts of a lever are the fulcrum, the load (effort), and the resistance.",
  },
  {
    id: 217,
    subject: "Creative Art",
    question:
      "The art and science of designing buildings and other physical structures is called...",
    options: {
      A: "Sculpture",
      B: "Architecture",
      C: "Calligraphy",
      D: "Interior Design",
    },
    correctAnswer: "B",
    explanation:
      "Architecture is both the process and the product of planning, designing, and constructing buildings or other structures.",
  },
  {
    id: 218,
    subject: "sports",
    question: "David Rudisha is a world record holder in which athletic event?",
    options: {
      A: "1500 meters",
      B: "5000 meters",
      C: "Marathon",
      D: "800 meters",
    },
    correctAnswer: "D",
    explanation:
      "David Rudisha is a Kenyan middle-distance runner who is the 2012 and 2016 Olympic champion and the world record holder in the 800 metres.",
  },
  {
    id: 219,
    subject: "Mathematics",
    question: "A shape with four equal sides and four right angles is a...",
    options: {
      A: "Rectangle",
      B: "Rhombus",
      C: "Square",
      D: "Trapezium",
    },
    correctAnswer: "C",
    explanation:
      "A square is a special type of rectangle (with equal sides) and a special type of rhombus (with right angles).",
  },
  {
    id: 220,
    subject: "English",
    question: "A person who writes books is called an...",
    options: {
      A: "Editor",
      B: "Publisher",
      C: "Author",
      D: "Illustrator",
    },
    correctAnswer: "C",
    explanation:
      "An author is the writer of a book, article, or report. An editor prepares content for publication, a publisher prints and sells books, and an illustrator draws pictures.",
  },
  {
    id: 221,
    subject: "Kiswahili",
    question:
      "Methali 'Asiyefunzwa na mamaye, hufunzwa na ulimwengu' ina maana gani?",
    options: {
      A: "Elimu ya nyumbani ni bora zaidi",
      B: "Mtu asiyepata malezi mema nyumbani, hujifunza kwa kupitia magumu maishani",
      C: "Mama ndiye mwalimu bora",
      D: "Dunia ni shule kubwa",
    },
    correctAnswer: "B",
    explanation:
      "Methali hii inasisitiza umuhimu wa malezi mema kutoka kwa wazazi. Ikiwa mtu hatapata adabu nyumbani, atajifunza kupitia shida na changamoto za maisha ('ulimwengu').",
  },
  {
    id: 222,
    subject: "Social Studies",
    question: "What is the highest court in Kenya?",
    options: {
      A: "The High Court",
      B: "The Court of Appeal",
      C: "The Supreme Court",
      D: "The Magistrate's Court",
    },
    correctAnswer: "C",
    explanation:
      "The Supreme Court of Kenya is the highest judicial organ in the country. It is the final arbiter and interpreter of the Constitution.",
  },
  {
    id: 223,
    subject: "Agriculture",
    question:
      "The scientific method of breeding and raising bees is known as...",
    options: {
      A: "Horticulture",
      B: "Sericulture",
      C: "Apiculture",
      D: "Pisciculture",
    },
    correctAnswer: "C",
    explanation:
      "Apiculture, or beekeeping, is the maintenance of bee colonies, commonly in man-made hives. Sericulture is silk farming and pisciculture is fish farming.",
  },
  {
    id: 224,
    subject: "Home Science",
    question:
      "In a formal table setting, where is the dinner fork usually placed?",
    options: {
      A: "To the right of the plate",
      B: "Above the plate",
      C: "To the left of the plate",
      D: "On the plate itself",
    },
    correctAnswer: "C",
    explanation:
      "In a standard formal setting, the forks are placed to the left of the dinner plate, with the dinner fork being the largest one.",
  },
  {
    id: 225,
    subject: "Pre-Technical Studies",
    question: "Which of these is a safety device worn to protect the eyes?",
    options: {
      A: "Gloves",
      B: "Safety boots",
      C: "Helmet",
      D: "Goggles",
    },
    correctAnswer: "D",
    explanation:
      "Goggles are forms of protective eyewear that enclose or protect the area surrounding the eye in order to prevent particulates, water or chemicals from striking the eyes.",
  },
  {
    id: 226,
    subject: "Creative Art",
    question:
      "A type of weaving where the weft threads are beaten down to completely cover the warp threads is called?",
    options: {
      A: "Knitting",
      B: "Crocheting",
      C: "Tapestry",
      D: "Macramé",
    },
    correctAnswer: "C",
    explanation:
      "Tapestry is a form of textile art, traditionally woven by hand on a loom. It is weft-faced weaving, in which all the warp threads are hidden in the completed work, unlike cloth weaving where both the warp and the weft threads may be visible.",
  },
  {
    id: 227,
    subject: "sports",
    question:
      "How many players are on a standard volleyball team on the court at one time?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "9",
    },
    correctAnswer: "B",
    explanation:
      "A standard volleyball team consists of six players on the court at any given time. Three are in the front row and three are in the back row.",
  },
  {
    id: 228,
    subject: "Mathematics",
    question: "Calculate 15 × (4 + 6).",
    options: {
      A: "66",
      B: "90",
      C: "150",
      D: "120",
    },
    correctAnswer: "C",
    explanation:
      "According to the order of operations (BODMAS/PEMDAS), you must solve the part in the brackets first. 4 + 6 = 10. Then, 15 × 10 = 150.",
  },
  {
    id: 229,
    subject: "English",
    question: "What type of word is 'run', 'eat', 'sleep'?",
    options: {
      A: "Noun",
      B: "Adjective",
      C: "Verb",
      D: "Pronoun",
    },
    correctAnswer: "C",
    explanation:
      "These are all verbs, as they describe actions or states of being.",
  },
  {
    id: 230,
    subject: "Kiswahili",
    question: "Udogo wa neno 'mtu' ni upi?",
    options: {
      A: "Jitu",
      B: "Kitu",
      C: "Kijitu",
      D: "Watu",
    },
    correctAnswer: "C",
    explanation:
      "Udogo (diminutive) wa nomino 'mtu' ni 'kijitu', unaonyesha mtu mdogo au duni. 'Jitu' ni ukubwa (augmentative).",
  },
  {
    id: 231,
    subject: "Social Studies",
    question: "A map's key or legend is used to...",
    options: {
      A: "Show the direction of North",
      B: "Explain the meaning of the symbols used on the map",
      C: "Show the distance between places",
      D: "Indicate the title of the map",
    },
    correctAnswer: "B",
    explanation:
      "The legend or key on a map explains what the symbols and colors on the map represent, allowing the user to understand the information being presented.",
  },
  {
    id: 232,
    subject: "Agriculture",
    question: "Which of the following is a method of vegetative propagation?",
    options: {
      A: "Planting seeds",
      B: "Pollination",
      C: "Grafting",
      D: "Fertilization",
    },
    correctAnswer: "C",
    explanation:
      "Vegetative propagation is a type of asexual reproduction in plants. Grafting is a technique where tissues of plants are joined so as to continue their growth together, combining the characteristics of two plants.",
  },
  {
    id: 233,
    subject: "Home Science",
    question:
      "What is the main purpose of adding a raising agent like baking powder to a cake mixture?",
    options: {
      A: "To add flavor",
      B: "To add color",
      C: "To make the cake rise and become light",
      D: "To preserve the cake",
    },
    correctAnswer: "C",
    explanation:
      "Raising agents (or leavening agents) produce gas bubbles in a dough or batter. This causes the mixture to expand and rise, resulting in a lighter, softer texture.",
  },
  {
    id: 234,
    subject: "Pre-Technical Studies",
    question: "What is an alloy?",
    options: {
      A: "A pure chemical element",
      B: "A non-metallic material",
      C: "A mixture of a metal with at least one other element",
      D: "A type of plastic",
    },
    correctAnswer: "C",
    explanation:
      "An alloy is a substance made by melting two or more elements together, at least one of them a metal. For example, brass is an alloy of copper and zinc.",
  },
  {
    id: 235,
    subject: "Creative Art",
    question:
      "What do you call a drawing that is a simplified and/or exaggerated representation of a person or situation?",
    options: {
      A: "A portrait",
      B: "A landscape",
      C: "A caricature",
      D: "A still life",
    },
    correctAnswer: "C",
    explanation:
      "A caricature is a rendered image showing the features of its subject in a simplified or exaggerated way through sketching, pencil strokes, or other artistic drawings.",
  },
  {
    id: 236,
    subject: "sports",
    question: "In which country did the sport of rugby originate?",
    options: {
      A: "Australia",
      B: "South Africa",
      C: "New Zealand",
      D: "England",
    },
    correctAnswer: "D",
    explanation:
      "The sport of rugby football is said to have originated at Rugby School in Rugby, Warwickshire, England, in 1823.",
  },
  {
    id: 237,
    subject: "Mathematics",
    question: "How many degrees are in a right angle?",
    options: {
      A: "45 degrees",
      B: "90 degrees",
      C: "180 degrees",
      D: "360 degrees",
    },
    correctAnswer: "B",
    explanation:
      "A right angle is an angle of exactly 90 degrees, corresponding to a quarter turn.",
  },
  {
    id: 238,
    subject: "English",
    question:
      "The book was written ___ Jane. Which preposition fits in the blank?",
    options: {
      A: "by",
      B: "with",
      C: "from",
      D: "at",
    },
    correctAnswer: "A",
    explanation:
      "The preposition 'by' is used to show who created or did something. Therefore, 'The book was written by Jane' is correct.",
  },
  {
    id: 239,
    subject: "Kiswahili",
    question:
      "Mtu anayeongoza chombo cha angani, kama vile ndege, huitwa nani?",
    options: {
      A: "Nahodha",
      B: "Dereva",
      C: "Rubani",
      D: "Kondakta",
    },
    correctAnswer: "C",
    explanation:
      "Rubani (pilot) ndiye mtu aliyefunzwa kuendesha chombo cha angani. Nahodha huongoza meli na dereva huendesha gari.",
  },
  {
    id: 240,
    subject: "Social Studies",
    question:
      "The movement of people from rural areas to urban areas is known as...",
    options: {
      A: "Immigration",
      B: "Emigration",
      C: "Urbanization",
      D: "Migration",
    },
    correctAnswer: "C",
    explanation:
      "Urbanization refers to the population shift from rural to urban areas, the corresponding decrease in the proportion of people living in rural areas, and the ways in which societies adapt to this change.",
  },
  {
    id: 241,
    subject: "Agriculture",
    question:
      "The practice of rotating different crops in a sequence on the same land is called?",
    options: {
      A: "Monoculture",
      B: "Intercropping",
      C: "Crop rotation",
      D: "Mixed farming",
    },
    correctAnswer: "C",
    explanation:
      "Crop rotation is the practice of growing a series of different types of crops in the same area across a sequence of growing seasons. It reduces reliance on one set of nutrients, pest and weed pressure, and the probability of developing resistant pests and weeds.",
  },
  {
    id: 242,
    subject: "Home Science",
    question: "Which of these is NOT a basic food group?",
    options: {
      A: "Fruits",
      B: "Vegetables",
      C: "Sugars",
      D: "Grains",
    },
    correctAnswer: "C",
    explanation:
      "The basic food groups are typically categorized as fruits, vegetables, grains, protein foods, and dairy. While sugars provide energy, they are not considered a foundational food group for a healthy diet.",
  },
  {
    id: 243,
    subject: "Pre-Technical Studies",
    question:
      "The central processing unit (CPU) is often referred to as the ___ of the computer.",
    options: {
      A: "Memory",
      B: "Brain",
      C: "Heart",
      D: "Eye",
    },
    correctAnswer: "B",
    explanation:
      "The CPU is called the 'brain' of the computer because it performs most of the processing inside the computer, executing instructions and performing calculations.",
  },
  {
    id: 244,
    subject: "Creative Art",
    question: "Which of these is a principle of design?",
    options: {
      A: "Line",
      B: "Shape",
      C: "Color",
      D: "Contrast",
    },
    correctAnswer: "D",
    explanation:
      "Contrast is a principle of design that refers to the arrangement of opposite elements (light vs. dark colors, rough vs. smooth textures, large vs. small shapes, etc.) in a piece so as to create visual interest. Line, shape, and color are elements of art.",
  },
  {
    id: 245,
    subject: "sports",
    question: "In athletics, a relay race is run by a...",
    options: {
      A: "Single person",
      B: "Pair of runners",
      C: "Team of runners",
      D: "Group of marathoners",
    },
    correctAnswer: "C",
    explanation:
      "A relay race is a track and field event in which a team of runners (typically four) run a set distance, passing a baton to the next runner.",
  },
  {
    id: 246,
    subject: "Mathematics",
    question: "What is the value of 2³ (2 cubed)?",
    options: {
      A: "5",
      B: "6",
      C: "8",
      D: "9",
    },
    correctAnswer: "C",
    explanation:
      "Cubing a number means multiplying it by itself three times. 2³ = 2 × 2 × 2 = 8.",
  },
  {
    id: 247,
    subject: "English",
    question: "A play is divided into sections called...",
    options: {
      A: "Chapters",
      B: "Stanzas",
      C: "Acts and Scenes",
      D: "Paragraphs",
    },
    correctAnswer: "C",
    explanation:
      "A play is typically structured into major divisions called acts, which are further divided into smaller sections called scenes. Books have chapters, poems have stanzas, and prose has paragraphs.",
  },
  {
    id: 248,
    subject: "Kiswahili",
    question: "Mnyama anayefanana na binadamu na huishi mitini ni yupi?",
    options: {
      A: "Simba",
      B: "Tumbili",
      C: "Twiga",
      D: "Kifaru",
    },
    correctAnswer: "B",
    explanation:
      "Tumbili au nyani (monkey/ape) ni wanyama wanaofanana na binadamu kwa maumbile na tabia fulani, na wengi wao huishi juu ya miti.",
  },
  {
    id: 249,
    subject: "Social Studies",
    question: "Which of these is a fossil fuel?",
    options: {
      A: "Wood",
      B: "Solar energy",
      C: "Coal",
      D: "Wind energy",
    },
    correctAnswer: "C",
    explanation:
      "Fossil fuels are natural fuels such as coal, oil, and natural gas, formed in the geological past from the remains of living organisms.",
  },
  {
    id: 250,
    subject: "Agriculture",
    question: "The practice of keeping farm animals is known as...",
    options: {
      A: "Horticulture",
      B: "Crop farming",
      C: "Livestock farming",
      D: "Forestry",
    },
    correctAnswer: "C",
    explanation:
      "Livestock farming or animal husbandry is the branch of agriculture concerned with animals that are raised for meat, fibre, eggs, milk, or other products.",
  },
  {
    id: 251,
    subject: "Home Science",
    question: "A list of dishes available at a restaurant is called a...",
    options: {
      A: "Recipe",
      B: "Budget",
      C: "Menu",
      D: "Schedule",
    },
    correctAnswer: "C",
    explanation:
      "A menu is a list of food and beverages offered to customers and the prices. A recipe provides instructions on how to prepare a dish.",
  },
  {
    id: 252,
    subject: "Pre-Technical Studies",
    question: "The tool used to drive nails into wood is a...",
    options: {
      A: "Screwdriver",
      B: "Hammer",
      C: "Pliers",
      D: "Wrench",
    },
    correctAnswer: "B",
    explanation:
      "A hammer is a tool consisting of a weighted 'head' fixed to a long handle that is swung to deliver an impact to a small area of an object, such as driving a nail.",
  },
  {
    id: 253,
    subject: "Creative Art",
    question: "The relative lightness or darkness of a color is called its...",
    options: {
      A: "Hue",
      B: "Intensity",
      C: "Value",
      D: "Saturation",
    },
    correctAnswer: "C",
    explanation:
      "In color theory, value, also known as lightness or tone, is a property of a color that describes how light or dark it is. A tint is a color with white added, and a shade is a color with black added.",
  },
  {
    id: 254,
    subject: "sports",
    question: "Which sport is known as 'The Beautiful Game'?",
    options: {
      A: "Cricket",
      B: "Rugby",
      C: "Tennis",
      D: "Football (Soccer)",
    },
    correctAnswer: "D",
    explanation:
      "Football (soccer) is often referred to as 'The Beautiful Game' ('O Jogo Bonito' in Portuguese), a nickname popularized by the Brazilian footballer Pelé.",
  },
  {
    id: 255,
    subject: "Mathematics",
    question:
      "What is the perimeter of a rectangle with length 10m and width 7m?",
    options: {
      A: "17 m",
      B: "34 m",
      C: "70 m",
      D: "24 m",
    },
    correctAnswer: "B",
    explanation:
      "The perimeter of a rectangle is calculated using the formula P = 2(L + W). So, P = 2(10m + 7m) = 2(17m) = 34 m.",
  },
  {
    id: 256,
    subject: "English",
    question: "The superlative form of the adjective 'tall' is...",
    options: {
      A: "Taller",
      B: "Tallest",
      C: "More tall",
      D: "Most tall",
    },
    correctAnswer: "B",
    explanation:
      "For most one-syllable adjectives, the comparative is formed by adding '-er' and the superlative by adding '-est'. So, tall (positive), taller (comparative), tallest (superlative).",
  },
  {
    id: 257,
    subject: "Kiswahili",
    question:
      "Kitenzi kikuu katika sentensi 'Mwanafunzi anasoma kitabu chake' ni kipi?",
    options: {
      A: "Mwanafunzi",
      B: "Anasoma",
      C: "Kitabu",
      D: "Chake",
    },
    correctAnswer: "B",
    explanation:
      "Kitenzi ni neno linaloonyesha kitendo au hali. Katika sentensi hii, 'anasoma' ndicho kitendo kinachofanywa, hivyo ni kitenzi kikuu.",
  },
  {
    id: 258,
    subject: "Social Studies",
    question: "What is the main function of a political party?",
    options: {
      A: "To provide entertainment to the public",
      B: "To run businesses and make profit",
      C: "To group people with similar ideologies to win elections and form a government",
      D: "To act as a law enforcement agency",
    },
    correctAnswer: "C",
    explanation:
      "A political party is an organization that coordinates candidates to compete in a particular country's elections. It is common for the members of a party to hold similar ideas about politics, and parties may promote specific ideological or policy goals.",
  },
  {
    id: 259,
    subject: "Agriculture",
    question:
      "The process of transferring pollen from the anther to the stigma of a plant is called?",
    options: {
      A: "Germination",
      B: "Pollination",
      C: "Fertilization",
      D: "Photosynthesis",
    },
    correctAnswer: "B",
    explanation:
      "Pollination is a crucial step in the reproduction of flowering plants. It can be carried out by wind, water, or animals (pollinators).",
  },
  {
    id: 260,
    subject: "Home Science",
    question: "Which of these is a way to make a home safe for young children?",
    options: {
      A: "Leaving small objects on the floor",
      B: "Keeping medicines in low, unlocked cabinets",
      C: "Covering electrical outlets",
      D: "Leaving cleaning supplies open",
    },
    correctAnswer: "C",
    explanation:
      "Childproofing a home involves taking steps to make it a safe environment for a child. Covering electrical outlets prevents children from poking objects into them and getting an electric shock.",
  },
  {
    id: 261,
    subject: "Pre-Technical Studies",
    question:
      "Which material is made by gluing together thin layers of wood veneer?",
    options: {
      A: "Chipboard",
      B: "Plywood",
      C: "Hardboard",
      D: "MDF",
    },
    correctAnswer: "B",
    explanation:
      "Plywood is a sheet material manufactured from thin layers or 'plies' of wood veneer that are glued together with adjacent layers having their wood grain rotated up to 90 degrees to one another.",
  },
  {
    id: 262,
    subject: "Creative Art",
    question: "An image that represents an idea or a thing is called a...",
    options: {
      A: "Symbol",
      B: "Pattern",
      C: "Texture",
      D: "Form",
    },
    correctAnswer: "A",
    explanation:
      "A symbol is a mark, sign, or word that indicates, signifies, or is understood as representing an idea, object, or relationship. For example, a dove is a symbol of peace.",
  },
  {
    id: 263,
    subject: "sports",
    question:
      "The Tour de France is a famous annual competition in which sport?",
    options: {
      A: "Running",
      B: "Motorsport",
      C: "Sailing",
      D: "Cycling",
    },
    correctAnswer: "D",
    explanation:
      "The Tour de France is an annual men's multiple-stage bicycle race primarily held in France, while also occasionally passing through nearby countries.",
  },
  {
    id: 264,
    subject: "Mathematics",
    question: "Express 3/5 as a percentage.",
    options: {
      A: "30%",
      B: "50%",
      C: "60%",
      D: "75%",
    },
    correctAnswer: "C",
    explanation:
      "To convert a fraction to a percentage, divide the numerator by the denominator and multiply by 100. (3 / 5) × 100 = 0.6 × 100 = 60%.",
  },
  {
    id: 265,
    subject: "English",
    question: "The opposite of 'brave' is...",
    options: {
      A: "Strong",
      B: "Cowardly",
      C: "Bold",
      D: "Happy",
    },
    correctAnswer: "B",
    explanation:
      "The antonym for 'brave' is 'cowardly', which means lacking courage.",
  },
  {
    id: 266,
    subject: "Kiswahili",
    question: "Nyumba ya jadi ya Wamasai hujengwa kwa kutumia nini hasa?",
    options: {
      A: "Matofali na saruji",
      B: "Miti, matope na samadi ya ng'ombe",
      C: "Mabati na mbao",
      D: "Mawe na udongo",
    },
    correctAnswer: "B",
    explanation:
      "Manyatta, au boma la Wamasai, hujengwa kwa kutumia vifaa vinavyopatikana katika mazingira yao, kama vile miti kama nguzo, na mchanganyiko wa matope, majani, na samadi (kinyesi) cha ng'ombe kwa kuta.",
  },
  {
    id: 267,
    subject: "Social Studies",
    question: "What does a historian study?",
    options: {
      A: "Rocks and minerals",
      B: "The past, based on evidence",
      C: "The behavior of animals",
      D: "The stars and planets",
    },
    correctAnswer: "B",
    explanation:
      "A historian is an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon. They use sources like documents, artifacts, and oral accounts to interpret the past.",
  },
  {
    id: 268,
    subject: "Agriculture",
    question: "Which of these is a benefit of agroforestry?",
    options: {
      A: "It increases soil erosion",
      B: "It reduces biodiversity",
      C: "It improves soil fertility and prevents erosion",
      D: "It requires heavy use of chemical fertilizers",
    },
    correctAnswer: "C",
    explanation:
      "Agroforestry is the practice of deliberately integrating trees and shrubs into crop and animal farming systems. It has many benefits, including improving soil health, preventing erosion, and providing additional products like fruit or timber.",
  },
  {
    id: 269,
    subject: "Home Science",
    question:
      "A small, painful area of thickened skin on the foot, often caused by ill-fitting shoes, is called a...",
    options: {
      A: "Blister",
      B: "Cut",
      C: "Bruise",
      D: "Corn",
    },
    correctAnswer: "D",
    explanation:
      "A corn is a distinctively shaped callus of dead skin that usually occurs on thin or hairless skin surfaces, especially on the top of the toes. They are caused by pressure and friction.",
  },
  {
    id: 270,
    subject: "Pre-Technical Studies",
    question:
      "What is the function of the 'Undo' command in a computer program?",
    options: {
      A: "To save the current file",
      B: "To delete the current file",
      C: "To repeat the last action",
      D: "To reverse the last action",
    },
    correctAnswer: "D",
    explanation:
      "The undo command is a function that reverses the effect of the last command or action performed by the user. It is a common feature in most software applications.",
  },
  {
    id: 271,
    subject: "Creative Art",
    question:
      "The part of a picture that appears to be closest to the viewer is the...",
    options: {
      A: "Background",
      B: "Middle ground",
      C: "Foreground",
      D: "Horizon",
    },
    correctAnswer: "C",
    explanation:
      "In a picture, the foreground is the area that seems to be nearest to the viewer. The background is the area furthest away, and the middle ground is between them.",
  },
  {
    id: 272,
    subject: "sports",
    question: "In which city were the first modern Olympic Games held in 1896?",
    options: {
      A: "Paris",
      B: "London",
      C: "Athens",
      D: "Rome",
    },
    correctAnswer: "C",
    explanation:
      "The first international Olympic Games to be held in modern history took place in Athens, Greece, in 1896, in homage to the ancient games held in Olympia.",
  },
  {
    id: 273,
    subject: "Mathematics",
    question: "If x = 5 and y = 3, what is the value of 2x + y?",
    options: {
      A: "10",
      B: "13",
      C: "16",
      D: "28",
    },
    correctAnswer: "B",
    explanation:
      "Substitute the values of x and y into the expression. 2x + y = 2(5) + 3 = 10 + 3 = 13.",
  },
  {
    id: 274,
    subject: "English",
    question:
      "A direct comparison between two unlike things without using 'like' or 'as' is a...",
    options: {
      A: "Simile",
      B: "Metaphor",
      C: "Personification",
      D: "Alliteration",
    },
    correctAnswer: "B",
    explanation:
      "A metaphor is a figure of speech that directly asserts that one thing is another. For example, 'The classroom was a zoo'.",
  },
  {
    id: 275,
    subject: "Kiswahili",
    question: "Mtoto wa kwanza katika familia huitwaje?",
    options: {
      A: "Kitinda mimba",
      B: "Kifungua mimba",
      C: "Mwanambee",
      D: "Kijana",
    },
    correctAnswer: "B",
    explanation:
      "Mtoto wa kwanza kuzaliwa katika familia huitwa 'kifungua mimba'. Mtoto wa mwisho huitwa 'kitinda mimba'.",
  },
  {
    id: 276,
    subject: "Social Studies",
    question:
      "The symbols on the Kenyan Coat of Arms include two lions, a shield, two spears, and...",
    options: {
      A: "An eagle",
      B: "A rooster holding an axe",
      C: "The Kenyan flag",
      D: "A scroll with the word 'Harambee'",
    },
    correctAnswer: "B",
    explanation:
      "The shield on the Kenyan Coat of Arms contains a rooster holding an axe, which according to local customs, represents a new and prosperous life. The scroll contains the national motto 'Harambee'.",
  },
  {
    id: 277,
    subject: "Agriculture",
    question:
      "Which of these is a way of storing water for agricultural use during dry seasons?",
    options: {
      A: "Building a dam or reservoir",
      B: "Digging drainage channels",
      C: "Applying mulch to the soil",
      D: "Planting cover crops",
    },
    correctAnswer: "A",
    explanation:
      "Dams and reservoirs are built across rivers to store large quantities of water, which can then be released in a controlled manner for irrigation, domestic use, or generating electricity.",
  },
  {
    id: 278,
    subject: "Home Science",
    question: "What is anaemia?",
    options: {
      A: "A condition caused by too much sugar in the blood",
      B: "A condition where there is a deficiency of red blood cells or haemoglobin",
      C: "A disease affecting the bones and joints",
      D: "An infectious disease of the lungs",
    },
    correctAnswer: "B",
    explanation:
      "Anaemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues. It is often caused by a deficiency of iron.",
  },
  {
    id: 279,
    subject: "Pre-Technical Studies",
    question:
      "The process of applying a thin coat of zinc to iron or steel to prevent rusting is called...",
    options: {
      A: "Painting",
      B: "Electroplating",
      C: "Galvanizing",
      D: "Anodizing",
    },
    correctAnswer: "C",
    explanation:
      "Galvanizing is the process of applying a protective zinc coating to steel or iron to prevent rusting. The zinc acts as a sacrificial anode, corroding before the iron.",
  },
  {
    id: 280,
    subject: "Creative Art",
    question: "The art of beautiful handwriting is called...",
    options: {
      A: "Typography",
      B: "Calligraphy",
      C: "Graffiti",
      D: "Sketching",
    },
    correctAnswer: "B",
    explanation:
      "Calligraphy is a visual art related to writing. It is the design and execution of lettering with a pen, ink brush, or other writing instrument.",
  },
  {
    id: 281,
    subject: "sports",
    question: "How many holes are there on a standard golf course?",
    options: {
      A: "9",
      B: "12",
      C: "18",
      D: "24",
    },
    correctAnswer: "C",
    explanation:
      "A standard round of golf consists of playing 18 holes. Some smaller courses, called 'nine-hole courses', are designed for playing a round of 9 holes.",
  },
  {
    id: 282,
    subject: "Mathematics",
    question: "Which of these is a unit of mass?",
    options: {
      A: "Meter",
      B: "Liter",
      C: "Gram",
      D: "Second",
    },
    correctAnswer: "C",
    explanation:
      "The gram is a unit of mass in the metric system. The meter is a unit of length, the liter is a unit of volume, and the second is a unit of time.",
  },
  {
    id: 283,
    subject: "English",
    question:
      "The repetition of the same sound at the beginning of words in a phrase or sentence is...",
    options: {
      A: "Rhyme",
      B: "Rhythm",
      C: "Alliteration",
      D: "Onomatopoeia",
    },
    correctAnswer: "C",
    explanation:
      "Alliteration is the conspicuous repetition of identical initial consonant sounds in successive or closely associated syllables within a group of words. For example, 'Peter Piper picked a peck of pickled peppers'.",
  },
  {
    id: 284,
    subject: "Kiswahili",
    question: "Neno 'karatasi' lina asili ya lugha gani?",
    options: {
      A: "Kireno",
      B: "Kigiriki",
      C: "Kiarabu",
      D: "Kiingereza",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'karatasi' limetokana na neno la Kiarabu 'qartas', ambalo nalo lilitokana na neno la Kigiriki 'khartēs'.",
  },
  {
    id: 285,
    subject: "Social Studies",
    question:
      "A system of winds rotating inwards to an area of low barometric pressure is known as a...",
    options: {
      A: "Tornado",
      B: "Cyclone",
      C: "Monsoon",
      D: "Breeze",
    },
    correctAnswer: "B",
    explanation:
      "A cyclone is a large-scale air mass that rotates around a strong center of low atmospheric pressure. They are characterized by inward-spiraling winds.",
  },
  {
    id: 286,
    subject: "Agriculture",
    question: "What is a greenhouse used for?",
    options: {
      A: "Storing farm machinery",
      B: "Housing livestock in winter",
      C: "Growing plants in a controlled environment",
      D: "Storing harvested grain",
    },
    correctAnswer: "C",
    explanation:
      "A greenhouse is a structure with walls and roof made chiefly of transparent material, such as glass, in which plants requiring regulated climatic conditions are grown.",
  },
  {
    id: 287,
    subject: "Home Science",
    question:
      "Which sewing tool is used to protect the finger from being pricked by a needle?",
    options: {
      A: "Pin cushion",
      B: "Thimble",
      C: "Tape measure",
      D: "Seam ripper",
    },
    correctAnswer: "B",
    explanation:
      "A thimble is a small pitted cup worn on the finger that protects it from being pricked by a needle while sewing.",
  },
  {
    id: 288,
    subject: "Pre-Technical Studies",
    question: "Which of these is a type of mechanical energy?",
    options: {
      A: "Light energy",
      B: "Chemical energy",
      C: "Kinetic energy",
      D: "Nuclear energy",
    },
    correctAnswer: "C",
    explanation:
      "Mechanical energy is the sum of potential energy and kinetic energy. Kinetic energy is the energy an object has due to its motion.",
  },
  {
    id: 289,
    subject: "Creative Art",
    question: "A shade is a color with ___ added to it.",
    options: {
      A: "White",
      B: "Black",
      C: "Gray",
      D: "Its complementary color",
    },
    correctAnswer: "B",
    explanation:
      "In color theory, a shade is a mixture of a color with black, which increases darkness. A tint is a mixture with white, which increases lightness.",
  },
  {
    id: 290,
    subject: "sports",
    question: "Which of these is a piece used in the game of chess?",
    options: {
      A: "A checker",
      B: "A domino",
      C: "A knight",
      D: "A die",
    },
    correctAnswer: "C",
    explanation:
      "The six types of pieces in chess are the king, queen, rook, bishop, knight, and pawn.",
  },
  {
    id: 291,
    subject: "Mathematics",
    question: "How many sides does a pentagon have?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "B",
    explanation: "A pentagon is a polygon with five sides and five angles.",
  },
  {
    id: 292,
    subject: "English",
    question:
      "A word that imitates the sound it describes, like 'buzz' or 'meow', is called...",
    options: {
      A: "An adverb",
      B: "An adjective",
      C: "Onomatopoeia",
      D: "A verb",
    },
    correctAnswer: "C",
    explanation:
      "Onomatopoeia is the process of creating a word that phonetically imitates, resembles, or suggests the sound that it describes.",
  },
  {
    id: 293,
    subject: "Kiswahili",
    question:
      "Kifaa cha mbao kinachotumiwa na seremala kulainisha mbao huitwaje?",
    options: {
      A: "Nyundo",
      B: "Msumeno",
      C: "Panga",
      D: "Randa",
    },
    correctAnswer: "D",
    explanation:
      "Randa (plane) ni kifaa chenye ukali kinachotumiwa na maseremala kusawazisha na kulainisha uso wa mbao.",
  },
  {
    id: 294,
    subject: "Social Studies",
    question: "What is the main cause of the seasons on Earth?",
    options: {
      A: "The Earth's distance from the sun",
      B: "The tilt of the Earth's axis of rotation",
      C: "The Earth's rotation on its axis",
      D: "The phases of the moon",
    },
    correctAnswer: "B",
    explanation:
      "The seasons are caused by the tilt of the Earth's rotational axis away or toward the sun as it travels through its year-long path around the sun.",
  },
  {
    id: 295,
    subject: "Agriculture",
    question: "A castrated male sheep is known as a...",
    options: {
      A: "Ram",
      B: "Ewe",
      C: "Lamb",
      D: "Wether",
    },
    correctAnswer: "D",
    explanation:
      "A wether is a castrated male sheep or goat. A ram is an uncastrated male, and an ewe is a female.",
  },
  {
    id: 296,
    subject: "Home Science",
    question: "Which of these is a way of managing waste responsibly?",
    options: {
      A: "Dumping it in a river",
      B: "Burning it in the open",
      C: "Burying it anywhere",
      D: "Recycling and composting",
    },
    correctAnswer: "D",
    explanation:
      "Responsible waste management involves reducing, reusing, recycling, and composting to minimize the amount of waste that goes to landfills and to prevent pollution.",
  },
  {
    id: 297,
    subject: "Pre-Technical Studies",
    question: "Which tool is used to measure angles?",
    options: {
      A: "Ruler",
      B: "Protractor",
      C: "Compass",
      D: "T-square",
    },
    correctAnswer: "B",
    explanation:
      "A protractor is a measuring instrument, typically made of transparent plastic or glass, for measuring angles. Most protractors measure angles in degrees.",
  },
  {
    id: 298,
    subject: "Creative Art",
    question:
      "The representation of a person, especially the face, is called a...",
    options: {
      A: "Landscape",
      B: "Still life",
      C: "Portrait",
      D: "Genre painting",
    },
    correctAnswer: "C",
    explanation:
      "A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expression is predominant.",
  },
  {
    id: 299,
    subject: "sports",
    question: "What is the term for a score of 40-40 in tennis?",
    options: {
      A: "Advantage",
      B: "Game",
      C: "Deuce",
      D: "Tie-break",
    },
    correctAnswer: "C",
    explanation:
      "In tennis, if both players reach a score of 40 in a game, the score is called 'deuce'. A player must then win two consecutive points to win the game.",
  },
  {
    id: 300,
    subject: "Mathematics",
    question:
      "A line segment that passes through the center of a circle and has both endpoints on the circle is called the...",
    options: {
      A: "Radius",
      B: "Diameter",
      C: "Chord",
      D: "Arc",
    },
    correctAnswer: "B",
    explanation:
      "The diameter is the longest chord of a circle. It is twice the length of the radius.",
  },
  {
    id: 301,
    subject: "Mathematics",
    question: "What is the greatest common divisor (GCD) of 12 and 18?",
    options: {
      A: "2",
      B: "3",
      C: "6",
      D: "9",
    },
    correctAnswer: "C",
    explanation:
      "The divisors of 12 are 1, 2, 3, 4, 6, 12. The divisors of 18 are 1, 2, 3, 6, 9, 18. The greatest number that appears in both lists is 6.",
  },
  {
    id: 302,
    subject: "English",
    question: "Which of these is a pronoun?",
    options: {
      A: "Run",
      B: "Quickly",
      C: "She",
      D: "House",
    },
    correctAnswer: "C",
    explanation:
      "A pronoun is a word that is used instead of a noun or noun phrase. 'She' can be used to replace a female noun like 'Mary' or 'the girl'.",
  },
  {
    id: 303,
    subject: "Kiswahili",
    question: "Mtu anayefanya kazi ya ushonaji nguo huitwaje?",
    options: {
      A: "Seremala",
      B: "Mhunzi",
      C: "Mkulima",
      D: "Mshonaji",
    },
    correctAnswer: "D",
    explanation:
      "Mshonaji (tailor) ni fundi anayeshughulika na kushona au kurekebisha mavazi. Seremala hufanya kazi ya mbao, na mhunzi hufanya kazi ya chuma.",
  },
  {
    id: 304,
    subject: "Social Studies",
    question: "The introduction to the Constitution of Kenya is called the...",
    options: {
      A: "Preface",
      B: "Preamble",
      C: "Index",
      D: "Glossary",
    },
    correctAnswer: "B",
    explanation:
      "A preamble is a brief introductory statement of a constitution's fundamental purposes and guiding principles. It states the source from which the constitution derives its authority.",
  },
  {
    id: 305,
    subject: "Agriculture",
    question: "Which of these is a form of intensive farming?",
    options: {
      A: "Nomadic pastoralism",
      B: "Shifting cultivation",
      C: "Zero grazing",
      D: "Ranching",
    },
    correctAnswer: "C",
    explanation:
      "Intensive farming involves high inputs of capital and labor to increase the yield from a small area of land. Zero grazing is an intensive system where dairy cattle are kept in confinement and fodder is brought to them.",
  },
  {
    id: 306,
    subject: "Home Science",
    question:
      "The body's process of breaking down food into substances it can use is called...",
    options: {
      A: "Respiration",
      B: "Circulation",
      C: "Digestion",
      D: "Excretion",
    },
    correctAnswer: "C",
    explanation:
      "Digestion is the complex process of turning the food you eat into nutrients, which the body uses for energy, growth and cell repair needed to survive.",
  },
  {
    id: 307,
    subject: "Pre-Technical Studies",
    question:
      "The property of a metal to be drawn out into a thin wire is called...",
    options: {
      A: "Malleability",
      B: "Ductility",
      C: "Brittleness",
      D: "Hardness",
    },
    correctAnswer: "B",
    explanation:
      "Ductility is a measure of a metal's ability to withstand tensile stress—any force that pulls the two ends of a material away from each other. Malleability is the ability to be hammered into a thin sheet.",
  },
  {
    id: 308,
    subject: "Creative Art",
    question: "A tint is a color with ___ added to it.",
    options: {
      A: "White",
      B: "Black",
      C: "Gray",
      D: "Its complementary color",
    },
    correctAnswer: "A",
    explanation:
      "In color theory, a tint is a mixture of a color with white, which increases lightness. A shade is a mixture with black, which increases darkness.",
  },
  {
    id: 309,
    subject: "sports",
    question:
      "What is the name of the trophy awarded to the winner of the FIFA World Cup?",
    options: {
      A: "The Champions League Trophy",
      B: "The Webb Ellis Cup",
      C: "The FIFA World Cup Trophy",
      D: "The Stanley Cup",
    },
    correctAnswer: "C",
    explanation:
      "The current trophy, called the FIFA World Cup Trophy, has been awarded since 1974. The Webb Ellis Cup is for rugby, and the Stanley Cup is for ice hockey.",
  },
  {
    id: 310,
    subject: "Mathematics",
    question: "What type of triangle has all three sides of equal length?",
    options: {
      A: "Isosceles",
      B: "Scalene",
      C: "Equilateral",
      D: "Right-angled",
    },
    correctAnswer: "C",
    explanation:
      "An equilateral triangle is a triangle in which all three sides have the same length and all three angles are equal (60 degrees).",
  },
  {
    id: 311,
    subject: "English",
    question: "What is the plural of 'mouse'?",
    options: {
      A: "Mouses",
      B: "Mice",
      C: "Micees",
      D: "Mouse",
    },
    correctAnswer: "B",
    explanation: "'Mouse' has an irregular plural form, which is 'mice'.",
  },
  {
    id: 312,
    subject: "Kiswahili",
    question: "Sehemu ya chini ya mguu ambayo hukanyagia chini huitwaje?",
    options: {
      A: "Kisigino",
      B: "Unyayo",
      C: "Goti",
      D: "Kifundo",
    },
    correctAnswer: "B",
    explanation:
      "Unyayo ni sehemu ya chini ya mguu, yaani wayo. Kisigino ni sehemu ya nyuma ya unyayo.",
  },
  {
    id: 313,
    subject: "Social Studies",
    question: "Which one of these is a human right?",
    options: {
      A: "The right to own a car",
      B: "The right to education",
      C: "The right to a holiday",
      D: "The right to a smartphone",
    },
    correctAnswer: "B",
    explanation:
      "Human rights are rights inherent to all human beings. The right to education is a fundamental human right recognized in international law, including the Universal Declaration of Human Rights.",
  },
  {
    id: 314,
    subject: "Agriculture",
    question:
      "The practice of growing plants in a nutrient-rich water solution without soil is called...",
    options: {
      A: "Aquaculture",
      B: "Hydroponics",
      C: "Geoponics",
      D: "Aeroponics",
    },
    correctAnswer: "B",
    explanation:
      "Hydroponics is a type of horticulture and a subset of hydroculture which involves growing plants, usually crops, without soil, by using mineral nutrient solutions in an aqueous solvent.",
  },
  {
    id: 315,
    subject: "Home Science",
    question: "The transfer of heat through direct contact is called...",
    options: {
      A: "Conduction",
      B: "Convection",
      C: "Radiation",
      D: "Evaporation",
    },
    correctAnswer: "A",
    explanation:
      "Conduction is the process by which heat is directly transmitted through a substance when there is a difference of temperature between adjoining regions, without movement of the material. An example is a pan heating up on a stove.",
  },
  {
    id: 316,
    subject: "Pre-Technical Studies",
    question:
      "A line used in a drawing to show the dimensions or size of an object is called a...",
    options: {
      A: "Contour line",
      B: "Hidden line",
      C: "Center line",
      D: "Dimension line",
    },
    correctAnswer: "D",
    explanation:
      "A dimension line is a thin line, broken in the middle to allow the placement of the dimension value, with arrowheads at each end.",
  },
  {
    id: 317,
    subject: "Creative Art",
    question:
      "The use of repeated elements to create a sense of movement in a work of art is called...",
    options: {
      A: "Balance",
      B: "Unity",
      C: "Rhythm",
      D: "Proportion",
    },
    correctAnswer: "C",
    explanation:
      "Rhythm is a principle of design that suggests movement or action. It is usually achieved through repetition of lines, shapes, colors, and more. It creates a visual tempo in artworks.",
  },
  {
    id: 318,
    subject: "sports",
    question: "In cricket, how many stumps are there in a wicket?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctAnswer: "B",
    explanation:
      "A wicket consists of three wooden stumps that are hammered into the ground, topped with two small wooden crosspieces known as bails.",
  },
  {
    id: 319,
    subject: "Mathematics",
    question: "An integer is...",
    options: {
      A: "Any number that can be written as a fraction",
      B: "A whole number that can be positive, negative, or zero",
      C: "A number with a decimal point",
      D: "Only a positive whole number",
    },
    correctAnswer: "B",
    explanation:
      "An integer is a whole number (not a fractional number) that can be positive, negative, or zero. Examples: -3, 0, 5.",
  },
  {
    id: 320,
    subject: "English",
    question: "The words 'flower' and 'flour' are examples of...",
    options: {
      A: "Homographs",
      B: "Synonyms",
      C: "Antonyms",
      D: "Homophones",
    },
    correctAnswer: "D",
    explanation:
      "Homophones are words that are pronounced the same but have different meanings and spellings.",
  },
  {
    id: 321,
    subject: "Kiswahili",
    question: "Neno 'robota' linamaanisha nini?",
    options: {
      A: "Fungu kubwa la bidhaa lililofungwa pamoja",
      B: "Mashine inayofanya kazi kama binadamu",
      C: "Aina ya kiatu",
      D: "Kazi ya kulazimishwa",
    },
    correctAnswer: "A",
    explanation:
      "Robota ni neno linalotumiwa kurejelea kifurushi au fungu kubwa la bidhaa, hasa nguo, pamba au katani, lililofungwa kwa ajili ya kusafirishwa. Kwa Kiingereza ni 'bale'.",
  },
  {
    id: 322,
    subject: "Social Studies",
    question: "What is the currency of Kenya?",
    options: {
      A: "Dollar",
      B: "Pound",
      C: "Shilling",
      D: "Franc",
    },
    correctAnswer: "C",
    explanation:
      "The official currency of the Republic of Kenya is the Kenyan Shilling (KES).",
  },
  {
    id: 323,
    subject: "Agriculture",
    question: "A young pig is called a...",
    options: {
      A: "Piglet",
      B: "Calf",
      C: "Kid",
      D: "Lamb",
    },
    correctAnswer: "A",
    explanation:
      "A piglet is a young pig. A calf is a young cow, a kid is a young goat, and a lamb is a young sheep.",
  },
  {
    id: 324,
    subject: "Home Science",
    question: "Which of these is a way to purify water for drinking?",
    options: {
      A: "Adding sugar",
      B: "Adding salt",
      C: "Boiling",
      D: "Freezing",
    },
    correctAnswer: "C",
    explanation:
      "Boiling water is one of the most effective methods of water purification. Bringing water to a rolling boil for at least one minute kills most bacteria, viruses, and protozoa.",
  },
  {
    id: 325,
    subject: "Pre-Technical Studies",
    question: "The three common states of matter are...",
    options: {
      A: "Metal, Wood, Plastic",
      B: "Hard, Soft, Brittle",
      C: "Solid, Liquid, Gas",
      D: "Conductor, Insulator, Semiconductor",
    },
    correctAnswer: "C",
    explanation:
      "The three classical states of matter are solid, liquid, and gas. A substance's state of matter depends on temperature and pressure.",
  },
  {
    id: 326,
    subject: "Creative Art",
    question:
      "The art of making two- or three-dimensional representative or abstract forms, especially by carving stone or wood or by casting metal or plaster is...",
    options: {
      A: "Painting",
      B: "Drawing",
      C: "Sculpture",
      D: "Printmaking",
    },
    correctAnswer: "C",
    explanation:
      "Sculpture is the branch of the visual arts that operates in three dimensions. It is one of the plastic arts.",
  },
  {
    id: 327,
    subject: "sports",
    question: "Which of these is NOT a field event in athletics?",
    options: {
      A: "Long jump",
      B: "Shot put",
      C: "100-meter sprint",
      D: "Javelin throw",
    },
    correctAnswer: "C",
    explanation:
      "Athletics events are divided into track events (running and walking) and field events (jumping and throwing). The 100-meter sprint is a track event.",
  },
  {
    id: 328,
    subject: "Mathematics",
    question:
      "If a pizza is cut into 8 equal slices and you eat 3 of them, what fraction of the pizza have you eaten?",
    options: {
      A: "1/8",
      B: "3/8",
      C: "5/8",
      D: "3/5",
    },
    correctAnswer: "B",
    explanation:
      "The total number of slices is the denominator (8), and the number of slices you ate is the numerator (3). So, you ate 3/8 of the pizza.",
  },
  {
    id: 329,
    subject: "English",
    question: "Which word means 'a place where books are kept'?",
    options: {
      A: "Museum",
      B: "Library",
      C: "Cinema",
      D: "Stadium",
    },
    correctAnswer: "B",
    explanation:
      "A library is a building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to.",
  },
  {
    id: 330,
    subject: "Kiswahili",
    question: "Ni chombo gani hutumika kupikia chakula jikoni?",
    options: {
      A: "Sahani",
      B: "Sufuria",
      C: "Kikombe",
      D: "Uma",
    },
    correctAnswer: "B",
    explanation:
      "Sufuria (cooking pot) ni chombo kinachotumika jikoni kwa ajili ya kupikia vyakula mbalimbali. Sahani ni ya kulia, kikombe ni cha kunywea, na uma ni wa kulia chakula.",
  },
  {
    id: 331,
    subject: "Social Studies",
    question: "Which continent is known as the 'Dark Continent'?",
    options: {
      A: "Asia",
      B: "Europe",
      C: "Australia",
      D: "Africa",
    },
    correctAnswer: "D",
    explanation:
      "Africa was historically referred to as the 'Dark Continent' by Europeans, primarily because its interior was largely unexplored and mysterious to them for a long period.",
  },
  {
    id: 332,
    subject: "Agriculture",
    question:
      "The tool with a long handle and a flat blade used for digging or moving loose material is a...",
    options: {
      A: "Rake",
      B: "Hoe",
      C: "Shovel",
      D: "Fork",
    },
    correctAnswer: "C",
    explanation:
      "A shovel (or spade) is a tool used for digging, lifting, and moving bulk materials, such as soil, coal, gravel, snow, sand, or ore.",
  },
  {
    id: 333,
    subject: "Home Science",
    question:
      "The process of preserving food in an acidic solution, usually vinegar, is called...",
    options: {
      A: "Canning",
      B: "Freezing",
      C: "Drying",
      D: "Pickling",
    },
    correctAnswer: "D",
    explanation:
      "Pickling is the process of preserving or extending the shelf life of food by either anaerobic fermentation in brine or immersion in an edible acidic solution like vinegar.",
  },
  {
    id: 334,
    subject: "Pre-Technical Studies",
    question: "What does CAD stand for in the context of design and drawing?",
    options: {
      A: "Computer-Aided Design",
      B: "Computer-Assisted Drawing",
      C: "Creative Art and Design",
      D: "Calculated Axis Drawing",
    },
    correctAnswer: "A",
    explanation:
      "CAD, or computer-aided design, is the use of computers to aid in the creation, modification, analysis, or optimization of a design.",
  },
  {
    id: 335,
    subject: "Creative Art",
    question: "What is a palette in painting?",
    options: {
      A: "A type of paintbrush",
      B: "The range of colors used by an artist",
      C: "A type of canvas",
      D: "A tool for mixing paints",
    },
    correctAnswer: "B",
    explanation:
      "While it can also refer to the physical board on which paints are mixed, in art theory, a palette refers to the specific range of colors chosen and used by an artist in a particular artwork.",
  },
  {
    id: 336,
    subject: "sports",
    question: "Which of these martial arts originated in Japan?",
    options: {
      A: "Taekwondo",
      B: "Kung Fu",
      C: "Karate",
      D: "Muay Thai",
    },
    correctAnswer: "C",
    explanation:
      "Karate is a martial art that developed in the Ryukyu Kingdom, which is now part of Japan. Taekwondo is Korean, Kung Fu is Chinese, and Muay Thai is from Thailand.",
  },
  {
    id: 337,
    subject: "Mathematics",
    question:
      "A number that can only be divided by 1 and itself is called a...",
    options: {
      A: "Composite number",
      B: "Prime number",
      C: "Even number",
      D: "Rational number",
    },
    correctAnswer: "B",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. A composite number has more than two factors.",
  },
  {
    id: 338,
    subject: "English",
    question: "The person who tells the story in a novel is the...",
    options: {
      A: "Protagonist",
      B: "Author",
      C: "Narrator",
      D: "Antagonist",
    },
    correctAnswer: "C",
    explanation:
      "The narrator is the voice that an author takes on to tell a story. This voice can have a personality quite different from the author's.",
  },
  {
    id: 339,
    subject: "Kiswahili",
    question: "Methali 'Mvumilivu hula mbivu' ina maana gani?",
    options: {
      A: "Mtu anayependa matunda",
      B: "Mtu mwenye subira hufanikiwa mwishowe",
      C: "Usile matunda mabichi",
      D: "Subira ni chungu",
    },
    correctAnswer: "B",
    explanation:
      "Methali hii inafundisha kuwa mtu anayekuwa na subira na uvumilivu katika jambo analolifanya, hatimaye hupata matokeo mazuri. 'Mbivu' inawakilisha mafanikio.",
  },
  {
    id: 340,
    subject: "Social Studies",
    question:
      "The three arms of government in Kenya are the Executive, the Legislature, and the...",
    options: {
      A: "Police",
      B: "Military",
      C: "Judiciary",
      D: "Civil Service",
    },
    correctAnswer: "C",
    explanation:
      "The government of Kenya consists of three arms which are designed to have separation of powers: The Executive (President), The Legislature (Parliament), and The Judiciary (Courts).",
  },
  {
    id: 341,
    subject: "Agriculture",
    question:
      "The removal of flowers from a plant to encourage vegetative growth is called...",
    options: {
      A: "Pruning",
      B: "Thinning",
      C: "Disbudding",
      D: "Topping",
    },
    correctAnswer: "C",
    explanation:
      "Disbudding is the removal of young, undeveloped flower buds to induce better branching, more vigorous growth, or larger flowers on the remaining buds.",
  },
  {
    id: 342,
    subject: "Home Science",
    question: "Which of these is a function of water in the body?",
    options: {
      A: "To build muscle",
      B: "To provide energy",
      C: "To repair tissues",
      D: "To regulate body temperature",
    },
    correctAnswer: "D",
    explanation:
      "Water has many vital functions in the body, including regulating body temperature through sweating, transporting nutrients, and removing waste products.",
  },
  {
    id: 343,
    subject: "Pre-Technical Studies",
    question:
      "What is the name of the joint used to connect two pieces of wood at a corner, often at a 90-degree angle?",
    options: {
      A: "Butt joint",
      B: "Dovetail joint",
      C: "Mortise and tenon joint",
      D: "Lap joint",
    },
    correctAnswer: "A",
    explanation:
      "A butt joint is a simple joint where the ends of two pieces of wood are brought together without any shaping. While not very strong on its own, it is a fundamental type of woodworking joint.",
  },
  {
    id: 344,
    subject: "Creative Art",
    question:
      "Which of these art movements is known for its dream-like scenes and strange, illogical subject matter?",
    options: {
      A: "Impressionism",
      B: "Cubism",
      C: "Realism",
      D: "Surrealism",
    },
    correctAnswer: "D",
    explanation:
      "Surrealism was a cultural movement which developed in Europe after World War I and was largely influenced by Dada. The movement is best known for its visual artworks and writings which sought to unlock the power of the unconscious mind.",
  },
  {
    id: 345,
    subject: "sports",
    question: "What does NBA stand for in the world of sports?",
    options: {
      A: "National Boxing Association",
      B: "National Basketball Association",
      C: "National Badminton Association",
      D: "National Baseball Association",
    },
    correctAnswer: "B",
    explanation:
      "The NBA stands for the National Basketball Association, which is the premier men's professional basketball league in North America.",
  },
  {
    id: 346,
    subject: "Mathematics",
    question:
      "A flat, two-dimensional surface of a three-dimensional shape is called a...",
    options: {
      A: "Edge",
      B: "Vertex",
      C: "Face",
      D: "Side",
    },
    correctAnswer: "C",
    explanation:
      "In solid geometry, a face is a flat surface that forms part of the boundary of a solid object. For example, a cube has six faces.",
  },
  {
    id: 347,
    subject: "English",
    question: "The sentence 'Will you help me?' is a...",
    options: {
      A: "Statement",
      B: "Question",
      C: "Command",
      D: "Exclamation",
    },
    correctAnswer: "B",
    explanation:
      "This sentence is an interrogative sentence, which asks a direct question and is punctuated at the end with a question mark.",
  },
  {
    id: 348,
    subject: "Kiswahili",
    question: "Mtu anayemiliki na kuendesha duka la kuuza dawa ni nani?",
    options: {
      A: "Daktari",
      B: "Mfamasia",
      C: "Mganga",
      D: "Muuguzi",
    },
    correctAnswer: "B",
    explanation:
      "Mfamasia (pharmacist) ni mtaalamu wa dawa ambaye huandaa na kuuza dawa kulingana na maagizo ya daktari.",
  },
  {
    id: 349,
    subject: "Social Studies",
    question: "The capital city of Kenya is...",
    options: {
      A: "Mombasa",
      B: "Nairobi",
      C: "Kisumu",
      D: "Eldoret",
    },
    correctAnswer: "B",
    explanation:
      "Nairobi is the capital and largest city of Kenya. It is also the economic, political, and cultural hub of the country.",
  },
  {
    id: 350,
    subject: "Agriculture",
    question: "Which of these is a common pest in agriculture?",
    options: {
      A: "Ladybug",
      B: "Butterfly",
      C: "Locust",
      D: "Honeybee",
    },
    correctAnswer: "C",
    explanation:
      "'Locusts' are known for their swarming behavior and can cause significant damage to crops, making them a major agricultural pest.",
  },
  {
    id: 351,
    subject: "Home Science",
    question: "Which of these is a source of protein?",
    options: {
      A: "Rice",
      B: "Beans",
      C: "Bread",
      D: "Sugar",
    },
    correctAnswer: "B",
    explanation:
      "Beans are a rich source of protein, which is essential for building and repairing tissues in the body.",
  },
  {
    id: 352,
    subject: "Pre-Technical Studies",
    question: "What is the main purpose of a technical drawing?",
    options: {
      A: "To create art",
      B: "To communicate ideas and specifications",
      C: "To write instructions",
      D: "To decorate a space",
    },
    correctAnswer: "B",
    explanation:
      "Technical drawings are used to convey information about how something functions or is constructed, often including dimensions and materials.",
  },
  {
    id: 353,
    subject: "Creative Art",
    question: "Which of these is a primary color?",
    options: {
      A: "Green",
      B: "Purple",
      C: "Red",
      D: "Orange",
    },
    correctAnswer: "C",
    explanation:
      "'Red' is one of the three primary colors in the RGB (Red, Green, Blue) color model used in art and design.",
  },
  {
    id: 354,
    subject: "sports",
    question: "In which sport would you perform a slam dunk?",
    options: {
      A: "Football",
      B: "Basketball",
      C: "Tennis",
      D: "Volleyball",
    },
    correctAnswer: "B",
    explanation:
      "A slam dunk is a high-impact basketball move where a player jumps and scores by putting the ball directly through the hoop with one or both hands.",
  },

  {
    id: 1,
    subject: "Mathematics",
    question: "What is the value of x in the equation 3x - 7 = 11?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "C",
    explanation:
      "To solve for x, first add 7 to both sides of the equation (3x = 18), then divide both sides by 3 (x = 6).",
  },
  {
    id: 2,
    subject: "Sports",
    question: "In which sport would you perform a 'slam dunk'?",
    options: {
      A: "Volleyball",
      B: "Basketball",
      C: "Tennis",
      D: "Football",
    },
    correctAnswer: "B",
    explanation:
      "A slam dunk is a type of shot in basketball where a player forces the ball through the hoop with one or both hands.",
  },
  {
    id: 3,
    subject: "Creative Art",
    question: "Which of these is a primary color?",
    options: {
      A: "Green",
      B: "Orange",
      C: "Red",
      D: "Purple",
    },
    correctAnswer: "C",
    explanation:
      "The primary colors are red, yellow, and blue. They cannot be created by mixing other colors, but they are used to create all other colors.",
  },
  {
    id: 4,
    subject: "English",
    question: "Which of the following words is a synonym for 'happy'?",
    options: {
      A: "Sorrowful",
      B: "Joyful",
      C: "Angry",
      D: "Tired",
    },
    correctAnswer: "B",
    explanation:
      "A synonym is a word that has the same or nearly the same meaning as another word. 'Joyful' means full of happiness.",
  },
  {
    id: 5,
    subject: "Kiswahili",
    question: "Kamilisha methali: 'Haraka haraka...'",
    options: {
      A: "...haina baraka.'",
      B: "...huzaa ushindi.'",
      C: "...ni mwanzo mzuri.'",
      D: "...hujaza kibaba.'",
    },
    correctAnswer: "A",
    explanation:
      "Methali 'Haraka haraka haina baraka' inamaanisha kwamba mambo yanayofanywa kwa haraka na bila mpangilio hayana mafanikio mazuri.",
  },
  {
    id: 6,
    subject: "Social Studies",
    question: "Which is the longest river in Africa?",
    options: {
      A: "River Congo",
      B: "River Niger",
      C: "River Zambezi",
      D: "River Nile",
    },
    correctAnswer: "D",
    explanation:
      "The River Nile, flowing northwards through northeastern Africa, is the longest river in Africa and historically considered the longest river in the world.",
  },
  {
    id: 7,
    subject: "Pre-Technical Studies",
    question: "Which tool is used for tightening or loosening nuts and bolts?",
    options: {
      A: "Hammer",
      B: "Screwdriver",
      C: "Spanner",
      D: "Saw",
    },
    correctAnswer: "C",
    explanation:
      "A spanner, also known as a wrench, is designed to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts.",
  },
  {
    id: 8,
    subject: "Agriculture",
    question:
      "The process of breaking down rocks and minerals to form soil is called:",
    options: {
      A: "Erosion",
      B: "Weathering",
      C: "Decomposition",
      D: "Fertilization",
    },
    correctAnswer: "B",
    explanation:
      "Weathering is the natural process that breaks down rocks, soil, and minerals as well as wood and artificial materials through contact with the Earth's atmosphere, water, and biological organisms.",
  },
  {
    id: 9,
    subject: "Home Science",
    question: "Which of the following is a good source of Vitamin C?",
    options: {
      A: "Bread",
      B: "Milk",
      C: "Oranges",
      D: "Meat",
    },
    correctAnswer: "C",
    explanation:
      "Citrus fruits, like oranges, are excellent sources of Vitamin C, an essential nutrient that helps the body form and maintain connective tissue, including bones, blood vessels, and skin.",
  },
  {
    id: 10,
    subject: "Mathematics",
    question:
      "What is the area of a rectangle with a length of 10 cm and a width of 5 cm?",
    options: {
      A: "15 sq cm",
      B: "25 sq cm",
      C: "50 sq cm",
      D: "100 sq cm",
    },
    correctAnswer: "C",
    explanation:
      "The area of a rectangle is calculated by multiplying its length by its width. Area = 10 cm * 5 cm = 50 sq cm.",
  },
  {
    id: 11,
    subject: "Sports",
    question:
      "How many players are on a standard football (soccer) team on the field at the start of a match?",
    options: {
      A: "7",
      B: "9",
      C: "11",
      D: "13",
    },
    correctAnswer: "C",
    explanation:
      "A standard football match is played by two teams, each with a maximum of 11 players on the field at any one time, one of whom must be the goalkeeper.",
  },
  {
    id: 12,
    subject: "Creative Art",
    question: "What is a 'sculpture'?",
    options: {
      A: "A two-dimensional painting on a canvas.",
      B: "A piece of music composed for an orchestra.",
      C: "A three-dimensional work of art.",
      D: "A photograph of a landscape.",
    },
    correctAnswer: "C",
    explanation:
      "Sculpture is the branch of the visual arts that operates in three dimensions. It is one of the plastic arts. Durable sculptural processes originally used carving and modelling, in stone, metal, ceramics, wood and other materials.",
  },
  {
    id: 13,
    subject: "English",
    question:
      "Identify the adjective in the sentence: 'The quick brown fox jumps over the lazy dog.'",
    options: {
      A: "jumps",
      B: "fox",
      C: "over",
      D: "lazy",
    },
    correctAnswer: "D",
    explanation:
      "An adjective is a word that describes a noun. In this sentence, 'lazy' describes the noun 'dog', and 'quick' and 'brown' describe the noun 'fox'.",
  },
  {
    id: 14,
    subject: "Kiswahili",
    question: "Neno 'shule' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "I-ZI",
      C: "U-I",
      D: "LI-YA",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'shule' liko katika ngeli ya I-ZI. Mfano: Shule moja (umoja) - Shule nyingi (wingi).",
  },
  {
    id: 15,
    subject: "Social Studies",
    question: "Who was the first president of Kenya?",
    options: {
      A: "Daniel arap Moi",
      B: "Mwai Kibaki",
      C: "Jomo Kenyatta",
      D: "Uhuru Kenyatta",
    },
    correctAnswer: "C",
    explanation:
      "Jomo Kenyatta was a Kenyan anti-colonial activist and politician who governed Kenya as its Prime Minister from 1963 to 1964 and then as its first President from 1964 to his death in 1978.",
  },
  {
    id: 16,
    subject: "Pre-Technical Studies",
    question: "What is the primary purpose of a fuse in an electrical circuit?",
    options: {
      A: "To increase the voltage",
      B: "To store electrical energy",
      C: "To protect the circuit from excessive current",
      D: "To convert AC to DC",
    },
    correctAnswer: "C",
    explanation:
      "A fuse is a safety device consisting of a strip of wire that melts and breaks an electric circuit if the current exceeds a safe level.",
  },
  {
    id: 17,
    subject: "Agriculture",
    question: "Which of the following is a method of irrigation?",
    options: {
      A: "Weeding",
      B: "Harvesting",
      C: "Drip Irrigation",
      D: "Pruning",
    },
    correctAnswer: "C",
    explanation:
      "Drip irrigation is a type of micro-irrigation system that has the potential to save water and nutrients by allowing water to drip slowly to the roots of plants, either from above the soil surface or buried below the surface.",
  },
  {
    id: 18,
    subject: "Home Science",
    question: "What is the process of preserving food by drying called?",
    options: {
      A: "Canning",
      B: "Freezing",
      C: "Pickling",
      D: "Dehydration",
    },
    correctAnswer: "D",
    explanation:
      "Dehydration, or drying, is a method of food preservation that works by removing water from the food, which inhibits the growth of microorganisms.",
  },
  {
    id: 19,
    subject: "Mathematics",
    question: "A triangle with all three sides equal is called:",
    options: {
      A: "Isosceles",
      B: "Scalene",
      C: "Equilateral",
      D: "Right-angled",
    },
    correctAnswer: "C",
    explanation:
      "An equilateral triangle is a triangle in which all three sides have the same length and all three angles are equal (60 degrees).",
  },
  {
    id: 20,
    subject: "Sports",
    question: "The Olympic Games are held every how many years?",
    options: {
      A: "2 years",
      B: "3 years",
      C: "4 years",
      D: "5 years",
    },
    correctAnswer: "C",
    explanation:
      "The modern Olympic Games are held every four years, with the Summer and Winter Games alternating every two years within that four-year period.",
  },
  {
    id: 21,
    subject: "Creative Art",
    question:
      "The technique of creating an image by assembling small pieces of colored glass, stone, or other materials is called:",
    options: {
      A: "Collage",
      B: "Mosaic",
      C: "Fresco",
      D: "Etching",
    },
    correctAnswer: "B",
    explanation:
      "A mosaic is a piece of art or image made from the assembling of small pieces of colored glass, stone, or other materials. It is often used in decorative art or as interior decoration.",
  },
  {
    id: 22,
    subject: "English",
    question: "What is the past tense of the verb 'begin'?",
    options: {
      A: "Begun",
      B: "Began",
      C: "Beginned",
      D: "Begins",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'begin' is an irregular verb. Its simple past tense is 'began' and its past participle is 'begun'.",
  },
  {
    id: 23,
    subject: "Kiswahili",
    question: "Kitendawili: 'Nyumba yangu haina mlango.' Jibu ni nini?",
    options: {
      A: "Pango",
      B: "Gari",
      C: "Yai",
      D: "Chupa",
    },
    correctAnswer: "C",
    explanation:
      "Jibu la kitendawili 'Nyumba yangu haina mlango' ni yai, kwa sababu ganda lake linafunika kila upande bila kuwa na mlango wa kuingilia.",
  },
  {
    id: 24,
    subject: "Social Studies",
    question: "What is the capital city of Tanzania?",
    options: {
      A: "Nairobi",
      B: "Kampala",
      C: "Dar es Salaam",
      D: "Dodoma",
    },
    correctAnswer: "D",
    explanation:
      "While Dar es Salaam is the largest city and a major economic hub, Dodoma is the official capital city of Tanzania.",
  },
  {
    id: 25,
    subject: "Pre-Technical Studies",
    question: "Which of the following is a type of wood joint?",
    options: {
      A: "Welding joint",
      B: "Soldered joint",
      C: "Dovetail joint",
      D: "Rivet joint",
    },
    correctAnswer: "C",
    explanation:
      "A dovetail joint is a woodworking technique most commonly used to join the sides of a drawer to the front. It is known for its resistance to being pulled apart (tensile strength).",
  },
  {
    id: 26,
    subject: "Agriculture",
    question:
      "What is the practice of growing two or more crops in the same piece of land during the same growing season called?",
    options: {
      A: "Monocropping",
      B: "Crop rotation",
      C: "Intercropping",
      D: "Fallowing",
    },
    correctAnswer: "C",
    explanation:
      "Intercropping is a multiple cropping practice that involves growing two or more crops in proximity. The most common goal of intercropping is to produce a greater yield on a given piece of land by making use of resources that would otherwise not be utilized by a single crop.",
  },
  {
    id: 27,
    subject: "Home Science",
    question: "A balanced diet should contain:",
    options: {
      A: "Only carbohydrates",
      B: "Only proteins and fats",
      C: "Carbohydrates, proteins, fats, vitamins, minerals, and water",
      D: "Only vitamins and minerals",
    },
    correctAnswer: "C",
    explanation:
      "A balanced diet is one that provides the body with all the essential nutrients, including carbohydrates, proteins, fats, vitamins, minerals, and water, in the correct proportions.",
  },
  {
    id: 28,
    subject: "Mathematics",
    question: "What is 15% of 200?",
    options: {
      A: "15",
      B: "20",
      C: "30",
      D: "40",
    },
    correctAnswer: "C",
    explanation:
      "To find the percentage, you can convert 15% to a decimal (0.15) and multiply by 200. 0.15 * 200 = 30.",
  },
  {
    id: 29,
    subject: "Sports",
    question:
      "Which country is famous for the 'Haka' war dance, often performed by its rugby team?",
    options: {
      A: "Australia",
      B: "South Africa",
      C: "New Zealand",
      D: "Fiji",
    },
    correctAnswer: "C",
    explanation:
      "The Haka is a traditional Māori war cry, dance, or challenge from New Zealand. It is famously performed by the New Zealand national rugby team, the All Blacks, before international matches.",
  },
  {
    id: 30,
    subject: "Creative Art",
    question: "The lightness or darkness of a color is referred to as its:",
    options: {
      A: "Hue",
      B: "Saturation",
      C: "Value",
      D: "Intensity",
    },
    correctAnswer: "C",
    explanation:
      "In art, value refers to the lightness or darkness of a color. It is a key element in creating mood, contrast, and depth in a piece of art.",
  },
  {
    id: 31,
    subject: "English",
    question: "Choose the correct spelling:",
    options: {
      A: "Neccessary",
      B: "Necesary",
      C: "Necessary",
      D: "Necassary",
    },
    correctAnswer: "C",
    explanation:
      "The correct spelling of the word is 'necessary', with one 'c' and double 's'.",
  },
  {
    id: 32,
    subject: "Kiswahili",
    question: "Umoja wa neno 'vyakula' ni nini?",
    options: {
      A: "Chakula",
      B: "Kikula",
      C: "Kula",
      D: "Ula",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'vyakula' liko katika wingi. Umoja wake ni 'chakula'. Hii ni ngeli ya KI-VI.",
  },
  {
    id: 33,
    subject: "Social Studies",
    question: "The system of government where a king or queen rules is called:",
    options: {
      A: "Democracy",
      B: "Monarchy",
      C: "Dictatorship",
      D: "Republic",
    },
    correctAnswer: "B",
    explanation:
      "A monarchy is a form of government in which a person, the monarch, is head of state for life or until abdication. The political legitimacy and authority of the monarch may vary from restricted and largely symbolic to fully autocratic.",
  },
  {
    id: 34,
    subject: "Pre-Technical Studies",
    question:
      "In technical drawing, what does an orthographic projection show?",
    options: {
      A: "A realistic 3D view of an object.",
      B: "A series of 2D views of an object from different angles (front, top, side).",
      C: "An artistic sketch of an object.",
      D: "A cross-section of an object only.",
    },
    correctAnswer: "B",
    explanation:
      "Orthographic projection is a way of representing a 3D object in 2D. It typically shows multiple views of the object, such as the front, top, and side views, laid out in a standard arrangement.",
  },
  {
    id: 35,
    subject: "Agriculture",
    question:
      "Which of these pests is known for attacking stored grains like maize?",
    options: {
      A: "Aphid",
      B: "Weevil",
      C: "Cutworm",
      D: "Tsetse fly",
    },
    correctAnswer: "B",
    explanation:
      "Weevils are a type of beetle that are notorious for infesting and damaging stored grains and seeds, such as maize, wheat, and rice, causing significant post-harvest losses.",
  },
  {
    id: 36,
    subject: "Home Science",
    question: "What is the first step in first aid for a minor cut?",
    options: {
      A: "Apply a bandage immediately.",
      B: "Wash your hands and then wash the cut with soap and water.",
      C: "Apply heat to the wound.",
      D: "Ignore it.",
    },
    correctAnswer: "B",
    explanation:
      "The first and most important step in treating a minor cut is to prevent infection. This is best done by first washing your own hands and then cleaning the wound gently with soap and clean water.",
  },
  {
    id: 37,
    subject: "Mathematics",
    question: "What is the next number in the sequence: 2, 5, 8, 11, ...?",
    options: {
      A: "12",
      B: "13",
      C: "14",
      D: "15",
    },
    correctAnswer: "C",
    explanation:
      "This is an arithmetic sequence where each number is obtained by adding 3 to the previous number. So, 11 + 3 = 14.",
  },
  {
    id: 38,
    subject: "Sports",
    question:
      "A marathon is a long-distance running race of what official distance?",
    options: {
      A: "26.2 kilometers",
      B: "42.2 kilometers",
      C: "10 kilometers",
      D: "100 meters",
    },
    correctAnswer: "B",
    explanation:
      "The official distance for a marathon race is 42.195 kilometers (approximately 26.2 miles). The distance is based on the legend of a Greek messenger running from Marathon to Athens.",
  },
  {
    id: 39,
    subject: "Creative Art",
    question: "What is 'perspective' in drawing?",
    options: {
      A: "The choice of colors used in the artwork.",
      B: "The texture of the drawing surface.",
      C: "The technique of creating an illusion of depth on a flat surface.",
      D: "The frame used to display the drawing.",
    },
    correctAnswer: "C",
    explanation:
      "Perspective is an artistic technique used to represent three-dimensional objects and spaces on a two-dimensional surface, like a piece of paper, creating a realistic sense of depth.",
  },
  {
    id: 40,
    subject: "English",
    question: "Which of these is a coordinating conjunction?",
    options: {
      A: "Although",
      B: "Because",
      C: "But",
      D: "While",
    },
    correctAnswer: "C",
    explanation:
      "Coordinating conjunctions connect words, phrases, or independent clauses. The seven coordinating conjunctions can be remembered with the acronym FANBOYS: For, And, Nor, But, Or, Yet, So.",
  },
  {
    id: 41,
    subject: "Kiswahili",
    question: "Maana ya 'methali' ni nini?",
    options: {
      A: "Hadithi fupi ya kufurahisha.",
      B: "Swali la chemsha bongo.",
      C: "Sentensi fupi yenye hekima na funzo.",
      D: "Ushairi wenye mahadhi.",
    },
    correctAnswer: "C",
    explanation:
      "Methali ni usemi mfupi wa mapokeo unaotumiwa na jamii fulani kwa lengo la kuonya, kuadhibu, kuelekeza ama kufunza. Mara nyingi huwa na hekima nzito.",
  },
  {
    id: 42,
    subject: "Social Studies",
    question:
      "The imaginary line that divides the Earth into the Northern and Southern Hemispheres is called the:",
    options: {
      A: "Prime Meridian",
      B: "Equator",
      C: "Tropic of Cancer",
      D: "Tropic of Capricorn",
    },
    correctAnswer: "B",
    explanation:
      "The Equator is an imaginary line around the middle of a planet. It is halfway between the North Pole and the South Pole, at 0 degrees latitude, and it divides the Earth into the Northern and Southern Hemispheres.",
  },
  {
    id: 43,
    subject: "Pre-Technical Studies",
    question: "Which of these materials is a good electrical insulator?",
    options: {
      A: "Copper",
      B: "Aluminum",
      C: "Rubber",
      D: "Iron",
    },
    correctAnswer: "C",
    explanation:
      "An electrical insulator is a material whose internal electric charges do not flow freely. Rubber is an excellent insulator, which is why it is often used to cover electrical wires to prevent electric shock.",
  },
  {
    id: 44,
    subject: "Agriculture",
    question: "The rearing of bees is known as:",
    options: {
      A: "Aquaculture",
      B: "Horticulture",
      C: "Sericulture",
      D: "Apiculture",
    },
    correctAnswer: "D",
    explanation:
      "Apiculture, or beekeeping, is the maintenance of bee colonies, commonly in man-made hives, by humans. Beekeepers harvest honey, beeswax, pollen, and other products.",
  },
  {
    id: 45,
    subject: "Home Science",
    question:
      "Which sewing tool is used for measuring short distances and hems?",
    options: {
      A: "Tape measure",
      B: "Seam gauge",
      C: "Yardstick",
      D: "Thimble",
    },
    correctAnswer: "B",
    explanation:
      "A seam gauge, or sewing gauge, is a small ruler with a sliding marker, designed for measuring short spaces such as hems, tucks, and seam allowances.",
  },
  {
    id: 46,
    subject: "Mathematics",
    question: "The sum of angles in any triangle is always:",
    options: {
      A: "90 degrees",
      B: "180 degrees",
      C: "270 degrees",
      D: "360 degrees",
    },
    correctAnswer: "B",
    explanation:
      "A fundamental theorem in Euclidean geometry states that the sum of the interior angles of any triangle is always equal to 180 degrees.",
  },
  {
    id: 47,
    subject: "Sports",
    question: "In athletics, what is the final event of a decathlon?",
    options: {
      A: "100m sprint",
      B: "Javelin throw",
      C: "1500m run",
      D: "High jump",
    },
    correctAnswer: "C",
    explanation:
      "The decathlon is a combined event in athletics consisting of ten track and field events. The tenth and final event is the 1500 metres run, which tests the athlete's endurance after two days of competition.",
  },
  {
    id: 48,
    subject: "Creative Art",
    question: "Which famous artist painted the 'Mona Lisa'?",
    options: {
      A: "Vincent van Gogh",
      B: "Pablo Picasso",
      C: "Leonardo da Vinci",
      D: "Michelangelo",
    },
    correctAnswer: "C",
    explanation:
      "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'.",
  },
  {
    id: 49,
    subject: "English",
    question: "An 'autobiography' is a story of a person's life written by:",
    options: {
      A: "A historian",
      B: "A family member",
      C: "Another author",
      D: "The person themselves",
    },
    correctAnswer: "D",
    explanation:
      "An autobiography is a self-written account of the life of a person. The word 'auto' means self, 'bio' means life, and 'graphy' means writing.",
  },
  {
    id: 50,
    subject: "Kiswahili",
    question: "Neno gani ni kinyume cha 'panda'?",
    options: {
      A: "Ruka",
      B: "Shuka",
      C: "Enda",
      D: "Ingia",
    },
    correctAnswer: "B",
    explanation:
      "Kinyume (antonym) cha neno 'panda' (to go up/ascend) ni 'shuka' (to go down/descend).",
  },
  {
    id: 51,
    subject: "Social Studies",
    question: "Which mountain is the highest in Africa?",
    options: {
      A: "Mount Kenya",
      B: "Mount Kilimanjaro",
      C: "Mount Ruwenzori",
      D: "Mount Meru",
    },
    correctAnswer: "B",
    explanation:
      "Mount Kilimanjaro, located in Tanzania, is a dormant volcano and the highest mountain in Africa, with its summit about 5,895 meters above sea level.",
  },
  {
    id: 52,
    subject: "Pre-Technical Studies",
    question:
      "What is the process of joining two pieces of metal by melting and flowing a filler metal into the joint?",
    options: {
      A: "Welding",
      B: "Riveting",
      C: "Soldering",
      D: "Gluing",
    },
    correctAnswer: "C",
    explanation:
      "Soldering is a process in which two or more items are joined together by melting and putting a filler metal (solder) into the joint, the filler metal having a lower melting point than the adjoining metal.",
  },
  {
    id: 53,
    subject: "Agriculture",
    question: "What is 'soil erosion'?",
    options: {
      A: "The addition of nutrients to the soil.",
      B: "The process of soil formation.",
      C: "The wearing away and removal of the top layer of soil.",
      D: "The practice of rotating crops.",
    },
    correctAnswer: "C",
    explanation:
      "Soil erosion is a naturally occurring process that affects all landforms. It refers to the wearing away of a field's topsoil by the natural physical forces of water and wind.",
  },
  {
    id: 54,
    subject: "Home Science",
    question: "Which of these is a water-borne disease?",
    options: {
      A: "Malaria",
      B: "Tuberculosis",
      C: "Cholera",
      D: "Measles",
    },
    correctAnswer: "C",
    explanation:
      "Water-borne diseases are conditions caused by pathogenic micro-organisms that are transmitted in water. Cholera is a classic example, often spread through contaminated drinking water.",
  },
  {
    id: 55,
    subject: "Mathematics",
    question: "What is the perimeter of a square with a side length of 8 cm?",
    options: {
      A: "16 cm",
      B: "24 cm",
      C: "32 cm",
      D: "64 cm",
    },
    correctAnswer: "C",
    explanation:
      "The perimeter of a square is the total length of all its sides. Since a square has four equal sides, the perimeter is calculated as 4 times the side length. P = 4 * 8 cm = 32 cm.",
  },
  {
    id: 56,
    subject: "Sports",
    question: "Which of these sports uses a 'shuttlecock'?",
    options: {
      A: "Tennis",
      B: "Table Tennis",
      C: "Squash",
      D: "Badminton",
    },
    correctAnswer: "D",
    explanation:
      "A shuttlecock (also called a birdie) is a high-drag projectile used in the sport of badminton. It has a cone shape formed from overlapping feathers or a synthetic alternative attached to a rounded cork or rubber base.",
  },
  {
    id: 57,
    subject: "Creative Art",
    question: "The art of beautiful handwriting is called:",
    options: {
      A: "Typography",
      B: "Calligraphy",
      C: "Stenography",
      D: "Cartography",
    },
    correctAnswer: "B",
    explanation:
      "Calligraphy is a visual art related to writing. It is the design and execution of lettering with a pen, ink brush, or other writing instrument.",
  },
  {
    id: 58,
    subject: "English",
    question: "What does the idiom 'to hit the nail on the head' mean?",
    options: {
      A: "To be very angry.",
      B: "To do or say something exactly right.",
      C: "To make a lucky guess.",
      D: "To work very hard on a task.",
    },
    correctAnswer: "B",
    explanation:
      "The idiom 'to hit the nail on the head' means to describe a situation or problem with perfect accuracy or to do exactly the right thing.",
  },
  {
    id: 59,
    subject: "Kiswahili",
    question:
      "Andika sentensi ifuatayo katika hali ya ukubwa: 'Mtoto amekula mkate.'",
    options: {
      A: "Kitoto kimekula kikate.",
      B: "Jito limekula jikate.",
      C: "Toto limekula kate.",
      D: "Toto limekula mkate.",
    },
    correctAnswer: "B",
    explanation:
      "Katika hali ya ukubwa (augmentation), nomino 'mtoto' hubadilika kuwa 'jito' na 'mkate' hubadilika kuwa 'jikate'. Kivumishi cha ngeli pia hubadilika kulingana na nomino, kwa hivyo sentensi sahihi ni 'Jito limekula jikate'.",
  },
  {
    id: 60,
    subject: "Social Studies",
    question: "The main cause of the First World War was the assassination of:",
    options: {
      A: "Tsar Nicholas II",
      B: "Archduke Franz Ferdinand",
      C: "King George V",
      D: "Kaiser Wilhelm II",
    },
    correctAnswer: "B",
    explanation:
      "The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on 28 June 1914 was the trigger event that led to the outbreak of the First World War.",
  },
  {
    id: 61,
    subject: "Pre-Technical Studies",
    question:
      "A lever is a simple machine consisting of a beam or rigid rod pivoted at a fixed hinge, or:",
    options: {
      A: "Pulley",
      B: "Gear",
      C: "Fulcrum",
      D: "Axle",
    },
    correctAnswer: "C",
    explanation:
      "A lever is a simple machine that uses a rigid bar and a pivot point, called a fulcrum, to lift or move heavy loads. The three parts of a lever are the fulcrum, the effort, and the load.",
  },
  {
    id: 62,
    subject: "Agriculture",
    question:
      "Which of the following is a leguminous crop known for fixing nitrogen in the soil?",
    options: {
      A: "Maize",
      B: "Wheat",
      C: "Beans",
      D: "Potatoes",
    },
    correctAnswer: "C",
    explanation:
      "Legumes, such as beans, peas, and clover, have a symbiotic relationship with nitrogen-fixing bacteria in their root nodules. These bacteria convert atmospheric nitrogen into a form that plants can use, thereby enriching the soil.",
  },
  {
    id: 63,
    subject: "Home Science",
    question:
      "The method of cooking food in a small amount of fat in a shallow pan is called:",
    options: {
      A: "Boiling",
      B: "Baking",
      C: "Frying",
      D: "Steaming",
    },
    correctAnswer: "C",
    explanation:
      "Frying is the cooking of food in oil or another fat. Pan frying, or shallow frying, involves cooking food in a small amount of fat in a pan.",
  },
  {
    id: 64,
    subject: "Mathematics",
    question: "If a circle has a radius of 7 cm, what is its diameter?",
    options: {
      A: "3.5 cm",
      B: "7 cm",
      C: "14 cm",
      D: "21 cm",
    },
    correctAnswer: "C",
    explanation:
      "The diameter of a circle is twice its radius. Therefore, Diameter = 2 * Radius = 2 * 7 cm = 14 cm.",
  },
  {
    id: 65,
    subject: "Sports",
    question:
      "In cricket, how is a batsman dismissed if the ball hits the stumps when they are batting?",
    options: {
      A: "Caught",
      B: "LBW (Leg Before Wicket)",
      C: "Run Out",
      D: "Bowled",
    },
    correctAnswer: "D",
    explanation:
      "A batsman is out 'bowled' if their wicket is put down by a ball delivered by the bowler. It is irrelevant whether the ball has touched the bat, glove, or any part of the batsman before going on to hit the stumps.",
  },
  {
    id: 66,
    subject: "Creative Art",
    question: "What is a 'still life' in art?",
    options: {
      A: "A painting of a person.",
      B: "A painting of a landscape.",
      C: "A painting or drawing of an arrangement of inanimate objects.",
      D: "A fast-action painting.",
    },
    correctAnswer: "C",
    explanation:
      "A still life is a work of art depicting mostly inanimate subject matter, typically commonplace objects which are either natural (food, flowers, rocks) or man-made (vases, books, instruments).",
  },
  {
    id: 67,
    subject: "English",
    question: "Which sentence is grammatically correct?",
    options: {
      A: "He don't like vegetables.",
      B: "She go to school every day.",
      C: "They are playing in the garden.",
      D: "I is reading a book.",
    },
    correctAnswer: "C",
    explanation:
      "Option C correctly uses the present continuous tense ('are playing'). Option A should be 'doesn't', B should be 'goes', and D should be 'am'.",
  },
  {
    id: 68,
    subject: "Kiswahili",
    question: "Neno 'mwalimu' lina silabi ngapi?",
    options: {
      A: "Mbili",
      B: "Tatu",
      C: "Nne",
      D: "Tano",
    },
    correctAnswer: "B",
    explanation: "Neno 'mwalimu' lina silabi tatu: mwa-li-mu.",
  },
  {
    id: 69,
    subject: "Social Studies",
    question: "What is 'democracy'?",
    options: {
      A: "A system of government by one person with absolute power.",
      B: "A system where the wealthy rule.",
      C: "A system of government by the whole population, typically through elected representatives.",
      D: "A system where there is no government.",
    },
    correctAnswer: "C",
    explanation:
      "Democracy is a system of government where the citizens exercise power by voting. In a direct democracy, the citizens as a whole form a governing body, while in a representative democracy, citizens elect representatives from among themselves.",
  },
  {
    id: 70,
    subject: "Pre-Technical Studies",
    question: "Which of these hand tools is used to drive nails into wood?",
    options: {
      A: "Pliers",
      B: "Hammer",
      C: "Wrench",
      D: "Screwdriver",
    },
    correctAnswer: "B",
    explanation:
      "A hammer is a tool consisting of a weighted 'head' fixed to a long handle that is swung to deliver an impact to a small area of an object. This is most commonly used to drive nails, fit parts, forge metal, and break apart objects.",
  },
  {
    id: 71,
    subject: "Agriculture",
    question:
      "The system of farming where a farmer grows crops and rears animals mainly for their own consumption is called:",
    options: {
      A: "Commercial farming",
      B: "Subsistence farming",
      C: "Mixed farming",
      D: "Plantation farming",
    },
    correctAnswer: "B",
    explanation:
      "Subsistence farming is a form of agriculture in which nearly all of the crops or livestock raised are used to maintain the farmer and the farmer's family, leaving little, if any, surplus for sale or trade.",
  },
  {
    id: 72,
    subject: "Home Science",
    question:
      "Which nutrient is primarily responsible for building and repairing body tissues?",
    options: {
      A: "Carbohydrates",
      B: "Fats",
      C: "Vitamins",
      D: "Proteins",
    },
    correctAnswer: "D",
    explanation:
      "Proteins are essential nutrients for the human body. They are one of the building blocks of body tissue and can also serve as a fuel source. The primary function is to build and repair tissues.",
  },
  {
    id: 73,
    subject: "Mathematics",
    question: "Express 0.75 as a fraction in its simplest form.",
    options: {
      A: "1/2",
      B: "3/4",
      C: "7/5",
      D: "75/100",
    },
    correctAnswer: "B",
    explanation:
      "The decimal 0.75 can be written as the fraction 75/100. To simplify, divide both the numerator and the denominator by their greatest common divisor, which is 25. 75 ÷ 25 = 3 and 100 ÷ 25 = 4. So, the simplest form is 3/4.",
  },
  {
    id: 74,
    subject: "Sports",
    question: "Which of these is a swimming stroke?",
    options: {
      A: "Javelin",
      B: "Butterfly",
      C: "Marathon",
      D: "Triple Jump",
    },
    correctAnswer: "B",
    explanation:
      "The butterfly is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly kick (also known as the 'dolphin kick'). Other strokes include freestyle, backstroke, and breaststroke.",
  },
  {
    id: 75,
    subject: "Creative Art",
    question:
      "The arrangement of elements such as line, shape, and color in a work of art is known as:",
    options: {
      A: "Composition",
      B: "Texture",
      C: "Palette",
      D: "Medium",
    },
    correctAnswer: "A",
    explanation:
      "Composition is the placement or arrangement of visual elements or 'ingredients' in a work of art, as distinct from the subject. It is the organization of the elements of art according to the principles of art.",
  },
  {
    id: 76,
    subject: "English",
    question: "A person who writes plays is called a:",
    options: {
      A: "Poet",
      B: "Novelist",
      C: "Playwright",
      D: "Scriptwriter",
    },
    correctAnswer: "C",
    explanation:
      "A playwright or dramatist is a person who writes plays. The word 'wright' is an archaic English term for a craftsman or builder, so a playwright is a 'builder' of plays.",
  },
  {
    id: 77,
    subject: "Kiswahili",
    question: "Kisawe cha neno 'rafiki' ni kipi?",
    options: {
      A: "Adui",
      B: "Jirani",
      C: "Mwandani",
      D: "Ndugu",
    },
    correctAnswer: "C",
    explanation:
      "Kisawe ni neno lenye maana sawa au inayokaribiana na neno lingine. 'Mwandani' ni neno lingine linalomaanisha rafiki wa karibu sana.",
  },
  {
    id: 78,
    subject: "Social Studies",
    question: "Which of these was an ancient Egyptian ruler?",
    options: {
      A: "Julius Caesar",
      B: "Alexander the Great",
      C: "Pharaoh Tutankhamun",
      D: "Emperor Nero",
    },
    correctAnswer: "C",
    explanation:
      "A Pharaoh was the monarch of ancient Egypt. Tutankhamun was an Egyptian pharaoh of the 18th dynasty, during the period of Egyptian history known as the New Kingdom.",
  },
  {
    id: 79,
    subject: "Pre-Technical Studies",
    question:
      "What safety gear should be worn to protect the eyes when grinding metal?",
    options: {
      A: "Gloves",
      B: "Safety goggles",
      C: "Ear plugs",
      D: "Dust mask",
    },
    correctAnswer: "B",
    explanation:
      "Safety goggles are essential personal protective equipment (PPE) designed to protect the eyes from flying particles, debris, and sparks that are common during tasks like grinding metal.",
  },
  {
    id: 80,
    subject: "Agriculture",
    question:
      "What is the process of removing unwanted plants from a farm called?",
    options: {
      A: "Tilling",
      B: "Mulching",
      C: "Weeding",
      D: "Thinning",
    },
    correctAnswer: "C",
    explanation:
      "Weeding is the process of removing weeds, which are unwanted plants that compete with cultivated crops for nutrients, water, sunlight, and space.",
  },
  {
    id: 81,
    subject: "Home Science",
    question:
      "A small, enclosed fireproof box used for baking or roasting is called an:",
    options: {
      A: "Oven",
      B: "Microwave",
      C: "Stove",
      D: "Grill",
    },
    correctAnswer: "A",
    explanation:
      "An oven is a thermally insulated chamber used for heating, baking, or drying of a substance, and most commonly used for cooking.",
  },
  {
    id: 82,
    subject: "Mathematics",
    question: "What is the square root of 144?",
    options: {
      A: "10",
      B: "11",
      C: "12",
      D: "14",
    },
    correctAnswer: "C",
    explanation:
      "The square root of a number is a value that, when multiplied by itself, gives the original number. 12 * 12 = 144.",
  },
  {
    id: 83,
    subject: "Sports",
    question:
      "In volleyball, what is it called when a player jumps and strikes the ball with an overhand motion to send it to the opponent's side?",
    options: {
      A: "A set",
      B: "A bump",
      C: "A spike",
      D: "A serve",
    },
    correctAnswer: "C",
    explanation:
      "A spike (or an attack) is a powerful, one-handed hit that a player uses to send the ball forcefully over the net into the opponent's court. It is a key offensive move in volleyball.",
  },
  {
    id: 84,
    subject: "Creative Art",
    question:
      "The use of strong contrasts between light and dark, usually bold contrasts affecting a whole composition in art is known as:",
    options: {
      A: "Sfumato",
      B: "Foreshortening",
      C: "Impasto",
      D: "Chiaroscuro",
    },
    correctAnswer: "D",
    explanation:
      "Chiaroscuro is an Italian artistic term used to describe the dramatic effect of contrasting areas of light and dark in a painting, drawing, or print. It helps to create a sense of volume and three-dimensionality.",
  },
  {
    id: 85,
    subject: "English",
    question: "Which word is an antonym for 'brave'?",
    options: {
      A: "Courageous",
      B: "Cowardly",
      C: "Heroic",
      D: "Strong",
    },
    correctAnswer: "B",
    explanation:
      "An antonym is a word that has the opposite meaning of another word. 'Cowardly' is the direct opposite of 'brave'.",
  },
  {
    id: 86,
    subject: "Kiswahili",
    question: "Ni mnyama gani anayejulikana kama 'mfalme wa mwitu'?",
    options: {
      A: "Tembo",
      B: "Chui",
      C: "Simba",
      D: "Nyati",
    },
    correctAnswer: "C",
    explanation:
      "Simba anajulikana kama 'mfalme wa mwitu' au 'mfalme wa nyika' kutokana na nguvu zake, ujasiri, na hadhi yake katika mazingira ya wanyama pori.",
  },
  {
    id: 87,
    subject: "Social Studies",
    question:
      "The study of the Earth's physical features, atmosphere, and human activity is known as:",
    options: {
      A: "History",
      B: "Archaeology",
      C: "Geography",
      D: "Anthropology",
    },
    correctAnswer: "C",
    explanation:
      "Geography is the field of science devoted to the study of the lands, features, inhabitants, and phenomena of Earth.",
  },
  {
    id: 88,
    subject: "Pre-Technical Studies",
    question:
      "A diagram that shows how different components of an electrical circuit are connected is called a:",
    options: {
      A: "Blueprint",
      B: "Flowchart",
      C: "Circuit diagram",
      D: "Floor plan",
    },
    correctAnswer: "C",
    explanation:
      "A circuit diagram (also known as an electrical diagram or schematic) is a graphical representation of an electrical circuit. It uses standardized symbols for circuit components and shows their interconnections.",
  },
  {
    id: 89,
    subject: "Agriculture",
    question: "A building used for storing harvested crops is called a:",
    options: {
      A: "Greenhouse",
      B: "Barn",
      C: "Coop",
      D: "Silo",
    },
    correctAnswer: "B",
    explanation:
      "A barn is an agricultural building usually on farms and used for various purposes. A common use is as a granary for storing harvested crops like hay or grains.",
  },
  {
    id: 90,
    subject: "Home Science",
    question:
      "The process of cleaning clothes and fabrics using water and soap is known as:",
    options: {
      A: "Ironing",
      B: "Stitching",
      C: "Laundering",
      D: "Drying",
    },
    correctAnswer: "C",
    explanation:
      "Laundering is the process of washing clothing and other textiles. The process often includes washing, rinsing, and drying.",
  },
  {
    id: 91,
    subject: "Mathematics",
    question:
      "If you buy a book for KES 80 and sell it for KES 100, what is your profit?",
    options: {
      A: "KES 10",
      B: "KES 20",
      C: "KES 80",
      D: "KES 180",
    },
    correctAnswer: "B",
    explanation:
      "Profit is calculated by subtracting the cost price from the selling price. Profit = Selling Price - Cost Price = 100 - 80 = KES 20.",
  },
  {
    id: 92,
    subject: "Sports",
    question:
      "What is the name of the object that is passed from one runner to another in a relay race?",
    options: {
      A: "A baton",
      B: "A stick",
      C: "A rod",
      D: "A discus",
    },
    correctAnswer: "A",
    explanation:
      "In a relay race, team members take turns running parts of a circuit or performing a certain action. A baton is the object that is passed between the runners to signify the exchange.",
  },
  {
    id: 93,
    subject: "Creative Art",
    question: "Which of these is NOT an element of art?",
    options: {
      A: "Line",
      B: "Shape",
      C: "Rhythm",
      D: "Color",
    },
    correctAnswer: "C",
    explanation:
      "The elements of art are the fundamental components used to create a work of art. They include line, shape, form, space, texture, value, and color. Rhythm is a principle of design, not an element of art.",
  },
  {
    id: 94,
    subject: "English",
    question:
      "What do we call a word that sounds the same as another word but has a different meaning and spelling?",
    options: {
      A: "Synonym",
      B: "Antonym",
      C: "Homophone",
      D: "Acronym",
    },
    correctAnswer: "C",
    explanation:
      "A homophone is a word that is pronounced the same as another word but differs in meaning. For example, 'see' and 'sea'.",
  },
  {
    id: 95,
    subject: "Kiswahili",
    question: "Kifaa kinachotumiwa kupimia joto la mwili huitwaje?",
    options: {
      A: "Saa",
      B: "Mizani",
      C: "Themometa",
      D: "Barometa",
    },
    correctAnswer: "C",
    explanation:
      "Themometa ni kifaa cha kisayansi kinachotumika kupima halijoto au mabadiliko ya joto, ikiwemo joto la mwili wa binadamu.",
  },
  {
    id: 96,
    subject: "Social Studies",
    question:
      "What does the term 'CE' stand for in historical dating (e.g., 2024 CE)?",
    options: {
      A: "Christian Era",
      B: "Common Era",
      C: "Current Era",
      D: "Classical Era",
    },
    correctAnswer: "B",
    explanation:
      "'CE' stands for 'Common Era' and is used as an alternative to 'AD' (Anno Domini). Both refer to the period of time after the traditionally recognized birth year of Jesus Christ.",
  },
  {
    id: 97,
    subject: "Pre-Technical Studies",
    question: "Which of these is a renewable source of energy?",
    options: {
      A: "Coal",
      B: "Natural Gas",
      C: "Petroleum",
      D: "Solar Power",
    },
    correctAnswer: "D",
    explanation:
      "Renewable energy is energy that is collected from renewable resources, which are naturally replenished on a human timescale. Solar power, derived from the sun's radiation, is a prime example. Coal, gas, and petroleum are non-renewable fossil fuels.",
  },
  {
    id: 98,
    subject: "Agriculture",
    question:
      "The practice of growing crops without using synthetic fertilizers and pesticides is known as:",
    options: {
      A: "Conventional farming",
      B: "Hydroponics",
      C: "Organic farming",
      D: "Intensive farming",
    },
    correctAnswer: "C",
    explanation:
      "Organic farming is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal and places emphasis on techniques such as crop rotation and companion planting. It avoids the use of synthetic products.",
  },
  {
    id: 99,
    subject: "Home Science",
    question: "The deficiency of which vitamin causes scurvy?",
    options: {
      A: "Vitamin A",
      B: "Vitamin B",
      C: "Vitamin C",
      D: "Vitamin D",
    },
    correctAnswer: "C",
    explanation:
      "Scurvy is a disease resulting from a lack of Vitamin C (ascorbic acid). Early symptoms include weakness, feeling tired, and sore arms and legs. Without treatment, decreased red blood cells, gum disease, and bleeding from the skin may occur.",
  },
  {
    id: 100,
    subject: "Mathematics",
    question: "What is the place value of the digit 5 in the number 25,834?",
    options: {
      A: "Tens",
      B: "Hundreds",
      C: "Thousands",
      D: "Ten thousands",
    },
    correctAnswer: "C",
    explanation:
      "In the number 25,834, the digit 2 is in the ten thousands place, 5 is in the thousands place, 8 is in the hundreds place, 3 is in the tens place, and 4 is in the ones place.",
  },
  {
    id: 101,
    subject: "Sports",
    question:
      "The term 'knockout' or 'KO' is primarily associated with which sport?",
    options: {
      A: "Wrestling",
      B: "Boxing",
      C: "Judo",
      D: "Fencing",
    },
    correctAnswer: "B",
    explanation:
      "A knockout (KO) is a fight-ending, winning criterion in several full-contact combat sports, such as boxing, kickboxing, and mixed martial arts. A full knockout is considered any legal strike or combination thereof that renders an opponent unable to continue fighting.",
  },
  {
    id: 102,
    subject: "Creative Art",
    question: "What type of art involves creating images with a camera?",
    options: {
      A: "Sculpture",
      B: "Photography",
      C: "Pottery",
      D: "Painting",
    },
    correctAnswer: "B",
    explanation:
      "Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.",
  },
  {
    id: 103,
    subject: "English",
    question: "A group of lions is called a:",
    options: {
      A: "Pack",
      B: "Herd",
      C: "Flock",
      D: "Pride",
    },
    correctAnswer: "D",
    explanation:
      "A collective noun is a word used to represent a group of individuals. The collective noun for a group of lions is a 'pride'.",
  },
  {
    id: 104,
    subject: "Kiswahili",
    question: "Tegua kitendawili: 'Popoo mbili zavuka mto.'",
    options: {
      A: "Miguu",
      B: "Macho",
      C: "Magari",
      D: "Mikono",
    },
    correctAnswer: "B",
    explanation:
      "Jibu ni 'Macho'. Macho mawili (popoo mbili) yanaweza 'kuvuka' mto kwa kuangalia upande wa pili bila kimwili kufika huko.",
  },
  {
    id: 105,
    subject: "Social Studies",
    question:
      "The large-scale movement of people from rural areas to cities is known as:",
    options: {
      A: "Immigration",
      B: "Urbanization",
      C: "Emigration",
      D: "Suburbanization",
    },
    correctAnswer: "B",
    explanation:
      "Urbanization is the process through which cities grow, and higher and higher percentages of the population comes to live in the city, primarily through migration from rural areas.",
  },
  {
    id: 106,
    subject: "Pre-Technical Studies",
    question:
      "Which simple machine would be most helpful for lifting a heavy object to a higher level with less effort?",
    options: {
      A: "A wedge",
      B: "A screw",
      C: "A pulley system",
      D: "A wheel and axle",
    },
    correctAnswer: "C",
    explanation:
      "A pulley system uses wheels and ropes to lift heavy loads. By using multiple pulleys, the amount of force needed to lift an object is reduced, providing a mechanical advantage.",
  },
  {
    id: 107,
    subject: "Agriculture",
    question: "Which of the following is considered a poultry bird?",
    options: {
      A: "Goat",
      B: "Sheep",
      C: "Chicken",
      D: "Cow",
    },
    correctAnswer: "C",
    explanation:
      "Poultry are domesticated birds kept by humans for their eggs, their meat or their feathers. Chickens, ducks, geese and turkeys are typical members of this group.",
  },
  {
    id: 108,
    subject: "Home Science",
    question:
      "What is the term for a detailed plan for carrying out a process or procedure, such as a recipe for cooking?",
    options: {
      A: "A budget",
      B: "A schedule",
      C: "A recipe",
      D: "A menu",
    },
    correctAnswer: "C",
    explanation:
      "A recipe is a set of instructions for preparing a particular dish, including a list of the ingredients required.",
  },
  {
    id: 109,
    subject: "Mathematics",
    question: "A polygon with eight sides is called a/an:",
    options: {
      A: "Hexagon",
      B: "Pentagon",
      C: "Octagon",
      D: "Decagon",
    },
    correctAnswer: "C",
    explanation:
      "In geometry, an octagon is an eight-sided polygon. A hexagon has six sides, a pentagon has five, and a decagon has ten.",
  },
  {
    id: 110,
    subject: "Sports",
    question: "In which country did the sport of judo originate?",
    options: {
      A: "China",
      B: "Korea",
      C: "Japan",
      D: "Thailand",
    },
    correctAnswer: "C",
    explanation:
      "Judo is a modern martial art, combat and Olympic sport created in Japan in 1882 by Jigoro Kano. Its most prominent feature is its competitive element, where the objective is to either throw or takedown an opponent to the ground.",
  },
  {
    id: 111,
    subject: "Creative Art",
    question:
      "A material used by an artist, such as paint, clay, or pencil, is called a:",
    options: {
      A: "Medium",
      B: "Canvas",
      C: "Tool",
      D: "Subject",
    },
    correctAnswer: "A",
    explanation:
      "In art, medium refers to the material or substance the artist uses to create a piece of artwork. For example, the medium of a painting could be oil paint or acrylics.",
  },
  {
    id: 112,
    subject: "English",
    question:
      "What type of word is used to describe a verb, adjective, or another adverb (e.g., 'quickly', 'very')?",
    options: {
      A: "Noun",
      B: "Pronoun",
      C: "Adjective",
      D: "Adverb",
    },
    correctAnswer: "D",
    explanation:
      "An adverb is a word that modifies (describes) a verb (he sings loudly), an adjective (very tall), or another adverb (ended too quickly).",
  },
  {
    id: 113,
    subject: "Kiswahili",
    question: "Kamilisha: 'Mtu ni watu, ...'",
    options: {
      A: "...fedha ni mali.'",
      B: "...akili ni nywele.'",
      C: "...na Mungu ni wa wote.'",
      D: "...wala si mnyama.'",
    },
    correctAnswer: "C",
    explanation:
      "Hii ni semi inayosisitiza umuhimu wa ushirikiano na umoja miongoni mwa wanadamu, huku ikikumbusha kwamba Mungu ni muumba na mlinzi wa kila mtu bila ubaguzi.",
  },
  {
    id: 114,
    subject: "Social Studies",
    question: "The Renaissance was a period of 'rebirth' in which field?",
    options: {
      A: "Agriculture",
      B: "Politics",
      C: "Arts and Learning",
      D: "Warfare",
    },
    correctAnswer: "C",
    explanation:
      "The Renaissance was a fervent period of European cultural, artistic, political and economic 'rebirth' following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature and art.",
  },
  {
    id: 115,
    subject: "Pre-Technical Studies",
    question:
      "Which of these devices converts electrical energy into mechanical motion?",
    options: {
      A: "A generator",
      B: "A transformer",
      C: "An electric motor",
      D: "A battery",
    },
    correctAnswer: "C",
    explanation:
      "An electric motor is an electrical machine that converts electrical energy into mechanical energy. Most electric motors operate through the interaction between the motor's magnetic field and electric current in a wire winding to generate force in the form of torque.",
  },
  {
    id: 116,
    subject: "Agriculture",
    question:
      "Which part of a plant is primarily responsible for photosynthesis?",
    options: {
      A: "Roots",
      B: "Stem",
      C: "Leaves",
      D: "Flower",
    },
    correctAnswer: "C",
    explanation:
      "Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy. In most plants, this process occurs in the leaves, which contain chlorophyll.",
  },
  {
    id: 117,
    subject: "Home Science",
    question:
      "What is the primary reason for blanching vegetables before freezing?",
    options: {
      A: "To add flavor.",
      B: "To cook them completely.",
      C: "To slow or stop enzyme action that causes loss of flavor, color, and texture.",
      D: "To make them colder.",
    },
    correctAnswer: "C",
    explanation:
      "Blanching (scalding vegetables in boiling water or steam for a short time) is a must for most vegetables to be frozen. It stops enzyme actions which can cause loss of flavor, color and texture. It also cleanses the surface of dirt and organisms.",
  },
  {
    id: 118,
    subject: "Mathematics",
    question: "How many millimeters are in one meter?",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "10000",
    },
    correctAnswer: "C",
    explanation:
      "The metric system is based on powers of 10. There are 100 centimeters in a meter, and 10 millimeters in a centimeter. Therefore, there are 100 * 10 = 1000 millimeters in one meter.",
  },
  {
    id: 119,
    subject: "Sports",
    question: "In tennis, a score of zero is called:",
    options: {
      A: "Nil",
      B: "Duck",
      C: "Love",
      D: "Zip",
    },
    correctAnswer: "C",
    explanation:
      "In tennis, 'love' is used to represent a score of zero or nil. A score of 40-0 would be announced as 'forty-love'.",
  },
  {
    id: 120,
    subject: "Creative Art",
    question:
      "An artwork created by printing on a surface, such as paper or fabric, from a prepared block or plate is a form of:",
    options: {
      A: "Drawing",
      B: "Printmaking",
      C: "Ceramics",
      D: "Textile art",
    },
    correctAnswer: "B",
    explanation:
      "Printmaking is the process of creating artworks by printing, normally on paper. The process is capable of producing multiples of the same piece, which is called a print.",
  },
  {
    id: 121,
    subject: "English",
    question:
      "Which of the following is a punctuation mark used to indicate a question?",
    options: {
      A: "Period (.)",
      B: "Comma (,)",
      C: "Exclamation mark (!)",
      D: "Question mark (?)",
    },
    correctAnswer: "D",
    explanation:
      "A question mark (?) is a punctuation mark that indicates an interrogative clause or phrase in many languages. It is placed at the end of a sentence to show that it is a direct question.",
  },
  {
    id: 122,
    subject: "Kiswahili",
    question: "Jina la pamoja la kundi la nyuki ni nini?",
    options: {
      A: "Kundi",
      B: "Kikosi",
      C: "Tita",
      D: "Bumba",
    },
    correctAnswer: "D",
    explanation:
      "Jina la pamoja (collective noun) linalotumiwa kurejelea kundi kubwa la nyuki walio pamoja, hasa wanapohama, ni 'bumba la nyuki'.",
  },
  {
    id: 123,
    subject: "Social Studies",
    question: "The Berlin Conference of 1884-1885 was convened to regulate:",
    options: {
      A: "World trade routes.",
      B: "The abolition of slavery.",
      C: "European colonization and trade in Africa.",
      D: "The end of the Napoleonic Wars.",
    },
    correctAnswer: "C",
    explanation:
      "The Berlin Conference of 1884–1885, also known as the Congo Conference, regulated European colonization and trade in Africa during the New Imperialism period and coincided with Germany's sudden emergence as an imperial power. It led to the 'Scramble for Africa'.",
  },
  {
    id: 124,
    subject: "Pre-Technical Studies",
    question:
      "Which type of drawing uses vanishing points to create a realistic 3D illusion of depth?",
    options: {
      A: "Orthographic drawing",
      B: "Isometric drawing",
      C: "Perspective drawing",
      D: "Schematic drawing",
    },
    correctAnswer: "C",
    explanation:
      "Perspective drawing is a technique used to represent three-dimensional images on a two-dimensional picture plane. It uses elements like vanishing points and horizon lines to create a realistic depiction of depth and space.",
  },
  {
    id: 125,
    subject: "Agriculture",
    question: "What is a 'silo' used for on a farm?",
    options: {
      A: "Housing animals.",
      B: "Storing water.",
      C: "Storing bulk materials like grain or fermented feed (silage).",
      D: "Growing crops in a controlled environment.",
    },
    correctAnswer: "C",
    explanation:
      "A silo is a structure for storing bulk materials. Silos are used in agriculture to store grain or fermented feed known as silage. They are more common for bulk storage of grain, coal, cement, and other materials.",
  },
  {
    id: 126,
    subject: "Home Science",
    question:
      "What is the process of using a needle to pass thread through fabric to join pieces together?",
    options: {
      A: "Weaving",
      B: "Knitting",
      C: "Sewing",
      D: "Dyeing",
    },
    correctAnswer: "C",
    explanation:
      "Sewing is the craft of fastening or attaching objects using stitches made with a needle and thread. It is one ofs the oldest of the textile arts, arising in the Paleolithic era.",
  },
  {
    id: 127,
    subject: "Mathematics",
    question:
      "In a right-angled triangle, the side opposite the right angle is called the:",
    options: {
      A: "Adjacent",
      B: "Opposite",
      C: "Hypotenuse",
      D: "Base",
    },
    correctAnswer: "C",
    explanation:
      "In a right-angled triangle, the hypotenuse is the longest side, which is always the side opposite the right angle (90-degree angle).",
  },
  {
    id: 128,
    subject: "Sports",
    question: "How many rings are there on the Olympic flag?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer: "C",
    explanation:
      "The Olympic symbol consists of five interlocking rings, colored blue, yellow, black, green, and red on a white field. The rings represent the five inhabited continents of the world (Africa, the Americas, Asia, Europe, and Oceania).",
  },
  {
    id: 129,
    subject: "Creative Art",
    question:
      "The surface quality of an artwork, such as rough, smooth, or soft, is known as:",
    options: {
      A: "Pattern",
      B: "Texture",
      C: "Form",
      D: "Space",
    },
    correctAnswer: "B",
    explanation:
      "Texture is the element of art that refers to the way things feel, or look as if they might feel if touched. It can be real (the actual feel of a surface) or implied (the illusion of texture in a 2D artwork).",
  },
  {
    id: 130,
    subject: "English",
    question: "The person who is the main character in a story is called the:",
    options: {
      A: "Antagonist",
      B: "Protagonist",
      C: "Narrator",
      D: "Author",
    },
    correctAnswer: "B",
    explanation:
      "The protagonist is the central character or leading figure in poetry, narrative, novel or any other story. The antagonist is the character who opposes the protagonist.",
  },
  {
    id: 131,
    subject: "Kiswahili",
    question:
      "Usemi 'kuvunjika kwa mwiko' unamaanisha nini katika muktadha wa chakula?",
    options: {
      A: "Chakula kimeiva.",
      B: "Chakula hakitoshi.",
      C: "Kuna wageni wengi.",
      D: "Chakula kimeungua.",
    },
    correctAnswer: "B",
    explanation:
      "Huu ni usemi wa picha (idiom). 'Kuvunjika kwa mwiko' jikoni aghalabu humaanisha chakula kilichopikwa hakitoshelezi idadi ya watu waliopo, hasa baada ya ujio wa wageni wasiotarajiwa.",
  },
  {
    id: 132,
    subject: "Social Studies",
    question:
      "What is the primary role of the legislative branch of government?",
    options: {
      A: "To enforce laws.",
      B: "To interpret laws.",
      C: "To make laws.",
      D: "To command the military.",
    },
    correctAnswer: "C",
    explanation:
      "The legislature is the branch of government with the authority to make laws for a political entity such as a country or city. The other branches are the executive (enforces laws) and the judiciary (interprets laws).",
  },
  {
    id: 133,
    subject: "Pre-Technical Studies",
    question:
      "A force that opposes motion between two surfaces that are in contact is called:",
    options: {
      A: "Gravity",
      B: "Magnetism",
      C: "Friction",
      D: "Inertia",
    },
    correctAnswer: "C",
    explanation:
      "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other. It is the reason why it is difficult to push a heavy box across the floor.",
  },
  {
    id: 134,
    subject: "Agriculture",
    question:
      "The artificial application of water to land to assist in the production of crops is called:",
    options: {
      A: "Fertilization",
      B: "Irrigation",
      C: "Drainage",
      D: "Ploughing",
    },
    correctAnswer: "B",
    explanation:
      "Irrigation is the method in which a controlled amount of water is supplied to plants at regular intervals for agriculture. It is used to assist in the growing of agricultural crops in dry areas and during periods of less than average rainfall.",
  },
  {
    id: 135,
    subject: "Home Science",
    question:
      "Which of these is a method of heat transfer where heat moves through direct contact?",
    options: {
      A: "Convection",
      B: "Radiation",
      C: "Conduction",
      D: "Evaporation",
    },
    correctAnswer: "C",
    explanation:
      "Conduction is the transfer of heat between substances that are in direct contact with each other. For example, a pot handle gets hot because heat is conducted from the stove burner through the pot.",
  },
  {
    id: 136,
    subject: "Mathematics",
    question: "What is the Least Common Multiple (LCM) of 4 and 6?",
    options: {
      A: "2",
      B: "10",
      C: "12",
      D: "24",
    },
    correctAnswer: "C",
    explanation:
      "The Least Common Multiple (LCM) is the smallest positive integer that is a multiple of both numbers. Multiples of 4 are 4, 8, 12, 16... Multiples of 6 are 6, 12, 18... The smallest number they have in common is 12.",
  },
  {
    id: 137,
    subject: "Sports",
    question:
      "A 'hat-trick' in football (soccer) refers to a player scoring how many goals in a single game?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctAnswer: "B",
    explanation:
      "A hat-trick is the achievement of a positive feat three times in a game. In football, it refers to a single player scoring three goals in one match.",
  },
  {
    id: 138,
    subject: "Creative Art",
    question:
      "The area around, between, and within objects in an artwork is called:",
    options: {
      A: "Line",
      B: "Shape",
      C: "Space",
      D: "Form",
    },
    correctAnswer: "C",
    explanation:
      "Space is an element of art that refers to the distances or areas around, between, and within components of a piece. Space can be positive (the subject) or negative (the background).",
  },
  {
    id: 139,
    subject: "English",
    question:
      "A figure of speech that makes a comparison between two unlike things using 'like' or 'as' is a:",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Hyperbole",
    },
    correctAnswer: "B",
    explanation:
      "A simile is a figure of speech that directly compares two things using connecting words such as 'like' or 'as'. For example, 'as brave as a lion'.",
  },
  {
    id: 140,
    subject: "Kiswahili",
    question: "Neno 'alimsomea' lina kauli gani?",
    options: {
      A: "Kutenda",
      B: "Kutendwa",
      C: "Kutendea",
      D: "Kutendana",
    },
    correctAnswer: "C",
    explanation:
      "Kiambishi tamati '-ea' katika kitenzi 'soma' huunda kauli ya kutendea (applicative form). Hii inaonyesha kuwa kitendo cha kusoma kilifanywa kwa niaba ya mtu mwingine.",
  },
  {
    id: 141,
    subject: "Social Studies",
    question:
      "The system of trade in which goods were exchanged directly for other goods without using money is called:",
    options: {
      A: "Capitalism",
      B: "Mercantilism",
      C: "Barter trade",
      D: "Free trade",
    },
    correctAnswer: "C",
    explanation:
      "Barter is a system of exchange where participants in a transaction directly exchange goods or services for other goods or services without using a medium of exchange, such as money.",
  },
  {
    id: 142,
    subject: "Pre-Technical Studies",
    question: "Which material is an alloy of iron and carbon?",
    options: {
      A: "Bronze",
      B: "Brass",
      C: "Steel",
      D: "Aluminum",
    },
    correctAnswer: "C",
    explanation:
      "Steel is an alloy made up of iron with typically a few tenths of a percent of carbon to improve its strength and fracture resistance compared to iron.",
  },
  {
    id: 143,
    subject: "Agriculture",
    question: "The process by which a plant grows from a seed is known as:",
    options: {
      A: "Pollination",
      B: "Fertilization",
      C: "Germination",
      D: "Transpiration",
    },
    correctAnswer: "C",
    explanation:
      "Germination is the process by which a plant or fungus emerges from a seed or spore and begins growth. It requires suitable conditions of moisture, temperature, and oxygen.",
  },
  {
    id: 144,
    subject: "Home Science",
    question: "What is the main purpose of a budget for a family?",
    options: {
      A: "To spend more money.",
      B: "To track and control income and expenditure.",
      C: "To eliminate all spending on wants.",
      D: "To increase debt.",
    },
    correctAnswer: "B",
    explanation:
      "A family budget is a financial plan that allocates future personal income towards expenses, savings and debt repayment. It helps in tracking spending and ensuring that expenditure does not exceed income.",
  },
  {
    id: 145,
    subject: "Mathematics",
    question: "Find the average of the following numbers: 10, 20, 30.",
    options: {
      A: "15",
      B: "20",
      C: "25",
      D: "60",
    },
    correctAnswer: "B",
    explanation:
      "To find the average (or mean), you sum the numbers and then divide by the count of the numbers. Sum = 10 + 20 + 30 = 60. Count = 3. Average = 60 / 3 = 20.",
  },
  {
    id: 146,
    subject: "Sports",
    question:
      "The Stanley Cup is the championship trophy awarded annually in which sport?",
    options: {
      A: "American Football",
      B: "Baseball",
      C: "Ice Hockey",
      D: "Basketball",
    },
    correctAnswer: "C",
    explanation:
      "The Stanley Cup is the championship trophy awarded annually to the National Hockey League (NHL) playoff winner. It is the oldest existing trophy to be awarded to a professional sports franchise in North America.",
  },
  {
    id: 147,
    subject: "Creative Art",
    question:
      "Creating art by folding paper into decorative shapes and figures is known as:",
    options: {
      A: "Origami",
      B: "Kirigami",
      C: "Papier-mâché",
      D: "Quilling",
    },
    correctAnswer: "A",
    explanation:
      "Origami is the Japanese art of paper folding. In modern usage, the word 'origami' is used as an inclusive term for all folding practices, regardless of their culture of origin.",
  },
  {
    id: 148,
    subject: "English",
    question: "The sentence 'The cat sat on the mat' is in which tense?",
    options: {
      A: "Present tense",
      B: "Past tense",
      C: "Future tense",
      D: "Present continuous tense",
    },
    correctAnswer: "B",
    explanation:
      "The sentence uses the verb 'sat', which is the simple past tense of the verb 'to sit'. Therefore, the sentence is in the past tense.",
  },
  {
    id: 149,
    subject: "Kiswahili",
    question: "Mtu anayetengeneza viatu anaitwa nani?",
    options: {
      A: "Mhunzi",
      B: "Seremala",
      C: "Mshoni",
      D: "Kiriri",
    },
    correctAnswer: "D",
    explanation:
      "Mtu ambaye kazi yake ni kutengeneza au kukarabati viatu anaitwa kiriri au mshona viatu. Mhunzi hufua chuma, seremala hutengeneza samani za mbao, na mshoni hushona nguo.",
  },
  {
    id: 150,
    subject: "Social Studies",
    question:
      "What is the name of the ancient trade route that connected the East and the West?",
    options: {
      A: "The Spice Route",
      B: "The Silk Road",
      C: "The Incense Route",
      D: "The Amber Road",
    },
    correctAnswer: "B",
    explanation:
      "The Silk Road was a network of trade routes which connected the East and West, and was central to the economic, cultural, political, and religious interactions between these regions from the 2nd century BCE to the 18th century.",
  },
  {
    id: 151,
    subject: "Pre-Technical Studies",
    question: "What does CAD stand for in the context of design and drawing?",
    options: {
      A: "Computer-Aided Drawing",
      B: "Computer-Assisted Design",
      C: "Creative Art and Design",
      D: "Calculated Architectural Dimension",
    },
    correctAnswer: "B",
    explanation:
      "CAD, or Computer-Aided Design (and drafting), is the use of computer technology for the process of design and design-documentation. It is used to create 2D and 3D models and drawings.",
  },
  {
    id: 152,
    subject: "Agriculture",
    question: "Which of these is a root vegetable?",
    options: {
      A: "Cabbage",
      B: "Spinach",
      C: "Carrot",
      D: "Broccoli",
    },
    correctAnswer: "C",
    explanation:
      "Root vegetables are plant roots used as vegetables. A carrot is a taproot, which is a type of root that grows vertically downward and is the main edible part of the plant.",
  },
  {
    id: 153,
    subject: "Home Science",
    question:
      "The first milk produced by a mother after giving birth, which is rich in antibodies, is called:",
    options: {
      A: "Formula",
      B: "Whey",
      C: "Colostrum",
      D: "Casein",
    },
    correctAnswer: "C",
    explanation:
      "Colostrum is the first form of milk produced by the mammary glands of mammals immediately following delivery of the newborn. It is high in carbohydrates, protein, and antibodies and low in fat.",
  },
  {
    id: 154,
    subject: "Mathematics",
    question: "A number that can only be divided by 1 and itself is called a:",
    options: {
      A: "Prime number",
      B: "Composite number",
      C: "Even number",
      D: "Odd number",
    },
    correctAnswer: "A",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples include 2, 3, 5, 7, 11.",
  },
  {
    id: 155,
    subject: "Sports",
    question: "In which sport do competitors race on bicycles?",
    options: {
      A: "Rowing",
      B: "Equestrianism",
      C: "Cycling",
      D: "Archery",
    },
    correctAnswer: "C",
    explanation:
      "Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. It encompasses various competitive disciplines like road racing, track cycling, and mountain biking.",
  },
  {
    id: 156,
    subject: "Creative Art",
    question:
      "The art and science of designing buildings and other physical structures is known as:",
    options: {
      A: "Sculpture",
      B: "Architecture",
      C: "Engineering",
      D: "Interior Design",
    },
    correctAnswer: "B",
    explanation:
      "Architecture is both the process and the product of planning, designing, and constructing buildings or other structures. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art.",
  },
  {
    id: 157,
    subject: "English",
    question:
      "A book containing lists of words in alphabetical order with their meanings is called a:",
    options: {
      A: "Thesaurus",
      B: "Encyclopedia",
      C: "Dictionary",
      D: "Atlas",
    },
    correctAnswer: "C",
    explanation:
      "A dictionary is a listing of words in one or more specific languages, often arranged alphabetically, which may include information on definitions, usage, etymologies, pronunciations, and more.",
  },
  {
    id: 158,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'nenda' ni kipi?",
    options: {
      A: "Simama",
      B: "Kimbia",
      C: "Rudi",
      D: "Toka",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'nenda' ni amri ya kwenda mbele au kuelekea mahali. Kinyume chake ni 'rudi', ambalo ni amri ya kurejea ulikotoka.",
  },
  {
    id: 159,
    subject: "Social Studies",
    question:
      "The historical period characterized by the use of stone tools is called the:",
    options: {
      A: "Iron Age",
      B: "Bronze Age",
      C: "Stone Age",
      D: "Information Age",
    },
    correctAnswer: "C",
    explanation:
      "The Stone Age was a broad prehistoric period during which stone was widely used to make implements with an edge, a point, or a percussion surface. The period lasted for roughly 3.4 million years, and ended between 4,000 BCE and 2,000 BCE.",
  },
  {
    id: 160,
    subject: "Pre-Technical Studies",
    question: "Which of these is NOT a simple machine?",
    options: {
      A: "Lever",
      B: "Pulley",
      C: "Engine",
      D: "Inclined Plane",
    },
    correctAnswer: "C",
    explanation:
      "The six classical simple machines are the lever, wheel and axle, pulley, inclined plane, wedge, and screw. An engine is a complex machine that combines multiple simple machines and a power source to do work.",
  },
  {
    id: 161,
    subject: "Agriculture",
    question:
      "The practice of rotating the growing of different types of crops in the same area in sequential seasons is known as:",
    options: {
      A: "Intercropping",
      B: "Monoculture",
      C: "Crop rotation",
      D: "Fallowing",
    },
    correctAnswer: "C",
    explanation:
      "Crop rotation is the practice of growing a series of different types of crops in the same area across a sequence of growing seasons. It helps in managing soil fertility, reducing soil erosion, and controlling pests and diseases.",
  },
  {
    id: 162,
    subject: "Home Science",
    question:
      "Which nutrient provides the body with its main source of energy?",
    options: {
      A: "Proteins",
      B: "Carbohydrates",
      C: "Fats",
      D: "Vitamins",
    },
    correctAnswer: "B",
    explanation:
      "Carbohydrates are the body's primary source of energy. The body breaks down carbohydrates into glucose, which is used for energy by cells, tissues, and organs.",
  },
  {
    id: 163,
    subject: "Mathematics",
    question:
      "If a train travels at 60 km/h, how far will it travel in 3 hours?",
    options: {
      A: "20 km",
      B: "63 km",
      C: "120 km",
      D: "180 km",
    },
    correctAnswer: "D",
    explanation:
      "Distance is calculated by multiplying speed by time. Distance = Speed × Time = 60 km/h × 3 h = 180 km.",
  },
  {
    id: 164,
    subject: "Sports",
    question:
      "The term 'checkmate' signals the end of a game in which activity?",
    options: {
      A: "Draughts",
      B: "Chess",
      C: "Go",
      D: "Dominoes",
    },
    correctAnswer: "B",
    explanation:
      "In chess, checkmate is a game position in which a player's king is in check (threatened with capture) and there is no way to move the king out of check, block the check, or capture the threatening piece. Checkmating the opponent's king wins the game.",
  },
  {
    id: 165,
    subject: "Creative Art",
    question:
      "A type of pottery that is fired at a high temperature to make it hard and non-porous is called:",
    options: {
      A: "Earthenware",
      B: "Terracotta",
      C: "Stoneware",
      D: "Clayware",
    },
    correctAnswer: "C",
    explanation:
      "Stoneware is a broad term for pottery or other ceramics fired at a relatively high temperature. It is harder and more durable than earthenware and is often used for dinnerware and kitchen items.",
  },
  {
    id: 166,
    subject: "English",
    question: "What is the plural form of the noun 'child'?",
    options: {
      A: "Childs",
      B: "Children",
      C: "Childes",
      D: "Childrens",
    },
    correctAnswer: "B",
    explanation:
      "The noun 'child' has an irregular plural form, which is 'children'.",
  },
  {
    id: 167,
    subject: "Kiswahili",
    question: "Ukubwa wa neno 'nyumba' ni nini?",
    options: {
      A: "Kinyumba",
      B: "Jumba",
      C: "Nyumba kubwa",
      D: "Manyumba",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'nyumba' likiwa katika hali ya ukubwa huwa 'jumba'. 'Kinyumba' ni udogo na 'manyumba' ni wingi.",
  },
  {
    id: 168,
    subject: "Social Studies",
    question:
      "A map that shows physical features like mountains, rivers, and lakes is called a:",
    options: {
      A: "Political map",
      B: "Topographical map",
      C: "Thematic map",
      D: "Road map",
    },
    correctAnswer: "B",
    explanation:
      "A topographical map is a type of map characterized by large-scale detail and quantitative representation of relief, usually using contour lines, but historically using a variety of methods. It shows both natural and man-made features.",
  },
  {
    id: 169,
    subject: "Pre-Technical Studies",
    question: "What is the unit of measurement for electrical resistance?",
    options: {
      A: "Volt",
      B: "Ampere",
      C: "Watt",
      D: "Ohm",
    },
    correctAnswer: "D",
    explanation:
      "The ohm (symbol: Ω) is the SI derived unit of electrical resistance, named after German physicist Georg Ohm. The volt measures electric potential, the ampere measures current, and the watt measures power.",
  },
  {
    id: 170,
    subject: "Agriculture",
    question:
      "The science and art of growing fruits, vegetables, flowers, or ornamental plants is known as:",
    options: {
      A: "Agronomy",
      B: "Forestry",
      C: "Horticulture",
      D: "Aquaculture",
    },
    correctAnswer: "C",
    explanation:
      "Horticulture is the branch of agriculture that deals with the art, science, technology, and business of plant cultivation. It includes the cultivation of fruits, vegetables, nuts, seeds, herbs, sprouts, mushrooms, algae, flowers, seaweeds and non-food crops such as grass and ornamental trees and plants.",
  },
  {
    id: 171,
    subject: "Home Science",
    question:
      "Which of the following is an example of a good personal hygiene practice?",
    options: {
      A: "Sharing a toothbrush.",
      B: "Washing hands regularly with soap and water.",
      C: "Wearing the same clothes for several days.",
      D: "Not covering your mouth when you cough.",
    },
    correctAnswer: "B",
    explanation:
      "Good personal hygiene involves keeping all parts of the external body clean and healthy. Washing hands frequently is one of the most effective ways to prevent the spread of germs and illnesses.",
  },
  {
    id: 172,
    subject: "Mathematics",
    question:
      "If a pizza is divided into 8 equal slices and you eat 3 slices, what fraction of the pizza have you eaten?",
    options: {
      A: "1/8",
      B: "3/8",
      C: "5/8",
      D: "3/5",
    },
    correctAnswer: "B",
    explanation:
      "A fraction represents a part of a whole. In this case, the whole pizza is 8 slices. If you eat 3 of those slices, you have eaten 3 out of 8, which is represented by the fraction 3/8.",
  },
  {
    id: 173,
    subject: "Sports",
    question:
      "Which athletic event involves throwing a heavy metal ball as far as possible?",
    options: {
      A: "Discus throw",
      B: "Javelin throw",
      C: "Hammer throw",
      D: "Shot put",
    },
    correctAnswer: "D",
    explanation:
      "The shot put is a track and field event involving 'putting' (pushing rather than throwing) a heavy spherical ball—the shot—as far as possible. It is one of the four traditional throwing events in athletics.",
  },
  {
    id: 174,
    subject: "Creative Art",
    question: "Mixing blue and yellow paint produces which color?",
    options: {
      A: "Green",
      B: "Purple",
      C: "Orange",
      D: "Brown",
    },
    correctAnswer: "A",
    explanation:
      "In subtractive color mixing (as with pigments like paint), blue and yellow are mixed to create the secondary color green.",
  },
  {
    id: 175,
    subject: "English",
    question:
      "A story that teaches a moral lesson, often with animals as characters, is called a:",
    options: {
      A: "Fable",
      B: "Myth",
      C: "Legend",
      D: "Novel",
    },
    correctAnswer: "A",
    explanation:
      "A fable is a short fictional story that has a moral or teaches a lesson. Fables use animals, mythical creatures, plants, inanimate objects, or forces of nature as characters.",
  },
  {
    id: 176,
    subject: "Kiswahili",
    question: "Nomino 'furaha' iko katika ngeli gani?",
    options: {
      A: "I-ZI",
      B: "U-I",
      C: "I-I",
      D: "A-WA",
    },
    correctAnswer: "C",
    explanation:
      "Nomino dhahania kama 'furaha' hupatikana katika ngeli ya I-I. Haina wingi na upatanisho wake wa kisarufi hutumia viambishi vya ngeli ya 'I'. Mfano: Furaha yangu imetoweka.",
  },
  {
    id: 177,
    subject: "Social Studies",
    question: "The first successful powered airplane was invented by:",
    options: {
      A: "Leonardo da Vinci",
      B: "The Wright brothers",
      C: "Alexander Graham Bell",
      D: "Thomas Edison",
    },
    correctAnswer: "B",
    explanation:
      "Orville and Wilbur Wright, two American aviation pioneers, are generally credited with inventing, building, and flying the world's first successful motor-operated airplane on December 17, 1903.",
  },
  {
    id: 178,
    subject: "Pre-Technical Studies",
    question:
      "In woodworking, what is the process of smoothing wood with sandpaper called?",
    options: {
      A: "Planing",
      B: "Chiseling",
      C: "Sanding",
      D: "Sawing",
    },
    correctAnswer: "C",
    explanation:
      "Sanding is a process used to smooth the surface of materials like wood by abrading it with sandpaper. The grit of the sandpaper determines how rough or fine the finish will be.",
  },
  {
    id: 179,
    subject: "Agriculture",
    question: "A young sheep is called a:",
    options: {
      A: "Calf",
      B: "Kid",
      C: "Lamb",
      D: "Foal",
    },
    correctAnswer: "C",
    explanation:
      "A young sheep is called a lamb. A calf is a young cow, a kid is a young goat, and a foal is a young horse.",
  },
  {
    id: 180,
    subject: "Home Science",
    question:
      "Which of these is a permanent stitch used to join fabric pieces securely?",
    options: {
      A: "Basting stitch",
      B: "Tacking stitch",
      C: "Backstitch",
      D: "Tailor's tack",
    },
    correctAnswer: "C",
    explanation:
      "The backstitch is a strong, reliable hand-sewing stitch that creates a solid line of sewing suitable for seams and decoration. Basting and tacking stitches are temporary stitches used to hold fabric in place before final sewing.",
  },
  {
    id: 181,
    subject: "Mathematics",
    question: "What is the Roman numeral for the number 50?",
    options: {
      A: "X",
      B: "L",
      C: "C",
      D: "D",
    },
    correctAnswer: "B",
    explanation:
      "In the Roman numeral system: X = 10, L = 50, C = 100, and D = 500.",
  },
  {
    id: 182,
    subject: "Sports",
    question:
      "A standard game of basketball is divided into four periods called:",
    options: {
      A: "Innings",
      B: "Halves",
      C: "Sets",
      D: "Quarters",
    },
    correctAnswer: "D",
    explanation:
      "Professional and collegiate basketball games are divided into four quarters. The length of the quarters varies depending on the level of play (e.g., 12 minutes in the NBA, 10 minutes in FIBA).",
  },
  {
    id: 183,
    subject: "Creative Art",
    question: "A portrait is an artwork that primarily depicts:",
    options: {
      A: "A landscape",
      B: "An animal",
      C: "A person or group of people",
      D: "An abstract idea",
    },
    correctAnswer: "C",
    explanation:
      "A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expression is predominant. The intent is to display the likeness, personality, and even the mood of the person.",
  },
  {
    id: 184,
    subject: "English",
    question:
      "A word formed from the first letters of a name (e.g., NASA) is called an:",
    options: {
      A: "Abbreviation",
      B: "Acronym",
      C: "Initialism",
      D: "Eponym",
    },
    correctAnswer: "B",
    explanation:
      "An acronym is an abbreviation formed from the initial letters of other words and pronounced as a single word. NASA stands for National Aeronautics and Space Administration.",
  },
  {
    id: 185,
    subject: "Kiswahili",
    question: "Msemo 'piga maji' una maana gani isiyo rasmi?",
    options: {
      A: "Kuogelea",
      B: "Kunywa pombe",
      C: "Kunyesha mvua",
      D: "Kufua nguo",
    },
    correctAnswer: "B",
    explanation:
      "Katika lugha ya mtaani (sheng), 'kupiga maji' ni msemo unaotumiwa kurejelea kitendo cha kunywa vileo au pombe.",
  },
  {
    id: 186,
    subject: "Social Studies",
    question: "The Industrial Revolution began in which country?",
    options: {
      A: "France",
      B: "United States",
      C: "Germany",
      D: "Great Britain",
    },
    correctAnswer: "D",
    explanation:
      "The Industrial Revolution was the transition to new manufacturing processes in Europe and the United States, in the period from about 1760 to sometime between 1820 and 1840. It began in Great Britain.",
  },
  {
    id: 187,
    subject: "Pre-Technical Studies",
    question:
      "A gear is a rotating machine part having cut teeth which mesh with another toothed part in order to:",
    options: {
      A: "Generate electricity",
      B: "Reduce friction",
      C: "Transmit torque",
      D: "Store energy",
    },
    correctAnswer: "C",
    explanation:
      "The fundamental purpose of gears is to transmit torque (rotational force) and change speed or direction. When two gears mesh, the larger gear will rotate slower but with more torque than the smaller gear.",
  },
  {
    id: 188,
    subject: "Agriculture",
    question: "Which of these is a way of preserving fish?",
    options: {
      A: "Roasting",
      B: "Boiling",
      C: "Smoking",
      D: "Steaming",
    },
    correctAnswer: "C",
    explanation:
      "Smoking is a method of preserving fish (and meat) that involves curing it with salt and then exposing it to smoke from burning wood. The smoke dries the fish and contains compounds that inhibit bacterial growth.",
  },
  {
    id: 189,
    subject: "Home Science",
    question:
      "A set of rules for polite behavior in society or among members of a particular profession or group is called:",
    options: {
      A: "Law",
      B: "Etiquette",
      C: "Tradition",
      D: "Habit",
    },
    correctAnswer: "B",
    explanation:
      "Etiquette is the customary code of polite behavior in society or among members of a particular profession or group. It includes things like table manners, proper greetings, and respectful communication.",
  },
  {
    id: 190,
    subject: "Mathematics",
    question: "What is the value of π (pi) approximately?",
    options: {
      A: "2.14",
      B: "3.14",
      C: "4.14",
      D: "5.14",
    },
    correctAnswer: "B",
    explanation:
      "Pi (π) is a mathematical constant. It is defined as the ratio of a circle's circumference to its diameter, and it is approximately equal to 3.14159. For most calculations, 3.14 or the fraction 22/7 is used.",
  },
  {
    id: 191,
    subject: "Sports",
    question: "The Tour de France is a famous annual race in which sport?",
    options: {
      A: "Motor racing",
      B: "Running",
      C: "Sailing",
      D: "Cycling",
    },
    correctAnswer: "D",
    explanation:
      "The Tour de France is an annual men's multiple-stage bicycle race primarily held in France, while also occasionally passing through nearby countries. It is one of the most prestigious cycling races in the world.",
  },
  {
    id: 192,
    subject: "Creative Art",
    question:
      "The part of a picture that appears to be in the distance or behind the main objects is the:",
    options: {
      A: "Foreground",
      B: "Middle ground",
      C: "Background",
      D: "Frame",
    },
    correctAnswer: "C",
    explanation:
      "In a visual artwork, the background is the part of the scene that appears farthest from the viewer. The foreground is closest, and the middle ground is in between.",
  },
  {
    id: 193,
    subject: "English",
    question: "Which of these words is a pronoun?",
    options: {
      A: "Run",
      B: "House",
      C: "She",
      D: "Happy",
    },
    correctAnswer: "C",
    explanation:
      "A pronoun is a word that is used instead of a noun or noun phrase. 'She' is a personal pronoun that can replace a female noun (e.g., 'Mary'). 'Run' is a verb, 'house' is a noun, and 'happy' is an adjective.",
  },
  {
    id: 194,
    subject: "Kiswahili",
    question: "Katika sentensi 'Ali anaandika barua', 'Ali' ni nini?",
    options: {
      A: "Kitenzi",
      B: "Kivumishi",
      C: "Nomino",
      D: "Kielezi",
    },
    correctAnswer: "C",
    explanation:
      "Katika sentensi hiyo, 'Ali' ni jina la mtu, na maneno yanayotaja majina ya watu, vitu, au mahali huitwa nomino (nouns).",
  },
  {
    id: 195,
    subject: "Social Studies",
    question:
      "A person who studies human history and prehistory through the excavation of sites and the analysis of artifacts is a/an:",
    options: {
      A: "Geologist",
      B: "Paleontologist",
      C: "Archaeologist",
      D: "Historian",
    },
    correctAnswer: "C",
    explanation:
      "Archaeology is the study of human activity through the recovery and analysis of material culture. The archaeological record consists of artifacts, architecture, biofacts or ecofacts, and cultural landscapes.",
  },
  {
    id: 196,
    subject: "Pre-Technical Studies",
    question:
      "A screw is essentially a/an ______ wrapped around a central cylinder.",
    options: {
      A: "Lever",
      B: "Inclined plane",
      C: "Wedge",
      D: "Pulley",
    },
    correctAnswer: "B",
    explanation:
      "A screw is a simple machine that can be thought of as an inclined plane wrapped around a cylinder. The threads of the screw act as the inclined plane, converting rotational motion into linear motion and providing mechanical advantage.",
  },
  {
    id: 197,
    subject: "Agriculture",
    question:
      "A large farm, especially in a tropical country, where crops such as coffee, tea, or rubber are grown is called a:",
    options: {
      A: "Ranch",
      B: "Orchard",
      C: "Plantation",
      D: "Paddock",
    },
    correctAnswer: "C",
    explanation:
      "A plantation is a large-scale estate meant for farming that specializes in cash crops. The crops are grown for profit, and they are often exported to other countries.",
  },
  {
    id: 198,
    subject: "Home Science",
    question:
      "Which food group is the best source of calcium for strong bones and teeth?",
    options: {
      A: "Fruits and vegetables",
      B: "Grains and cereals",
      C: "Meat and beans",
      D: "Dairy products",
    },
    correctAnswer: "D",
    explanation:
      "Dairy products, such as milk, yogurt, and cheese, are rich in calcium, which is an essential mineral for building and maintaining strong bones and teeth.",
  },
  {
    id: 199,
    subject: "Mathematics",
    question:
      "What is the name of a 3D shape that has two parallel circular bases and a curved surface?",
    options: {
      A: "Sphere",
      B: "Cone",
      C: "Cylinder",
      D: "Cube",
    },
    correctAnswer: "C",
    explanation:
      "A cylinder is a three-dimensional solid that holds two parallel bases joined by a curved surface, at a fixed distance. The bases are usually circular in shape.",
  },
  {
    id: 200,
    subject: "Sports",
    question:
      "Which of these is NOT a position in a standard game of volleyball?",
    options: {
      A: "Setter",
      B: "Libero",
      C: "Striker",
      D: "Middle Blocker",
    },
    correctAnswer: "C",
    explanation:
      "Setter, Libero, and Middle Blocker are all specialized positions in volleyball. 'Striker' is a position in other sports, most notably football (soccer).",
  },
  {
    id: 201,
    subject: "Creative Art",
    question:
      "The pure form of a color, without any white, black, or gray added, is its:",
    options: {
      A: "Tint",
      B: "Shade",
      C: "Tone",
      D: "Hue",
    },
    correctAnswer: "D",
    explanation:
      "Hue is the term for the pure spectrum colors, such as red, orange, yellow, blue, green, and violet. A tint is a hue with white added, a shade is a hue with black added, and a tone is a hue with gray added.",
  },
  {
    id: 202,
    subject: "English",
    question:
      "A comparison between two unlike things that does NOT use 'like' or 'as' is called a:",
    options: {
      A: "Simile",
      B: "Metaphor",
      C: "Alliteration",
      D: "Onomatopoeia",
    },
    correctAnswer: "B",
    explanation:
      "A metaphor is a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable. For example, 'The classroom was a zoo'.",
  },
  {
    id: 203,
    subject: "Kiswahili",
    question: "Neno 'mtu' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "I-ZI",
      C: "U-I",
      D: "KI-VI",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'mtu' liko katika ngeli ya A-WA. Ngeli hii hujumuisha nomino zinazorejelea viumbe hai, hasa binadamu. Umoja ni 'mtu' na wingi ni 'watu'.",
  },
  {
    id: 204,
    subject: "Social Studies",
    question: "The head of government in the United Kingdom is known as the:",
    options: {
      A: "President",
      B: "Prime Minister",
      C: "King/Queen",
      D: "Chancellor",
    },
    correctAnswer: "B",
    explanation:
      "In the UK's parliamentary system, the Prime Minister is the head of government. The King or Queen is the head of state, a largely ceremonial role.",
  },
  {
    id: 205,
    subject: "Pre-Technical Studies",
    question:
      "A temporary joint that can be easily assembled and disassembled without damaging the components is a:",
    options: {
      A: "Welded joint",
      B: "Soldered joint",
      C: "Nut and bolt joint",
      D: "Glued joint",
    },
    correctAnswer: "C",
    explanation:
      "A nut and bolt form a fastener that is designed to be temporary. It allows for parts to be securely joined but also easily taken apart for maintenance, repair, or replacement, unlike permanent joints like welds.",
  },
  {
    id: 206,
    subject: "Agriculture",
    question:
      "A fertile substance such as manure or a chemical mixture that is added to soil to increase its productivity is a:",
    options: {
      A: "Pesticide",
      B: "Herbicide",
      C: "Fertilizer",
      D: "Fungicide",
    },
    correctAnswer: "C",
    explanation:
      "Fertilizers are natural or artificial substances containing the chemical elements that improve growth and productiveness of plants. They provide essential nutrients that may be lacking in the soil.",
  },
  {
    id: 207,
    subject: "Home Science",
    question: "What is the immediate first aid treatment for a minor burn?",
    options: {
      A: "Apply butter or oil.",
      B: "Cover it with a thick blanket.",
      C: "Run cool (not cold) water over the area for several minutes.",
      D: "Pop any blisters that form.",
    },
    correctAnswer: "C",
    explanation:
      "For a minor burn, the first step is to cool the burn to stop the burning process and relieve pain. This should be done by holding the affected area under cool running water for about 10-20 minutes. Applying butter or oil can trap heat and worsen the burn.",
  },
  {
    id: 208,
    subject: "Mathematics",
    question: "What does the 'C' in the Roman numeral 'C' stand for?",
    options: {
      A: "10",
      B: "50",
      C: "100",
      D: "500",
    },
    correctAnswer: "C",
    explanation:
      "In Roman numerals, 'C' represents the number 100. It comes from the Latin word 'centum', meaning hundred.",
  },
  {
    id: 209,
    subject: "Sports",
    question: "In which sport might you hear the term 'love-thirty'?",
    options: {
      A: "Badminton",
      B: "Table Tennis",
      C: "Squash",
      D: "Tennis",
    },
    correctAnswer: "D",
    explanation:
      "'Love-thirty' is a score in tennis, where 'love' means a score of zero. This score indicates that the server has zero points and the receiver has two points (30).",
  },
  {
    id: 210,
    subject: "Creative Art",
    question: "What is a 'kiln' used for in pottery?",
    options: {
      A: "Shaping the clay on a wheel.",
      B: "Mixing colors for glazes.",
      C: "Firing the clay to harden it.",
      D: "Storing finished ceramic pieces.",
    },
    correctAnswer: "C",
    explanation:
      "A kiln is a thermally insulated chamber, a type of oven, that produces temperatures sufficient to complete some process, such as hardening, drying, or chemical changes. In pottery, it is used to fire clay objects, turning them into hard, durable ceramics.",
  },
  {
    id: 211,
    subject: "English",
    question: "A long speech by one actor in a play or movie is called a:",
    options: {
      A: "Dialogue",
      B: "Monologue",
      C: "Chorus",
      D: "Sonnet",
    },
    correctAnswer: "B",
    explanation:
      "A monologue is a speech delivered by one person, or a long one-sided conversation that makes you want to interrupt. It is a common feature in drama and literature.",
  },
  {
    id: 212,
    subject: "Kiswahili",
    question: "Wingi wa neno 'ua' (flower) ni nini?",
    options: {
      A: "Maua",
      B: "Nyua",
      C: "Ua",
      D: "Waua",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'ua' (flower) liko katika ngeli ya LI-YA. Umoja ni 'ua' na wingi wake ni 'maua'.",
  },
  {
    id: 213,
    subject: "Social Studies",
    question:
      "What civilization is credited with inventing the first form of writing, cuneiform?",
    options: {
      A: "Ancient Egyptians",
      B: "Ancient Greeks",
      C: "Ancient Romans",
      D: "Sumerians",
    },
    correctAnswer: "D",
    explanation:
      "The Sumerians, who lived in Mesopotamia (modern-day Iraq), are credited with inventing cuneiform, one of the earliest systems of writing. It was distinguished by its wedge-shaped marks on clay tablets.",
  },
  {
    id: 214,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a primary safety rule when working with machinery?",
    options: {
      A: "Wear loose clothing.",
      B: "Remove all safety guards.",
      C: "Know how to stop the machine quickly in an emergency.",
      D: "Work as quickly as possible.",
    },
    correctAnswer: "C",
    explanation:
      "A critical safety rule is to be familiar with the machine's controls, especially the emergency stop button or procedure. This allows you to shut down the equipment quickly if something goes wrong, preventing serious injury. Loose clothing can get caught, and safety guards must always be in place.",
  },
  {
    id: 215,
    subject: "Agriculture",
    question:
      "The removal of the male parts of a flower to prevent self-pollination is called:",
    options: {
      A: "Pruning",
      B: "Grafting",
      C: "Emasculation",
      D: "Weeding",
    },
    correctAnswer: "C",
    explanation:
      "Emasculation is a technique used in plant breeding. It involves removing the anthers (male organs) from a bisexual flower before they release pollen, to prevent self-pollination and allow for controlled cross-pollination.",
  },
  {
    id: 216,
    subject: "Home Science",
    question: "Which of these fabrics is derived from a plant source?",
    options: {
      A: "Wool",
      B: "Silk",
      C: "Cotton",
      D: "Nylon",
    },
    correctAnswer: "C",
    explanation:
      "Cotton is a natural fiber that grows on the cotton plant. Wool comes from sheep, silk from silkworms, and nylon is a synthetic (man-made) fiber.",
  },
  {
    id: 217,
    subject: "Mathematics",
    question: "What is the formula for the area of a circle?",
    options: {
      A: "$A = 2\\pi r$",
      B: "$A = \\pi d$",
      C: "$A = \\pi r^2$",
      D: "$A = 2\\pi d$",
    },
    correctAnswer: "C",
    explanation:
      "The area of a circle is calculated using the formula $A = \\pi r^2$, where 'A' is the area, 'π' (pi) is approximately 3.14, and 'r' is the radius of the circle.",
  },
  {
    id: 218,
    subject: "Sports",
    question: "In which sport would you use a 'putter'?",
    options: {
      A: "Cricket",
      B: "Baseball",
      C: "Hockey",
      D: "Golf",
    },
    correctAnswer: "D",
    explanation:
      "A putter is a type of club used in golf to make relatively short and low-speed strokes with the intention of rolling the ball into the hole on the green.",
  },
  {
    id: 219,
    subject: "Creative Art",
    question:
      "A type of sculpture in which the design is raised from a flat background is called:",
    options: {
      A: "A statue",
      B: "A mobile",
      C: "A relief",
      D: "An installation",
    },
    correctAnswer: "C",
    explanation:
      "A relief is a sculptural technique where the sculpted elements remain attached to a solid background of the same material. The term 'relief' is from the Latin verb 'relevo', to raise.",
  },
  {
    id: 220,
    subject: "English",
    question:
      "The use of 'I', 'we', 'me', and 'us' indicates which point of view in writing?",
    options: {
      A: "First person",
      B: "Second person",
      C: "Third person limited",
      D: "Third person omniscient",
    },
    correctAnswer: "A",
    explanation:
      "First-person point of view is where the story is narrated by one character at a time. This character may be speaking about him or herself or sharing events that he or she is experiencing, using pronouns like 'I' and 'we'.",
  },
  {
    id: 221,
    subject: "Kiswahili",
    question: "Neno 'polepole' ni aina gani ya neno?",
    options: {
      A: "Nomino",
      B: "Kitenzi",
      C: "Kivumishi",
      D: "Kielezi",
    },
    correctAnswer: "D",
    explanation:
      "Neno 'polepole' ni kielezi (adverb). Kinaelezea jinsi kitendo kinavyofanyika. Mfano: 'Tembea polepole'.",
  },
  {
    id: 222,
    subject: "Social Studies",
    question: "What is the highest court in the Kenyan judicial system?",
    options: {
      A: "The High Court",
      B: "The Court of Appeal",
      C: "The Supreme Court",
      D: "The Magistrate's Court",
    },
    correctAnswer: "C",
    explanation:
      "The Supreme Court of Kenya is the highest court in the land, established under Article 163 of the Constitution of Kenya. Its decisions are final and binding on all other courts.",
  },
  {
    id: 223,
    subject: "Pre-Technical Studies",
    question: "Which of these is a characteristic of a series circuit?",
    options: {
      A: "The voltage is the same across all components.",
      B: "There are multiple paths for the current to flow.",
      C: "The current is the same through all components.",
      D: "If one component fails, the others continue to work.",
    },
    correctAnswer: "C",
    explanation:
      "In a series circuit, components are connected end-to-end, so there is only one path for the current to flow. This means the electric current is the same at every point in the circuit. If one component breaks, the entire circuit is interrupted.",
  },
  {
    id: 224,
    subject: "Agriculture",
    question: "An adult female chicken is called a:",
    options: {
      A: "Rooster",
      B: "Hen",
      C: "Chick",
      D: "Pullet",
    },
    correctAnswer: "B",
    explanation:
      "A hen is an adult female chicken. A rooster is an adult male, a chick is a very young chicken, and a pullet is a young female chicken that has not yet started laying eggs.",
  },
  {
    id: 225,
    subject: "Home Science",
    question: "What does a 'thimble' protect when hand sewing?",
    options: {
      A: "The fabric from being torn.",
      B: "The needle from breaking.",
      C: "The sewer's finger from being pricked by the needle.",
      D: "The thread from tangling.",
    },
    correctAnswer: "C",
    explanation:
      "A thimble is a small pitted cup worn on the finger that protects it from being pricked or poked by a needle while sewing. It is typically worn on the middle finger of the hand used to push the needle through the fabric.",
  },
  {
    id: 226,
    subject: "Mathematics",
    question: "A line that touches a circle at exactly one point is called a:",
    options: {
      A: "Radius",
      B: "Chord",
      C: "Secant",
      D: "Tangent",
    },
    correctAnswer: "D",
    explanation:
      "In geometry, a tangent line (or simply tangent) to a plane curve at a given point is the straight line that 'just touches' the curve at that point.",
  },
  {
    id: 227,
    subject: "Sports",
    question: "The FIFA World Cup is a global tournament for which sport?",
    options: {
      A: "Rugby",
      B: "Cricket",
      C: "Football (Soccer)",
      D: "Basketball",
    },
    correctAnswer: "C",
    explanation:
      "The FIFA World Cup is an international association football competition contested by the senior men's national teams of the members of the Fédération Internationale de Football Association (FIFA), the sport's global governing body.",
  },
  {
    id: 228,
    subject: "Creative Art",
    question: "The part of a painting that seems closest to the viewer is the:",
    options: {
      A: "Background",
      B: "Horizon line",
      C: "Mid-ground",
      D: "Foreground",
    },
    correctAnswer: "D",
    explanation:
      "In a visual artwork, the foreground is the part of the view that is nearest to the observer. Objects in the foreground appear larger and more detailed than those in the background.",
  },
  {
    id: 229,
    subject: "English",
    question:
      "Giving human qualities to an inanimate object is a figure of speech known as:",
    options: {
      A: "Hyperbole",
      B: "Personification",
      C: "Simile",
      D: "Alliteration",
    },
    correctAnswer: "B",
    explanation:
      "Personification is a literary device where human qualities or abilities are attributed to inanimate objects or abstract ideas. For example, 'The wind whispered through the trees.'",
  },
  {
    id: 230,
    subject: "Kiswahili",
    question: "Mtu anayefanya kazi ya uvuvi anaitwa nani?",
    options: {
      A: "Mkulima",
      B: "Mvuvi",
      C: "Mwindaji",
      D: "Mfugaji",
    },
    correctAnswer: "B",
    explanation:
      "Mvuvi ni mtu ambaye kazi yake ni kuvua samaki au viumbe wengine wa majini. Mkulima hulima, mwindaji huwinda wanyama, na mfugaji hufuga wanyama.",
  },
  {
    id: 231,
    subject: "Social Studies",
    question: "The River Tana drains into which large body of water?",
    options: {
      A: "Lake Victoria",
      B: "The Indian Ocean",
      C: "Lake Turkana",
      D: "The Mediterranean Sea",
    },
    correctAnswer: "B",
    explanation:
      "The Tana River is the longest river in Kenya, and it flows from the Aberdare Mountains to the Indian Ocean at Ungwana Bay.",
  },
  {
    id: 232,
    subject: "Pre-Technical Studies",
    question:
      "Which of these processes involves cutting a thread on the outside of a cylinder, like for a bolt?",
    options: {
      A: "Drilling",
      B: "Tapping",
      C: "Threading",
      D: "Reaming",
    },
    correctAnswer: "C",
    explanation:
      "Threading is the process of creating a screw thread. More specifically, it refers to cutting external threads on a workpiece (like a bolt), often using a tool called a die. Tapping refers to cutting internal threads (like in a nut).",
  },
  {
    id: 233,
    subject: "Agriculture",
    question: "What is the main function of roots in a plant?",
    options: {
      A: "To produce food through photosynthesis.",
      B: "To produce flowers for reproduction.",
      C: "To anchor the plant and absorb water and nutrients.",
      D: "To store sunlight.",
    },
    correctAnswer: "C",
    explanation:
      "The primary functions of roots are to anchor the plant firmly in the soil and to absorb water and essential mineral nutrients from the soil for the plant's growth.",
  },
  {
    id: 234,
    subject: "Home Science",
    question:
      "The art of arranging food in a visually appealing way on a plate is called:",
    options: {
      A: "Garnishing",
      B: "Plating",
      C: "Seasoning",
      D: "Marinating",
    },
    correctAnswer: "B",
    explanation:
      "Plating, or food presentation, is the process of arranging and decorating food to enhance its visual appeal. Garnishing is adding a small decorative item, which is a part of plating.",
  },
  {
    id: 235,
    subject: "Mathematics",
    question: "How many sides does a hexagon have?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    correctAnswer: "B",
    explanation:
      "In geometry, a hexagon is a six-sided polygon. The name comes from the Greek 'hex', meaning six.",
  },
  {
    id: 236,
    subject: "Sports",
    question: "Which of these is a field event in track and field?",
    options: {
      A: "100m sprint",
      B: "Marathon",
      C: "Long Jump",
      D: "4x100m Relay",
    },
    correctAnswer: "C",
    explanation:
      "Track and field events are divided into 'track' events (running and relays) and 'field' events (jumping and throwing). The Long Jump is a field event where athletes jump for distance.",
  },
  {
    id: 237,
    subject: "Creative Art",
    question: "Which color is often associated with warmth, fire, and passion?",
    options: {
      A: "Blue",
      B: "Green",
      C: "Red",
      D: "Purple",
    },
    correctAnswer: "C",
    explanation:
      "Red is a warm color that is often associated with strong emotions such as energy, war, danger, strength, power, determination as well as passion, desire, and love.",
  },
  {
    id: 238,
    subject: "English",
    question: "The opposite of 'ancient' is:",
    options: {
      A: "Old",
      B: "Historic",
      C: "Modern",
      D: "Past",
    },
    correctAnswer: "C",
    explanation:
      "The word 'ancient' refers to something belonging to the very distant past. Its antonym (opposite) is 'modern', which refers to the present or recent times.",
  },
  {
    id: 239,
    subject: "Kiswahili",
    question: "Neno 'kitabu' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "U-I",
      C: "KI-VI",
      D: "I-ZI",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'kitabu' liko katika ngeli ya KI-VI. Umoja wake huanza na 'ki-' (kitabu) na wingi wake huanza na 'vi-' (vitabu).",
  },
  {
    id: 240,
    subject: "Social Studies",
    question: "Which of these is one of the Great Lakes of North America?",
    options: {
      A: "Lake Victoria",
      B: "Lake Baikal",
      C: "Lake Superior",
      D: "Lake Tanganyika",
    },
    correctAnswer: "C",
    explanation:
      "The Great Lakes are a series of large interconnected freshwater lakes in east-central North America. They consist of Lakes Superior, Michigan, Huron, Erie, and Ontario.",
  },
  {
    id: 241,
    subject: "Pre-Technical Studies",
    question:
      "Which tool is specifically designed for cutting curves and irregular shapes in wood?",
    options: {
      A: "A hand saw",
      B: "A coping saw",
      C: "A hacksaw",
      D: "A circular saw",
    },
    correctAnswer: "B",
    explanation:
      "A coping saw has a very thin, narrow blade held in a C-shaped frame. This design allows it to cut intricate external shapes and interior cut-outs in woodworking or carpentry.",
  },
  {
    id: 242,
    subject: "Agriculture",
    question: "A domesticated pig raised for meat is also known as:",
    options: {
      A: "Swine",
      B: "Bovine",
      C: "Ovine",
      D: "Caprine",
    },
    correctAnswer: "A",
    explanation:
      "Swine is another name for pigs. Bovine refers to cattle, ovine refers to sheep, and caprine refers to goats.",
  },
  {
    id: 243,
    subject: "Home Science",
    question:
      "Which mineral is crucial for the formation of hemoglobin in red blood cells?",
    options: {
      A: "Calcium",
      B: "Potassium",
      C: "Iron",
      D: "Sodium",
    },
    correctAnswer: "C",
    explanation:
      "Iron is an essential mineral that the body needs to produce hemoglobin, a protein in red blood cells that carries oxygen from the lungs to all parts of the body. A deficiency in iron can lead to anemia.",
  },
  {
    id: 244,
    subject: "Mathematics",
    question: "What is the value of 5 cubed ($5^3$)?",
    options: {
      A: "15",
      B: "25",
      C: "125",
      D: "53",
    },
    correctAnswer: "C",
    explanation:
      "Cubing a number means multiplying it by itself three times. So, $5^3 = 5 \\times 5 \\times 5 = 25 \\times 5 = 125$.",
  },
  {
    id: 245,
    subject: "Sports",
    question: "The term 'bunker' is used in which sport?",
    options: {
      A: "Tennis",
      B: "Golf",
      C: "Volleyball",
      D: "Swimming",
    },
    correctAnswer: "B",
    explanation:
      "In golf, a bunker is a hazard consisting of a prepared area of ground, often a hollow, from which turf or soil has been removed and replaced with sand or similar.",
  },
  {
    id: 246,
    subject: "Creative Art",
    question:
      "The process of making cloth by interlacing two sets of threads at right angles to each other is called:",
    options: {
      A: "Knitting",
      B: "Weaving",
      C: "Crocheting",
      D: "Felting",
    },
    correctAnswer: "B",
    explanation:
      "Weaving is a method of textile production in which two distinct sets of yarns or threads are interlaced at right angles to form a fabric or cloth. The longitudinal threads are called the warp and the lateral threads are the weft.",
  },
  {
    id: 247,
    subject: "English",
    question: "A group of fish is called a:",
    options: {
      A: "Herd",
      B: "Flock",
      C: "School",
      D: "Pack",
    },
    correctAnswer: "C",
    explanation:
      "The collective noun for a group of fish swimming together in a coordinated way is a 'school' or a 'shoal'.",
  },
  {
    id: 248,
    subject: "Kiswahili",
    question: "Kamilisha methali: 'Asiyesikia la mkuu...'",
    options: {
      A: "...si mwana mwema.'",
      B: "...hupata hasara.'",
      C: "...huvunjika guu.'",
      D: "...ni mpumbavu.'",
    },
    correctAnswer: "C",
    explanation:
      "Methali hii inamaanisha kwamba mtu asiyefuata ushauri wa wazee au wenye hekima hukumbana na matatizo au majanga. 'Kuvunjika guu' ni ishara ya kupata shida kubwa.",
  },
  {
    id: 249,
    subject: "Social Studies",
    question:
      "The Apartheid system was a policy of racial segregation practiced in which country?",
    options: {
      A: "Nigeria",
      B: "South Africa",
      C: "Brazil",
      D: "India",
    },
    correctAnswer: "B",
    explanation:
      "Apartheid was a system of institutionalised racial segregation that existed in South Africa and South West Africa (now Namibia) from 1948 until the early 1990s.",
  },
  {
    id: 250,
    subject: "Pre-Technical Studies",
    question: "What is the function of the chuck on a drilling machine?",
    options: {
      A: "To provide power to the machine.",
      B: "To hold the workpiece securely.",
      C: "To hold and rotate the drill bit.",
      D: "To adjust the speed of the drill.",
    },
    correctAnswer: "C",
    explanation:
      "A chuck is a specialized type of clamp used to hold an object with radial symmetry, especially a cylinder. On a drill, it securely holds the drill bit and is rotated by the motor to perform the drilling action.",
  },
  {
    id: 251,
    subject: "Agriculture",
    question: "A young cow or bull is called a:",
    options: {
      A: "Calf",
      B: "Foal",
      C: "Kid",
      D: "Lamb",
    },
    correctAnswer: "A",
    explanation:
      "A calf is the name for the young of domestic cattle. A foal is a young horse, a kid is a young goat, and a lamb is a young sheep.",
  },
  {
    id: 252,
    subject: "Home Science",
    question:
      "The process of making food safe for future consumption by preventing spoilage is called:",
    options: {
      A: "Cooking",
      B: "Seasoning",
      C: "Preservation",
      D: "Digestion",
    },
    correctAnswer: "C",
    explanation:
      "Food preservation includes processes that make food more resistant to spoilage. Methods include canning, freezing, drying (dehydration), salting, and pickling.",
  },
  {
    id: 253,
    subject: "Mathematics",
    question: "In the fraction 3/5, what is the number 5 called?",
    options: {
      A: "Numerator",
      B: "Denominator",
      C: "Quotient",
      D: "Dividend",
    },
    correctAnswer: "B",
    explanation:
      "In a fraction, the bottom number is called the denominator. It shows how many equal parts the item is divided into. The top number is the numerator, which shows how many of those parts you have.",
  },
  {
    id: 254,
    subject: "Sports",
    question: "Which of these is a position in American Football?",
    options: {
      A: "Goalkeeper",
      B: "Pitcher",
      C: "Quarterback",
      D: "Point Guard",
    },
    correctAnswer: "C",
    explanation:
      "The quarterback is a key offensive position in American and Canadian football. Goalkeeper is from soccer, Pitcher is from baseball, and Point Guard is from basketball.",
  },
  {
    id: 255,
    subject: "Creative Art",
    question:
      "A type of fine, soft, porous clay used for making pottery and bricks is:",
    options: {
      A: "Sand",
      B: "Gravel",
      C: "Terracotta",
      D: "Cement",
    },
    correctAnswer: "C",
    explanation:
      "Terracotta is a type of earthenware, which is a clay-based unglazed or glazed ceramic where the fired body is porous. The term is also used to refer to the natural brownish-orange color of most terracotta.",
  },
  {
    id: 256,
    subject: "English",
    question: "The abbreviation 'e.g.' stands for:",
    options: {
      A: "And so on",
      B: "For example",
      C: "In other words",
      D: "That is",
    },
    correctAnswer: "B",
    explanation:
      "The abbreviation 'e.g.' comes from the Latin phrase 'exempli gratia', which means 'for the sake of example' or simply 'for example'.",
  },
  {
    id: 257,
    subject: "Kiswahili",
    question: "Neno 'soko' liko katika ngeli gani?",
    options: {
      A: "LI-YA",
      B: "I-ZI",
      C: "A-WA",
      D: "U-I",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'soko' liko katika ngeli ya LI-YA. Umoja ni soko (au soko moja) na wingi ni masoko (au masoko mengi).",
  },
  {
    id: 258,
    subject: "Social Studies",
    question:
      "The process by which plants use sunlight, water, and carbon dioxide to create their own food is called:",
    options: {
      A: "Respiration",
      B: "Transpiration",
      C: "Photosynthesis",
      D: "Germination",
    },
    correctAnswer: "C",
    explanation:
      "Photosynthesis is the process used by plants, algae, and some bacteria to convert light energy into chemical energy, through a process that converts carbon dioxide and water into glucose (sugar) and oxygen.",
  },
  {
    id: 259,
    subject: "Pre-Technical Studies",
    question: "Which of these is NOT a type of metal?",
    options: {
      A: "Iron",
      B: "Copper",
      C: "Wood",
      D: "Aluminum",
    },
    correctAnswer: "C",
    explanation:
      "Iron, copper, and aluminum are all examples of metals, which are typically shiny, malleable, and good conductors of heat and electricity. Wood is an organic material derived from trees.",
  },
  {
    id: 260,
    subject: "Agriculture",
    question:
      "A place where young plants are raised for planting elsewhere is called a:",
    options: {
      A: "Field",
      B: "Nursery",
      C: "Orchard",
      D: "Garden",
    },
    correctAnswer: "B",
    explanation:
      "A plant nursery is a place where plants are propagated and grown to a desired age. They include retail nurseries which sell to the general public, wholesale nurseries which sell only to businesses, and private nurseries which supply the needs of institutions or private estates.",
  },
  {
    id: 261,
    subject: "Home Science",
    question: "Which of these is a dry heat cooking method?",
    options: {
      A: "Boiling",
      B: "Steaming",
      C: "Roasting",
      D: "Poaching",
    },
    correctAnswer: "C",
    explanation:
      "Dry-heat cooking methods involve the circulation of hot air or direct contact to a fat to transfer heat. Roasting and baking are examples. Boiling, steaming, and poaching are moist-heat cooking methods that use water or steam.",
  },
  {
    id: 262,
    subject: "Mathematics",
    question:
      "An angle that is greater than 90 degrees but less than 180 degrees is called:",
    options: {
      A: "An acute angle",
      B: "An obtuse angle",
      C: "A right angle",
      D: "A reflex angle",
    },
    correctAnswer: "B",
    explanation:
      "An obtuse angle is one that measures between 90 and 180 degrees. An acute angle is less than 90 degrees, a right angle is exactly 90 degrees, and a reflex angle is greater than 180 degrees.",
  },
  {
    id: 263,
    subject: "Sports",
    question: "The America's Cup is a famous trophy in which sport?",
    options: {
      A: "Horse Racing",
      B: "Sailing",
      C: "Motor Racing",
      D: "Tennis",
    },
    correctAnswer: "B",
    explanation:
      "The America's Cup is the oldest international sporting trophy. It is a competition between sailing yachts representing different yacht clubs. The trophy is awarded to the winner of the match races between two sailing yachts.",
  },
  {
    id: 264,
    subject: "Creative Art",
    question: "What does a 'color wheel' help artists to do?",
    options: {
      A: "Mix paints without getting messy.",
      B: "Understand the relationships between colors.",
      C: "Paint perfect circles.",
      D: "Choose the most popular colors.",
    },
    correctAnswer: "B",
    explanation:
      "A color wheel is an abstract illustrative organization of color hues around a circle, which shows the relationships between primary colors, secondary colors, tertiary colors etc. It helps artists to identify harmonious color combinations.",
  },
  {
    id: 265,
    subject: "English",
    question:
      "The repetition of the same sound at the beginning of words in a phrase or sentence is called:",
    options: {
      A: "Rhyme",
      B: "Alliteration",
      C: "Onomatopoeia",
      D: "Metaphor",
    },
    correctAnswer: "B",
    explanation:
      "Alliteration is a literary device where two or more words in a phrase or line of poetry share the same beginning consonant sound. For example, 'She sells seashells by the seashore'.",
  },
  {
    id: 266,
    subject: "Kiswahili",
    question: "Kisawe cha neno 'haraka' ni kipi?",
    options: {
      A: "Polepole",
      B: "Upesi",
      C: "Sasa hivi",
      D: "Baadaye",
    },
    correctAnswer: "B",
    explanation:
      "Kisawe (synonym) cha neno 'haraka' ni 'upesi'. Maneno yote mawili yana maana ya kufanya jambo kwa kasi au bila kuchelewa.",
  },
  {
    id: 267,
    subject: "Social Studies",
    question:
      "The movement for independence in India was led by which prominent figure?",
    options: {
      A: "Jawaharlal Nehru",
      B: "Mahatma Gandhi",
      C: "Subhas Chandra Bose",
      D: "Sardar Patel",
    },
    correctAnswer: "B",
    explanation:
      "Mahatma Gandhi was the leader of the Indian independence movement against British rule. Employing nonviolent civil disobedience, Gandhi led India to independence and inspired movements for civil rights and freedom across the world.",
  },
  {
    id: 268,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a safety device that automatically shuts off an electrical circuit during an overload?",
    options: {
      A: "Switch",
      B: "Resistor",
      C: "Circuit breaker",
      D: "Capacitor",
    },
    correctAnswer: "C",
    explanation:
      "A circuit breaker is an automatically operated electrical switch designed to protect an electrical circuit from damage caused by excess current from an overload or short circuit. Its basic function is to interrupt current flow after a fault is detected.",
  },
  {
    id: 269,
    subject: "Agriculture",
    question:
      "The process of joining a part of one plant onto another plant so they grow as one is called:",
    options: {
      A: "Layering",
      B: "Cutting",
      C: "Grafting",
      D: "Seeding",
    },
    correctAnswer: "C",
    explanation:
      "Grafting is a horticultural technique whereby tissues of plants are joined so as to continue their growth together. The upper part of the combined plant is called the scion and the lower part is called the rootstock.",
  },
  {
    id: 270,
    subject: "Home Science",
    question:
      "What is the term for the number of food portions a recipe will produce?",
    options: {
      A: "Yield",
      B: "Ingredients",
      C: "Directions",
      D: "Preparation time",
    },
    correctAnswer: "A",
    explanation:
      "In a recipe, the yield refers to the quantity or number of servings that the recipe produces. It is an important factor for planning meals.",
  },
  {
    id: 271,
    subject: "Mathematics",
    question: "An eight-sided 3D shape made of six square faces is a:",
    options: {
      A: "Pyramid",
      B: "Sphere",
      C: "Cube",
      D: "Cylinder",
    },
    correctAnswer: "C",
    explanation:
      "A cube is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex.",
  },
  {
    id: 272,
    subject: "Sports",
    question: "How long is one lap of a standard outdoor athletics track?",
    options: {
      A: "100 metres",
      B: "200 metres",
      C: "400 metres",
      D: "800 metres",
    },
    correctAnswer: "C",
    explanation:
      "A standard outdoor running track is 400 metres in length for a single lap in the innermost lane. This is the standard for most international competitions, including the Olympics.",
  },
  {
    id: 273,
    subject: "Creative Art",
    question:
      "The three-dimensional quality of an object, which has height, width, and depth, is which element of art?",
    options: {
      A: "Shape",
      B: "Line",
      C: "Form",
      D: "Space",
    },
    correctAnswer: "C",
    explanation:
      "While shape is two-dimensional (height and width), form is three-dimensional and has height, width, and depth. Cubes, spheres, and cylinders are examples of forms.",
  },
  {
    id: 274,
    subject: "English",
    question: "What does the abbreviation 'etc.' mean?",
    options: {
      A: "Extra",
      B: "Essentially",
      C: "And other things",
      D: "At that time",
    },
    correctAnswer: "C",
    explanation:
      "'Etc.' is an abbreviation for the Latin phrase 'et cetera', which means 'and the rest' or 'and other things'. It is used at the end of a list to indicate that further, similar items are included.",
  },
  {
    id: 275,
    subject: "Kiswahili",
    question: "Mtu asiye na uwezo wa kuona huitwa nani?",
    options: {
      A: "Bubu",
      B: "Kiziwi",
      C: "Kipofu",
      D: "Kilema",
    },
    correctAnswer: "C",
    explanation:
      "Mtu asiyeweza kuona anaitwa kipofu. Bubu ni mtu asiyeweza kuongea, kiziwi ni asiyesikia, na kilema ni mtu mwenye upungufu wa kiungo.",
  },
  {
    id: 276,
    subject: "Social Studies",
    question: "The large desert that covers most of Northern Africa is the:",
    options: {
      A: "Kalahari Desert",
      B: "Sahara Desert",
      C: "Namib Desert",
      D: "Gobi Desert",
    },
    correctAnswer: "B",
    explanation:
      "The Sahara is a desert on the African continent. With an area of 9,200,000 square kilometres, it is the largest hot desert in the world and the third largest desert overall, smaller only than the deserts of Antarctica and the Arctic.",
  },
  {
    id: 277,
    subject: "Pre-Technical Studies",
    question:
      "A material that allows electricity to pass through it easily is called a/an:",
    options: {
      A: "Insulator",
      B: "Conductor",
      C: "Resistor",
      D: "Semiconductor",
    },
    correctAnswer: "B",
    explanation:
      "An electrical conductor is a substance in which electrical charge carriers, usually electrons, move easily from atom to atom with the application of voltage. Metals like copper and aluminum are excellent conductors.",
  },
  {
    id: 278,
    subject: "Agriculture",
    question: "Which of these is a method of controlling soil erosion?",
    options: {
      A: "Deforestation",
      B: "Overgrazing",
      C: "Terracing",
      D: "Ploughing down a slope",
    },
    correctAnswer: "C",
    explanation:
      "Terracing is the practice of creating nearly level steps or benches on a hillside. This method slows down the runoff of water, reducing soil erosion and allowing more water to soak into the ground for crops.",
  },
  {
    id: 279,
    subject: "Home Science",
    question: "Which of these is NOT a basic food group?",
    options: {
      A: "Vegetables",
      B: "Fruits",
      C: "Grains",
      D: "Sugars",
    },
    correctAnswer: "D",
    explanation:
      "The basic food groups typically include fruits, vegetables, grains, protein foods, and dairy. Sugars, oils, and fats are often considered separately and recommended for consumption in limited quantities.",
  },
  {
    id: 280,
    subject: "Mathematics",
    question: "Which of these numbers is a factor of 24?",
    options: {
      A: "5",
      B: "7",
      C: "8",
      D: "10",
    },
    correctAnswer: "C",
    explanation:
      "A factor is a number that divides into another number exactly, without leaving a remainder. 24 can be divided by 8 exactly 3 times (24 ÷ 8 = 3), so 8 is a factor of 24.",
  },
  {
    id: 281,
    subject: "Sports",
    question: "In boxing, what is the area where the fight takes place called?",
    options: {
      A: "A court",
      B: "A pitch",
      C: "A ring",
      D: "A course",
    },
    correctAnswer: "C",
    explanation:
      "A boxing ring, often referred to simply as the ring, is the space in which a boxing match occurs. It is a raised square platform surrounded by ropes.",
  },
  {
    id: 282,
    subject: "Creative Art",
    question: "The use of dots to create an image in art is known as:",
    options: {
      A: "Hatching",
      B: "Shading",
      C: "Stippling",
      D: "Blending",
    },
    correctAnswer: "C",
    explanation:
      "Stippling is the creation of a pattern simulating varying degrees of solidity or shading by using small dots. The density of the dots determines the lightness or darkness of the area.",
  },
  {
    id: 283,
    subject: "English",
    question: "A word that describes a noun (e.g., 'red', 'big') is a/an:",
    options: {
      A: "Verb",
      B: "Adverb",
      C: "Adjective",
      D: "Pronoun",
    },
    correctAnswer: "C",
    explanation:
      "An adjective is a word that modifies a noun or pronoun. It provides more information about the noun, such as its size, shape, color, or quality.",
  },
  {
    id: 284,
    subject: "Kiswahili",
    question: "Udogo wa neno 'mji' ni nini?",
    options: {
      A: "Jiji",
      B: "Kijiji",
      C: "Miji",
      D: "Uji",
    },
    correctAnswer: "B",
    explanation:
      "Hali ya udogo (diminutive) ya neno 'mji' ni 'kijiji'. 'Jiji' ni ukubwa na 'miji' ni wingi.",
  },
  {
    id: 285,
    subject: "Social Studies",
    question: "What is the name of the currency used in Japan?",
    options: {
      A: "Yuan",
      B: "Won",
      C: "Yen",
      D: "Baht",
    },
    correctAnswer: "C",
    explanation:
      "The Japanese Yen (JPY) is the official currency of Japan. The Yuan is the currency of China, the Won is for South Korea, and the Baht is for Thailand.",
  },
  {
    id: 286,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a thermal insulator, meaning it reduces the flow of heat?",
    options: {
      A: "Copper",
      B: "Steel",
      C: "Styrofoam",
      D: "Aluminum",
    },
    correctAnswer: "C",
    explanation:
      "A thermal insulator is a material that is a poor conductor of heat. Styrofoam contains many small pockets of air, which makes it an excellent insulator, commonly used in coolers and for building insulation. Metals are good thermal conductors.",
  },
  {
    id: 287,
    subject: "Agriculture",
    question:
      "The period of time when land is left unplanted to restore its fertility is known as:",
    options: {
      A: "Planting season",
      B: "Harvest period",
      C: "Fallow period",
      D: "Growing season",
    },
    correctAnswer: "C",
    explanation:
      "Fallowing is a farming technique in which arable land is left without sowing for one or more vegetative cycles. The goal of fallowing is to allow the land to recover and store organic matter and moisture.",
  },
  {
    id: 288,
    subject: "Home Science",
    question:
      "A person who designs buildings and in many cases also supervises their construction is called an:",
    options: {
      A: "Engineer",
      B: "Architect",
      C: "Contractor",
      D: "Plumber",
    },
    correctAnswer: "B",
    explanation:
      "An architect is a person who plans, designs and oversees the construction of buildings. They are trained in the art and science of building design.",
  },
  {
    id: 289,
    subject: "Mathematics",
    question: "What is 25% expressed as a decimal?",
    options: {
      A: "2.5",
      B: "0.25",
      C: "0.025",
      D: "25.0",
    },
    correctAnswer: "B",
    explanation:
      "To convert a percentage to a decimal, you divide the number by 100. So, 25% is equal to 25 ÷ 100 = 0.25.",
  },
  {
    id: 290,
    subject: "Sports",
    question: "Which country won the first ever FIFA World Cup in 1930?",
    options: {
      A: "Brazil",
      B: "Argentina",
      C: "Italy",
      D: "Uruguay",
    },
    correctAnswer: "D",
    explanation:
      "The first FIFA World Cup was held in 1930 and was hosted by Uruguay. The host nation, Uruguay, won the tournament by defeating Argentina 4-2 in the final.",
  },
  {
    id: 291,
    subject: "Creative Art",
    question:
      "A drawing or painting of a natural scene, such as mountains, valleys, or forests, is called a:",
    options: {
      A: "Portrait",
      B: "Still life",
      C: "Landscape",
      D: "Self-portrait",
    },
    correctAnswer: "C",
    explanation:
      "Landscape art is the depiction of natural scenery such as mountains, valleys, trees, rivers, and forests, especially where the main subject is a wide view with its elements arranged into a coherent composition.",
  },
  {
    id: 292,
    subject: "English",
    question:
      "Which of these is the correct comparative form of the adjective 'good'?",
    options: {
      A: "Gooder",
      B: "More good",
      C: "Best",
      D: "Better",
    },
    correctAnswer: "D",
    explanation:
      "'Good' is an irregular adjective. Its comparative form is 'better' (used to compare two things) and its superlative form is 'best' (used to compare three or more things).",
  },
  {
    id: 293,
    subject: "Kiswahili",
    question: "Methali 'Mvumilivu hula mbivu' ina maana gani?",
    options: {
      A: "Mtu anayekula matunda mabivu huvumilia.",
      B: "Mtu mwenye subira hupata matokeo mazuri mwishowe.",
      C: "Watu wavivu hupata chakula kilichoiva.",
      D: "Kula polepole ni muhimu.",
    },
    correctAnswer: "B",
    explanation:
      "Methali hii inafundisha umuhimu wa subira. Inamaanisha kwamba mtu anayekuwa na uvumilivu katika jambo analolifanya hatimaye hufanikiwa na kupata matunda mazuri ya jasho lake.",
  },
  {
    id: 294,
    subject: "Social Studies",
    question:
      "The legislative body of Kenya, responsible for making laws, is called:",
    options: {
      A: "The Senate",
      B: "The National Assembly",
      C: "Parliament",
      D: "The Judiciary",
    },
    correctAnswer: "C",
    explanation:
      "The Parliament of Kenya is the country's bicameral legislature. It consists of two houses: the Senate (upper house) and the National Assembly (lower house). Together, they are responsible for legislation.",
  },
  {
    id: 295,
    subject: "Pre-Technical Studies",
    question:
      "Which type of saw is powered by electricity and used for making straight cuts in large pieces of wood?",
    options: {
      A: "Coping saw",
      B: "Hacksaw",
      C: "Circular saw",
      D: "Hand saw",
    },
    correctAnswer: "C",
    explanation:
      "A circular saw is a power-saw using a toothed or abrasive disc or blade to cut different materials using a rotary motion spinning around an arbor. It is commonly used for making long, straight cuts in wood, plastic, or metal.",
  },
  {
    id: 296,
    subject: "Agriculture",
    question:
      "The practice of keeping animals and growing crops on the same farm is called:",
    options: {
      A: "Monoculture",
      B: "Pastoralism",
      C: "Mixed farming",
      D: "Arable farming",
    },
    correctAnswer: "C",
    explanation:
      "Mixed farming is a type of agriculture which involves both the growing of crops and the raising of livestock. This type of farming is common in many parts of the world.",
  },
  {
    id: 297,
    subject: "Home Science",
    question:
      "What is the term for a list of dishes available at a restaurant?",
    options: {
      A: "Recipe",
      B: "Budget",
      C: "Menu",
      D: "Inventory",
    },
    correctAnswer: "C",
    explanation:
      "A menu is a list of food and beverage items that are available for purchase at a restaurant or other food establishment.",
  },
  {
    id: 298,
    subject: "Mathematics",
    question: "How many degrees are in a full circle?",
    options: {
      A: "90 degrees",
      B: "180 degrees",
      C: "270 degrees",
      D: "360 degrees",
    },
    correctAnswer: "D",
    explanation:
      "A full rotation, which forms a complete circle, measures 360 degrees. A half circle is 180 degrees, and a quarter circle is 90 degrees.",
  },
  {
    id: 299,
    subject: "Sports",
    question:
      "Which of these is a combat sport where two people wrestle and try to pin each other to the mat?",
    options: {
      A: "Fencing",
      B: "Taekwondo",
      C: "Wrestling",
      D: "Karate",
    },
    correctAnswer: "C",
    explanation:
      "Wrestling is a combat sport involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds. The goal is often to pin the opponent's shoulders to the mat.",
  },
  {
    id: 300,
    subject: "Creative Art",
    question: "Secondary colors are made by mixing:",
    options: {
      A: "A primary color and a secondary color.",
      B: "Two secondary colors.",
      C: "Two primary colors.",
      D: "A primary color with black or white.",
    },
    correctAnswer: "C",
    explanation:
      "Secondary colors are created by mixing two primary colors together. The secondary colors are orange (red + yellow), green (blue + yellow), and purple/violet (red + blue).",
  },
  {
    id: 301,
    subject: "English",
    question: "A group of stars forming a recognizable pattern is called a:",
    options: {
      A: "Galaxy",
      B: "Constellation",
      C: "Solar system",
      D: "Nebula",
    },
    correctAnswer: "B",
    explanation:
      "A constellation is an area on the celestial sphere in which a group of visible stars forms a perceived outline or pattern, typically representing an animal, mythological person or creature, or an inanimate object.",
  },
  {
    id: 302,
    subject: "Kiswahili",
    question: "Neno gani ni kinyume cha 'shinda'?",
    options: {
      A: "Shindwa",
      B: "Pambana",
      C: "Jaribu",
      D: "Cheza",
    },
    correctAnswer: "A",
    explanation:
      "Kinyume (antonym) cha neno 'shinda' (to win/overcome) ni 'shindwa' (to be defeated/to fail).",
  },
  {
    id: 303,
    subject: "Social Studies",
    question:
      "The government of Kenya is divided into three arms: the Executive, the Legislature, and the...",
    options: {
      A: "Presidency",
      B: "Military",
      C: "Judiciary",
      D: "Civil Service",
    },
    correctAnswer: "C",
    explanation:
      "The government of Kenya, like many democratic nations, is based on the principle of separation of powers and consists of three arms: the Executive (implements laws), the Legislature (makes laws), and the Judiciary (interprets laws).",
  },
  {
    id: 304,
    subject: "Pre-Technical Studies",
    question: "Which of these is used to measure electrical voltage?",
    options: {
      A: "An ammeter",
      B: "An ohmmeter",
      C: "A voltmeter",
      D: "A wattmeter",
    },
    correctAnswer: "C",
    explanation:
      "A voltmeter is an instrument used for measuring electrical potential difference, or voltage, between two points in an electric circuit. An ammeter measures current, and an ohmmeter measures resistance.",
  },
  {
    id: 305,
    subject: "Agriculture",
    question:
      "A chemical substance used to kill insects or other organisms harmful to cultivated plants is called:",
    options: {
      A: "A fertilizer",
      B: "A pesticide",
      C: "An antibiotic",
      D: "A hormone",
    },
    correctAnswer: "B",
    explanation:
      "Pesticides are substances that are meant to control pests. This includes herbicides for weeds, insecticides for insects, fungicides for fungi, and various other substances used to control pests.",
  },
  {
    id: 306,
    subject: "Home Science",
    question:
      "Which of these is a leavening agent used in baking to make cakes and bread rise?",
    options: {
      A: "Flour",
      B: "Sugar",
      C: "Baking powder",
      D: "Salt",
    },
    correctAnswer: "C",
    explanation:
      "A leavening agent is a substance that causes expansion of doughs and batters by the release of gases within such mixtures, producing baked products with a porous structure. Baking powder and yeast are common examples.",
  },
  {
    id: 307,
    subject: "Mathematics",
    question: "What is the Greatest Common Divisor (GCD) of 12 and 18?",
    options: {
      A: "2",
      B: "3",
      C: "6",
      D: "9",
    },
    correctAnswer: "C",
    explanation:
      "The Greatest Common Divisor (GCD) is the largest positive integer that divides both numbers without a remainder. Factors of 12 are 1, 2, 3, 4, 6, 12. Factors of 18 are 1, 2, 3, 6, 9, 18. The greatest factor they share is 6.",
  },
  {
    id: 308,
    subject: "Sports",
    question:
      "In which sport is the term 'ace' used for a serve that is not touched by the opponent?",
    options: {
      A: "Football",
      B: "Basketball",
      C: "Tennis",
      D: "Cricket",
    },
    correctAnswer: "C",
    explanation:
      "In tennis and other racket sports like volleyball, an ace is a legal serve that is not touched by the receiver, winning the point for the server.",
  },
  {
    id: 309,
    subject: "Creative Art",
    question: "What is a 'palette' in painting?",
    options: {
      A: "A type of brush.",
      B: "The final painting.",
      C: "A board on which an artist holds and mixes paints.",
      D: "A style of painting.",
    },
    correctAnswer: "C",
    explanation:
      "A palette is a rigid, flat surface on which a painter arranges and mixes paints. It can be made of wood, plastic, ceramic, or other hard, nonporous material. The term can also refer to the range of colors used in a particular artwork.",
  },
  {
    id: 1,
    subject: "Mathematics",
    question: "What is the value of 'x' in the equation 3x + 7 = 22?",
    options: {
      A: "10",
      B: "5",
      C: "8",
      D: "9.67",
    },
    correctAnswer: "B",
    explanation:
      "To solve for x, subtract 7 from both sides to get 3x = 15. Then, divide both sides by 3 to find x = 5.",
  },
  {
    id: 2,
    subject: "Social Studies",
    question:
      "Which ancient civilization is credited with inventing the wheel?",
    options: {
      A: "Ancient Egypt",
      B: "Ancient Greece",
      C: "Mesopotamia",
      D: "Indus Valley",
    },
    correctAnswer: "C",
    explanation:
      "The earliest evidence of the wheeled vehicle is from Mesopotamia (modern-day Iraq) around 3500 BC.",
  },
  {
    id: 3,
    subject: "English",
    question: "Which of the following is a synonym for 'ubiquitous'?",
    options: {
      A: "Rare",
      B: "Everywhere",
      C: "Hidden",
      D: "Difficult",
    },
    correctAnswer: "B",
    explanation:
      "Ubiquitous means present, appearing, or found everywhere, so 'Everywhere' is the correct synonym.",
  },
  {
    id: 4,
    subject: "Kiswahili",
    question: "Neno 'shule' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "I-ZI",
      C: "U-I",
      D: "LI-YA",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'shule' ni la ngeli ya I-ZI. Katika umoja ni 'shule' (shule hii) na katika wingi ni 'shule' (shule hizi).",
  },
  {
    id: 5,
    subject: "Agriculture",
    question:
      "Which farming practice involves growing crops without soil, using mineral nutrient solutions in a water solvent?",
    options: {
      A: "Aquaponics",
      B: "Organic farming",
      C: "Hydroponics",
      D: "Monoculture",
    },
    correctAnswer: "C",
    explanation:
      "Hydroponics is a method of growing plants in a water-based, nutrient-rich solution, without using soil.",
  },
  {
    id: 6,
    subject: "Home Science",
    question:
      "Which of the following nutrients is primarily responsible for building and repairing body tissues?",
    options: {
      A: "Carbohydrates",
      B: "Fats",
      C: "Vitamins",
      D: "Proteins",
    },
    correctAnswer: "D",
    explanation:
      "Proteins are essential macromolecules that provide the building blocks (amino acids) for tissue growth and repair.",
  },
  {
    id: 7,
    subject: "Pre-Technical Studies",
    question:
      "Which tool is best suited for cutting a curved line in a piece of wood?",
    options: {
      A: "Tenon saw",
      B: "Hand saw",
      C: "Coping saw",
      D: "Hacksaw",
    },
    correctAnswer: "C",
    explanation:
      "A coping saw has a thin, flexible blade held in a C-shaped frame, specifically designed for cutting intricate shapes and curves in wood.",
  },
  {
    id: 8,
    subject: "Creative Art",
    question:
      "What are the three primary colors in subtractive color mixing (pigments)?",
    options: {
      A: "Red, Green, Blue",
      B: "Red, Yellow, Blue",
      C: "Cyan, Magenta, Yellow",
      D: "Orange, Green, Violet",
    },
    correctAnswer: "B",
    explanation:
      "In traditional art and color theory, Red, Yellow, and Blue are the primary colors because they cannot be created by mixing other colors, but they can be mixed to create all other colors.",
  },
  {
    id: 9,
    subject: "Sports",
    question:
      "In football (soccer), what is awarded to the opposing team when a player commits a foul inside their own penalty area?",
    options: {
      A: "A corner kick",
      B: "A free kick",
      C: "A throw-in",
      D: "A penalty kick",
    },
    correctAnswer: "D",
    explanation:
      "A penalty kick is awarded when a player commits a direct free kick foul within their own penalty area.",
  },
  {
    id: 10,
    subject: "Mathematics",
    question:
      "What is the area of a circle with a radius of 7 cm? (Use π ≈ 22/7)",
    options: {
      A: "44 cm²",
      B: "154 cm²",
      C: "49 cm²",
      D: "22 cm²",
    },
    correctAnswer: "B",
    explanation:
      "The formula for the area of a circle is A = πr². So, Area = (22/7) * 7 * 7 = 154 cm².",
  },
  {
    id: 11,
    subject: "Social Studies",
    question:
      "The imaginary line that divides the Earth into the Northern and Southern Hemispheres is called the?",
    options: {
      A: "Prime Meridian",
      B: "Tropic of Cancer",
      C: "Equator",
      D: "International Date Line",
    },
    correctAnswer: "C",
    explanation:
      "The Equator is the 0-degree latitude line that circles the Earth at its widest point, dividing it into the Northern and Southern Hemispheres.",
  },
  {
    id: 12,
    subject: "English",
    question:
      "Identify the figure of speech in the sentence: 'The wind whispered through the trees.'",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Hyperbole",
    },
    correctAnswer: "C",
    explanation:
      "Personification is a figure of speech where human qualities or abilities are given to inanimate objects. The wind cannot literally 'whisper'.",
  },
  {
    id: 13,
    subject: "Kiswahili",
    question: "Kamilisha methali: 'Asiyefunzwa na mamaye...'",
    options: {
      A: "...hawezi kufanikiwa.",
      B: "...hufunzwa na dunia.",
      C: "...hupotea njia.",
      D: "...hana heshima.",
    },
    correctAnswer: "B",
    explanation:
      "Methali hii inamaanisha kwamba mtu asiyepata malezi na mafunzo kutoka kwa wazazi wake, atajifunza kupitia changamoto na magumu ya maisha.",
  },
  {
    id: 14,
    subject: "Agriculture",
    question:
      "The process of loosening and turning over soil before planting is known as?",
    options: {
      A: "Irrigation",
      B: "Weeding",
      C: "Harvesting",
      D: "Tilling",
    },
    correctAnswer: "D",
    explanation:
      "Tilling, also known as ploughing, is the agricultural preparation of soil by mechanical agitation of various types, such as digging, stirring, and overturning.",
  },
  {
    id: 15,
    subject: "Home Science",
    question:
      "A deficiency of which vitamin can lead to a condition called scurvy?",
    options: {
      A: "Vitamin A",
      B: "Vitamin B12",
      C: "Vitamin C",
      D: "Vitamin D",
    },
    correctAnswer: "C",
    explanation:
      "Scurvy is a disease resulting from a lack of Vitamin C, as it is required for the synthesis of collagen in humans. Symptoms include weakness, gum disease, and skin hemorrhages.",
  },
  {
    id: 16,
    subject: "Pre-Technical Studies",
    question:
      "In technical drawing, what type of line is used to show hidden details of an object?",
    options: {
      A: "Continuous thick line",
      B: "Short dashes",
      C: "Chain line (long dash, short dash)",
      D: "Wavy line",
    },
    correctAnswer: "B",
    explanation:
      "Hidden lines, represented by short dashes, are used to show edges, surfaces, and corners of an object that are hidden from view.",
  },
  {
    id: 17,
    subject: "Creative Art",
    question:
      "Which art principle refers to the distribution of visual weight in a composition to achieve a sense of stability?",
    options: {
      A: "Contrast",
      B: "Rhythm",
      C: "Balance",
      D: "Emphasis",
    },
    correctAnswer: "C",
    explanation:
      "Balance is a principle of design that deals with arranging elements so that a composition feels stable and not weighted too heavily on one side.",
  },
  {
    id: 18,
    subject: "Sports",
    question:
      "How many players are on a standard basketball team on the court at one time?",
    options: {
      A: "11",
      B: "7",
      C: "5",
      D: "9",
    },
    correctAnswer: "C",
    explanation:
      "A standard basketball game is played with two teams, and each team has five players on the court at any given time.",
  },
  {
    id: 19,
    subject: "Mathematics",
    question:
      "If a triangle has angles measuring 90°, 45°, and 45°, what type of triangle is it?",
    options: {
      A: "Equilateral",
      B: "Scalene",
      C: "Obtuse",
      D: "Isosceles right-angled",
    },
    correctAnswer: "D",
    explanation:
      "A triangle with a 90° angle is a right-angled triangle. Since two angles are equal (45°), the sides opposite those angles are also equal, making it an isosceles triangle.",
  },
  {
    id: 20,
    subject: "Social Studies",
    question: "What is the capital city of Japan?",
    options: {
      A: "Beijing",
      B: "Seoul",
      C: "Tokyo",
      D: "Bangkok",
    },
    correctAnswer: "C",
    explanation:
      "Tokyo, located on the eastern coast of the island of Honshu, is the capital and largest city of Japan.",
  },
  {
    id: 21,
    subject: "English",
    question:
      "Choose the correct verb form: 'Neither the teacher nor the students ____ able to solve the problem.'",
    options: {
      A: "is",
      B: "are",
      C: "was",
      D: "were",
    },
    correctAnswer: "D",
    explanation:
      "When using 'neither/nor', the verb agrees with the subject closest to it. In this case, 'students' is plural and the sentence is in the past tense, so 'were' is correct.",
  },
  {
    id: 22,
    subject: "Kiswahili",
    question: "Neno 'mtoto' katika wingi ni?",
    options: {
      A: "Kitoto",
      B: "Watoto",
      C: "Vitoto",
      D: "Matoto",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'mtoto' liko katika ngeli ya A-WA. Umoja ni 'mtoto' na wingi ni 'watoto'.",
  },
  {
    id: 23,
    subject: "Agriculture",
    question:
      "What is the term for the cross-pollination of different plant varieties to create a new variety with desired traits?",
    options: {
      A: "Grafting",
      B: "Pruning",
      C: "Hybridization",
      D: "Layering",
    },
    correctAnswer: "C",
    explanation:
      "Hybridization is the process of interbreeding individuals from genetically distinct populations or species to create a hybrid that combines the best traits of the parents.",
  },
  {
    id: 24,
    subject: "Home Science",
    question:
      "First aid for a minor burn involves which of the following actions?",
    options: {
      A: "Applying butter to the burn",
      B: "Placing the burn under cool running water",
      C: "Covering the burn with a thick blanket",
      D: "Popping any blisters that form",
    },
    correctAnswer: "B",
    explanation:
      "For a minor burn, immediately hold the affected area under cool (not cold) running water for about 10-20 minutes to reduce pain, swelling, and the risk of scarring.",
  },
  {
    id: 25,
    subject: "Pre-Technical Studies",
    question:
      "What is the primary purpose of using a lubricant on moving machine parts?",
    options: {
      A: "To increase friction",
      B: "To cause corrosion",
      C: "To reduce friction and wear",
      D: "To clean the parts",
    },
    correctAnswer: "C",
    explanation:
      "Lubricants are substances introduced to reduce friction between moving surfaces. They also function to transport foreign particles and distribute heat.",
  },
  {
    id: 26,
    subject: "Creative Art",
    question:
      "A sculpture that is designed to be viewed from all sides is called?",
    options: {
      A: "A relief sculpture",
      B: "A mobile",
      C: "A fresco",
      D: "A sculpture in-the-round",
    },
    correctAnswer: "D",
    explanation:
      "A sculpture in-the-round, or a freestanding sculpture, is a piece that is not attached to a background and can be viewed from any angle.",
  },
  {
    id: 27,
    subject: "Sports",
    question: "The Olympic Games are held every how many years?",
    options: {
      A: "2 years",
      B: "4 years",
      C: "5 years",
      D: "6 years",
    },
    correctAnswer: "B",
    explanation:
      "The modern Olympic Games, both Summer and Winter, are held every four years. The Summer and Winter games are staggered, resulting in an Olympic event every two years.",
  },
  {
    id: 28,
    subject: "Mathematics",
    question: "What is the mean (average) of the numbers 4, 8, 3, and 5?",
    options: {
      A: "20",
      B: "6",
      C: "5",
      D: "4.5",
    },
    correctAnswer: "C",
    explanation:
      "To find the mean, you add all the numbers together (4 + 8 + 3 + 5 = 20) and then divide by the count of the numbers (20 / 4 = 5).",
  },
  {
    id: 29,
    subject: "Social Studies",
    question:
      "Which of these is a form of government where citizens vote for representatives to make laws for them?",
    options: {
      A: "Monarchy",
      B: "Republic",
      C: "Theocracy",
      D: "Autocracy",
    },
    correctAnswer: "B",
    explanation:
      "A republic is a form of government in which the country is considered a 'public matter', not the private concern or property of the rulers. It primarily involves electing officials to represent the populace.",
  },
  {
    id: 30,
    subject: "English",
    question: "An antonym for the word 'brave' is:",
    options: {
      A: "Heroic",
      B: "Strong",
      C: "Fearful",
      D: "Bold",
    },
    correctAnswer: "C",
    explanation:
      "An antonym is a word with the opposite meaning. 'Fearful' is the opposite of 'brave'.",
  },
  {
    id: 31,
    subject: "Kiswahili",
    question: "Chagua neno lenye maana sawa na 'ghadhabu'.",
    options: {
      A: "Furaha",
      B: "Upendo",
      C: "Hasira",
      D: "Huzuni",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'ghadhabu' lina maana ya hasira kali. Kwa hivyo, 'hasira' ndilo jibu sahihi.",
  },
  {
    id: 32,
    subject: "Agriculture",
    question:
      "What is the process of removing unwanted plants from a farm called?",
    options: {
      A: "Mulching",
      B: "Weeding",
      C: "Thinning",
      D: "Pruning",
    },
    correctAnswer: "B",
    explanation:
      "Weeding is the removal of weeds (unwanted plants) that compete with crops for sunlight, water, and nutrients.",
  },
  {
    id: 33,
    subject: "Home Science",
    question: "Which of the following is a water-soluble vitamin?",
    options: {
      A: "Vitamin A",
      B: "Vitamin D",
      C: "Vitamin E",
      D: "Vitamin C",
    },
    correctAnswer: "D",
    explanation:
      "Vitamins are classified as either fat-soluble (A, D, E, K) or water-soluble (B-complex vitamins and Vitamin C). Water-soluble vitamins are not stored in the body and need to be replenished regularly.",
  },
  {
    id: 34,
    subject: "Pre-Technical Studies",
    question:
      "Which of the following materials is a good electrical insulator?",
    options: {
      A: "Copper",
      B: "Aluminum",
      C: "Rubber",
      D: "Iron",
    },
    correctAnswer: "C",
    explanation:
      "An electrical insulator is a material whose internal electric charges do not flow freely. Rubber is a common insulator used to coat electrical wires for safety.",
  },
  {
    id: 35,
    subject: "Creative Art",
    question:
      "The technique of creating an image by assembling small pieces of colored glass, stone, or other materials is called:",
    options: {
      A: "Collage",
      B: "Fresco",
      C: "Mosaic",
      D: "Engraving",
    },
    correctAnswer: "C",
    explanation:
      "A mosaic is a piece of art made from the assembling of small pieces, known as tesserae, to create an image or pattern.",
  },
  {
    id: 36,
    subject: "Sports",
    question: "In athletics, a standard track for running events is how long?",
    options: {
      A: "100 meters",
      B: "200 meters",
      C: "400 meters",
      D: "800 meters",
    },
    correctAnswer: "C",
    explanation:
      "A standard outdoor running track is 400 meters in length for one full lap in the innermost lane.",
  },
  {
    id: 37,
    subject: "Mathematics",
    question: "What is 25% of 200?",
    options: {
      A: "25",
      B: "50",
      C: "75",
      D: "100",
    },
    correctAnswer: "B",
    explanation:
      "25% can be written as 0.25 or 1/4. So, 0.25 * 200 = 50, or 200 / 4 = 50.",
  },
  {
    id: 38,
    subject: "Social Studies",
    question:
      "Mount Kilimanjaro, the highest peak in Africa, is located in which country?",
    options: {
      A: "Kenya",
      B: "Uganda",
      C: "Ethiopia",
      D: "Tanzania",
    },
    correctAnswer: "D",
    explanation:
      "Mount Kilimanjaro is a dormant volcano in Tanzania and is the highest mountain in Africa, with its summit about 4,900 metres from its base, and 5,895 metres above sea level.",
  },
  {
    id: 39,
    subject: "English",
    question:
      "Which part of speech is the word 'quickly' in the sentence 'She ran quickly'?",
    options: {
      A: "Adjective",
      B: "Verb",
      C: "Adverb",
      D: "Noun",
    },
    correctAnswer: "C",
    explanation:
      "An adverb is a word that modifies a verb, adjective, or another adverb. In this case, 'quickly' modifies the verb 'ran', describing how she ran.",
  },
  {
    id: 40,
    subject: "Kiswahili",
    question: "Kifaa kinachotumiwa kupimia joto huitwaje?",
    options: {
      A: "Saa",
      B: "Mzani",
      C: "Teplometa",
      D: "Rula",
    },
    correctAnswer: "C",
    explanation:
      "Teplometa (thermometer) ndicho kifaa maalumu kinachotumika kupima kiwango cha joto au baridi.",
  },
  {
    id: 41,
    subject: "Agriculture",
    question:
      "The system of farming where a farmer grows crops and raises livestock on the same farm is called?",
    options: {
      A: "Monoculture",
      B: "Mixed farming",
      C: "Shifting cultivation",
      D: "Pastoral farming",
    },
    correctAnswer: "B",
    explanation:
      "Mixed farming is an agricultural system in which a farmer conducts different agricultural practices together, such as cash crops and livestock, to increase income and complement each other.",
  },
  {
    id: 42,
    subject: "Home Science",
    question: "Why is it important to wash hands before handling food?",
    options: {
      A: "To make the food taste better",
      B: "To prevent the spread of harmful bacteria",
      C: "To cool down your hands",
      D: "It is not important",
    },
    correctAnswer: "B",
    explanation:
      "Washing hands removes germs and bacteria that can be transferred to food, causing foodborne illnesses.",
  },
  {
    id: 43,
    subject: "Pre-Technical Studies",
    question: "Which of these is a safety precaution to observe in a workshop?",
    options: {
      A: "Wearing loose clothing",
      B: "Using tools for their intended purpose",
      C: "Running in the workshop",
      D: "Leaving tools on the floor",
    },
    correctAnswer: "B",
    explanation:
      "Proper tool use is a fundamental safety rule. Using a tool for a job it wasn't designed for can damage the tool and cause serious injury.",
  },
  {
    id: 44,
    subject: "Creative Art",
    question: "What is a 'monochromatic' color scheme?",
    options: {
      A: "A scheme using many different colors",
      B: "A scheme using only black and white",
      C: "A scheme based on several different shades of one color",
      D: "A scheme using colors opposite each other on the color wheel",
    },
    correctAnswer: "C",
    explanation:
      "A monochromatic color scheme uses variations in lightness and saturation of a single color. It consists of tints (adding white), tones (adding gray), and shades (adding black).",
  },
  {
    id: 45,
    subject: "Sports",
    question: "In which sport would you perform a 'slam dunk'?",
    options: {
      A: "Volleyball",
      B: "Tennis",
      C: "Basketball",
      D: "Badminton",
    },
    correctAnswer: "C",
    explanation:
      "A slam dunk is a type of shot in basketball where a player jumps up and forces the ball through the hoop with one or both hands.",
  },
  {
    id: 46,
    subject: "Mathematics",
    question: "The sum of the interior angles of any triangle is always:",
    options: {
      A: "90 degrees",
      B: "180 degrees",
      C: "360 degrees",
      D: "120 degrees",
    },
    correctAnswer: "B",
    explanation:
      "A fundamental theorem in Euclidean geometry states that the sum of the three interior angles of any triangle is always equal to 180 degrees.",
  },
  {
    id: 47,
    subject: "Social Studies",
    question:
      "The system of writing used by the ancient Egyptians that involved pictures and symbols is called:",
    options: {
      A: "Cuneiform",
      B: "Alphabet",
      C: "Hieroglyphics",
      D: "Sanskrit",
    },
    correctAnswer: "C",
    explanation:
      "Hieroglyphics was a formal writing system used by the ancient Egyptians, combining logographic, syllabic and alphabetic elements.",
  },
  {
    id: 48,
    subject: "English",
    question: "What is the plural form of the noun 'crisis'?",
    options: {
      A: "Crisises",
      B: "Crisi",
      C: "Crises",
      D: "Crisis's",
    },
    correctAnswer: "C",
    explanation:
      "Nouns of Greek origin ending in '-is' often form their plural by changing the '-is' to '-es'. Thus, the plural of 'crisis' is 'crises'.",
  },
  {
    id: 49,
    subject: "Kiswahili",
    question: "Nani huandika mashairi?",
    options: {
      A: "Mwandishi",
      B: "Mwanasiasa",
      C: "Mshairi",
      D: "Mwalimu",
    },
    correctAnswer: "C",
    explanation: "Mtu anayetunga na kuandika mashairi huitwa 'mshairi'.",
  },
  {
    id: 50,
    subject: "Agriculture",
    question:
      "Which of the following is a leguminous crop known for fixing nitrogen in the soil?",
    options: {
      A: "Maize",
      B: "Wheat",
      C: "Beans",
      D: "Potatoes",
    },
    correctAnswer: "C",
    explanation:
      "Legumes, such as beans, peas, and lentils, have a symbiotic relationship with nitrogen-fixing bacteria in their root nodules, which enriches the soil with nitrogen.",
  },
  {
    id: 51,
    subject: "Home Science",
    question: "What is a 'balanced diet'?",
    options: {
      A: "A diet containing only fruits and vegetables",
      B: "A diet that contains all food groups in the correct proportions",
      C: "A diet consisting of only one type of food",
      D: "A diet high in sugars and fats",
    },
    correctAnswer: "B",
    explanation:
      "A balanced diet provides the body with all the essential nutrients (carbohydrates, proteins, fats, vitamins, minerals) in the right amounts for optimal health.",
  },
  {
    id: 52,
    subject: "Pre-Technical Studies",
    question:
      "In metalwork, what is the process of joining two pieces of metal by melting and flowing a filler metal into the joint?",
    options: {
      A: "Riveting",
      B: "Drilling",
      C: "Soldering",
      D: "Filing",
    },
    correctAnswer: "C",
    explanation:
      "Soldering uses a filler metal (solder) with a relatively low melting point to join metal parts without melting the base metals.",
  },
  {
    id: 53,
    subject: "Creative Art",
    question: "The 'Mona Lisa' is a famous painting by which artist?",
    options: {
      A: "Vincent van Gogh",
      B: "Pablo Picasso",
      C: "Michelangelo",
      D: "Leonardo da Vinci",
    },
    correctAnswer: "D",
    explanation:
      "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci, considered a masterpiece of its era.",
  },
  {
    id: 54,
    subject: "Sports",
    question: "What is the term for a score of zero in a game of tennis?",
    options: {
      A: "Duck",
      B: "Love",
      C: "Nil",
      D: "Zero",
    },
    correctAnswer: "B",
    explanation:
      "In tennis, 'love' is used to represent a score of zero or nothing. For example, a score of 15-0 is announced as 'fifteen-love'.",
  },
  {
    id: 55,
    subject: "Mathematics",
    question: "A shape with 8 sides is called a/an:",
    options: {
      A: "Hexagon",
      B: "Pentagon",
      C: "Octagon",
      D: "Heptagon",
    },
    correctAnswer: "C",
    explanation:
      "A polygon with eight sides and eight angles is called an octagon. A hexagon has 6 sides, a pentagon has 5, and a heptagon has 7.",
  },
  {
    id: 56,
    subject: "Social Studies",
    question: "The Great Wall of China was primarily built to:",
    options: {
      A: "Serve as a tourist attraction",
      B: "Mark the border with India",
      C: "Protect against invasions from northern nomadic groups",
      D: "Be a trade route",
    },
    correctAnswer: "C",
    explanation:
      "The Great Wall of China was built as a military defensive line to protect Chinese states and empires against the raids and invasions of various nomadic groups from the Eurasian Steppe.",
  },
  {
    id: 57,
    subject: "English",
    question:
      "A story that is passed down through generations and often has a moral is called a:",
    options: {
      A: "Novel",
      B: "Fable",
      C: "Biography",
      D: "Sonnet",
    },
    correctAnswer: "B",
    explanation:
      "A fable is a short fictional story that features animals, legendary creatures, or forces of nature which are anthropomorphized and that illustrates or leads to a particular moral lesson.",
  },
  {
    id: 58,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'panda' ni?",
    options: {
      A: "Shuka",
      B: "Ingia",
      C: "Ruka",
      D: "Simama",
    },
    correctAnswer: "A",
    explanation:
      "Kinyume (antonym) cha kitenzi 'kupanda' (to ascend/climb) ni 'kushuka' (to descend/get off).",
  },
  {
    id: 59,
    subject: "Agriculture",
    question: "Which of these is a method of irrigation?",
    options: {
      A: "Terracing",
      B: "Contour ploughing",
      C: "Drip irrigation",
      D: "Crop rotation",
    },
    correctAnswer: "C",
    explanation:
      "Drip irrigation is a type of micro-irrigation system that has the potential to save water and nutrients by allowing water to drip slowly to the roots of plants, either from above the soil surface or buried below the surface.",
  },
  {
    id: 60,
    subject: "Home Science",
    question: "Which food group is the primary source of energy for the body?",
    options: {
      A: "Proteins",
      B: "Vitamins",
      C: "Carbohydrates",
      D: "Minerals",
    },
    correctAnswer: "C",
    explanation:
      "Carbohydrates are the body's main source of energy. They are broken down into glucose, which is used to fuel cells, tissues, and organs.",
  },
  {
    id: 61,
    subject: "Pre-Technical Studies",
    question:
      "What does the abbreviation 'CAD' stand for in technical drawing?",
    options: {
      A: "Computer-Aided Drawing",
      B: "Computer-Assisted Design",
      C: "Creative Art and Design",
      D: "Calculated Architectural Dimension",
    },
    correctAnswer: "B",
    explanation:
      "CAD stands for Computer-Aided Design. It is the use of computers to assist in the creation, modification, analysis, or optimization of a design.",
  },
  {
    id: 62,
    subject: "Creative Art",
    question: "The illusion of depth on a flat surface is known as:",
    options: {
      A: "Texture",
      B: "Pattern",
      C: "Perspective",
      D: "Shape",
    },
    correctAnswer: "C",
    explanation:
      "Perspective in art is the technique used to represent three-dimensional objects on a two-dimensional surface in a way that looks natural and realistic.",
  },
  {
    id: 63,
    subject: "Sports",
    question:
      "What is the name of the trophy awarded to the winner of the FIFA World Cup?",
    options: {
      A: "The Stanley Cup",
      B: "The Webb Ellis Cup",
      C: "The Jules Rimet Trophy",
      D: "The FIFA World Cup Trophy",
    },
    correctAnswer: "D",
    explanation:
      "The current trophy, introduced in 1974, is called the FIFA World Cup Trophy. The previous trophy was the Jules Rimet Trophy, which was permanently awarded to Brazil in 1970.",
  },
  {
    id: 64,
    subject: "Mathematics",
    question: "If a car travels at 60 km/h, how far will it travel in 3 hours?",
    options: {
      A: "20 km",
      B: "180 km",
      C: "63 km",
      D: "90 km",
    },
    correctAnswer: "B",
    explanation:
      "Distance is calculated by multiplying speed by time. So, Distance = 60 km/h * 3 h = 180 km.",
  },
  {
    id: 65,
    subject: "Social Studies",
    question: "Who was the first President of Kenya?",
    options: {
      A: "Daniel arap Moi",
      B: "Jomo Kenyatta",
      C: "Mwai Kibaki",
      D: "Uhuru Kenyatta",
    },
    correctAnswer: "B",
    explanation:
      "Jomo Kenyatta was a Kenyan anti-colonial activist and politician who governed Kenya as its Prime Minister from 1963 to 1964 and then as its first President from 1964 to his death in 1978.",
  },
  {
    id: 66,
    subject: "English",
    question: "A group of lions is called a:",
    options: {
      A: "Pack",
      B: "Herd",
      C: "Pride",
      D: "Flock",
    },
    correctAnswer: "C",
    explanation: "The collective noun for a group of lions is a 'pride'.",
  },
  {
    id: 67,
    subject: "Kiswahili",
    question: "Gari, basi na pikipiki ni mifano ya?",
    options: {
      A: "Vyombo vya usafiri",
      B: "Vyombo vya habari",
      C: "Vyombo vya muziki",
      D: "Vifaa vya jikoni",
    },
    correctAnswer: "A",
    explanation:
      "Gari (car), basi (bus), na pikipiki (motorcycle) zote ni aina za vyombo vya usafiri (means of transport).",
  },
  {
    id: 68,
    subject: "Agriculture",
    question:
      "The practice of growing only one type of crop in a field year after year is known as:",
    options: {
      A: "Crop rotation",
      B: "Intercropping",
      C: "Monoculture",
      D: "Mixed cropping",
    },
    correctAnswer: "C",
    explanation:
      "Monoculture is the agricultural practice of producing or growing a single crop, plant, or livestock species, variety, or breed in a field or farming system at a time.",
  },
  {
    id: 69,
    subject: "Home Science",
    question:
      "What is the process of preserving food by using salt, sugar, or vinegar called?",
    options: {
      A: "Canning",
      B: "Freezing",
      C: "Drying",
      D: "Pickling",
    },
    correctAnswer: "D",
    explanation:
      "Pickling is the process of preserving or extending the shelf life of food by either anaerobic fermentation in brine or immersion in an edible acidic solution, usually vinegar.",
  },
  {
    id: 70,
    subject: "Pre-Technical Studies",
    question: "A try square is a tool used for:",
    options: {
      A: "Measuring circles",
      B: "Marking or checking right angles (90°)",
      C: "Cutting metal",
      D: "Tightening bolts",
    },
    correctAnswer: "B",
    explanation:
      "A try square consists of a stock and a blade set at a right angle (90 degrees) to each other. It is used for marking and checking the accuracy of right angles on pieces of wood or metal.",
  },
  {
    id: 71,
    subject: "Creative Art",
    question: "The lightness or darkness of a color is referred to as its:",
    options: {
      A: "Hue",
      B: "Value",
      C: "Saturation",
      D: "Intensity",
    },
    correctAnswer: "B",
    explanation:
      "Value, one of the elements of art, describes the lightness or darkness of a color. A light value is a tint (color + white) and a dark value is a shade (color + black).",
  },
  {
    id: 72,
    subject: "Sports",
    question: "Which country is credited with inventing the sport of cricket?",
    options: {
      A: "India",
      B: "Australia",
      C: "England",
      D: "South Africa",
    },
    correctAnswer: "C",
    explanation:
      "The sport of cricket has a known history beginning in the late 16th century in south-east England.",
  },
  {
    id: 73,
    subject: "Mathematics",
    question: "What is the next number in the sequence: 2, 5, 11, 23, ...?",
    options: {
      A: "46",
      B: "34",
      C: "47",
      D: "29",
    },
    correctAnswer: "C",
    explanation:
      "The pattern is to multiply the previous number by 2 and then add 1. (2*2+1=5), (5*2+1=11), (11*2+1=23), so the next number is (23*2+1=47).",
  },
  {
    id: 74,
    subject: "Social Studies",
    question:
      "What is the main function of the legislative branch of government?",
    options: {
      A: "To enforce laws",
      B: "To interpret laws",
      C: "To make laws",
      D: "To lead the military",
    },
    correctAnswer: "C",
    explanation:
      "The legislative branch (e.g., Parliament, Congress) is primarily responsible for drafting, debating, and passing laws for the country.",
  },
  {
    id: 75,
    subject: "English",
    question: "Which of these words is a conjunction?",
    options: {
      A: "run",
      B: "beautiful",
      C: "and",
      D: "under",
    },
    correctAnswer: "C",
    explanation:
      "A conjunction is a word used to connect clauses or sentences or to coordinate words in the same clause. 'And' is a coordinating conjunction.",
  },
  {
    id: 76,
    subject: "Kiswahili",
    question:
      "Andika sentensi ifuatayo katika hali ya ukubwa: 'Kijana yule alinunua kitabu kizuri.'",
    options: {
      A: "Jijana lile lilinunua jitabu zuri.",
      B: "Jana lile lilinunua tabu zuri.",
      C: "Jana lile lilinunua kitabu jizuri.",
      D: "Jana lile lilinunua jabu zuri.",
    },
    correctAnswer: "A",
    explanation:
      "Hali ya ukubwa (augmentation) hubadilisha viambishi vya nomino na vivumishi. 'Kijana' huwa 'jijana', 'yule' huwa 'lile', 'kitabu' huwa 'jitabu', na 'kizuri' huwa 'zuri'.",
  },
  {
    id: 77,
    subject: "Agriculture",
    question:
      "Pests that transmit diseases from one plant to another are known as:",
    options: {
      A: "Predators",
      B: "Vectors",
      C: "Parasites",
      D: "Pollinators",
    },
    correctAnswer: "B",
    explanation:
      "In agriculture, a vector is an organism, often an insect, that transmits a pathogen (like a virus or bacterium) from an infected plant to a healthy one.",
  },
  {
    id: 78,
    subject: "Home Science",
    question: "The natural fiber obtained from the cocoon of a silkworm is:",
    options: {
      A: "Cotton",
      B: "Wool",
      C: "Silk",
      D: "Linen",
    },
    correctAnswer: "C",
    explanation:
      "Silk is a natural protein fiber produced by certain insect larvae to form cocoons. The best-known silk is obtained from the cocoons of the larvae of the mulberry silkworm.",
  },
  {
    id: 79,
    subject: "Pre-Technical Studies",
    question:
      "Which simple machine consists of a wheel and an axle, used to move objects?",
    options: {
      A: "Lever",
      B: "Pulley",
      C: "Inclined Plane",
      D: "Wheel and Axle",
    },
    correctAnswer: "D",
    explanation:
      "The wheel and axle is a simple machine consisting of a wheel attached to a smaller axle so that these two parts rotate together in which a force is transferred from one to the other.",
  },
  {
    id: 80,
    subject: "Creative Art",
    question:
      "A type of printmaking where the image is incised into a surface and the incised line holds the ink is called:",
    options: {
      A: "Relief printing",
      B: "Intaglio",
      C: "Lithography",
      D: "Screen printing",
    },
    correctAnswer: "B",
    explanation:
      "Intaglio techniques, such as engraving and etching, involve cutting into a plate. The ink is held in the incised lines, and the flat surface of the plate is wiped clean before printing.",
  },
  {
    id: 81,
    subject: "Sports",
    question:
      "A marathon is a long-distance running race with an official distance of:",
    options: {
      A: "26.2 kilometers",
      B: "42.195 kilometers",
      C: "10 kilometers",
      D: "50 kilometers",
    },
    correctAnswer: "B",
    explanation:
      "The official distance of a marathon is 42.195 kilometers (approximately 26.2 miles).",
  },
  {
    id: 82,
    subject: "Mathematics",
    question: "What is the square root of 144?",
    options: {
      A: "12",
      B: "14",
      C: "16",
      D: "11",
    },
    correctAnswer: "A",
    explanation:
      "The square root of a number is a value that, when multiplied by itself, gives the original number. 12 * 12 = 144.",
  },
  {
    id: 83,
    subject: "Social Studies",
    question: "What is democracy?",
    options: {
      A: "Rule by a king or queen",
      B: "Rule by a single person with absolute power",
      C: "A system of government by the whole population, typically through elected representatives",
      D: "Rule by a small group of people",
    },
    correctAnswer: "C",
    explanation:
      "Democracy is a system of government where the citizens exercise power by voting. The term comes from the Greek words 'demos' (people) and 'kratos' (rule).",
  },
  {
    id: 84,
    subject: "English",
    question: "Which sentence is grammatically correct?",
    options: {
      A: "Her and I went to the store.",
      B: "She and me went to the store.",
      C: "She and I went to the store.",
      D: "Me and her went to the store.",
    },
    correctAnswer: "C",
    explanation:
      "'She' and 'I' are subject pronouns, which are used when the pronoun is the subject of the verb. 'Her' and 'me' are object pronouns.",
  },
  {
    id: 85,
    subject: "Kiswahili",
    question: "Usemi 'kula chumvi nyingi' una maana gani?",
    options: {
      A: "Kupenda chakula chenye chumvi",
      B: "Kuishi miaka mingi",
      C: "Kuwa na hasira",
      D: "Kuwa mchoyo",
    },
    correctAnswer: "B",
    explanation:
      "Huu ni usemi wa picha (idiom) unaomaanisha kuishi kwa muda mrefu na kupata uzoefu mwingi maishani.",
  },
  {
    id: 86,
    subject: "Agriculture",
    question:
      "The art and science of growing fruits, vegetables, flowers, and ornamental plants is known as:",
    options: {
      A: "Agronomy",
      B: "Horticulture",
      C: "Forestry",
      D: "Apiculture",
    },
    correctAnswer: "B",
    explanation:
      "Horticulture is the branch of agriculture that deals with the art, science, technology, and business of plant cultivation.",
  },
  {
    id: 87,
    subject: "Home Science",
    question:
      "Stitching used to finish the raw edge of a fabric to prevent it from fraying is called:",
    options: {
      A: "A hem",
      B: "A seam",
      C: "A dart",
      D: "An embroidery",
    },
    correctAnswer: "A",
    explanation:
      "A hem in sewing is a garment finishing method, where the edge of a piece of cloth is folded and sewn to prevent it from unraveling.",
  },
  {
    id: 88,
    subject: "Pre-Technical Studies",
    question: "Which of these is a type of wood joint?",
    options: {
      A: "Welded joint",
      B: "Soldered joint",
      C: "Dovetail joint",
      D: "Adhesive joint",
    },
    correctAnswer: "C",
    explanation:
      "A dovetail joint is a woodworking joinery technique noted for its resistance to being pulled apart (tensile strength). It is commonly used to join the sides of a drawer to the front.",
  },
  {
    id: 89,
    subject: "Creative Art",
    question:
      "The area around, between, and within the subjects of an image is known as:",
    options: {
      A: "Positive space",
      B: "Negative space",
      C: "Focal point",
      D: "Vanishing point",
    },
    correctAnswer: "B",
    explanation:
      "Negative space, in art, is the space around and between the subject(s) of an image. It is as important as the positive space (the subject itself) in creating a balanced composition.",
  },
  {
    id: 90,
    subject: "Sports",
    question:
      "In volleyball, how many times can a team touch the ball before it must be sent over the net?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correctAnswer: "C",
    explanation:
      "A team is allowed a maximum of three touches to return the ball to the opponent's side. A block does not count as one of the three touches.",
  },
  {
    id: 91,
    subject: "Mathematics",
    question: "Convert the fraction 3/4 into a percentage.",
    options: {
      A: "34%",
      B: "43%",
      C: "60%",
      D: "75%",
    },
    correctAnswer: "D",
    explanation:
      "To convert a fraction to a percentage, divide the numerator by the denominator and multiply by 100. (3 / 4) * 100 = 0.75 * 100 = 75%.",
  },
  {
    id: 92,
    subject: "Social Studies",
    question:
      "The Industrial Revolution began in which country during the 18th century?",
    options: {
      A: "United States",
      B: "France",
      C: "Great Britain",
      D: "Germany",
    },
    correctAnswer: "C",
    explanation:
      "The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s, beginning in Great Britain.",
  },
  {
    id: 93,
    subject: "English",
    question: "A biography is a story of a person's life written by:",
    options: {
      A: "The person themselves",
      B: "A poet",
      C: "Another person",
      D: "A playwright",
    },
    correctAnswer: "C",
    explanation:
      "A biography is a detailed description of a person's life written by someone else. If it is written by the person themselves, it is called an autobiography.",
  },
  {
    id: 94,
    subject: "Kiswahili",
    question: "Ukubwa wa neno 'nyumba' ni?",
    options: {
      A: "Kijumba",
      B: "Jumba",
      C: "Vijumba",
      D: "Majumba",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'nyumba' katika hali ya ukubwa ni 'jumba'. 'Kijumba' ni hali ya udogo (diminutive).",
  },
  {
    id: 95,
    subject: "Agriculture",
    question: "Which of these is a common viral disease in poultry?",
    options: {
      A: "Anthrax",
      B: "Foot and Mouth Disease",
      C: "Newcastle Disease",
      D: "Mastitis",
    },
    correctAnswer: "C",
    explanation:
      "Newcastle Disease is a contagious viral bird disease affecting many domestic and wild avian species. It is transmissible to humans.",
  },
  {
    id: 96,
    subject: "Home Science",
    question:
      "Which method of cooking involves cooking food in hot oil or fat?",
    options: {
      A: "Boiling",
      B: "Steaming",
      C: "Baking",
      D: "Frying",
    },
    correctAnswer: "D",
    explanation:
      "Frying is a cooking method where food is submerged or cooked in hot fat, such as oil. This includes methods like deep-frying and stir-frying.",
  },
  {
    id: 97,
    subject: "Pre-Technical Studies",
    question:
      "A drawing that shows an object as it would appear to the eye, with parallel lines converging at a vanishing point, is called:",
    options: {
      A: "Orthographic projection",
      B: "Isometric drawing",
      C: "Perspective drawing",
      D: "Schematic diagram",
    },
    correctAnswer: "C",
    explanation:
      "Perspective drawing is a technique used to represent three-dimensional images on a two-dimensional picture plane, creating an illusion of depth and distance.",
  },
  {
    id: 98,
    subject: "Creative Art",
    question:
      "Creating art by pasting various materials such as paper, photographs, and fabric onto a backing is called:",
    options: {
      A: "Collage",
      B: "Sculpture",
      C: "Painting",
      D: "Drawing",
    },
    correctAnswer: "A",
    explanation:
      "Collage is a technique of art creation, primarily used in the visual arts, by which art results from an assemblage of different forms, thus creating a new whole.",
  },
  {
    id: 99,
    subject: "Sports",
    question: "In which country did the modern Olympic Games originate?",
    options: {
      A: "Italy",
      B: "Greece",
      C: "Egypt",
      D: "France",
    },
    correctAnswer: "B",
    explanation:
      "The ancient Olympic Games were created in Greece, and the modern version was revived in Athens, Greece, in 1896.",
  },
  {
    id: 100,
    subject: "Mathematics",
    question: "A prime number is a number that has exactly how many factors?",
    options: {
      A: "One",
      B: "Two",
      C: "Three",
      D: "Zero",
    },
    correctAnswer: "B",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Therefore, it has exactly two factors.",
  },
  {
    id: 101,
    subject: "Social Studies",
    question: "The River Nile flows into which large body of water?",
    options: {
      A: "The Atlantic Ocean",
      B: "The Red Sea",
      C: "The Indian Ocean",
      D: "The Mediterranean Sea",
    },
    correctAnswer: "D",
    explanation:
      "The Nile River is the longest river in the world and it flows northward through northeastern Africa to drain into the Mediterranean Sea.",
  },
  {
    id: 102,
    subject: "English",
    question:
      "What is the term for a word that is spelled the same forwards and backwards, such as 'level' or 'madam'?",
    options: {
      A: "Palindrome",
      B: "Antonym",
      C: "Homophone",
      D: "Acronym",
    },
    correctAnswer: "A",
    explanation:
      "A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.",
  },
  {
    id: 103,
    subject: "Kiswahili",
    question: "Mtu anayefanya kazi ya kuunda vitu vya udongo huitwa nani?",
    options: {
      A: "Mhunzi",
      B: "Mfinyanzi",
      C: "Seremala",
      D: "Mvuvi",
    },
    correctAnswer: "B",
    explanation:
      "Mfinyanzi ni fundi anayetengeneza vyombo na vitu mbalimbali kwa kutumia udongo wa mfinyanzi. Mhunzi hufua chuma na seremala huchonga mbao.",
  },
  {
    id: 104,
    subject: "Agriculture",
    question: "What is apiculture?",
    options: {
      A: "The cultivation of grapes",
      B: "The rearing of silkworms",
      C: "The keeping of bees",
      D: "The farming of fish",
    },
    correctAnswer: "C",
    explanation:
      "Apiculture, or beekeeping, is the maintenance of bee colonies, commonly in man-made hives, by humans. Beekeepers harvest honey, beeswax, and other products.",
  },
  {
    id: 105,
    subject: "Home Science",
    question: "Calcium is a mineral essential for:",
    options: {
      A: "Healthy vision",
      B: "Blood clotting",
      C: "Strong bones and teeth",
      D: "Energy production",
    },
    correctAnswer: "C",
    explanation:
      "The body needs calcium to build and maintain strong bones. Over 99% of the body's calcium is stored in the bones and teeth.",
  },
  {
    id: 106,
    subject: "Pre-Technical Studies",
    question: "Which drawing instrument is used to draw circles and arcs?",
    options: {
      A: "A ruler",
      B: "A set square",
      C: "A protractor",
      D: "A pair of compasses",
    },
    correctAnswer: "D",
    explanation:
      "A pair of compasses is a technical drawing instrument that can be used for inscribing circles or arcs. It can also be used as a tool to measure distances.",
  },
  {
    id: 107,
    subject: "Creative Art",
    question: "Which of the following is an element of art?",
    options: {
      A: "Balance",
      B: "Line",
      C: "Rhythm",
      D: "Unity",
    },
    correctAnswer: "B",
    explanation:
      "The elements of art are the fundamental components of an artwork. They include line, shape, form, space, texture, value, and color. Balance, rhythm, and unity are principles of design.",
  },
  {
    id: 108,
    subject: "Sports",
    question:
      "How many points is a touchdown worth in American football, before the extra point attempt?",
    options: {
      A: "3",
      B: "2",
      C: "7",
      D: "6",
    },
    correctAnswer: "D",
    explanation:
      "A touchdown is the primary method of scoring in American and Canadian football and is worth six points. After a touchdown, the scoring team can attempt an extra point or a two-point conversion.",
  },
  {
    id: 109,
    subject: "Mathematics",
    question:
      "What is the perimeter of a rectangle with a length of 10 cm and a width of 5 cm?",
    options: {
      A: "15 cm",
      B: "50 cm",
      C: "30 cm",
      D: "25 cm",
    },
    correctAnswer: "C",
    explanation:
      "The formula for the perimeter of a rectangle is P = 2(l + w). So, P = 2(10 + 5) = 2(15) = 30 cm.",
  },
  {
    id: 110,
    subject: "Social Studies",
    question: "The movement of people from rural areas to cities is called:",
    options: {
      A: "Immigration",
      B: "Urbanization",
      C: "Emigration",
      D: "Suburbanization",
    },
    correctAnswer: "B",
    explanation:
      "Urbanization is the process through which cities grow, and higher and higher percentages of the population comes to live in the city.",
  },
  {
    id: 111,
    subject: "English",
    question: "The words 'there', 'their', and 'they're' are examples of:",
    options: {
      A: "Synonyms",
      B: "Antonyms",
      C: "Homophones",
      D: "Palindromes",
    },
    correctAnswer: "C",
    explanation:
      "Homophones are words that are pronounced the same but have different meanings and spellings.",
  },
  {
    id: 112,
    subject: "Kiswahili",
    question: "Kamilisha: 'Mvumilivu hula...'",
    options: {
      A: "...tunda bichi.",
      B: "...mbivu.",
      C: "...haraka.",
      D: "...polepole.",
    },
    correctAnswer: "B",
    explanation:
      "Methali kamili ni 'Mvumilivu hula mbivu', ikimaanisha kwamba mtu anayekuwa na subira mwishowe hufanikiwa kupata kitu kilicho bora.",
  },
  {
    id: 113,
    subject: "Agriculture",
    question: "Soil erosion is the:",
    options: {
      A: "Addition of nutrients to the soil",
      B: "Formation of new soil",
      C: "Wearing away of the topsoil",
      D: "Process of soil aeration",
    },
    correctAnswer: "C",
    explanation:
      "Soil erosion is a naturally occurring process that affects all landforms. It refers to the wearing away of a field's topsoil by the natural physical forces of water and wind.",
  },
  {
    id: 114,
    subject: "Home Science",
    question: "Which of these is a method for purifying water at home?",
    options: {
      A: "Adding sugar",
      B: "Boiling",
      C: "Shaking vigorously",
      D: "Adding food coloring",
    },
    correctAnswer: "B",
    explanation:
      "Boiling is one of the most effective methods of water purification. Bringing water to a rolling boil for at least one minute kills most pathogenic bacteria, viruses, and protozoa.",
  },
  {
    id: 115,
    subject: "Pre-Technical Studies",
    question:
      "What is the name of the tool used to tighten or loosen nuts and bolts?",
    options: {
      A: "Hammer",
      B: "Screwdriver",
      C: "Spanner (or Wrench)",
      D: "Pliers",
    },
    correctAnswer: "C",
    explanation:
      "A spanner, also known as a wrench, is a tool used to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts.",
  },
  {
    id: 116,
    subject: "Creative Art",
    question: "In painting, what is an 'easel'?",
    options: {
      A: "A type of paintbrush",
      B: "A surface to mix paints on",
      C: "An upright stand used for displaying or supporting an artist's canvas",
      D: "A cleaning solvent for brushes",
    },
    correctAnswer: "C",
    explanation:
      "An easel is a stand, typically a tripod, used to support a canvas or a drawing board while an artist is working on it or for display purposes.",
  },
  {
    id: 117,
    subject: "Sports",
    question: "Which of these sports is played on ice?",
    options: {
      A: "Lacrosse",
      B: "Field Hockey",
      C: "Ice Hockey",
      D: "Bandy",
    },
    correctAnswer: "C",
    explanation:
      "Ice hockey is a contact team sport played on ice, usually in a rink, in which two teams of skaters use their sticks to shoot a vulcanized rubber puck into their opponent's net to score points.",
  },
  {
    id: 118,
    subject: "Mathematics",
    question: "Express 0.5 as a fraction in its simplest form.",
    options: {
      A: "5/10",
      B: "1/2",
      C: "50/100",
      D: "2/4",
    },
    correctAnswer: "B",
    explanation:
      "0.5 is equivalent to 5/10. To simplify this fraction, you divide both the numerator and the denominator by their greatest common divisor, which is 5. So, 5÷5 / 10÷5 = 1/2.",
  },
  {
    id: 119,
    subject: "Social Studies",
    question: "An artifact is:",
    options: {
      A: "A written historical document",
      B: "An object made by a human being, typically an item of cultural or historical interest",
      C: "A naturally formed rock",
      D: "A fossil of an ancient animal",
    },
    correctAnswer: "B",
    explanation:
      "An artifact is something made or given shape by humans, such as a tool or a work of art, especially an object of archaeological interest.",
  },
  {
    id: 120,
    subject: "English",
    question: "What is the main character in a story called?",
    options: {
      A: "Antagonist",
      B: "Protagonist",
      C: "Narrator",
      D: "Supporting character",
    },
    correctAnswer: "B",
    explanation:
      "The protagonist is the central character or leading figure in poetry, narrative, novel or any other story. The antagonist is the character who opposes the protagonist.",
  },
  {
    id: 121,
    subject: "Kiswahili",
    question: "Chagua jibu sahihi. Mtu asiyeona huitwa?",
    options: {
      A: "Bubu",
      B: "Kiziwi",
      C: "Kipofu",
      D: "Kilema",
    },
    correctAnswer: "C",
    explanation:
      "Mtu ambaye hawezi kuona anaitwa kipofu. Bubu hawezi kuongea, na kiziwi hawezi kusikia.",
  },
  {
    id: 122,
    subject: "Agriculture",
    question:
      "A substance added to soil to increase its fertility is known as a:",
    options: {
      A: "Pesticide",
      B: "Herbicide",
      C: "Fertilizer",
      D: "Fungicide",
    },
    correctAnswer: "C",
    explanation:
      "Fertilizers are natural or artificial substances containing the chemical elements that improve growth and productiveness of plants.",
  },
  {
    id: 123,
    subject: "Home Science",
    question:
      "A small, organized collection of sewing equipment used for minor repairs is called a:",
    options: {
      A: "Toolbox",
      B: "First aid kit",
      C: "Sewing kit",
      D: "Vanity case",
    },
    correctAnswer: "C",
    explanation:
      "A sewing kit, sometimes called a housewife or 'hussif', is a small package containing items such as needles, thread, buttons, and scissors, for making small sewing repairs.",
  },
  {
    id: 124,
    subject: "Pre-Technical Studies",
    question:
      "A gear is a rotating machine part with cut teeth which mesh with another toothed part to transmit what?",
    options: {
      A: "Electricity",
      B: "Heat",
      C: "Torque",
      D: "Light",
    },
    correctAnswer: "C",
    explanation:
      "Gears are used to transmit torque, which is the rotational equivalent of linear force. They can change the speed, torque, and direction of a power source.",
  },
  {
    id: 125,
    subject: "Creative Art",
    question: "What is 'texture' in the context of visual arts?",
    options: {
      A: "The colors used in the artwork",
      B: "The perceived surface quality of a work of art",
      C: "The balance of the artwork",
      D: "The main subject of the artwork",
    },
    correctAnswer: "B",
    explanation:
      "Texture is an element of art that refers to the way things feel, or look as if they might feel if touched. It can be real (actual texture) or implied (visual texture).",
  },
  {
    id: 126,
    subject: "Sports",
    question:
      "The term 'knockout' or 'KO' is primarily associated with which sport?",
    options: {
      A: "Wrestling",
      B: "Judo",
      C: "Boxing",
      D: "Fencing",
    },
    correctAnswer: "C",
    explanation:
      "A knockout (KO) is a fight-ending, winning criterion in several full-contact combat sports, such as boxing, kickboxing, and mixed martial arts.",
  },
  {
    id: 127,
    subject: "Mathematics",
    question:
      "In a right-angled triangle, the side opposite the right angle is called the:",
    options: {
      A: "Adjacent",
      B: "Opposite",
      C: "Hypotenuse",
      D: "Base",
    },
    correctAnswer: "C",
    explanation:
      "The hypotenuse is the longest side of a right-angled triangle, the side opposite the right angle.",
  },
  {
    id: 128,
    subject: "Social Studies",
    question: "What is a map scale used for?",
    options: {
      A: "To show the direction of North",
      B: "To explain the symbols used on the map",
      C: "To show the relationship between a distance on the map and the corresponding distance on the ground",
      D: "To show the title of the map",
    },
    correctAnswer: "C",
    explanation:
      "The scale of a map is the ratio of a distance on the map to the corresponding distance on the actual ground. For example, 1 cm on the map might represent 1 km on the ground.",
  },
  {
    id: 129,
    subject: "English",
    question: "A hyperbole is a figure of speech that involves:",
    options: {
      A: "Understatement",
      B: "Exaggeration for emphasis",
      C: "A comparison using 'like' or 'as'",
      D: "Giving human qualities to objects",
    },
    correctAnswer: "B",
    explanation:
      "Hyperbole is the use of exaggeration as a rhetorical device or figure of speech. For example, 'I'm so hungry I could eat a horse.'",
  },
  {
    id: 130,
    subject: "Kiswahili",
    question: "Mnyama gani anajulikana kwa shingo yake ndefu?",
    options: {
      A: "Tembo",
      B: "Twiga",
      C: "Simba",
      D: "Kifaru",
    },
    correctAnswer: "B",
    explanation:
      "Twiga (giraffe) ni mnyama anayejulikana sana kwa kuwa na shingo ndefu zaidi kuliko wanyama wengine wa nchi kavu.",
  },
  {
    id: 131,
    subject: "Agriculture",
    question: "Which of the following is a way to conserve soil moisture?",
    options: {
      A: "Overgrazing",
      B: "Deforestation",
      C: "Mulching",
      D: "Burning vegetation",
    },
    correctAnswer: "C",
    explanation:
      "Mulching is the practice of covering the soil surface with a layer of material (like straw or plastic sheets) to reduce evaporation, suppress weeds, and conserve soil moisture.",
  },
  {
    id: 132,
    subject: "Home Science",
    question: "What is the primary function of a budget in home management?",
    options: {
      A: "To encourage impulse buying",
      B: "To track and control income and expenditure",
      C: "To increase debt",
      D: "To eliminate savings",
    },
    correctAnswer: "B",
    explanation:
      "A budget is a financial plan that helps in tracking income and expenses over a certain period, enabling better control of finances and helping to achieve financial goals.",
  },
  {
    id: 133,
    subject: "Pre-Technical Studies",
    question:
      "The part of a hammer that is used to strike a nail is called the:",
    options: {
      A: "Handle",
      B: "Claw",
      C: "Face",
      D: "Cheek",
    },
    correctAnswer: "C",
    explanation:
      "The head of a hammer has several parts. The flat part used for striking is called the face. The claw is the forked part on the opposite side used for pulling nails.",
  },
  {
    id: 134,
    subject: "Creative Art",
    question:
      "The arrangement of opposite elements (light vs. dark, rough vs. smooth) in a piece to create visual interest is called:",
    options: {
      A: "Unity",
      B: "Harmony",
      C: "Contrast",
      D: "Repetition",
    },
    correctAnswer: "C",
    explanation:
      "Contrast is a principle of art that refers to the arrangement of opposite elements and effects. For example, light and dark colors, smooth and rough textures, large and small shapes.",
  },
  {
    id: 135,
    subject: "Sports",
    question: "In swimming, which stroke is performed on the back?",
    options: {
      A: "Freestyle",
      B: "Breaststroke",
      C: "Butterfly",
      D: "Backstroke",
    },
    correctAnswer: "D",
    explanation:
      "Backstroke is one of the four swimming styles used in competitive events, and it is the only one swum on the back.",
  },
  {
    id: 136,
    subject: "Mathematics",
    question: "What is the value of 5 squared (5²)?",
    options: {
      A: "10",
      B: "25",
      C: "15",
      D: "52",
    },
    correctAnswer: "B",
    explanation:
      "Squaring a number means multiplying it by itself. So, 5² = 5 * 5 = 25.",
  },
  {
    id: 137,
    subject: "Social Studies",
    question: "A period of ten years is called a:",
    options: {
      A: "Century",
      B: "Millennium",
      C: "Decade",
      D: "Score",
    },
    correctAnswer: "C",
    explanation:
      "A decade is a period of ten years. A century is 100 years, and a millennium is 1000 years.",
  },
  {
    id: 138,
    subject: "English",
    question: "Which punctuation mark is used to indicate possession?",
    options: {
      A: "Comma (,)",
      B: "Question Mark (?)",
      C: "Apostrophe (')",
      D: "Period (.)",
    },
    correctAnswer: "C",
    explanation:
      "An apostrophe is used to show that a thing or person belongs or relates to someone or something, such as 'the boy's book'.",
  },
  {
    id: 139,
    subject: "Kiswahili",
    question: "Kifaa kinachotumiwa na seremala kukata mbao ni?",
    options: {
      A: "Nyundo",
      B: "Msumeno",
      C: "Randa",
      D: "Parafujo",
    },
    correctAnswer: "B",
    explanation:
      "Msumeno (saw) ndicho kifaa kikuu ambacho seremala hutumia kukata mbao. Nyundo (hammer) ni ya kugongea misumari.",
  },
  {
    id: 140,
    subject: "Agriculture",
    question:
      "The raising of animals for meat, milk, eggs, or other products is known as:",
    options: {
      A: "Crop farming",
      B: "Livestock farming",
      C: "Aquaculture",
      D: "Horticulture",
    },
    correctAnswer: "B",
    explanation:
      "Livestock farming, or animal husbandry, is the branch of agriculture concerned with animals that are raised for meat, fiber, milk, eggs, or other products.",
  },
  {
    id: 141,
    subject: "Home Science",
    question:
      "Iron is an important mineral in the diet because it helps in the formation of:",
    options: {
      A: "Bones",
      B: "Skin cells",
      C: "Hemoglobin in red blood cells",
      D: "Hair",
    },
    correctAnswer: "C",
    explanation:
      "Iron is a crucial component of hemoglobin, the protein in red blood cells that carries oxygen from the lungs to the rest of the body. A deficiency can lead to anemia.",
  },
  {
    id: 142,
    subject: "Pre-Technical Studies",
    question: "Which of the following is a renewable source of energy?",
    options: {
      A: "Coal",
      B: "Natural Gas",
      C: "Solar power",
      D: "Petroleum",
    },
    correctAnswer: "C",
    explanation:
      "Renewable energy sources are those that are naturally replenished. Solar power, derived from the sun's radiation, is considered renewable, while fossil fuels like coal and gas are non-renewable.",
  },
  {
    id: 143,
    subject: "Creative Art",
    question:
      "A portrait is a painting, photograph, or other artistic representation of a:",
    options: {
      A: "Landscape",
      B: "Person",
      C: "Building",
      D: "Still life object",
    },
    correctAnswer: "B",
    explanation:
      "A portrait is an artistic representation of a person, in which the face and its expression is predominant. The intent is to display the likeness, personality, and even the mood of the person.",
  },
  {
    id: 144,
    subject: "Sports",
    question: "How many rings are there on the Olympic flag?",
    options: {
      A: "3",
      B: "7",
      C: "5",
      D: "6",
    },
    correctAnswer: "C",
    explanation:
      "The Olympic symbol consists of five interlocking rings, colored blue, yellow, black, green, and red on a white field. The rings represent the five inhabited continents.",
  },
  {
    id: 145,
    subject: "Mathematics",
    question: "A line that touches a circle at exactly one point is called a:",
    options: {
      A: "Chord",
      B: "Radius",
      C: "Diameter",
      D: "Tangent",
    },
    correctAnswer: "D",
    explanation:
      "In geometry, a tangent line to a curve at a given point is the straight line that 'just touches' the curve at that point.",
  },
  {
    id: 146,
    subject: "Social Studies",
    question: "What continent is the largest by land area?",
    options: {
      A: "Africa",
      B: "North America",
      C: "Asia",
      D: "South America",
    },
    correctAnswer: "C",
    explanation:
      "Asia is the Earth's largest and most populous continent, covering an area of 44.58 million square kilometres, about 30% of Earth's total land area.",
  },
  {
    id: 147,
    subject: "English",
    question: "A paragraph should be organized around a single:",
    options: {
      A: "Word",
      B: "Sentence",
      C: "Main idea",
      D: "Character",
    },
    correctAnswer: "C",
    explanation:
      "A well-written paragraph has a clear focus on a single main idea, which is often stated in a topic sentence. All other sentences in the paragraph should support this main idea.",
  },
  {
    id: 148,
    subject: "Kiswahili",
    question: "Neno 'polepole' ni aina gani ya neno?",
    options: {
      A: "Nomino (Noun)",
      B: "Kitenzi (Verb)",
      C: "Kivumishi (Adjective)",
      D: "Kielezi (Adverb)",
    },
    correctAnswer: "D",
    explanation:
      "Neno 'polepole' ni kielezi cha namna. Linaelezea jinsi kitenzi kinavyofanyika, kwa mfano 'Tembea polepole' (Walk slowly).",
  },
  {
    id: 149,
    subject: "Agriculture",
    question:
      "The controlled application of water to land to assist in the production of crops is:",
    options: {
      A: "Drainage",
      B: "Irrigation",
      C: "Precipitation",
      D: "Erosion",
    },
    correctAnswer: "B",
    explanation:
      "Irrigation is the agricultural process of applying controlled amounts of water to land to assist in the production of crops, especially in areas with insufficient rainfall.",
  },
  {
    id: 150,
    subject: "Home Science",
    question: "Which of the following is a good source of dietary fiber?",
    options: {
      A: "White bread",
      B: "Sugary drinks",
      C: "Whole grains and vegetables",
      D: "Cheese",
    },
    correctAnswer: "C",
    explanation:
      "Dietary fiber is found mainly in fruits, vegetables, whole grains, and legumes. It is important for maintaining a healthy digestive system.",
  },
  {
    id: 151,
    subject: "Pre-Technical Studies",
    question:
      "Which safety device is designed to interrupt an electrical circuit when it detects an imbalance in the current?",
    options: {
      A: "Switch",
      B: "Fuse",
      C: "Circuit Breaker",
      D: "Resistor",
    },
    correctAnswer: "C",
    explanation:
      "A circuit breaker is an automatic electrical switch designed to protect an electrical circuit from damage caused by excess current from an overload or short circuit.",
  },
  {
    id: 152,
    subject: "Creative Art",
    question:
      "An arrangement of inanimate objects, such as flowers, fruits, or bowls, as the subject of a painting or drawing is called:",
    options: {
      A: "A landscape",
      B: "A portrait",
      C: "A still life",
      D: "An abstract",
    },
    correctAnswer: "C",
    explanation:
      "A still life is a work of art depicting mostly inanimate subject matter, typically commonplace objects which are either natural or man-made.",
  },
  {
    id: 153,
    subject: "Sports",
    question: "A 'hat-trick' in sports generally refers to:",
    options: {
      A: "Winning three games in a row",
      B: "Three successful achievements by a player in a single game",
      C: "A special type of uniform",
      D: "A type of defensive play",
    },
    correctAnswer: "B",
    explanation:
      "In sports, a hat-trick is the achievement of a positive feat three times in a game, for instance, scoring three goals in football or taking three wickets in a row in cricket.",
  },
  {
    id: 154,
    subject: "Mathematics",
    question:
      "What is the term for a polygon with four equal sides and four right angles?",
    options: {
      A: "Rectangle",
      B: "Rhombus",
      C: "Square",
      D: "Trapezoid",
    },
    correctAnswer: "C",
    explanation:
      "A square is a special type of rectangle with all four sides of equal length and all four angles being 90 degrees.",
  },
  {
    id: 155,
    subject: "Social Studies",
    question:
      "What is the process by which plants use sunlight, water, and carbon dioxide to create their own food?",
    options: {
      A: "Respiration",
      B: "Transpiration",
      C: "Photosynthesis",
      D: "Decomposition",
    },
    correctAnswer: "C",
    explanation:
      "Photosynthesis is the process used by plants, algae and certain bacteria to harness energy from sunlight and turn it into chemical energy.",
  },
  {
    id: 156,
    subject: "English",
    question: "What does the idiom 'to bite the bullet' mean?",
    options: {
      A: "To eat something very hard",
      B: "To go to the dentist",
      C: "To decide to do something difficult or unpleasant that one has been putting off",
      D: "To get injured",
    },
    correctAnswer: "C",
    explanation:
      "The phrase 'to bite the bullet' means to face a difficult situation with courage and determination.",
  },
  {
    id: 157,
    subject: "Kiswahili",
    question: "Udogo wa neno 'mbuzi' ni?",
    options: {
      A: "Jibuzi",
      B: "Vibuzi",
      C: "Kibuzi",
      D: "Mabuzi",
    },
    correctAnswer: "C",
    explanation:
      "Hali ya udogo (diminutive) ya neno 'mbuzi' ni 'kibuzi', ambacho huundwa kwa kuongeza kiambishi 'ki-'.",
  },
  {
    id: 158,
    subject: "Agriculture",
    question: "Crop rotation is practiced primarily to:",
    options: {
      A: "Make the farm look organized",
      B: "Grow only one type of crop",
      C: "Improve soil health and prevent pest build-up",
      D: "Reduce the amount of water needed",
    },
    correctAnswer: "C",
    explanation:
      "Crop rotation is the practice of growing a series of different types of crops in the same area across a sequence of growing seasons. It helps to replenish soil nutrients and disrupt the life cycles of pests and diseases.",
  },
  {
    id: 159,
    subject: "Home Science",
    question: "Which of the following is a symptom of malaria?",
    options: {
      A: "Stomach ache",
      B: "High fever and chills",
      C: "A skin rash",
      D: "A broken bone",
    },
    correctAnswer: "B",
    explanation:
      "The classic symptoms of malaria, a disease spread by mosquitoes, include cycles of high fever, shaking chills, and sweating.",
  },
  {
    id: 160,
    subject: "Pre-Technical Studies",
    question: "Which tool is used for driving screws into a material?",
    options: {
      A: "Hammer",
      B: "Screwdriver",
      C: "Wrench",
      D: "Drill",
    },
    correctAnswer: "B",
    explanation:
      "A screwdriver has a shaped tip that fits into the head of a screw to allow the user to turn it.",
  },
  {
    id: 161,
    subject: "Creative Art",
    question:
      "The use of light and shadow in a painting to create the illusion of three-dimensional form is called:",
    options: {
      A: "Chiaroscuro",
      B: "Sfumato",
      C: "Foreshortening",
      D: "Impasto",
    },
    correctAnswer: "A",
    explanation:
      "Chiaroscuro is an artistic technique that uses strong tonal contrasts between light and dark to model three-dimensional forms, often for dramatic effect.",
  },
  {
    id: 162,
    subject: "Sports",
    question: "What is the main objective in the sport of archery?",
    options: {
      A: "To run the fastest",
      B: "To lift the heaviest weight",
      C: "To hit a target with an arrow",
      D: "To throw a disc the farthest",
    },
    correctAnswer: "C",
    explanation:
      "Archery is the sport, practice, or skill of using a bow to shoot arrows with the goal of hitting a specific target as accurately as possible.",
  },
  {
    id: 163,
    subject: "Mathematics",
    question:
      "What type of angle is greater than 90 degrees but less than 180 degrees?",
    options: {
      A: "Acute angle",
      B: "Right angle",
      C: "Obtuse angle",
      D: "Reflex angle",
    },
    correctAnswer: "C",
    explanation:
      "An obtuse angle is an angle that measures more than 90° and less than 180°. An acute angle is less than 90°, and a reflex angle is more than 180°.",
  },
  {
    id: 164,
    subject: "Social Studies",
    question:
      "The study of the Earth's physical features, atmosphere, and human activity is known as:",
    options: {
      A: "History",
      B: "Geology",
      C: "Geography",
      D: "Archaeology",
    },
    correctAnswer: "C",
    explanation:
      "Geography is a field of science devoted to the study of the lands, features, inhabitants, and phenomena of the Earth and planets.",
  },
  {
    id: 165,
    subject: "English",
    question: "A novel is a type of:",
    options: {
      A: "Poem",
      B: "Fictional prose narrative",
      C: "Short story",
      D: "Play",
    },
    correctAnswer: "B",
    explanation:
      "A novel is a relatively long work of narrative fiction, typically written in prose and published as a book.",
  },
  {
    id: 166,
    subject: "Kiswahili",
    question: "Neno gani halilandani na mengine? Paka, Mbwa, Kuku, Ng'ombe.",
    options: {
      A: "Paka",
      B: "Mbwa",
      C: "Kuku",
      D: "Ng'ombe",
    },
    correctAnswer: "C",
    explanation:
      "Paka, mbwa, na ng'ombe ni wanyama (mammals), ilhali kuku ni ndege (bird). Kwa hivyo, 'kuku' ndilo neno lisilolandana na mengine.",
  },
  {
    id: 167,
    subject: "Agriculture",
    question: "What is silviculture?",
    options: {
      A: "The practice of controlling the growth and quality of forests",
      B: "The cultivation of silk",
      C: "The study of soil",
      D: "The farming of silver carp",
    },
    correctAnswer: "A",
    explanation:
      "Silviculture is the practice of controlling the establishment, growth, composition, health, and quality of forests to meet diverse needs and values.",
  },
  {
    id: 168,
    subject: "Home Science",
    question:
      "What is the process of cleaning clothes using water and soap or detergent called?",
    options: {
      A: "Dry cleaning",
      B: "Ironing",
      C: "Laundering",
      D: "Starching",
    },
    correctAnswer: "C",
    explanation:
      "Laundering refers to the washing of clothing and other textiles. It typically involves using water and detergent.",
  },
  {
    id: 169,
    subject: "Pre-Technical Studies",
    question:
      "An isometric drawing is a type of 3D drawing that is set out using angles of:",
    options: {
      A: "90 degrees",
      B: "45 degrees",
      C: "30 degrees",
      D: "60 degrees",
    },
    correctAnswer: "C",
    explanation:
      "Isometric projection is a method for visually representing three-dimensional objects in two dimensions in which the three coordinate axes appear equally foreshortened and the angle between any two of them is 120 degrees, meaning vertical lines are vertical and horizontal lines are drawn at 30 degrees.",
  },
  {
    id: 170,
    subject: "Creative Art",
    question:
      "The material an artist uses, such as paint, clay, or pencil, is referred to as the:",
    options: {
      A: "Subject",
      B: "Medium",
      C: "Style",
      D: "Technique",
    },
    correctAnswer: "B",
    explanation:
      "In art, 'medium' refers to the materials that are used to create a work of art. The plural of medium is media.",
  },
  {
    id: 171,
    subject: "Sports",
    question: "Which of these is NOT an Olympic sport?",
    options: {
      A: "Fencing",
      B: "Cricket",
      C: "Archery",
      D: "Judo",
    },
    correctAnswer: "B",
    explanation:
      "Cricket was only part of the 1900 Summer Olympics. While there are discussions to reintroduce it, it is not currently an Olympic sport. Fencing, archery, and judo are all current Olympic sports.",
  },
  {
    id: 172,
    subject: "Mathematics",
    question:
      "If you flip a fair coin, what is the probability of getting heads?",
    options: {
      A: "1/2",
      B: "1/3",
      C: "1/4",
      D: "1",
    },
    correctAnswer: "A",
    explanation:
      "A fair coin has two possible outcomes: heads or tails. Each outcome is equally likely. The probability of getting heads is 1 (the number of desired outcomes) divided by 2 (the total number of outcomes), which is 1/2.",
  },
  {
    id: 173,
    subject: "Social Studies",
    question:
      "A system where a country maintains power over other countries or territories, often for economic gain, is called:",
    options: {
      A: "Federalism",
      B: "Socialism",
      C: "Colonialism",
      D: "Nationalism",
    },
    correctAnswer: "C",
    explanation:
      "Colonialism is the policy or practice of acquiring full or partial political control over another country, occupying it with settlers, and exploiting it economically.",
  },
  {
    id: 174,
    subject: "English",
    question:
      "A play on words that relies on a word having more than one meaning or sounding like another word is called a:",
    options: {
      A: "Pun",
      B: "Metaphor",
      C: "Simile",
      D: "Alliteration",
    },
    correctAnswer: "A",
    explanation:
      "A pun is a form of word play that exploits multiple meanings of a term, or of similar-sounding words, for an intended humorous or rhetorical effect.",
  },
  {
    id: 175,
    subject: "Kiswahili",
    question: "Sehemu ya mwisho ya hadithi huitwaje?",
    options: {
      A: "Mwanzo",
      B: "Kati",
      C: "Hitimisho",
      D: "Utangulizi",
    },
    correctAnswer: "C",
    explanation:
      "Sehemu ya mwisho wa hadithi, insha au hotuba, ambapo mambo yote yanakusanywa pamoja na kufikia tamati, huitwa hitimisho au tamati.",
  },
  {
    id: 176,
    subject: "Agriculture",
    question:
      "The practice of keeping and breeding fish in controlled environments is called:",
    options: {
      A: "Aquaculture",
      B: "Sericulture",
      C: "Apiculture",
      D: "Pisciculture",
    },
    correctAnswer: "D",
    explanation:
      "Pisciculture, or fish farming, is the principal form of aquaculture. It involves raising fish commercially in tanks or enclosures such as fish ponds.",
  },
  {
    id: 177,
    subject: "Home Science",
    question:
      "Which of these is a permanent stitch used for joining two pieces of fabric together?",
    options: {
      A: "Basting stitch",
      B: "Tacking stitch",
      C: "Backstitch",
      D: "Tailor's tacks",
    },
    correctAnswer: "C",
    explanation:
      "A backstitch is a strong, permanent hand-sewing stitch used for seams and to secure thread ends. Basting and tacking stitches are temporary.",
  },
  {
    id: 178,
    subject: "Pre-Technical Studies",
    question:
      "A lever is a simple machine consisting of a beam or rigid rod pivoted at a fixed hinge, or:",
    options: {
      A: "Fulcrum",
      B: "Axle",
      C: "Gear",
      D: "Pulley",
    },
    correctAnswer: "A",
    explanation:
      "A lever amplifies an input force to provide a greater output force. The fixed pivot point around which the lever rotates is called the fulcrum.",
  },
  {
    id: 179,
    subject: "Creative Art",
    question: "What is a 'kiln' used for in ceramics?",
    options: {
      A: "To mix clay",
      B: "To shape pottery on a wheel",
      C: "To fire clay objects at high temperatures to harden them",
      D: "To apply glaze",
    },
    correctAnswer: "C",
    explanation:
      "A kiln is a thermally insulated chamber, a type of oven, that produces temperatures sufficient to complete some process, such as hardening, drying, or chemical changes. In pottery, it is used to fire clay.",
  },
  {
    id: 180,
    subject: "Sports",
    question: "In athletics, what does the term 'PB' stand for?",
    options: {
      A: "Personal Best",
      B: "Penalty Box",
      C: "Passing Ball",
      D: "Player's Bench",
    },
    correctAnswer: "A",
    explanation:
      "PB stands for Personal Best, which is an individual's best-ever time or result in a specific event.",
  },
  {
    id: 181,
    subject: "Mathematics",
    question: "An angle that measures exactly 90 degrees is called a:",
    options: {
      A: "Acute angle",
      B: "Right angle",
      C: "Obtuse angle",
      D: "Straight angle",
    },
    correctAnswer: "B",
    explanation:
      "A right angle is an angle of exactly 90°, corresponding to a quarter turn.",
  },
  {
    id: 182,
    subject: "Social Studies",
    question:
      "The Renaissance was a period of 'rebirth' in art, science, and literature that began in which European country?",
    options: {
      A: "France",
      B: "Spain",
      C: "England",
      D: "Italy",
    },
    correctAnswer: "D",
    explanation:
      "The Renaissance was a fervent period of European cultural, artistic, political and economic 'rebirth' following the Middle Ages, generally described as taking place from the 14th century to the 17th century, originating in Italy.",
  },
  {
    id: 183,
    subject: "English",
    question:
      "What is the repetition of the same sound at the beginning of words in a sentence called?",
    options: {
      A: "Onomatopoeia",
      B: "Alliteration",
      C: "Assonance",
      D: "Hyperbole",
    },
    correctAnswer: "B",
    explanation:
      "Alliteration is the conspicuous repetition of identical initial consonant sounds in successive or closely associated syllables within a group of words, e.g., 'Peter Piper picked a peck of pickled peppers'.",
  },
  {
    id: 184,
    subject: "Kiswahili",
    question: "Ni mnyama gani anayeishi majini na nchi kavu?",
    options: {
      A: "Papa",
      B: "Kasa",
      C: "Samaki",
      D: "Nyangumi",
    },
    correctAnswer: "B",
    explanation:
      "Kasa (turtle/tortoise) ni mnyama ambaye anaweza kuishi majini (baharini/ziwani) na pia nchi kavu. Wanyama wengine walioorodheshwa huishi majini pekee.",
  },
  {
    id: 185,
    subject: "Agriculture",
    question:
      "Which of these is a tool used for digging holes for planting seedlings?",
    options: {
      A: "Rake",
      B: "Hoe",
      C: "Trowel",
      D: "Slasher",
    },
    correctAnswer: "C",
    explanation:
      "A trowel is a small handheld tool with a pointed, scoop-shaped metal blade and handle. It is used for breaking up earth, digging small holes, and mixing in fertilizer.",
  },
  {
    id: 186,
    subject: "Home Science",
    question:
      "What term describes the transfer of bacteria from a raw food item to a cooked food item?",
    options: {
      A: "Pasteurization",
      B: "Contamination",
      C: "Cross-contamination",
      D: "Fermentation",
    },
    correctAnswer: "C",
    explanation:
      "Cross-contamination is the physical movement or transfer of harmful bacteria from one person, object or place to another. It is a key factor in food poisoning.",
  },
  {
    id: 187,
    subject: "Pre-Technical Studies",
    question:
      "The process of wearing away metal by rubbing with an abrasive material is called:",
    options: {
      A: "Welding",
      B: "Forging",
      C: "Grinding",
      D: "Casting",
    },
    correctAnswer: "C",
    explanation:
      "Grinding is an abrasive machining process that uses a grinding wheel as the cutting tool to wear away material, producing a fine finish and very accurate dimensions.",
  },
  {
    id: 188,
    subject: "Creative Art",
    question:
      "The art and technique of arranging type to make written language legible, readable, and appealing when displayed is called:",
    options: {
      A: "Calligraphy",
      B: "Typography",
      C: "Illustration",
      D: "Etching",
    },
    correctAnswer: "B",
    explanation:
      "Typography involves the selection of typefaces, point sizes, line lengths, and spacing to create a visually appealing and readable text.",
  },
  {
    id: 189,
    subject: "Sports",
    question:
      "In tennis, what is the term for a serve that the receiver is unable to touch?",
    options: {
      A: "Fault",
      B: "Let",
      C: "Ace",
      D: "Volley",
    },
    correctAnswer: "C",
    explanation:
      "An ace is a legal serve that is not touched by the receiver, winning the point for the server.",
  },
  {
    id: 190,
    subject: "Mathematics",
    question: "What is the Greatest Common Divisor (GCD) of 12 and 18?",
    options: {
      A: "2",
      B: "3",
      C: "6",
      D: "12",
    },
    correctAnswer: "C",
    explanation:
      "The factors of 12 are 1, 2, 3, 4, 6, 12. The factors of 18 are 1, 2, 3, 6, 9, 18. The greatest factor they have in common is 6.",
  },
  {
    id: 191,
    subject: "Social Studies",
    question: "A formal agreement between two or more countries is known as a:",
    options: {
      A: "Constitution",
      B: "Law",
      C: "Treaty",
      D: "Decree",
    },
    correctAnswer: "C",
    explanation:
      "A treaty is a formally concluded and ratified agreement between states, binding under international law.",
  },
  {
    id: 192,
    subject: "English",
    question:
      "The sentence 'The quick brown fox jumps over the lazy dog' is an example of a pangram because it:",
    options: {
      A: "Is very long",
      B: "Contains every letter of the alphabet",
      C: "Is easy to remember",
      D: "Is a famous quote",
    },
    correctAnswer: "B",
    explanation:
      "A pangram is a sentence that contains all the letters of the alphabet at least once. It is often used to test typefaces and keyboards.",
  },
  {
    id: 193,
    subject: "Kiswahili",
    question: "Methali 'Maji yakimwagika hayazoleki' ina maana gani?",
    options: {
      A: "Ni vigumu kusafisha maji yaliyomwagika",
      B: "Jambo likiharibika ni vigumu kulirekebisha kama awali",
      C: "Usipende kumwaga maji",
      D: "Maji ni ya thamani sana",
    },
    correctAnswer: "B",
    explanation:
      "Methali hii inamaanisha kwamba pindi jambo linapoharibika, hasa sifa au heshima ya mtu, ni vigumu sana kulirudisha katika hali yake ya mwanzo.",
  },
  {
    id: 194,
    subject: "Agriculture",
    question: "A building where crops are stored after harvesting is called a:",
    options: {
      A: "Greenhouse",
      B: "Silo or Granary",
      C: "Barn",
      D: "Paddock",
    },
    correctAnswer: "B",
    explanation:
      "A granary or silo is a storehouse or repository for threshed grain. It is used to protect the harvest from pests and weather.",
  },
  {
    id: 195,
    subject: "Home Science",
    question:
      "Which of these is a common leavening agent used in baking to make cakes rise?",
    options: {
      A: "Salt",
      B: "Sugar",
      C: "Baking powder",
      D: "Flour",
    },
    correctAnswer: "C",
    explanation:
      "A leavening agent is a substance causing expansion of doughs and batters by the release of gases. Baking powder is a chemical leavener that releases carbon dioxide when mixed with liquid and exposed to heat.",
  },
  {
    id: 196,
    subject: "Pre-Technical Studies",
    question:
      "What is the process of shaping metal by heating it and then hammering it?",
    options: {
      A: "Casting",
      B: "Forging",
      C: "Milling",
      D: "Welding",
    },
    correctAnswer: "B",
    explanation:
      "Forging is a manufacturing process involving the shaping of metal using localized compressive forces. The blows are delivered with a hammer or a die.",
  },
  {
    id: 197,
    subject: "Creative Art",
    question:
      "A type of art that does not attempt to represent an accurate depiction of a visual reality but instead uses shapes, colors, forms, and gestural marks is known as:",
    options: {
      A: "Realism",
      B: "Impressionism",
      C: "Abstract art",
      D: "Surrealism",
    },
    correctAnswer: "C",
    explanation:
      "Abstract art uses a visual language of shape, form, color, and line to create a composition which may exist with a degree of independence from visual references in the world.",
  },
  {
    id: 198,
    subject: "Sports",
    question:
      "In golf, what is the term for completing a hole in one stroke less than par?",
    options: {
      A: "Eagle",
      B: "Birdie",
      C: "Bogey",
      D: "Par",
    },
    correctAnswer: "B",
    explanation:
      "A birdie is a score of one stroke under par on a hole. A score of two strokes under par is an eagle, and one stroke over par is a bogey.",
  },
  {
    id: 199,
    subject: "Mathematics",
    question: "A number that is a multiple of 2 is called an:",
    options: {
      A: "Odd number",
      B: "Even number",
      C: "Prime number",
      D: "Integer",
    },
    correctAnswer: "B",
    explanation:
      "An even number is an integer that is exactly divisible by 2. Examples include 2, 4, 6, 8, etc.",
  },
  {
    id: 200,
    subject: "Social Studies",
    question: "The head of government in the United Kingdom is known as the:",
    options: {
      A: "President",
      B: "Prime Minister",
      C: "King/Queen",
      D: "Chancellor",
    },
    correctAnswer: "B",
    explanation:
      "The Prime Minister is the head of Her Majesty's Government in the United Kingdom. The King or Queen is the head of state.",
  },
  {
    id: 201,
    subject: "English",
    question: "What is the past tense of the verb 'to lie' (as in to recline)?",
    options: {
      A: "Lied",
      B: "Lay",
      C: "Lain",
      D: "Layed",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'to lie' (recline) is irregular. Its principal parts are lie, lay, lain. For example, 'Yesterday, I lay on the couch.' The past tense of 'to lie' (tell a falsehood) is 'lied'.",
  },
  {
    id: 202,
    subject: "Kiswahili",
    question: "Mtu anayesimamia na kuongoza meli au jahazi anaitwa?",
    options: {
      A: "Nahodha",
      B: "Rubani",
      C: "Dereva",
      D: "Kondakta",
    },
    correctAnswer: "A",
    explanation:
      "Nahodha (captain) ndiye mkuu wa chombo cha majini kama vile meli. Rubani huendesha ndege na dereva huendesha gari.",
  },
  {
    id: 203,
    subject: "Agriculture",
    question: "The removal of some branches from a tree or shrub is called:",
    options: {
      A: "Weeding",
      B: "Thinning",
      C: "Pruning",
      D: "Grafting",
    },
    correctAnswer: "C",
    explanation:
      "Pruning is a horticultural and silvicultural practice involving the selective removal of certain parts of a plant, such as branches, buds, or roots.",
  },
  {
    id: 204,
    subject: "Home Science",
    question: "Which of these is a symptom of dehydration?",
    options: {
      A: "Clear urine",
      B: "Feeling energetic",
      C: "Thirst and dark yellow urine",
      D: "Moist skin",
    },
    correctAnswer: "C",
    explanation:
      "Dehydration occurs when you use or lose more fluid than you take in. Symptoms include thirst, dry mouth, tiredness, and dark-colored urine.",
  },
  {
    id: 205,
    subject: "Pre-Technical Studies",
    question:
      "A material that allows electricity to pass through it easily is called a/an:",
    options: {
      A: "Insulator",
      B: "Conductor",
      C: "Resistor",
      D: "Semiconductor",
    },
    correctAnswer: "B",
    explanation:
      "An electrical conductor is a substance in which electrical charge carriers, usually electrons, move easily from atom to atom with the application of voltage. Metals like copper and aluminum are good conductors.",
  },
  {
    id: 206,
    subject: "Creative Art",
    question:
      "A drawing technique in which areas of light and shadow are created using a pattern of parallel lines is called:",
    options: {
      A: "Stippling",
      B: "Hatching",
      C: "Blending",
      D: "Scribbling",
    },
    correctAnswer: "B",
    explanation:
      "Hatching is an artistic technique used to create tonal or shading effects by drawing closely spaced parallel lines. When lines are placed at an angle to one another, it is called cross-hatching.",
  },
  {
    id: 207,
    subject: "Sports",
    question: "In rugby, a try is scored by:",
    options: {
      A: "Kicking the ball through the posts",
      B: "Tackling an opponent in their end zone",
      C: "Grounding the ball in the opposition's in-goal area",
      D: "Passing the ball forward",
    },
    correctAnswer: "C",
    explanation:
      "A try is the primary method of scoring in rugby. It is scored by grounding the ball in the opponent's in-goal area (on or behind the goal line).",
  },
  {
    id: 208,
    subject: "Mathematics",
    question: "How many millimeters are in one meter?",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "10000",
    },
    correctAnswer: "C",
    explanation:
      "The metric system is based on powers of 10. There are 100 centimeters in a meter, and 10 millimeters in a centimeter. Therefore, 100 * 10 = 1000 millimeters in a meter.",
  },
  {
    id: 209,
    subject: "Social Studies",
    question:
      "The system of trade where goods are exchanged for other goods without using money is called:",
    options: {
      A: "Capitalism",
      B: "Barter",
      C: "Mercantilism",
      D: "Commerce",
    },
    correctAnswer: "B",
    explanation:
      "Barter is a system of exchange in which participants in a transaction directly exchange goods or services for other goods or services without using a medium of exchange, such as money.",
  },
  {
    id: 210,
    subject: "English",
    question:
      "What is the literary term for the time and place in which a story occurs?",
    options: {
      A: "Plot",
      B: "Theme",
      C: "Setting",
      D: "Conflict",
    },
    correctAnswer: "C",
    explanation:
      "The setting of a piece of literature is the time and place in which the story takes place. It can also include social statuses, weather, historical period, and details about immediate surroundings.",
  },
  {
    id: 211,
    subject: "Kiswahili",
    question: "Mnyama anayetumiwa kubeba mizigo hasa milimani ni?",
    options: {
      A: "Punda",
      B: "Ngamia",
      C: "Ng'ombe",
      D: "Mbuzi",
    },
    correctAnswer: "A",
    explanation:
      "Punda (donkey) ni mnyama anayejulikana kwa uwezo wake wa kubeba mizigo mizito na mara nyingi hutumika katika maeneo ya milima na njia nyembamba.",
  },
  {
    id: 212,
    subject: "Agriculture",
    question: "Which of the following is a direct effect of deforestation?",
    options: {
      A: "Increased soil fertility",
      B: "Improved air quality",
      C: "Soil erosion and loss of biodiversity",
      D: "Increased rainfall",
    },
    correctAnswer: "C",
    explanation:
      "Deforestation, the clearing of trees, removes the root systems that hold soil in place, leading to increased soil erosion. It also destroys habitats, causing a loss of biodiversity.",
  },
  {
    id: 213,
    subject: "Home Science",
    question:
      "A plan for a meal that is served at a specific time of day is called a:",
    options: {
      A: "Recipe",
      B: "Budget",
      C: "Menu",
      D: "Grocery list",
    },
    correctAnswer: "C",
    explanation:
      "A menu is a list of food and beverages available for purchase or to be served. It is used to plan meals for a day, week, or special occasion.",
  },
  {
    id: 214,
    subject: "Pre-Technical Studies",
    question: "Which type of screw has a cross-shaped slot in its head?",
    options: {
      A: "Slotted screw",
      B: "Phillips head screw",
      C: "Hex screw",
      D: "Torx screw",
    },
    correctAnswer: "B",
    explanation:
      "A Phillips head screw is identifiable by the cross-shaped recess in its head, designed to be driven by a Phillips screwdriver.",
  },
  {
    id: 215,
    subject: "Creative Art",
    question: "Which ancient civilization is famous for its pyramids?",
    options: {
      A: "Ancient Rome",
      B: "Ancient Greece",
      C: "Ancient Egypt",
      D: "Mesopotamia",
    },
    correctAnswer: "C",
    explanation:
      "The ancient Egyptians built pyramids as tombs for the pharaohs and their queens. The Giza pyramid complex is one of the most famous examples.",
  },
  {
    id: 216,
    subject: "Sports",
    question:
      "What is the maximum number of clubs a golfer is allowed to carry in their bag during a round?",
    options: {
      A: "10",
      B: "12",
      C: "14",
      D: "There is no limit",
    },
    correctAnswer: "C",
    explanation:
      "According to the official rules of golf, a player is not allowed to have more than 14 clubs in their bag during a competitive round.",
  },
  {
    id: 217,
    subject: "Mathematics",
    question: "What is the Lowest Common Multiple (LCM) of 4 and 6?",
    options: {
      A: "24",
      B: "12",
      C: "10",
      D: "2",
    },
    correctAnswer: "B",
    explanation:
      "Multiples of 4 are 4, 8, 12, 16, 20, 24... Multiples of 6 are 6, 12, 18, 24... The lowest multiple they have in common is 12.",
  },
  {
    id: 218,
    subject: "Social Studies",
    question: "What does a cartographer do?",
    options: {
      A: "Studies ancient artifacts",
      B: "Creates maps",
      C: "Studies weather patterns",
      D: "Governs a country",
    },
    correctAnswer: "B",
    explanation:
      "A cartographer is a person who is skilled in the art and science of cartography, which is the practice of drawing or creating maps.",
  },
  {
    id: 219,
    subject: "English",
    question:
      "A comparison between two unlike things using the words 'like' or 'as' is a:",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Alliteration",
    },
    correctAnswer: "B",
    explanation:
      "A simile is a figure of speech that directly compares two things. For example, 'She is as brave as a lion.'",
  },
  {
    id: 220,
    subject: "Kiswahili",
    question: "Kazi ya mwalimu ni kufunza, kazi ya daktari ni?",
    options: {
      A: "Kujenga",
      B: "Kuuza",
      C: "Kutibu",
      D: "Kulima",
    },
    correctAnswer: "C",
    explanation:
      "Kama vile kazi ya mwalimu ni kufunza wanafunzi, kazi ya daktari ni kutibu wagonjwa.",
  },
  {
    id: 221,
    subject: "Agriculture",
    question: "A young sheep is called a:",
    options: {
      A: "Calf",
      B: "Kid",
      C: "Lamb",
      D: "Foal",
    },
    correctAnswer: "C",
    explanation:
      "A young sheep is a lamb. A calf is a young cow, a kid is a young goat, and a foal is a young horse.",
  },
  {
    id: 222,
    subject: "Home Science",
    question:
      "The process of making food safe for consumption by heating it to a specific temperature for a set period is called:",
    options: {
      A: "Fermentation",
      B: "Pasteurization",
      C: "Homogenization",
      D: "Dehydration",
    },
    correctAnswer: "B",
    explanation:
      "Pasteurization is a process that kills pathogens in food and beverages, such as milk and juice, by heating them to a temperature that is high enough to kill most harmful bacteria.",
  },
  {
    id: 223,
    subject: "Pre-Technical Studies",
    question: "What is the unit of measurement for electrical resistance?",
    options: {
      A: "Volt",
      B: "Ampere",
      C: "Watt",
      D: "Ohm",
    },
    correctAnswer: "D",
    explanation:
      "The Ohm (symbol: Ω) is the SI derived unit of electrical resistance. Voltage is measured in Volts, current in Amperes, and power in Watts.",
  },
  {
    id: 224,
    subject: "Creative Art",
    question:
      "A quick, unrefined drawing made to capture the essentials of a subject is known as a:",
    options: {
      A: "Masterpiece",
      B: "Sketch",
      C: "Blueprint",
      D: "Fresco",
    },
    correctAnswer: "B",
    explanation:
      "A sketch is a rapidly executed freehand drawing that is not usually intended as a finished work. It is often used to practice or to record an idea for later use.",
  },
  {
    id: 225,
    subject: "Sports",
    question: "Which of these martial arts originated in Korea?",
    options: {
      A: "Judo",
      B: "Karate",
      C: "Kung Fu",
      D: "Taekwondo",
    },
    correctAnswer: "D",
    explanation:
      "Taekwondo is a Korean martial art, characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques. Judo and Karate are from Japan, and Kung Fu is from China.",
  },
  {
    id: 226,
    subject: "Mathematics",
    question: "In the number 5,834, what is the place value of the digit 8?",
    options: {
      A: "Tens",
      B: "Hundreds",
      C: "Thousands",
      D: "Ones",
    },
    correctAnswer: "B",
    explanation:
      "In the number 5,834, the digit 4 is in the ones place, 3 is in the tens place, 8 is in the hundreds place, and 5 is in the thousands place.",
  },
  {
    id: 227,
    subject: "Social Studies",
    question: "What is the name of the galaxy that contains our Solar System?",
    options: {
      A: "Andromeda Galaxy",
      B: "Triangulum Galaxy",
      C: "Milky Way Galaxy",
      D: "Whirlpool Galaxy",
    },
    correctAnswer: "C",
    explanation:
      "The Milky Way is the galaxy that includes our Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky.",
  },
  {
    id: 228,
    subject: "English",
    question:
      "A word formed from the initial letters of other words (e.g., NASA) is called an:",
    options: {
      A: "Abbreviation",
      B: "Acronym",
      C: "Antonym",
      D: "Allusion",
    },
    correctAnswer: "B",
    explanation:
      "An acronym is an abbreviation formed from the initial letters of other words and pronounced as a word (e.g., NASA, NATO).",
  },
  {
    id: 229,
    subject: "Kiswahili",
    question: "Nyumba ya ndege huitwaje?",
    options: {
      A: "Pango",
      B: "Zizi",
      C: "Tundu",
      D: "Kiota",
    },
    correctAnswer: "D",
    explanation:
      "Makazi ya ndege, ambapo hutaga mayai na kulea makinda yake, huitwa kiota. Zizi ni la ng'ombe au mbuzi na pango ni makazi ya wanyama wakubwa zaidi kama simba.",
  },
  {
    id: 230,
    subject: "Agriculture",
    question: "Which of these is a root vegetable?",
    options: {
      A: "Cabbage",
      B: "Spinach",
      C: "Carrot",
      D: "Broccoli",
    },
    correctAnswer: "C",
    explanation:
      "A root vegetable is a plant root used as a vegetable. Carrots are taproots. Cabbage, spinach and broccoli are leaf or flower vegetables.",
  },
  {
    id: 231,
    subject: "Home Science",
    question: "What is the most important rule of first aid?",
    options: {
      A: "To move the injured person immediately",
      B: "To ensure the safety of yourself and the casualty",
      C: "To give the person food and water",
      D: "To wait for a doctor to arrive",
    },
    correctAnswer: "B",
    explanation:
      "The first and most critical rule in any first aid situation is to assess the scene for dangers to ensure your own safety, the safety of bystanders, and the safety of the injured person before providing help.",
  },
  {
    id: 232,
    subject: "Pre-Technical Studies",
    question: "Which of the following is an example of a third-class lever?",
    options: {
      A: "A seesaw",
      B: "A wheelbarrow",
      C: "A pair of tweezers",
      D: "A crowbar",
    },
    correctAnswer: "C",
    explanation:
      "In a third-class lever, the effort is applied between the fulcrum and the load. A pair of tweezers is an example, where the fulcrum is at the joined end, the effort is in the middle where you squeeze, and the load is at the tip.",
  },
  {
    id: 233,
    subject: "Creative Art",
    question:
      "The Japanese art of folding paper into decorative shapes and figures is known as:",
    options: {
      A: "Origami",
      B: "Ikebana",
      C: "Bonsai",
      D: "Kirigami",
    },
    correctAnswer: "A",
    explanation:
      "Origami is the art of paper folding, which is often associated with Japanese culture. Ikebana is the art of flower arrangement, and bonsai is the art of growing miniature trees.",
  },
  {
    id: 234,
    subject: "Sports",
    question:
      "In cricket, a batsman is 'out' if the ball hits the wickets. What are the small pieces on top of the wickets called?",
    options: {
      A: "Stumps",
      B: "Bails",
      C: "Pegs",
      D: "Caps",
    },
    correctAnswer: "B",
    explanation:
      "A wicket consists of three stumps, which are wooden posts, with two small pieces of wood called bails balanced on top. The wicket is considered 'broken' if at least one bail is dislodged.",
  },
  {
    id: 235,
    subject: "Mathematics",
    question: "A two-dimensional shape with four sides is generally called a:",
    options: {
      A: "Triangle",
      B: "Pentagon",
      C: "Quadrilateral",
      D: "Hexagon",
    },
    correctAnswer: "C",
    explanation:
      "A quadrilateral is a polygon with four edges (sides) and four vertices (corners). Squares, rectangles, and rhombuses are all types of quadrilaterals.",
  },
  {
    id: 236,
    subject: "Social Studies",
    question:
      "What is the term for a country's official song, used to inspire patriotism?",
    options: {
      A: "National Anthem",
      B: "Folk Song",
      C: "Pop Song",
      D: "National Motto",
    },
    correctAnswer: "A",
    explanation:
      "A national anthem is a patriotic musical composition symbolizing and evoking eulogies of the history and traditions of a country or its people.",
  },
  {
    id: 237,
    subject: "English",
    question: "A story written to be performed by actors on a stage is a:",
    options: {
      A: "Novel",
      B: "Poem",
      C: "Play",
      D: "Short story",
    },
    correctAnswer: "C",
    explanation:
      "A play is a form of literature written by a playwright, usually consisting of dialogue or singing between characters, intended for theatrical performance rather than just reading.",
  },
  {
    id: 238,
    subject: "Kiswahili",
    question:
      "Neno 'chai' liliingia katika lugha ya Kiswahili kutoka lugha gani?",
    options: {
      A: "Kiarabu",
      B: "Kireno",
      C: "Kiajemi (Persian)",
      D: "Kihindi",
    },
    correctAnswer: "C",
    explanation:
      "Maneno mengi ya Kiswahili yamekopa kutoka lugha nyingine. Neno 'chai' ni mkopo kutoka lugha ya Kiajemi (Persian).",
  },
  {
    id: 239,
    subject: "Agriculture",
    question:
      "A period of prolonged, abnormally low rainfall, leading to a shortage of water is a:",
    options: {
      A: "Flood",
      B: "Monsoon",
      C: "Drought",
      D: "Tsunami",
    },
    correctAnswer: "C",
    explanation:
      "A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water.",
  },
  {
    id: 240,
    subject: "Home Science",
    question:
      "Which sewing tool is used for measuring short distances, such as hems and seams?",
    options: {
      A: "Tape measure",
      B: "Yardstick",
      C: "Seam gauge",
      D: "Ruler",
    },
    correctAnswer: "C",
    explanation:
      "A seam gauge is a small ruler with a sliding marker, designed for measuring small, specific distances accurately, making it ideal for tasks like marking hems or buttonhole spacing.",
  },
  {
    id: 241,
    subject: "Pre-Technical Studies",
    question: "What is the purpose of treads on a car tire?",
    options: {
      A: "To make the tire look good",
      B: "To increase the tire's weight",
      C: "To increase friction and remove water from the road surface",
      D: "To make the ride smoother",
    },
    correctAnswer: "C",
    explanation:
      "Tire treads are the grooves on the tire's surface that provide grip by increasing friction and channeling water away from the contact patch between the tire and the road, especially in wet conditions.",
  },
  {
    id: 242,
    subject: "Creative Art",
    question: "Which color is NOT a secondary color?",
    options: {
      A: "Green",
      B: "Orange",
      C: "Violet",
      D: "Yellow",
    },
    correctAnswer: "D",
    explanation:
      "Secondary colors are made by mixing two primary colors. Green (blue + yellow), Orange (yellow + red), and Violet (red + blue) are secondary colors. Yellow is a primary color.",
  },
  {
    id: 243,
    subject: "Sports",
    question:
      "A standard game of football (soccer) is played for how many minutes?",
    options: {
      A: "60 minutes",
      B: "80 minutes",
      C: "90 minutes",
      D: "120 minutes",
    },
    correctAnswer: "C",
    explanation:
      "A standard adult football match consists of two halves of 45 minutes each, for a total of 90 minutes of playing time, plus any added stoppage time.",
  },
  {
    id: 244,
    subject: "Mathematics",
    question:
      "A part of a line that has one endpoint and continues infinitely in one direction is called a:",
    options: {
      A: "Line segment",
      B: "Ray",
      C: "Point",
      D: "Line",
    },
    correctAnswer: "B",
    explanation:
      "A ray is a portion of a line which starts at a point and goes off in a particular direction to infinity. A line segment has two endpoints.",
  },
  {
    id: 245,
    subject: "Social Studies",
    question:
      "What is the name for the system of government in which a king or queen rules?",
    options: {
      A: "Democracy",
      B: "Republic",
      C: "Monarchy",
      D: "Oligarchy",
    },
    correctAnswer: "C",
    explanation:
      "A monarchy is a form of government in which a person, the monarch, is head of state for life or until abdication. The political legitimacy and authority of the monarch may vary from restricted to largely symbolic.",
  },
  {
    id: 246,
    subject: "English",
    question:
      "Which of these is a coordinating conjunction, often remembered by the acronym FANBOYS?",
    options: {
      A: "Although",
      B: "Because",
      C: "But",
      D: "Since",
    },
    correctAnswer: "C",
    explanation:
      "The coordinating conjunctions are For, And, Nor, But, Or, Yet, So (FANBOYS). They connect words, phrases, and clauses of equal grammatical rank.",
  },
  {
    id: 247,
    subject: "Kiswahili",
    question: "Kisawe cha neno 'rafiki' ni?",
    options: {
      A: "Adui",
      B: "Jirani",
      C: "Mwandani",
      D: "Ndugu",
    },
    correctAnswer: "C",
    explanation:
      "Kisawe (synonym) ni neno lenye maana sawa au inayokaribiana na neno lingine. 'Mwandani' ni neno lingine linalomaanisha rafiki wa karibu.",
  },
  {
    id: 248,
    subject: "Agriculture",
    question: "A female chicken is called a:",
    options: {
      A: "Rooster",
      B: "Hen",
      C: "Chick",
      D: "Drake",
    },
    correctAnswer: "B",
    explanation:
      "A hen is an adult female chicken. A rooster is an adult male, a chick is a young chicken, and a drake is an adult male duck.",
  },
  {
    id: 249,
    subject: "Home Science",
    question:
      "What is the main reason for including vegetables in a daily diet?",
    options: {
      A: "They are a primary source of protein",
      B: "They are rich in vitamins, minerals, and fiber",
      C: "They are high in unhealthy fats",
      D: "They provide a lot of sugar for energy",
    },
    correctAnswer: "B",
    explanation:
      "Vegetables are packed with essential nutrients like vitamins (e.g., Vitamin A, C) and minerals (e.g., potassium), as well as dietary fiber, which is important for digestive health.",
  },
  {
    id: 250,
    subject: "Pre-Technical Studies",
    question:
      "In a simple electrical circuit, what provides the energy or 'push' for the electrons?",
    options: {
      A: "The wire",
      B: "The switch",
      C: "The load (e.g., a light bulb)",
      D: "The power source (e.g., a battery)",
    },
    correctAnswer: "D",
    explanation:
      "The power source, such as a battery or generator, provides the voltage (electrical potential difference) that creates an electric field, pushing the electrons to flow through the circuit.",
  },
  {
    id: 251,
    subject: "Creative Art",
    question: "The three-dimensional element of art that encloses volume is:",
    options: {
      A: "Shape",
      B: "Form",
      C: "Line",
      D: "Space",
    },
    correctAnswer: "B",
    explanation:
      "Form is an element of art that is three-dimensional (height, width, and depth) and encloses volume. For example, a sphere, cube, or pyramid. Shape is two-dimensional.",
  },
  {
    id: 252,
    subject: "Sports",
    question: "Which country won the first ever FIFA World Cup in 1930?",
    options: {
      A: "Brazil",
      B: "Argentina",
      C: "Italy",
      D: "Uruguay",
    },
    correctAnswer: "D",
    explanation:
      "The first FIFA World Cup was held in 1930 and was hosted by Uruguay. Uruguay defeated Argentina 4-2 in the final to become the first world champions.",
  },
  {
    id: 253,
    subject: "Mathematics",
    question: "How many sides does a hexagon have?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    correctAnswer: "B",
    explanation: "A hexagon is a polygon with six sides and six angles.",
  },
  {
    id: 254,
    subject: "Social Studies",
    question: "What is the name for the large landmasses on Earth?",
    options: {
      A: "Oceans",
      B: "Countries",
      C: "Continents",
      D: "Islands",
    },
    correctAnswer: "C",
    explanation:
      "A continent is one of Earth's several very large landmasses. The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
  },
  {
    id: 255,
    subject: "English",
    question: "A story with a sad or tragic ending is known as a:",
    options: {
      A: "Comedy",
      B: "Tragedy",
      C: "Farce",
      D: "Satire",
    },
    correctAnswer: "B",
    explanation:
      "In literature, a tragedy is a genre of story in which the protagonist is brought to ruin or suffers extreme sorrow, especially as a consequence of a tragic flaw, moral weakness, or inability to cope with unfavorable circumstances.",
  },
  {
    id: 256,
    subject: "Kiswahili",
    question: "Mtu anayetengeneza viatu anaitwa?",
    options: {
      A: "Mshonaji",
      B: "Seremala",
      C: "Mhunzi",
      D: "Kiriri",
    },
    correctAnswer: "D",
    explanation:
      "Mtu ambaye kazi yake ni kutengeneza au kukarabati viatu anaitwa kiriri au mshona viatu. Mshonaji hushona nguo.",
  },
  {
    id: 257,
    subject: "Agriculture",
    question: "The process by which a seed grows into a plant is called:",
    options: {
      A: "Pollination",
      B: "Photosynthesis",
      C: "Germination",
      D: "Transpiration",
    },
    correctAnswer: "C",
    explanation:
      "Germination is the process by which an organism grows from a seed or similar structure. The most common example is the sprouting of a seedling from a seed of a flowering plant.",
  },
  {
    id: 258,
    subject: "Home Science",
    question:
      "Which kitchen utensil is used for beating, whipping, or mixing ingredients?",
    options: {
      A: "Spatula",
      B: "Ladle",
      C: "Whisk",
      D: "Colander",
    },
    correctAnswer: "C",
    explanation:
      "A whisk is a cooking utensil which can be used to blend ingredients smooth or to incorporate air into a mixture, in a process known as whisking or whipping.",
  },
  {
    id: 259,
    subject: "Pre-Technical Studies",
    question:
      "A plan view in an orthographic projection shows an object as seen from:",
    options: {
      A: "The front",
      B: "The side",
      C: "Above",
      D: "Below",
    },
    correctAnswer: "C",
    explanation:
      "Orthographic projection typically consists of three views: a front view, a side view, and a plan view (or top view). The plan view shows the object as if you were looking directly down on it.",
  },
  {
    id: 260,
    subject: "Creative Art",
    question:
      "The position or arrangement of the parts of a subject in a painting or sculpture is known as the:",
    options: {
      A: "Composition",
      B: "Palette",
      C: "Canvas",
      D: "Medium",
    },
    correctAnswer: "A",
    explanation:
      "Composition is the placement or arrangement of visual elements or 'ingredients' in a work of art, as distinct from the subject of a work. It is the organization of the elements of art according to the principles of art.",
  },
  {
    id: 261,
    subject: "Sports",
    question: "In athletics, a relay race is won by the team whose:",
    options: {
      A: "First runner is the fastest",
      B: "Runners have the best style",
      C: "Last runner crosses the finish line first with the baton",
      D: "Baton is the newest",
    },
    correctAnswer: "C",
    explanation:
      "A relay race is a track and field event in which teams of runners compete, passing a baton to the next runner. The race is won when the final runner of a team crosses the finish line holding the baton.",
  },
  {
    id: 262,
    subject: "Mathematics",
    question: "What is the area of a rectangle with length 8m and width 4m?",
    options: {
      A: "12 m²",
      B: "24 m²",
      C: "32 m²",
      D: "16 m²",
    },
    correctAnswer: "C",
    explanation:
      "The area of a rectangle is calculated by multiplying its length by its width. Area = 8m * 4m = 32 square meters (m²).",
  },
  {
    id: 263,
    subject: "Social Studies",
    question:
      "Lines on a map that connect points of equal elevation are called:",
    options: {
      A: "Latitude lines",
      B: "Longitude lines",
      C: "Contour lines",
      D: "Isobars",
    },
    correctAnswer: "C",
    explanation:
      "Contour lines are used on topographic maps to show the shape of the land. The closer the lines are together, the steeper the slope.",
  },
  {
    id: 264,
    subject: "English",
    question:
      "A word that imitates the sound it describes, like 'buzz' or 'hiss', is an example of:",
    options: {
      A: "Onomatopoeia",
      B: "Alliteration",
      C: "Simile",
      D: "Metaphor",
    },
    correctAnswer: "A",
    explanation:
      "Onomatopoeia is the process of creating a word that phonetically imitates, resembles, or suggests the sound that it describes.",
  },
  {
    id: 265,
    subject: "Kiswahili",
    question: "Chagua neno ambalo ni nomino ya pekee (proper noun).",
    options: {
      A: "Mji",
      B: "Mto",
      C: "Nairobi",
      D: "Nchi",
    },
    correctAnswer: "C",
    explanation:
      "Nomino ya pekee ni jina maalum la mtu, mahali, au kitu. 'Nairobi' ni jina maalum la mji. 'Mji', 'mto', na 'nchi' ni nomino za kawaida (common nouns).",
  },
  {
    id: 266,
    subject: "Agriculture",
    question:
      "A place where young plants are raised for planting elsewhere is called a:",
    options: {
      A: "Field",
      B: "Nursery",
      C: "Garden",
      D: "Orchard",
    },
    correctAnswer: "B",
    explanation:
      "A plant nursery is a place where plants are propagated and grown to a desired age for transplanting, for use as stock for budding and grafting, or for sale.",
  },
  {
    id: 267,
    subject: "Home Science",
    question:
      "Which of these is a common method of food preservation that involves removing water?",
    options: {
      A: "Canning",
      B: "Freezing",
      C: "Drying (Dehydration)",
      D: "Pickling",
    },
    correctAnswer: "C",
    explanation:
      "Drying is one of the oldest methods of food preservation. It works by removing water (moisture) from the food, which inhibits the growth of bacteria, yeasts, and mold.",
  },
  {
    id: 268,
    subject: "Pre-Technical Studies",
    question:
      "Which of these hand tools is used to smooth the surface of wood?",
    options: {
      A: "Saw",
      B: "Chisel",
      C: "Plane",
      D: "Drill",
    },
    correctAnswer: "C",
    explanation:
      "A plane is a tool for shaping wood using muscle power to force the cutting blade over the wood surface. It is used to flatten, reduce the thickness of, and impart a smooth surface to a rough piece of lumber.",
  },
  {
    id: 269,
    subject: "Creative Art",
    question:
      "A color created by mixing a primary color with a secondary color is called a:",
    options: {
      A: "Primary color",
      B: "Tertiary color",
      C: "Complementary color",
      D: "Analogous color",
    },
    correctAnswer: "B",
    explanation:
      "Tertiary colors (or intermediate colors) are made by mixing a primary color with a neighboring secondary color on the color wheel (e.g., red-orange or blue-green).",
  },
  {
    id: 270,
    subject: "Sports",
    question:
      "The sport of fencing involves combat using which type of equipment?",
    options: {
      A: "Bows and arrows",
      B: "Bladed weapons (swords)",
      C: "Sticks",
      D: "Bare hands",
    },
    correctAnswer: "B",
    explanation:
      "Fencing is a combat sport that involves fighting with swords—namely the foil, épée, and sabre—under a set of rules.",
  },
  {
    id: 271,
    subject: "Mathematics",
    question: "A flat surface that extends infinitely in all directions is a:",
    options: {
      A: "Point",
      B: "Line",
      C: "Plane",
      D: "Solid",
    },
    correctAnswer: "C",
    explanation:
      "In mathematics, a plane is a flat, two-dimensional surface that extends indefinitely. It is one of the basic, undefined terms in geometry.",
  },
  {
    id: 272,
    subject: "Social Studies",
    question:
      "A document that outlines the fundamental principles and laws of a nation, and guarantees certain rights to its citizens, is called a:",
    options: {
      A: "Treaty",
      B: "Manifesto",
      C: "Declaration",
      D: "Constitution",
    },
    correctAnswer: "D",
    explanation:
      "A constitution is an aggregate of fundamental principles or established precedents that constitute the legal basis of a polity, organisation or other type of entity and commonly determine how that entity is to be governed.",
  },
  {
    id: 273,
    subject: "English",
    question: "The person who writes a book, article, or other text is the:",
    options: {
      A: "Illustrator",
      B: "Publisher",
      C: "Author",
      D: "Editor",
    },
    correctAnswer: "C",
    explanation:
      "An author is the writer of a book, article, play, or other written work.",
  },
  {
    id: 274,
    subject: "Kiswahili",
    question: "Msemo 'kuvunja mkono' una maana gani?",
    options: {
      A: "Kuumia mkono",
      B: "Kukata tamaa",
      C: "Kutoa zawadi au shukrani",
      D: "Kuacha kazi",
    },
    correctAnswer: "C",
    explanation:
      "'Kuvunja mkono' ni nahau inayomaanisha kumpa mtu kitu kidogo, kama vile pesa au zawadi, kama ishara ya shukrani kwa kazi aliyoifanya.",
  },
  {
    id: 275,
    subject: "Agriculture",
    question:
      "The practice of growing plants in an air or mist environment without the use of soil is called:",
    options: {
      A: "Hydroponics",
      B: "Geoponics",
      C: "Aeroponics",
      D: "Aquaponics",
    },
    correctAnswer: "C",
    explanation:
      "Aeroponics is the process of growing plants with their roots suspended in the air within a closed environment, receiving nutrients from a fine mist of nutrient solution.",
  },
  {
    id: 276,
    subject: "Home Science",
    question:
      "Which type of nutrient helps the body absorb vitamins A, D, E, and K?",
    options: {
      A: "Carbohydrates",
      B: "Proteins",
      C: "Fats",
      D: "Water",
    },
    correctAnswer: "C",
    explanation:
      "Vitamins A, D, E, and K are fat-soluble vitamins, meaning they can only be absorbed by the body in the presence of fats from the diet.",
  },
  {
    id: 277,
    subject: "Pre-Technical Studies",
    question:
      "In technical drawing, a thick, continuous line is typically used for:",
    options: {
      A: "Hidden outlines",
      B: "Dimension lines",
      C: "Visible outlines and edges",
      D: "Center lines",
    },
    correctAnswer: "C",
    explanation:
      "According to drawing standards, thick continuous lines are used to represent the visible outlines and edges of an object, making them stand out clearly.",
  },
  {
    id: 278,
    subject: "Creative Art",
    question:
      "What is the name for a large painting applied directly onto a wall or ceiling?",
    options: {
      A: "Easel painting",
      B: "Mural",
      C: "Tapestry",
      D: "Portrait",
    },
    correctAnswer: "B",
    explanation:
      "A mural is any piece of artwork painted or applied directly on a wall, ceiling or other permanent surfaces. Fresco is one type of mural painting technique.",
  },
  {
    id: 279,
    subject: "Sports",
    question:
      "The Tour de France is a famous annual multi-stage race in which sport?",
    options: {
      A: "Running",
      B: "Cycling",
      C: "Motorsport",
      D: "Sailing",
    },
    correctAnswer: "B",
    explanation:
      "The Tour de France is an annual men's multiple-stage bicycle race primarily held in France, while also occasionally passing through nearby countries.",
  },
  {
    id: 280,
    subject: "Mathematics",
    question: "If x = 4, what is the value of 5x - 3?",
    options: {
      A: "17",
      B: "23",
      C: "6",
      D: "12",
    },
    correctAnswer: "A",
    explanation:
      "Substitute the value of x into the expression. 5 * (4) - 3 = 20 - 3 = 17.",
  },
  {
    id: 281,
    subject: "Social Studies",
    question: "The equator is a line of:",
    options: {
      A: "Longitude",
      B: "Latitude",
      C: "Altitude",
      D: "Attitude",
    },
    correctAnswer: "B",
    explanation:
      "Lines of latitude are imaginary lines that run horizontally around the Earth, parallel to the equator. The equator is the 0° line of latitude.",
  },
  {
    id: 282,
    subject: "English",
    question:
      "A poem of fourteen lines using any of a number of formal rhyme schemes is called a:",
    options: {
      A: "Haiku",
      B: "Limerick",
      C: "Sonnet",
      D: "Ballad",
    },
    correctAnswer: "C",
    explanation:
      "A sonnet is a fourteen-line poem written in iambic pentameter, which employs one of several rhyme schemes and adheres to a tightly structured thematic organization. Shakespearean and Petrarchan are two famous sonnet forms.",
  },
  {
    id: 283,
    subject: "Kiswahili",
    question:
      "Katika sentensi, 'Juma anapenda kusoma vitabu', neno 'vitabu' ni nini?",
    options: {
      A: "Kitenzi (Verb)",
      B: "Kivumishi (Adjective)",
      C: "Nomino (Noun)",
      D: "Kielezi (Adverb)",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'vitabu' ni nomino; ni jina la kitu. Katika sentensi hii, linafanya kazi kama mtendwa (object) wa kitenzi 'kusoma'.",
  },
  {
    id: 284,
    subject: "Agriculture",
    question: "Which of the following is considered a cereal crop?",
    options: {
      A: "Beans",
      B: "Wheat",
      C: "Tomatoes",
      D: "Cabbage",
    },
    correctAnswer: "B",
    explanation:
      "A cereal is any grass cultivated for the edible components of its grain. Wheat, maize (corn), rice, and barley are common examples of cereal crops.",
  },
  {
    id: 285,
    subject: "Home Science",
    question:
      "The regular pattern of meals eaten throughout the day is known as a:",
    options: {
      A: "Dietary habit",
      B: "Meal pattern",
      C: "Nutrition plan",
      D: "Food guide",
    },
    correctAnswer: "B",
    explanation:
      "A meal pattern refers to the customary sequence and timing of meals and snacks in a day, such as breakfast, lunch, and dinner.",
  },
  {
    id: 286,
    subject: "Pre-Technical Studies",
    question:
      "A screwdriver with a flat-bladed tip is used for which type of screw?",
    options: {
      A: "Phillips head",
      B: "Slotted head",
      C: "Hex head",
      D: "Torx head",
    },
    correctAnswer: "B",
    explanation:
      "A slotted screwdriver has a flat, wedge-shaped tip that fits into a single, straight slot on the head of a screw.",
  },
  {
    id: 287,
    subject: "Creative Art",
    question:
      "The relative size of one object in relation to another is known as:",
    options: {
      A: "Scale",
      B: "Balance",
      C: "Rhythm",
      D: "Emphasis",
    },
    correctAnswer: "A",
    explanation:
      "Scale is a principle of art that refers to the size of an object in relationship to another object. It can be used to create emphasis or a sense of depth.",
  },
  {
    id: 288,
    subject: "Sports",
    question: "What is the name for the area where a baseball game is played?",
    options: {
      A: "A pitch",
      B: "A court",
      C: "A rink",
      D: "A diamond",
    },
    correctAnswer: "D",
    explanation:
      "A baseball field, also called a ball field or a baseball diamond, is the field upon which the game of baseball is played.",
  },
  {
    id: 289,
    subject: "Mathematics",
    question: "What is the volume of a cube with a side length of 3 cm?",
    options: {
      A: "9 cm³",
      B: "12 cm³",
      C: "27 cm³",
      D: "18 cm³",
    },
    correctAnswer: "C",
    explanation:
      "The volume of a cube is calculated by cubing the side length (V = s³). So, Volume = 3 cm * 3 cm * 3 cm = 27 cubic centimeters (cm³).",
  },
  {
    id: 290,
    subject: "Social Studies",
    question: "The Prime Meridian runs through which city?",
    options: {
      A: "Paris, France",
      B: "New York, USA",
      C: "Greenwich, England",
      D: "Rome, Italy",
    },
    correctAnswer: "C",
    explanation:
      "The Prime Meridian is the line of 0° longitude. By international agreement, it passes through the Royal Observatory in Greenwich, London, UK.",
  },
  {
    id: 291,
    subject: "English",
    question:
      "The use of 'you', 'your', and 'yours' indicates which point of view in writing?",
    options: {
      A: "First person",
      B: "Second person",
      C: "Third person limited",
      D: "Third person omniscient",
    },
    correctAnswer: "B",
    explanation:
      "Second-person point of view is a narrative mode in which the protagonist or another main character is referred to by second-person personal pronouns and other kinds of addressing forms, for example the English second-person pronoun 'you'.",
  },
  {
    id: 292,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'nenda' ni?",
    options: {
      A: "Rudi",
      B: "Simama",
      C: "Kaa",
      D: "Njoo",
    },
    correctAnswer: "D",
    explanation:
      "'Nenda' ni amri ya kwenda (go). Kinyume chake ni amri ya kuja (come), ambayo ni 'njoo'. 'Rudi' inamaanisha (return).",
  },
  {
    id: 293,
    subject: "Agriculture",
    question: "A domestic pig is also known as a:",
    options: {
      A: "Sow",
      B: "Boar",
      C: "Swine",
      D: "Piglet",
    },
    correctAnswer: "C",
    explanation:
      "Swine is a general term for all types of domestic pigs. A sow is an adult female, a boar is an adult male, and a piglet is a young pig.",
  },
  {
    id: 294,
    subject: "Home Science",
    question:
      "Good personal hygiene includes which of the following practices?",
    options: {
      A: "Wearing the same clothes for several days",
      B: "Bathing regularly and washing hands",
      C: "Sharing personal items like toothbrushes",
      D: "Not covering your mouth when you cough",
    },
    correctAnswer: "B",
    explanation:
      "Personal hygiene involves keeping the body clean to maintain health and prevent the spread of diseases. Regular bathing and hand washing are fundamental aspects of good hygiene.",
  },
  {
    id: 295,
    subject: "Pre-Technical Studies",
    question:
      "A simple machine that uses a grooved wheel and a rope to lift heavy objects is a:",
    options: {
      A: "Lever",
      B: "Wedge",
      C: "Screw",
      D: "Pulley",
    },
    correctAnswer: "D",
    explanation:
      "A pulley is a wheel on an axle or shaft that is designed to support movement and change of direction of a taut cable or belt, or transfer of power between the shaft and cable or belt.",
  },
  {
    id: 296,
    subject: "Creative Art",
    question:
      "Colors that are opposite each other on the color wheel are called:",
    options: {
      A: "Analogous colors",
      B: "Complementary colors",
      C: "Primary colors",
      D: "Monochromatic colors",
    },
    correctAnswer: "B",
    explanation:
      "Complementary colors are pairs of colors which, when combined or mixed, cancel each other out (lose hue) by producing a grayscale color like white or black. Examples include red and green, or blue and orange.",
  },
  {
    id: 297,
    subject: "Sports",
    question:
      "The term 'Grand Slam' in tennis refers to winning which four major tournaments in a calendar year?",
    options: {
      A: "Wimbledon, US Open, French Open, Davis Cup",
      B: "Australian Open, French Open, Wimbledon, US Open",
      C: "Indian Wells, Miami Open, Wimbledon, US Open",
      D: "ATP Finals, Wimbledon, French Open, Australian Open",
    },
    correctAnswer: "B",
    explanation:
      "The four major tennis tournaments, known as the 'majors' or 'Grand Slams', are the Australian Open, the French Open (Roland Garros), Wimbledon, and the US Open. Winning all four in the same year is a calendar-year Grand Slam.",
  },
  {
    id: 298,
    subject: "Mathematics",
    question: "What is the Roman numeral for 50?",
    options: {
      A: "C",
      B: "D",
      C: "X",
      D: "L",
    },
    correctAnswer: "D",
    explanation:
      "In Roman numerals, L represents 50, C represents 100, and D represents 500.",
  },
  {
    id: 299,
    subject: "Social Studies",
    question:
      "The scientific study of past human life and culture through the examination of material remains such as fossils, artifacts, and monuments is:",
    options: {
      A: "History",
      B: "Archaeology",
      C: "Anthropology",
      D: "Geology",
    },
    correctAnswer: "B",
    explanation:
      "Archaeology is the study of human activity through the recovery and analysis of material culture.",
  },
  {
    id: 300,
    subject: "English",
    question:
      "A direct comparison between two unlike things without using 'like' or 'as' is a:",
    options: {
      A: "Simile",
      B: "Metaphor",
      C: "Personification",
      D: "Hyperbole",
    },
    correctAnswer: "B",
    explanation:
      "A metaphor is a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable. For example, 'The classroom was a zoo.'",
  },
  {
    id: 301,
    subject: "Kiswahili",
    question: "Mtu asiyesikia huitwa?",
    options: {
      A: "Bubu",
      B: "Kiziwi",
      C: "Kipofu",
      D: "Chongo",
    },
    correctAnswer: "B",
    explanation:
      "Mtu mwenye ulemavu wa kutoweza kusikia anaitwa kiziwi. Bubu hawezi kuongea na kipofu hawezi kuona.",
  },
  {
    id: 302,
    subject: "Agriculture",
    question:
      "What is the name for the practice of breeding and raising domestic birds like chickens and turkeys?",
    options: {
      A: "Poultry farming",
      B: "Dairy farming",
      C: "Apiculture",
      D: "Pisciculture",
    },
    correctAnswer: "A",
    explanation:
      "Poultry farming is the form of animal husbandry which raises domesticated birds such as chickens, ducks, turkeys and geese to produce meat or eggs for food.",
  },
  {
    id: 303,
    subject: "Home Science",
    question: "What is the primary purpose of ironing clothes?",
    options: {
      A: "To make them dirty",
      B: "To remove wrinkles and give a neat appearance",
      C: "To shrink them",
      D: "To change their color",
    },
    correctAnswer: "B",
    explanation:
      "Ironing works by loosening the bonds between the long-chain polymer molecules in the fibers of the material. As the fabric cools, the fibers are locked into a new, smooth shape.",
  },
  {
    id: 304,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a permanent method of joining two pieces of metal together?",
    options: {
      A: "Using bolts and nuts",
      B: "Welding",
      C: "Using screws",
      D: "Using clamps",
    },
    correctAnswer: "B",
    explanation:
      "Welding is a fabrication process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool, causing fusion. It is a permanent bond.",
  },
  {
    id: 305,
    subject: "Creative Art",
    question:
      "A type of fine, soft pencil made of a mixture of graphite and clay is known as a:",
    options: {
      A: "Charcoal pencil",
      B: "Graphite pencil",
      C: "Colored pencil",
      D: "Pastel pencil",
    },
    correctAnswer: "B",
    explanation:
      "A graphite pencil, also called a lead pencil, is a writing or drawing implement with a core of graphite mixed with clay. The proportion of clay determines the hardness of the pencil.",
  },
  {
    id: 306,
    subject: "Sports",
    question: "In which sport is the term 'love' used to mean a score of zero?",
    options: {
      A: "Football",
      B: "Basketball",
      C: "Tennis",
      D: "Cricket",
    },
    correctAnswer: "C",
    explanation:
      "In tennis scoring, 'love' represents a score of zero points. The origins of the term are uncertain, but it is a fundamental part of the game's Word Power.",
  },
  {
    id: 307,
    subject: "Mathematics",
    question: "The distance around the outside of a circle is called the:",
    options: {
      A: "Area",
      B: "Diameter",
      C: "Radius",
      D: "Circumference",
    },
    correctAnswer: "D",
    explanation:
      "The circumference is the perimeter of a circle or ellipse. It is calculated using the formula C = 2πr or C = πd.",
  },
  {
    id: 308,
    subject: "Social Studies",
    question:
      "The 'Cold War' was a period of geopolitical tension after World War II between which two major powers?",
    options: {
      A: "United Kingdom and France",
      B: "China and Japan",
      C: "United States and Soviet Union",
      D: "Germany and Italy",
    },
    correctAnswer: "C",
    explanation:
      "The Cold War (c. 1947–1991) was a state of political and military tension between powers in the Western Bloc (the United States and its allies) and powers in the Eastern Bloc (the Soviet Union and its allies).",
  },
  {
    id: 309,
    subject: "English",
    question:
      "A word having the same or nearly the same meaning as another is a:",
    options: {
      A: "Synonym",
      B: "Antonym",
      C: "Homonym",
      D: "Acronym",
    },
    correctAnswer: "A",
    explanation:
      "A synonym is a word or phrase that means exactly or nearly the same as another word or phrase in the same language. For example, 'happy' is a synonym for 'joyful'.",
  },
  {
    id: 310,
    subject: "Kiswahili",
    question: "Mji mkuu wa Tanzania ni?",
    options: {
      A: "Dar es Salaam",
      B: "Arusha",
      C: "Dodoma",
      D: "Mwanza",
    },
    correctAnswer: "C",
    explanation:
      "Mji mkuu rasmi wa Tanzania ni Dodoma, ingawa Dar es Salaam bado ni jiji kubwa zaidi kibiashara na ndipo zilipo ofisi nyingi za serikali.",
  },
  {
    id: 311,
    subject: "Agriculture",
    question: "Which farm animal is primarily raised for its wool?",
    options: {
      A: "Cow",
      B: "Goat",
      C: "Pig",
      D: "Sheep",
    },
    correctAnswer: "D",
    explanation:
      "Sheep are raised for their fleece (wool), meat (lamb and mutton), and milk. Wool is the textile fiber obtained from sheep and certain other animals.",
  },
  {
    id: 312,
    subject: "Home Science",
    question:
      "A list of ingredients and instructions for preparing a particular dish is called a:",
    options: {
      A: "Menu",
      B: "Recipe",
      C: "Budget",
      D: "Timetable",
    },
    correctAnswer: "B",
    explanation:
      "A recipe is a set of instructions for preparing a particular dish, including a list of the ingredients required.",
  },
  {
    id: 313,
    subject: "Pre-Technical Studies",
    question: "The tool used for measuring angles is called a:",
    options: {
      A: "Ruler",
      B: "Protractor",
      C: "Compass",
      D: "Set square",
    },
    correctAnswer: "B",
    explanation:
      "A protractor is a measuring instrument, typically made of transparent plastic or glass, for measuring angles. Most protractors measure angles in degrees.",
  },
  {
    id: 314,
    subject: "Creative Art",
    question:
      "The part of an artwork that seems to be closest to the viewer is the:",
    options: {
      A: "Background",
      B: "Middle ground",
      C: "Foreground",
      D: "Horizon line",
    },
    correctAnswer: "C",
    explanation:
      "In a visual work of art, the foreground is the part of the view that is nearest to the observer. The background is the part that is furthest away.",
  },
  {
    id: 315,
    subject: "Sports",
    question:
      "How many players are on a standard volleyball team on the court?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "9",
    },
    correctAnswer: "B",
    explanation:
      "A standard volleyball game is played by two teams of six players each on a court divided by a net.",
  },
  {
    id: 316,
    subject: "Mathematics",
    question: "Which of these is a unit of temperature?",
    options: {
      A: "Meter",
      B: "Gram",
      C: "Liter",
      D: "Celsius",
    },
    correctAnswer: "D",
    explanation:
      "Celsius (°C) is a scale and unit of measurement for temperature. Meter is for length, gram is for mass, and liter is for volume.",
  },
  {
    id: 317,
    subject: "Social Studies",
    question:
      "A system where citizens have the right to vote is a key feature of:",
    options: {
      A: "A dictatorship",
      B: "An absolute monarchy",
      C: "A democracy",
      D: "An oligarchy",
    },
    correctAnswer: "C",
    explanation:
      "Democracy is a system of government where the power is vested in the people, who rule either directly or through freely elected representatives. The right to vote (suffrage) is fundamental to this system.",
  },
  {
    id: 318,
    subject: "English",
    question: "The correct spelling is:",
    options: {
      A: "Necessary",
      B: "Neccessary",
      C: "Necesary",
      D: "Neccesary",
    },
    correctAnswer: "A",
    explanation:
      "The correct spelling of the word is 'necessary', with one 'c' and double 's'.",
  },
  {
    id: 319,
    subject: "Kiswahili",
    question: "Mtu anayefanya biashara anaitwa?",
    options: {
      A: "Mkulima",
      B: "Mvuvi",
      C: "Mfanyabiashara",
      D: "Mjenzi",
    },
    correctAnswer: "C",
    explanation:
      "Mtu anayehusika na shughuli za kununua na kuuza bidhaa au huduma kwa lengo la kupata faida anaitwa mfanyabiashara.",
  },
  {
    id: 320,
    subject: "Agriculture",
    question:
      "What is the name for the process of harvesting trees from a forest?",
    options: {
      A: "Afforestation",
      B: "Logging",
      C: "Reforestation",
      D: "Pruning",
    },
    correctAnswer: "B",
    explanation:
      "Logging is the process of cutting, processing, and moving trees to a location for transport. It is the first step in turning a tree into products like lumber or paper.",
  },
  {
    id: 321,
    subject: "Home Science",
    question: "The main purpose of a stain remover is to:",
    options: {
      A: "Make fabric stiffer",
      B: "Remove unwanted marks or spots from fabric",
      C: "Add color to fabric",
      D: "Softening the fabric",
    },
    correctAnswer: "B",
    explanation:
      "A stain remover is a chemical substance or cleaning agent used specifically to remove stains, which are discolorations or spots left on a surface or material.",
  },
  {
    id: 322,
    subject: "Pre-Technical Studies",
    question: "A blueprint is a type of:",
    options: {
      A: "Sketch",
      B: "Technical drawing",
      C: "Painting",
      D: "Photograph",
    },
    correctAnswer: "B",
    explanation:
      "A blueprint is a detailed technical drawing or plan used in construction and engineering. Traditionally, they were blue, but modern versions are often produced digitally.",
  },
  {
    id: 323,
    subject: "Creative Art",
    question:
      "What is the name for a pointed tool used for engraving or etching?",
    options: {
      A: "Brush",
      B: "Palette knife",
      C: "Stylus",
      D: "Spatula",
    },
    correctAnswer: "C",
    explanation:
      "A stylus is a small tool for marking or shaping, for example, in pottery. In printmaking, it can be a pointed tool used for incising lines in intaglio processes like engraving.",
  },
  {
    id: 324,
    subject: "Sports",
    question: "In boxing, matches are divided into periods of time called:",
    options: {
      A: "Quarters",
      B: "Halves",
      C: "Innings",
      D: "Rounds",
    },
    correctAnswer: "D",
    explanation:
      "A boxing match is typically divided into a series of three-minute rounds, with a one-minute rest period between each round.",
  },
  {
    id: 325,
    subject: "Mathematics",
    question:
      "A number that can be expressed as a fraction p/q, where p and q are integers and q is not zero, is called a:",
    options: {
      A: "Rational number",
      B: "Irrational number",
      C: "Prime number",
      D: "Whole number",
    },
    correctAnswer: "A",
    explanation:
      "This is the definition of a rational number. Examples include 1/2, 3, -4/5. An irrational number, like pi, cannot be expressed as a simple fraction.",
  },
  {
    id: 326,
    subject: "Social Studies",
    question:
      "The remains or impression of a prehistoric organism preserved in petrified form or as a mold or cast in rock is a:",
    options: {
      A: "Artifact",
      B: "Fossil",
      C: "Relic",
      D: "Monument",
    },
    correctAnswer: "B",
    explanation:
      "Fossils are the preserved remains, or traces of remains, of ancient organisms. They are not the remains of the organism itself, but rocks.",
  },
  {
    id: 327,
    subject: "English",
    question: "The central idea or message of a literary work is its:",
    options: {
      A: "Plot",
      B: "Setting",
      C: "Theme",
      D: "Characterization",
    },
    correctAnswer: "C",
    explanation:
      "The theme is the underlying message, or 'big idea' of a story. It is the critical belief about life that the author is trying to convey.",
  },
  {
    id: 328,
    subject: "Kiswahili",
    question: "Sentensi 'Watoto wanasoma' iko katika wakati gani?",
    options: {
      A: "Wakati uliopita (Past tense)",
      B: "Wakati uliopo (Present tense)",
      C: "Wakati ujao (Future tense)",
      D: "Hali ya mazoea (Habitual)",
    },
    correctAnswer: "B",
    explanation:
      "Kiambishi tamati '-na-' katika kitenzi 'wanasoma' kinaonyesha kuwa kitendo kinafanyika sasa hivi, yaani wakati uliopo.",
  },
  {
    id: 329,
    subject: "Agriculture",
    question:
      "The scientific classification system for organisms was developed by:",
    options: {
      A: "Charles Darwin",
      B: "Gregor Mendel",
      C: "Carolus Linnaeus",
      D: "Louis Pasteur",
    },
    correctAnswer: "C",
    explanation:
      "Carolus Linnaeus, a Swedish botanist, is known as the 'father of modern taxonomy' for formalizing the binomial nomenclature system of naming organisms.",
  },
  {
    id: 330,
    subject: "Home Science",
    question: "Which of the following is a key component of a first aid kit?",
    options: {
      A: "Snacks and drinks",
      B: "Adhesive bandages and antiseptic wipes",
      C: "Sewing supplies",
      D: "Electronic devices",
    },
    correctAnswer: "B",
    explanation:
      "A basic first aid kit should contain items to treat common minor injuries, including adhesive bandages of various sizes, antiseptic wipes, gauze, and adhesive tape.",
  },
  {
    id: 331,
    subject: "Pre-Technical Studies",
    question:
      "A force that opposes motion between two surfaces in contact is called:",
    options: {
      A: "Gravity",
      B: "Inertia",
      C: "Friction",
      D: "Momentum",
    },
    correctAnswer: "C",
    explanation:
      "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.",
  },
  {
    id: 332,
    subject: "Creative Art",
    question:
      "The visual path that the eye follows when looking at a work of art is called:",
    options: {
      A: "Movement",
      B: "Rhythm",
      C: "Pattern",
      D: "Balance",
    },
    correctAnswer: "A",
    explanation:
      "Movement is a principle of design used to create the look and feeling of action and to guide the viewer's eye throughout the work of art.",
  },
  {
    id: 333,
    subject: "Sports",
    question:
      "The 'decathlon' is an athletic event consisting of how many disciplines?",
    options: {
      A: "5",
      B: "7",
      C: "10",
      D: "12",
    },
    correctAnswer: "C",
    explanation:
      "The decathlon is a combined event in athletics consisting of ten track and field events, contested over two days.",
  },
  {
    id: 334,
    subject: "Mathematics",
    question: "A polygon with five sides is called a:",
    options: {
      A: "Quadrilateral",
      B: "Pentagon",
      C: "Hexagon",
      D: "Octagon",
    },
    correctAnswer: "B",
    explanation: "A pentagon is a polygon with five sides and five angles.",
  },
  {
    id: 1,
    subject: "Mathematics",
    question:
      "If a car travels at a speed of 60 km/h, how far will it travel in 2.5 hours?",
    options: {
      A: "120 km",
      B: "150 km",
      C: "180 km",
      D: "24 km",
    },
    correctAnswer: "B",
    explanation:
      "Distance is calculated by multiplying speed by time. Distance = 60 km/h * 2.5 h = 150 km.",
  },
  {
    id: 2,
    subject: "English",
    question: "Which of the following sentences is grammatically correct?",
    options: {
      A: "The team are playing well.",
      B: "The team is playing well.",
      C: "The team play good.",
      D: "The team playing is well.",
    },
    correctAnswer: "B",
    explanation:
      "In English, a collective noun like 'team' is treated as a singular entity, so it takes a singular verb ('is' instead of 'are').",
  },
  {
    id: 3,
    subject: "Kiswahili",
    question: "Neno 'baridi' liko katika ngeli gani?",
    options: {
      A: "I-ZI",
      B: "U-I",
      C: "LI-YA",
      D: "A-WA",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'baridi' huchukua viambishi vya ngeli ya I-ZI. Kwa mfano, 'Baridi kali imeingia' (umoja) na 'Baridi kali zimeingia' (wingi).",
  },
  {
    id: 4,
    subject: "Social Studies",
    question:
      "Which ancient civilization is credited with the invention of democracy?",
    options: {
      A: "Ancient Rome",
      B: "Ancient Egypt",
      C: "Ancient Greece",
      D: "Mesopotamia",
    },
    correctAnswer: "C",
    explanation:
      "The concept of democracy, meaning 'rule by the people,' originated in the city-state of Athens in Ancient Greece.",
  },
  {
    id: 5,
    subject: "Agriculture",
    question: "What is the primary purpose of irrigation in farming?",
    options: {
      A: "To remove weeds from the farm",
      B: "To supply water to crops",
      C: "To add nutrients to the soil",
      D: "To control pests",
    },
    correctAnswer: "B",
    explanation:
      "Irrigation is the artificial application of water to land or soil to assist in the growing of agricultural crops, especially in dry areas or during periods of low rainfall.",
  },
  {
    id: 6,
    subject: "Creative Art",
    question:
      "What are the primary colors in the subtractive color model (used for pigments and paint)?",
    options: {
      A: "Red, Green, Blue",
      B: "Red, Yellow, Blue",
      C: "Cyan, Magenta, Yellow",
      D: "Orange, Green, Purple",
    },
    correctAnswer: "B",
    explanation:
      "In traditional art and color theory, Red, Yellow, and Blue are the primary colors because they cannot be created by mixing other colors, but they can be mixed to create all other colors.",
  },
  {
    id: 7,
    subject: "Home Science",
    question: "Which of the following is a good source of Vitamin C?",
    options: {
      A: "Bread",
      B: "Milk",
      C: "Oranges",
      D: "Meat",
    },
    correctAnswer: "C",
    explanation:
      "Citrus fruits like oranges are well-known for being rich in Vitamin C, which is essential for the immune system and skin health.",
  },
  {
    id: 8,
    subject: "Pre-Technical Studies",
    question:
      "Which of these tools is best suited for cutting a curved shape in a piece of wood?",
    options: {
      A: "A hand saw",
      B: "A coping saw",
      C: "A chisel",
      D: "A plane",
    },
    correctAnswer: "B",
    explanation:
      "A coping saw has a very thin, narrow blade held in a frame, which allows it to make intricate curved cuts.",
  },
  {
    id: 9,
    subject: "Sports",
    question: "In basketball, how many points is a free throw worth?",
    options: {
      A: "One point",
      B: "Two points",
      C: "Three points",
      D: "Four points",
    },
    correctAnswer: "A",
    explanation:
      "A free throw is an unopposed attempt to score a basket, worth one point, awarded to a player after they have been fouled.",
  },
  {
    id: 10,
    subject: "Mathematics",
    question: "What is the value of π (pi) rounded to two decimal places?",
    options: {
      A: "3.12",
      B: "3.14",
      C: "3.16",
      D: "3.18",
    },
    correctAnswer: "B",
    explanation:
      "Pi (π) is a mathematical constant representing the ratio of a circle's circumference to its diameter, approximately equal to 3.14159. Rounded to two decimal places, it is 3.14.",
  },
  {
    id: 11,
    subject: "English",
    question: "What is an antonym for the word 'brave'?",
    options: {
      A: "Courageous",
      B: "Heroic",
      C: "Cowardly",
      D: "Strong",
    },
    correctAnswer: "C",
    explanation:
      "An antonym is a word with the opposite meaning. 'Cowardly' is the opposite of 'brave'.",
  },
  {
    id: 12,
    subject: "Kiswahili",
    question: "Kamilisha methali: 'Haraka haraka ...'",
    options: {
      A: "haina tija",
      B: "hufika upesi",
      C: "haina baraka",
      D: "huzaa mauti",
    },
    correctAnswer: "C",
    explanation:
      "Methali kamili ni 'Haraka haraka haina baraka,' ikimaanisha kwamba kufanya mambo kwa pupa mara nyingi hakuletei matokeo mazuri au ya kudumu.",
  },
  {
    id: 13,
    subject: "Social Studies",
    question: "What is the largest continent by land area?",
    options: {
      A: "Africa",
      B: "North America",
      C: "Europe",
      D: "Asia",
    },
    correctAnswer: "D",
    explanation:
      "Asia is the world's largest and most populous continent, covering about 30% of Earth's total land area.",
  },
  {
    id: 14,
    subject: "Agriculture",
    question:
      "Which of the following is a leguminous crop known for fixing nitrogen in the soil?",
    options: {
      A: "Maize",
      B: "Wheat",
      C: "Beans",
      D: "Potatoes",
    },
    correctAnswer: "C",
    explanation:
      "Legumes, such as beans, peas, and clover, have a symbiotic relationship with nitrogen-fixing bacteria in their root nodules, which enriches the soil with nitrogen.",
  },
  {
    id: 15,
    subject: "Creative Art",
    question:
      "A three-dimensional work of art created by shaping or combining materials is called a:",
    options: {
      A: "Painting",
      B: "Drawing",
      C: "Sculpture",
      D: "Print",
    },
    correctAnswer: "C",
    explanation:
      "Sculpture is the branch of the visual arts that operates in three dimensions. Materials like clay, stone, metal, and wood are commonly used.",
  },
  {
    id: 16,
    subject: "Home Science",
    question: "What is the first aid procedure for a minor burn?",
    options: {
      A: "Apply ice directly to the burn",
      B: "Pop any blisters that form",
      C: "Run cool water over the area",
      D: "Cover the burn with butter",
    },
    correctAnswer: "C",
    explanation:
      "The correct immediate treatment for a minor burn is to hold it under cool (not cold) running water for about 10-20 minutes to reduce heat and minimize tissue damage.",
  },
  {
    id: 17,
    subject: "Pre-Technical Studies",
    question:
      "In technical drawing, which type of line is used to show the visible outlines of an object?",
    options: {
      A: "Hidden line (dashed)",
      B: "Center line (long-short dash)",
      C: "Continuous thick line",
      D: "Dimension line",
    },
    correctAnswer: "C",
    explanation:
      "A continuous thick line, also known as an object line, is used to represent the main, visible edges and outlines of an object.",
  },
  {
    id: 18,
    subject: "Sports",
    question:
      "Which athletic event involves running, jumping, and throwing disciplines?",
    options: {
      A: "Marathon",
      B: "Decathlon",
      C: "Sprint",
      D: "Relay race",
    },
    correctAnswer: "B",
    explanation:
      "The decathlon is a combined event in athletics consisting of ten track and field events, testing an athlete's all-around ability.",
  },
  {
    id: 19,
    subject: "Mathematics",
    question:
      "Calculate the area of a triangle with a base of 10 cm and a height of 8 cm.",
    options: {
      A: "80 cm²",
      B: "18 cm²",
      C: "40 cm²",
      D: "9 cm²",
    },
    correctAnswer: "C",
    explanation:
      "The area of a triangle is calculated using the formula: Area = 1/2 * base * height. So, Area = 0.5 * 10 cm * 8 cm = 40 cm².",
  },
  {
    id: 20,
    subject: "English",
    question:
      "A story in which animals or inanimate objects speak and act like humans to teach a moral lesson is called a:",
    options: {
      A: "Myth",
      B: "Fable",
      C: "Legend",
      D: "Biography",
    },
    correctAnswer: "B",
    explanation:
      "A fable is a short fictional story that features animals, mythical creatures, or objects with human qualities to illustrate a moral lesson.",
  },
  {
    id: 21,
    subject: "Kiswahili",
    question: "Ni neno gani lenye maana sawa na 'shujaa'?",
    options: {
      A: "Mwoga",
      B: "Mwerevu",
      C: "Jasiri",
      D: "Mchoyo",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'jasiri' ni kisawe cha 'shujaa,' yote yakimaanisha mtu aliye na ujasiri au asiye na woga.",
  },
  {
    id: 22,
    subject: "Social Studies",
    question:
      "What is the main function of the legislative branch of government?",
    options: {
      A: "To enforce laws",
      B: "To interpret laws",
      C: "To make laws",
      D: "To command the military",
    },
    correctAnswer: "C",
    explanation:
      "The legislative branch, often called a Parliament or Congress, is responsible for drafting, debating, and passing new laws.",
  },
  {
    id: 23,
    subject: "Agriculture",
    question: "What is 'crop rotation'?",
    options: {
      A: "Growing the same crop every year",
      B: "Planting different crops in the same field in sequential seasons",
      C: "Harvesting crops in a circular pattern",
      D: "Watering crops at different times of the day",
    },
    correctAnswer: "B",
    explanation:
      "Crop rotation is the practice of planting different crops sequentially on the same plot of land to improve soil health, optimize nutrients in the soil, and combat pest and weed pressure.",
  },
  {
    id: 24,
    subject: "Creative Art",
    question: "Who is famous for painting the ceiling of the Sistine Chapel?",
    options: {
      A: "Leonardo da Vinci",
      B: "Raphael",
      C: "Donatello",
      D: "Michelangelo",
    },
    correctAnswer: "D",
    explanation:
      "Michelangelo, a prominent artist of the High Renaissance, painted the iconic frescoes on the ceiling of the Sistine Chapel in Vatican City.",
  },
  {
    id: 25,
    subject: "Home Science",
    question: "A balanced diet should contain adequate amounts of:",
    options: {
      A: "Only carbohydrates and fats",
      B: "Only vitamins and minerals",
      C: "Carbohydrates, proteins, fats, vitamins, minerals, and water",
      D: "Only proteins",
    },
    correctAnswer: "C",
    explanation:
      "A balanced diet provides the body with all the essential nutrients from different food groups for proper growth, energy, and maintenance.",
  },
  {
    id: 26,
    subject: "Pre-Technical Studies",
    question:
      "What is the primary safety reason for wearing goggles in a workshop?",
    options: {
      A: "To see more clearly",
      B: "To protect the eyes from debris and chemicals",
      C: "To look professional",
      D: "To keep hair out of the eyes",
    },
    correctAnswer: "B",
    explanation:
      "Safety goggles are essential personal protective equipment (PPE) designed to shield the eyes from flying particles, chemical splashes, or impact hazards.",
  },
  {
    id: 27,
    subject: "Sports",
    question: "In which sport would you perform a 'slam dunk'?",
    options: {
      A: "Volleyball",
      B: "Tennis",
      C: "Basketball",
      D: "Football",
    },
    correctAnswer: "C",
    explanation:
      "A slam dunk is a type of shot in basketball where a player forces the ball through the hoop with one or both hands.",
  },
  {
    id: 28,
    subject: "Mathematics",
    question: "What is 25% of 200?",
    options: {
      A: "25",
      B: "50",
      C: "75",
      D: "100",
    },
    correctAnswer: "B",
    explanation:
      "To find 25% of a number, you can multiply the number by 0.25. So, 0.25 * 200 = 50.",
  },
  {
    id: 29,
    subject: "English",
    question:
      "Identify the figure of speech in the sentence: 'The wind whispered through the trees.'",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Hyperbole",
    },
    correctAnswer: "C",
    explanation:
      "Personification is a figure of speech where human qualities or actions (like 'whispered') are attributed to inanimate objects or abstract ideas (like 'the wind').",
  },
  {
    id: 30,
    subject: "Kiswahili",
    question: "Wingi wa neno 'ua' (la maua) ni upi?",
    options: {
      A: "Maua",
      B: "Nyua",
      C: "Ua",
      D: "Waua",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'ua' liko katika ngeli ya LI-YA. Umoja wake ni 'ua' na wingi wake ni 'maua'.",
  },
  {
    id: 31,
    subject: "Social Studies",
    question:
      "The imaginary line that divides the Earth into the Northern and Southern Hemispheres is called the:",
    options: {
      A: "Prime Meridian",
      B: "Equator",
      C: "Tropic of Cancer",
      D: "International Date Line",
    },
    correctAnswer: "B",
    explanation:
      "The Equator is an imaginary line at 0 degrees latitude, equidistant from the North and South Poles, that divides the Earth into two equal hemispheres.",
  },
  {
    id: 32,
    subject: "Agriculture",
    question: "Which of these is considered a method of organic farming?",
    options: {
      A: "Using synthetic chemical fertilizers",
      B: "Using genetically modified seeds",
      C: "Using compost and manure as fertilizer",
      D: "Using chemical pesticides",
    },
    correctAnswer: "C",
    explanation:
      "Organic farming relies on natural methods like using compost, manure, and crop rotation to maintain soil fertility, rather than synthetic inputs.",
  },
  {
    id: 33,
    subject: "Creative Art",
    question:
      "The arrangement of elements such as line, shape, and color in a work of art is known as:",
    options: {
      A: "The texture",
      B: "The medium",
      C: "The composition",
      D: "The palette",
    },
    correctAnswer: "C",
    explanation:
      "Composition is the placement or arrangement of visual elements in a work of art. It is a key aspect of good design.",
  },
  {
    id: 34,
    subject: "Home Science",
    question: "Why is it important to wash hands before handling food?",
    options: {
      A: "To make the food taste better",
      B: "To prevent the spread of harmful bacteria",
      C: "To cool down the hands",
      D: "It is not important",
    },
    correctAnswer: "B",
    explanation:
      "Washing hands with soap and water removes germs and bacteria, preventing them from contaminating food and causing foodborne illnesses.",
  },
  {
    id: 35,
    subject: "Pre-Technical Studies",
    question: "Which of these materials is a good electrical insulator?",
    options: {
      A: "Copper",
      B: "Aluminum",
      C: "Rubber",
      D: "Steel",
    },
    correctAnswer: "C",
    explanation:
      "An electrical insulator is a material whose internal electric charges do not flow freely. Rubber is an excellent insulator, which is why it's used to cover electrical wires.",
  },
  {
    id: 36,
    subject: "Sports",
    question:
      "How many players are on a standard volleyball team on the court?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "11",
    },
    correctAnswer: "B",
    explanation:
      "A standard volleyball team has six players on the court at any one time during a game.",
  },
  {
    id: 37,
    subject: "Mathematics",
    question: "Solve the equation: 3x - 4 = 11",
    options: {
      A: "x = 3",
      B: "x = 5",
      C: "x = 7",
      D: "x = 15",
    },
    correctAnswer: "B",
    explanation:
      "To solve for x, first add 4 to both sides: 3x = 15. Then, divide both sides by 3: x = 5.",
  },
  {
    id: 38,
    subject: "English",
    question:
      "What do we call a word that is used to connect clauses or sentences, such as 'and', 'but', or 'if'?",
    options: {
      A: "A verb",
      B: "A noun",
      C: "An adverb",
      D: "A conjunction",
    },
    correctAnswer: "D",
    explanation:
      "A conjunction is a part of speech that connects words, phrases, clauses, or sentences. Examples include and, but, or, so, because.",
  },
  {
    id: 39,
    subject: "Kiswahili",
    question: "Neno 'mwalimu' liko katika ngeli gani?",
    options: {
      A: "KI-VI",
      B: "A-WA",
      C: "I-ZI",
      D: "U-I",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'mwalimu' linawakilisha kiumbe hai (mtu) na liko katika ngeli ya A-WA. Umoja ni 'mwalimu' na wingi ni 'walimu'.",
  },
  {
    id: 40,
    subject: "Social Studies",
    question:
      "Mount Kilimanjaro, the highest peak in Africa, is located in which country?",
    options: {
      A: "Kenya",
      B: "Ethiopia",
      C: "Tanzania",
      D: "Uganda",
    },
    correctAnswer: "C",
    explanation:
      "Mount Kilimanjaro is a dormant volcano located in Tanzania and is the highest mountain in Africa and the highest single free-standing mountain in the world.",
  },
  {
    id: 41,
    subject: "Agriculture",
    question:
      "The raising of domestic birds like chickens and turkeys for meat and eggs is known as:",
    options: {
      A: "Apiculture",
      B: "Aquaculture",
      C: "Horticulture",
      D: "Poultry farming",
    },
    correctAnswer: "D",
    explanation:
      "Poultry farming is the practice of raising domesticated birds such as chickens, ducks, turkeys, and geese to produce meat or eggs for food.",
  },
  {
    id: 42,
    subject: "Creative Art",
    question: "The art of beautiful handwriting is called:",
    options: {
      A: "Calligraphy",
      B: "Etching",
      C: "Stenciling",
      D: "Origami",
    },
    correctAnswer: "A",
    explanation:
      "Calligraphy is a visual art related to writing. It is the design and execution of lettering with a pen, ink brush, or other writing instrument.",
  },
  {
    id: 43,
    subject: "Home Science",
    question: "Which of these is a water-borne disease?",
    options: {
      A: "Malaria",
      B: "Cholera",
      C: "Tuberculosis",
      D: "Measles",
    },
    correctAnswer: "B",
    explanation:
      "Cholera is an infectious disease caused by consuming food or water contaminated with the bacterium Vibrio cholerae.",
  },
  {
    id: 44,
    subject: "Pre-Technical Studies",
    question: "What is the function of a screw driver?",
    options: {
      A: "To hammer nails",
      B: "To cut wood",
      C: "To turn screws",
      D: "To measure lengths",
    },
    correctAnswer: "C",
    explanation:
      "A screwdriver is a tool, manual or powered, used for screwing and unscrewing (inserting and removing) screws.",
  },
  {
    id: 45,
    subject: "Sports",
    question: "Which country won the first ever FIFA World Cup in 1930?",
    options: {
      A: "Brazil",
      B: "Argentina",
      C: "Uruguay",
      D: "Italy",
    },
    correctAnswer: "C",
    explanation:
      "The first FIFA World Cup was held in 1930, and the host nation, Uruguay, won the tournament by defeating Argentina in the final.",
  },
  {
    id: 46,
    subject: "Mathematics",
    question: "What is the perimeter of a square with a side length of 7 cm?",
    options: {
      A: "14 cm",
      B: "49 cm",
      C: "28 cm",
      D: "21 cm",
    },
    correctAnswer: "C",
    explanation:
      "The perimeter of a square is the total length of its four equal sides. Perimeter = 4 * side length. So, Perimeter = 4 * 7 cm = 28 cm.",
  },
  {
    id: 47,
    subject: "English",
    question: "Which word is a synonym for 'begin'?",
    options: {
      A: "End",
      B: "Finish",
      C: "Stop",
      D: "Start",
    },
    correctAnswer: "D",
    explanation:
      "A synonym is a word that has the same or nearly the same meaning as another word. 'Start' is a direct synonym for 'begin'.",
  },
  {
    id: 48,
    subject: "Kiswahili",
    question: "Ni kitenzi gani ambacho kiko katika hali ya kuamrisha?",
    options: {
      A: "Anakula",
      B: "Kula!",
      C: "Atakula",
      D: "Amekula",
    },
    correctAnswer: "B",
    explanation:
      "Kitenzi katika hali ya kuamrisha (amri) huishia na 'a' na hakina kiambishi cha nafsi. 'Kula!' ni amri ya moja kwa moja.",
  },
  {
    id: 49,
    subject: "Social Studies",
    question: "What is the capital city of Egypt?",
    options: {
      A: "Lagos",
      B: "Cairo",
      C: "Johannesburg",
      D: "Nairobi",
    },
    correctAnswer: "B",
    explanation:
      "Cairo, situated on the Nile River, is the capital and largest city of Egypt.",
  },
  {
    id: 50,
    subject: "Agriculture",
    question:
      "The process of loosening and turning the soil before planting is called:",
    options: {
      A: "Weeding",
      B: "Harvesting",
      C: "Tilling",
      D: "Irrigating",
    },
    correctAnswer: "C",
    explanation:
      "Tilling, also known as ploughing, is the agricultural preparation of soil by mechanical agitation of various types, such as digging, stirring, and overturning.",
  },
  {
    id: 51,
    subject: "Creative Art",
    question:
      "A type of art that depicts inanimate objects like fruit, flowers, or household items is called:",
    options: {
      A: "Portraiture",
      B: "Landscape",
      C: "Still life",
      D: "Abstract art",
    },
    correctAnswer: "C",
    explanation:
      "A still life is a work of art depicting mostly inanimate subject matter, typically commonplace objects which are either natural or man-made.",
  },
  {
    id: 52,
    subject: "Home Science",
    question: "Which nutrient is the body's main source of energy?",
    options: {
      A: "Proteins",
      B: "Vitamins",
      C: "Carbohydrates",
      D: "Minerals",
    },
    correctAnswer: "C",
    explanation:
      "Carbohydrates are the primary source of energy for the body's cells, tissues, and organs. They are broken down into glucose, which fuels bodily functions.",
  },
  {
    id: 53,
    subject: "Pre-Technical Studies",
    question:
      "Which measuring tool is most appropriate for drawing a perfect circle?",
    options: {
      A: "A ruler",
      B: "A set square",
      C: "A protractor",
      D: "A pair of compasses",
    },
    correctAnswer: "D",
    explanation:
      "A pair of compasses is a technical drawing instrument that can be used for inscribing circles or arcs.",
  },
  {
    id: 54,
    subject: "Sports",
    question: "The Olympic Games are held every...?",
    options: {
      A: "Two years",
      B: "Three years",
      C: "Four years",
      D: "Five years",
    },
    correctAnswer: "C",
    explanation:
      "The Summer and Winter Olympic Games are each held every four years. They are staggered so that there is one Olympic Games event every two years.",
  },
  {
    id: 55,
    subject: "Mathematics",
    question: "A polygon with eight sides is called a/an:",
    options: {
      A: "Hexagon",
      B: "Pentagon",
      C: "Octagon",
      D: "Heptagon",
    },
    correctAnswer: "C",
    explanation:
      "In geometry, an octagon is a polygon with eight sides and eight angles. A hexagon has six sides, a pentagon has five, and a heptagon has seven.",
  },
  {
    id: 56,
    subject: "English",
    question: "What is the plural form of the word 'child'?",
    options: {
      A: "Childs",
      B: "Childes",
      C: "Children",
      D: "Child",
    },
    correctAnswer: "C",
    explanation:
      "'Child' is an irregular noun, and its plural form is 'children'.",
  },
  {
    id: 57,
    subject: "Kiswahili",
    question: "Nahau 'kupiga moyo konde' ina maana gani?",
    options: {
      A: "Kupata ugonjwa wa moyo",
      B: "Kukasirika sana",
      C: "Kujipa moyo au kuvumilia",
      D: "Kupiga mtu kifuani",
    },
    correctAnswer: "C",
    explanation:
      "Nahau 'kupiga moyo konde' inamaanisha kujikaza, kujipa moyo, au kuvumilia katika hali ngumu au ya huzuni.",
  },
  {
    id: 58,
    subject: "Social Studies",
    question: "Which of the following is a renewable resource?",
    options: {
      A: "Coal",
      B: "Natural Gas",
      C: "Petroleum",
      D: "Solar energy",
    },
    correctAnswer: "D",
    explanation:
      "Solar energy is a renewable resource because it is derived from the sun, which is a naturally replenishing source. Fossil fuels like coal, gas, and oil are non-renewable.",
  },
  {
    id: 59,
    subject: "Agriculture",
    question:
      "The practice of growing crops without soil, using mineral nutrient solutions in a water solvent, is known as:",
    options: {
      A: "Geoponics",
      B: "Hydroponics",
      C: "Aeroponics",
      D: "Monoculture",
    },
    correctAnswer: "B",
    explanation:
      "Hydroponics is a type of horticulture and a subset of hydroculture which involves growing plants, usually crops, without soil, by using mineral nutrient solutions in an aqueous solvent.",
  },
  {
    id: 60,
    subject: "Creative Art",
    question:
      "A pattern created by repeating a line, shape, or color over and over again is an example of which principle of design?",
    options: {
      A: "Contrast",
      B: "Balance",
      C: "Rhythm",
      D: "Emphasis",
    },
    correctAnswer: "C",
    explanation:
      "Rhythm in art is created by the repetition of elements, which can create a sense of movement or a visual beat in a work of art.",
  },
  {
    id: 61,
    subject: "Home Science",
    question: "What is the most common cause of food poisoning?",
    options: {
      A: "Eating too much food",
      B: "Eating food contaminated with harmful bacteria or viruses",
      C: "Eating spicy food",
      D: "Not cooking food at all",
    },
    correctAnswer: "B",
    explanation:
      "Food poisoning is an illness caused by eating contaminated food. Infectious organisms — including bacteria, viruses and parasites — or their toxins are the most common causes.",
  },
  {
    id: 62,
    subject: "Pre-Technical Studies",
    question:
      "A gear is a rotating machine part with cut teeth. What is its primary function?",
    options: {
      A: "To generate heat",
      B: "To create light",
      C: "To transmit torque and motion",
      D: "To stop motion",
    },
    correctAnswer: "C",
    explanation:
      "Gears are used to transmit power and motion between machine parts. The teeth of one gear mesh with another to transfer rotational force (torque).",
  },
  {
    id: 63,
    subject: "Sports",
    question: "In athletics, what is the standard distance of a marathon race?",
    options: {
      A: "10 kilometers",
      B: "21.1 kilometers",
      C: "42.2 kilometers",
      D: "50 kilometers",
    },
    correctAnswer: "C",
    explanation:
      "A marathon is a long-distance running race with an official distance of 42.195 kilometers (approximately 26.2 miles).",
  },
  {
    id: 64,
    subject: "Mathematics",
    question:
      "If you buy a book for $15 and sell it for $20, what is your percentage profit?",
    options: {
      A: "25%",
      B: "33.3%",
      C: "50%",
      D: "20%",
    },
    correctAnswer: "B",
    explanation:
      "The profit is $20 - $15 = $5. The percentage profit is (Profit / Cost Price) * 100 = ($5 / $15) * 100 = 33.3%.",
  },
  {
    id: 65,
    subject: "English",
    question: "Which of these words is a preposition?",
    options: {
      A: "Run",
      B: "Happy",
      C: "Under",
      D: "Quickly",
    },
    correctAnswer: "C",
    explanation:
      "A preposition is a word that shows the relationship between a noun or pronoun and other words in a sentence. 'Under' indicates position.",
  },
  {
    id: 66,
    subject: "Kiswahili",
    question: "Neno gani ni kinyume cha 'panda'?",
    options: {
      A: "Ingia",
      B: "Kwea",
      C: "Shuka",
      D: "Ruka",
    },
    correctAnswer: "C",
    explanation:
      "Kinyume au kinyume cha neno 'panda' (kama kupanda mlima au gari) ni 'shuka'.",
  },
  {
    id: 67,
    subject: "Social Studies",
    question:
      "What is the study of the Earth's physical features, atmosphere, and human activity called?",
    options: {
      A: "History",
      B: "Archaeology",
      C: "Geography",
      D: "Sociology",
    },
    correctAnswer: "C",
    explanation:
      "Geography is the scientific study of the lands, features, inhabitants, and phenomena of Earth.",
  },
  {
    id: 68,
    subject: "Agriculture",
    question: "Which farm animal is primarily raised for wool?",
    options: {
      A: "Pig",
      B: "Goat",
      C: "Cow",
      D: "Sheep",
    },
    correctAnswer: "D",
    explanation:
      "Sheep are domesticated animals raised for their fleece (wool), meat (mutton and lamb), and milk.",
  },
  {
    id: 69,
    subject: "Creative Art",
    question: "The lightness or darkness of a color is referred to as its:",
    options: {
      A: "Hue",
      B: "Saturation",
      C: "Value",
      D: "Intensity",
    },
    correctAnswer: "C",
    explanation:
      "In color theory, value (also known as tone) describes the relative lightness or darkness of a color.",
  },
  {
    id: 70,
    subject: "Home Science",
    question:
      "Which kitchen utensil is used for measuring liquid ingredients like milk or water accurately?",
    options: {
      A: "A weighing scale",
      B: "A measuring jug",
      C: "A tablespoon",
      D: "A sieve",
    },
    correctAnswer: "B",
    explanation:
      "A measuring jug or cup has calibrated markings on the side to allow for precise measurement of liquid volumes.",
  },
  {
    id: 71,
    subject: "Pre-Technical Studies",
    question:
      "What is the name for a simple machine consisting of a wheel and an axle, used to lift heavy objects?",
    options: {
      A: "A lever",
      B: "An inclined plane",
      C: "A pulley",
      D: "A wedge",
    },
    correctAnswer: "C",
    explanation:
      "A pulley is a wheel on an axle or shaft that is designed to support movement and change of direction of a taut cable or belt, or transfer of power between the shaft and cable or belt.",
  },
  {
    id: 72,
    subject: "Sports",
    question: "In tennis, what is the term for a score of zero?",
    options: {
      A: "Nil",
      B: "Deuce",
      C: "Love",
      D: "Scratch",
    },
    correctAnswer: "C",
    explanation:
      "In tennis, 'love' is used to represent a score of zero or nil for a player or team.",
  },
  {
    id: 73,
    subject: "Mathematics",
    question: "What is the next number in the sequence: 2, 5, 8, 11, ...?",
    options: {
      A: "12",
      B: "13",
      C: "14",
      D: "15",
    },
    correctAnswer: "C",
    explanation:
      "This is an arithmetic sequence where each number is 3 more than the previous one. So, the next number is 11 + 3 = 14.",
  },
  {
    id: 74,
    subject: "English",
    question:
      "A word that sounds the same as another word but has a different meaning and spelling is called a:",
    options: {
      A: "Synonym",
      B: "Antonym",
      C: "Homophone",
      D: "Palindrome",
    },
    correctAnswer: "C",
    explanation:
      "Homophones are words that are pronounced the same but have different meanings, origins, or spelling (e.g., 'to', 'too', and 'two').",
  },
  {
    id: 75,
    subject: "Kiswahili",
    question: "Umoja wa neno 'viti' ni nini?",
    options: {
      A: "Mti",
      B: "Kiti",
      C: "Jiti",
      D: "Uti",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'viti' liko katika ngeli ya KI-VI. Wingi ni 'viti' na umoja wake ni 'kiti'.",
  },
  {
    id: 76,
    subject: "Social Studies",
    question: "Who was the first President of the Republic of Kenya?",
    options: {
      A: "Daniel arap Moi",
      B: "Mwai Kibaki",
      C: "Jomo Kenyatta",
      D: "Uhuru Kenyatta",
    },
    correctAnswer: "C",
    explanation:
      "Jomo Kenyatta was a Kenyan anti-colonial activist and politician who governed Kenya as its Prime Minister from 1963 to 1964 and then as its first President from 1964 until his death in 1978.",
  },
  {
    id: 77,
    subject: "Agriculture",
    question: "Which of the following is a common method for preserving fish?",
    options: {
      A: "Watering",
      B: "Sun drying or smoking",
      C: "Planting",
      D: "Tilling",
    },
    correctAnswer: "B",
    explanation:
      "Sun drying and smoking are traditional methods of food preservation that remove water from the fish, which inhibits the growth of microorganisms.",
  },
  {
    id: 78,
    subject: "Creative Art",
    question:
      "Which art movement is characterized by dream-like scenes and strange, illogical juxtapositions?",
    options: {
      A: "Cubism",
      B: "Impressionism",
      C: "Surrealism",
      D: "Realism",
    },
    correctAnswer: "C",
    explanation:
      "Surrealism, which flourished in Europe between World Wars I and II, was a movement that explored the workings of the mind, championing the irrational, the poetic and the revolutionary.",
  },
  {
    id: 79,
    subject: "Home Science",
    question: "Calcium is a mineral that is essential for:",
    options: {
      A: "Healthy vision",
      B: "Strong bones and teeth",
      C: "Carrying oxygen in the blood",
      D: "Energy production",
    },
    correctAnswer: "B",
    explanation:
      "The body needs calcium to build and maintain strong bones. Over 99% of the body's calcium is stored in the bones and teeth.",
  },
  {
    id: 80,
    subject: "Pre-Technical Studies",
    question: "Which tool is used to tighten or loosen nuts and bolts?",
    options: {
      A: "A hammer",
      B: "A saw",
      C: "A wrench or spanner",
      D: "A file",
    },
    correctAnswer: "C",
    explanation:
      "A wrench (or spanner) is a tool used to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts.",
  },
  {
    id: 81,
    subject: "Sports",
    question: "Which of these sports is played with a shuttlecock?",
    options: {
      A: "Table Tennis",
      B: "Squash",
      C: "Badminton",
      D: "Lawn Tennis",
    },
    correctAnswer: "C",
    explanation:
      "Badminton is a racket sport played using rackets to hit a shuttlecock across a net.",
  },
  {
    id: 82,
    subject: "Mathematics",
    question: "What is the sum of the interior angles of a quadrilateral?",
    options: {
      A: "180 degrees",
      B: "270 degrees",
      C: "360 degrees",
      D: "540 degrees",
    },
    correctAnswer: "C",
    explanation:
      "A quadrilateral is a four-sided polygon. The sum of its interior angles is always 360 degrees.",
  },
  {
    id: 83,
    subject: "English",
    question: "What is the main character in a story, novel, or play called?",
    options: {
      A: "The antagonist",
      B: "The narrator",
      C: "The protagonist",
      D: "The foil",
    },
    correctAnswer: "C",
    explanation:
      "The protagonist is the central character or leading figure in poetry, narrative, novel or any other story. The antagonist is the character who opposes the protagonist.",
  },
  {
    id: 84,
    subject: "Kiswahili",
    question:
      "Katika sentensi 'Mtoto analia sana', neno 'sana' ni la aina gani?",
    options: {
      A: "Kitenzi",
      B: "Nomino",
      C: "Kielezi",
      D: "Kivumishi",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'sana' ni kielezi kwa sababu linaelezea zaidi kuhusu kitenzi 'analia', kikionyesha jinsi kitendo kinavyofanyika.",
  },
  {
    id: 85,
    subject: "Social Studies",
    question:
      "The system of trade where goods and services are exchanged directly without using money is called:",
    options: {
      A: "Capitalism",
      B: "Barter trade",
      C: "Mercantilism",
      D: "E-commerce",
    },
    correctAnswer: "B",
    explanation:
      "Barter is a system of exchange in which participants in a transaction directly exchange goods or services for other goods or services without using a medium of exchange, such as money.",
  },
  {
    id: 86,
    subject: "Agriculture",
    question:
      "What are unwanted plants that grow among crops and compete for nutrients, water, and sunlight?",
    options: {
      A: "Legumes",
      B: "Weeds",
      C: "Fertilizers",
      D: "Pesticides",
    },
    correctAnswer: "B",
    explanation:
      "A weed is a plant considered undesirable in a particular situation, 'a plant in the wrong place'. They compete with cultivated plants for resources.",
  },
  {
    id: 87,
    subject: "Creative Art",
    question:
      "The Japanese art of folding paper into decorative shapes and figures is known as:",
    options: {
      A: "Kirigami",
      B: "Ikebana",
      C: "Origami",
      D: "Sumi-e",
    },
    correctAnswer: "C",
    explanation:
      "Origami is the art of paper folding, which is often associated with Japanese culture. The goal is to transform a flat square sheet of paper into a finished sculpture through folding techniques.",
  },
  {
    id: 88,
    subject: "Home Science",
    question:
      "Which sewing tool is used to hold pieces of fabric together temporarily before sewing?",
    options: {
      A: "A thimble",
      B: "Pins",
      C: "A seam ripper",
      D: "Scissors",
    },
    correctAnswer: "B",
    explanation:
      "Pins are used to temporarily hold fabric in place while you are cutting or sewing a garment.",
  },
  {
    id: 89,
    subject: "Pre-Technical Studies",
    question:
      "An orthographic projection in technical drawing shows an object from:",
    options: {
      A: "A single, three-dimensional viewpoint",
      B: "Multiple two-dimensional viewpoints (front, top, side)",
      C: "An artistic perspective",
      D: "Inside the object",
    },
    correctAnswer: "B",
    explanation:
      "Orthographic projection is a way of representing a 3D object in 2D. It typically involves three standard views: a front view, a top view, and a side view.",
  },
  {
    id: 90,
    subject: "Sports",
    question:
      "In football (soccer), which card is shown by the referee for a serious foul, resulting in the player being sent off the field?",
    options: {
      A: "A green card",
      B: "A yellow card",
      C: "A red card",
      D: "A blue card",
    },
    correctAnswer: "C",
    explanation:
      "A red card is shown for a serious offense, such as violent conduct or denying an obvious goal-scoring opportunity. The player must leave the field of play immediately.",
  },
  {
    id: 91,
    subject: "Mathematics",
    question: "Express the fraction 3/4 as a percentage.",
    options: {
      A: "34%",
      B: "43%",
      C: "75%",
      D: "60%",
    },
    correctAnswer: "C",
    explanation:
      "To convert a fraction to a percentage, you multiply the fraction by 100. So, (3/4) * 100 = 75%.",
  },
  {
    id: 92,
    subject: "English",
    question:
      "What punctuation mark is used to indicate possession or the omission of letters?",
    options: {
      A: "A comma (,)",
      B: "A period (.)",
      C: "An apostrophe (')",
      D: "A question mark (?)",
    },
    correctAnswer: "C",
    explanation:
      "An apostrophe is used to show possession (e.g., 'the student's book') or to indicate contractions where letters are omitted (e.g., 'don't' for 'do not').",
  },
  {
    id: 93,
    subject: "Kiswahili",
    question: "Neno 'mji' lina maana gani?",
    options: {
      A: "Shamba",
      B: "Nyumba",
      C: "Kijiji au eneo lenye makazi",
      D: "Barabara",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'mji' hurejelea eneo lenye mkusanyiko wa makazi ya watu, kama vile kijiji, mji mdogo, au jiji.",
  },
  {
    id: 94,
    subject: "Social Studies",
    question:
      "The Industrial Revolution began in which country in the 18th century?",
    options: {
      A: "United States",
      B: "France",
      C: "Germany",
      D: "Great Britain",
    },
    correctAnswer: "D",
    explanation:
      "The Industrial Revolution was the transition to new manufacturing processes in Europe and the United States, in the period from about 1760 to sometime between 1820 and 1840. It began in Great Britain.",
  },
  {
    id: 95,
    subject: "Agriculture",
    question:
      "What is the process of removing the male parts of a flower to prevent self-pollination called?",
    options: {
      A: "Pollination",
      B: "Emasculation",
      C: "Fertilization",
      D: "Germination",
    },
    correctAnswer: "B",
    explanation:
      "Emasculation is a step in plant breeding that involves removing the anthers (male parts) from a flower before they release pollen to control which pollen fertilizes the flower.",
  },
  {
    id: 96,
    subject: "Creative Art",
    question:
      "A picture made by pasting on a surface various materials not normally associated with one another, like newspaper clippings, ribbons, and bits of colored paper, is called a:",
    options: {
      A: "Montage",
      B: "Collage",
      C: "Fresco",
      D: "Mosaic",
    },
    correctAnswer: "B",
    explanation:
      "A collage is a piece of art made by sticking various different materials such as photographs and pieces of paper or fabric onto a backing.",
  },
  {
    id: 97,
    subject: "Home Science",
    question: "What is the main function of fibre in a diet?",
    options: {
      A: "To provide energy",
      B: "To build muscle",
      C: "To aid in digestion",
      D: "To strengthen bones",
    },
    correctAnswer: "C",
    explanation:
      "Dietary fibre is important for keeping the digestive system healthy. It adds bulk to stool, which helps prevent constipation.",
  },
  {
    id: 98,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a type of permanent joint used to fasten metal plates together?",
    options: {
      A: "A screw joint",
      B: "A bolt and nut joint",
      C: "A riveted joint",
      D: "A cotter joint",
    },
    correctAnswer: "C",
    explanation:
      "A rivet is a permanent mechanical fastener. Before being installed, a rivet consists of a smooth cylindrical shaft with a head on one end. Once installed, it is not meant to be removed.",
  },
  {
    id: 99,
    subject: "Sports",
    question: "A 'hat-trick' in sports generally means:",
    options: {
      A: "Scoring two goals in a row",
      B: "Winning three championships",
      C: "Achieving three successful outcomes in a row in one game",
      D: "Playing for three different teams",
    },
    correctAnswer: "C",
    explanation:
      "The term hat-trick is used in many sports to signify three achievements in a game, such as scoring three goals in football or cricket.",
  },
  {
    id: 100,
    subject: "Mathematics",
    question:
      "What is the area of a circle with a radius of 5 cm? (Use π ≈ 3.14)",
    options: {
      A: "31.4 cm²",
      B: "15.7 cm²",
      C: "78.5 cm²",
      D: "50.0 cm²",
    },
    correctAnswer: "C",
    explanation:
      "The area of a circle is calculated by the formula A = πr². So, Area = 3.14 * (5 cm)² = 3.14 * 25 cm² = 78.5 cm².",
  },
  {
    id: 101,
    subject: "Home Science",
    question:
      "Which mineral is crucial for the formation of haemoglobin in red blood cells?",
    options: {
      A: "Calcium",
      B: "Iron",
      C: "Potassium",
      D: "Zinc",
    },
    correctAnswer: "B",
    explanation:
      "Iron is an essential component of haemoglobin, the protein in red blood cells that transports oxygen from the lungs to the rest of the body. A deficiency can lead to anaemia.",
  },
  {
    id: 102,
    subject: "Mathematics",
    question: "What is the mean (average) of the numbers 4, 6, 8, and 10?",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "28",
    },
    correctAnswer: "B",
    explanation:
      "To find the mean, you add all the numbers together and divide by the count of the numbers. (4 + 6 + 8 + 10) / 4 = 28 / 4 = 7.",
  },
  {
    id: 103,
    subject: "Creative Art",
    question:
      "An arrangement of shapes, lines and colors that creates a visual sense of stability in a piece of art is known as:",
    options: {
      A: "Movement",
      B: "Contrast",
      C: "Balance",
      D: "Rhythm",
    },
    correctAnswer: "C",
    explanation:
      "Balance is a principle of design that refers to the distribution of visual weight in a work of art. It can be symmetrical, asymmetrical, or radial.",
  },
  {
    id: 104,
    subject: "Social Studies",
    question: "The River Nile flows into which large body of water?",
    options: {
      A: "The Atlantic Ocean",
      B: "The Indian Ocean",
      C: "The Red Sea",
      D: "The Mediterranean Sea",
    },
    correctAnswer: "D",
    explanation:
      "The River Nile, the longest river in Africa, flows northward through northeastern Africa and drains into the Mediterranean Sea.",
  },
  {
    id: 105,
    subject: "Sports",
    question: "Which of these is NOT an Olympic sport?",
    options: {
      A: "Fencing",
      B: "Archery",
      C: "Cricket",
      D: "Judo",
    },
    correctAnswer: "C",
    explanation:
      "While cricket is a popular global sport, it is not currently part of the Summer Olympic Games program, although it is scheduled to return in 2028. Fencing, Archery, and Judo are all Olympic sports.",
  },
  {
    id: 106,
    subject: "Pre-Technical Studies",
    question: "What does 'CAD' stand for in the context of design and drawing?",
    options: {
      A: "Computer-Aided Design",
      B: "Creative Art Division",
      C: "Complex Architectural Drawing",
      D: "Central Axis Dimension",
    },
    correctAnswer: "A",
    explanation:
      "CAD, or Computer-Aided Design, is the use of computer systems to aid in the creation, modification, analysis, or optimization of a design.",
  },
  {
    id: 107,
    subject: "Kiswahili",
    question: "Kisawe cha neno 'maradhi' ni kipi?",
    options: {
      A: "Afya",
      B: "Nguvu",
      C: "Ugonjwa",
      D: "Furaha",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'ugonjwa' ni kisawe (synonym) cha neno 'maradhi.' Maneno yote mawili yana maana ya hali ya kutokuwa na afya njema.",
  },
  {
    id: 108,
    subject: "Agriculture",
    question:
      "The science and art of growing fruits, vegetables, flowers, or ornamental plants is known as:",
    options: {
      A: "Agronomy",
      B: "Horticulture",
      C: "Forestry",
      D: "Animal husbandry",
    },
    correctAnswer: "B",
    explanation:
      "Horticulture is the branch of agriculture that deals with the art, science, technology, and business of plant cultivation.",
  },
  {
    id: 109,
    subject: "English",
    question: "An 'autobiography' is a story of a person's life written by:",
    options: {
      A: "A famous historian",
      B: "A family member",
      C: "Another person",
      D: "That person themself",
    },
    correctAnswer: "D",
    explanation:
      "An autobiography ('auto' meaning self) is a self-written account of the life of oneself. A biography is an account of someone's life written by someone else.",
  },
  {
    id: 110,
    subject: "Mathematics",
    question:
      "A six-sided die is rolled once. What is the probability of rolling a number greater than 4?",
    options: {
      A: "1/6",
      B: "1/3",
      C: "1/2",
      D: "2/3",
    },
    correctAnswer: "B",
    explanation:
      "There are 6 possible outcomes (1, 2, 3, 4, 5, 6). The numbers greater than 4 are 5 and 6 (2 favourable outcomes). The probability is 2/6, which simplifies to 1/3.",
  },
  {
    id: 111,
    subject: "Home Science",
    question:
      "What is the process of using heat to kill harmful bacteria in milk and other beverages called?",
    options: {
      A: "Homogenization",
      B: "Pasteurization",
      C: "Fermentation",
      D: "Distillation",
    },
    correctAnswer: "B",
    explanation:
      "Pasteurization is a process in which packaged and non-packaged foods are treated with mild heat, usually to less than 100 °C, to eliminate pathogens and extend shelf life.",
  },
  {
    id: 112,
    subject: "Sports",
    question: "Which piece in chess can only move diagonally?",
    options: {
      A: "The Rook",
      B: "The Knight",
      C: "The Bishop",
      D: "The King",
    },
    correctAnswer: "C",
    explanation:
      "The Bishop moves any number of vacant squares in any diagonal direction. Rooks move horizontally or vertically, and Knights move in an 'L' shape.",
  },
  {
    id: 113,
    subject: "Pre-Technical Studies",
    question:
      "A material that allows electricity to flow through it easily is called a/an:",
    options: {
      A: "Insulator",
      B: "Resistor",
      C: "Conductor",
      D: "Semiconductor",
    },
    correctAnswer: "C",
    explanation:
      "An electrical conductor is a substance in which electrical charge carriers, usually electrons, move easily from atom to atom with the application of voltage. Metals like copper are good conductors.",
  },
  {
    id: 114,
    subject: "English",
    question: "Which of these is a coordinating conjunction?",
    options: {
      A: "Although",
      B: "Because",
      C: "But",
      D: "While",
    },
    correctAnswer: "C",
    explanation:
      "Coordinating conjunctions (for, and, nor, but, or, yet, so - FANBOYS) connect words, phrases, and independent clauses of equal grammatical rank. 'But' is a classic example.",
  },
  {
    id: 115,
    subject: "Agriculture",
    question:
      "What is the term for the offspring of a male donkey and a female horse?",
    options: {
      A: "A hinny",
      B: "A pony",
      C: "A mule",
      D: "A foal",
    },
    correctAnswer: "C",
    explanation:
      "A mule is the offspring of a male donkey (a jack) and a female horse (a mare). They are known for their strength and endurance.",
  },
  {
    id: 116,
    subject: "Social Studies",
    question: "The Great Wall of China was primarily built to:",
    options: {
      A: "Serve as a tourist attraction",
      B: "Mark the border of the country",
      C: "Protect the Chinese Empire from invasions",
      D: "Be a trade route",
    },
    correctAnswer: "C",
    explanation:
      "The Great Wall was built over centuries by China’s emperors to protect their territory. It was primarily constructed as a defensive barrier against invasions from northern nomadic groups.",
  },
  {
    id: 117,
    subject: "Kiswahili",
    question: "Wingi wa neno 'jino' ni upi?",
    options: {
      A: "Majino",
      B: "Meno",
      C: "Nyino",
      D: "Jino",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'jino' lipo katika ngeli ya LI-YA. Umoja ni 'jino' na wingi wake ni 'meno'.",
  },
  {
    id: 118,
    subject: "Creative Art",
    question:
      "In painting and drawing, the use of strong contrasts between light and dark is known as:",
    options: {
      A: "Sfumato",
      B: "Perspective",
      C: "Impasto",
      D: "Chiaroscuro",
    },
    correctAnswer: "D",
    explanation:
      "Chiaroscuro is an Italian artistic term used to describe the dramatic effect of contrasting areas of light and dark in a work of art. It was famously used by artists like Caravaggio and Rembrandt.",
  },
  {
    id: 119,
    subject: "Mathematics",
    question: "How many millimeters are in one meter?",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "10000",
    },
    correctAnswer: "C",
    explanation:
      "The metric system is base-10. There are 100 centimeters in a meter, and 10 millimeters in a centimeter. Therefore, there are 100 * 10 = 1000 millimeters in a meter.",
  },
  {
    id: 120,
    subject: "Home Science",
    question: "Which of the following is a symptom of dehydration?",
    options: {
      A: "Clear urine",
      B: "Feeling thirsty and having a dry mouth",
      C: "High energy levels",
      D: "Excessive sweating",
    },
    correctAnswer: "B",
    explanation:
      "Dehydration occurs when you lose more fluid than you take in. Early signs include thirst, a dry mouth, and producing dark-colored urine.",
  },
  {
    id: 121,
    subject: "Sports",
    question:
      "In cricket, how is a batsman dismissed if the bowler hits the wickets with the ball?",
    options: {
      A: "Caught",
      B: "Leg Before Wicket (LBW)",
      C: "Run Out",
      D: "Bowled",
    },
    correctAnswer: "D",
    explanation:
      "A batsman is 'bowled' out if a delivery from the bowler hits and puts down the wicket directly.",
  },
  {
    id: 122,
    subject: "Pre-Technical Studies",
    question: "A 'try square' is a woodworking tool used for:",
    options: {
      A: "Measuring circles",
      B: "Marking or checking right angles (90 degrees)",
      C: "Smoothing wood surfaces",
      D: "Drilling holes",
    },
    correctAnswer: "B",
    explanation:
      "A try square consists of a stock and a blade fixed at a perfect right angle. It is used to check the squareness of edges and to mark lines at 90 degrees to an edge.",
  },
  {
    id: 123,
    subject: "English",
    question:
      "An exaggerated statement not meant to be taken literally, like 'I'm so hungry I could eat a horse,' is an example of:",
    options: {
      A: "Irony",
      B: "A simile",
      C: "A metaphor",
      D: "A hyperbole",
    },
    correctAnswer: "D",
    explanation:
      "Hyperbole is a figure of speech that involves an exaggeration of ideas for the sake of emphasis.",
  },
  {
    id: 124,
    subject: "Agriculture",
    question:
      "The controlled decomposition of organic matter, such as food scraps and yard waste, into a nutrient-rich soil conditioner is called:",
    options: {
      A: "Irrigation",
      B: "Composting",
      C: "Mulching",
      D: "Photosynthesis",
    },
    correctAnswer: "B",
    explanation:
      "Composting is a natural process of recycling organic material into a rich soil amendment known as compost.",
  },
  {
    id: 125,
    subject: "Social Studies",
    question: "The belief in one god is known as:",
    options: {
      A: "Polytheism",
      B: "Atheism",
      C: "Monotheism",
      D: "Animism",
    },
    correctAnswer: "C",
    explanation:
      "Monotheism is the belief that there is only one God. Religions like Christianity, Judaism, and Islam are monotheistic. Polytheism is the belief in multiple gods.",
  },
  {
    id: 126,
    subject: "Kiswahili",
    question: "Neno 'polepole' ni aina gani ya neno?",
    options: {
      A: "Kivumishi",
      B: "Kielezi",
      C: "Nomino",
      D: "Kitenzi",
    },
    correctAnswer: "B",
    explanation:
      "'Polepole' ni kielezi kwa sababu kinaelezea jinsi kitendo kinavyofanyika, kwa mfano, 'Anatembea polepole'.",
  },
  {
    id: 127,
    subject: "Creative Art",
    question:
      "A type of printmaking in which a design is incised into a block of wood is called:",
    options: {
      A: "A woodcut",
      B: "An etching",
      C: "A lithograph",
      D: "A screenprint",
    },
    correctAnswer: "A",
    explanation:
      "A woodcut is a relief printing technique where an artist carves an image into the surface of a block of wood, with the printing parts remaining level with the surface while the non-printing parts are removed.",
  },
  {
    id: 128,
    subject: "Mathematics",
    question: "What is the volume of a cube with a side length of 4 cm?",
    options: {
      A: "12 cm³",
      B: "16 cm³",
      C: "48 cm³",
      D: "64 cm³",
    },
    correctAnswer: "D",
    explanation:
      "The volume of a cube is calculated by cubing the side length (V = s³). So, Volume = 4 cm * 4 cm * 4 cm = 64 cm³.",
  },
  {
    id: 129,
    subject: "Home Science",
    question:
      "Which of these is a method of cooking using dry heat in an oven?",
    options: {
      A: "Boiling",
      B: "Steaming",
      C: "Baking",
      D: "Frying",
    },
    correctAnswer: "C",
    explanation:
      "Baking is a method of preparing food that uses dry heat, typically in an oven. It is commonly used for bread, cakes, and pastries.",
  },
  {
    id: 130,
    subject: "Sports",
    question: "In swimming, which stroke is performed on the back?",
    options: {
      A: "Freestyle",
      B: "Butterfly",
      C: "Breaststroke",
      D: "Backstroke",
    },
    correctAnswer: "D",
    explanation:
      "The backstroke is one of the four swimming styles used in competitive events. It is the only stroke swum on the back.",
  },
  {
    id: 131,
    subject: "Pre-Technical Studies",
    question: "Which of the following is an example of a first-class lever?",
    options: {
      A: "A wheelbarrow",
      B: "A bottle opener",
      C: "A pair of scissors",
      D: "A fishing rod",
    },
    correctAnswer: "C",
    explanation:
      "In a first-class lever, the fulcrum is located between the effort and the load. A pair of scissors has the pivot (fulcrum) between the handles (effort) and the blades (load).",
  },
  {
    id: 132,
    subject: "English",
    question:
      "A group of lines forming the basic recurring metrical unit in a poem is called a:",
    options: {
      A: "Paragraph",
      B: "Stanza",
      C: "Sentence",
      D: "Chapter",
    },
    correctAnswer: "B",
    explanation:
      "A stanza is a division of a poem consisting of a series of lines arranged together in a usually recurring pattern of meter and rhyme.",
  },
  {
    id: 133,
    subject: "Agriculture",
    question:
      "Beekeeping for the purpose of honey and beeswax production is known as:",
    options: {
      A: "Sericulture",
      B: "Pisciculture",
      C: "Apiculture",
      D: "Floriculture",
    },
    correctAnswer: "C",
    explanation:
      "Apiculture is the technical term for beekeeping. Sericulture is silk farming, pisciculture is fish farming, and floriculture is flower farming.",
  },
  {
    id: 134,
    subject: "Social Studies",
    question: "What ancient civilization built the pyramids at Giza?",
    options: {
      A: "The Romans",
      B: "The Greeks",
      C: "The Mayans",
      D: "The Egyptians",
    },
    correctAnswer: "D",
    explanation:
      "The Great Pyramids of Giza were constructed by the Ancient Egyptians as monumental tombs for their pharaohs during the Old Kingdom period.",
  },
  {
    id: 135,
    subject: "Kiswahili",
    question: "Neno 'simba' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "I-ZI",
      C: "LI-YA",
      D: "U-I",
    },
    correctAnswer: "A",
    explanation:
      "Ingawa 'simba' haina kiambishi cha 'm-' mwanzoni, inarejelea mnyama, kwa hivyo huwekwa katika ngeli ya A-WA. Umoja ni 'simba' na wingi ni 'simba'.",
  },
  {
    id: 136,
    subject: "Creative Art",
    question: "What is a self-portrait?",
    options: {
      A: "A painting of a landscape",
      B: "A portrait of a family member",
      C: "A portrait of an artist created by that same artist",
      D: "A sculpture of an animal",
    },
    correctAnswer: "C",
    explanation:
      "A self-portrait is a representation of an artist that is drawn, painted, photographed, or sculpted by that artist.",
  },
  {
    id: 137,
    subject: "Mathematics",
    question: "What is the value of 5² + 3³?",
    options: {
      A: "19",
      B: "34",
      C: "52",
      D: "125",
    },
    correctAnswer: "C",
    explanation:
      "First, calculate the powers: 5² = 5 * 5 = 25, and 3³ = 3 * 3 * 3 = 27. Then, add the results: 25 + 27 = 52.",
  },
  {
    id: 138,
    subject: "Home Science",
    question:
      "A small, enclosed, and portable case for holding needles, pins, and thread is called a:",
    options: {
      A: "Toolbox",
      B: "First aid kit",
      C: "Sewing kit or 'housewife'",
      D: "Jewelry box",
    },
    correctAnswer: "C",
    explanation:
      "A sewing kit, sometimes historically called a 'housewife' or 'hussif', is a small kit containing basic sewing implements for mending clothes.",
  },
  {
    id: 139,
    subject: "Sports",
    question:
      "The Tour de France is a famous annual competition in which sport?",
    options: {
      A: "Running",
      B: "Motorsport",
      C: "Cycling",
      D: "Sailing",
    },
    correctAnswer: "C",
    explanation:
      "The Tour de France is an annual men's multiple-stage bicycle race primarily held in France, and it is the most prestigious of the three Grand Tours in cycling.",
  },
  {
    id: 140,
    subject: "Pre-Technical Studies",
    question:
      "In a simple electrical circuit, what device is used to open or close the circuit, controlling the flow of current?",
    options: {
      A: "A resistor",
      B: "A battery",
      C: "A switch",
      D: "A light bulb",
    },
    correctAnswer: "C",
    explanation:
      "A switch is an electrical component that can disconnect or connect the conducting path in an electrical circuit, interrupting the electric current or diverting it from one conductor to another.",
  },
  {
    id: 141,
    subject: "English",
    question:
      "What type of noun refers to a group of people, animals, or things, such as 'flock', 'team', or 'family'?",
    options: {
      A: "A proper noun",
      B: "A collective noun",
      C: "An abstract noun",
      D: "A common noun",
    },
    correctAnswer: "B",
    explanation:
      "A collective noun is a word that refers to a set or group of people, animals, or things as a single entity.",
  },
  {
    id: 142,
    subject: "Agriculture",
    question: "Which of these is a root vegetable?",
    options: {
      A: "Cabbage",
      B: "Tomato",
      C: "Carrot",
      D: "Broccoli",
    },
    correctAnswer: "C",
    explanation:
      "A root vegetable is a plant root used as a vegetable. A carrot is a taproot, which is the main edible part of the plant.",
  },
  {
    id: 143,
    subject: "Social Studies",
    question:
      "What document, signed in 1215 in England, was one of the first to limit the power of a king?",
    options: {
      A: "The Declaration of Independence",
      B: "The Magna Carta",
      C: "The Bill of Rights",
      D: "The Constitution",
    },
    correctAnswer: "B",
    explanation:
      "The Magna Carta is a royal charter of rights agreed to by King John of England at Runnymede in 1215. It established the principle that everyone, including the king, was subject to the law.",
  },
  {
    id: 144,
    subject: "Kiswahili",
    question: "Ni neno gani hutumika kurejelea mtu anayetoka nchi nyingine?",
    options: {
      A: "Mwenyeji",
      B: "Mgeni",
      C: "Jirani",
      D: "Jamaa",
    },
    correctAnswer: "B",
    explanation:
      "Ingawa 'mgeni' inaweza kumaanisha mtembeleaji, mara nyingi hutumika kurejelea mtu asiye mwenyeji wa eneo fulani, ikiwemo mtu kutoka nchi ya kigeni.",
  },
  {
    id: 145,
    subject: "Creative Art",
    question:
      "A large painting executed directly on a wall or ceiling is called a:",
    options: {
      A: "Canvas",
      B: "Easel painting",
      C: "Mural",
      D: "Tapestry",
    },
    correctAnswer: "C",
    explanation:
      "A mural is any piece of artwork painted or applied directly on a wall, ceiling or other permanent surfaces. Fresco is a specific technique of mural painting.",
  },
  {
    id: 146,
    subject: "Mathematics",
    question:
      "An angle that is greater than 90 degrees but less than 180 degrees is called a/an:",
    options: {
      A: "Acute angle",
      B: "Right angle",
      C: "Obtuse angle",
      D: "Reflex angle",
    },
    correctAnswer: "C",
    explanation:
      "An obtuse angle is one that measures between 90 and 180 degrees. An acute angle is less than 90, and a right angle is exactly 90 degrees.",
  },
  {
    id: 147,
    subject: "Home Science",
    question:
      "Stitching is the craft of fastening or attaching objects using stitches made with a needle and thread. What is a common stitch used to finish a hem?",
    options: {
      A: "Running stitch",
      B: "Backstitch",
      C: "Blind hem stitch",
      D: "Cross stitch",
    },
    correctAnswer: "C",
    explanation:
      "A blind hem stitch is a sewing stitch that is not meant to be visible from the right side of the fabric, making it ideal for creating a clean, professional-looking hem.",
  },
  {
    id: 148,
    subject: "Sports",
    question: "In boxing, a 'knockout' or 'KO' occurs when:",
    options: {
      A: "The bell rings to end a round",
      B: "A boxer is knocked down and cannot get up within ten seconds",
      C: "A boxer wins a round on points",
      D: "Both boxers touch gloves",
    },
    correctAnswer: "B",
    explanation:
      "A knockout (KO) is a fight-ending, winning criterion in several full-contact combat sports, such as boxing, when a participant is unable to rise from the canvas within a specified period of time.",
  },
  {
    id: 149,
    subject: "Pre-Technical Studies",
    question:
      "Which of these hand tools is used for shaping and smoothing wood by scraping?",
    options: {
      A: "A saw",
      B: "A file or rasp",
      C: "A drill",
      D: "A hammer",
    },
    correctAnswer: "B",
    explanation:
      "A file and a rasp are tools used to remove fine amounts of material from a workpiece. A rasp is used for coarse work on wood, while a file is used for finer applications.",
  },
  {
    id: 150,
    subject: "English",
    question: "Which sentence uses 'their', 'there', and 'they're' correctly?",
    options: {
      A: "They're putting there books over their.",
      B: "Their putting they're books over there.",
      C: "There putting their books over they're.",
      D: "They're putting their books over there.",
    },
    correctAnswer: "D",
    explanation:
      "'They're' is a contraction of 'they are'. 'Their' is a possessive pronoun. 'There' refers to a place. The correct sentence is 'They are putting their books over in that place.'",
  },
  {
    id: 151,
    subject: "Agriculture",
    question: "The process by which a seed grows into a young plant is called:",
    options: {
      A: "Photosynthesis",
      B: "Transpiration",
      C: "Pollination",
      D: "Germination",
    },
    correctAnswer: "D",
    explanation:
      "Germination is the process by which an organism grows from a seed or similar structure. The most common example is the sprouting of a seedling from a seed of an angiosperm or gymnosperm.",
  },
  {
    id: 152,
    subject: "Social Studies",
    question: "Which one of these is a major cause of air pollution?",
    options: {
      A: "Planting trees",
      B: "The burning of fossil fuels",
      C: "Using solar power",
      D: "Recycling waste",
    },
    correctAnswer: "B",
    explanation:
      "The combustion of fossil fuels like coal, oil, and natural gas releases harmful gases such as carbon dioxide, sulfur dioxide, and nitrogen oxides into the atmosphere, causing air pollution.",
  },
  {
    id: 153,
    subject: "Kiswahili",
    question:
      "Methali 'Asiyefunzwa na mamaye, hufunzwa na ulimwengu' ina maana gani?",
    options: {
      A: "Ni lazima kusafiri ili kujifunza",
      B: "Mtu asiyepata malezi bora nyumbani, atajifunza kwa kupitia magumu maishani",
      C: "Shule ndio mahali pekee pa kujifunzia",
      D: "Mama ndiye mwalimu pekee",
    },
    correctAnswer: "B",
    explanation:
      "Methali hii inamaanisha kwamba kama mtu hatapata mafunzo na adabu kutoka kwa wazazi wake, atajifunza kupitia shida na changamoto za maisha.",
  },
  {
    id: 154,
    subject: "Creative Art",
    question:
      "The material an artist uses, such as paint, clay, or pencil, is called the:",
    options: {
      A: "Subject",
      B: "Medium",
      C: "Canvas",
      D: "Style",
    },
    correctAnswer: "B",
    explanation:
      "In art, medium refers to the substance the artist uses to create a piece of artwork. For example, the medium of a painting could be oil paint or watercolor.",
  },
  {
    id: 155,
    subject: "Mathematics",
    question: "Find the value of x if x/5 = 4.",
    options: {
      A: "1",
      B: "9",
      C: "20",
      D: "0.8",
    },
    correctAnswer: "C",
    explanation:
      "To solve for x, you need to isolate it. Multiply both sides of the equation by 5: (x/5) * 5 = 4 * 5, which simplifies to x = 20.",
  },
  {
    id: 156,
    subject: "Home Science",
    question:
      "When setting a formal dinner table, where should the dinner fork be placed?",
    options: {
      A: "To the right of the plate",
      B: "Above the plate",
      C: "To the left of the plate",
      D: "On the plate itself",
    },
    correctAnswer: "C",
    explanation:
      "In a standard formal place setting, forks are placed to the left of the dinner plate, typically in the order they will be used from the outside in.",
  },
  {
    id: 157,
    subject: "Sports",
    question:
      "What is the name of the trophy awarded to the winner of the FIFA World Cup?",
    options: {
      A: "The Stanley Cup",
      B: "The Webb Ellis Cup",
      C: "The Jules Rimet Trophy (historical) / FIFA World Cup Trophy",
      D: "The America's Cup",
    },
    correctAnswer: "C",
    explanation:
      "The current trophy is the FIFA World Cup Trophy, introduced in 1974. The original trophy, named the Jules Rimet Trophy, was awarded from 1930 to 1970.",
  },
  {
    id: 158,
    subject: "Pre-Technical Studies",
    question:
      "The process of joining two pieces of metal by melting and flowing a filler metal into the joint is called:",
    options: {
      A: "Welding",
      B: "Soldering or Brazing",
      C: "Riveting",
      D: "Gluing",
    },
    correctAnswer: "B",
    explanation:
      "Soldering and brazing are processes where a filler metal with a lower melting point than the adjoining metal is heated and melted to join the workpieces. Welding involves melting the base metal.",
  },
  {
    id: 159,
    subject: "English",
    question:
      "Which of the following is a palindrome (reads the same forwards and backwards)?",
    options: {
      A: "Banana",
      B: "Level",
      C: "Apple",
      D: "House",
    },
    correctAnswer: "B",
    explanation:
      "A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward. 'Level' is a classic example.",
  },
  {
    id: 160,
    subject: "Agriculture",
    question:
      "A building designed specifically for growing plants under controlled conditions is a:",
    options: {
      A: "Silo",
      B: "Barn",
      C: "Greenhouse",
      D: "Stable",
    },
    correctAnswer: "C",
    explanation:
      "A greenhouse is a structure with walls and roof made chiefly of transparent material, such as glass, in which plants requiring regulated climatic conditions are grown.",
  },
  {
    id: 161,
    subject: "Social Studies",
    question:
      "A form of government where the supreme power is held by the people and their elected representatives is called a:",
    options: {
      A: "Monarchy",
      B: "Dictatorship",
      C: "Republic",
      D: "Theocracy",
    },
    correctAnswer: "C",
    explanation:
      "In a republic, the country is considered a 'public matter', not the private concern or property of the rulers. Power is exercised by elected officials who represent the citizens.",
  },
  {
    id: 162,
    subject: "Kiswahili",
    question: "Ukiondoa 'm' katika neno 'mtu', unapata neno gani la msingi?",
    options: {
      A: "tu",
      B: "utu",
      C: "-tu",
      D: "ntu",
    },
    correctAnswer: "C",
    explanation:
      "Mzizi wa neno 'mtu' ni '-tu'. 'M-' ni kiambishi cha ngeli ya A-WA (umoja) na '-tu' ndicho kiini cha neno chenye maana ya msingi.",
  },
  {
    id: 163,
    subject: "Creative Art",
    question:
      "Which ancient civilization is renowned for its pottery decorated with black or red figures depicting mythology and daily life?",
    options: {
      A: "Roman",
      B: "Egyptian",
      C: "Greek",
      D: "Chinese",
    },
    correctAnswer: "C",
    explanation:
      "Ancient Greek pottery, particularly from Athens, is famous for its distinctive red-figure and black-figure styles used to illustrate scenes from mythology and everyday activities.",
  },
  {
    id: 164,
    subject: "Mathematics",
    question: "What is the square root of 144?",
    options: {
      A: "10",
      B: "11",
      C: "12",
      D: "14",
    },
    correctAnswer: "C",
    explanation:
      "The square root of a number is a value that, when multiplied by itself, gives the original number. 12 * 12 = 144.",
  },
  {
    id: 165,
    subject: "Home Science",
    question:
      "A plan for how to spend and save money over a certain period is called a:",
    options: {
      A: "Recipe",
      B: "Schedule",
      C: "Budget",
      D: "Diary",
    },
    correctAnswer: "C",
    explanation:
      "A budget is a financial plan that estimates income and expenses over a specified future period. It is a crucial tool for managing personal or family finances.",
  },
  {
    id: 166,
    subject: "Sports",
    question: "In rugby union, how many points is a try worth?",
    options: {
      A: "3 points",
      B: "5 points",
      C: "7 points",
      D: "2 points",
    },
    correctAnswer: "B",
    explanation:
      "A try, scored by grounding the ball in the opposition's in-goal area, is worth five points. The scoring team is then given a chance to score two additional points with a conversion kick.",
  },
  {
    id: 167,
    subject: "Pre-Technical Studies",
    question:
      "The tool used to create threads on the outside of a bolt or rod is called a:",
    options: {
      A: "Tap",
      B: "Die",
      C: "Reamer",
      D: "Drill bit",
    },
    correctAnswer: "B",
    explanation:
      "A die is used to cut an external thread (male thread). A tap is used to cut an internal thread (female thread), for example, inside a nut.",
  },
  {
    id: 168,
    subject: "English",
    question: "Which of these is the correct past tense of the verb 'to fly'?",
    options: {
      A: "Flyed",
      B: "Flown",
      C: "Flew",
      D: "Flied",
    },
    correctAnswer: "C",
    explanation:
      "'Fly' is an irregular verb. Its simple past tense is 'flew', and its past participle is 'flown'.",
  },
  {
    id: 169,
    subject: "Agriculture",
    question:
      "Which farming practice involves growing only one type of crop in a field at a time?",
    options: {
      A: "Intercropping",
      B: "Monoculture",
      C: "Mixed farming",
      D: "Crop rotation",
    },
    correctAnswer: "B",
    explanation:
      "Monoculture is the agricultural practice of producing or growing a single crop, plant, or livestock species, variety, or breed in a field or farming system at a time.",
  },
  {
    id: 170,
    subject: "Social Studies",
    question:
      "What is the term for a country's total value of goods produced and services provided during one year?",
    options: {
      A: "Gross Domestic Product (GDP)",
      B: "Annual National Budget (ANB)",
      C: "Consumer Price Index (CPI)",
      D: "National Debt",
    },
    correctAnswer: "A",
    explanation:
      "Gross Domestic Product (GDP) is a monetary measure of the market value of all the final goods and services produced in a specific time period by a country.",
  },
  {
    id: 171,
    subject: "Kiswahili",
    question:
      "Ni aina gani ya shairi lenye mishororo mitatu katika kila ubeti?",
    options: {
      A: "Tathnia",
      B: "Tathmitha",
      C: "Tarbia",
      D: "Takhmisa",
    },
    correctAnswer: "B",
    explanation:
      "Katika ushairi wa Kiswahili, shairi lenye mishororo mitatu kwa kila ubeti huitwa tathmitha. Tathnia (2), Tarbia (4), Takhmisa (5).",
  },
  {
    id: 172,
    subject: "Creative Art",
    question:
      "A type of sculpture in which forms are carved in low relief from a background of the same material is called a:",
    options: {
      A: "Statue",
      B: "Bust",
      C: "Bas-relief",
      D: "Mobile",
    },
    correctAnswer: "C",
    explanation:
      "Bas-relief (or low relief) is a sculptural technique where the sculpted elements remain attached to a solid background of the same material. The term is from the Italian 'basso-rilievo'.",
  },
  {
    id: 173,
    subject: "Mathematics",
    question:
      "If a triangle has angles measuring 50 degrees and 70 degrees, what is the measure of the third angle?",
    options: {
      A: "40 degrees",
      B: "50 degrees",
      C: "60 degrees",
      D: "70 degrees",
    },
    correctAnswer: "C",
    explanation:
      "The sum of the interior angles in any triangle is always 180 degrees. So, the third angle is 180 - (50 + 70) = 180 - 120 = 60 degrees.",
  },
  {
    id: 174,
    subject: "Home Science",
    question:
      "A timetable for household chores and activities helps a family to:",
    options: {
      A: "Spend more money",
      B: "Create confusion",
      C: "Manage time effectively and avoid conflicts",
      D: "Work less",
    },
    correctAnswer: "C",
    explanation:
      "A well-planned timetable or schedule helps in organizing tasks, ensuring that responsibilities are shared and that everything gets done in an orderly and efficient manner.",
  },
  {
    id: 175,
    subject: "Sports",
    question:
      "In golf, what is the term for completing a hole in one stroke under par?",
    options: {
      A: "A bogey",
      B: "An eagle",
      C: "A birdie",
      D: "A par",
    },
    correctAnswer: "C",
    explanation:
      "A 'birdie' is a score of one stroke under par on a hole. A 'bogey' is one over par, and an 'eagle' is two under par.",
  },
  {
    id: 176,
    subject: "Pre-Technical Studies",
    question: "Which of these is NOT a type of wood joint?",
    options: {
      A: "Dovetail joint",
      B: "Mortise and tenon joint",
      C: "Welded joint",
      D: "Butt joint",
    },
    correctAnswer: "C",
    explanation:
      "A welded joint is used to join metals by melting the workpieces and adding a filler material. The others are all common techniques used in woodworking.",
  },
  {
    id: 177,
    subject: "English",
    question:
      "What is the literary term for the 'message' or main idea of a story?",
    options: {
      A: "The plot",
      B: "The setting",
      C: "The theme",
      D: "The conflict",
    },
    correctAnswer: "C",
    explanation:
      "The theme is the central topic, subject, or message within a narrative. It is the underlying meaning of a story.",
  },
  {
    id: 178,
    subject: "Agriculture",
    question:
      "The removal of soil by the action of wind and water is known as:",
    options: {
      A: "Soil conservation",
      B: "Soil erosion",
      C: "Soil formation",
      D: "Soil fertility",
    },
    correctAnswer: "B",
    explanation:
      "Soil erosion is a naturally occurring process that affects all landforms. In agriculture, it refers to the wearing away of a field's topsoil by the natural physical forces of water and wind.",
  },
  {
    id: 179,
    subject: "Social Studies",
    question:
      "What is a map that shows physical features like mountains, rivers, and lakes called?",
    options: {
      A: "A political map",
      B: "A physical map",
      C: "A road map",
      D: "A climate map",
    },
    correctAnswer: "B",
    explanation:
      "A physical map is designed to show the natural landscape features of Earth. They are best known for showing topography, either by colors or as shaded relief.",
  },
  {
    id: 180,
    subject: "Kiswahili",
    question:
      "Katika sentensi, 'Juma alimpa mbwa chakula', kiima (mtenda) ni nani?",
    options: {
      A: "Juma",
      B: "alimpa",
      C: "mbwa",
      D: "chakula",
    },
    correctAnswer: "A",
    explanation:
      "Kiima (au mtenda) ni nomino au kiwakilishi kinachofanya kitendo katika sentensi. Katika sentensi hii, Juma ndiye anayefanya kitendo cha kumpa mbwa chakula.",
  },
  {
    id: 181,
    subject: "Creative Art",
    question:
      "A work of art that is made up of small pieces of colored glass, stone, or other materials is a:",
    options: {
      A: "Fresco",
      B: "Tapestry",
      C: "Mosaic",
      D: "Collage",
    },
    correctAnswer: "C",
    explanation:
      "A mosaic is a pattern or image made of small regular or irregular pieces of colored stone, glass or ceramic, held in place by plaster/mortar, and covering a surface.",
  },
  {
    id: 182,
    subject: "Mathematics",
    question: "Convert 0.5 into a fraction in its simplest form.",
    options: {
      A: "5/10",
      B: "1/2",
      C: "2/5",
      D: "5/1",
    },
    correctAnswer: "B",
    explanation:
      "The decimal 0.5 can be written as the fraction 5/10. To simplify this fraction, you divide both the numerator and the denominator by their greatest common divisor, which is 5. So, 5÷5 / 10÷5 = 1/2.",
  },
  {
    id: 183,
    subject: "Home Science",
    question: "Which of these is a key principle of good personal hygiene?",
    options: {
      A: "Sharing personal items like towels and toothbrushes",
      B: "Washing hands regularly with soap and water",
      C: "Wearing the same clothes for several days",
      D: "Bathing only once a week",
    },
    correctAnswer: "B",
    explanation:
      "Regular handwashing is one of the most effective ways to remove germs, avoid getting sick, and prevent the spread of germs to others.",
  },
  {
    id: 184,
    subject: "Sports",
    question: "Which country is famous for inventing the sport of Judo?",
    options: {
      A: "China",
      B: "Korea",
      C: "Japan",
      D: "Thailand",
    },
    correctAnswer: "C",
    explanation:
      "Judo is a modern Japanese martial art and combat sport that originated in Japan in the late nineteenth century, created by Jigoro Kano.",
  },
  {
    id: 185,
    subject: "Pre-Technical Studies",
    question: "In technical drawing, a scale of 1:100 means that:",
    options: {
      A: "The drawing is 100 times larger than the actual object.",
      B: "1 unit on the drawing represents 100 units on the actual object.",
      C: "The drawing is the same size as the actual object.",
      D: "100 units on the drawing represent 1 unit on the actual object.",
    },
    correctAnswer: "B",
    explanation:
      "A drawing scale is a ratio that represents the relationship between the dimensions on the drawing and the dimensions of the real object. 1:100 is a reduction scale.",
  },
  {
    id: 186,
    subject: "English",
    question:
      "The part of a sentence that contains the verb and states something about the subject is the:",
    options: {
      A: "Predicate",
      B: "Clause",
      C: "Phrase",
      D: "Subject",
    },
    correctAnswer: "A",
    explanation:
      "Every complete sentence contains two parts: a subject and a predicate. The predicate tells what the subject is or does. For example, in 'The cat sat on the mat,' the predicate is 'sat on the mat.'",
  },
  {
    id: 187,
    subject: "Agriculture",
    question:
      "A long period of abnormally low rainfall, leading to a shortage of water, is known as a:",
    options: {
      A: "Flood",
      B: "Drought",
      C: "Monsoon",
      D: "Blizzard",
    },
    correctAnswer: "B",
    explanation:
      "A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water. It can have a substantial impact on agriculture.",
  },
  {
    id: 188,
    subject: "Social Studies",
    question:
      "The Renaissance was a period of 'rebirth' in art, science, and culture that began in which European country?",
    options: {
      A: "France",
      B: "Spain",
      C: "England",
      D: "Italy",
    },
    correctAnswer: "D",
    explanation:
      "The Renaissance was a fervent period of European cultural, artistic, political and economic “rebirth” following the Middle Ages. It is generally described as taking place from the 14th century to the 17th century, and it began in Florence, Italy.",
  },
  {
    id: 189,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'nenda' ni kipi?",
    options: {
      A: "Rudi",
      B: "Kimbia",
      C: "Simama",
      D: "Toka",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'rudi' ni kinyume cha kitenzi cha amri 'nenda,' likimaanisha kurudi mahali ulipotoka.",
  },
  {
    id: 190,
    subject: "Creative Art",
    question:
      "The element of art that refers to the surface quality or 'feel' of an object is:",
    options: {
      A: "Line",
      B: "Shape",
      C: "Color",
      D: "Texture",
    },
    correctAnswer: "D",
    explanation:
      "Texture is the perceived surface quality of a work of art. It can be actual (how it really feels) or implied (how it looks like it would feel).",
  },
  {
    id: 191,
    subject: "Mathematics",
    question: "A prime number is a number that has exactly how many factors?",
    options: {
      A: "One",
      B: "Two",
      C: "Three",
      D: "Zero",
    },
    correctAnswer: "B",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Therefore, it has exactly two factors.",
  },
  {
    id: 192,
    subject: "Home Science",
    question:
      "What does a stain on a piece of clothing require before it is washed?",
    options: {
      A: "Ironing",
      B: "Pre-treatment",
      C: "Drying",
      D: "Folding",
    },
    correctAnswer: "B",
    explanation:
      "Pre-treating a stain with a stain remover or detergent before washing helps to loosen the stain and increases the likelihood of its complete removal during the wash cycle.",
  },
  {
    id: 193,
    subject: "Sports",
    question: "The term 'pitcher' is associated with which sport?",
    options: {
      A: "Cricket",
      B: "Baseball",
      C: "Football",
      D: "Hockey",
    },
    correctAnswer: "B",
    explanation:
      "In baseball, the pitcher is the player who throws the baseball from the pitcher's mound toward the catcher to begin each play.",
  },
  {
    id: 194,
    subject: "Pre-Technical Studies",
    question: "Which of these materials is a ferrous metal?",
    options: {
      A: "Aluminum",
      B: "Copper",
      C: "Steel",
      D: "Brass",
    },
    correctAnswer: "C",
    explanation:
      "Ferrous metals are metals that contain iron. Steel is an alloy of iron and carbon, making it a ferrous metal. Aluminum, copper, and brass (an alloy of copper and zinc) are non-ferrous.",
  },
  {
    id: 195,
    subject: "English",
    question:
      "The comparison of two unlike things using 'like' or 'as' is known as a:",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Alliteration",
    },
    correctAnswer: "B",
    explanation:
      "A simile is a figure of speech that directly compares two things using connecting words such as 'like', 'as', 'so', or 'than'. For example, 'as brave as a lion'.",
  },
  {
    id: 196,
    subject: "Agriculture",
    question: "What is the name for a young sheep?",
    options: {
      A: "A calf",
      B: "A foal",
      C: "A lamb",
      D: "A piglet",
    },
    correctAnswer: "C",
    explanation:
      "A young sheep is called a lamb. A calf is a young cow, a foal is a young horse, and a piglet is a young pig.",
  },
  {
    id: 197,
    subject: "Social Studies",
    question:
      "What is the process by which people move from rural areas to cities called?",
    options: {
      A: "Migration",
      B: "Immigration",
      C: "Urbanization",
      D: "Colonization",
    },
    correctAnswer: "C",
    explanation:
      "Urbanization refers to the population shift from rural to urban areas, the corresponding decrease in the proportion of people living in rural areas, and the ways in which societies adapt to this change.",
  },
  {
    id: 198,
    subject: "Kiswahili",
    question: "Mtu anayeandika vitabu huitwaje?",
    options: {
      A: "Mhariri",
      B: "Mwandishi",
      C: "Msomaji",
      D: "Mchapishaji",
    },
    correctAnswer: "B",
    explanation:
      "Mtu anayetunga na kuandika maandishi kama vile vitabu, hadithi, au mashairi anaitwa mwandishi.",
  },
  {
    id: 199,
    subject: "Creative Art",
    question:
      "Which Impressionist painter is famous for his series of paintings of water lilies?",
    options: {
      A: "Vincent van Gogh",
      B: "Claude Monet",
      C: "Pierre-Auguste Renoir",
      D: "Edgar Degas",
    },
    correctAnswer: "B",
    explanation:
      "Claude Monet, a key figure in the Impressionist movement, painted a series of approximately 250 oil paintings depicting the water lilies in the flower garden at his home in Giverny.",
  },
  {
    id: 200,
    subject: "Mathematics",
    question:
      "If a rectangle has a length of 12 cm and a width of 5 cm, what is its area?",
    options: {
      A: "17 cm²",
      B: "34 cm²",
      C: "60 cm²",
      D: "144 cm²",
    },
    correctAnswer: "C",
    explanation:
      "The area of a rectangle is calculated by multiplying its length by its width. Area = 12 cm * 5 cm = 60 cm².",
  },
  {
    id: 201,
    subject: "Home Science",
    question:
      "What is a major risk associated with cross-contamination in the kitchen?",
    options: {
      A: "Improving food flavor",
      B: "Spreading harmful bacteria from one food to another",
      C: "Making food cook faster",
      D: "Saving preparation time",
    },
    correctAnswer: "B",
    explanation:
      "Cross-contamination is the transfer of harmful bacteria to food from other foods, cutting boards, or utensils. It is a common cause of food poisoning. For example, using the same knife for raw chicken and then a salad.",
  },
  {
    id: 202,
    subject: "Mathematics",
    question: "Simplify the ratio 15:25.",
    options: {
      A: "3:5",
      B: "5:3",
      C: "1:10",
      D: "15:25",
    },
    correctAnswer: "A",
    explanation:
      "To simplify a ratio, find the greatest common divisor (GCD) of both numbers and divide them by it. The GCD of 15 and 25 is 5. So, 15÷5 : 25÷5 = 3:5.",
  },
  {
    id: 203,
    subject: "Creative Art",
    question:
      "A type of fine art, 'ceramics', refers to art made from what material?",
    options: {
      A: "Wood",
      B: "Metal",
      C: "Clay",
      D: "Glass",
    },
    correctAnswer: "C",
    explanation:
      "Ceramics are pots and other articles made from clay that has been hardened by firing. Pottery, tiles, and sculptures are examples of ceramic art.",
  },
  {
    id: 204,
    subject: "Social Studies",
    question:
      "The system of writing used by the ancient Egyptians, which involved pictures and symbols, is called:",
    options: {
      A: "Cuneiform",
      B: "Alphabet",
      C: "Hieroglyphics",
      D: "Sanskrit",
    },
    correctAnswer: "C",
    explanation:
      "Hieroglyphics was a formal writing system used by the ancient Egyptians that combined logographic, syllabic and alphabetic elements.",
  },
  {
    id: 205,
    subject: "Sports",
    question: "How long is one round in a professional men's boxing match?",
    options: {
      A: "One minute",
      B: "Two minutes",
      C: "Three minutes",
      D: "Five minutes",
    },
    correctAnswer: "C",
    explanation:
      "In professional boxing, rounds are typically three minutes long for men, with a one-minute rest period between rounds.",
  },
  {
    id: 206,
    subject: "Pre-Technical Studies",
    question:
      "A diagram that shows the connections and components of an electrical circuit using standard symbols is called a:",
    options: {
      A: "Blueprint",
      B: "Flowchart",
      C: "Schematic diagram",
      D: "Floor plan",
    },
    correctAnswer: "C",
    explanation:
      "A schematic diagram represents the elements of a system using abstract, graphic symbols rather than realistic pictures. It shows how the components of a circuit are electrically connected.",
  },
  {
    id: 207,
    subject: "Kiswahili",
    question: "Neno 'shule' lina asili ya lugha gani?",
    options: {
      A: "Kiarabu",
      B: "Kireno",
      C: "Kijerumani",
      D: "Kibantu",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'shule' ni neno kopwa kutoka lugha ya Kijerumani ('Schule'), lililoingia katika Kiswahili wakati wa ukoloni wa Wajerumani.",
  },
  {
    id: 208,
    subject: "Agriculture",
    question: "Which of these is a cereal crop?",
    options: {
      A: "Cabbage",
      B: "Apples",
      C: "Wheat",
      D: "Beans",
    },
    correctAnswer: "C",
    explanation:
      "A cereal is any grass cultivated for the edible components of its grain. Wheat, maize (corn), rice, and barley are common examples.",
  },
  {
    id: 209,
    subject: "English",
    question:
      "What is the term for a word formed from the first letters of a name, such as 'NASA' for National Aeronautics and Space Administration?",
    options: {
      A: "An abbreviation",
      B: "A synonym",
      C: "An acronym",
      D: "A contraction",
    },
    correctAnswer: "C",
    explanation:
      "An acronym is an abbreviation formed from the initial letters of other words and pronounced as a word.",
  },
  {
    id: 210,
    subject: "Mathematics",
    question: "Which of the following numbers is NOT a factor of 36?",
    options: {
      A: "4",
      B: "8",
      C: "9",
      D: "12",
    },
    correctAnswer: "B",
    explanation:
      "A factor is a number that divides another number evenly. 36 can be divided by 4 (36/4=9), 9 (36/9=4), and 12 (36/12=3). It cannot be divided evenly by 8.",
  },
  {
    id: 211,
    subject: "Home Science",
    question:
      "The nutrient Iron is mainly found in which of the following foods?",
    options: {
      A: "Oranges and lemons",
      B: "Milk and cheese",
      C: "Red meat and spinach",
      D: "Bread and pasta",
    },
    correctAnswer: "C",
    explanation:
      "There are two types of dietary iron: heme iron (found in animal foods like red meat) and non-heme iron (found in plant sources like spinach and lentils). Both are important for the body.",
  },
  {
    id: 212,
    subject: "Sports",
    question:
      "The 'Ashes' is a famous Test cricket series played between which two countries?",
    options: {
      A: "India and Pakistan",
      B: "South Africa and New Zealand",
      C: "England and Australia",
      D: "West Indies and Sri Lanka",
    },
    correctAnswer: "C",
    explanation:
      "The Ashes is a men's Test cricket series played biennially between England and Australia. The trophy is a small terracotta urn reputed to contain the ashes of a burnt cricket bail.",
  },
  {
    id: 213,
    subject: "Pre-Technical Studies",
    question:
      "What is the process of coating a metal (like steel) with a layer of zinc to protect it from rusting called?",
    options: {
      A: "Annealing",
      B: "Galvanizing",
      C: "Tempering",
      D: "Welding",
    },
    correctAnswer: "B",
    explanation:
      "Galvanization is the process of applying a protective zinc coating to steel or iron to prevent rusting. The zinc coating acts as a sacrificial anode.",
  },
  {
    id: 214,
    subject: "English",
    question:
      "A writer's unique style of writing, including word choice, sentence structure, and tone, is known as their:",
    options: {
      A: "Plot",
      B: "Voice",
      C: "Theme",
      D: "Genre",
    },
    correctAnswer: "B",
    explanation:
      "In literature, 'voice' refers to the rhetorical mixture of Word Power, tone, point of view, and syntax that makes phrases, sentences, and paragraphs flow in a particular manner.",
  },
  {
    id: 215,
    subject: "Agriculture",
    question: "Which of the following is a poultry disease?",
    options: {
      A: "Malaria",
      B: "Rabies",
      C: "Newcastle Disease",
      D: "Foot and Mouth Disease",
    },
    correctAnswer: "C",
    explanation:
      "Newcastle Disease is a contagious viral bird disease affecting many domestic and wild avian species; it is transmissible to humans. Foot and Mouth affects cloven-hoofed animals, and rabies affects mammals.",
  },
  {
    id: 216,
    subject: "Social Studies",
    question:
      "Lines on a map that connect points of equal elevation are called:",
    options: {
      A: "Latitude lines",
      B: "Longitude lines",
      C: "Contour lines",
      D: "Isobars",
    },
    correctAnswer: "C",
    explanation:
      "Contour lines are used on topographic maps to illustrate the shape of the land's surface. The closer the lines are, the steeper the terrain.",
  },
  {
    id: 217,
    subject: "Kiswahili",
    question: "Mtu anayeongoza maombi katika msikiti huitwa nani?",
    options: {
      A: "Padri",
      B: "Askofu",
      C: "Imamu",
      D: "Mchungaji",
    },
    correctAnswer: "C",
    explanation:
      "Imamu ni kiongozi wa kidini katika Uislamu, anayeongoza sala za pamoja katika msikiti.",
  },
  {
    id: 218,
    subject: "Creative Art",
    question:
      "The area around, within, and between the subjects of an image is known as:",
    options: {
      A: "Positive space",
      B: "Negative space",
      C: "Foreshortening",
      D: "Perspective",
    },
    correctAnswer: "B",
    explanation:
      "Negative space, in art, is the space around and between the subject(s) of an image. It is just as important as the positive space (the subject itself) in creating a successful composition.",
  },
  {
    id: 219,
    subject: "Mathematics",
    question: "What is the least common multiple (LCM) of 4 and 6?",
    options: {
      A: "2",
      B: "10",
      C: "12",
      D: "24",
    },
    correctAnswer: "C",
    explanation:
      "The LCM is the smallest positive integer that is divisible by both numbers. Multiples of 4 are 4, 8, 12, 16... Multiples of 6 are 6, 12, 18... The smallest number in both lists is 12.",
  },
  {
    id: 220,
    subject: "Home Science",
    question: "What is the primary purpose of a 'thimble' in sewing?",
    options: {
      A: "To cut thread",
      B: "To measure fabric",
      C: "To protect the finger from being pricked by the needle",
      D: "To store needles",
    },
    correctAnswer: "C",
    explanation:
      "A thimble is a small pitted cup worn on the finger that protects it from being pricked or poked by a needle while sewing.",
  },
  {
    id: 221,
    subject: "Sports",
    question: "In athletics, what is the final event of a Decathlon?",
    options: {
      A: "100 metres sprint",
      B: "Javelin throw",
      C: "1500 metres run",
      D: "Long jump",
    },
    correctAnswer: "C",
    explanation:
      "The Decathlon is a ten-event competition held over two days. The grueling 1500 metres run is the tenth and final event, testing the athletes' endurance.",
  },
  {
    id: 222,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a safety device designed to protect an electrical circuit from damage caused by excess current?",
    options: {
      A: "A switch",
      B: "A fuse or circuit breaker",
      C: "A voltmeter",
      D: "A capacitor",
    },
    correctAnswer: "B",
    explanation:
      "A fuse contains a wire that melts and breaks the circuit if the current exceeds a safe level. A circuit breaker is a switch that automatically interrupts the current when it overloads.",
  },
  {
    id: 223,
    subject: "English",
    question:
      "A comparison between two unlike things that continues throughout a series of sentences in a paragraph or lines in a poem is a(n):",
    options: {
      A: "Extended metaphor",
      B: "Simple simile",
      C: "Understatement",
      D: "Onomatopoeia",
    },
    correctAnswer: "A",
    explanation:
      "An extended metaphor is a version of metaphor that extends over the course of multiple lines, paragraphs, or stanzas of prose or poetry.",
  },
  {
    id: 224,
    subject: "Agriculture",
    question: "The practice of keeping and managing bees is called:",
    options: {
      A: "Horticulture",
      B: "Aquaculture",
      C: "Apiculture",
      D: "Viniculture",
    },
    correctAnswer: "C",
    explanation:
      "Apiculture, or beekeeping, is the maintenance of bee colonies, commonly in man-made hives, by humans for honey, beeswax, and other products.",
  },
  {
    id: 225,
    subject: "Social Studies",
    question:
      "Which of the following was a major trade route that connected the East and the West in ancient and medieval times?",
    options: {
      A: "The Panama Canal",
      B: "The Silk Road",
      C: "The Trans-Siberian Railway",
      D: "The Northwest Passage",
    },
    correctAnswer: "B",
    explanation:
      "The Silk Road was a network of trade routes which connected the East and West, and was central to the economic, cultural, political, and religious interactions between these regions from the 2nd century BCE to the 18th century.",
  },
  {
    id: 226,
    subject: "Kiswahili",
    question: "Ni neno gani hutumika kuelezea hali ya hewa ya joto jingi?",
    options: {
      A: "Baridi",
      B: "Upepo",
      C: "Joto",
      D: "Mvua",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'joto' ndilo hutumika kuelezea hali ya hewa yenye ukali wa jua au joto jingi. 'Baridi' ni kinyume chake.",
  },
  {
    id: 227,
    subject: "Creative Art",
    question:
      "The use of dots to create an image in drawing or painting is a technique known as:",
    options: {
      A: "Hatching",
      B: "Stippling",
      C: "Scumbling",
      D: "Glazing",
    },
    correctAnswer: "B",
    explanation:
      "Stippling is the creation of a pattern simulating varying degrees of solidity or shading by using small dots. The density of the dots determines the lightness or darkness of the areas.",
  },
  {
    id: 228,
    subject: "Mathematics",
    question: "How many sides does a pentagon have?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "B",
    explanation:
      "In geometry, a pentagon is a polygon with five straight sides and five angles.",
  },
  {
    id: 229,
    subject: "Home Science",
    question:
      "What is the term for a list of ingredients and a set of instructions for making a particular dish?",
    options: {
      A: "A menu",
      B: "A recipe",
      C: "A budget",
      D: "A shopping list",
    },
    correctAnswer: "B",
    explanation:
      "A recipe is a set of instructions for preparing a particular dish, including a list of the ingredients required.",
  },
  {
    id: 230,
    subject: "Sports",
    question: "In which sport might you hear the term 'love-fifteen'?",
    options: {
      A: "Badminton",
      B: "Squash",
      C: "Table Tennis",
      D: "Tennis",
    },
    correctAnswer: "D",
    explanation:
      "'Love-fifteen' is a score in tennis, where 'love' means a score of zero for the server and 'fifteen' is the first point for the receiver.",
  },
  {
    id: 231,
    subject: "Pre-Technical Studies",
    question: "Which of these is a renewable source of energy?",
    options: {
      A: "Coal",
      B: "Natural Gas",
      C: "Wind Power",
      D: "Petroleum",
    },
    correctAnswer: "C",
    explanation:
      "Wind power is a renewable energy source because wind is a natural phenomenon that is not depleted by use. Fossil fuels like coal, gas, and petroleum are non-renewable.",
  },
  {
    id: 232,
    subject: "English",
    question: "The written text of a play, movie, or broadcast is called a:",
    options: {
      A: "Novel",
      B: "Poem",
      C: "Script",
      D: "Biography",
    },
    correctAnswer: "C",
    explanation:
      "A script is the manuscript or one of various copies of the written text of a play, motion picture, or radio or television broadcast.",
  },
  {
    id: 233,
    subject: "Agriculture",
    question:
      "What is the process of providing water to land or crops to help growth, typically by means of channels?",
    options: {
      A: "Drainage",
      B: "Weeding",
      C: "Irrigation",
      D: "Harvesting",
    },
    correctAnswer: "C",
    explanation:
      "Irrigation is the agricultural process of applying controlled amounts of water to land to assist in the production of crops.",
  },
  {
    id: 234,
    subject: "Social Studies",
    question: "What is the name of the galaxy that contains our Solar System?",
    options: {
      A: "Andromeda",
      B: "Triangulum",
      C: "The Milky Way",
      D: "Centaurus A",
    },
    correctAnswer: "C",
    explanation:
      "Our Solar System, including the Sun, Earth, and all the other planets, is located in the Milky Way galaxy, a barred spiral galaxy.",
  },
  {
    id: 235,
    subject: "Kiswahili",
    question: "Neno 'chai' liko katika ngeli gani?",
    options: {
      A: "I-ZI",
      B: "U-I",
      C: "A-WA",
      D: "LI-YA",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'chai' lipo katika ngeli ya I-ZI. Haina wingi unaotumika sana, lakini huchukua viambishi vya ngeli hii, k.m., 'Chai yangu imemwagika.'",
  },
  {
    id: 236,
    subject: "Creative Art",
    question:
      "Which artistic movement, pioneered by Pablo Picasso and Georges Braque, is known for its fragmented, geometric forms?",
    options: {
      A: "Surrealism",
      B: "Impressionism",
      C: "Cubism",
      D: "Pop Art",
    },
    correctAnswer: "C",
    explanation:
      "Cubism was a revolutionary early-20th-century art movement that brought different views of subjects (usually objects or figures) together in the same picture, resulting in paintings that appear fragmented and abstracted.",
  },
  {
    id: 237,
    subject: "Mathematics",
    question:
      "In a right-angled triangle, the side opposite the right angle is called the:",
    options: {
      A: "Adjacent",
      B: "Opposite",
      C: "Hypotenuse",
      D: "Base",
    },
    correctAnswer: "C",
    explanation:
      "The hypotenuse is the longest side of a right-angled triangle, the side opposite the right angle.",
  },
  {
    id: 238,
    subject: "Home Science",
    question:
      "The process of preserving food by sealing it in airtight containers and heating it to destroy microorganisms is called:",
    options: {
      A: "Freezing",
      B: "Drying",
      C: "Canning",
      D: "Salting",
    },
    correctAnswer: "C",
    explanation:
      "Canning is a method of preserving food in which the food contents are processed and sealed in an airtight container such as a tin can or a glass jar.",
  },
  {
    id: 239,
    subject: "Sports",
    question: "Which of these martial arts originated in Korea?",
    options: {
      A: "Karate",
      B: "Kung Fu",
      C: "Taekwondo",
      D: "Judo",
    },
    correctAnswer: "C",
    explanation:
      "Taekwondo is a Korean martial art, characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques.",
  },
  {
    id: 240,
    subject: "Pre-Technical Studies",
    question:
      "A type of drawing that shows a three-dimensional object in a two-dimensional space, with all three axes appearing at 120 degrees to each other, is called:",
    options: {
      A: "Orthographic projection",
      B: "Isometric drawing",
      C: "Perspective drawing",
      D: "Schematic diagram",
    },
    correctAnswer: "B",
    explanation:
      "An isometric drawing is a method for visually representing three-dimensional objects in two dimensions in technical and engineering drawings. It is a type of axonometric projection.",
  },
  {
    id: 241,
    subject: "English",
    question:
      "The use of a word that imitates a sound, such as 'buzz' or 'hiss', is called:",
    options: {
      A: "Alliteration",
      B: "Onomatopoeia",
      C: "Hyperbole",
      D: "Irony",
    },
    correctAnswer: "B",
    explanation:
      "Onomatopoeia is the process of creating a word that phonetically imitates, resembles, or suggests the sound that it describes.",
  },
  {
    id: 242,
    subject: "Agriculture",
    question: "A young female cow that has not yet had a calf is called a:",
    options: {
      A: "Heifer",
      B: "Ewe",
      C: "Sow",
      D: "Mare",
    },
    correctAnswer: "A",
    explanation:
      "A heifer is a young female bovine that has not had a calf. A ewe is a female sheep, a sow is a female pig, and a mare is a female horse.",
  },
  {
    id: 243,
    subject: "Social Studies",
    question:
      "The head of government in countries like the United Kingdom, Canada, and Australia is called the:",
    options: {
      A: "President",
      B: "King",
      C: "Prime Minister",
      D: "Emperor",
    },
    correctAnswer: "C",
    explanation:
      "In a parliamentary system of government, the Prime Minister is the head of the executive branch and leader of the ruling party or coalition in parliament.",
  },
  {
    id: 244,
    subject: "Kiswahili",
    question: "Ni aina gani ya maneno kama vile 'yule', 'hiki', 'pale'?",
    options: {
      A: "Vitenzi",
      B: "Vielezi",
      C: "Vivumishi vya kuonyesha",
      D: "Viunganishi",
    },
    correctAnswer: "C",
    explanation:
      "Maneno haya ni vivumishi vya kuonyesha (demonstrative adjectives/pronouns) kwa sababu yanatumika kudokeza au kuonyesha mahali au kitu kinachozungumziwa.",
  },
  {
    id: 245,
    subject: "Creative Art",
    question: "In photography, what does the term 'aperture' refer to?",
    options: {
      A: "The speed at which the camera takes a picture",
      B: "The sensitivity of the camera's sensor to light",
      C: "The opening in the lens through which light passes",
      D: "The distance between the lens and the subject",
    },
    correctAnswer: "C",
    explanation:
      "The aperture is the opening of a lens's diaphragm through which light passes. It is calibrated in f/stops and controls the amount of light that reaches the sensor, as well as the depth of field.",
  },
  {
    id: 246,
    subject: "Mathematics",
    question: "What does the Roman numeral 'C' represent?",
    options: {
      A: "10",
      B: "50",
      C: "100",
      D: "500",
    },
    correctAnswer: "C",
    explanation:
      "In the Roman numeral system, C represents 100 (from the Latin word 'centum'). L represents 50, and D represents 500.",
  },
  {
    id: 247,
    subject: "Home Science",
    question: "A first-degree burn affects which layer of the skin?",
    options: {
      A: "Only the epidermis (outer layer)",
      B: "The epidermis and the dermis",
      C: "All layers of the skin",
      D: "The tissue beneath the skin",
    },
    correctAnswer: "A",
    explanation:
      "A first-degree burn is a superficial burn that affects only the epidermis, the outer layer of the skin. It typically causes redness and minor pain.",
  },
  {
    id: 248,
    subject: "Sports",
    question:
      "The 'Grand Slam' tournaments in tennis are the Australian Open, the French Open, Wimbledon, and which other?",
    options: {
      A: "The Italian Open",
      B: "The US Open",
      C: "The Madrid Open",
      D: "The China Open",
    },
    correctAnswer: "B",
    explanation:
      "The four major tournaments in tennis, known as the Grand Slams, are the Australian Open, the French Open, Wimbledon (in the UK), and the US Open.",
  },
  {
    id: 249,
    subject: "Pre-Technical Studies",
    question: "A 'vernier caliper' is a precision instrument used to measure:",
    options: {
      A: "Weight",
      B: "Temperature",
      C: "Time",
      D: "Linear dimensions (like length or diameter)",
    },
    correctAnswer: "D",
    explanation:
      "A vernier caliper is a measuring device used for making precise linear measurements. It can measure internal and external dimensions as well as depth.",
  },
  {
    id: 250,
    subject: "English",
    question:
      "Which of the following is the highest part of a story's plot, representing the turning point?",
    options: {
      A: "The exposition",
      B: "The rising action",
      C: "The climax",
      D: "The resolution",
    },
    correctAnswer: "C",
    explanation:
      "The climax is the point of highest tension or drama in a narrative's plot. It is often the moment when the main character faces their biggest challenge.",
  },
  {
    id: 251,
    subject: "Home Science",
    question: "Which food group is the primary source of calcium?",
    options: {
      A: "Fruits",
      B: "Grains",
      C: "Dairy products (milk, cheese, yogurt)",
      D: "Meat and poultry",
    },
    correctAnswer: "C",
    explanation:
      "Dairy products are the richest source of calcium, a mineral essential for building and maintaining strong bones and teeth.",
  },
  {
    id: 252,
    subject: "Sports",
    question:
      "In American football, how many points is a touchdown worth (before the extra point attempt)?",
    options: {
      A: "2",
      B: "3",
      C: "6",
      D: "7",
    },
    correctAnswer: "C",
    explanation:
      "A touchdown is the primary method of scoring in American and Canadian football and is worth six points. The scoring team can then attempt to score one or two additional points.",
  },
  {
    id: 253,
    subject: "Social Studies",
    question:
      "Which mountain range is the longest in the world and runs along the western coast of South America?",
    options: {
      A: "The Himalayas",
      B: "The Rocky Mountains",
      C: "The Alps",
      D: "The Andes",
    },
    correctAnswer: "D",
    explanation:
      "The Andes is the longest continental mountain range in the world, forming a continuous highland along the western edge of South America.",
  },
  {
    id: 254,
    subject: "Agriculture",
    question:
      "What is the name for the practice of grazing animals in one area for a period, then moving them to a new area?",
    options: {
      A: "Rotational grazing",
      B: "Free-range farming",
      C: "Zero grazing",
      D: "Ranching",
    },
    correctAnswer: "A",
    explanation:
      "Rotational grazing describes a variety of grazing systems whereby livestock are moved to portions of the pasture, called paddocks, while the other portions rest.",
  },
  {
    id: 255,
    subject: "Kiswahili",
    question: "Upi ni wingi wa neno 'mti'?",
    options: {
      A: "Miti",
      B: "Miti",
      C: "Wati",
      D: "Jiti",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'mti' liko katika ngeli ya U-I (au M-MI). Umoja ni 'mti' na wingi ni 'miti'.",
  },
  {
    id: 256,
    subject: "Mathematics",
    question: "If an event is certain to happen, what is its probability?",
    options: {
      A: "0",
      B: "0.5",
      C: "1",
      D: "100",
    },
    correctAnswer: "C",
    explanation:
      "In probability theory, a probability of 1 means the event is a certainty. A probability of 0 means the event is an impossibility.",
  },
  {
    id: 257,
    subject: "Creative Art",
    question:
      "A drawing or painting of a person that is intended to capture their likeness is a:",
    options: {
      A: "Landscape",
      B: "Still life",
      C: "Portrait",
      D: "Caricature",
    },
    correctAnswer: "C",
    explanation:
      "A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expression is predominant.",
  },
  {
    id: 258,
    subject: "Pre-Technical Studies",
    question: "What is the function of the 'chuck' on an electric drill?",
    options: {
      A: "To provide power",
      B: "To hold the drill bit",
      C: "To change the direction of rotation",
      D: "To cool the motor",
    },
    correctAnswer: "B",
    explanation:
      "A chuck is a specialized type of clamp used to hold a rotating tool, such as the drill bit in a power drill.",
  },
  {
    id: 259,
    subject: "English",
    question: "A 'stanza' is a division of a:",
    options: {
      A: "Novel",
      B: "Play",
      C: "Poem",
      D: "Short story",
    },
    correctAnswer: "C",
    explanation:
      "A stanza is a group of lines forming the basic recurring metrical unit in a poem; it is the poetic equivalent of a paragraph.",
  },
  {
    id: 260,
    subject: "Home Science",
    question:
      "Which vitamin is known as the 'sunshine vitamin' because the body produces it in response to sun exposure?",
    options: {
      A: "Vitamin A",
      B: "Vitamin C",
      C: "Vitamin D",
      D: "Vitamin K",
    },
    correctAnswer: "C",
    explanation:
      "Vitamin D is produced by the body as a response to sun exposure; it can also be consumed in food or supplements. It is essential for calcium absorption.",
  },
  {
    id: 261,
    subject: "Sports",
    question: "Which of these is a position in the game of chess?",
    options: {
      A: "Striker",
      B: "Goalkeeper",
      C: "Knight",
      D: "Pitcher",
    },
    correctAnswer: "C",
    explanation:
      "A Knight is a piece in the game of chess, represented by a horse's head and neck. The other options are positions in football/soccer, baseball, etc.",
  },
  {
    id: 262,
    subject: "Social Studies",
    question:
      "The historical period characterized by the use of stone tools is known as the:",
    options: {
      A: "Iron Age",
      B: "Bronze Age",
      C: "Stone Age",
      D: "Information Age",
    },
    correctAnswer: "C",
    explanation:
      "The Stone Age was a broad prehistoric period during which stone was widely used to make tools with an edge, a point, or a percussion surface.",
  },
  {
    id: 263,
    subject: "Agriculture",
    question: "A castrated male chicken is called a:",
    options: {
      A: "Rooster",
      B: "Hen",
      C: "Capon",
      D: "Chick",
    },
    correctAnswer: "C",
    explanation:
      "A capon is a cockerel (a young male chicken) that has been castrated or neutered to improve the quality of its meat.",
  },
  {
    id: 264,
    subject: "Kiswahili",
    question: "Msemo 'kula chumvi nyingi' una maana gani?",
    options: {
      A: "Kupenda chakula chenye chumvi",
      B: "Kuishi miaka mingi",
      C: "Kuwa mgonjwa",
      D: "Kufanya kazi kwa bidii",
    },
    correctAnswer: "B",
    explanation:
      "Hii ni nahau inayomaanisha kuwa na umri mkubwa au kuishi kwa muda mrefu na hivyo kupata uzoefu mwingi wa maisha.",
  },
  {
    id: 265,
    subject: "Mathematics",
    question: "How many degrees are in a straight line?",
    options: {
      A: "90",
      B: "180",
      C: "270",
      D: "360",
    },
    correctAnswer: "B",
    explanation:
      "A straight line represents a straight angle, which always measures 180 degrees.",
  },
  {
    id: 266,
    subject: "Creative Art",
    question:
      "The technique of creating an illusion of depth on a flat surface is called:",
    options: {
      A: "Perspective",
      B: "Symmetry",
      C: "Pattern",
      D: "Texture",
    },
    correctAnswer: "A",
    explanation:
      "Perspective in art is the technique used to represent three-dimensional objects on a two-dimensional surface in a way that looks natural and realistic. It is used to create an illusion of space and depth.",
  },
  {
    id: 267,
    subject: "Pre-Technical Studies",
    question:
      "A tool with a heavy head and a handle, used for tasks like breaking things or driving in stakes, is a:",
    options: {
      A: "Screwdriver",
      B: "Wrench",
      C: "Sledgehammer",
      D: "Pliers",
    },
    correctAnswer: "C",
    explanation:
      "A sledgehammer is a large, heavy hammer used for jobs that require a lot of force, such as demolition work or driving posts.",
  },
  {
    id: 268,
    subject: "English",
    question: "What is the collective noun for a group of lions?",
    options: {
      A: "A pack",
      B: "A herd",
      C: "A pride",
      D: "A flock",
    },
    correctAnswer: "C",
    explanation:
      "A group of lions is called a pride. A pack is for wolves or dogs, a herd is for cattle or elephants, and a flock is for sheep or birds.",
  },
  {
    id: 269,
    subject: "Home Science",
    question: "In first aid, what does the acronym ABC stand for?",
    options: {
      A: "Action, Bandage, Care",
      B: "Airway, Breathing, Circulation",
      C: "Assess, Bleeding, Call",
      D: "Alert, Brace, Compress",
    },
    correctAnswer: "B",
    explanation:
      "ABC stands for Airway, Breathing, and Circulation. It is a mnemonic used by first aiders to remember the essential steps in assessing and treating a patient.",
  },
  {
    id: 270,
    subject: "Sports",
    question: "Which of these is a winter sport?",
    options: {
      A: "Beach Volleyball",
      B: "Rowing",
      C: "Snowboarding",
      D: "Water Polo",
    },
    correctAnswer: "C",
    explanation:
      "Snowboarding is a recreational activity and Olympic and Paralympic sport that involves descending a snow-covered slope while standing on a snowboard attached to a rider's feet.",
  },
  {
    id: 271,
    subject: "Social Studies",
    question:
      "Apartheid was a system of racial segregation and discrimination that existed in which country?",
    options: {
      A: "India",
      B: "South Africa",
      C: "Brazil",
      D: "United States",
    },
    correctAnswer: "B",
    explanation:
      "Apartheid was a political and social system in South Africa during the era of White minority rule. It enforced racial discrimination and segregation against non-Whites.",
  },
  {
    id: 272,
    subject: "Agriculture",
    question:
      "The part of a plant that is typically underground and functions to anchor the plant and absorb water and nutrients is the:",
    options: {
      A: "Stem",
      B: "Leaf",
      C: "Flower",
      D: "Root",
    },
    correctAnswer: "D",
    explanation:
      "The root is the part of a vascular plant normally underground. Its primary functions are anchorage of the plant, absorption of water and dissolved minerals and conduction of these to the stem.",
  },
  {
    id: 273,
    subject: "Kiswahili",
    question: "Neno 'kitabu' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "U-I",
      C: "KI-VI",
      D: "I-ZI",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'kitabu' linaanza na 'ki-' katika umoja na wingi wake ni 'vitabu', hivyo liko katika ngeli ya KI-VI.",
  },
  {
    id: 274,
    subject: "Mathematics",
    question: "What is 15% of 300?",
    options: {
      A: "15",
      B: "30",
      C: "45",
      D: "60",
    },
    correctAnswer: "C",
    explanation:
      "To calculate the percentage, you can multiply the number by the percentage value (as a decimal). 300 * 0.15 = 45.",
  },
  {
    id: 275,
    subject: "Creative Art",
    question:
      "The art and technique of creating moving images by means of photography is called:",
    options: {
      A: "Sculpture",
      B: "Cinematography",
      C: "Calligraphy",
      D: "Architecture",
    },
    correctAnswer: "B",
    explanation:
      "Cinematography is the science or art of motion-picture photography by recording light or other electromagnetic radiation, either electronically or chemically.",
  },
  {
    id: 276,
    subject: "Pre-Technical Studies",
    question:
      "A simple machine made of a grooved wheel and a rope or cable is called a:",
    options: {
      A: "Lever",
      B: "Pulley",
      C: "Wedge",
      D: "Screw",
    },
    correctAnswer: "B",
    explanation:
      "A pulley is a simple machine that uses a grooved wheel and a rope to raise, lower or move a load.",
  },
  {
    id: 277,
    subject: "English",
    question: "A long speech by one actor in a play or movie is a:",
    options: {
      A: "Dialogue",
      B: "Monologue",
      C: "Chorus",
      D: "Script",
    },
    correctAnswer: "B",
    explanation:
      "A monologue is a speech presented by a single character, most often to express their mental thoughts aloud, though sometimes also to directly address another character or the audience.",
  },
  {
    id: 278,
    subject: "Home Science",
    question: "Which of these is a characteristic of a well-made garment?",
    options: {
      A: "Uneven stitches and loose threads",
      B: "Raw, unfinished seam edges",
      C: "Smooth, flat seams and neat finishing",
      D: "Mismatched patterns at the seams",
    },
    correctAnswer: "C",
    explanation:
      "Quality garment construction is indicated by details like even stitching, secure seams that lie flat, and neatly finished edges that prevent fraying.",
  },
  {
    id: 279,
    subject: "Sports",
    question: "In which city were the first modern Olympic Games held in 1896?",
    options: {
      A: "Paris",
      B: "London",
      C: "Athens",
      D: "Rome",
    },
    correctAnswer: "C",
    explanation:
      "The first international Olympic Games held in modern history took place in their ancient birthplace of Greece. The Games were held in Athens in 1896.",
  },
  {
    id: 280,
    subject: "Social Studies",
    question:
      "What is the name for a large, single landmass composed of all the continents joined together that existed millions of years ago?",
    options: {
      A: "Eurasia",
      B: "Gondwana",
      C: "Pangaea",
      D: "Laurasia",
    },
    correctAnswer: "C",
    explanation:
      "Pangaea was a supercontinent that existed during the late Paleozoic and early Mesozoic eras. It assembled from earlier continental units approximately 335 million years ago, and it began to break apart about 175 million years ago.",
  },
  {
    id: 281,
    subject: "Agriculture",
    question: "Which of these is an example of a perennial plant?",
    options: {
      A: "Maize, which completes its life cycle in one year",
      B: "A rose bush, which lives for more than two years",
      C: "A carrot, which completes its life cycle in two years",
      D: "Wheat, which is harvested annually",
    },
    correctAnswer: "B",
    explanation:
      "A perennial plant is a plant that lives for more than two years. Unlike annuals (one year) and biennials (two years), perennials often regrow from the same root system year after year.",
  },
  {
    id: 282,
    subject: "Kiswahili",
    question: "Nani anayeitwa 'babu'?",
    options: {
      A: "Baba ya baba au mama yako",
      B: "Ndugu wa kiume wa mama yako",
      C: "Mtoto wa kiume wa ndugu yako",
      D: "Mume wa dada yako",
    },
    correctAnswer: "A",
    explanation:
      "Babu ni jina la heshima linalotumika kumrejelea baba wa mzazi wako (baba au mama).",
  },
  {
    id: 283,
    subject: "Mathematics",
    question: "A shape with four equal sides and four right angles is a:",
    options: {
      A: "Rectangle",
      B: "Rhombus",
      C: "Square",
      D: "Trapezium",
    },
    correctAnswer: "C",
    explanation:
      "A square is a special type of rectangle (with four right angles) and a special type of rhombus (with four equal sides).",
  },
  {
    id: 284,
    subject: "Creative Art",
    question:
      "The genre of art that represents subjects in a way that is true to life is called:",
    options: {
      A: "Abstract art",
      B: "Realism",
      C: "Surrealism",
      D: "Cubism",
    },
    correctAnswer: "B",
    explanation:
      "Realism in the arts is the attempt to represent subject matter truthfully, without artificiality and avoiding artistic conventions, implausible, exotic, and supernatural elements.",
  },
  {
    id: 285,
    subject: "Pre-Technical Studies",
    question: "Which material is an alloy of iron and carbon?",
    options: {
      A: "Brass",
      B: "Bronze",
      C: "Steel",
      D: "Aluminum",
    },
    correctAnswer: "C",
    explanation:
      "Steel is an alloy made up of iron with typically a few tenths of a percent of carbon to improve its strength and fracture resistance.",
  },
  {
    id: 286,
    subject: "English",
    question:
      "The repetition of the same letter or sound at the beginning of adjacent or closely connected words is called:",
    options: {
      A: "Assonance",
      B: "Alliteration",
      C: "Rhyme",
      D: "Onomatopoeia",
    },
    correctAnswer: "B",
    explanation:
      "Alliteration is a literary device where two or more words in a phrase or line of poetry share the same beginning consonant sound. An example is 'She sells seashells by the seashore'.",
  },
  {
    id: 287,
    subject: "Home Science",
    question: "A 'balanced diet' is one that contains:",
    options: {
      A: "Only foods from one food group",
      B: "The correct proportions of all the different food groups",
      C: "As much sugary food as possible",
      D: "Only raw vegetables",
    },
    correctAnswer: "B",
    explanation:
      "A balanced diet provides all the essential nutrients—carbohydrates, fats, proteins, vitamins, minerals, and water—that the body needs to function correctly.",
  },
  {
    id: 288,
    subject: "Sports",
    question: "In which game is the term 'checkmate' used?",
    options: {
      A: "Draughts (Checkers)",
      B: "Chess",
      C: "Bridge",
      D: "Poker",
    },
    correctAnswer: "B",
    explanation:
      "Checkmate is a situation in the game of chess in which a player's king is in a position to be captured (in 'check') and there is no way to move out of the capture. It results in an immediate loss for that player.",
  },
  {
    id: 289,
    subject: "Social Studies",
    question:
      "The movement of people from one country or region to another with the intention of settling there permanently is called:",
    options: {
      A: "Tourism",
      B: "Migration",
      C: "Exploration",
      D: "Trade",
    },
    correctAnswer: "B",
    explanation:
      "Human migration is the movement of people from one place to another with intentions of settling, permanently or temporarily, at a new location.",
  },
  {
    id: 290,
    subject: "Agriculture",
    question:
      "A piece of land, especially one used for growing crops, is commonly called a:",
    options: {
      A: "Pond",
      B: "Field",
      C: "Forest",
      D: "Quarry",
    },
    correctAnswer: "B",
    explanation:
      "In agriculture, a field is an area of land, enclosed or otherwise, used for agricultural purposes such as cultivating crops or as a pasture for livestock.",
  },
  {
    id: 291,
    subject: "Kiswahili",
    question: "Mtu asiyeona anaitwaje?",
    options: {
      A: "Kiziwi",
      B: "Bubu",
      C: "Kipofu",
      D: "Kilema",
    },
    correctAnswer: "C",
    explanation:
      "Mtu ambaye hana uwezo wa kuona anaitwa kipofu. Kiziwi hasikii, na bubu hazungumzi.",
  },
  {
    id: 292,
    subject: "Mathematics",
    question:
      "What is the perimeter of a rectangle with a length of 10m and a width of 5m?",
    options: {
      A: "15m",
      B: "25m",
      C: "30m",
      D: "50m",
    },
    correctAnswer: "C",
    explanation:
      "The perimeter of a rectangle is calculated using the formula P = 2(length + width). So, P = 2(10m + 5m) = 2(15m) = 30m.",
  },
  {
    id: 293,
    subject: "Creative Art",
    question:
      "The part of a picture that appears to be in the distance is the:",
    options: {
      A: "Foreground",
      B: "Middle ground",
      C: "Background",
      D: "Frame",
    },
    correctAnswer: "C",
    explanation:
      "In a visual work of art, the background is the part of the scene that appears to be furthest from the viewer. The foreground is closest, and the middle ground is in between.",
  },
  {
    id: 294,
    subject: "Pre-Technical Studies",
    question: "A 'spirit level' is a tool used to determine if a surface is:",
    options: {
      A: "Hot or cold",
      B: "Rough or smooth",
      C: "Horizontal (level) or vertical (plumb)",
      D: "Made of wood or metal",
    },
    correctAnswer: "C",
    explanation:
      "A spirit level is an instrument designed to indicate whether a surface is perfectly horizontal or vertical. It contains a small glass tube with a bubble in a liquid.",
  },
  {
    id: 295,
    subject: "English",
    question: "The person who writes a book, article, or other text is the:",
    options: {
      A: "Publisher",
      B: "Editor",
      C: "Author",
      D: "Illustrator",
    },
    correctAnswer: "C",
    explanation:
      "An author is the writer of a book, article, play, or other written work.",
  },
  {
    id: 296,
    subject: "Home Science",
    question:
      "Which of these is a leavening agent used in baking to make cakes and breads rise?",
    options: {
      A: "Salt",
      B: "Sugar",
      C: "Baking powder",
      D: "Flour",
    },
    correctAnswer: "C",
    explanation:
      "A leavening agent is a substance that causes expansion of doughs and batters by the release of gases. Baking powder is a chemical leavening agent that releases carbon dioxide when moistened and heated.",
  },
  {
    id: 297,
    subject: "Sports",
    question: "How many rings are in the Olympic symbol?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "B",
    explanation:
      "The Olympic symbol consists of five intertwined rings of different colors (blue, yellow, black, green, and red) on a white field. The rings represent the five inhabited continents.",
  },
  {
    id: 298,
    subject: "Social Studies",
    question:
      "What is the process of breaking down rocks into smaller particles called?",
    options: {
      A: "Erosion",
      B: "Weathering",
      C: "Deposition",
      D: "Compaction",
    },
    correctAnswer: "B",
    explanation:
      "Weathering is the breaking down or dissolving of rocks and minerals on Earths surface. Once a rock has been broken down, a process called erosion transports the bits of rock and minerals away.",
  },
  {
    id: 299,
    subject: "Agriculture",
    question: "A mature female pig that has given birth is called a:",
    options: {
      A: "Gilt",
      B: "Sow",
      C: "Boar",
      D: "Piglet",
    },
    correctAnswer: "B",
    explanation:
      "A sow is an adult female swine. A gilt is a young female that has not yet farrowed (given birth). A boar is a male, and a piglet is a young pig.",
  },
  {
    id: 300,
    subject: "Kiswahili",
    question: "Katika ngeli ya A-WA, wingi wa 'mtu' ni upi?",
    options: {
      A: "Watu",
      B: "Mtu",
      C: "Vitu",
      D: "Jitu",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'mtu' liko katika ngeli ya A-WA. Kiambishi cha umoja ni 'm-' na cha wingi ni 'wa-', hivyo wingi wa 'mtu' ni 'watu'.",
  },
  {
    id: 301,
    subject: "Mathematics",
    question: "A polygon with 10 sides is called a:",
    options: {
      A: "Hexagon",
      B: "Octagon",
      C: "Decagon",
      D: "Nonagon",
    },
    correctAnswer: "C",
    explanation:
      "A decagon is a ten-sided polygon. A hexagon has 6 sides, an octagon has 8, and a nonagon has 9.",
  },
  {
    id: 302,
    subject: "Creative Art",
    question: "Which one of the following is a principle of art?",
    options: {
      A: "Line",
      B: "Shape",
      C: "Color",
      D: "Balance",
    },
    correctAnswer: "D",
    explanation:
      "Balance is a principle of art that deals with the visual distribution of weight in a composition. Line, Shape, and Color are elements of art.",
  },
  {
    id: 303,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is used to join pieces of wood together in furniture making?",
    options: {
      A: "A mortise and tenon joint",
      B: "A rivet",
      C: "A weld",
      D: "Solder",
    },
    correctAnswer: "A",
    explanation:
      "The mortise and tenon joint is a strong and traditional method of joining two pieces of wood at a right angle. The other options are for joining metal.",
  },
  {
    id: 304,
    subject: "English",
    question: "Which punctuation mark is used to separate items in a list?",
    options: {
      A: "A period (.)",
      B: "A comma (,)",
      C: "A question mark (?)",
      D: "An exclamation mark (!)",
    },
    correctAnswer: "B",
    explanation:
      "Commas are used to separate three or more words, phrases, or clauses in a series. For example: 'I need to buy eggs, milk, and bread.'",
  },
  {
    id: 305,
    subject: "Home Science",
    question: "The transfer of heat through direct contact is called:",
    options: {
      A: "Convection",
      B: "Radiation",
      C: "Conduction",
      D: "Insulation",
    },
    correctAnswer: "C",
    explanation:
      "Conduction is the process by which heat energy is transmitted through collisions between neighboring atoms or molecules, such as when a metal spoon heats up in a hot cup of tea.",
  },
  {
    id: 306,
    subject: "Sports",
    question: "A period of play in a game of ice hockey is called a:",
    options: {
      A: "Quarter",
      B: "Inning",
      C: "Round",
      D: "Period",
    },
    correctAnswer: "D",
    explanation:
      "A professional ice hockey game consists of three 20-minute periods.",
  },
  {
    id: 307,
    subject: "Social Studies",
    question: "What is the currency of Japan?",
    options: {
      A: "Yuan",
      B: "Won",
      C: "Yen",
      D: "Baht",
    },
    correctAnswer: "C",
    explanation:
      "The Japanese Yen is the official currency of Japan. The Yuan is the currency of China, and the Won is the currency of South Korea.",
  },
  {
    id: 308,
    subject: "Agriculture",
    question: "The science of soil management and crop production is called:",
    options: {
      A: "Botany",
      B: "Zoology",
      C: "Agronomy",
      D: "Ecology",
    },
    correctAnswer: "C",
    explanation:
      "Agronomy is the science and technology of producing and using plants in agriculture for food, fuel, fiber, and land reclamation.",
  },
  {
    id: 309,
    subject: "Kiswahili",
    question: "Mtu anayefanya kazi ya kuunda vitu vya chuma anaitwaje?",
    options: {
      A: "Seremala",
      B: "Mhunzi",
      C: "Mwashi",
      D: "Mvuvi",
    },
    correctAnswer: "B",
    explanation:
      "Mhunzi ni fundi anayetengeneza au kukarabati vifaa vya metali kama vile chuma. Seremala anafanya kazi na mbao.",
  },
  {
    id: 310,
    subject: "Mathematics",
    question:
      "What is the term for a line segment that connects two points on a circle's circumference but does not pass through the center?",
    options: {
      A: "Radius",
      B: "Diameter",
      C: "Chord",
      D: "Arc",
    },
    correctAnswer: "C",
    explanation:
      "A chord is a straight line segment whose endpoints both lie on a circular arc. The diameter is a special type of chord that passes through the center.",
  },
  {
    id: 311,
    subject: "Creative Art",
    question:
      "The style of art, music, and architecture developed in Europe from about 1600, characterized by ornate detail, is:",
    options: {
      A: "Gothic",
      B: "Baroque",
      C: "Neoclassical",
      D: "Modern",
    },
    correctAnswer: "B",
    explanation:
      "The Baroque style is characterized by exaggerated motion and clear detail used to produce drama, exuberance, and grandeur in sculpture, painting, architecture, literature, dance, and music.",
  },
  {
    id: 312,
    subject: "Pre-Technical Studies",
    question: "What type of energy is stored in a battery?",
    options: {
      A: "Kinetic energy",
      B: "Potential energy",
      C: "Chemical energy",
      D: "Thermal energy",
    },
    correctAnswer: "C",
    explanation:
      "A battery is a device that stores chemical energy and converts it into electrical energy through electrochemical reactions.",
  },
  {
    id: 313,
    subject: "English",
    question: "Which of these words is a verb?",
    options: {
      A: "Beautiful",
      B: "Quickly",
      C: "Sing",
      D: "House",
    },
    correctAnswer: "C",
    explanation:
      "A verb is a word that describes an action, state, or occurrence. 'Sing' is an action verb. 'Beautiful' is an adjective, 'quickly' is an adverb, and 'house' is a noun.",
  },
  {
    id: 314,
    subject: "Home Science",
    question: "What is the primary function of proteins in the body?",
    options: {
      A: "To provide a quick source of energy",
      B: "To build and repair tissues",
      C: "To insulate the body",
      D: "To carry genetic information",
    },
    correctAnswer: "B",
    explanation:
      "Proteins are essential macronutrients that serve as the building blocks for tissues like muscle, bone, skin, and hair. They are also vital for enzymes and hormones.",
  },
  {
    id: 315,
    subject: "Sports",
    question:
      "The 'Super Bowl' is the annual championship game of which sport?",
    options: {
      A: "Baseball",
      B: "Basketball",
      C: "Ice Hockey",
      D: "American Football",
    },
    correctAnswer: "D",
    explanation:
      "The Super Bowl is the annual championship game of the National Football League (NFL) in the United States.",
  },
  {
    id: 316,
    subject: "Social Studies",
    question: "What is the largest desert in the world?",
    options: {
      A: "The Sahara Desert",
      B: "The Gobi Desert",
      C: "The Arabian Desert",
      D: "The Antarctic Polar Desert",
    },
    correctAnswer: "D",
    explanation:
      "By the definition of a desert as a place with very low precipitation, the largest desert in the world is the Antarctic Polar Desert, followed by the Arctic Polar Desert. The Sahara is the largest hot desert.",
  },
  {
    id: 317,
    subject: "Agriculture",
    question:
      "A disease that can be transmitted from animals to humans is called:",
    options: {
      A: "A chronic disease",
      B: "An epidemic",
      C: "A zoonotic disease",
      D: "A genetic disorder",
    },
    correctAnswer: "C",
    explanation:
      "A zoonosis is an infectious disease caused by a pathogen (such as a bacterium, virus, or parasite) that has jumped from an animal to a human.",
  },
  {
    id: 318,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'rafiki' ni nini?",
    options: {
      A: "Adui",
      B: "Jirani",
      C: "Ndugu",
      D: "Mgeni",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'adui' lina maana kinyume na 'rafiki'. Adui ni mtu unayepingana naye, ilhali rafiki ni mtu unayependana naye.",
  },
  {
    id: 319,
    subject: "Mathematics",
    question: "What is the value of 8 factorial (8!)?",
    options: {
      A: "64",
      B: "40320",
      C: "5040",
      D: "362880",
    },
    correctAnswer: "B",
    explanation:
      "The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. So, 8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40,320.",
  },
  {
    id: 320,
    subject: "Creative Art",
    question: "What is a 'kiln' used for in the arts?",
    options: {
      A: "To mix paints",
      B: "To fire pottery and ceramics",
      C: "To stretch a canvas",
      D: "To cast metal sculptures",
    },
    correctAnswer: "B",
    explanation:
      "A kiln is a thermally insulated chamber, a type of oven, that produces temperatures sufficient to complete some process, such as hardening, drying, or chemical changes. In art, it is primarily used for firing clay.",
  },
  {
    id: 321,
    subject: "Pre-Technical Studies",
    question:
      "A force that opposes motion between two surfaces that are in contact is called:",
    options: {
      A: "Gravity",
      B: "Magnetism",
      C: "Friction",
      D: "Inertia",
    },
    correctAnswer: "C",
    explanation:
      "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.",
  },
  {
    id: 322,
    subject: "English",
    question: "A word having the opposite meaning to another word is called:",
    options: {
      A: "A synonym",
      B: "An antonym",
      C: "A homonym",
      D: "A pseudonym",
    },
    correctAnswer: "B",
    explanation:
      "An antonym is a word that has the exact opposite meaning of another word. For example, 'hot' is the antonym of 'cold'.",
  },
  {
    id: 323,
    subject: "Home Science",
    question:
      "What is the term for a set of rules of etiquette used when eating, such as which fork to use?",
    options: {
      A: "Table manners",
      B: "Kitchen safety",
      C: "Recipe following",
      D: "Food hygiene",
    },
    correctAnswer: "A",
    explanation:
      "Table manners are the rules of etiquette used while eating, which may also include the appropriate use of utensils.",
  },
  {
    id: 324,
    subject: "Sports",
    question:
      "Which sport is played on a rectangular court with a net in the middle, where players use rackets to hit a ball back and forth?",
    options: {
      A: "Badminton",
      B: "Squash",
      C: "Tennis",
      D: "Table Tennis",
    },
    correctAnswer: "C",
    explanation:
      "This describes the game of lawn tennis. While badminton and table tennis are similar, they use a shuttlecock and a smaller table, respectively. Squash is played against a wall.",
  },
  {
    id: 325,
    subject: "Social Studies",
    question: "What is the longest river in Europe?",
    options: {
      A: "The Danube",
      B: "The Rhine",
      C: "The Volga",
      D: "The Thames",
    },
    correctAnswer: "C",
    explanation:
      "The Volga River, which flows through central Russia and into the Caspian Sea, is the longest river in Europe in terms of length, discharge, and watershed.",
  },
  {
    id: 326,
    subject: "Agriculture",
    question:
      "What is the common name for the chemical substance used to kill unwanted insects or other pests?",
    options: {
      A: "Fertilizer",
      B: "Herbicide",
      C: "Pesticide",
      D: "Fungicide",
    },
    correctAnswer: "C",
    explanation:
      "A pesticide is any substance used to kill, repel, or control certain forms of plant or animal life that are considered to be pests. Herbicide (for plants) and fungicide (for fungi) are types of pesticides.",
  },
  {
    id: 327,
    subject: "Kiswahili",
    question: "Sentensi 'Gari limeharibika' iko katika kauli gani?",
    options: {
      A: "Kauli ya kutenda",
      B: "Kauli ya kutendewa",
      C: "Kauli ya kutendeka",
      D: "Kauli ya kutendesha",
    },
    correctAnswer: "C",
    explanation:
      "Hii ni kauli ya kutendeka kwa sababu inaonyesha kuwa kitendo (kuharibika) kimewezekana kutokea kwa gari, bila kutaja nani amekitenda.",
  },
  {
    id: 328,
    subject: "Mathematics",
    question: "What is the name for a triangle with two equal sides?",
    options: {
      A: "Equilateral",
      B: "Isosceles",
      C: "Scalene",
      D: "Right-angled",
    },
    correctAnswer: "B",
    explanation:
      "An isosceles triangle has two sides of equal length. An equilateral triangle has three equal sides, and a scalene triangle has no equal sides.",
  },
  {
    id: 329,
    subject: "Creative Art",
    question:
      "An artwork created by printing a design from a stone or metal plate with a smooth surface is a:",
    options: {
      A: "Woodcut",
      B: "Lithograph",
      C: "Screenprint",
      D: "Etching",
    },
    correctAnswer: "B",
    explanation:
      "Lithography is a printing process based on the principle that oil and water do not mix. A design is drawn with a greasy substance onto a flat stone or plate, which is then used for printing.",
  },
  {
    id: 330,
    subject: "Pre-Technical Studies",
    question: "Which of these is a unit of electrical resistance?",
    options: {
      A: "Volt",
      B: "Ampere",
      C: "Watt",
      D: "Ohm",
    },
    correctAnswer: "D",
    explanation:
      "The ohm (symbol: Ω) is the SI derived unit of electrical resistance. The Volt measures potential difference, the Ampere measures current, and the Watt measures power.",
  },
  {
    id: 331,
    subject: "English",
    question: "The sequence of events that make up a story is called the:",
    options: {
      A: "Theme",
      B: "Setting",
      C: "Plot",
      D: "Characterization",
    },
    correctAnswer: "C",
    explanation:
      "The plot is the main storyline of a literary or dramatic work, which includes the exposition, rising action, climax, falling action, and resolution.",
  },
  {
    id: 332,
    subject: "Home Science",
    question:
      "Which method of cooking involves submerging food in hot liquid, such as water or stock?",
    options: {
      A: "Roasting",
      B: "Grilling",
      C: "Boiling",
      D: "Baking",
    },
    correctAnswer: "C",
    explanation:
      "Boiling is a moist-heat cooking method that involves cooking food in a liquid, usually water, that has reached its highest possible temperature of 100°C (212°F).",
  },
  {
    id: 333,
    subject: "Sports",
    question: "A 'bunker' is a hazard found in which sport?",
    options: {
      A: "Tennis",
      B: "Golf",
      C: "Cricket",
      D: "Swimming",
    },
    correctAnswer: "B",
    explanation:
      "In golf, a bunker is a depression near a green or fairway that is usually filled with sand. It is a type of hazard.",
  },
  {
    id: 334,
    subject: "Social Studies",
    question: "Who is credited with inventing the telephone?",
    options: {
      A: "Thomas Edison",
      B: "Alexander Graham Bell",
      C: "Guglielmo Marconi",
      D: "Nikola Tesla",
    },
    correctAnswer: "B",
    explanation:
      "Alexander Graham Bell was a Scottish-born inventor, scientist, and engineer who is credited with patenting the first practical telephone.",
  },
  {
    id: 335,
    subject: "Agriculture",
    question:
      "A system where crops are grown among trees and shrubs is known as:",
    options: {
      A: "Aquaculture",
      B: "Monoculture",
      C: "Agroforestry",
      D: "Hydroponics",
    },
    correctAnswer: "C",
    explanation:
      "Agroforestry is a land use management system in which trees or shrubs are grown around or among crops or pastureland. It combines agriculture and forestry technologies to create more diverse, productive, and sustainable land-use systems.",
  },
  {
    id: 336,
    subject: "Kiswahili",
    question: "Ni methali gani inayofundisha umuhimu wa umoja?",
    options: {
      A: "Haraka haraka haina baraka",
      B: "Kidole kimoja hakivunji chawa",
      C: "Mvumilivu hula mbivu",
      D: "Hasira hasara",
    },
    correctAnswer: "B",
    explanation:
      "Methali 'Kidole kimoja hakivunji chawa' inamaanisha kwamba baadhi ya kazi ni ngumu kufanywa na mtu mmoja na zinahitaji ushirikiano. Inasisitiza nguvu ya umoja.",
  },
  {
    id: 337,
    subject: "Mathematics",
    question: "What is the formula for the circumference of a circle?",
    options: {
      A: "C = πr²",
      B: "C = 2πr",
      C: "C = πd²",
      D: "C = r/2",
    },
    correctAnswer: "B",
    explanation:
      "The circumference of a circle can be calculated using the formula C = 2πr (where r is the radius) or C = πd (where d is the diameter). C = πr² is the formula for the area.",
  },
  {
    id: 338,
    subject: "Creative Art",
    question: "The building and design of buildings is a field of art called:",
    options: {
      A: "Sculpture",
      B: "Architecture",
      C: "Pottery",
      D: "Calligraphy",
    },
    correctAnswer: "B",
    explanation:
      "Architecture is both the process and the product of planning, designing, and constructing buildings or other structures.",
  },
  {
    id: 339,
    subject: "Pre-Technical Studies",
    question:
      "A device that converts mechanical energy into electrical energy is called a:",
    options: {
      A: "Motor",
      B: "Generator",
      C: "Transformer",
      D: "Capacitor",
    },
    correctAnswer: "B",
    explanation:
      "A generator is a machine that converts motive power (mechanical energy) into electrical power for use in an external circuit. A motor does the opposite.",
  },
  {
    id: 340,
    subject: "English",
    question:
      "What is the name for the category or type of a literary work, such as 'mystery', 'fantasy', or 'romance'?",
    options: {
      A: "Genre",
      B: "Theme",
      C: "Plot",
      D: "Style",
    },
    correctAnswer: "A",
    explanation:
      "Genre is a category of artistic composition, as in music or literature, characterized by similarities in form, style, or subject matter.",
  },
  {
    id: 341,
    subject: "Home Science",
    question: "What is the recommended method for safely thawing frozen meat?",
    options: {
      A: "Leaving it on the kitchen counter all day",
      B: "In the refrigerator",
      C: "In a bowl of hot water",
      D: "In direct sunlight",
    },
    correctAnswer: "B",
    explanation:
      "The safest way to thaw meat is in the refrigerator. Leaving it at room temperature allows harmful bacteria to grow rapidly in the 'danger zone' (between 4°C and 60°C).",
  },
  {
    id: 342,
    subject: "Sports",
    question:
      "The yellow jersey ('maillot jaune') in the Tour de France is worn by:",
    options: {
      A: "The best young rider",
      B: "The leader of the general classification",
      C: "The best sprinter",
      D: "The 'King of the Mountains'",
    },
    correctAnswer: "B",
    explanation:
      "The yellow jersey is worn by the rider who has the lowest cumulative time over all the completed stages, making them the overall leader of the race.",
  },
  {
    id: 343,
    subject: "Social Studies",
    question:
      "The world's highest waterfall is Angel Falls, located in which country?",
    options: {
      A: "Brazil",
      B: "United States",
      C: "Venezuela",
      D: "Canada",
    },
    correctAnswer: "C",
    explanation:
      "Angel Falls (Salto Ángel) in Venezuela is the world's tallest uninterrupted waterfall, with a height of 979 meters (3,212 ft).",
  },
  {
    id: 344,
    subject: "Agriculture",
    question: "Which of these is a method of soil conservation?",
    options: {
      A: "Overgrazing",
      B: "Deforestation",
      C: "Terrace farming",
      D: "Ploughing down a slope",
    },
    correctAnswer: "C",
    explanation:
      "Terrace farming is a method of growing crops on the sides of hills or mountains by planting on graduated terraces built into the slope. This practice helps to reduce soil erosion and water runoff.",
  },
  {
    id: 345,
    subject: "Kiswahili",
    question: "Neno 'kesho' ni aina gani ya neno?",
    options: {
      A: "Nomino",
      B: "Kivumishi",
      C: "Kitenzi",
      D: "Kielezi cha wakati",
    },
    correctAnswer: "D",
    explanation:
      "'Kesho' ni kielezi cha wakati kwa sababu kinatoa taarifa kuhusu wakati ambapo kitendo kitatendeka (yaani, siku inayofuata).",
  },
  {
    id: 346,
    subject: "Mathematics",
    question: "What is the greatest common divisor (GCD) of 18 and 24?",
    options: {
      A: "2",
      B: "3",
      C: "6",
      D: "12",
    },
    correctAnswer: "C",
    explanation:
      "The GCD is the largest positive integer that divides both numbers without a remainder. The divisors of 18 are 1, 2, 3, 6, 9, 18. The divisors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. The greatest number in both lists is 6.",
  },
  {
    id: 347,
    subject: "Creative Art",
    question:
      "The 'Pop Art' movement, which emerged in the 1950s, was famously led by which artist known for his Campbell's Soup Cans paintings?",
    options: {
      A: "Jackson Pollock",
      B: "Salvador Dalí",
      C: "Andy Warhol",
      D: "Roy Lichtenstein",
    },
    correctAnswer: "C",
    explanation:
      "Andy Warhol was a leading figure in the Pop Art movement. His works explore the relationship between artistic expression, advertising, and celebrity culture that flourished by the 1960s.",
  },
  {
    id: 348,
    subject: "Pre-Technical Studies",
    question: "A lever, pulley, and inclined plane are all examples of:",
    options: {
      A: "Complex machines",
      B: "Simple machines",
      C: "Electrical components",
      D: "Measuring tools",
    },
    correctAnswer: "B",
    explanation:
      "Simple machines are mechanical devices that change the direction or magnitude of a force. The six classical simple machines are the lever, wheel and axle, pulley, inclined plane, wedge, and screw.",
  },
  {
    id: 349,
    subject: "English",
    question: "A book of maps is called:",
    options: {
      A: "An encyclopedia",
      B: "A dictionary",
      C: "An atlas",
      D: "A thesaurus",
    },
    correctAnswer: "C",
    explanation:
      "An atlas is a collection of maps; it is typically a bundle of maps of Earth or a region of Earth.",
  },
  {
    id: 350,
    subject: "Home Science",
    question: "Which of the following is a symptom of malaria?",
    options: {
      A: "Stomach ache",
      B: "High fever and chills",
      C: "A skin rash",
      D: "A broken bone",
    },
    correctAnswer: "B",
    explanation:
      "The classic symptoms of malaria, a disease spread by mosquitoes, include cycles of high fever, shaking chills, and sweating.",
  },

  {
    id: 1,
    subject: "Mathematics",
    question:
      "If a rectangle has a length of 12 cm and a width of 5 cm, what is its area?",
    options: {
      A: "17 cm²",
      B: "34 cm²",
      C: "60 cm²",
      D: "25 cm²",
    },
    correctAnswer: "C",
    explanation:
      "The area of a rectangle is calculated by multiplying its length by its width (Area = L × W). Therefore, 12 cm × 5 cm = 60 cm².",
  },
  {
    id: 2,
    subject: "sports",
    question: "In which sport would you perform a 'slam dunk'?",
    options: {
      A: "Football",
      B: "Basketball",
      C: "Tennis",
      D: "Cricket",
    },
    correctAnswer: "B",
    explanation:
      "A slam dunk is a type of shot in basketball where a player forces the ball directly through the hoop with one or both hands.",
  },
  {
    id: 3,
    subject: "creative art",
    question:
      "What are the three primary colors in subtractive color mixing (pigments)?",
    options: {
      A: "Red, Green, Blue",
      B: "Red, Yellow, Blue",
      C: "Orange, Green, Violet",
      D: "Black, White, Grey",
    },
    correctAnswer: "B",
    explanation:
      "In painting and traditional art, the primary colors are red, yellow, and blue. They cannot be created by mixing other colors, but they can be mixed to create all other colors.",
  },
  {
    id: 4,
    subject: "English",
    question: "Which of the following words is a synonym for 'happy'?",
    options: {
      A: "Sorrowful",
      B: "Joyful",
      C: "Angry",
      D: "Tired",
    },
    correctAnswer: "B",
    explanation:
      "A synonym is a word that has the same or nearly the same meaning as another word. 'Joyful' means feeling, expressing, or causing great pleasure and happiness.",
  },
  {
    id: 5,
    subject: "Kiswahili",
    question: "Neno 'shule' liko katika ngeli gani?",
    options: {
      A: "A-WA",
      B: "I-ZI",
      C: "U-I",
      D: "LI-YA",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'shule' lipo katika ngeli ya I-ZI. Kwa umoja ni 'shule' na kwa wingi ni 'shule'. Mfano: Shule yangu ni kubwa (I); Shule zetu ni kubwa (ZI).",
  },
  {
    id: 6,
    subject: "Social Studies",
    question: "What is the capital city of Kenya?",
    options: {
      A: "Mombasa",
      B: "Kisumu",
      C: "Nairobi",
      D: "Nakuru",
    },
    correctAnswer: "C",
    explanation:
      "Nairobi is the capital and the largest city of Kenya, serving as its administrative, economic, and cultural center.",
  },
  {
    id: 7,
    subject: "Pre-Technical Studies",
    question:
      "Which of these tools is best suited for cutting a curved shape out of a thin piece of wood?",
    options: {
      A: "Tenon saw",
      B: "Coping saw",
      C: "Hacksaw",
      D: "Chisel",
    },
    correctAnswer: "B",
    explanation:
      "A coping saw has a very thin, flexible blade held in a frame, which is specifically designed for cutting intricate external shapes and interior cutouts in woodworking.",
  },
  {
    id: 8,
    subject: "Agriculture",
    question:
      "The process of breaking down rocks and minerals on the Earth's surface to form soil is called:",
    options: {
      A: "Erosion",
      B: "Weathering",
      C: "Deposition",
      D: "Fertilization",
    },
    correctAnswer: "B",
    explanation:
      "Weathering is the natural process that breaks down rocks, soil, and minerals as well as wood and artificial materials through contact with the Earth's atmosphere, water, and biological organisms.",
  },
  {
    id: 9,
    subject: "Home Science",
    question:
      "Which nutrient is primarily responsible for building and repairing body tissues?",
    options: {
      A: "Carbohydrates",
      B: "Fats",
      C: "Vitamins",
      D: "Proteins",
    },
    correctAnswer: "D",
    explanation:
      "Proteins are essential macronutrients that serve as the building blocks for muscles, bones, skin, and other body tissues. They are crucial for growth and repair.",
  },
  {
    id: 10,
    subject: "Mathematics",
    question: "What is the value of x in the equation 3x - 4 = 11?",
    options: {
      A: "3",
      B: "5",
      C: "7",
      D: "15",
    },
    correctAnswer: "B",
    explanation:
      "To solve for x, first add 4 to both sides of the equation to get 3x = 15. Then, divide both sides by 3 to get x = 5.",
  },
  {
    id: 11,
    subject: "sports",
    question:
      "How many players are on a standard football (soccer) team on the field at the start of a match?",
    options: {
      A: "7",
      B: "9",
      C: "11",
      D: "15",
    },
    correctAnswer: "C",
    explanation:
      "A standard football match is played by two teams, each with a maximum of eleven players on the field at any one time, one of whom is the goalkeeper.",
  },
  {
    id: 12,
    subject: "creative art",
    question:
      "A type of art that uses small pieces of colored glass, stone, or other materials to create an image is called:",
    options: {
      A: "A mural",
      B: "A collage",
      C: "A sculpture",
      D: "A mosaic",
    },
    correctAnswer: "D",
    explanation:
      "A mosaic is a piece of art or image made from the assembling of small pieces of colored glass, stone, or other materials, known as tesserae.",
  },
  {
    id: 13,
    subject: "English",
    question:
      "Identify the part of speech of the underlined word: 'The cat sleeps peacefully.'",
    options: {
      A: "Verb",
      B: "Adjective",
      C: "Adverb",
      D: "Noun",
    },
    correctAnswer: "C",
    explanation:
      "An adverb is a word that modifies (describes) a verb, an adjective, or another adverb. In this sentence, 'peacefully' describes how the cat sleeps.",
  },
  {
    id: 14,
    subject: "Kiswahili",
    question: "Kamilisha methali: 'Asiyefunzwa na mamaye...'",
    options: {
      A: "hufunzwa na dunia",
      B: "hatakuwa na adabu",
      C: "atapotea",
      D: "hufanikiwa",
    },
    correctAnswer: "A",
    explanation:
      "Methali 'Asiyefunzwa na mamaye, hufunzwa na dunia' inamaanisha kwamba mtu asiyepokea malezi na mafunzo mema kutoka kwa wazazi wake atajifunza kwa njia ngumu kupitia changamoto za maisha.",
  },
  {
    id: 15,
    subject: "Social Studies",
    question:
      "Which of these physical features is a large depression on the earth's surface formed by tectonic forces?",
    options: {
      A: "A mountain",
      B: "A plateau",
      C: "A rift valley",
      D: "A delta",
    },
    correctAnswer: "C",
    explanation:
      "A rift valley is a lowland region that forms where Earth's tectonic plates move apart, or rift. The Great Rift Valley in Eastern Africa is a prime example.",
  },
  {
    id: 16,
    subject: "Pre-Technical Studies",
    question:
      "In technical drawing, what does an orthographic projection show?",
    options: {
      A: "A 3D view of an object",
      B: "Multiple 2D views of an object (front, top, side)",
      C: "An artistic sketch of an object",
      D: "A cross-section of an object",
    },
    correctAnswer: "B",
    explanation:
      "Orthographic projection is a way of representing a 3D object in 2D. It typically shows three different views of the object: a front view, a top view, and a side view.",
  },
  {
    id: 17,
    subject: "Agriculture",
    question:
      "Which farming practice involves growing two or more crops in proximity?",
    options: {
      A: "Monocropping",
      B: "Crop rotation",
      C: "Intercropping",
      D: "Fallowing",
    },
    correctAnswer: "C",
    explanation:
      "Intercropping is the practice of growing two or more crops in the same field at the same time. This can increase yields and improve soil health.",
  },
  {
    id: 18,
    subject: "Home Science",
    question: "What is the primary purpose of first aid?",
    options: {
      A: "To replace professional medical care",
      B: "To provide a complete medical diagnosis",
      C: "To preserve life and prevent the condition from worsening",
      D: "To administer medication without a doctor's prescription",
    },
    correctAnswer: "C",
    explanation:
      "The main aims of first aid are to preserve life, prevent the injury or illness from getting worse, and promote recovery until professional medical help arrives.",
  },
  {
    id: 19,
    subject: "Mathematics",
    question: "What is the next number in the sequence: 2, 5, 8, 11, ...?",
    options: {
      A: "12",
      B: "13",
      C: "14",
      D: "15",
    },
    correctAnswer: "C",
    explanation:
      "This is an arithmetic sequence where each number is found by adding 3 to the previous number. So, 11 + 3 = 14.",
  },
  {
    id: 20,
    subject: "sports",
    question: "The Olympic Games are held every how many years?",
    options: {
      A: "2 years",
      B: "4 years",
      C: "5 years",
      D: "6 years",
    },
    correctAnswer: "B",
    explanation:
      "The modern Olympic Games are held every four years, with the Summer and Winter Games alternating every two years within that four-year period.",
  },
  {
    id: 21,
    subject: "creative art",
    question:
      "Which element of art refers to the lightness or darkness of a color?",
    options: {
      A: "Hue",
      B: "Value",
      C: "Saturation",
      D: "Texture",
    },
    correctAnswer: "B",
    explanation:
      "Value, also known as tone, is an element of art that describes the lightness or darkness of a color. A high value is light (a tint), and a low value is dark (a shade).",
  },
  {
    id: 22,
    subject: "English",
    question: "Which sentence is grammatically correct?",
    options: {
      A: "They is going to the park.",
      B: "She are a talented singer.",
      C: "He and I are friends.",
      D: "I is reading a book.",
    },
    correctAnswer: "C",
    explanation:
      "This sentence correctly uses the plural verb 'are' to agree with the compound subject 'He and I'. The other options have subject-verb agreement errors.",
  },
  {
    id: 23,
    subject: "Kiswahili",
    question: "Chagua neno lenye maana sawa na 'ghadhabu'.",
    options: {
      A: "Furaha",
      B: "Upendo",
      C: "Hasira",
      D: "Amani",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'ghadhabu' lina maana ya hasira kali. Kwa hivyo, 'hasira' ndilo neno lenye maana sawa.",
  },
  {
    id: 24,
    subject: "Social Studies",
    question: "Democracy is a system of government where power is held by:",
    options: {
      A: "A single monarch",
      B: "A small group of wealthy individuals",
      C: "The people",
      D: "A military leader",
    },
    correctAnswer: "C",
    explanation:
      "The term 'democracy' originates from Greek words meaning 'rule by the people'. In a democracy, citizens have the power to elect representatives and participate in governance.",
  },
  {
    id: 25,
    subject: "Pre-Technical Studies",
    question: "What is the main function of a file in metalwork?",
    options: {
      A: "To drill holes",
      B: "To cut metal sheets",
      C: "To join two pieces of metal",
      D: "To smooth or shape a metal surface",
    },
    correctAnswer: "D",
    explanation:
      "A file is a hand tool with a hardened steel bar containing parallel rows of teeth. It is used to remove small amounts of material from a workpiece to shape, smooth, or finish it.",
  },
  {
    id: 26,
    subject: "Agriculture",
    question:
      "What is the term for the rearing of birds like chicken and turkeys for meat or eggs?",
    options: {
      A: "Apiculture",
      B: "Aquaculture",
      C: "Poultry farming",
      D: "Horticulture",
    },
    correctAnswer: "C",
    explanation:
      "Poultry farming is the practice of raising domesticated birds such as chickens, ducks, turkeys, and geese for the purpose of farming meat or eggs for food.",
  },
  {
    id: 27,
    subject: "Home Science",
    question: "Which of the following is a water-borne disease?",
    options: {
      A: "Malaria",
      B: "Cholera",
      C: "Tuberculosis",
      D: "Measles",
    },
    correctAnswer: "B",
    explanation:
      "Water-borne diseases are caused by pathogenic microorganisms that are most commonly transmitted in contaminated fresh water. Cholera is a classic example, often spreading through contaminated drinking water or food.",
  },
  {
    id: 28,
    subject: "Mathematics",
    question: "A triangle with all three sides of equal length is called:",
    options: {
      A: "An isosceles triangle",
      B: "A scalene triangle",
      C: "An equilateral triangle",
      D: "A right-angled triangle",
    },
    correctAnswer: "C",
    explanation:
      "An equilateral triangle is a triangle in which all three sides have the same length and all three angles are equal to 60 degrees.",
  },
  {
    id: 29,
    subject: "sports",
    question: "In athletics, what is the standard distance of a marathon race?",
    options: {
      A: "10 kilometers",
      B: "21.1 kilometers",
      C: "42.195 kilometers",
      D: "50 kilometers",
    },
    correctAnswer: "C",
    explanation:
      "The official distance for a marathon is 42.195 kilometers (or 26 miles and 385 yards), established at the 1908 London Olympics.",
  },
  {
    id: 30,
    subject: "creative art",
    question:
      "The technique of creating an illusion of depth on a flat surface is known as:",
    options: {
      A: "Symmetry",
      B: "Perspective",
      C: "Pattern",
      D: "Contrast",
    },
    correctAnswer: "B",
    explanation:
      "Perspective in art is the technique used to represent three-dimensional objects and spaces on a two-dimensional surface, creating a sense of depth and distance.",
  },
  {
    id: 31,
    subject: "English",
    question: "What is the opposite (antonym) of the word 'brave'?",
    options: {
      A: "Strong",
      B: "Courageous",
      C: "Fearful",
      D: "Honest",
    },
    correctAnswer: "C",
    explanation:
      "An antonym is a word that means the opposite of another word. 'Fearful' or 'cowardly' are antonyms for 'brave'.",
  },
  {
    id: 32,
    subject: "Kiswahili",
    question: "Neno 'mwalimu' lina silabi ngapi?",
    options: {
      A: "Mbili",
      B: "Tatu",
      C: "Nne",
      D: "Tano",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'mwalimu' lina silabi tatu: mwa-li-mu. Kila silabi katika Kiswahili huwa na irabu moja.",
  },
  {
    id: 33,
    subject: "Social Studies",
    question:
      "The imaginary line that divides the Earth into the Northern and Southern Hemispheres is called the:",
    options: {
      A: "Prime Meridian",
      B: "Equator",
      C: "Tropic of Cancer",
      D: "Tropic of Capricorn",
    },
    correctAnswer: "B",
    explanation:
      "The Equator is the imaginary line at 0 degrees latitude that runs around the center of the Earth, dividing it into two equal halves: the Northern Hemisphere and the Southern Hemisphere.",
  },
  {
    id: 34,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a critical safety rule when using workshop machinery?",
    options: {
      A: "Wearing loose clothing",
      B: "Working when tired",
      C: "Wearing safety goggles",
      D: "Removing machine guards",
    },
    correctAnswer: "C",
    explanation:
      "Wearing safety goggles or glasses is essential to protect your eyes from flying debris, dust, and other hazards when operating machinery.",
  },
  {
    id: 35,
    subject: "Agriculture",
    question:
      "The type of soil that feels sticky when wet and is good for making pots is:",
    options: {
      A: "Sandy soil",
      B: "Loam soil",
      C: "Clay soil",
      D: "Silt soil",
    },
    correctAnswer: "C",
    explanation:
      "Clay soil is composed of very fine mineral particles. It has poor drainage but is rich in nutrients, and its sticky, plastic-like texture when wet makes it ideal for pottery.",
  },
  {
    id: 36,
    subject: "Home Science",
    question: "A balanced diet is one that contains:",
    options: {
      A: "Only proteins and carbohydrates",
      B: "Large amounts of sugary foods",
      C: "All essential nutrients in the correct proportions",
      D: "Only fruits and vegetables",
    },
    correctAnswer: "C",
    explanation:
      "A balanced diet provides all the essential nutrients—including carbohydrates, proteins, fats, vitamins, minerals, and water—in the right quantities for the body to function properly.",
  },
  {
    id: 37,
    subject: "Mathematics",
    question: "Calculate 25% of 200.",
    options: {
      A: "25",
      B: "50",
      C: "75",
      D: "100",
    },
    correctAnswer: "B",
    explanation:
      "To find 25% of 200, you can multiply 200 by 0.25 (since 25% = 25/100 = 0.25). 200 × 0.25 = 50.",
  },
  {
    id: 38,
    subject: "sports",
    question: "Which country is famous for inventing the sport of cricket?",
    options: {
      A: "India",
      B: "Australia",
      C: "South Africa",
      D: "England",
    },
    correctAnswer: "D",
    explanation:
      "Cricket is widely believed to have been invented in south-east England during the 16th century. It became the country's national sport in the 18th century.",
  },
  {
    id: 39,
    subject: "creative art",
    question: "Which famous artist painted the 'Mona Lisa'?",
    options: {
      A: "Vincent van Gogh",
      B: "Pablo Picasso",
      C: "Leonardo da Vinci",
      D: "Michelangelo",
    },
    correctAnswer: "C",
    explanation:
      "The 'Mona Lisa' is an oil painting by the Italian Renaissance artist, inventor, and scientist Leonardo da Vinci, and it is one of the most famous works of art in the world.",
  },
  {
    id: 40,
    subject: "English",
    question:
      "A story that is passed down through generations and is often considered to be historical but is not verifiable is called a:",
    options: {
      A: "Novel",
      B: "Poem",
      C: "Legend",
      D: "Biography",
    },
    correctAnswer: "C",
    explanation:
      "A legend is a traditional story sometimes popularly regarded as historical but unauthenticated. It often features heroic characters or fantastic places.",
  },
  {
    id: 41,
    subject: "Kiswahili",
    question:
      "Katika sentensi 'Juma alikimbia mbio', neno 'mbio' ni aina gani ya neno?",
    options: {
      A: "Kitenzi",
      B: "Kielezi",
      C: "Nomino",
      D: "Kivumishi",
    },
    correctAnswer: "B",
    explanation:
      "Neno 'mbio' ni kielezi kwa sababu linaelezea zaidi kuhusu kitenzi 'alikimbia'. Linaonyesha jinsi kitendo cha kukimbia kilivyofanyika.",
  },
  {
    id: 42,
    subject: "Social Studies",
    question: "What instrument is used to measure atmospheric pressure?",
    options: {
      A: "Thermometer",
      B: "Anemometer",
      C: "Barometer",
      D: "Hygrometer",
    },
    correctAnswer: "C",
    explanation:
      "A barometer is a scientific instrument used to measure atmospheric pressure, also called barometric pressure. Changes in pressure can indicate short-term changes in the weather.",
  },
  {
    id: 43,
    subject: "Pre-Technical Studies",
    question:
      "The process of joining two pieces of metal by melting and flowing a filler metal into the joint is known as:",
    options: {
      A: "Drilling",
      B: "Forging",
      C: "Soldering",
      D: "Filing",
    },
    correctAnswer: "C",
    explanation:
      "Soldering is a process in which two or more metal items are joined together by melting and then flowing a filler metal (solder) into the joint, with the filler metal having a lower melting point than the adjoining metal.",
  },
  {
    id: 44,
    subject: "Agriculture",
    question:
      "Which of these is a common method of preserving food for long-term storage?",
    options: {
      A: "Washing",
      B: "Cooking",
      C: "Drying",
      D: "Chopping",
    },
    correctAnswer: "C",
    explanation:
      "Drying (or dehydration) is one of the oldest methods of food preservation. It works by removing water (moisture) from the food, which inhibits the growth of bacteria, yeasts, and mold.",
  },
  {
    id: 45,
    subject: "Home Science",
    question:
      "What is the term for the stitches used to join two pieces of fabric together?",
    options: {
      A: "A hem",
      B: "A seam",
      C: "A dart",
      D: "A pleat",
    },
    correctAnswer: "B",
    explanation:
      "A seam is the line where two or more layers of fabric are held together with stitches. Seams are fundamental to garment construction.",
  },
  {
    id: 46,
    subject: "Mathematics",
    question:
      "What is the perimeter of a square with a side length of 9 meters?",
    options: {
      A: "18 m",
      B: "27 m",
      C: "36 m",
      D: "81 m",
    },
    correctAnswer: "C",
    explanation:
      "The perimeter of a square is the total length of all its sides. Since a square has four equal sides, the perimeter is calculated as 4 × side length. So, 4 × 9 m = 36 m.",
  },
  {
    id: 47,
    subject: "sports",
    question: "A 'hat-trick' in sports generally means:",
    options: {
      A: "Winning three games in a row",
      B: "Achieving three consecutive successes in a game",
      C: "Scoring a goal with your head",
      D: "Playing for three different teams",
    },
    correctAnswer: "B",
    explanation:
      "A hat-trick is the achievement of a positive feat three times in a game, such as scoring three goals in football or taking three wickets with three consecutive balls in cricket.",
  },
  {
    id: 48,
    subject: "creative art",
    question: "A sculpture is different from a painting because it is:",
    options: {
      A: "Always colorful",
      B: "Two-dimensional",
      C: "Three-dimensional",
      D: "Made on canvas",
    },
    correctAnswer: "C",
    explanation:
      "The primary difference is that a sculpture is a three-dimensional (3D) artwork that has height, width, and depth, while a painting is two-dimensional (2D), having only height and width.",
  },
  {
    id: 49,
    subject: "English",
    question:
      "What type of literary device is used in the phrase 'the wind whispered through the trees'?",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Hyperbole",
    },
    correctAnswer: "C",
    explanation:
      "Personification is a figure of speech in which human qualities or abilities are given to inanimate objects or abstract ideas. 'Whispering' is a human action attributed to the wind.",
  },
  {
    id: 50,
    subject: "Kiswahili",
    question:
      "Kifaa kinachotumiwa na seremala kupimia pembe mraba (90°) huitwaje?",
    options: {
      A: "Randa",
      B: "Msumeno",
      C: "Kikwazo",
      D: "Patasi",
    },
    correctAnswer: "C",
    explanation:
      "Kikwazo (Try Square) ni zana muhimu kwa seremala inayotumika kuhakikisha pembe ni mraba (nyuzi 90) na pia kuchora mistari iliyonyooka kwenye mbao.",
  },
  {
    id: 51,
    subject: "Social Studies",
    question:
      "The system of producing, distributing, and consuming goods and services in a country is known as its:",
    options: {
      A: "Political system",
      B: "Social structure",
      C: "Legal framework",
      D: "Economy",
    },
    correctAnswer: "D",
    explanation:
      "An economy consists of the economic system of a country or other area; the labor, capital, and land resources; and the manufacturing, production, trade, distribution, and consumption of goods and services of that area.",
  },
  {
    id: 52,
    subject: "Pre-Technical Studies",
    question:
      "In technical drawing, a thick, continuous line is typically used for:",
    options: {
      A: "Hidden details",
      B: "Center lines",
      C: "Visible outlines",
      D: "Dimension lines",
    },
    correctAnswer: "C",
    explanation:
      "A thick, continuous line is the standard convention in technical drawing to represent the visible edges and outlines of an object.",
  },
  {
    id: 53,
    subject: "Agriculture",
    question:
      "Which of the following is a leguminous crop known for fixing nitrogen in the soil?",
    options: {
      A: "Maize",
      B: "Wheat",
      C: "Beans",
      D: "Potatoes",
    },
    correctAnswer: "C",
    explanation:
      "Legumes, such as beans, peas, and lentils, have a symbiotic relationship with nitrogen-fixing bacteria in their root nodules. This process converts atmospheric nitrogen into a form that plants can use, enriching the soil.",
  },
  {
    id: 54,
    subject: "Home Science",
    question:
      "The process of cleaning and pressing clothes using heat and steam is called:",
    options: {
      A: "Washing",
      B: "Drying",
      C: "Ironing",
      D: "Stitching",
    },
    correctAnswer: "C",
    explanation:
      "Ironing is the use of a heated tool (an iron) to remove wrinkles from fabric. The heat and pressure from the iron loosen the bonds between the long-chain polymer molecules in the fibers of the material.",
  },
  {
    id: 55,
    subject: "Mathematics",
    question: "If a circle has a radius of 7 cm, what is its diameter?",
    options: {
      A: "7 cm",
      B: "14 cm",
      C: "21 cm",
      D: "49 cm",
    },
    correctAnswer: "B",
    explanation:
      "The diameter of a circle is twice its radius (D = 2r). Therefore, if the radius is 7 cm, the diameter is 2 × 7 cm = 14 cm.",
  },
  {
    id: 56,
    subject: "sports",
    question: "In tennis, what is the score when a player has zero points?",
    options: {
      A: "Nil",
      B: "Zero",
      C: "Love",
      D: "Duck",
    },
    correctAnswer: "C",
    explanation:
      "In tennis, a score of zero is referred to as 'love'. The scoring sequence is Love, 15, 30, 40, and then game.",
  },
  {
    id: 57,
    subject: "creative art",
    question:
      "A drawing or painting of a person, especially one showing the face, is called a:",
    options: {
      A: "Landscape",
      B: "Still life",
      C: "Portrait",
      D: "Abstract",
    },
    correctAnswer: "C",
    explanation:
      "A portrait is an artistic representation of a person, in which the face and its expression is predominant. The intent is to display the likeness, personality, and even the mood of the person.",
  },
  {
    id: 58,
    subject: "English",
    question: "Which of these words is a conjunction?",
    options: {
      A: "Run",
      B: "Quickly",
      C: "Beautiful",
      D: "And",
    },
    correctAnswer: "D",
    explanation:
      "A conjunction is a word used to connect clauses or sentences or to coordinate words in the same clause (e.g., and, but, if). 'And' is a coordinating conjunction.",
  },
  {
    id: 59,
    subject: "Kiswahili",
    question: "Umoja wa neno 'viti' ni nini?",
    options: {
      A: "Kiti",
      B: "Mti",
      C: "Uti",
      D: "Jiti",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'viti' lipo katika ngeli ya KI-VI. Umoja wake ni 'kiti' na wingi wake ni 'viti'.",
  },
  {
    id: 60,
    subject: "Social Studies",
    question:
      "The movement of people from rural areas to urban areas is known as:",
    options: {
      A: "Immigration",
      B: "Emigration",
      C: "Urbanization",
      D: "Migration",
    },
    correctAnswer: "C",
    explanation:
      "Urbanization is the process through which cities grow, and higher and higher percentages of the population comes to live in the city, primarily through migration from rural areas.",
  },
  {
    id: 61,
    subject: "Pre-Technical Studies",
    question:
      "Which wood joint is formed by cutting a corresponding 'tongue' and 'groove' on two pieces of wood?",
    options: {
      A: "Butt joint",
      B: "Dovetail joint",
      C: "Mortise and tenon joint",
      D: "Tongue and groove joint",
    },
    correctAnswer: "D",
    explanation:
      "The tongue and groove joint is a method of fitting similar objects together, edge to edge, used mainly with wood. Each piece has a slot (the groove) cut all along one edge, and a thin, deep ridge (the tongue) on the opposite edge.",
  },
  {
    id: 62,
    subject: "Agriculture",
    question:
      "The practice of growing crops without using synthetic fertilizers or pesticides is called:",
    options: {
      A: "Organic farming",
      B: "Conventional farming",
      C: "Hydroponics",
      D: "Shifting cultivation",
    },
    correctAnswer: "A",
    explanation:
      "Organic farming is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal and places emphasis on techniques such as crop rotation and companion planting.",
  },
  {
    id: 63,
    subject: "Home Science",
    question:
      "A detailed plan for spending and saving money over a certain period is known as a:",
    options: {
      A: "Recipe",
      B: "Timetable",
      C: "Budget",
      D: "Menu",
    },
    correctAnswer: "C",
    explanation:
      "A budget is a financial plan for a defined period, often one year. It is a crucial tool for managing income and expenses to achieve financial goals.",
  },
  {
    id: 64,
    subject: "Mathematics",
    question: "What is the sum of the interior angles of any triangle?",
    options: {
      A: "90 degrees",
      B: "180 degrees",
      C: "270 degrees",
      D: "360 degrees",
    },
    correctAnswer: "B",
    explanation:
      "A fundamental theorem in geometry states that the sum of the measures of the three interior angles of any triangle is always 180 degrees.",
  },
  {
    id: 65,
    subject: "sports",
    question: "In which country did the modern form of Rugby originate?",
    options: {
      A: "Australia",
      B: "New Zealand",
      C: "England",
      D: "South Africa",
    },
    correctAnswer: "C",
    explanation:
      "The sport of rugby originated at Rugby School in Warwickshire, England, in 1823 when William Webb Ellis, during a game of football, picked up the ball and ran with it.",
  },
  {
    id: 66,
    subject: "creative art",
    question:
      "The arrangement of elements such as line, shape, and color in a work of art is called:",
    options: {
      A: "The subject",
      B: "The medium",
      C: "The composition",
      D: "The style",
    },
    correctAnswer: "C",
    explanation:
      "Composition is the placement or arrangement of visual elements in a work of art. It is how the elements of art are organized to create a unified and interesting piece.",
  },
  {
    id: 67,
    subject: "English",
    question:
      "The person who writes a book, article, or other text is called the:",
    options: {
      A: "Illustrator",
      B: "Publisher",
      C: "Author",
      D: "Editor",
    },
    correctAnswer: "C",
    explanation:
      "An author is the writer of a literary work. The illustrator creates pictures, the publisher produces and distributes the work, and the editor prepares it for publication.",
  },
  {
    id: 68,
    subject: "Kiswahili",
    question: "Maana ya nahau 'kupiga moyo konde' ni ipi?",
    options: {
      A: "Kujitia moyo au kuvumilia",
      B: "Kupata mshtuko wa moyo",
      C: "Kuwa na hasira sana",
      D: "Kupenda mtu sana",
    },
    correctAnswer: "A",
    explanation:
      "Nahau 'kupiga moyo konde' inamaanisha kujipa moyo, kujikaza, au kuvumilia katika hali ngumu au ya changamoto.",
  },
  {
    id: 69,
    subject: "Social Studies",
    question: "Which of these is a renewable source of energy?",
    options: {
      A: "Coal",
      B: "Natural Gas",
      C: "Petroleum",
      D: "Solar power",
    },
    correctAnswer: "D",
    explanation:
      "Renewable energy is sourced from resources that are naturally replenished, like sunlight, wind, and water. Solar power harnesses energy from the sun. Coal, gas, and oil are non-renewable fossil fuels.",
  },
  {
    id: 70,
    subject: "Pre-Technical Studies",
    question:
      "A detailed drawing that shows how to construct something, including dimensions and materials, is called a:",
    options: {
      A: "Sketch",
      B: "Blueprint",
      C: "Doodle",
      D: "Painting",
    },
    correctAnswer: "B",
    explanation:
      "A blueprint is a technical drawing or a detailed plan used in construction and engineering. It provides all the necessary information for a project to be built.",
  },
  {
    id: 71,
    subject: "Agriculture",
    question:
      "What is the process of removing unwanted plants from a farm called?",
    options: {
      A: "Harvesting",
      B: "Weeding",
      C: "Pruning",
      D: "Irrigating",
    },
    correctAnswer: "B",
    explanation:
      "Weeding is the removal of weeds, which are plants that grow where they are not wanted and compete with cultivated plants for nutrients, water, and sunlight.",
  },
  {
    id: 72,
    subject: "Home Science",
    question: "A tear in a fabric can be mended using a technique called:",
    options: {
      A: "Patching",
      B: "Folding",
      C: "Staining",
      D: "Bleaching",
    },
    correctAnswer: "A",
    explanation:
      "Patching is a mending technique that involves sewing a piece of fabric over a hole or torn area to repair and strengthen it.",
  },
  {
    id: 73,
    subject: "Mathematics",
    question: "Convert the fraction 3/4 into a percentage.",
    options: {
      A: "34%",
      B: "43%",
      C: "75%",
      D: "60%",
    },
    correctAnswer: "C",
    explanation:
      "To convert a fraction to a percentage, you divide the numerator by the denominator and multiply by 100. (3 ÷ 4) × 100 = 0.75 × 100 = 75%.",
  },
  {
    id: 74,
    subject: "sports",
    question: "What is the main objective in the sport of boxing?",
    options: {
      A: "To tackle the opponent to the ground",
      B: "To score goals in a net",
      C: "To hit the opponent with fists while defending oneself",
      D: "To run faster than the opponent",
    },
    correctAnswer: "C",
    explanation:
      "Boxing is a combat sport in which two people, usually wearing protective gloves, throw punches at each other for a predetermined amount of time in a boxing ring. The objective is to score points by landing punches or to incapacitate the opponent (knockout).",
  },
  {
    id: 75,
    subject: "creative art",
    question: "The art of beautiful handwriting is known as:",
    options: {
      A: "Cartography",
      B: "Calligraphy",
      C: "Typography",
      D: "Photography",
    },
    correctAnswer: "B",
    explanation:
      "Calligraphy is a visual art related to writing. It is the design and execution of lettering with a pen, ink brush, or other writing instrument.",
  },
  {
    id: 76,
    subject: "English",
    question:
      "A word that sounds the same as another word but has a different meaning and spelling is called a:",
    options: {
      A: "Synonym",
      B: "Antonym",
      C: "Homophone",
      D: "Palindrome",
    },
    correctAnswer: "C",
    explanation:
      "Homophones are words that are pronounced the same but have different meanings and/or spellings. For example, 'see' and 'sea'.",
  },
  {
    id: 77,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'panda' ni nini?",
    options: {
      A: "Ruka",
      B: "Inua",
      C: "Shuka",
      D: "Ingia",
    },
    correctAnswer: "C",
    explanation:
      "Kinyume (antonym) cha kitenzi 'panda' (to ascend/climb) ni 'shuka' (to descend/get off).",
  },
  {
    id: 78,
    subject: "Social Studies",
    question: "What is the main function of the legislature in a government?",
    options: {
      A: "To interpret laws",
      B: "To enforce laws",
      C: "To make laws",
      D: "To lead the military",
    },
    correctAnswer: "C",
    explanation:
      "The legislature (e.g., Parliament or Congress) is the branch of government responsible for creating, debating, and passing laws for the country.",
  },
  {
    id: 79,
    subject: "Pre-Technical Studies",
    question: "Which tool is specifically designed to drive nails into wood?",
    options: {
      A: "A saw",
      B: "A drill",
      C: "A hammer",
      D: "A screwdriver",
    },
    correctAnswer: "C",
    explanation:
      "A hammer is a tool consisting of a weighted 'head' fixed to a long handle that is swung to deliver an impact to a small area of an object. This is most commonly used for driving nails.",
  },
  {
    id: 80,
    subject: "Agriculture",
    question:
      "The system of supplying land with water by artificial means, such as channels or pipes, is called:",
    options: {
      A: "Drainage",
      B: "Irrigation",
      C: "Tilling",
      D: "Mulching",
    },
    correctAnswer: "B",
    explanation:
      "Irrigation is the artificial application of water to land or soil. It is used to assist in the growing of agricultural crops, maintenance of landscapes, and revegetation of disturbed soils in dry areas and during periods of less than average rainfall.",
  },
  {
    id: 81,
    subject: "Home Science",
    question:
      "Which vitamin, often found in citrus fruits, is essential for a healthy immune system?",
    options: {
      A: "Vitamin A",
      B: "Vitamin B12",
      C: "Vitamin C",
      D: "Vitamin D",
    },
    correctAnswer: "C",
    explanation:
      "Vitamin C, also known as ascorbic acid, is a crucial nutrient for the immune system, skin health, and wound healing. It is abundant in fruits like oranges, lemons, and grapefruits.",
  },
  {
    id: 82,
    subject: "Mathematics",
    question: "What is the mean (average) of the numbers 4, 6, and 8?",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "18",
    },
    correctAnswer: "B",
    explanation:
      "The mean is calculated by adding all the numbers in a set and then dividing by the count of numbers in that set. (4 + 6 + 8) / 3 = 18 / 3 = 6.",
  },
  {
    id: 83,
    subject: "sports",
    question: "Which of these sports is played on ice?",
    options: {
      A: "Volleyball",
      B: "Field Hockey",
      C: "Ice Hockey",
      D: "Lacrosse",
    },
    correctAnswer: "C",
    explanation:
      "Ice hockey is a team sport played on ice, in which skaters use sticks to shoot a vulcanized rubber puck into their opponent's net to score points.",
  },
  {
    id: 84,
    subject: "creative art",
    question:
      "An artwork created by pasting various materials like paper, photographs, and fabric onto a backing is a:",
    options: {
      A: "Sculpture",
      B: "Fresco",
      C: "Etching",
      D: "Collage",
    },
    correctAnswer: "D",
    explanation:
      "A collage is a piece of art made by sticking various different materials such as photographs and pieces of paper or fabric onto a backing.",
  },
  {
    id: 85,
    subject: "English",
    question:
      "A group of lines forming the basic recurring metrical unit in a poem is a:",
    options: {
      A: "Paragraph",
      B: "Stanza",
      C: "Sentence",
      D: "Chapter",
    },
    correctAnswer: "B",
    explanation:
      "A stanza is a division of a poem consisting of two or more lines arranged together as a unit. It is similar to a paragraph in prose.",
  },
  {
    id: 86,
    subject: "Kiswahili",
    question: "Ni mnyama gani anayejulikana kwa shingo yake ndefu?",
    options: {
      A: "Tembo",
      B: "Twiga",
      C: "Simba",
      D: "Kifaru",
    },
    correctAnswer: "B",
    explanation:
      "Twiga (giraffe) ni mnyama anayejulikana sana kwa kuwa na shingo ndefu zaidi kuliko wanyama wengine wa nchi kavu, inayomsaidia kufikia majani ya miti mirefu.",
  },
  {
    id: 87,
    subject: "Social Studies",
    question:
      "A map that shows physical features like mountains, rivers, and lakes is called a:",
    options: {
      A: "Political map",
      B: "Thematic map",
      C: "Topographical map",
      D: "Road map",
    },
    correctAnswer: "C",
    explanation:
      "A topographical map (or physical map) is a type of map characterized by large-scale detail and quantitative representation of relief, using contour lines to show the shape and elevation of an area.",
  },
  {
    id: 88,
    subject: "Pre-Technical Studies",
    question:
      "A device used to open and close an electrical circuit is called a:",
    options: {
      A: "Resistor",
      B: "Capacitor",
      C: "Switch",
      D: "Fuse",
    },
    correctAnswer: "C",
    explanation:
      "A switch is an electrical component that can interrupt an electric circuit, interrupting the current or diverting it from one conductor to another.",
  },
  {
    id: 89,
    subject: "Agriculture",
    question:
      "The process by which plants use sunlight, water, and carbon dioxide to create their own food is called:",
    options: {
      A: "Respiration",
      B: "Transpiration",
      C: "Photosynthesis",
      D: "Germination",
    },
    correctAnswer: "C",
    explanation:
      "Photosynthesis is the fundamental process used by plants and other organisms to convert light energy into chemical energy, through a cellular process that creates food in the form of sugars.",
  },
  {
    id: 90,
    subject: "Home Science",
    question:
      "Good personal hygiene includes which of the following practices?",
    options: {
      A: "Wearing dirty clothes",
      B: "Sharing personal items like toothbrushes",
      C: "Washing hands regularly with soap and water",
      D: "Avoiding bathing",
    },
    correctAnswer: "C",
    explanation:
      "Personal hygiene is how you care for your body. This practice includes bathing, washing your hands, brushing your teeth, and more. Washing hands is a critical step in preventing the spread of germs and diseases.",
  },
  {
    id: 91,
    subject: "Mathematics",
    question: "Find the volume of a cube with a side length of 4 cm.",
    options: {
      A: "12 cm³",
      B: "16 cm³",
      C: "32 cm³",
      D: "64 cm³",
    },
    correctAnswer: "D",
    explanation:
      "The volume of a cube is calculated by cubing the side length (V = s³). Therefore, the volume is 4 cm × 4 cm × 4 cm = 64 cm³.",
  },
  {
    id: 92,
    subject: "sports",
    question: "Which of these is NOT a swimming stroke?",
    options: {
      A: "Freestyle",
      B: "Backstroke",
      C: "Butterfly",
      D: "Cartwheel",
    },
    correctAnswer: "D",
    explanation:
      "The four main competitive swimming strokes are freestyle (or front crawl), backstroke, breaststroke, and butterfly. A cartwheel is a gymnastic movement.",
  },
  {
    id: 93,
    subject: "creative art",
    question:
      "The property of color that refers to its purity or intensity (e.g., bright red vs. dull red) is called:",
    options: {
      A: "Hue",
      B: "Value",
      C: "Saturation",
      D: "Tone",
    },
    correctAnswer: "C",
    explanation:
      "Saturation, also known as chroma or intensity, refers to the dominance of hue in the color. A high saturation color is bright and vivid, while a low saturation color is dull and grayish.",
  },
  {
    id: 94,
    subject: "English",
    question:
      "An exaggerated statement not meant to be taken literally is called:",
    options: {
      A: "A simile",
      B: "A metaphor",
      C: "An understatement",
      D: "A hyperbole",
    },
    correctAnswer: "D",
    explanation:
      "Hyperbole is a figure of speech that involves an exaggeration of ideas for the sake of emphasis. For example, 'I'm so hungry I could eat a horse.'",
  },
  {
    id: 95,
    subject: "Kiswahili",
    question: "Ukubwa wa neno 'nyumba' ni upi?",
    options: {
      A: "Kijumba",
      B: "Vijumba",
      C: "Jumba",
      D: "Majumba",
    },
    correctAnswer: "C",
    explanation:
      "Katika Kiswahili, ukubwa (augmentative) wa nomino huundwa mara nyingi kwa kutumia kiambishi 'Ji-' kwa umoja. Hivyo, ukubwa wa 'nyumba' ni 'jumba'.",
  },
  {
    id: 96,
    subject: "Social Studies",
    question: "Which ocean is the largest and deepest on Earth?",
    options: {
      A: "Atlantic Ocean",
      B: "Indian Ocean",
      C: "Arctic Ocean",
      D: "Pacific Ocean",
    },
    correctAnswer: "D",
    explanation:
      "The Pacific Ocean is the largest of the Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by Asia and Australia in the west and the Americas in the east.",
  },
  {
    id: 97,
    subject: "Pre-Technical Studies",
    question: "What material is the primary component of most modern plastics?",
    options: {
      A: "Wood",
      B: "Metal",
      C: "Petroleum (crude oil)",
      D: "Sand",
    },
    correctAnswer: "C",
    explanation:
      "Most plastics are synthetic polymers derived from petrochemicals, which are chemical products obtained from petroleum by refining. Crude oil is the raw material for the vast majority of plastics.",
  },
  {
    id: 98,
    subject: "Agriculture",
    question:
      "The practice of rotating different crops in succession on the same land is known as:",
    options: {
      A: "Intercropping",
      B: "Monoculture",
      C: "Crop rotation",
      D: "Terracing",
    },
    correctAnswer: "C",
    explanation:
      "Crop rotation is the practice of planting different crops sequentially on the same plot of land to improve soil health, optimize nutrients in the soil, and combat pest and weed pressure.",
  },
  {
    id: 99,
    subject: "Home Science",
    question: "Which of these is an example of a good saving habit?",
    options: {
      A: "Spending all your money as soon as you get it",
      B: "Regularly putting a portion of your income into a savings account",
      C: "Borrowing money frequently for non-essential items",
      D: "Ignoring bills and expenses",
    },
    correctAnswer: "B",
    explanation:
      "A key principle of good financial management is to save regularly. Setting aside a portion of your income consistently helps build financial security and allows you to work towards future goals.",
  },
  {
    id: 100,
    subject: "Mathematics",
    question: "What is 5 squared (5²)?",
    options: {
      A: "10",
      B: "25",
      C: "15",
      D: "52",
    },
    correctAnswer: "B",
    explanation:
      "Squaring a number means multiplying it by itself. So, 5² is 5 × 5, which equals 25.",
  },
  {
    id: 101,
    subject: "sports",
    question:
      "Which athletic event involves running, jumping, and throwing disciplines?",
    options: {
      A: "Marathon",
      B: "Sprint",
      C: "Decathlon",
      D: "Relay race",
    },
    correctAnswer: "C",
    explanation:
      "The decathlon is a combined event in athletics consisting of ten track and field events, including sprints, hurdles, distance running, jumps (long jump, high jump, pole vault), and throws (shot put, discus, javelin).",
  },
  {
    id: 102,
    subject: "creative art",
    question: "Which of the following is a principle of design in art?",
    options: {
      A: "Line",
      B: "Color",
      C: "Shape",
      D: "Balance",
    },
    correctAnswer: "D",
    explanation:
      "Balance is a principle of design that deals with the visual distribution of weight in a work of art. Line, color, and shape are elements of art, which are the building blocks artists use.",
  },
  {
    id: 103,
    subject: "English",
    question:
      "A fictional story that teaches a moral lesson, often with animals as characters, is called a:",
    options: {
      A: "Biography",
      B: "Fable",
      C: "Sonnet",
      D: "Memoir",
    },
    correctAnswer: "B",
    explanation:
      "A fable is a short fictional story that features animals, legendary creatures, plants, inanimate objects, or forces of nature that are anthropomorphized, and that illustrates or leads to a particular moral lesson.",
  },
  {
    id: 104,
    subject: "Kiswahili",
    question: "Tegua kitendawili: 'Nyumba yangu haina mlango.'",
    options: {
      A: "Pango",
      B: "Kaburi",
      C: "Yai",
      D: "Chupa",
    },
    correctAnswer: "C",
    explanation:
      "Jibu ni 'yai'. Yai ni kama nyumba kwa kifaranga kilicho ndani, lakini halina mlango wa kuingilia au kutokea hadi linapovunjwa.",
  },
  {
    id: 105,
    subject: "Social Studies",
    question:
      "A system where a country maintains power over other territories and peoples, often for economic gain, is called:",
    options: {
      A: "Democracy",
      B: "Socialism",
      C: "Colonialism",
      D: "Federalism",
    },
    correctAnswer: "C",
    explanation:
      "Colonialism is the policy or practice of acquiring full or partial political control over another country, occupying it with settlers, and exploiting it economically.",
  },
  {
    id: 106,
    subject: "Pre-Technical Studies",
    question: "Which of the following is a type of permanent wood joint?",
    options: {
      A: "A joint held by screws",
      B: "A joint held by nails",
      C: "A joint held by bolts and nuts",
      D: "A joint held by glue",
    },
    correctAnswer: "D",
    explanation:
      "A glued joint, when done correctly, forms a permanent bond that is often stronger than the wood itself. Joints with screws, nails, or bolts are considered non-permanent or semi-permanent because they can be disassembled.",
  },
  {
    id: 107,
    subject: "Agriculture",
    question: "Which animal is commonly raised in aquaculture?",
    options: {
      A: "Cows",
      B: "Sheep",
      C: "Fish",
      D: "Chickens",
    },
    correctAnswer: "C",
    explanation:
      "Aquaculture, also known as aquafarming, is the farming of fish, crustaceans, mollusks, aquatic plants, algae, and other organisms in water environments.",
  },
  {
    id: 108,
    subject: "Home Science",
    question:
      "What is the process of killing harmful microorganisms in food using heat called?",
    options: {
      A: "Freezing",
      B: "Pasteurization",
      C: "Salting",
      D: "Fermentation",
    },
    correctAnswer: "B",
    explanation:
      "Pasteurization is a process in which packaged and non-packaged foods (such as milk and fruit juice) are treated with mild heat, usually to less than 100 °C (212 °F), to eliminate pathogens and extend shelf life.",
  },
  {
    id: 109,
    subject: "Mathematics",
    question: "A number that can only be divided by 1 and itself is called a:",
    options: {
      A: "Prime number",
      B: "Even number",
      C: "Odd number",
      D: "Composite number",
    },
    correctAnswer: "A",
    explanation:
      "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples include 2, 3, 5, 7, and 11.",
  },
  {
    id: 110,
    subject: "sports",
    question:
      "In volleyball, a team can hit the ball a maximum of how many times before it must cross the net?",
    options: {
      A: "One",
      B: "Two",
      C: "Three",
      D: "Four",
    },
    correctAnswer: "C",
    explanation:
      "Each team is allowed a maximum of three touches of the ball before it must be returned to the opponent's side of the court. A block does not count as one of the three touches.",
  },
  {
    id: 111,
    subject: "creative art",
    question:
      "The material an artist uses to create a work of art, like paint, clay, or pencil, is called the:",
    options: {
      A: "Medium",
      B: "Canvas",
      C: "Style",
      D: "Genre",
    },
    correctAnswer: "A",
    explanation:
      "In art, medium refers to the materials that are used to create a work of art. The plural of medium is media.",
  },
  {
    id: 112,
    subject: "English",
    question:
      "Which punctuation mark is used to show possession or to indicate the omission of letters?",
    options: {
      A: "Comma (,)",
      B: "Period (.)",
      C: "Apostrophe (')",
      D: "Question Mark (?)",
    },
    correctAnswer: "C",
    explanation:
      "An apostrophe is used to show that something belongs to someone (e.g., 'the dog's bone') or to show where letters have been left out in a contraction (e.g., 'don't' for 'do not').",
  },
  {
    id: 113,
    subject: "Kiswahili",
    question: "Mtu anayeandika mashairi huitwa nani?",
    options: {
      A: "Mwandishi",
      B: "Mwanasiasa",
      C: "Mshairi",
      D: "Mwanamuziki",
    },
    correctAnswer: "C",
    explanation:
      "Mshairi ni mtu anayetunga na kuandika mashairi, ambayo ni utungo wa kisanaa wenye lugha ya picha na hisia.",
  },
  {
    id: 114,
    subject: "Social Studies",
    question: "The form of government led by a king or queen is known as a:",
    options: {
      A: "Republic",
      B: "Democracy",
      C: "Monarchy",
      D: "Dictatorship",
    },
    correctAnswer: "C",
    explanation:
      "A monarchy is a form of government in which a person, the monarch, is head of state for life or until abdication. The political legitimacy and authority of the monarch may vary from restricted and largely symbolic to fully autocratic.",
  },
  {
    id: 115,
    subject: "Pre-Technical Studies",
    question:
      "Which hand tool is used for tightening or loosening nuts and bolts?",
    options: {
      A: "Pliers",
      B: "A spanner (wrench)",
      C: "A chisel",
      D: "A hand drill",
    },
    correctAnswer: "B",
    explanation:
      "A spanner, or wrench, is a tool used to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts.",
  },
  {
    id: 116,
    subject: "Agriculture",
    question:
      "The removal of soil from one location and its transportation to another by wind, water, or ice is called:",
    options: {
      A: "Soil conservation",
      B: "Soil erosion",
      C: "Soil formation",
      D: "Soil profile",
    },
    correctAnswer: "B",
    explanation:
      "Soil erosion is a naturally occurring process that affects all landforms. In agriculture, soil erosion refers to the wearing away of a field's topsoil by the natural physical forces of water and wind.",
  },
  {
    id: 117,
    subject: "Home Science",
    question: "Which food group is the body's main source of energy?",
    options: {
      A: "Proteins",
      B: "Vitamins",
      C: "Fats",
      D: "Carbohydrates",
    },
    correctAnswer: "D",
    explanation:
      "Carbohydrates are macronutrients that are broken down into glucose, which is the primary fuel for the body's cells, tissues, and organs.",
  },
  {
    id: 118,
    subject: "Mathematics",
    question: "Express 0.5 as a fraction in its simplest form.",
    options: {
      A: "1/2",
      B: "5/100",
      C: "2/5",
      D: "5/1",
    },
    correctAnswer: "A",
    explanation:
      "The decimal 0.5 means five-tenths, which can be written as the fraction 5/10. This fraction can be simplified by dividing both the numerator and the denominator by their greatest common divisor, which is 5. So, 5/10 simplifies to 1/2.",
  },
  {
    id: 119,
    subject: "sports",
    question: "Which of these martial arts originated in Japan?",
    options: {
      A: "Taekwondo",
      B: "Karate",
      C: "Kung Fu",
      D: "Muay Thai",
    },
    correctAnswer: "B",
    explanation:
      "Karate is a martial art that developed in the Ryukyu Kingdom, which is now part of Japan. Taekwondo is Korean, Kung Fu is Chinese, and Muay Thai is from Thailand.",
  },
  {
    id: 120,
    subject: "creative art",
    question:
      "The surface quality of an object, or how it feels to the touch, is which element of art?",
    options: {
      A: "Form",
      B: "Space",
      C: "Texture",
      D: "Line",
    },
    correctAnswer: "C",
    explanation:
      "Texture is the element of art that refers to the way things feel, or look as if they might feel if touched. It can be real (actual texture) or implied (visual texture).",
  },
  {
    id: 121,
    subject: "English",
    question: "Choose the correct spelling:",
    options: {
      A: "Neccessary",
      B: "Necesary",
      C: "Necessary",
      D: "Necassary",
    },
    correctAnswer: "C",
    explanation:
      "The correct spelling of the word is 'necessary', with one 'c' and double 's'.",
  },
  {
    id: 122,
    subject: "Kiswahili",
    question: "Wingi wa neno 'ua' (flower) ni nini?",
    options: {
      A: "Maua",
      B: "Ua",
      C: "Vyua",
      D: "Ndua",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'ua' liko katika ngeli ya LI-YA. Umoja ni 'ua' (au 'jua' katika baadhi ya mazingira) na wingi ni 'maua'.",
  },
  {
    id: 123,
    subject: "Social Studies",
    question:
      "The process by which different cultures share ideas and ways of life is called:",
    options: {
      A: "Cultural isolation",
      B: "Cultural diffusion",
      C: "Cultural conflict",
      D: "Cultural heritage",
    },
    correctAnswer: "B",
    explanation:
      "Cultural diffusion is the spread of cultural beliefs, social activities, and material objects from one group of people to another.",
  },
  {
    id: 124,
    subject: "Pre-Technical Studies",
    question: "Which of these materials is a good conductor of electricity?",
    options: {
      A: "Rubber",
      B: "Wood",
      C: "Copper",
      D: "Plastic",
    },
    correctAnswer: "C",
    explanation:
      "A conductor is a material that allows electricity to flow through it easily. Metals like copper and aluminum are excellent conductors. Rubber, wood, and plastic are insulators, which resist the flow of electricity.",
  },
  {
    id: 125,
    subject: "Agriculture",
    question:
      "What is the general term for animals raised on a farm, such as cattle, sheep, and pigs?",
    options: {
      A: "Pets",
      B: "Wildlife",
      C: "Livestock",
      D: "Crops",
    },
    correctAnswer: "C",
    explanation:
      "Livestock are domesticated animals raised in an agricultural setting to produce commodities such as food, fiber, and labor.",
  },
  {
    id: 126,
    subject: "Home Science",
    question: "An emergency plan for a household should include:",
    options: {
      A: "A list of favorite movies",
      B: "Contact information and a meeting place",
      C: "Daily meal plans",
      D: "Holiday decoration ideas",
    },
    correctAnswer: "B",
    explanation:
      "A good emergency plan includes essential information like emergency contact numbers, an out-of-town contact, and a designated meeting place for all family members in case of a disaster.",
  },
  {
    id: 127,
    subject: "Mathematics",
    question: "An angle that measures exactly 90 degrees is called a:",
    options: {
      A: "Acute angle",
      B: "Obtuse angle",
      C: "Right angle",
      D: "Straight angle",
    },
    correctAnswer: "C",
    explanation:
      "A right angle is an angle of exactly 90°, corresponding to a quarter turn. Acute angles are less than 90°, and obtuse angles are greater than 90° but less than 180°.",
  },
  {
    id: 128,
    subject: "sports",
    question:
      "Which country hosted the 2010 FIFA World Cup, the first on the African continent?",
    options: {
      A: "Nigeria",
      B: "Egypt",
      C: "South Africa",
      D: "Ghana",
    },
    correctAnswer: "C",
    explanation:
      "The 2010 FIFA World Cup was held in South Africa from June 11 to July 11, 2010. It was the first time the tournament was hosted by an African nation.",
  },
  {
    id: 129,
    subject: "creative art",
    question:
      "The use of strong contrasts between light and dark in art, usually for dramatic effect, is known as:",
    options: {
      A: "Sfumato",
      B: "Impasto",
      C: "Chiaroscuro",
      D: "Foreshortening",
    },
    correctAnswer: "C",
    explanation:
      "Chiaroscuro is an artistic technique that uses bold contrasts between light and dark to model three-dimensional forms on a flat surface and to create a sense of drama.",
  },
  {
    id: 130,
    subject: "English",
    question:
      "A comparison between two unlike things using 'like' or 'as' is a:",
    options: {
      A: "Metaphor",
      B: "Simile",
      C: "Personification",
      D: "Alliteration",
    },
    correctAnswer: "B",
    explanation:
      "A simile is a figure of speech that directly compares two things using connecting words such as 'like', 'as', or 'so'. For example, 'as brave as a lion'.",
  },
  {
    id: 131,
    subject: "Kiswahili",
    question: "Msemo 'siku za mwizi ni arobaini' unamaanisha nini?",
    options: {
      A: "Mwizi ana siku arobaini za kuishi",
      B: "Kila mwizi hukamatwa baada ya siku arobaini",
      C: "Mwisho wa uovu ni kubainika na kupata adhabu",
      D: "Mwizi anapaswa kufungwa jela kwa siku arobaini",
    },
    correctAnswer: "C",
    explanation:
      "Msemo huu unamaanisha kwamba mtu anayefanya maovu anaweza kufanikiwa kwa muda, lakini hatimaye uovu wake utagunduliwa na atapata adhabu anayostahili.",
  },
  {
    id: 132,
    subject: "Social Studies",
    question:
      "The written set of fundamental principles by which a state is governed is its:",
    options: {
      A: "Declaration",
      B: "Treaty",
      C: "Constitution",
      D: "Statute",
    },
    correctAnswer: "C",
    explanation:
      "A constitution is the aggregate of fundamental principles or established precedents that constitute the legal basis of a polity, organization or other type of entity and commonly determine how that entity is to be governed.",
  },
  {
    id: 133,
    subject: "Pre-Technical Studies",
    question:
      "Which of these is a form of renewable energy generated from moving water?",
    options: {
      A: "Geothermal energy",
      B: "Solar energy",
      C: "Wind energy",
      D: "Hydroelectric energy",
    },
    correctAnswer: "D",
    explanation:
      "Hydroelectric energy, or hydropower, is a form of renewable energy that uses the power of moving water, such as rivers or dams, to generate electricity.",
  },
  {
    id: 134,
    subject: "Agriculture",
    question: "A young chicken is called a:",
    options: {
      A: "Calf",
      B: "Lamb",
      C: "Chick",
      D: "Kid",
    },
    correctAnswer: "C",
    explanation:
      "A chick is a young bird, especially a newly hatched chicken. A calf is a young cow, a lamb is a young sheep, and a kid is a young goat.",
  },
  {
    id: 135,
    subject: "Home Science",
    question:
      "When arranging a dining table, where should the fork typically be placed?",
    options: {
      A: "To the right of the plate",
      B: "Above the plate",
      C: "To the left of the plate",
      D: "Inside the glass",
    },
    correctAnswer: "C",
    explanation:
      "In a standard table setting, the forks are placed to the left of the dinner plate, while the knife and spoon are placed to the right.",
  },
  {
    id: 136,
    subject: "Mathematics",
    question:
      "If you buy a book for KES 150 and sell it for KES 200, what is your profit?",
    options: {
      A: "KES 50",
      B: "KES 150",
      C: "KES 200",
      D: "KES 350",
    },
    correctAnswer: "A",
    explanation:
      "Profit is calculated by subtracting the cost price from the selling price. Profit = Selling Price - Cost Price. So, KES 200 - KES 150 = KES 50.",
  },
  {
    id: 137,
    subject: "sports",
    question: "How long is one round in a professional men's boxing match?",
    options: {
      A: "1 minute",
      B: "2 minutes",
      C: "3 minutes",
      D: "5 minutes",
    },
    correctAnswer: "C",
    explanation:
      "In professional men's boxing, rounds are typically three minutes long, with a one-minute rest period between rounds.",
  },
  {
    id: 138,
    subject: "creative art",
    question: "What is a 'still life' in the context of art?",
    options: {
      A: "A painting of a historical event",
      B: "A sculpture of an animal in motion",
      C: "An artwork depicting mostly inanimate subject matter",
      D: "A fast-paced video installation",
    },
    correctAnswer: "C",
    explanation:
      "A still life is a work of art depicting mostly inanimate subject matter, typically commonplace objects which are either natural (food, flowers, rocks) or man-made (vases, books, instruments).",
  },
  {
    id: 139,
    subject: "English",
    question: "What is the main character in a story called?",
    options: {
      A: "The antagonist",
      B: "The narrator",
      C: "The protagonist",
      D: "The foil",
    },
    correctAnswer: "C",
    explanation:
      "The protagonist is the central character or leading figure in poetry, narrative, novel or any other story. The antagonist is the character who opposes the protagonist.",
  },
  {
    id: 140,
    subject: "Kiswahili",
    question: "Mtu anayeongoza chombo cha angani kama vile ndege huitwaje?",
    options: {
      A: "Nahodha",
      B: "Dereva",
      C: "Rubani",
      D: "Mhandisi",
    },
    correctAnswer: "C",
    explanation:
      "Rubani (pilot) ni mtu aliyefunzwa na kupewa leseni ya kuendesha ndege. Nahodha huongoza meli na dereva huongoza gari.",
  },
  {
    id: 141,
    subject: "Social Studies",
    question:
      "The study of the Earth's physical features, atmosphere, and human activity is known as:",
    options: {
      A: "History",
      B: "Geography",
      C: "Archaeology",
      D: "Anthropology",
    },
    correctAnswer: "B",
    explanation:
      "Geography is the scientific study of the lands, features, inhabitants, and phenomena of Earth and planets.",
  },
  {
    id: 142,
    subject: "Pre-Technical Studies",
    question:
      "What is the process of coating a metal (like steel) with a layer of zinc to protect it from rusting called?",
    options: {
      A: "Painting",
      B: "Galvanizing",
      C: "Welding",
      D: "Anodizing",
    },
    correctAnswer: "B",
    explanation:
      "Galvanizing is the process of applying a protective zinc coating to steel or iron, to prevent rusting. The zinc layer provides a barrier and acts as a sacrificial anode if the barrier is damaged.",
  },
  {
    id: 143,
    subject: "Agriculture",
    question: "A building used to store harvested crops is commonly called a:",
    options: {
      A: "Greenhouse",
      B: "Barn or granary",
      C: "Stable",
      D: "Pen",
    },
    correctAnswer: "B",
    explanation:
      "A barn is an agricultural building usually on farms and used for various purposes. A granary is a storehouse or repository for threshed grain.",
  },
  {
    id: 144,
    subject: "Home Science",
    question: "The first meal of the day is called:",
    options: {
      A: "Lunch",
      B: "Dinner",
      C: "Supper",
      D: "Breakfast",
    },
    correctAnswer: "D",
    explanation:
      "Breakfast is the first meal taken after rising from a night's sleep, most often eaten in the early morning before undertaking the day's work. The word refers to breaking the fasting period of the previous night.",
  },
  {
    id: 145,
    subject: "Mathematics",
    question: "How many millimeters are in one centimeter?",
    options: {
      A: "1",
      B: "10",
      C: "100",
      D: "1000",
    },
    correctAnswer: "B",
    explanation:
      "The metric system is based on powers of 10. There are 10 millimeters in 1 centimeter.",
  },
  {
    id: 146,
    subject: "sports",
    question: "Which sport uses a shuttlecock?",
    options: {
      A: "Tennis",
      B: "Squash",
      C: "Table Tennis",
      D: "Badminton",
    },
    correctAnswer: "D",
    explanation:
      "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
  },
  {
    id: 147,
    subject: "creative art",
    question:
      "Creating art by carving, modeling, or assembling materials into a three-dimensional object is known as:",
    options: {
      A: "Drawing",
      B: "Painting",
      C: "Printmaking",
      D: "Sculpture",
    },
    correctAnswer: "D",
    explanation:
      "Sculpture is the branch of the visual arts that operates in three dimensions. It is one of the plastic arts. Durable sculptural processes originally used carving and modeling, in stone, metal, ceramics, wood and other materials.",
  },
  {
    id: 148,
    subject: "English",
    question:
      "A word formed from the initial letters of other words and pronounced as a word is an:",
    options: {
      A: "Abbreviation",
      B: "Acronym",
      C: "Initialism",
      D: "Contraction",
    },
    correctAnswer: "B",
    explanation:
      "An acronym is a word formed from the first letters of a name or phrase, and it is pronounced as a single word. Examples include NATO (North Atlantic Treaty Organization) and NASA (National Aeronautics and Space Administration).",
  },
  {
    id: 149,
    subject: "Kiswahili",
    question: "Neno 'polepole' ni mfano wa aina gani ya maneno?",
    options: {
      A: "Neno rudufu",
      B: "Kivumishi",
      C: "Kiunganishi",
      D: "Nomino",
    },
    correctAnswer: "A",
    explanation:
      "'Polepole' ni neno rudufu, ambapo neno 'pole' limerudiwa ili kusisitiza maana ya 'taratibu sana'. Mara nyingi hutumika kama kielezi.",
  },
  {
    id: 150,
    subject: "Social Studies",
    question:
      "The total value of all goods and services produced in a country in a year is called its:",
    options: {
      A: "Gross Domestic Product (GDP)",
      B: "National Debt",
      C: "Annual Budget",
      D: "Inflation Rate",
    },
    correctAnswer: "A",
    explanation:
      "Gross Domestic Product (GDP) is a monetary measure of the market value of all the final goods and services produced in a specific time period by a country.",
  },
  {
    id: 151,
    subject: "Pre-Technical Studies",
    question: "Which of these is NOT a type of screw head drive?",
    options: {
      A: "Phillips",
      B: "Flathead (Slotted)",
      C: "Hammer",
      D: "Torx",
    },
    correctAnswer: "C",
    explanation:
      "Phillips, Flathead (Slotted), and Torx are all common types of screw drives, referring to the shape of the recess on the screw head. A hammer is a tool for impact, not for turning screws.",
  },
  {
    id: 152,
    subject: "Agriculture",
    question:
      "The science and art of growing fruits, vegetables, flowers, or ornamental plants is known as:",
    options: {
      A: "Agronomy",
      B: "Horticulture",
      C: "Forestry",
      D: "Animal husbandry",
    },
    correctAnswer: "B",
    explanation:
      "Horticulture is the branch of agriculture that deals with the art, science, technology, and business of plant cultivation.",
  },
  {
    id: 153,
    subject: "Home Science",
    question: "Which mineral is crucial for building strong bones and teeth?",
    options: {
      A: "Iron",
      B: "Calcium",
      C: "Potassium",
      D: "Sodium",
    },
    correctAnswer: "B",
    explanation:
      "Calcium is the most abundant mineral in the body and is essential for developing and maintaining strong bones and teeth. Dairy products, leafy greens, and fortified foods are good sources.",
  },
  {
    id: 154,
    subject: "Mathematics",
    question: "What is the least common multiple (LCM) of 4 and 6?",
    options: {
      A: "2",
      B: "10",
      C: "12",
      D: "24",
    },
    correctAnswer: "C",
    explanation:
      "The least common multiple (LCM) is the smallest positive integer that is a multiple of both numbers. Multiples of 4 are 4, 8, 12, 16... Multiples of 6 are 6, 12, 18... The smallest number they have in common is 12.",
  },
  {
    id: 155,
    subject: "sports",
    question:
      "In cricket, what is the term for a ball bowled so well that the batsman cannot hit it?",
    options: {
      A: "A wide",
      B: "A no-ball",
      C: "A dot ball",
      D: "A maiden over",
    },
    correctAnswer: "C",
    explanation:
      "A dot ball is a delivery in cricket from which no runs are scored. If a bowler bowls six consecutive dot balls in an over, it is called a maiden over.",
  },
  {
    id: 156,
    subject: "creative art",
    question:
      "What type of paint is known for its fast-drying nature and is made of pigment suspended in an acrylic polymer emulsion?",
    options: {
      A: "Oil paint",
      B: "Watercolor",
      C: "Acrylic paint",
      D: "Fresco",
    },
    correctAnswer: "C",
    explanation:
      "Acrylic paint is a fast-drying paint containing pigment suspension in acrylic polymer emulsion. They are water-soluble but become water-resistant when dry.",
  },
  {
    id: 157,
    subject: "English",
    question: "A book written about a person's own life is called:",
    options: {
      A: "A biography",
      B: "An autobiography",
      C: "A fantasy",
      D: "A history",
    },
    correctAnswer: "B",
    explanation:
      "An autobiography is a self-written account of the life of a person. A biography is the life story of a person written by someone else.",
  },
  {
    id: 158,
    subject: "Kiswahili",
    question: "Kifaa kinachotumika kukatia nyasi au majani shambani huitwaje?",
    options: {
      A: "Jembe",
      B: "Panga",
      C: "Shoka",
      D: "Nyundo",
    },
    correctAnswer: "B",
    explanation:
      "Panga ni kifaa chenye makali upande mmoja kinachotumika kwa shughuli mbalimbali za kilimo na nyumbani, ikiwemo kukata nyasi, miti midogo, na kufyeka shamba.",
  },
  {
    id: 159,
    subject: "Social Studies",
    question:
      "The period in history before written records were kept is known as:",
    options: {
      A: "The Middle Ages",
      B: "The Renaissance",
      C: "Antiquity",
      D: "Prehistory",
    },
    correctAnswer: "D",
    explanation:
      "Prehistory is the period of human history between the use of the first stone tools by hominins c. 3.3 million years ago and the invention of writing systems.",
  },
  {
    id: 160,
    subject: "Pre-Technical Studies",
    question:
      "The force that opposes motion between two surfaces in contact is called:",
    options: {
      A: "Gravity",
      B: "Friction",
      C: "Magnetism",
      D: "Inertia",
    },
    correctAnswer: "B",
    explanation:
      "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.",
  },
  {
    id: 161,
    subject: "Agriculture",
    question:
      "A disease affecting plants is often caused by which of the following?",
    options: {
      A: "Too much sunlight",
      B: "Lack of water",
      C: "Pests and pathogens like fungi or bacteria",
      D: "Good quality soil",
    },
    correctAnswer: "C",
    explanation:
      "Plant diseases are primarily caused by pathogens (infectious organisms) like fungi, bacteria, viruses, and nematodes, as well as by pests that can transmit these pathogens.",
  },
  {
    id: 162,
    subject: "Home Science",
    question:
      "Which of these is a healthy method for cooking vegetables to retain nutrients?",
    options: {
      A: "Deep frying",
      B: "Boiling for a long time",
      C: "Steaming",
      D: "Coating in sugar",
    },
    correctAnswer: "C",
    explanation:
      "Steaming is a gentle cooking method that helps preserve the water-soluble vitamins and other nutrients in vegetables, unlike boiling where nutrients can leach into the water.",
  },
  {
    id: 163,
    subject: "Mathematics",
    question: "What is the name for a polygon with eight sides?",
    options: {
      A: "Hexagon",
      B: "Heptagon",
      C: "Octagon",
      D: "Nonagon",
    },
    correctAnswer: "C",
    explanation:
      "A polygon with six sides is a hexagon, seven sides is a heptagon, eight sides is an octagon, and nine sides is a nonagon.",
  },
  {
    id: 164,
    subject: "sports",
    question:
      "The term 'Grand Slam' in tennis refers to winning which four major tournaments in a calendar year?",
    options: {
      A: "Wimbledon, French Open, US Open, and Indian Wells Masters",
      B: "Australian Open, French Open, Wimbledon, and US Open",
      C: "Davis Cup, Fed Cup, ATP Finals, and WTA Finals",
      D: "Olympic Gold, Wimbledon, French Open, and Australian Open",
    },
    correctAnswer: "B",
    explanation:
      "A Grand Slam in tennis is the achievement of winning all four major championships: the Australian Open, the French Open, Wimbledon, and the US Open, in the same calendar year.",
  },
  {
    id: 165,
    subject: "creative art",
    question:
      "The repeated element in a work of art, such as a shape or a line, creates a:",
    options: {
      A: "Focal point",
      B: "Pattern",
      C: "Contrast",
      D: "Negative space",
    },
    correctAnswer: "B",
    explanation:
      "A pattern is a principle of design where an element or combination of elements are repeated in a recurring and regular arrangement.",
  },
  {
    id: 166,
    subject: "English",
    question:
      "The beginning of a story that introduces the characters, setting, and basic situation is the:",
    options: {
      A: "Climax",
      B: "Resolution",
      C: "Exposition",
      D: "Falling action",
    },
    correctAnswer: "C",
    explanation:
      "The exposition is the part of a story's plot where the author provides background information about the characters, setting, and conflict.",
  },
  {
    id: 167,
    subject: "Kiswahili",
    question:
      "Nani huwasaidia wagonjwa hospitalini na hufanya kazi na madaktari?",
    options: {
      A: "Mwalimu",
      B: "Mhandisi",
      C: "Wakili",
      D: "Muuguzi",
    },
    correctAnswer: "D",
    explanation:
      "Muuguzi (nurse) ni mtaalamu wa afya anayehusika na kuwatunza wagonjwa, kutoa dawa, na kusaidiana na madaktari katika hospitali na vituo vya afya.",
  },
  {
    id: 168,
    subject: "Social Studies",
    question: "An artifact is best described as:",
    options: {
      A: "A written historical document",
      B: "An object made or modified by a human being, of historical interest",
      C: "A natural feature of the landscape",
      D: "A traditional story or legend",
    },
    correctAnswer: "B",
    explanation:
      "An artifact is an object made by a human being, typically an item of cultural or historical interest, that provides evidence about the past.",
  },
  {
    id: 169,
    subject: "Pre-Technical Studies",
    question:
      "A simple machine consisting of a wheel on an axle, designed to support movement and reduce friction, is a:",
    options: {
      A: "Lever",
      B: "Pulley",
      C: "Inclined plane",
      D: "Wheel and axle",
    },
    correctAnswer: "D",
    explanation:
      "The wheel and axle is a simple machine consisting of a wheel attached to a smaller axle so that these two parts rotate together in which a force is transferred from one to the other.",
  },
  {
    id: 170,
    subject: "Agriculture",
    question: "The process of an animal giving birth is called:",
    options: {
      A: "Gestation",
      B: "Parturition",
      C: "Incubation",
      D: "Weaning",
    },
    correctAnswer: "B",
    explanation:
      "Parturition is the scientific term for the process of childbirth or giving birth. Gestation is the pregnancy period, incubation is for eggs, and weaning is transitioning a young animal from its mother's milk to solid food.",
  },
  {
    id: 171,
    subject: "Home Science",
    question: "Which of these is a common cause of food poisoning?",
    options: {
      A: "Eating fresh, well-cooked food",
      B: "Washing hands before handling food",
      C: "Consuming food contaminated with harmful bacteria",
      D: "Storing food at the correct temperature",
    },
    correctAnswer: "C",
    explanation:
      "Food poisoning is an illness caused by eating contaminated food. Infectious organisms — including bacteria, viruses and parasites — or their toxins are the most common causes.",
  },
  {
    id: 172,
    subject: "Mathematics",
    question:
      "If a train travels at 60 km/h, how far will it travel in 3 hours?",
    options: {
      A: "20 km",
      B: "63 km",
      C: "120 km",
      D: "180 km",
    },
    correctAnswer: "D",
    explanation:
      "Distance is calculated by multiplying speed by time (Distance = Speed × Time). So, 60 km/h × 3 hours = 180 km.",
  },
  {
    id: 173,
    subject: "sports",
    question: "Which of these is a defensive position in American Football?",
    options: {
      A: "Quarterback",
      B: "Wide Receiver",
      C: "Linebacker",
      D: "Running Back",
    },
    correctAnswer: "C",
    explanation:
      "A linebacker is a playing position in American football that is part of the defensive team. Quarterbacks, wide receivers, and running backs are all offensive positions.",
  },
  {
    id: 174,
    subject: "creative art",
    question:
      "The art and science of designing buildings and other physical structures is known as:",
    options: {
      A: "Interior design",
      B: "Architecture",
      C: "Landscaping",
      D: "Urban planning",
    },
    correctAnswer: "B",
    explanation:
      "Architecture is both the process and the product of planning, designing, and constructing buildings or other structures.",
  },
  {
    id: 175,
    subject: "English",
    question:
      "The repetition of the same sound at the beginning of words in a phrase is:",
    options: {
      A: "Onomatopoeia",
      B: "Alliteration",
      C: "Assonance",
      D: "Consonance",
    },
    correctAnswer: "B",
    explanation:
      "Alliteration is the conspicuous repetition of identical initial consonant sounds in successive or closely associated syllables within a group of words. Example: 'Peter Piper picked a peck of pickled peppers.'",
  },
  {
    id: 176,
    subject: "Kiswahili",
    question: "Mtu anayefanya biashara anaitwa nani?",
    options: {
      A: "Mkulima",
      B: "Mvuvi",
      C: "Mfanyabiashara",
      D: "Mjenzi",
    },
    correctAnswer: "C",
    explanation:
      "Mfanyabiashara ni mtu anayejihusisha na shughuli za kununua na kuuza bidhaa au huduma kwa lengo la kupata faida.",
  },
  {
    id: 177,
    subject: "Social Studies",
    question: "The right to vote in political elections is called:",
    options: {
      A: "Franchise",
      B: "Suffrage",
      C: "Citizenship",
      D: "Candidacy",
    },
    correctAnswer: "B",
    explanation:
      "Suffrage, political franchise, or simply franchise, is the right to vote in public, political elections and referendums.",
  },
  {
    id: 178,
    subject: "Pre-Technical Studies",
    question:
      "Which adhesive is most suitable for joining pieces of wood together permanently?",
    options: {
      A: "Cellulose tape",
      B: "Rubber cement",
      C: "PVA glue (wood glue)",
      D: "Paste",
    },
    correctAnswer: "C",
    explanation:
      "Polyvinyl acetate (PVA) glue, commonly known as wood glue or white glue, is specifically formulated to create strong, permanent bonds between wood fibers.",
  },
  {
    id: 179,
    subject: "Agriculture",
    question:
      "The controlled decomposition of organic matter, such as food scraps and yard waste, creates a valuable soil conditioner called:",
    options: {
      A: "Fertilizer",
      B: "Pesticide",
      C: "Compost",
      D: "Herbicide",
    },
    correctAnswer: "C",
    explanation:
      "Compost is organic matter that has been decomposed in a process called composting. This process recycles various organic materials otherwise regarded as waste products and produces a soil conditioner.",
  },
  {
    id: 180,
    subject: "Home Science",
    question: "What does a 'use-by' date on a food product indicate?",
    options: {
      A: "The last date the food is at its peak quality.",
      B: "The date the food was manufactured.",
      C: "The last date the food is safe to eat.",
      D: "The suggested date to sell the product.",
    },
    correctAnswer: "C",
    explanation:
      "A 'use-by' date is about safety. It is the most important date to remember, as foods can be unsafe to eat after this date, even if they look and smell fine.",
  },
  {
    id: 181,
    subject: "Mathematics",
    question: "A 2D shape with four equal sides and four right angles is a:",
    options: {
      A: "Rectangle",
      B: "Rhombus",
      C: "Square",
      D: "Trapezium",
    },
    correctAnswer: "C",
    explanation:
      "A square is a special type of rectangle and a special type of rhombus. It is defined as a quadrilateral with four equal sides and four equal angles (90-degree angles, or right angles).",
  },
  {
    id: 182,
    subject: "sports",
    question:
      "What is the name of the trophy awarded to the winner of the FIFA World Cup?",
    options: {
      A: "The Webb Ellis Cup",
      B: "The Stanley Cup",
      C: "The FIFA World Cup Trophy",
      D: "The Ashes",
    },
    correctAnswer: "C",
    explanation:
      "The current trophy is called the FIFA World Cup Trophy. The Webb Ellis Cup is for rugby, the Stanley Cup is for ice hockey, and The Ashes is for a cricket series between England and Australia.",
  },
  {
    id: 183,
    subject: "creative art",
    question:
      "A work of art that is created directly on a wall or ceiling is called a:",
    options: {
      A: "Mural",
      B: "Easel painting",
      C: "Diptych",
      D: "Tapestry",
    },
    correctAnswer: "A",
    explanation:
      "A mural is any piece of artwork painted or applied directly on a wall, ceiling or other permanent surface. A distinguishing characteristic of mural painting is that the architectural elements of the given space are harmoniously incorporated into the picture.",
  },
  {
    id: 184,
    subject: "English",
    question: "A group of words that expresses a complete thought is a:",
    options: {
      A: "Phrase",
      B: "Clause",
      C: "Sentence",
      D: "Paragraph",
    },
    correctAnswer: "C",
    explanation:
      "A sentence is a complete unit of grammar that contains at least a subject and a verb and expresses a complete idea. It begins with a capital letter and ends with a period, question mark, or exclamation mark.",
  },
  {
    id: 185,
    subject: "Kiswahili",
    question: "Kifaa kinachotumika kupigia simu huitwaje?",
    options: {
      A: "Runinga",
      B: "Redio",
      C: "Simu",
      D: "Barua",
    },
    correctAnswer: "C",
    explanation:
      "Simu ni kifaa cha kielektroniki kinachotumika kwa mawasiliano ya sauti na data kati ya watu walio mbalimbali.",
  },
  {
    id: 186,
    subject: "Social Studies",
    question:
      "The trade route that connected Europe with Asia and was famous for the trade of a luxurious fabric was called:",
    options: {
      A: "The Spice Route",
      B: "The Amber Road",
      C: "The Silk Road",
      D: "The Incense Route",
    },
    correctAnswer: "C",
    explanation:
      "The Silk Road was a network of trade routes which connected the East and West, and was central to the economic, cultural, political, and religious interactions between these regions from the 2nd century BCE to the 18th century. It was named for the lucrative trade in silk.",
  },
  {
    id: 187,
    subject: "Pre-Technical Studies",
    question: "A plan view in technical drawing shows an object as seen from:",
    options: {
      A: "The front",
      B: "The side",
      C: "Below",
      D: "Above",
    },
    correctAnswer: "D",
    explanation:
      "A plan view is an orthographic projection of a 3-dimensional object from the position of a horizontal plane through the object. In other words, it is a view from directly above, also known as a top view.",
  },
  {
    id: 188,
    subject: "Agriculture",
    question: "Which of these is a root vegetable?",
    options: {
      A: "Cabbage",
      B: "Spinach",
      C: "Carrot",
      D: "Broccoli",
    },
    correctAnswer: "C",
    explanation:
      "A root vegetable is a plant root used as a vegetable. Carrots are taproots. Cabbage and spinach are leafy greens, and broccoli is a flower vegetable.",
  },
  {
    id: 189,
    subject: "Home Science",
    question: "The three basic types of stitches in sewing are:",
    options: {
      A: "Long, short, and medium",
      B: "Straight, zigzag, and decorative",
      C: "Temporary, permanent, and mending",
      D: "Running stitch, backstitch, and satin stitch",
    },
    correctAnswer: "C",
    explanation:
      "In basic hand sewing, stitches are often categorized by their function. Temporary stitches (tacking) hold fabric briefly, permanent stitches join fabric for good, and mending stitches repair damage.",
  },
  {
    id: 190,
    subject: "Mathematics",
    question: "What is the Roman numeral for 10?",
    options: {
      A: "I",
      B: "V",
      C: "X",
      D: "L",
    },
    correctAnswer: "C",
    explanation:
      "In the Roman numeral system, I=1, V=5, X=10, L=50, C=100, D=500, and M=1000.",
  },
  {
    id: 191,
    subject: "sports",
    question: "What is a 'bunker' in the sport of golf?",
    options: {
      A: "A type of golf club",
      B: "A water hazard",
      C: "A sand-filled hazard",
      D: "The hole on the green",
    },
    correctAnswer: "C",
    explanation:
      "A bunker is a hazard in golf consisting of a prepared area of ground, from which turf or soil has been removed and replaced with sand or similar.",
  },
  {
    id: 192,
    subject: "creative art",
    question:
      "The process of making prints by carving an image into a block of wood is called:",
    options: {
      A: "Lithography",
      B: "Etching",
      C: "Screen printing",
      D: "Woodcut",
    },
    correctAnswer: "D",
    explanation:
      "Woodcut is a relief printing technique in which an artist carves an image into the surface of a block of wood—typically with gouges—leaving the printing parts level with the surface while removing the non-printing parts.",
  },
  {
    id: 193,
    subject: "English",
    question:
      "Which word is a verb in the sentence: 'The birds fly south for the winter'?",
    options: {
      A: "birds",
      B: "fly",
      C: "south",
      D: "winter",
    },
    correctAnswer: "B",
    explanation:
      "A verb is a word that describes an action, state, or occurrence. In this sentence, 'fly' is the action being performed by the subject, 'birds'.",
  },
  {
    id: 194,
    subject: "Kiswahili",
    question: "Chagua jibu sahihi. Mji mkuu wa Tanzania ni ______.",
    options: {
      A: "Dar es Salaam",
      B: "Arusha",
      C: "Mwanza",
      D: "Dodoma",
    },
    correctAnswer: "D",
    explanation:
      "Ingawa Dar es Salaam ni jiji kubwa zaidi na kitovu cha biashara, Dodoma ndio mji mkuu rasmi wa Jamhuri ya Muungano wa Tanzania, ambapo Bunge la nchi linapatikana.",
  },
  {
    id: 195,
    subject: "Social Studies",
    question:
      "The exchange of goods and services between countries is known as:",
    options: {
      A: "Domestic trade",
      B: "International trade",
      C: "Retail",
      D: "Barter",
    },
    correctAnswer: "B",
    explanation:
      "International trade is the exchange of capital, goods, and services across international borders or territories because there is a need or want of goods or services.",
  },
  {
    id: 196,
    subject: "Pre-Technical Studies",
    question: "Which of these tools is powered by electricity or a battery?",
    options: {
      A: "A hand saw",
      B: "A screwdriver",
      C: "A power drill",
      D: "A chisel",
    },
    correctAnswer: "C",
    explanation:
      "A power drill is a tool fitted with a cutting tool attachment, usually a drill bit, used for drilling holes in various materials. It is a power tool, meaning it is actuated by an electric motor.",
  },
  {
    id: 197,
    subject: "Agriculture",
    question: "A young sheep is called a:",
    options: {
      A: "Piglet",
      B: "Calf",
      C: "Foal",
      D: "Lamb",
    },
    correctAnswer: "D",
    explanation:
      "A lamb is a young sheep. A piglet is a young pig, a calf is a young cow, and a foal is a young horse.",
  },
  {
    id: 198,
    subject: "Home Science",
    question: "Which of these is a key element of effective communication?",
    options: {
      A: "Ignoring the other person",
      B: "Interrupting frequently",
      C: "Active listening",
      D: "Speaking in a monologue",
    },
    correctAnswer: "C",
    explanation:
      "Effective communication involves not only speaking clearly but also active listening, which means paying close attention to what the other person is saying, asking clarifying questions, and showing that you understand.",
  },
  {
    id: 199,
    subject: "Mathematics",
    question: "A line that touches a circle at exactly one point is called a:",
    options: {
      A: "Radius",
      B: "Chord",
      C: "Secant",
      D: "Tangent",
    },
    correctAnswer: "D",
    explanation:
      "A tangent to a circle is a straight line that touches the circle at only one point, called the point of tangency. A secant is a line that intersects a circle at two points.",
  },
  {
    id: 200,
    subject: "sports",
    question:
      "What is the term for a score of one under par on a hole in golf?",
    options: {
      A: "Bogey",
      B: "Birdie",
      C: "Eagle",
      D: "Par",
    },
    correctAnswer: "B",
    explanation:
      "In golf, 'par' is the predetermined number of strokes a proficient golfer should require to complete a hole. A 'birdie' is a score of one stroke under par.",
  },
  {
    id: 201,
    subject: "creative art",
    question:
      "Which art movement is characterized by vivid colors and dream-like, bizarre scenes?",
    options: {
      A: "Realism",
      B: "Cubism",
      C: "Impressionism",
      D: "Surrealism",
    },
    correctAnswer: "D",
    explanation:
      "Surrealism was a cultural movement which developed in Europe after World War I and was largely influenced by Dada. The movement is best known for its visual artworks and writings which feature element of surprise, unexpected juxtapositions and non-sequitur.",
  },
  {
    id: 202,
    subject: "English",
    question: "The time and place in which a story occurs is its:",
    options: {
      A: "Plot",
      B: "Theme",
      C: "Setting",
      D: "Conflict",
    },
    correctAnswer: "C",
    explanation:
      "The setting is the time and geographic location within a narrative, either nonfiction or fiction. It is a literary element.",
  },
  {
    id: 203,
    subject: "Kiswahili",
    question: "Kamilisha: 'Mtaka cha mvunguni...'",
    options: {
      A: "sharti ainame",
      B: "huambulia majuto",
      C: "hupata hasara",
      D: "hapati kitu",
    },
    correctAnswer: "A",
    explanation:
      "Methali hii, 'Mtaka cha mvunguni sharti ainame', inamaanisha kwamba ili kupata kitu unachokitaka, ni lazima ufanye juhudi na uwe tayari kujishusha au kufanya kazi ngumu.",
  },
  {
    id: 204,
    subject: "Social Studies",
    question:
      "The belief in and worship of a superhuman controlling power, especially a personal God or gods, is known as:",
    options: {
      A: "Politics",
      B: "Culture",
      C: "Religion",
      D: "Tradition",
    },
    correctAnswer: "C",
    explanation:
      "Religion is a social-cultural system of designated behaviors and practices, morals, beliefs, worldviews, texts, sanctified places, prophecies, ethics, or organizations, that relates humanity to supernatural, transcendental, and spiritual elements.",
  },
  {
    id: 205,
    subject: "Pre-Technical Studies",
    question: "What does PPE stand for in a workshop context?",
    options: {
      A: "Product Production Estimate",
      B: "Personal Protective Equipment",
      C: "Primary Power Engine",
      D: "Precision Planning Engineer",
    },
    correctAnswer: "B",
    explanation:
      "PPE stands for Personal Protective Equipment. It refers to protective clothing, helmets, goggles, or other garments or equipment designed to protect the wearer's body from injury or infection.",
  },
  {
    id: 206,
    subject: "Agriculture",
    question: "Which of these is NOT a primary role of roots for a plant?",
    options: {
      A: "Anchoring the plant",
      B: "Absorbing water and nutrients",
      C: "Producing food through photosynthesis",
      D: "Storing food",
    },
    correctAnswer: "C",
    explanation:
      "Photosynthesis, the process of making food, primarily occurs in the leaves of a plant where chlorophyll is present. Roots are responsible for anchorage, absorption, and storage.",
  },
  {
    id: 207,
    subject: "Home Science",
    question: "What is the main reason for including fiber in the diet?",
    options: {
      A: "To provide energy",
      B: "To build muscle",
      C: "To aid in digestion",
      D: "To strengthen bones",
    },
    correctAnswer: "C",
    explanation:
      "Dietary fiber is a type of carbohydrate that the body can't digest. It plays a crucial role in maintaining a healthy digestive system by adding bulk to stool and promoting regular bowel movements.",
  },
  {
    id: 208,
    subject: "Mathematics",
    question:
      "In a right-angled triangle, the side opposite the right angle is called the:",
    options: {
      A: "Adjacent",
      B: "Opposite",
      C: "Hypotenuse",
      D: "Base",
    },
    correctAnswer: "C",
    explanation:
      "The hypotenuse is the longest side of a right-angled triangle, the side opposite the right angle. The other two sides are called the legs (or adjacent and opposite sides relative to an angle).",
  },
  {
    id: 209,
    subject: "sports",
    question: "Which country is credited with inventing volleyball?",
    options: {
      A: "Canada",
      B: "Brazil",
      C: "United States",
      D: "Japan",
    },
    correctAnswer: "C",
    explanation:
      "Volleyball was invented in 1895 by William G. Morgan, a YMCA physical education director in Holyoke, Massachusetts, USA.",
  },
  {
    id: 210,
    subject: "creative art",
    question: "The use of dots to create an image in art is known as:",
    options: {
      A: "Hatching",
      B: "Stippling",
      C: "Sgraffito",
      D: "Blending",
    },
    correctAnswer: "B",
    explanation:
      "Stippling is the creation of a pattern simulating varying degrees of solidity or shading by using small dots. The technique is common in drawing, painting, and printmaking.",
  },
  {
    id: 211,
    subject: "English",
    question: "What is the plural form of the word 'child'?",
    options: {
      A: "Childs",
      B: "Childes",
      C: "Children",
      D: "Childrens",
    },
    correctAnswer: "C",
    explanation:
      "The word 'child' has an irregular plural form, which is 'children'.",
  },
  {
    id: 212,
    subject: "Kiswahili",
    question: "Jina jingine la 'jua' ni nini?",
    options: {
      A: "Mwezi",
      B: "Nyota",
      C: "Sayari",
      D: "Lizu",
    },
    correctAnswer: "D",
    explanation:
      "'Lizu' ni neno la Kiswahili sanifu, ingawa si la kawaida sana, lenye maana sawa na 'jua'.",
  },
  {
    id: 213,
    subject: "Social Studies",
    question: "What is an archipelago?",
    options: {
      A: "A large single island",
      B: "A narrow strip of land connecting two larger landmasses",
      C: "A chain or group of islands",
      D: "A body of water partially enclosed by land",
    },
    correctAnswer: "C",
    explanation:
      "An archipelago is a group of islands closely scattered in a body of water. Examples include the islands of Japan and the Philippines.",
  },
  {
    id: 214,
    subject: "Pre-Technical Studies",
    question:
      "A lever is a simple machine consisting of a beam or rigid rod pivoted at a fixed hinge, or:",
    options: {
      A: "An axle",
      B: "A gear",
      C: "A fulcrum",
      D: "A wedge",
    },
    correctAnswer: "C",
    explanation:
      "A lever pivots around a fixed point called the fulcrum. The arrangement of the effort, load, and fulcrum determines the class of the lever and its mechanical advantage.",
  },
  {
    id: 215,
    subject: "Agriculture",
    question: "Which of the following is considered a cereal crop?",
    options: {
      A: "Tomatoes",
      B: "Cabbage",
      C: "Maize",
      D: "Apples",
    },
    correctAnswer: "C",
    explanation:
      "Cereal crops are grasses cultivated for the edible components of their grain. Maize (corn), wheat, rice, and barley are common examples.",
  },
  {
    id: 216,
    subject: "Home Science",
    question: "In the context of a family, what are 'needs'?",
    options: {
      A: "Luxuries like expensive electronics",
      B: "Items that are desired but not essential",
      C: "Basic requirements for survival like food, water, and shelter",
      D: "Entertainment and holidays",
    },
    correctAnswer: "C",
    explanation:
      "Needs are things that are essential for survival. These include basic physiological needs such as food, water, clothing, and shelter.",
  },
  {
    id: 217,
    subject: "Mathematics",
    question: "What is the probability of flipping a coin and getting 'heads'?",
    options: {
      A: "1/2",
      B: "1/3",
      C: "1/4",
      D: "1",
    },
    correctAnswer: "A",
    explanation:
      "A standard coin has two sides (heads and tails). The probability of a specific outcome is the number of favorable outcomes divided by the total number of possible outcomes. So, the probability of getting heads is 1 out of 2, or 1/2.",
  },
  {
    id: 218,
    subject: "sports",
    question: "Which of these sports does not use a ball?",
    options: {
      A: "Basketball",
      B: "Badminton",
      C: "Football",
      D: "Tennis",
    },
    correctAnswer: "B",
    explanation:
      "Badminton is played with a shuttlecock, not a ball. The other sports all use a spherical ball as part of their gameplay.",
  },
  {
    id: 219,
    subject: "creative art",
    question:
      "A color created by mixing a primary color with a secondary color is called a:",
    options: {
      A: "Complementary color",
      B: "Tertiary color",
      C: "Analogous color",
      D: "Neutral color",
    },
    correctAnswer: "B",
    explanation:
      "Tertiary colors are made by mixing a primary color with a neighboring secondary color on the color wheel. Examples include red-orange, yellow-green, and blue-violet.",
  },
  {
    id: 220,
    subject: "English",
    question: "The main idea or underlying meaning of a literary work is its:",
    options: {
      A: "Plot",
      B: "Theme",
      C: "Setting",
      D: "Character",
    },
    correctAnswer: "B",
    explanation:
      "The theme is the central topic, subject, or message within a narrative. It is the universal idea or message explored throughout the work.",
  },
  {
    id: 221,
    subject: "Kiswahili",
    question: "Neno gani halilandani na mengine?",
    options: {
      A: "Daktari",
      B: "Mwalimu",
      C: "Wakili",
      D: "Kitabu",
    },
    correctAnswer: "D",
    explanation:
      "Maneno 'Daktari', 'Mwalimu', na 'Wakili' yote yanawakilisha taaluma au kazi za watu. Neno 'Kitabu' ni kitu, kwa hivyo halilandani na mengine.",
  },
  {
    id: 222,
    subject: "Social Studies",
    question:
      "What is the term for a period of low economic activity and rising unemployment?",
    options: {
      A: "Inflation",
      B: "A boom",
      C: "A recession",
      D: "Deflation",
    },
    correctAnswer: "C",
    explanation:
      "A recession is a business cycle contraction when there is a general decline in economic activity. Recessions are generally associated with a fall in GDP, investment spending, household income, and employment.",
  },
  {
    id: 223,
    subject: "Pre-Technical Studies",
    question: "Which of these is an example of a first-class lever?",
    options: {
      A: "A wheelbarrow",
      B: "A seesaw",
      C: "A bottle opener",
      D: "A pair of tweezers",
    },
    correctAnswer: "B",
    explanation:
      "In a first-class lever, the fulcrum is positioned between the effort and the load. A seesaw is a classic example. A wheelbarrow is a second-class lever, and a bottle opener is also a second-class lever.",
  },
  {
    id: 224,
    subject: "Agriculture",
    question:
      "The selective breeding of plants and animals by humans to promote desirable traits is called:",
    options: {
      A: "Natural selection",
      B: "Artificial selection",
      C: "Genetic engineering",
      D: "Evolution",
    },
    correctAnswer: "B",
    explanation:
      "Artificial selection (or selective breeding) is the process by which humans use animal breeding and plant breeding to selectively develop particular phenotypic traits by choosing which animals or plants will sexually reproduce and have offspring together.",
  },
  {
    id: 225,
    subject: "Home Science",
    question: "Which of these actions helps to conserve water at home?",
    options: {
      A: "Leaving the tap running while brushing teeth",
      B: "Taking long showers",
      C: "Fixing leaky faucets",
      D: "Watering the garden during the hottest part of the day",
    },
    correctAnswer: "C",
    explanation:
      "A dripping faucet can waste a significant amount of water over time. Repairing leaks is a simple and effective way to conserve water in the household.",
  },
  {
    id: 226,
    subject: "Mathematics",
    question: "How many sides does a pentagon have?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "B",
    explanation:
      "A pentagon is a polygon with five straight sides and five angles.",
  },
  {
    id: 227,
    subject: "sports",
    question:
      "The Tour de France is a famous annual multi-stage race in which sport?",
    options: {
      A: "Running",
      B: "Motorsport",
      C: "Cycling",
      D: "Sailing",
    },
    correctAnswer: "C",
    explanation:
      "The Tour de France is an annual men's multiple-stage bicycle race primarily held in France, while also occasionally passing through nearby countries.",
  },
  {
    id: 228,
    subject: "creative art",
    question: "In visual art, what does 'monochromatic' mean?",
    options: {
      A: "Using many different bright colors",
      B: "Using only one color in various shades and tints",
      C: "Using only black and white",
      D: "Using colors that are opposite on the color wheel",
    },
    correctAnswer: "B",
    explanation:
      "A monochromatic color scheme consists of different tones, shades, and tints within a specific hue (color). It creates a harmonious and visually cohesive look.",
  },
  {
    id: 229,
    subject: "English",
    question:
      "A word that imitates the sound it describes, like 'buzz' or 'moo', is an example of:",
    options: {
      A: "Alliteration",
      B: "Hyperbole",
      C: "Onomatopoeia",
      D: "Metaphor",
    },
    correctAnswer: "C",
    explanation:
      "Onomatopoeia is the process of creating a word that phonetically imitates, resembles, or suggests the sound that it describes.",
  },
  {
    id: 230,
    subject: "Kiswahili",
    question: "Nini maana ya neno 'fukara'?",
    options: {
      A: "Mtu tajiri sana",
      B: "Mtu mwenye hekima",
      C: "Mtu maskini sana",
      D: "Mtu mkarimu",
    },
    correctAnswer: "C",
    explanation:
      "Neno 'fukara' linamaanisha mtu ambaye ni maskini sana, asiye na mali wala uwezo wa kujikimu kimaisha.",
  },
  {
    id: 231,
    subject: "Social Studies",
    question: "The Prime Meridian passes through which city?",
    options: {
      A: "Paris, France",
      B: "New York, USA",
      C: "Greenwich, England",
      D: "Rome, Italy",
    },
    correctAnswer: "C",
    explanation:
      "The Prime Meridian, at 0 degrees longitude, is the line from which all other longitudes are measured. By international convention, it passes through the Royal Observatory in Greenwich, London.",
  },
  {
    id: 232,
    subject: "Pre-Technical Studies",
    question:
      "Which of the following is an alloy made primarily of iron and carbon?",
    options: {
      A: "Bronze",
      B: "Brass",
      C: "Steel",
      D: "Aluminum",
    },
    correctAnswer: "C",
    explanation:
      "Steel is an alloy of iron and carbon, and sometimes other elements. It is a major component used in buildings, infrastructure, tools, ships, automobiles, and weapons. Bronze is a copper-tin alloy, and brass is a copper-zinc alloy.",
  },
  {
    id: 233,
    subject: "Agriculture",
    question:
      "What is the process of collecting mature crops from the fields called?",
    options: {
      A: "Planting",
      B: "Tilling",
      C: "Harvesting",
      D: "Weeding",
    },
    correctAnswer: "C",
    explanation:
      "Harvesting is the process of gathering a ripe crop from the fields. It marks the end of the growing season for a particular crop.",
  },
  {
    id: 234,
    subject: "Home Science",
    question:
      "When ironing clothes, which fabric generally requires the lowest heat setting?",
    options: {
      A: "Cotton",
      B: "Linen",
      C: "Nylon",
      D: "Wool",
    },
    correctAnswer: "C",
    explanation:
      "Synthetic fabrics like nylon, polyester, and acrylic are sensitive to heat and can melt or scorch easily. They should always be ironed on a low heat setting. Cotton and linen require the highest heat.",
  },
  {
    id: 235,
    subject: "Mathematics",
    question: "What is the square root of 81?",
    options: {
      A: "7",
      B: "8",
      C: "9",
      D: "10",
    },
    correctAnswer: "C",
    explanation:
      "The square root of a number is a value that, when multiplied by itself, gives the original number. 9 × 9 = 81, so the square root of 81 is 9.",
  },
  {
    id: 236,
    subject: "sports",
    question: "In which sport is the term 'love-fifteen' used?",
    options: {
      A: "Badminton",
      B: "Table Tennis",
      C: "Squash",
      D: "Tennis",
    },
    correctAnswer: "D",
    explanation:
      "'Love-fifteen' is a score in tennis, where 'love' represents zero points for the server and 'fifteen' represents one point for the receiver.",
  },
  {
    id: 237,
    subject: "creative art",
    question: "The area around and between objects in a work of art is called:",
    options: {
      A: "Positive space",
      B: "Negative space",
      C: "Foreground",
      D: "Background",
    },
    correctAnswer: "B",
    explanation:
      "Negative space, in art, is the space around and between the subject(s) of an image. Positive space is the main focus or subject of a picture.",
  },
  {
    id: 238,
    subject: "English",
    question:
      "A word that is used in place of a noun, such as 'he', 'she', or 'it', is called a:",
    options: {
      A: "Verb",
      B: "Adjective",
      C: "Pronoun",
      D: "Adverb",
    },
    correctAnswer: "C",
    explanation:
      "A pronoun is a word that can function by itself as a noun phrase and that refers either to the participants in the discourse or to someone or something mentioned elsewhere in the discourse.",
  },
  {
    id: 239,
    subject: "Kiswahili",
    question: "Mtu anayesafiri kwa miguu huitwaje?",
    options: {
      A: "Mpita njia",
      B: "Msafiri",
      C: "Abiria",
      D: "Mtembezi",
    },
    correctAnswer: "A",
    explanation:
      "Ingawa maneno yote yanahusiana na kusafiri, 'mpita njia' ndilo neno mahususi kwa mtu anayetembea kwa miguu, hasa kando ya barabara.",
  },
  {
    id: 240,
    subject: "Social Studies",
    question: "Which ancient civilization built the pyramids at Giza?",
    options: {
      A: "Ancient Rome",
      B: "Ancient Greece",
      C: "Ancient Egypt",
      D: "Mesopotamia",
    },
    correctAnswer: "C",
    explanation:
      "The Great Pyramids of Giza were built by the ancient Egyptians as tombs for their pharaohs and their consorts during the Old and Middle Kingdom periods.",
  },
  {
    id: 241,
    subject: "Pre-Technical Studies",
    question:
      "A gear is a rotating machine part having cut teeth which mesh with another toothed part in order to:",
    options: {
      A: "Reduce friction",
      B: "Generate electricity",
      C: "Transmit torque",
      D: "Create light",
    },
    correctAnswer: "C",
    explanation:
      "Gears are used to transmit power (torque) and motion from one shaft to another. They can change the speed, torque, and direction of a power source.",
  },
  {
    id: 242,
    subject: "Agriculture",
    question: "The practice of keeping bees is known as:",
    options: {
      A: "Sericulture",
      B: "Apiculture",
      C: "Pisciculture",
      D: "Floriculture",
    },
    correctAnswer: "B",
    explanation:
      "Apiculture, or beekeeping, is the maintenance of honey bee colonies, commonly in man-made hives, by humans. Sericulture is silkworm farming, pisciculture is fish farming, and floriculture is flower farming.",
  },
  {
    id: 243,
    subject: "Home Science",
    question:
      "A list of ingredients and instructions for preparing a particular dish is called a:",
    options: {
      A: "Menu",
      B: "Budget",
      C: "Recipe",
      D: "Shopping list",
    },
    correctAnswer: "C",
    explanation:
      "A recipe is a set of instructions for preparing a particular dish, including a list of the ingredients required.",
  },
  {
    id: 244,
    subject: "Mathematics",
    question:
      "If a pizza is divided into 8 equal slices and you eat 3, what fraction of the pizza have you eaten?",
    options: {
      A: "1/8",
      B: "3/8",
      C: "5/8",
      D: "3/5",
    },
    correctAnswer: "B",
    explanation:
      "The total number of slices is the denominator (8), and the number of slices you ate is the numerator (3). Therefore, you ate 3/8 of the pizza.",
  },
  {
    id: 245,
    subject: "sports",
    question: "In athletics, what does a false start mean?",
    options: {
      A: "Finishing the race in first place",
      B: "Starting the race before the official signal",
      C: "Dropping the baton in a relay race",
      D: "Running outside of your designated lane",
    },
    correctAnswer: "B",
    explanation:
      "A false start is a movement by a participant before (or in some cases after) being signaled or otherwise permitted by the rules to start. This can result in a warning or disqualification.",
  },
  {
    id: 246,
    subject: "creative art",
    question:
      "The place in a work of art that an artist wants the viewer to focus on is called the:",
    options: {
      A: "Focal point",
      B: "Vanishing point",
      C: "Horizon line",
      D: "Picture plane",
    },
    correctAnswer: "A",
    explanation:
      "The focal point is the center of interest or activity in a work of art. It is the area in a composition to which the eye is drawn.",
  },
  {
    id: 247,
    subject: "English",
    question:
      "A comparison between two unlike things without using 'like' or 'as' is a:",
    options: {
      A: "Simile",
      B: "Metaphor",
      C: "Allusion",
      D: "Analogy",
    },
    correctAnswer: "B",
    explanation:
      "A metaphor is a figure of speech that directly refers to one thing by mentioning another. For example, 'The world is a stage.'",
  },
  {
    id: 248,
    subject: "Kiswahili",
    question: "Wingi wa neno 'jicho' ni upi?",
    options: {
      A: "Macho",
      B: "Vijicho",
      C: "Majicho",
      D: "Njicho",
    },
    correctAnswer: "A",
    explanation:
      "Neno 'jicho' liko katika ngeli ya LI-YA. Umoja wake ni 'jicho' na wingi wake ni 'macho'.",
  },
  {
    id: 249,
    subject: "Social Studies",
    question: "The process of goods being made in factories is called:",
    options: {
      A: "Agriculture",
      B: "Manufacturing",
      C: "Mining",
      D: "Services",
    },
    correctAnswer: "B",
    explanation:
      "Manufacturing is the production of merchandise for use or sale using labor and machines, tools, chemical or biological processing, or formulation.",
  },
  {
    id: 250,
    subject: "Pre-Technical Studies",
    question: "A hacksaw is primarily used to cut what type of material?",
    options: {
      A: "Wood",
      B: "Plastic",
      C: "Metal",
      D: "Fabric",
    },
    correctAnswer: "C",
    explanation:
      "A hacksaw is a fine-toothed saw, originally and mainly made for cutting metal. The blade has very small, hardened teeth.",
  },
  {
    id: 251,
    subject: "Agriculture",
    question: "A female adult cattle is called a:",
    options: {
      A: "Bull",
      B: "Cow",
      C: "Heifer",
      D: "Steer",
    },
    correctAnswer: "B",
    explanation:
      "A cow is a mature female of the species Bos taurus. A bull is a mature male, a heifer is a young female that has not yet had a calf, and a steer is a castrated male.",
  },
  {
    id: 252,
    subject: "Home Science",
    question: "The proper way to extinguish a grease fire on a stovetop is to:",
    options: {
      A: "Pour water on it",
      B: "Smother it with a lid or baking soda",
      C: "Fan it with a towel",
      D: "Use a fire extinguisher containing water",
    },
    correctAnswer: "B",
    explanation:
      "Never use water on a grease fire, as it will cause the burning grease to splash and spread the fire. The safest method is to turn off the heat and cover the pan with a metal lid or pour baking soda on it to smother the flames.",
  },
  {
    id: 253,
    subject: "Mathematics",
    question: "How many grams are in one kilogram?",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "10000",
    },
    correctAnswer: "C",
    explanation:
      "The prefix 'kilo-' in the metric system means one thousand. Therefore, there are 1000 grams in one kilogram.",
  },
  {
    id: 254,
    subject: "sports",
    question: "How many rings are in the Olympic symbol?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer: "C",
    explanation:
      "The Olympic symbol consists of five interlocking rings of different colors (blue, yellow, black, green, and red) on a white field. The rings represent the five inhabited continents of the world.",
  },
  {
    id: 255,
    subject: "creative art",
    question:
      "Colors that are opposite each other on the color wheel are called:",
    options: {
      A: "Analogous colors",
      B: "Complementary colors",
      C: "Primary colors",
      D: "Warm colors",
    },
    correctAnswer: "B",
    explanation:
      "Complementary colors are pairs of colors which, when combined or mixed, cancel each other out (lose hue) by producing a grayscale color like white or black. When placed next to each other, they create the strongest contrast. Examples are red and green.",
  },
  {
    id: 256,
    subject: "English",
    question: "The most exciting or intense point of a story is known as the:",
    options: {
      A: "Exposition",
      B: "Rising action",
      C: "Climax",
      D: "Resolution",
    },
    correctAnswer: "C",
    explanation:
      "The climax is the point of highest tension or drama in a narrative's plot. It is often the turning point of the story.",
  },
  {
    id: 257,
    subject: "Kiswahili",
    question: "Kazi ya mvuvi ni ipi?",
    options: {
      A: "Kulima shamba",
      B: "Kujenga nyumba",
      C: "Kuvua samaki",
      D: "Kufundisha shuleni",
    },
    correctAnswer: "C",
    explanation:
      "Mvuvi ni mtu ambaye kazi yake ni kuvua samaki kutoka katika miili ya maji kama vile bahari, maziwa, au mito.",
  },
  {
    id: 258,
    subject: "Social Studies",
    question:
      "What is the study of past events, particularly in human affairs?",
    options: {
      A: "Geography",
      B: "History",
      C: "Civics",
      D: "Economics",
    },
    correctAnswer: "B",
    explanation:
      "History is the academic discipline which uses a narrative to describe, examine, question, and analyze a sequence of past events, and investigate the patterns of cause and effect that are related to them.",
  },
  {
    id: 259,
    subject: "Pre-Technical Studies",
    question:
      "A material that does NOT allow electricity to pass through it is called:",
    options: {
      A: "A conductor",
      B: "An insulator",
      C: "A semiconductor",
      D: "A resistor",
    },
    correctAnswer: "B",
    explanation:
      "An electrical insulator is a material whose internal electric charges do not flow freely; very little electric current will flow through it under the influence of an electric field. Examples include plastic, rubber, and glass.",
  },
  {
    id: 260,
    subject: "Agriculture",
    question: "What is a greenhouse used for?",
    options: {
      A: "Storing farm machinery",
      B: "Housing livestock",
      C: "Growing plants in a controlled environment",
      D: "Storing harvested grain",
    },
    correctAnswer: "C",
    explanation:
      "A greenhouse is a structure with walls and roof made chiefly of transparent material, such as glass, in which plants requiring regulated climatic conditions are grown.",
  },
  {
    id: 261,
    subject: "Home Science",
    question:
      "What is the term for the body's physical and psychological response to demands and pressures?",
    options: {
      A: "Relaxation",
      B: "Stress",
      C: "Happiness",
      D: "Sleep",
    },
    correctAnswer: "B",
    explanation:
      "Stress is a feeling of emotional or physical tension. It can come from any event or thought that makes you feel frustrated, angry, or nervous. Managing stress is important for overall health.",
  },
  {
    id: 262,
    subject: "Mathematics",
    question: "The number π (pi) is approximately equal to:",
    options: {
      A: "2.71",
      B: "1.61",
      C: "4.14",
      D: "3.14",
    },
    correctAnswer: "D",
    explanation:
      "Pi (π) is a mathematical constant that is the ratio of a circle's circumference to its diameter, approximately equal to 3.14159.",
  },
  {
    id: 263,
    subject: "sports",
    question: "Which piece is the most powerful in the game of chess?",
    options: {
      A: "The King",
      B: "The Rook",
      C: "The Queen",
      D: "The Knight",
    },
    correctAnswer: "C",
    explanation:
      "The queen is the most powerful piece in chess. It can move any number of squares vertically, horizontally, or diagonally. The king is the most important piece, but not the most powerful in terms of movement.",
  },
  {
    id: 264,
    subject: "creative art",
    question:
      "The visual component of a color, such as 'red', 'green', or 'blue', is its:",
    options: {
      A: "Hue",
      B: "Value",
      C: "Saturation",
      D: "Tone",
    },
    correctAnswer: "A",
    explanation:
      "Hue is one of the main properties of a color, defined as 'the degree to which a stimulus can be described as similar to or different from stimuli that are described as red, green, blue, and yellow'. It is the basic name of the color.",
  },
  {
    id: 265,
    subject: "English",
    question:
      "Which of these is a coordinating conjunction often remembered by the acronym FANBOYS?",
    options: {
      A: "Although",
      B: "Because",
      C: "But",
      D: "While",
    },
    correctAnswer: "C",
    explanation:
      "The coordinating conjunctions are 'for', 'and', 'nor', 'but', 'or', 'yet', and 'so'. They connect words, phrases, and clauses of equal grammatical rank. The acronym FANBOYS helps in remembering them.",
  },
  {
    id: 266,
    subject: "Kiswahili",
    question: "Nini kinyume cha neno 'safi'?",
    options: {
      A: "Nzuri",
      B: "Chafu",
      C: "Nyeupe",
      D: "Mpya",
    },
    correctAnswer: "B",
    explanation:
      "Kinyume (antonym) cha neno 'safi' (clean) ni 'chafu' (dirty).",
  },
  {
    id: 267,
    subject: "Social Studies",
    question: "The total number of people living in a particular area is its:",
    options: {
      A: "Population",
      B: "Density",
      C: "Community",
      D: "Society",
    },
    correctAnswer: "A",
    explanation:
      "Population refers to the total number of individuals of a species living in a specific geographical area.",
  },
  {
    id: 268,
    subject: "Pre-Technical Studies",
    question:
      "Which safety device is designed to interrupt an electrical circuit when it detects an overload or short circuit?",
    options: {
      A: "A switch",
      B: "A fuse or circuit breaker",
      C: "A resistor",
      D: "A light bulb",
    },
    correctAnswer: "B",
    explanation:
      "A fuse (which melts and breaks) or a circuit breaker (which trips a switch) are safety devices designed to automatically stop the flow of current in an electric circuit as a safety measure to prevent damage from excess current.",
  },
  {
    id: 269,
    subject: "Agriculture",
    question: "The process of a seed developing into a plant is called:",
    options: {
      A: "Pollination",
      B: "Fertilization",
      C: "Germination",
      D: "Photosynthesis",
    },
    correctAnswer: "C",
    explanation:
      "Germination is the process by which a plant grows from a seed. The most common example of germination is the sprouting of a seedling from a seed of an angiosperm or gymnosperm.",
  },
  {
    id: 270,
    subject: "Home Science",
    question: "What is the importance of having a shopping list?",
    options: {
      A: "It guarantees the lowest prices.",
      B: "It helps to avoid impulse buying and forgetting essential items.",
      C: "It is required by all stores for entry.",
      D: "It makes the shopping trip take longer.",
    },
    correctAnswer: "B",
    explanation:
      "A shopping list helps you stay focused on what you actually need, which can prevent you from making unplanned purchases (impulse buys) and ensures you don't forget to buy important items.",
  },
  {
    id: 271,
    subject: "Mathematics",
    question: "What is the value of 10³ (10 cubed)?",
    options: {
      A: "30",
      B: "100",
      C: "1000",
      D: "103",
    },
    correctAnswer: "C",
    explanation:
      "Cubing a number means multiplying it by itself three times. So, 10³ = 10 × 10 × 10 = 1000.",
  },
  {
    id: 272,
    subject: "sports",
    question: "In which city were the first modern Olympic Games held in 1896?",
    options: {
      A: "Paris",
      B: "London",
      C: "Athens",
      D: "Rome",
    },
    correctAnswer: "C",
    explanation:
      "The first international Olympic Games held in the modern era took place in Athens, Greece, in 1896, in recognition of the ancient Olympic Games that were held in Olympia, Greece.",
  },
  {
    id: 273,
    subject: "creative art",
    question:
      "A type of fine, soft, porous clay used for making pottery and ceramic ware is known as:",
    options: {
      A: "Terracotta",
      B: "Porcelain",
      C: "Stoneware",
      D: "Earthenware",
    },
    correctAnswer: "D",
    explanation:
      "Earthenware is glazed or unglazed nonvitreous pottery that has normally been fired below 1,200 °C. It is the most common and oldest type of pottery.",
  },
  {
    id: 274,
    subject: "English",
    question: "The story of a person's life written by another person is a:",
    options: {
      A: "Autobiography",
      B: "Biography",
      C: "Memoir",
      D: "Journal",
    },
    correctAnswer: "B",
    explanation:
      "A biography is a detailed description of a person's life. It involves more than just the basic facts, presenting a subject's experience of these events. An autobiography is written by the subject themselves.",
  },
  {
    id: 275,
    subject: "Kiswahili",
    question:
      "Chagua kiambishi sahihi cha wakati uliopita (past tense) katika Kiswahili.",
    options: {
      A: "-na-",
      B: "-ta-",
      C: "-li-",
      D: "-me-",
    },
    correctAnswer: "C",
    explanation:
      "Kiambishi '-li-' kinawakilisha wakati uliopita. Mfano: 'Alikula' (He/She ate). '-na-' ni wakati uliopo, '-ta-' ni wakati ujao, na '-me-' ni wakati timilifu.",
  },
  {
    id: 276,
    subject: "Social Studies",
    question: "What is the highest mountain in Africa?",
    options: {
      A: "Mount Kenya",
      B: "Mount Kilimanjaro",
      C: "Mount Everest",
      D: "Mount Ruwenzori",
    },
    correctAnswer: "B",
    explanation:
      "Mount Kilimanjaro in Tanzania is a dormant volcano and the highest mountain in Africa, with its summit about 5,895 meters above sea level. Mount Everest is the world's highest mountain and is in Asia.",
  },
  {
    id: 277,
    subject: "Pre-Technical Studies",
    question:
      "The ability of a material to be drawn out into a thin wire is called:",
    options: {
      A: "Malleability",
      B: "Ductility",
      C: "Hardness",
      D: "Brittleness",
    },
    correctAnswer: "B",
    explanation:
      "Ductility is a measure of a material's ability to undergo significant plastic deformation before rupture, which may be expressed as percent elongation or percent area reduction from a tensile test. Malleability is the ability to be hammered into a thin sheet.",
  },
  {
    id: 278,
    subject: "Agriculture",
    question:
      "Which of these is a method of pest control that uses natural predators?",
    options: {
      A: "Chemical control",
      B: "Biological control",
      C: "Cultural control",
      D: "Mechanical control",
    },
    correctAnswer: "B",
    explanation:
      "Biological control is a method of controlling pests such as insects, mites, weeds and plant diseases using other organisms. It relies on predation, parasitism, herbivory, or other natural mechanisms.",
  },
  {
    id: 279,
    subject: "Home Science",
    question: "A timetable or schedule helps an individual to:",
    options: {
      A: "Avoid all responsibilities",
      B: "Create confusion",
      C: "Waste time",
      D: "Manage their time effectively",
    },
    correctAnswer: "D",
    explanation:
      "A timetable is a time management tool that helps organize tasks, activities, and appointments in a structured way, leading to more efficient use of time and increased productivity.",
  },
  {
    id: 280,
    subject: "Mathematics",
    question: "What is the value of the angle on a straight line?",
    options: {
      A: "90°",
      B: "180°",
      C: "270°",
      D: "360°",
    },
    correctAnswer: "B",
    explanation:
      "A straight angle changes the direction to point the opposite way. It looks like a straight line. It measures 180° (half a revolution).",
  },
  {
    id: 281,
    subject: "sports",
    question: "The America's Cup is a prestigious trophy in which sport?",
    options: {
      A: "Horse Racing",
      B: "Sailing",
      C: "Golf",
      D: "Motorsport",
    },
    correctAnswer: "B",
    explanation:
      "The America's Cup is the oldest international sporting trophy and is a renowned sailing competition between two sailing yachts.",
  },
  {
    id: 282,
    subject: "creative art",
    question:
      "A type of Japanese poetry with three phrases composed of 17 syllables in a 5, 7, 5 pattern is a:",
    options: {
      A: "Sonnet",
      B: "Limerick",
      C: "Haiku",
      D: "Ballad",
    },
    correctAnswer: "C",
    explanation:
      "A haiku is a Japanese poetic form that consists of three phrases with a 5, 7, 5 syllable structure. It often focuses on images from nature.",
  },
  {
    id: 283,
    subject: "English",
    question: "The character who opposes the main character in a story is the:",
    options: {
      A: "Protagonist",
      B: "Narrator",
      C: "Antagonist",
      D: "Sidekick",
    },
    correctAnswer: "C",
    explanation:
      "An antagonist is a character, group of characters, institution, or concept that stands in opposition to the protagonist. They are often referred to as the 'villain' of the story.",
  },
  {
    id: 284,
    subject: "Kiswahili",
    question: "Jengo refu sana lenye ghorofa nyingi huitwaje?",
    options: {
      A: "Kibanda",
      B: "Jumba",
      C: "Ghorofa",
      D: "Kasri",
    },
    correctAnswer: "C",
    explanation:
      "Ghorofa ni jengo lenye orofa au sakafu zaidi ya moja. Jengo refu sana linaweza kuitwa 'ghorofa ndefu' au 'Skyscraper' kwa Kiingereza.",
  },
  {
    id: 285,
    subject: "Social Studies",
    question:
      "The system by which a group of people make and enforce laws is called:",
    options: {
      A: "Economy",
      B: "Culture",
      C: "Government",
      D: "Religion",
    },
    correctAnswer: "C",
    explanation:
      "A government is the system or group of people governing an organized community, generally a state, and is responsible for creating and enforcing its laws.",
  },
  {
    id: 286,
    subject: "Pre-Technical Studies",
    question: "Which type of energy is stored in a battery?",
    options: {
      A: "Kinetic energy",
      B: "Potential energy",
      C: "Chemical energy",
      D: "Thermal energy",
    },
    correctAnswer: "C",
    explanation:
      "A battery is a device that stores chemical energy and converts it into electrical energy. The chemical reactions inside the battery produce electrons that flow through a circuit.",
  },
  {
    id: 287,
    subject: "Agriculture",
    question: "What is the term for a farm that grows only one type of crop?",
    options: {
      A: "Mixed farm",
      B: "Monoculture farm",
      C: "Organic farm",
      D: "Subsistence farm",
    },
    correctAnswer: "B",
    explanation:
      "Monoculture is the agricultural practice of producing or growing a single crop, plant, or livestock species, variety, or breed in a field or farming system at a time.",
  },
  {
    id: 288,
    subject: "Home Science",
    question: "What is the primary function of detergents in laundry?",
    options: {
      A: "To soften the fabric",
      B: "To add color to clothes",
      C: "To remove dirt and stains",
      D: "To reduce wrinkles",
    },
    correctAnswer: "C",
    explanation:
      "Detergents contain surfactants, which are compounds that help to lift dirt, grease, and stains from fabric and suspend them in the wash water so they can be rinsed away.",
  },
  {
    id: 289,
    subject: "Mathematics",
    question: "An eight-sided polygon is called an:",
    options: {
      A: "Octagon",
      B: "Hexagon",
      C: "Decagon",
      D: "Heptagon",
    },
    correctAnswer: "A",
    explanation:
      "An octagon has 8 sides, a hexagon has 6, a decagon has 10, and a heptagon has 7.",
  },
  {
    id: 290,
    subject: "sports",
    question: "In which country did golf originate?",
    options: {
      A: "United States",
      B: "England",
      C: "Scotland",
      D: "Ireland",
    },
    correctAnswer: "C",
    explanation:
      "The modern game of golf is generally considered to be a Scottish invention. The first written record of golf is James II's banning of the game in 1457.",
  },
  {
    id: 291,
    subject: "creative art",
    question: "Which of these is a method of creating a sculpture?",
    options: {
      A: "Painting",
      B: "Drawing",
      C: "Carving",
      D: "Printmaking",
    },
    correctAnswer: "C",
    explanation:
      "Carving is a subtractive process in sculpture where material is systematically removed from a solid block of material (like wood or stone) to create a shape.",
  },
  {
    id: 292,
    subject: "English",
    question: "Which of these is a punctuation mark?",
    options: {
      A: "Verb",
      B: "Noun",
      C: "Comma",
      D: "Adjective",
    },
    correctAnswer: "C",
    explanation:
      "A comma is a punctuation mark that indicates a pause in a sentence or separates items in a list. Verbs, nouns, and adjectives are parts of speech.",
  },
  {
    id: 293,
    subject: "Kiswahili",
    question: "Maana ya 'simba' kwa lugha ya Kiingereza ni nini?",
    options: {
      A: "Tiger",
      B: "Lion",
      C: "Leopard",
      D: "Elephant",
    },
    correctAnswer: "B",
    explanation:
      "Neno la Kiswahili 'simba' linatafsiriwa kama 'lion' kwa lugha ya Kiingereza.",
  },
  {
    id: 294,
    subject: "Social Studies",
    question:
      "The gradual increase in the overall temperature of the earth's atmosphere is known as:",
    options: {
      A: "The greenhouse effect",
      B: "Global warming",
      C: "The ozone layer",
      D: "Climate change",
    },
    correctAnswer: "B",
    explanation:
      "Global warming is the long-term heating of Earth’s climate system observed since the pre-industrial period due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth’s atmosphere.",
  },
  {
    id: 295,
    subject: "Pre-Technical Studies",
    question: "What is the primary purpose of sandpaper?",
    options: {
      A: "To join two surfaces",
      B: "To apply paint",
      C: "To smooth a rough surface",
      D: "To measure length",
    },
    correctAnswer: "C",
    explanation:
      "Sandpaper is a type of coated abrasive that consists of sheets of paper or cloth with abrasive material glued to one face. It is used to remove small amounts of material from surfaces, making them smoother.",
  },
  {
    id: 296,
    subject: "Agriculture",
    question:
      "The practice of farming to produce food for one's own family is known as:",
    options: {
      A: "Commercial farming",
      B: "Subsistence farming",
      C: "Ranching",
      D: "Plantation agriculture",
    },
    correctAnswer: "B",
    explanation:
      "Subsistence agriculture occurs when farmers grow food crops to meet the needs of themselves and their families on smallholdings. There is little to no surplus for trade.",
  },
  {
    id: 297,
    subject: "Home Science",
    question:
      "What is a major risk associated with playing with electrical sockets?",
    options: {
      A: "Getting a stain on your clothes",
      B: "Receiving a dangerous electric shock",
      C: "Making the room too bright",
      D: "Losing a toy",
    },
    correctAnswer: "B",
    explanation:
      "Electrical sockets are a direct source of high-voltage electricity. Sticking objects into them or tampering with them can lead to severe electric shock, burns, or even death. It is a critical safety hazard.",
  },
  {
    id: 298,
    subject: "Mathematics",
    question: "What is the place value of the '7' in the number 478?",
    options: {
      A: "Ones",
      B: "Tens",
      C: "Hundreds",
      D: "Sevens",
    },
    correctAnswer: "B",
    explanation:
      "In the number 478, the 8 is in the ones place, the 7 is in the tens place (representing 70), and the 4 is in the hundreds place (representing 400).",
  },
  {
    id: 299,
    subject: "sports",
    question: "Which of these is a common foul in basketball?",
    options: {
      A: "Slam dunk",
      B: "Three-point shot",
      C: "Pushing an opponent",
      D: "Dribbling the ball",
    },
    correctAnswer: "C",
    explanation:
      "Pushing, holding, or illegal contact with an opponent constitutes a personal foul in basketball. Slam dunks, three-point shots, and dribbling are legal and fundamental parts of the game.",
  },
  {
    id: 300,
    subject: "creative art",
    question:
      "An arrangement of inanimate objects, such as flowers or fruit, as a subject for a painting is called:",
    options: {
      A: "A landscape",
      B: "A portrait",
      C: "A still life",
      D: "An abstract",
    },
    correctAnswer: "C",
    explanation:
      "A still life is a work of art that depicts mostly inanimate subject matter. It is a common genre in painting and photography, allowing the artist to control the composition, lighting, and subject.",
  },
];

export default quizzes;
