import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Services" }];
};

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <p>This is the services page.</p>
    </div>
  );
}
