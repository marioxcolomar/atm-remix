import type { MetaFunction } from "@remix-run/node";
import Withdrawal from "~/components/withdrawal";
import "./styles.css";

export const meta: MetaFunction = () => {
  return [{ title: "ATM App" }, { name: "", content: "" }];
};

export default function Index() {
  return (
    <div
      className="app"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <Withdrawal />
    </div>
  );
}
