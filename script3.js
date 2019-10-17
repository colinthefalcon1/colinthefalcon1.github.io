const CHANNEL_ID = 'fmdU6Sbit5NwRD6Z';
const drone = new ScaleDrone(CHANNEL_ID, {
 data: { // Will be sent out as clientData via events
   name: getRandomName(),
   color: getRandomColor(),
 },
});

function getRandomName() {
 const adjs = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
 const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
 return (
   adjs[Math.floor(Math.random() * adjs.length)] +
   "_" +
   nouns[Math.floor(Math.random() * nouns.length)]
 );
}
 
function getRandomColor() {
 return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

drone.on('open', error => {
 if (error) {
   return console.error(error);
 }
 console.log('Successfully connected to Scaledrone');
 
 const room = drone.subscribe('observable-room');
 room.on('open', error => {
   if (error) {
     return console.error(error);
   }
   console.log('Successfully joined room');
 });
 
 // More events code to follow..
});

let members = [];

// Put this code into the drone.on('open') block
// right after the room 'open' listener
 
// List of currently online members, emitted once
room.on('members', m => {
 members = m;
 // updateMembersDOM(); uncomment later
});
 
// User joined the room
room.on('member_join', member => {
 members.push(member);
 // updateMembersDOM(); uncomment later
});
 
// User left the room
room.on('member_leave', ({id}) => {
 const index = members.findIndex(member => member.id === id);
 members.splice(index, 1);
 // updateMembersDOM(); uncomment later
});

// Add this after 'member_leave' event
room.on('data', (text, member) => {
 if (member) {
   // addMessageToListDOM(text, member); uncomment later
 } else {
   // Message is from server
 }
});
