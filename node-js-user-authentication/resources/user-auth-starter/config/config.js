const CONFIGURATION = {
  "development": {
    "dialect": "postgres",
    "username": "nycdathree",
    "password": "",
    "database": "development",
    "jwtSecret": "MySuperDuperSecret",
    "jwtExpiration": 60*5 // 5 Minutes
  }
};

const env = process.env.NODE_ENV || "development";

module.exports = CONFIGURATION[env]

