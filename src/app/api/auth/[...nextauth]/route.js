import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
        rememberMe: { label: "Remember Me", type: "checkbox" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
            rememberMe: credentials?.rememberMe,
          }),
        });

        const user = await res.json();

        if (user.accessToken) {
          return { token: user.accessToken }; // Return user object with token
        }

        return null; // If user not found or credentials are invalid
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in", // Custom login page
  },
  session: {
    strategy: "jwt",
  },
  //   callbacks: {
  //     // async jwt({ token, user }) {
  //     //   if (user) {
  //     //     token.accessToken = user.token; // Store the JWT token
  //     //   }
  //     //   return token;
  //     // },
  //     // async session({ session, token }) {
  //     //   session.accessToken = token.accessToken; // Attach the JWT token to the session
  //     //   return session;
  //     // },
  //   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
