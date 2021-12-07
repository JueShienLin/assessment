import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

const RoomContainer = ({ rooms }) => {
  const [adult, setAdult] = useState("1");
  const [children, setChildren] = useState("");
  const [available, setAvailable] = useState("0");
  const [disabled, setDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState([]);
  const [list, setList] = useState(rooms);
  const handleOnChange =
    (id) =>
    ({ target }) => {
      const temp = [...list].map((x) => {
        if (x.id === id) {
          return { ...x, available: +target.checked };
        }
        return x;
      });

      setList(temp);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = { adult, children, available };
    fetch("http://localhost:8000/", {
      method: "PUT",
      body: JSON.stringify(room),
    });
  };
  return (
    <div className="container bg-white p-4">
      <div className="d-flex flex-row bd-highlight mb-3">
        {list.map((roomList) => (
          <Form
            key={roomList.id}
            className="border border-3 mx-2 px-3 py-3 w-100 rounded"
            onSubmit={handleSubmit}
          >
            <Form.Check
              type="checkbox"
              checked={roomList.available}
              label={roomList.roomNo}
              className="mx-3 px-2"
              disabled={roomList.available === "1"}
              onChange={handleOnChange(roomList.id)}
            />
            <div className="d-flex justify-content-center w-100">
              <div className="p-2 w-50">
                <FloatingLabel controlId="floatingSelect" label="Adults">
                  <Form.Select
                    disabled={!roomList.available}
                    onChange={(e) => setAdult(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Form.Select>
                </FloatingLabel>
              </div>

              <div className="p-2 w-50">
                <FloatingLabel controlId="floatingSelect" label="Children">
                  <Form.Select
                    disabled={!roomList.available}
                    onChange={(e) => setChildren(e.target.value)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </div>
          </Form>
        ))}
      </div>
      <div className="d-flex flex-row px-2">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default RoomContainer;
