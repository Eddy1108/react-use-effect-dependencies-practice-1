import { useState, useEffect } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
  //
  useEffect(() => {
    if(dataType){
    fetch(`https://swapi.dev/api/${dataType}/`) 
      .then((response) => response.json())
      .then((data) => setData(data))}
      else setData(null)
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
