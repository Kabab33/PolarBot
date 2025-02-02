   //from the discord.js guide
   // Require the necessary discord.js classes
   // if it bugs check that you run it form the root or whereever the .env file is
   const { Client, Events, GatewayIntentBits } = require('discord.js');
   require('dotenv').config();

   // Get the token from the environment variables
   const token = process.env.token;

   // Create a new client instance
   const client = new Client({ intents: [GatewayIntentBits.Guilds] });

   // When the client is ready, run this code (only once).
   // The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
   // It makes some properties non-nullable.
   client.once(Events.ClientReady, readyClient => {
       console.log(`Ready! Logged in as ${readyClient.user.tag}`);
   });

   // Log in to Discord with your client's token
   client.login(token);