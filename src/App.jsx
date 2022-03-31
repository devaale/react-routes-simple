import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/settings">Settings</Link> | <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}
