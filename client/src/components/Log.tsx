import LogHeader from "./LogHeader";
import LogEntry from "./LogEntry";
import LogNew from "./LogNew";

const Log = () => {
  let sampleData = [
    {
      id: 1,
      dateTime: "January 1, 2021",
      location: "Clear Lake",
      fishCaught: 300,
      baitLure: "Worm",
    },
    {
      id: 2,
      dateTime: "February 14, 2021",
      location: "Lake Fork",
      fishCaught: 5,
      baitLure: "Swim Jig",
    },
    {
      id: 3,
      dateTime: "July 4, 2021",
      location: "Chickamauga Lake",
      fishCaught: 4,
      baitLure: "Chatterbait",
    },
    {
      id: 4,
      dateTime: "October 31, 2021",
      location: "Finger Lakes",
      fishCaught: 2,
      baitLure: "Jerkbait",
    },
  ];

  return (
    <div className="container mx-auto mt-12">
      <button className="bg-blue-400 hover:bg-blue-300 rounded-md px-4 py-2 shadow-md transform active:translate-y-0.5" >New Entry</button>
      <div className="mt-12">
        <LogHeader key="header" />
        {sampleData.map((item) => {
          return <LogEntry trip={item} key={item.id} />;
        })}
        <LogNew key="new-entry" />
      </div>
    </div>
  );
};

export default Log;
