import { Link } from 'react-router-dom';

const sets = [
  { id: 'fruits-and-vegetables', title: 'Fruits and Vegetables' },
  // Add more sets here later
];

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcard Sets</h1>
      <ul className="space-y-2">
        <li>
            <Link
              to={`/repeating`}
              className="text-blue-600 underline hover:text-blue-800"
            >
               Repeating saved words
            </Link>
        </li>
        {sets.map((set) => (
          <li key={set.id}>
            <Link
              to={`/learn/${set.id}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {set.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;