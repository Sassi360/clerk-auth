import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_KEY}>
      <SignedIn>
        <Hello />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function Hello() {

  const { user } = useUser();

  return <h1>Hello {user?.firstName}</h1>;
}

export default App;
