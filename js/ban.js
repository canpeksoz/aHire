const functions = require("firebase-functions");
const Filter = require("bad-words");

const admin = require("firebase-admin");
admin.initializeApp();

const firestoreDB = admin.firestore();

exports.banBadMouthers = functions.firestore
    var comment = document.getElementById('comment').value
   var reply = document.getElementById('reply').value
  .document("messages/{msgId}")
  .onCreate(async (doc, ctx) => {
    const filter = new Filter();
    const { text, uid } = doc.data;

    if (filter.isProfane(comment)) {
      const cleanedText = filter.clean(comment);
      doc.ref.update({
        comment: `I got a LIFETIME ban for saying ${cleanedText}`,
      });

      await firestoreDB.collection("banned").doc(uid).set({});
    }
  });