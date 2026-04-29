import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/users" className="flex-shrink-0 flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
              <Users className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight text-slate-900">UserManage</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/users"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="/users/add"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary-700 transition-colors shadow-sm"
            >
              Add User
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
