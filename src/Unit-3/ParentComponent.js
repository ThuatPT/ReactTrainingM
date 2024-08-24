import { useState, useCallback, useEffect } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [colorClass, setColorClass] = useState("");

  const handleSelect = useCallback((eventKey) => {
    console.log("🚀 ~ ParentComponent ~ handleSelect:", eventKey);
    setColorClass(eventKey);
  }, []);

  useEffect(() => {
    console.log("🚀 ~ ParentComponent ~ colorClass:", colorClass);
  }, [colorClass]);

  return (
    <>
      <ChildComponent colorClass={colorClass} handleSelect={handleSelect} />
    </>
  );
}

export default ParentComponent;
