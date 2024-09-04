import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName={"midudev"}
        name={"Miguel Angel"}
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName={"pheralb"}
        name={"Miguel Peralta"}
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName={"elonmusk"}
        name={"Eleon Musk"}
      />
    </section>
  );
}
