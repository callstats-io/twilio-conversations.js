'use strict';

function Conversations(accessManager, options) {
  return new Conversations.Client(accessManager, options);
}

Object.defineProperties(Conversations, {
  Client: {
    enumerable: true,
    value: require('./client')
  },
  getUserMedia: {
    enumerable: true,
    value: require('./webrtc/getusermedia')
  },
  LocalMedia: {
    enumerable: true,
    value: require('./media/localmedia')
  }
});

module.exports = Conversations;
