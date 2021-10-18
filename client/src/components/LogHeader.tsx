const LogHeader = () => {
  return (
    <div key="header" className="grid grid-cols-4">
      <div className="border-black border border-t-2 border-l-2 bg-blue-300 py-6 flex justify-center">
        Date
      </div>
      <div className="border-black border border-t-2 bg-blue-300 py-6 flex justify-center">
        Location
      </div>
      <div className="border-black border border-t-2 bg-blue-300 py-6 flex justify-center">
        Number of Fish Caught
      </div>
      <div className="border-black border border-t-2 border-r-2 bg-blue-300 py-6 flex justify-center">
        Bait
      </div>
    </div>
  );
};

export default LogHeader;
