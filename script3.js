<<<<<<< HEAD
// 👇 PS! Replace this with your own channel ID 🚨
const CLIENT_ID = 'fmdU6Sbit5NwRD6Z';

// public room
const PUBLIC_ROOM_NAME = 'observable-room';
// array of connected memebers
let members = [];
// the session user
let me;
// keeping track of which room the user has selected
let selectedRoom = PUBLIC_ROOM_NAME;
// room name to messages map, this is used to store messages for displaying them
// at a later state
const roomMessages = {};

const drone = new Scaledrone(CLIENT_ID);

drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  // get JWT from the Go server for the clientID
  const formData = new FormData();
  formData.append('clientID', drone.clientId);
  fetch('/auth', {body: formData, method: 'POST'})
    .then(res => res.text())
    .then(jwt => drone.authenticate(jwt));
});

drone.on('authenticate', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');
  joinPublicRoom();
  joinPersonalRoom();
});

// Start subscribing to messages from the public room
function joinPublicRoom() {
  const publicRoom = drone.subscribe(PUBLIC_ROOM_NAME);
  publicRoom.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log(`Successfully joined room ${PUBLIC_ROOM_NAME}`);
  });

  // Received array of members currently connected to the public room
  publicRoom.on('members', m => {
    members = m;
    me = members.find(m => m.id === drone.clientId);
    DOM.updateMembers();
  });

  // New member joined the public room
  publicRoom.on('member_join', member => {
    members.push(member);
    DOM.updateMembers();
  });

  // Member left public room (closed browser tab)
  publicRoom.on('member_leave', ({id}) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    DOM.updateMembers();
  });

  // Received public message
  publicRoom.on('message', message => {
    const {data, member} = message;
    if (member && member !== me) {
      addMessageToRoomArray(PUBLIC_ROOM_NAME, member, data);
      if (selectedRoom === PUBLIC_ROOM_NAME) {
        DOM.addMessageToList(data, member);
      }
    }
  });
}

// Start subscribing to messages from my private room (PMs to me)
function joinPersonalRoom() {
  const roomName = createPrivateRoomName(drone.clientId);
  const myRoom = drone.subscribe(roomName);
  myRoom.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log(`Successfully joined room ${roomName}`);
  });

  myRoom.on('message', message => {
    const {data, clientId} = message;
    const member = members.find(m => m.id === clientId);
    if (member) {
      addMessageToRoomArray(createPrivateRoomName(member.id), member, data);
      if (selectedRoom === createPrivateRoomName(clientId)) {
        DOM.addMessageToList(data, member);
      }
    } else {
      /* Message is sent from golang using the REST API.
       * You can handle it like a regular message but it won't have a connection
       * session attached to it (this means no member argument)
       */
    }
  });
}

drone.on('close', event => {
  console.log('Connection was closed', event);
});

drone.on('error', error => {
  console.error(error);
});

function changeRoom(name, roomName) {
  selectedRoom = roomName;
  DOM.updateChatTitle(name);
  DOM.clearMessages();
  if (roomMessages[roomName]) {
    roomMessages[roomName].forEach(({data, member}) =>
      DOM.addMessageToList(data, member)
    );
  }
}

function createPrivateRoomName(clientId) {
  return `private-room-${clientId}`;
}

function addMessageToRoomArray(roomName, member, data) {
  console.log('add', roomName, member.id, data);
  roomMessages[roomName] = roomMessages[roomName] || [];
  roomMessages[roomName].push({member, data});
}

//------------- DOM Manipulation / Rendering the UI

const DOM = {
  elements: {
    me: document.querySelector('.me'),
    membersList: document.querySelector('.members-list'),
    messages: document.querySelector('.messages'),
    input: document.querySelector('.message-form__input'),
    form: document.querySelector('.message-form'),
    chatTitle: document.querySelector('.chat-title'),
    room: document.querySelector('.room'),
  },

  // Send message to Scaledrone and clear the input
  sendMessage() {
    const {input} = this.elements;
    const value = input.value;
    if (value === '') {
      return;
    }
    input.value = '';
    drone.publish({
      room: selectedRoom,
      message: value,
    });
    addMessageToRoomArray(selectedRoom, me, value);
    this.addMessageToList(value, me);
  },

  // Create DOM element with member name and color
  createMemberElement(member) {
    const { name, color } = member.authData;
    const el = document.createElement('div');
    el.appendChild(document.createTextNode(name));
    el.className = 'member';
    el.style.color = color;
    if (member !== me) {
      // Listen to user clicking on another user
      el.addEventListener('click', () =>
        changeRoom(member.authData.name, createPrivateRoomName(member.id))
      );
    }
    return el;
  },

  // Rerender the list of connected members
  updateMembers() {
    this.elements.me.innerHTML = '';
    this.elements.me.appendChild(this.createMemberElement(me));
    this.elements.membersList.innerHTML = '';
    members.filter(m => m !== me).forEach(member =>
      this.elements.membersList.appendChild(this.createMemberElement(member))
    );
  },

  // Create a DOM element for the message
  createMessageElement(text, member) {
    const el = document.createElement('div');
    el.appendChild(this.createMemberElement(member));
    el.appendChild(document.createTextNode(text));
    el.className = 'message';
    return el;
  },

  // Add message element to the messages container
  addMessageToList(text, member) {
    const el = this.elements.messages;
    const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
    el.appendChild(this.createMessageElement(text, member));
    if (wasTop) {
      el.scrollTop = el.scrollHeight - el.clientHeight;
    }
  },

  updateChatTitle(roomName) {
    this.elements.chatTitle.innerText = roomName;
  },

  clearMessages() {
    this.elements.messages.innerHTML = '';
  },
};
// Listen to submitting the input form
DOM.elements.form.addEventListener('submit', () =>
  DOM.sendMessage()
);
// Listen to user clicking on the public room label
DOM.elements.room.addEventListener('click', () =>
  changeRoom('Public room', PUBLIC_ROOM_NAME)
);
=======
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
>>>>>>> parent of 791b996... Update script3.js
