import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { storage } from "./storage";
import type { User } from "@shared/schema";

const SALT_ROUNDS = 10;

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        console.log('[AUTH] Attempting login for email:', email);
        const user = await storage.getUserByEmail(email);
        
        if (!user) {
          console.log('[AUTH] No user found for email:', email);
          return done(null, false, { message: "Incorrect email or password" });
        }

        console.log('[AUTH] User found:', { id: user.id, email: user.email });
        const isValidPassword = await bcrypt.compare(password, user.password);
        
        if (!isValidPassword) {
          console.log('[AUTH] Invalid password for user:', user.email);
          return done(null, false, { message: "Incorrect email or password" });
        }

        console.log('[AUTH] Authentication successful for user:', { id: user.id, email: user.email });
        return done(null, user);
      } catch (error) {
        console.log('[AUTH] Error during authentication:', error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  const userId = (user as User).id;
  console.log('[AUTH] Serializing user to session:', { id: userId, email: (user as User).email });
  done(null, userId);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    console.log('[AUTH] Deserializing user from session ID:', id);
    const user = await storage.getUser(id);
    if (user) {
      console.log('[AUTH] Deserialized user:', { id: user.id, email: user.email });
    } else {
      console.log('[AUTH] No user found for ID:', id);
    }
    done(null, user);
  } catch (error) {
    console.log('[AUTH] Error during deserialization:', error);
    done(error);
  }
});

export { passport, bcrypt, SALT_ROUNDS };
