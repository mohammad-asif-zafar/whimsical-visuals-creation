
import { Home, FileText, History, CheckCircle, ClipboardCheck, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { title: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/' },
    { title: 'Maker', icon: <FileText className="w-5 h-5" />, path: '/maker' },
    { title: 'Audit trail', icon: <History className="w-5 h-5" />, path: '/audit' },
    { title: 'VAL approvals', icon: <CheckCircle className="w-5 h-5" />, path: '/approvals' },
    { title: 'Checker', icon: <ClipboardCheck className="w-5 h-5" />, path: '/checker' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // Add your logout logic here
  };

  return (
    <div className="h-screen w-64 bg-sidebar-bg text-white fixed left-0 top-0 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path));
            
          return (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                ${isActive 
                  ? 'bg-sidebar-hover text-white' 
                  : 'text-gray-300 hover:bg-sidebar-hover'}`}
              onClick={() => console.log(`Navigating to ${item.title}`)}
            >
              <span className={`transition-colors ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                {item.icon}
              </span>
              <span className={`transition-colors ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button 
          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-sidebar-hover rounded-lg transition-all duration-200 w-full"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
