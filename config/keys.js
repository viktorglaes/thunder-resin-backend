require("dotenv").config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const db_name = process.env.DB_NAME;
const secret = process.env.SECRET;

if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: process.env.MONGI_URI,
    secret: `${secret}`,
  };
} else {
  module.exports = {
    mongoURI: `mongodb+srv://${username}:${password}@${cluster}.vj7ai.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    secret: `${secret}`,
  };
}
