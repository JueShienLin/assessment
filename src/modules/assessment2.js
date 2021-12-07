import React, { useEffect } from "react";
import RoomContainer from "../components/roomContainer";
import useFetch from "./actions/useFetch";

const Assessment2 = () => {
  const {
    data: rooms,
    isPending,
    error,
  } = useFetch("http://localhost:8000/roomList");
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {rooms && <RoomContainer rooms={rooms} />}
    </div>
  );
};

export default Assessment2;
