import { memo } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function ChildComponent({ colorClass, handleSelect }) {
  console.log(colorClass);
  return (
    <>
      <h1 className={colorClass}>Color</h1>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Chọn màu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="text-primary">Xanh dương</Dropdown.Item>
          <Dropdown.Item eventKey="text-secondary">Xám</Dropdown.Item>
          <Dropdown.Item eventKey="text-success">Xanh lá</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default memo(ChildComponent);
