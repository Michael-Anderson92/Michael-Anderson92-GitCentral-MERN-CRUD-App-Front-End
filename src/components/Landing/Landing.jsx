import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="landing-title">Welcome to GitCentral</h1>
        <p className="landing-subtitle">Sign up now, or sign in to see your super secret dashboard!</p>
      </header>

      <div className="hot-topics">
        <h2>Hot Topics</h2>
        <p className="hot-topic">Tech Trends</p>

      </div>
    </div>
  );
};

export default Landing;
