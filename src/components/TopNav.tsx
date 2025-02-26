
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

const TopNav = () => {
  const folders = ['UOB', 'Perfecto', 'Additional', 'Learning', 'OTP'];

  return (
    <div className="h-16 bg-white border-b flex items-center px-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <RefreshCw className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="text-sm text-gray-600">
          /Users/jh9moz/Documents/reactWorkspace/ui/index.html
        </div>
      </div>

      <div className="ml-8 flex items-center space-x-2">
        {folders.map((folder) => (
          <div
            key={folder}
            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition-colors"
          >
            {folder}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
