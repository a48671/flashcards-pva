import sets from '@/data/sets';
import { ArrowPathIcon, BookOpenIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Flashcard Sets</h1>
  
      {/* Repeating Button */}
      <div className="mb-6">
        <Link
          to="/repeating-list"
          className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl shadow transition duration-300"
        >
          <ArrowPathIcon className="h-5 w-5" />
            Repeating saved words
        </Link>
      </div>
  
      {/* Flashcard Sets */}
      <ul className="space-y-4">
        {Object.values(sets).map((set) => (
          <li key={set.id}>
            <Link
              to={`/learn/${set.id}`}
              className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl hover:shadow-lg hover:bg-blue-50 transition"
            >
              <BookOpenIcon className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-medium text-gray-800">{set.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;