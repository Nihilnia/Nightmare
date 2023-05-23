import { useState, useEffect } from "react";
import Form from "./Form";
import "./App.css";

export default function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userz")) || []
  );

  const [tempData, setTempData] = useState({
    id: 0,
    userName: "",
    passWord: "",
  });

  useEffect(() => {
    localStorage.setItem("userz", JSON.stringify(data));
  }, [data]);

  function handleEnter(e) {
    e.preventDefault();

    console.log("Enter..");

    setData((prev) => {
      return [tempData, ...prev];
    });

    console.log(`
        SUBMITTED
        ID: ${tempData.id}
        Username: ${tempData.userName}
        Password: ${tempData.passWord}
      `);

    e.target.reset();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setTempData((prev) => {
      return { ...prev, id: data.length, [name]: value };
    });
    console.log("Change..");
  }

  return (
    <>
      <Form
        handleEnter={handleEnter}
        handleChange={handleChange}
        currentData={data}
      />
    </>
  );
}
