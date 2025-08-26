const articles = [
    {
        "title": "Semantic Versioning 2.0.0",
        "author": "Semantic Versioning",
        "url": "https://semver.org/",
        "description": "Programming article about semantic versioning 2.0.0",
        "category": "Programming",
        "dateAdded": "2020-02-20",
        "status": "completed"
    },
    {
        "title": "Amazon Recommendations Research Paper",
        "author": "UMD",
        "url": "http://cs.umd.edu/~samir/498/Amazon-Recommendations.pdf",
        "description": "Machine learning resource on recommendation systems",
        "category": "Machine Learning",
        "dateAdded": "2020-02-20",
        "status": "reading"
    },
    {
        "title": "Ladder of Abstraction",
        "author": "Worrydream",
        "url": "http://worrydream.com/LadderOfAbstraction/",
        "description": "Article about ladder of abstraction",
        "category": "General",
        "dateAdded": "2021-09-15",
        "status": "reading"
    },
    {
        "title": "Don't Call Yourself A Programmer, And Other Career Advice",
        "author": "Kalzumeus Software",
        "url": "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/",
        "description": "Career and personal development content",
        "category": "Personal Development",
        "dateAdded": "2022-12-23",
        "status": "to-read"
    },
    {
        "title": "Living Worlds in HTML5",
        "author": "Effectgames",
        "url": "http://www.effectgames.com/demos/worlds/",
        "description": "Web development tutorial or guide",
        "category": "Web Development",
        "dateAdded": "2022-05-16",
        "status": "completed"
    },
    {
        "title": "The Nature of Code",
        "author": "Nature of Code",
        "url": "https://natureofcode.com/book/introduction/",
        "description": "Programming article about nature of code",
        "category": "Programming",
        "dateAdded": "2020-02-20",
        "status": "reading"
    },
    {
        "title": "Far Cry: How the Fire Burns and Spreads",
        "author": "Jflevesque",
        "url": "https://jflevesque.com/2012/12/06/far-cry-how-the-fire-burns-and-spreads/",
        "description": "Game development tutorial on fire simulation",
        "category": "Game Development",
        "dateAdded": "2020-12-15",
        "status": "reading"
    },
    {
        "title": "The Fourier Transform, explained in one sentence",
        "author": "Revolution Analytics",
        "url": "https://blog.revolutionanalytics.com/2014/01/the-fourier-transform-explained-in-one-sentence.html",
        "description": "Computer science fundamentals and algorithms",
        "category": "Computer Science",
        "dateAdded": "2023-01-15",
        "status": "to-read"
    },
    {
        "title": "Every Noise at Once",
        "author": "Everynoise",
        "url": "https://everynoise.com/",
        "description": "Article about music visualization",
        "category": "General",
        "dateAdded": "2021-04-02",
        "status": "completed"
    },
    {
        "title": "StackStorm/st2",
        "author": "StackStorm",
        "url": "https://github.com/StackStorm/st2",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2022-11-25",
        "status": "reading"
    },
    {
        "title": "Mathematical and Puzzle Fonts/Typefaces",
        "author": "Erikdemaine",
        "url": "https://erikdemaine.org/fonts/",
        "description": "Design and user experience resource",
        "category": "Design",
        "dateAdded": "2024-02-18",
        "status": "reading"
    },
    {
        "title": "ssloy/tinyrenderer",
        "author": "ssloy",
        "url": "https://github.com/ssloy/tinyrenderer/",
        "description": "Computer graphics article about rendering",
        "category": "Graphics",
        "dateAdded": "2022-03-17",
        "status": "to-read"
    },
    {
        "title": "fulldecent/system-bus-radio",
        "author": "fulldecent",
        "url": "https://github.com/fulldecent/system-bus-radio",
        "description": "Programming article about radio transmission",
        "category": "Programming",
        "dateAdded": "2020-12-17",
        "status": "completed"
    },
    {
        "title": "Personal CRM done right - Monica",
        "author": "Monicahq",
        "url": "https://www.monicahq.com/",
        "description": "Career and personal development content",
        "category": "Personal Development",
        "dateAdded": "2020-02-20",
        "status": "reading"
    },
    {
        "title": "Improving Team Productivity by Reducing Context Switching",
        "author": "LinkedIn",
        "url": "https://www.linkedin.com/pulse/improving-team-productivity-reducing-context-karen-casella/",
        "description": "Leadership and management insights on productivity",
        "category": "Leadership",
        "dateAdded": "2023-11-30",
        "status": "reading"
    },
    {
        "title": "Nomad Game Engine: Part 2 — ECS",
        "author": "Medium",
        "url": "https://medium.com/@savas/nomad-game-engine-part-2-ecs-9132829188e5",
        "description": "Game development tutorial on entity component systems",
        "category": "Game Development",
        "dateAdded": "2018-04-18",
        "status": "to-read"
    },
    {
        "title": "2D Liquid Simulator With Cellular Automaton in Unity",
        "author": "Jgallant",
        "url": "http://www.jgallant.com/2d-liquid-simulator-with-cellular-automaton-in-unity/",
        "description": "Game development tutorial on fluid simulation",
        "category": "Game Development",
        "dateAdded": "2023-02-26",
        "status": "completed"
    },
    {
        "title": "VisUAL - A highly visual ARM emulator",
        "author": "Salmanarif",
        "url": "https://salmanarif.bitbucket.io/visual/index.html",
        "description": "Programming article about ARM emulation",
        "category": "Programming",
        "dateAdded": "2020-12-20",
        "status": "reading"
    },
    {
        "title": "Snippets in Visual Studio Code",
        "author": "VSCode",
        "url": "https://code.visualstudio.com/docs/editor/userdefinedsnippets",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2021-03-14",
        "status": "to-read"
    },
    {
        "title": "Machine Learning Flashcards",
        "author": "Machinelearningflashcards",
        "url": "https://machinelearningflashcards.com/",
        "description": "Machine learning resource on fundamentals",
        "category": "Machine Learning",
        "dateAdded": "2020-03-22",
        "status": "completed"
    },
    {
        "title": "Lectures in Advanced Data Structures (6.851)",
        "author": "MIT",
        "url": "https://courses.csail.mit.edu/6.851/fall17/lectures/",
        "description": "Computer science fundamentals and algorithms",
        "category": "Computer Science",
        "dateAdded": "2020-03-22",
        "status": "reading"
    },
    {
        "title": "Floating Point Visually Explained",
        "author": "Fabiensanglard",
        "url": "http://fabiensanglard.net/floating_point_visually_explained/index.html",
        "description": "Programming article about floating point",
        "category": "Programming",
        "dateAdded": "2020-05-06",
        "status": "reading"
    },
    {
        "title": "s-macke/VoxelSpace",
        "author": "s-macke",
        "url": "https://github.com/s-macke/VoxelSpace",
        "description": "Game development tutorial on voxel rendering",
        "category": "Game Development",
        "dateAdded": "2020-02-20",
        "status": "to-read"
    },
    {
        "title": "Streamz Documentation",
        "author": "Streamz",
        "url": "https://streamz.readthedocs.io/en/latest/index.html#",
        "description": "Programming article about data streaming",
        "category": "Programming",
        "dateAdded": "2020-03-29",
        "status": "completed"
    },
    {
        "title": "laurent22/joplin",
        "author": "laurent22",
        "url": "https://github.com/laurent22/joplin",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2020-02-27",
        "status": "reading"
    },
    {
        "title": "WTF Python Quirks and Gotchas",
        "author": "Satwikkansal",
        "url": "https://github.com/satwikkansal/wtfpython/blob/master/README.md#-first-things-first-",
        "description": "Programming article about python quirks",
        "category": "Programming",
        "dateAdded": "2020-02-20",
        "status": "reading"
    },
    {
        "title": "thebjorn/pydeps",
        "author": "thebjorn",
        "url": "https://github.com/thebjorn/pydeps",
        "description": "Programming article about python dependencies",
        "category": "Programming",
        "dateAdded": "2018-04-11",
        "status": "to-read"
    },
    {
        "title": "Python Performance Tips",
        "author": "SDSU",
        "url": "https://gawron.sdsu.edu/compling/course_core/python_intro/intro_lecture_files/fastpython.html",
        "description": "Programming article about python optimization",
        "category": "Programming",
        "dateAdded": "2020-02-20",
        "status": "completed"
    },
    {
        "title": "gto76/python-cheatsheet",
        "author": "gto76",
        "url": "https://github.com/gto76/python-cheatsheet",
        "description": "Programming article about python reference",
        "category": "Programming",
        "dateAdded": "2020-03-15",
        "status": "reading"
    },
    {
        "title": "LessPass How Does It Work?",
        "author": "LessPass",
        "url": "https://blog.lesspass.com/lesspass-how-it-works-dde742dd18a4#.vbgschksh",
        "description": "Security and cybersecurity resource",
        "category": "Security",
        "dateAdded": "2020-03-15",
        "status": "reading"
    },
    {
        "title": "grocy - ERP beyond your fridge",
        "author": "Grocy",
        "url": "https://grocy.info/",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2020-03-22",
        "status": "to-read"
    },
    {
        "title": "Comprehensive Guide to build Recommendation Engine from scratch",
        "author": "Analytics Vidhya",
        "url": "https://www.analyticsvidhya.com/blog/2018/06/comprehensive-guide-recommendation-engine-python/",
        "description": "Machine learning resource on recommendation systems",
        "category": "Machine Learning",
        "dateAdded": "2020-02-20",
        "status": "completed"
    },
    {
        "title": "Time traveling with graph databases",
        "author": "ArangoDB",
        "url": "https://www.arangodb.com/2018/07/time-traveling-with-graph-databases/",
        "description": "Database and data engineering content",
        "category": "Data",
        "dateAdded": "2020-11-28",
        "status": "reading"
    },
    {
        "title": "Pixel Art Tutorial Collection",
        "author": "Imgur",
        "url": "https://imgur.com/gallery/fP8GMBS",
        "description": "Design and user experience resource",
        "category": "Design",
        "dateAdded": "2020-02-20",
        "status": "reading"
    },
    {
        "title": "Python & OpenGL for Scientific Visualization",
        "author": "Nicolas Rougier",
        "url": "https://www.labri.fr/perso/nrougier/python-opengl/#python-opengl-for-scientific-visualization",
        "description": "Computer graphics article about scientific visualization",
        "category": "Graphics",
        "dateAdded": "2020-02-20",
        "status": "to-read"
    },
    {
        "title": "Braid - Work Better Together",
        "author": "Braidchat",
        "url": "https://www.braidchat.com/",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2018-04-12",
        "status": "completed"
    },
    {
        "title": "National Park Typeface",
        "author": "Nationalparktypeface",
        "url": "https://nationalparktypeface.com/",
        "description": "Design and user experience resource",
        "category": "Design",
        "dateAdded": "2020-02-20",
        "status": "reading"
    },
    {
        "title": "Reverse engineering the rendering of The Witcher 3",
        "author": "Astralcode",
        "url": "https://astralcode.blogspot.com/2018/11/reverse-engineering-rendering-of.html",
        "description": "Computer graphics article about game rendering",
        "category": "Graphics",
        "dateAdded": "2020-02-28",
        "status": "reading"
    },
    {
        "title": "Operational Transformations for Automatic Conflict Resolution",
        "author": "Medium",
        "url": "https://medium.com/coinmonks/operational-transformations-as-an-algorithm-for-automatic-conflict-resolution-3bf8920ea447",
        "description": "Computer science fundamentals and algorithms",
        "category": "Computer Science",
        "dateAdded": "2022-08-12",
        "status": "to-read"
    },
    {
        "title": "Language Server Extension Guide",
        "author": "VSCode",
        "url": "https://code.visualstudio.com/api/language-extensions/language-server-extension-guide",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2021-03-14",
        "status": "completed"
    },
    {
        "title": "Archives - Bartosz Ciechanowski",
        "author": "Bartosz Ciechanowski",
        "url": "https://ciechanow.ski/archives/",
        "description": "Article about interactive explanations",
        "category": "General",
        "dateAdded": "2024-02-28",
        "status": "reading"
    },
    {
        "title": "SanderMertens/flecs",
        "author": "SanderMertens",
        "url": "https://github.com/SanderMertens/flecs",
        "description": "Game development tutorial on entity component systems",
        "category": "Game Development",
        "dateAdded": "2021-10-17",
        "status": "reading"
    },
    {
        "title": "OpenTelemetry",
        "author": "Opentelemetry",
        "url": "https://opentelemetry.io/",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2023-08-21",
        "status": "to-read"
    },
    {
        "title": "woltapp/blurhash",
        "author": "woltapp",
        "url": "https://github.com/woltapp/blurhash",
        "description": "Programming article about image processing",
        "category": "Programming",
        "dateAdded": "2020-02-20",
        "status": "completed"
    },
    {
        "title": "NeuroSkinning: Automatic Skin Binding with Deep Learning",
        "author": "Research Paper",
        "url": "http://www.youyizheng.net/docs/neuroskinning-final-opt.pdf",
        "description": "Machine learning resource on computer graphics",
        "category": "Machine Learning",
        "dateAdded": "2020-10-15",
        "status": "reading"
    },
    {
        "title": "AliceVision Meshroom - 3D Reconstruction Software",
        "author": "Alicevision",
        "url": "https://alicevision.org/#meshroom",
        "description": "Development tool or productivity resource",
        "category": "Tools",
        "dateAdded": "2020-05-10",
        "status": "reading"
    },
    {
        "title": "Nodes – a new way to create with code",
        "author": "Nodes",
        "url": "https://nodes.io/",
        "description": "Programming article about visual coding",
        "category": "Programming",
        "dateAdded": "2021-03-07",
        "status": "to-read"
    },
    {
        "title": "Three Techniques for Inverting Control, in Python",
        "author": "David Seddon",
        "url": "https://seddonym.me/2019/08/03/ioc-techniques/",
        "description": "Programming article about inversion of control",
        "category": "Programming",
        "dateAdded": "2020-02-20",
        "status": "completed"
    },
    {
        "title": "Orange Chicken Recipe",
        "author": "Gfycat",
        "url": "https://gfycat.com/happyorneryammonite-orange-chicken-a-s-cookbook-easy-recipe",
        "description": "Recipe and cooking guide",
        "category": "Cooking",
        "dateAdded": "2020-02-20",
        "status": "reading"
    },
    {
        "title": "How Morning Brew's referral program built 1.5M subscribers",
        "author": "Medium",
        "url": "https://medium.com/the-mission/how-morning-brews-referral-program-built-an-audience-of-1-5-million-subscribers-3315482c1aa5",
        "description": "Article about growth and marketing",
        "category": "General",
        "dateAdded": "2024-02-11",
        "status": "reading"
    },
    {
        "title": "Modern C++ Tutorial",
        "author": "Changkun",
        "url": "https://changkun.de/modern-cpp/pdf/modern-cpp-tutorial-en-us.pdf",
        "description": "Programming article about modern c++",
        "category": "Programming",
        "dateAdded": "2021-02-07",
        "status": "to-read"
    }
];