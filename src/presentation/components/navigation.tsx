import { HomeIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white border-t shadow z-50">
      <Link to="/" title="Home">
        <HomeIcon
          className={`w-6 h-6 ${
            location.pathname === '/' ? 'text-blue-600' : 'text-gray-500'
          } hover:text-blue-600`}
        />
      </Link>
      <Link to="/repeating" title="Repeat">
        <ArrowPathRoundedSquareIcon
          className={`w-6 h-6 ${
            location.pathname === '/repeating' ? 'text-blue-600' : 'text-gray-500'
          } hover:text-blue-600`}
        />
      </Link>
    </nav>
  );
}