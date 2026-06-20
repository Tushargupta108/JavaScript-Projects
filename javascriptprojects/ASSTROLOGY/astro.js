const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];
//   SIZE 31 HAR DIN EK HISAAB SE NAYA COMPLEMENT
  const compliments = [
    "Your energy attracts positivity wherever you go.",
    "You have a natural talent for making people feel comfortable.",
    "Your determination will help you achieve great things.",
    "You possess a rare combination of intelligence and kindness.",
    "Your smile has the power to brighten someone's day.",
    "You are destined to create meaningful opportunities for yourself.",
    "Your creativity sets you apart from the crowd.",
    "People admire your honesty and sincerity.",
    "You have a strong intuition that often guides you correctly.",
    "Your confidence inspires those around you.",
    "You have an amazing ability to adapt to challenges.",
    "Your presence brings calm and positivity to others.",
    "You are naturally gifted at solving problems.",
    "Your patience and persistence will lead to success.",
    "You have a heart full of compassion and generosity.",
    "You radiate a unique charm that people remember.",
    "Your optimistic attitude opens doors for new possibilities.",
    "You have the courage to turn your dreams into reality.",
    "Your sense of humor makes you enjoyable to be around.",
    "You are capable of achieving more than you realize.",
    "Your kindness often returns to you in unexpected ways.",
    "You have leadership qualities that people trust.",
    "Your enthusiasm motivates others to do their best.",
    "You have a remarkable ability to learn and grow.",
    "Your positive mindset attracts good experiences.",
    "You have an inner strength that helps you overcome obstacles.",
    "Your ideas have the potential to make a real difference.",
    "You naturally inspire confidence in others.",
    "Your dedication will bring rewarding opportunities.",
    "You have a magnetic personality that draws people toward you.",
    "The stars suggest that your future holds exciting possibilities."
  ];
//   SIZE 20
  const victimCardCompliments = [
    "You always give your best, even when no one notices your efforts.",
    "You have a habit of putting others before yourself.",
    "People often underestimate how much you quietly sacrifice.",
    "Your kindness is sometimes taken for granted.",
    "You carry burdens that others rarely understand.",
    "You keep helping people even after being disappointed.",
    "Your forgiving nature is one of your greatest strengths.",
    "You remain strong even when you feel unappreciated.",
    "You often support others while hiding your own struggles.",
    "Your caring heart deserves more recognition than it receives.",
    "You continue to spread positivity despite facing setbacks.",
    "You have a rare ability to stay kind in difficult situations.",
    "You often give more than you expect in return.",
    "Your patience shines even when circumstances are unfair.",
    "You keep believing in people, even after being hurt.",
    "You have an inner strength that others don't always see.",
    "You quietly endure challenges with remarkable grace.",
    "Your compassion makes you a source of comfort for others.",
    "You deserve appreciation for the effort you put into relationships.",
    "The stars suggest that your kindness will eventually be recognized."
  ];

//   SIZE 30
const vastuRecommendations = [
    "Today is a good day to declutter your room and remove unnecessary items.",
    "Keep your study or work desk clean to attract positive energy.",
    "Place a small green plant in your room to encourage growth and harmony.",
    "Open your windows for a while to allow fresh air and positive vibrations to enter.",
    "Light a diya or candle in the evening to create a peaceful atmosphere.",
    "Spend a few minutes organizing your surroundings to improve focus and clarity.",
    "Keep a bowl of fresh water in your room and replace it regularly.",
    "Avoid leaving broken or unused items lying around today.",
    "Add a touch of yellow to your surroundings to invite optimism and wisdom.",
    "Start your morning by facing the rising sun and expressing gratitude.",
    "Keep your sleeping area tidy to encourage restful energy.",
    "Spend some time in natural sunlight to refresh your mind and spirit.",
    "Place your books and study materials neatly to improve concentration.",
    "Use a pleasant fragrance or incense to create a calming environment.",
    "Take a moment to clean your workspace before starting important tasks.",
    "Avoid unnecessary arguments and focus on maintaining harmony today.",
    "Wear a color that makes you feel confident and positive.",
    "Keep your electronic devices organized and avoid digital clutter.",
    "Spend a few minutes in silence or meditation to balance your thoughts.",
    "Make your bed neatly in the morning to start the day with positive energy.",
    "Reconnect with nature by spending some time outdoors.",
    "Keep an inspirational quote or image near your workspace.",
    "Donate or share something useful with someone to invite positive karma.",
    "Listen to calming music to create a peaceful atmosphere around you.",
    "Avoid procrastination and complete at least one pending task today.",
    "Place a fresh flower in your room to bring freshness and positivity.",
    "Express appreciation to someone who has helped you recently.",
    "Take care of your personal belongings and keep them well organized.",
    "End your day by reflecting on three things you are grateful for.",
    "Focus on positive thoughts and let go of worries that no longer serve you."
  ];

  const astrologyPredictions = [
    "An unexpected opportunity may come your way today.",
    "A meaningful conversation could brighten your mood.",
    "You may receive appreciation for your efforts very soon.",
    "A small decision today might lead to a positive change later.",
    "Someone from your past may reconnect with you.",
    "Your confidence is likely to attract new opportunities.",
    "A pleasant surprise could make your day memorable.",
    "Today favors learning something new and exciting.",
    "You may find a simple solution to a problem that has been bothering you.",
    "A chance to showcase your talents could arise unexpectedly.",
    "Positive energy may encourage you to take an important step forward.",
    "A new friendship or connection may bring fresh perspectives.",
    "Your patience is likely to be rewarded in the near future.",
    "You may feel more motivated and productive than usual today.",
    "An exciting idea could inspire your next big goal.",
    "Good news related to your personal plans may be on the horizon.",
    "A moment of clarity could help you make an important decision.",
    "Your optimistic attitude may attract support from others.",
    "A hidden talent or strength may reveal itself today.",
    "The coming days may bring opportunities for growth and happiness."
  ];

 const form = document.getElementById("astroform");
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
    // fetch value jo  user side se name m dali jayengi
    const surname=document.getElementById('surname').value;
    const day=parseInt(document.getElementById('day').value);
    const month=parseInt(document.getElementById('month').value);
    const year=parseInt(document.getElementById('year').value);

    const text = `Hi ${name} ${surname}, YOUR ZODIAC SIGN IS: ${zodiacSigns[month - 1]}. ${compliments[(day - 1) % compliments.length]}. ${victimCardCompliments[year % victimCardCompliments.length]}. ${vastuRecommendations[(day * month) % vastuRecommendations.length]}. ${astrologyPredictions[(name.length * surname.length) % astrologyPredictions.length]}.`;

   //console.log(text);
    // month-1 bc 0 indexing
    document.getElementById('result').textContent = text;
    const result = document.getElementById('result');
    result.textContent = text;
    result.style.display = 'block';

 })
 