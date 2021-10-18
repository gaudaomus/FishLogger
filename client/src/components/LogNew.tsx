const LogNew = () => {
  return (
    <div key="header" className="grid grid-cols-4">
      <div className="border-black border border-b-2 border-l-2 py-4 flex justify-center">
        Date Form
      </div>
      <div className="border-black border border-b-2 py-4 flex justify-center">
        Location Form
      </div>
      <div className="border-black border border-b-2 py-4 flex justify-center">
        Number of Fish Caught Form
      </div>
      <div className="border-black border border-b-2 border-r-2 py-4 flex justify-center">
        Bait Form
      </div>
      <button className="">Save</button>
    </div>
  );
};

export default LogNew;
