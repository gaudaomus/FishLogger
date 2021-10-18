interface Trip {
  id: number;
  dateTime: string;
  location: string;
  fishCaught: number;
  baitLure: string;
}

interface Prop {
  trip: Trip;
}

const LogEntry = (props: Prop) => {
  return (
    <div className="grid grid-cols-4">
      <div className="border-black border border-l-2 py-4 flex justify-center">
        {props.trip.dateTime}
      </div>
      <div className="border-black border py-4 flex justify-center">
        {props.trip.location}
      </div>
      <div className="border-black border py-4 flex justify-center">
        {props.trip.fishCaught}
      </div>
      <div className="border-black border border-r-2 py-4 flex justify-center">
        {props.trip.baitLure}
      </div>
    </div>
  );
};

export default LogEntry;
