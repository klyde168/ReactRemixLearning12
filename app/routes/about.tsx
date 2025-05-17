import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "About" }];
};

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page.</p>
    </>
  );
}
