import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>💸 SpendWise</h1>
      <p>Track your income, expenses & savings smartly.</p>

      <button className="start-btn" onClick={() => navigate("/tracker")}>
        Get Started →
      </button>
    </div>
  );
}
