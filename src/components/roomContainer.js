import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

const RoomContainer = ({ rooms }) => {
  const [list, setList] = useState(rooms);

  const handleAdult = (id, value) => {
    const adultCount = [...list].map((x) => {
      if (x.id === id) {
        return { ...x, adults: value };
      }
      return x;
    });
    setList(adultCount);
  };

  const handleChild = (id, value) => {
    const childCount = [...list].map((x) => {
      if (x.id === id) {
        return { ...x, children: value };
      }
      return x;
    });
    setList(childCount);
  };

  const handleOnChange =
    (id) =>
    ({ target }) => {
      const temp = [...list].map((x) => {
        if (x.id === id && target.checked) {
          return { ...x, available: 1 };
        }
        if (x.id === id && !target.checked) {
          const a = rooms.find((y) => y.id === id);
          return { ...a, available: 0 };
        }

        if (x.id < id && target.checked) {
          return { ...x, available: 1 };
        }
        if (x.id > id && !target.checked) {
          const a = rooms.find((y) => y.id === x.id);
          return { ...a, available: 0 };
        }
        return x;
      });

      setList(temp);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    [...list]
      .filter((x) => x.available)
      .map((rooms) => {
        fetch("http://localhost:8000/roomList/" + rooms.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rooms),
        });
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
              value={roomList.available}
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
                    onChange={(e) => handleAdult(roomList.id, e.target.value)}
                    value={roomList.adults}
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
                    onChange={(e) => handleChild(roomList.id, e.target.value)}
                    value={roomList.children}
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
