const PouchDB = require('pouchdb-browser');
const pouchDB = PouchDB.default.defaults();
const localDB = new pouchDB('localDB');

export function localInfo() {
  localDB.info().then(function (info) {
    console.log('localDB info: ', info);
  });
}

export function localAddDoc(doc) {
  localDB.put(doc, function callback(err, result) {
    if (result) {
      console.log('localDB - Add result: ', result);
    }
    if (err) {
      console.log('localDB - Add err: ', err);
    }
    if (!err) {
      console.log('localDB - Add Successfully');
    }
  });
}

export function localShowDocs() {
  localDB.allDocs({ include_docs: true }, function (err, doc) {
    console.log('localDB - Show doc: ', doc);
    console.log('localDB - Show doc.rows: ', doc.rows);
    const items = doc.rows;
    if (items) {
      items.forEach((item) => {
        console.log('localDB - Show item: ', item);
        console.log('localDB - Show item.doc.farm: ', item.doc.farm);
      });
    }
  });
}

export function localUpdateDoc(doc) {
  localDB.put(doc);
}

export function localDeleteDoc(doc) {
  localDB.remove(doc);
}
