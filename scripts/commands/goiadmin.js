module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61556167296208") {
    var aid = ["61556167296208"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _সৌরভ বস এর মন ভালো নেই আস্কে-!💔🥀", "- আমার সৌরভ বস এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আবার আমার বস সৌরভ কে মেনসন দিলে আমি কিন্তু কিস করে দিবো💋","এত মেনশন না দিয়ে ইনক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","খবরদার এই নাম ধরে কেউ ডাক দিবেন না এটা আমার বস সৌরভ এর নাম😠⛏️","সৌরভ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মেনশন নাহ দিয়া সিংগেল সৌরভ  রে একটা জিএফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","কোনো সিঙ্গেল মেয়ে থাকলে বস সৌরভ এর ইনবক্সে চলে জাও এই নাও বস এর আইডি.https://www.facebook.com/share/1YiCis7V2v/","Mantion_দিস না বাঁলপাঁক্না সৌরভ প্রচুর বিজি 🥵🥀🤐","চ〘───── •『 𝗔𝘀𝘀𝗹𝗮𝗺𝘂𝗮𝗹𝗮𝗶𝗸𝘂𝗺』• ─────〙
   যে কোন প্রয়োজনে আমার বস সৌরভের সাথে কথা বলতে পারেন..!! 
https://www.facebook.com/profile.php?id=61556167296208
বোট অপারেট সৌরভ বোট..!!☺️🌼
〘───── •『 𝗧𝗵𝗻𝗸𝘀』• ─────〙🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
