import { Suspense } from "react";
import "./App.css";
import Countries from "./component/Countries/Countries";

// fetching countries
const url = "https://openapi.programming-hero.com/api/all";
const countriesPromise = fetch(url).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback="Loading..............">
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
