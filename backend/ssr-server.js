const express = require("express");  // Node framework
const next = require("next");  // For SSR
const cookieSession = require("cookie-session"); // To control user session
const passport = require("passport"); // For authentication

require("dotenv").config(); // For .env
require("./database");  // Database
require("./authentication/index"); // Passport Strategies

const port = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // ------------- Middlewares -------------
    // Cookie Session
    server.use(cookieSession({ // Configurated for only 1 day long
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_SECRET]
    }));

    // Passport
    server.use(passport.initialize());
    server.use(passport.session());

    // ------------- Routes -------------
    // User
    const userRoutes = require("./routes/user.routes");
    server.use("/", userRoutes(app)); // User related routes

    // Auth
    server.use("/auth", require("./routes/passport.routes"));  // Passport related routes

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on port: ${port}`);
      console.log(`> Dev environment: ${dev}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
