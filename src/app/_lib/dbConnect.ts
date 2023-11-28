import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;


// #!/usr/bin/env node
// var debug = require("debug")("explorer");
// var settings = require("../lib/settings");
// var db = require("../lib/database");
// var app = require("../app");

// app.set("port", process.env.PORT || settings.port);

// var dbString = "mongodb://" + settings.dbsettings.user;
// dbString = dbString + ":" + settings.dbsettings.password;
// dbString = dbString + "@" + settings.dbsettings.address;
// dbString = dbString + ":" + settings.dbsettings.port;
// dbString = dbString + "/" + settings.dbsettings.database;

// db.connect(dbString, function () {
//   db.check_stats(settings.coin, function (exists) {
//     if (exists == false) {
//       console.log("no stats entry found, creating now..");
//       db.create_stats(settings.coin, function () {
//         //console.log('stats entry created successfully.');
//       });
//     } else {
//       db.get_stats(settings.coin, function (stats) {
//         app.locals.stats = stats;
//       });
//     }
//   });
//   // check markets
//   var markets = settings.markets.enabled;
//   for (var i = 0; i < markets.length; i++) {
//     db.check_market(markets[i], function (market, exists) {
//       if (exists == false) {
//         console.log("no %s entry found, creating now..", market);
//         db.create_market(
//           settings.markets.coin,
//           settings.markets.exchange,
//           market,
//           function () {}
//         );
//       }
//     });
//   }

//   db.check_richlist(settings.coin, function (exists) {
//     if (exists == false) {
//       console.log("no richlist entry found, creating now..");
//       db.create_richlist(settings.coin, function () {});
//     }
//   });
//   if (settings.heavy == true) {
//     db.check_heavy(settings.coin, function (exists) {
//       if (exists == false) {
//         console.log("no heavy entry found, creating now..");
//         db.create_heavy(settings.coin, function () {});
//       }
//     });
//   }

//   var server = app.listen(app.get("port"), "::", function () {
//     debug("Express server listening on port " + server.address().port);
//   });
// });
