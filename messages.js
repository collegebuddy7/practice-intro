// ============================================================
//  College Buddy – Introduction Messages
//  70 Hinglish + 30 English — All unique
//  Placeholders: {name}, {semester}, {college}
// ============================================================

const INTRO_MESSAGES = [
  {
    id: 1,
    title: "Hinglish – Simple Basics",
    text: "Namaste! Mera naam {name} hai. Main {college} se BCA kar raha/rahi hoon aur abhi {semester} semester mein hoon. Mujhe computers aur technology mein bahut interest hai. Apne sapno ko poora karne ke liye main roz mehnat karta/karti hoon."
  },
  {
    id: 2,
    title: "Hinglish – Coding Lover",
    text: "Hello everyone! Main {name} hoon, {college} ka/ki BCA student. Abhi main {semester} semester mein padhh raha/rahi hoon. Mujhe coding karna bahut pasand hai — jab ek program sahi se run karta hai toh jo khushi hoti hai, wo kaafi alag hoti hai!"
  },
  {
    id: 3,
    title: "Hinglish – Family & Goals",
    text: "Namaskar! Mera naam {name} hai. Main {college} mein BCA ke {semester} semester mein hoon. Main ek middle-class family se hoon aur mera sapna hai ki main ek din successful software engineer banoon aur apne maa-baap ka naam roshan karoon."
  },
  {
    id: 4,
    title: "Hinglish – Future Developer",
    text: "Hi! Main {name} hoon. {college} mein BCA {semester} semester ka/ki student hoon. Mera aim hai future mein ek full-stack developer banana. HTML, CSS aur JavaScript seekhna shuru kar diya hai aur practice roz karta/karti hoon."
  },
  {
    id: 5,
    title: "Hinglish – Team Player",
    text: "Good morning sabko! Mera naam {name} hai aur main {college} se BCA {semester} semester mein hoon. Main ek team player hoon — mujhe logon ke saath milke kaam karna bahut achha lagta hai. Group projects mein main hamesha active rehta/rehti hoon."
  },
  {
    id: 6,
    title: "Hinglish – Problem Solver",
    text: "Namaste dosto! {name} yahan se bol raha/rahi hoon. Main {college} mein BCA ka/ki {semester} semester student hoon. Mujhe problems solve karna bahut pasand hai — chahe wo math ki ho ya coding ki. Har mushkil mein ek solution zaroor hota hai!"
  },
  {
    id: 7,
    title: "Hinglish – Tech Curious",
    text: "Hello! Mera naam {name} hai. Main {college} se BCA kar raha/rahi hoon, {semester} semester mein hoon abhi. Naye technology trends ke baare mein padhna mujhe bahut exciting lagta hai. AI aur Machine Learning mujhe bahut fascinate karti hai."
  },
  {
    id: 8,
    title: "Hinglish – Hard Worker",
    text: "Namaskar! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Main bahut mehnati student hoon. Assignments time pe submit karna, classes regular attend karna — yeh meri aadat hai. Mehnat ka fal hamesha meetha hota hai."
  },
  {
    id: 9,
    title: "Hinglish – Creative Mind",
    text: "Hi everyone! {name} yahan se. Main {college} mein BCA {semester} semester padhh raha/rahi hoon. Mujhe creative kaam karna pasand hai — UI design aur graphics mein interest hai. Technology aur creativity ko milana hi mera passion hai."
  },
  {
    id: 10,
    title: "Hinglish – Sports & Study",
    text: "Hello! Mera naam {name} hai aur main {college} ka/ki BCA {semester} semester student hoon. Padhhai ke saath-saath mujhe cricket aur badminton bhi bahut pasand hai. Ek balanced life jeena — yahi mera mantra hai!"
  },
  {
    id: 11,
    title: "Hinglish – Discipline Focus",
    text: "Namaste! Main {name} hoon. {college} se BCA {semester} semester kar raha/rahi hoon. Mera believe hai ki discipline hi success ki sabse badi chaabi hai. Main roz ek fixed routine follow karta/karti hoon — padhna, practice karna aur reflect karna."
  },
  {
    id: 12,
    title: "Hinglish – Curious Learner",
    text: "Good day! Mera naam {name} hai. Main {college} mein BCA ke {semester} semester mein hoon. Mujhe naya seekhna bahut pasand hai — online courses, YouTube tutorials, documentation — main sab jagah se seekhta/seekhti hoon. Curiosity meri sabse badi strength hai."
  },
  {
    id: 13,
    title: "Hinglish – Proud Student",
    text: "Hello sabko! Main {name} hoon, {college} ka/ki BCA student, {semester} semester mein padhh raha/rahi hoon. Is college mein padhna mera privilege hai aur main is opportunity ko full use karna chahta/chahti hoon. Har din kuch naya seekhne ka mauka hai."
  },
  {
    id: 14,
    title: "Hinglish – Startup Dreams",
    text: "Namaste! Mera naam {name} hai aur main {college} mein BCA {semester} semester ka/ki student hoon. Mera bada sapna hai ki ek din apna khud ka tech startup shuru karoon. Coding seekhna us sapne ki taraf pehla kadam hai."
  },
  {
    id: 15,
    title: "Hinglish – Helping Nature",
    text: "Hi friends! Main {name} hoon — {college} mein BCA {semester} semester. Mujhe logon ki help karna bahut achha lagta hai, especially juniors ko padhana. Jab koi concept explain karta/karti hoon toh mujhe khud bhi zyada clearly samajh aata hai."
  },
  {
    id: 16,
    title: "Hinglish – Consistent Growth",
    text: "Namaskar! Mera naam {name} hai. {college} se BCA {semester} semester kar raha/rahi hoon. Main believe karta/karti hoon ki har roz thoda-thoda improve karna hi asli progress hai. 1% better roz — yahi meri strategy hai."
  },
  {
    id: 17,
    title: "Hinglish – Music & Coding",
    text: "Hello! {name} yahan se bol raha/rahi hoon. Main {college} mein BCA {semester} semester ka/ki student hoon. Coding karte waqt music sunna mujhe bahut concentrate karne mein help karta hai. Technology aur music — yahi meri duniya hai!"
  },
  {
    id: 18,
    title: "Hinglish – Data Enthusiast",
    text: "Good morning! Mera naam {name} hai aur main {college} mein BCA ke {semester} semester mein padhh raha/rahi hoon. Mujhe data se patterns dhundhna bahut fascinating lagta hai. Data Science mera future goal area hai aur iske liye main ab se prepare kar raha/rahi hoon."
  },
  {
    id: 19,
    title: "Hinglish – Positive Attitude",
    text: "Namaste! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Mera attitude hamesha positive rehta hai — problems mein bhi opportunities dhundhna meri aadat hai. Is class ke saath kuch naya seekhna mujhe bahut excited karta/karti hai."
  },
  {
    id: 20,
    title: "Hinglish – Web Dev Passion",
    text: "Hi everyone! Mera naam {name} hai. {college} mein BCA {semester} semester padhh raha/rahi hoon. Web development mein meri khaas dilchaspi hai — responsive websites banana, beautiful UI design karna — yeh sab mujhe bahut enjoy aata hai."
  },
  {
    id: 21,
    title: "Hinglish – Grateful Student",
    text: "Namaskar! Main {name} hoon. Main {college} mein BCA {semester} semester ka/ki student hoon. Main apne teachers aur parents ka bahut shukarguzaar hoon jinki wajah se aaj main yahan tak pahuncha/pahunchi hoon. Unka sapna poora karna mera lakshya hai."
  },
  {
    id: 22,
    title: "Hinglish – Night Coder",
    text: "Hello! {name} yahan se. {college} mein BCA {semester} semester kar raha/rahi hoon. Main thoda night owl hoon — raat ko jab sab so jaate hain, tab mujhe coding karna sabse zyada focus wala time lagta hai. Code likhna mujhe relaxation deta hai."
  },
  {
    id: 23,
    title: "Hinglish – Leadership",
    text: "Good day sabko! Mera naam {name} hai aur main {college} se BCA {semester} semester mein hoon. Mujhe leadership mein interest hai — group mein lead karna, decisions lena, sabko saath lekar chalna. Technical skills ke saath leadership skills bhi zaroor develop karni chahiye."
  },
  {
    id: 24,
    title: "Hinglish – App Developer Dream",
    text: "Namaste! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Mera ek clear goal hai: ek useful Android app banana jo real mein logon ki life easy kare. Yeh dream hi mujhe roz motivated rakhta hai."
  },
  {
    id: 25,
    title: "Hinglish – Bookworm Coder",
    text: "Hi! Mera naam {name} hai. {college} mein BCA {semester} semester padhh raha/rahi hoon. Padhne ki aadat mujhe bahut help karti hai — textbooks ke alawa tech blogs, documentation aur case studies bhi regularly padhta/padhti hoon."
  },
  {
    id: 26,
    title: "Hinglish – Cybersecurity Interest",
    text: "Hello! Main {name} hoon — {college} mein BCA {semester} semester. Mujhe cybersecurity field bahut interesting lagti hai. Ethical hacking aur network security ke baare mein seekhna mera passion hai. Technology ko secure rakhna aaj ki sabse badi zaroorat hai."
  },
  {
    id: 27,
    title: "Hinglish – Early Riser",
    text: "Namaskar! Mera naam {name} hai. {college} se BCA {semester} semester kar raha/rahi hoon. Main morning person hoon — subah jaldi uthke study karna meri routine hai. Fresh mind mein jo concepts samajh aate hain, wo bahut gehre hote hain."
  },
  {
    id: 28,
    title: "Hinglish – Competitive Exams",
    text: "Good morning! Main {name} hoon — {college} ka/ki BCA {semester} semester student. BCA ke saath-saath main competitive exams ki bhi taiyari kar raha/rahi hoon. Time management hi meri sabse badi challenge aur sabse badi achievement dono hai."
  },
  {
    id: 29,
    title: "Hinglish – Village to City",
    text: "Namaste! Mera naam {name} hai. Main {college} mein BCA {semester} semester mein hoon. Main gaon se aaya/aayi hoon aur is sheher mein padhna mera sapna tha. Ab jo mauka mila hai, use main poori mehnat ke saath use karna chahta/chahti hoon."
  },
  {
    id: 30,
    title: "Hinglish – Algorithm Lover",
    text: "Hello sabko! {name} yahan se. {college} mein BCA {semester} semester. Algorithms aur data structures mujhe bahut fascinating lagte hain — ek chhoti-si logic kitni badi problem solve kar sakti hai, yeh sochke mujhe bahut maja aata hai."
  },
  {
    id: 31,
    title: "Hinglish – First Generation",
    text: "Namaskar! Mera naam {name} hai. Main {college} se BCA {semester} semester kar raha/rahi hoon. Mere ghar mein main pehla/pehli hoon jo college mein padhh raha/rahi hoon. Yeh mujhe aur bhi responsible feel karata hai — mujhe ek achha example banna hai."
  },
  {
    id: 32,
    title: "Hinglish – Fitness & Focus",
    text: "Hello! Main {name} hoon — {college} mein BCA {semester} semester. Mera belief hai ki healthy body mein hi healthy mind rehta hai. Main roz exercise karta/karti hoon kyunki physical fitness mujhe mental focus deti hai — aur focus hi success ki key hai."
  },
  {
    id: 33,
    title: "Hinglish – Project Builder",
    text: "Hi friends! Mera naam {name} hai. {college} mein BCA {semester} semester padhh raha/rahi hoon. Sirf theory padhne se zyada mujhe projects banana pasand hai — real projects se jo seekhte hain, wo koi textbook nahi sikha sakti."
  },
  {
    id: 34,
    title: "Hinglish – Soft Skills Focus",
    text: "Good day! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Technical knowledge ke saath-saath mujhe communication aur personality development mein bhi bahut interest hai. Yeh platform mujhe apni spoken skills improve karne mein bahut help karega."
  },
  {
    id: 35,
    title: "Hinglish – Open Source",
    text: "Namaste! Mera naam {name} hai aur main {college} mein BCA {semester} semester ka/ki student hoon. Open source projects mein contribute karna mera next goal hai. GitHub pe apna portfolio banana shuru kar diya hai — abhi chhota hai, par grow karega!"
  },
  {
    id: 36,
    title: "Hinglish – Logical Thinking",
    text: "Hello! {name} yahan se bol raha/rahi hoon. {college} mein BCA {semester} semester. Mujhe logical thinking bahut pasand hai — kisi bhi cheez ko systematically sochna, break down karna aur solve karna. Yeh ek skill hai jo sab jagah kaam aati hai."
  },
  {
    id: 37,
    title: "Hinglish – Networking Goals",
    text: "Namaskar! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Mujhe pata hai ki sirf marks se career nahi banta — sahi log jaanna bhi zaroor hai. Is liye main har seminar, event aur workshop mein participate karta/karti hoon."
  },
  {
    id: 38,
    title: "Hinglish – Photography Hobby",
    text: "Hello sabko! Mera naam {name} hai. {college} mein BCA {semester} semester. Coding ke alawa mujhe photography bhi bahut pasand hai. Duniya ko camera ki nazar se dekhna ek alag hi perspective deta hai — bilkul waise jaise coding ek naya way of thinking deti hai."
  },
  {
    id: 39,
    title: "Hinglish – Java Enthusiast",
    text: "Good morning! Main {name} hoon — {college} mein BCA {semester} semester. Mujhe Java programming bahut pasand hai. Object-oriented concepts ko practically samajhna bahut exciting lagta hai. Ek din enterprise-level Java developer banna chahta/chahti hoon."
  },
  {
    id: 40,
    title: "Hinglish – Database Interest",
    text: "Namaste! Mera naam {name} hai. {college} se BCA {semester} semester kar raha/rahi hoon. Mujhe databases bahut interesting lagte hain — SQL queries likhna, data organize karna. Information ko efficiently store karna aur retrieve karna — yeh ek art hai mere liye."
  },
  {
    id: 41,
    title: "Hinglish – YouTube Learner",
    text: "Hello! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Main zyaadatar YouTube se seekhta/seekhti hoon — aaj kal itne achhe content creators hain jo free mein best knowledge dete hain. Self-learning mein mujhe bahut mazaa aata hai."
  },
  {
    id: 42,
    title: "Hinglish – Smart Goals",
    text: "Hi everyone! Mera naam {name} hai. {college} mein BCA {semester} semester padhh raha/rahi hoon. Main SMART goals set karta/karti hoon — Specific, Measurable, Achievable, Relevant aur Time-bound. Planning ke baad execution pe focus karna — yahi meri strategy hai."
  },
  {
    id: 43,
    title: "Hinglish – Cloud Computing",
    text: "Namaskar! {name} yahan se. {college} mein BCA {semester} semester. Cloud computing ka future bahut bright hai — AWS, Azure aur Google Cloud ke baare mein seekhna mera goal hai. Digital world mein cloud hi asli backbone hai."
  },
  {
    id: 44,
    title: "Hinglish – Reading Books",
    text: "Hello! Mera naam {name} hai aur main {college} mein BCA {semester} semester ka/ki student hoon. Mujhe tech books padhna pasand hai — Clean Code, The Pragmatic Programmer jaise books ne mujhe sochne ka ek naya tarika diya hai."
  },
  {
    id: 45,
    title: "Hinglish – Freelancing Goal",
    text: "Good day! Main {name} hoon — {college} se BCA {semester} semester. Mera ek side goal hai: college khatam hone se pehle freelancing shuru karna. Clients ke liye real projects karna — yeh experience kisi bhi internship se zyada valuable hoga mere liye."
  },
  {
    id: 46,
    title: "Hinglish – Revision Habit",
    text: "Namaste! Mera naam {name} hai. {college} mein BCA {semester} semester. Meri ek achhi aadat hai — roz jo seekha usse revise karna. Sirf padhna kaafi nahi hota, revision se hi cheezein yaad rehti hain. Spaced repetition meri favourite technique hai."
  },
  {
    id: 47,
    title: "Hinglish – Linux User",
    text: "Hello sabko! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Main Linux use karta/karti hoon aur terminal commands mujhe bahut cool lagte hain. Operating systems ko deeply samajhna ek real programmer ki pehchaan hai."
  },
  {
    id: 48,
    title: "Hinglish – Interview Prep",
    text: "Hi! Mera naam {name} hai. {college} mein BCA {semester} semester padhh raha/rahi hoon. Main abhi se hi interview preparation shuru kar diya hai — DSA, aptitude, verbal reasoning. Placement ke time bilkul ready rehna chahta/chahti hoon."
  },
  {
    id: 49,
    title: "Hinglish – Art of Explaining",
    text: "Namaskar! {name} yahan se bol raha/rahi hoon. {college} mein BCA {semester} semester. Mujhe difficult concepts ko simple words mein samjhana bahut pasand hai. Accha communicator hona ek developer ke liye equally important hai jitna ki coding."
  },
  {
    id: 50,
    title: "Hinglish – Never Give Up",
    text: "Good morning! Mera naam {name} hai aur main {college} se BCA {semester} semester kar raha/rahi hoon. Mere life mein bahut challenges aaye, par maine kabhi haar nahi maani. Har failure ek lesson hai aur har lesson ek stepping stone. Yahi meri philosophy hai."
  },
  {
    id: 51,
    title: "Hinglish – React Learner",
    text: "Hello! Main {name} hoon — {college} mein BCA {semester} semester. Main React.js seekh raha/rahi hoon aur modern frontend development mujhe bahut exciting lagti hai. Components, state management — yeh sab samajhna ek naya hi level of thinking hai."
  },
  {
    id: 52,
    title: "Hinglish – AI Fascination",
    text: "Namaste! Mera naam {name} hai. {college} ka/ki BCA {semester} semester student hoon. Artificial Intelligence ne duniya ko badal diya hai. Main Python seekh raha/rahi hoon kyunki AI aur ML ke liye yeh sabse powerful tool hai aur mujhe is field mein jaana hai."
  },
  {
    id: 53,
    title: "Hinglish – Mentor Seeker",
    text: "Hi everyone! {name} yahan se. {college} mein BCA {semester} semester. Mujhe lagta hai ki ek achhe mentor ke bina growth slow hoti hai. Is liye main hamesha experienced logon se guidance lete rehne mein believe karta/karti hoon."
  },
  {
    id: 54,
    title: "Hinglish – Patience & Code",
    text: "Hello! Mera naam {name} hai aur main {college} se BCA {semester} semester kar raha/rahi hoon. Coding ne mujhe ek cheez bahut achhe se sikhaayi hai — patience. Jab ek bug 4 ghante baad fix hota hai, toh jo satisfaction milta hai — wo priceless hai!"
  },
  {
    id: 55,
    title: "Hinglish – Internship Ready",
    text: "Namaskar! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Main apne aap ko internship ke liye ready kar raha/rahi hoon — resume banaya, portfolio update kar raha/rahi hoon. Industry experience lena mera short-term priority goal hai."
  },
  {
    id: 56,
    title: "Hinglish – Passionate Teacher",
    text: "Good day! Mera naam {name} hai. {college} mein BCA {semester} semester. Ek din main bhi ek passionate coding teacher banana chahta/chahti hoon jo students ko sirf marks ke liye nahi, balki genuinely seekhne ke liye inspire kare."
  },
  {
    id: 57,
    title: "Hinglish – Version Control",
    text: "Hello sabko! Main {name} hoon — {college} mein BCA {semester} semester. Git aur GitHub use karna seekh liya hai — version control ek developer ki duniya mein sabse important tool hai. Roz ek commit toh hona hi chahiye!"
  },
  {
    id: 58,
    title: "Hinglish – Budget Learner",
    text: "Namaste! Mera naam {name} hai aur main {college} se BCA {semester} semester kar raha/rahi hoon. Mere paas costly resources nahi hain par internet aur free tools se main apna best kar raha/rahi hoon. Resources ki kami kabhi passion ki kami nahi honi chahiye."
  },
  {
    id: 59,
    title: "Hinglish – My Story",
    text: "Hi! {name} yahan se bol raha/rahi hoon. {college} mein BCA {semester} semester. Mujhe lagta hai ki har programmer ek storyteller hota hai — jo apni code ke through ek problem ka solution bayan karta hai. Meri bhi yeh kahani abhi shuru ho rahi hai."
  },
  {
    id: 60,
    title: "Hinglish – Weekend Coder",
    text: "Hello! Mera naam {name} hai — {college} ka/ki BCA {semester} semester student. Weekends mein jab dost bahar ghoomne jaate hain, main side projects pe kaam karta/karti hoon. Yeh habit mujhe baaki se ek kadam aage rakhti hai."
  },
  {
    id: 61,
    title: "Hinglish – Structured Thinker",
    text: "Namaskar! Main {name} hoon. {college} mein BCA {semester} semester. Mujhe cheezein structured way mein sochna pasand hai — pehle problem samjho, phir plan banao, phir execute karo. Yeh approach sirf coding mein nahi, life mein bhi kaam aata hai."
  },
  {
    id: 62,
    title: "Hinglish – Detail Oriented",
    text: "Good morning! Mera naam {name} hai aur main {college} se BCA {semester} semester kar raha/rahi hoon. Mujhe details pe dhyaan dena bahut pasand hai — code ho ya presentation, ek chhoti-si galti bhi puri cheez kharab kar sakti hai. Perfection ki koshish hamesha rehti hai."
  },
  {
    id: 63,
    title: "Hinglish – Community Builder",
    text: "Hi friends! {name} yahan se. {college} mein BCA {semester} semester. Mujhe tech communities bahut pasand hain — jahan log ek-doosre ki help karte hain, knowledge share karte hain. Ek achhi community mein hona growth ko exponentially badha deta hai."
  },
  {
    id: 64,
    title: "Hinglish – Exam Topper",
    text: "Hello! Mera naam {name} hai — {college} ka/ki BCA {semester} semester student. Main hamare class mein achhe marks lane ke liye koshish karta/karti hoon. Exam mein achha karna important hai, par real understanding se zyada valuable kuch nahi."
  },
  {
    id: 65,
    title: "Hinglish – IoT Dreams",
    text: "Namaskar! Main {name} hoon. {college} mein BCA {semester} semester. Internet of Things mujhe bahut fascinate karta hai — smart homes, wearables, connected devices. Ek din ek aise gadget banana chahta/chahti hoon jo logon ki daily life ko genuinely easier banaye."
  },
  {
    id: 66,
    title: "Hinglish – Resilient Spirit",
    text: "Good day! Mera naam {name} hai aur main {college} se BCA {semester} semester kar raha/rahi hoon. Life mein kai baar plan nahi kaam karta — par main believe karta/karti hoon ki resilience hi sabse badi quality hai. Haar maan lena mere liye option nahi hai."
  },
  {
    id: 67,
    title: "Hinglish – Batch Topper Dream",
    text: "Hello sabko! Main {name} hoon — {college} ka/ki BCA {semester} semester student. Mera ek clear target hai — is batch ka best student banana. Competition se nahi, apne aap se — roz kal se behtar hona. Yahi meri race hai."
  },
  {
    id: 68,
    title: "Hinglish – Gaming to Coding",
    text: "Namaste! Mera naam {name} hai. {college} mein BCA {semester} semester. Pehle sirf games khelne ka shauk tha — phir socha ki main khud bhi game bana sakta/sakti hoon. Usi curiosity ne mujhe BCA choose karne pe majboor kiya. Abhi game dev seekh raha/rahi hoon!"
  },
  {
    id: 69,
    title: "Hinglish – Bold & Clear",
    text: "Hello! {name} yahan se bol raha/rahi hoon. Main {college} mein BCA {semester} semester padhh raha/rahi hoon. Main clearly aur confidently communicate karna seekh raha/rahi hoon — kyunki ek developer ko sirf code nahi, apni ideas bhi clearly express karne aani chahiye."
  },
  {
    id: 70,
    title: "Hinglish – Big Picture",
    text: "Namaskar! Mera naam {name} hai aur main {college} se BCA {semester} semester kar raha/rahi hoon. Main sirf ek degree nahi le raha/rahi — main ek foundation bana raha/rahi hoon. Yeh {semester} semester us foundation ka ek important pillar hai. Aage bahut kuch karna hai!"
  },

  // ── 30 ENGLISH INTRODUCTIONS ────────────────────────────────

  {
    id: 71,
    title: "English – Classic Formal",
    text: "Good morning! My name is {name} and I am a BCA student at {college}, currently in my {semester} semester. I have a keen interest in software development and I am committed to building a strong technical foundation. I am excited to be part of this learning journey."
  },
  {
    id: 72,
    title: "English – Confident & Clear",
    text: "Hello everyone! I am {name}, pursuing BCA from {college}. I am currently in {semester} semester. I am a focused and self-motivated individual who believes that consistent effort leads to extraordinary outcomes. I look forward to contributing positively to this group."
  },
  {
    id: 73,
    title: "English – Tech Passion",
    text: "Good day! My name is {name}. I am a {semester} semester BCA student at {college}. Technology fascinates me deeply — from writing my first line of code to understanding how systems work at scale. Every day I discover something new, and that keeps me driven."
  },
  {
    id: 74,
    title: "English – Goal Oriented",
    text: "Hi everyone! I am {name} from {college}, BCA {semester} semester. I am a goal-oriented person who believes in planning and execution. My immediate goal is to master core programming concepts, and my long-term goal is to become a software architect."
  },
  {
    id: 75,
    title: "English – Interview Ready",
    text: "Good morning! My name is {name}, and I study BCA at {college}, currently in {semester} semester. I have been actively preparing for campus placements by practising data structures, problem-solving, and communication. Preparation today leads to opportunity tomorrow."
  },
  {
    id: 76,
    title: "English – Web Developer",
    text: "Hello! I am {name}, a {semester} semester BCA student at {college}. I have a deep passion for web development. I enjoy crafting clean, responsive interfaces and learning about modern frameworks. Building useful things for real people is what drives me every single day."
  },
  {
    id: 77,
    title: "English – AI Enthusiast",
    text: "Good day! My name is {name}. I am studying BCA at {college} in my {semester} semester. Artificial intelligence and machine learning genuinely excite me. I believe we are living in the most transformative era of technology, and I want to be part of shaping it."
  },
  {
    id: 78,
    title: "English – Natural Problem Solver",
    text: "Hi everyone! I am {name} from {college}, currently in {semester} semester of BCA. I am a natural problem solver — give me a challenge and I will find a way through it. Programming is not just a skill for me, it is a way of thinking about the world."
  },
  {
    id: 79,
    title: "English – Team Leader",
    text: "Good morning! My name is {name}, pursuing BCA at {college} in {semester} semester. I am a strong team player who also enjoys taking initiative. Great software is built by great teams, and I always strive to contribute, collaborate, and communicate effectively."
  },
  {
    id: 80,
    title: "English – Lifelong Learner",
    text: "Hello! I am {name}, a BCA student at {college} in my {semester} semester. I firmly believe that learning never stops. Beyond coursework, I regularly explore online resources, attend webinars, and work on personal projects to stay ahead in this fast-changing industry."
  },
  {
    id: 81,
    title: "English – Database Expert",
    text: "Good day! My name is {name} and I am currently in {semester} semester at {college}, pursuing BCA. I have a strong interest in database management and backend systems. Structuring data efficiently and writing optimised queries is something I genuinely enjoy."
  },
  {
    id: 82,
    title: "English – Startup Vision",
    text: "Hi! I am {name} from {college}, BCA {semester} semester. My vision is to launch a tech startup that solves a real-world problem. Every skill I am learning today — coding, system design, communication — is a building block towards that entrepreneurial goal."
  },
  {
    id: 83,
    title: "English – First Principles Thinker",
    text: "Good morning! My name is {name}. I study BCA at {college} and I am in my {semester} semester. I believe in understanding things from first principles rather than memorising surface-level answers. When I understand the why behind something, I never forget the how."
  },
  {
    id: 84,
    title: "English – Open Source Contributor",
    text: "Hello everyone! I am {name}, a {semester} semester BCA student at {college}. I am passionate about open source software. Contributing to the global developer community, learning from real codebases, and giving back are values that deeply shape how I approach my education."
  },
  {
    id: 85,
    title: "English – Communication First",
    text: "Good day! My name is {name} and I am pursuing BCA from {college} in my {semester} semester. I believe the ability to communicate clearly is as important as technical expertise. I am continuously working on both — and this practice platform is a perfect example of that effort."
  },
  {
    id: 86,
    title: "English – Cybersecurity",
    text: "Hi! I am {name} from {college}, currently in {semester} semester of BCA. Cybersecurity is a domain I find incredibly important and exciting. In a world becoming increasingly digital, protecting data and systems is a responsibility I take very seriously."
  },
  {
    id: 87,
    title: "English – Creative Developer",
    text: "Hello! My name is {name}, a BCA student at {college} in {semester} semester. I sit at the intersection of creativity and technology. I love when a beautifully designed interface meets clean, efficient code beneath it. That balance between art and logic is where I thrive."
  },
  {
    id: 88,
    title: "English – Data Science Path",
    text: "Good morning! I am {name}, studying BCA at {college} in my {semester} semester. I am drawn towards data science and analytics. The ability to extract meaningful insights from raw data and use them to make smarter decisions is one of the most powerful skills in the modern world."
  },
  {
    id: 89,
    title: "English – Resilient Achiever",
    text: "Good day! My name is {name} from {college}, BCA {semester} semester. My journey has not always been smooth, but every setback has made me more determined. I do not give up — I pause, reflect, recalibrate, and come back stronger each time."
  },
  {
    id: 90,
    title: "English – Networking & Cloud",
    text: "Hello everyone! I am {name}, a {semester} semester BCA student at {college}. Computer networks and cloud computing are areas I am actively exploring. Understanding how information travels across the internet and how cloud platforms scale is something I find deeply fascinating."
  },
  {
    id: 91,
    title: "English – Mobile App Developer",
    text: "Hi! My name is {name} and I am pursuing BCA at {college} in {semester} semester. I dream of building mobile applications that millions of people use daily. Every app idea I have, I try to sketch out, prototype, and eventually code. My best app is still ahead of me."
  },
  {
    id: 92,
    title: "English – Academic Excellence",
    text: "Good morning! I am {name} from {college}, currently in {semester} semester of BCA. I take academics seriously because a strong theoretical foundation makes practical implementation much easier. I balance studies with hands-on projects to get the best of both worlds."
  },
  {
    id: 93,
    title: "English – Empathetic Coder",
    text: "Good day! My name is {name}, a BCA student at {college} in {semester} semester. I believe the best software is built with empathy — understanding the user's pain point before writing a single line of code. Technology should solve real human problems, not create new ones."
  },
  {
    id: 94,
    title: "English – Research Oriented",
    text: "Hello! I am {name} from {college}, BCA {semester} semester. I have a strong interest in computer science research. Reading academic papers, exploring new algorithms, and understanding the cutting edge of the field is something I genuinely enjoy in my free time."
  },
  {
    id: 95,
    title: "English – Game Development",
    text: "Hi everyone! My name is {name}, studying BCA at {college} in {semester} semester. Game development is my biggest passion. Combining logic, creativity, physics, and storytelling into an interactive experience is, in my opinion, the most exciting form of programming there is."
  },
  {
    id: 96,
    title: "English – DevOps Curious",
    text: "Good morning! I am {name}, a {semester} semester BCA student at {college}. I am very curious about DevOps practices — CI/CD pipelines, containerisation with Docker, and deployment automation. Bridging the gap between development and operations is a career path I intend to follow."
  },
  {
    id: 97,
    title: "English – Teaching Aspiration",
    text: "Good day! My name is {name} from {college}, currently in {semester} semester of BCA. One of my long-term aspirations is to become an educator in computer science. A great teacher can inspire hundreds of students — that kind of lasting impact is what I truly want to make."
  },
  {
    id: 98,
    title: "English – Disciplined & Focused",
    text: "Hello! I am {name}, pursuing BCA at {college} in {semester} semester. Discipline is the cornerstone of everything I do. I maintain a structured daily schedule, set weekly targets, and review my progress regularly. Small consistent actions, done daily, create extraordinary results."
  },
  {
    id: 99,
    title: "English – Grateful & Driven",
    text: "Hi! My name is {name} and I study BCA at {college}, currently in {semester} semester. I am deeply grateful for the opportunity to pursue higher education and I do not take it for granted. Every class, every project, and every challenge is a gift that I intend to use to its fullest."
  },
  {
    id: 100,
    title: "English – Ready for the World",
    text: "Good morning everyone! I am {name}, a BCA {semester} semester student from {college}. I stand here today not just as a student, but as someone genuinely preparing to make a difference through technology. My journey is just beginning — and I could not be more ready for what lies ahead."
  }
];