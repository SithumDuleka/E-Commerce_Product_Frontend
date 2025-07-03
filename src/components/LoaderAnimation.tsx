export const PulseLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
    <div className="flex flex-col items-center gap-6">
      <div className="relative flex items-center justify-center">
        <span className="absolute w-24 h-24 rounded-full border-4 border-blue-300 border-t-transparent animate-ping opacity-75"></span>
        <span className="absolute w-16 h-16 rounded-full border-4 border-purple-400 border-b-transparent animate-spin"></span>
        <span className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full animate-pulse shadow-xl z-10"></span>
      </div>
      
      <span className="text-xl font-bold text-blue-700 tracking-wide animate-pulse drop-shadow">
        Loading, please wait...
      </span>
    </div>
  </div>
);
