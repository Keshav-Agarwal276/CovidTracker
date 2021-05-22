import React, { useEffect, useState } from "react";
import "./Covid.css";
const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const rawData = await fetch("https://api.covid19india.org/data.json");
    const finalData = await rawData.json();
    setData(finalData.statewise[0]);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <div className="mx-2">
          <h1>Covid Tracker</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3 m-5 customcard">
              <li>
              <p>Country</p>
              <p>INDIA</p>
              </li>
            </div>

            <div className="col-3 m-5 customcard">
              <li>
                <p>Total Recoverd</p>
                <p>{data.recovered}</p>
              </li>
            </div>

            <div className="col-3 m-5 customcard">
              <li>
                <p>Total Confirmed</p>
                <p>{data.confirmed}</p>
              </li>
            </div>

            <div class="w-100"></div>

            <div className="col-3 m-5 customcard">
              <li>
                <p>Total Active</p>
                <p>{data.active}</p>
              </li>
            </div>

            <div className="col-3 m-5 customcard">
              <li>
                <p>Total Deaths</p>
                <p>{data.deaths}</p>
              </li>
            </div>

            <div className="col-3 m-5 customcard">
              <li>
                <p>Last Updated</p>
                <p>{data.lastupdatedtime}</p>
              </li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Covid;
