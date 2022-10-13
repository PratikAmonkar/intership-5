import axios from "axios";
import React, { useEffect, useState } from "react";
import locationImg from "../assets/location_img.png";
import InfoDisplay from "../components/InfoDisplay";

const HomeScreen = () => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [isDataLoad, setIsDataLoad] = useState(false);
  console.log(currentWeather);

  const getData = async () => {
    try {
      setIsDataLoad(false);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=panaji&appid=8d8e6390b29f36ded700bc09e7aa0fd6&units=metric`
      );
      setCurrentWeather(response.data);
      setIsDataLoad(true);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isDataLoad ? (
        <div className="container text-center mt-5">
          <div style={{ border: "2px solid red" }}>
            <p
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
              }}
            >
              {currentWeather.main.temp}°C
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={locationImg} height="30px" />
              {/* <p>Panaji</p> */}

              <p
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                }}
              >
                {currentWeather.name} {currentWeather.sys.country}
              </p>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4
                style={{
                  fontSize: "0.9rem",
                }}
              >
                feels like {currentWeather.main.feels_like}°C
              </h4>
              <h4
                style={{
                  fontSize: "0.9rem",
                }}
              >
                {currentWeather.weather[0].description}
              </h4>
            </div>
          </div>
          <div
            className="mt-5"
            style={{
              marginTop: "10px",
              border: "2px solid red",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <InfoDisplay
              title="Min temp"
              value={currentWeather.main.temp_min}
              unit="°C"
            />
            <InfoDisplay
              title="Max temp"
              value={currentWeather.main.temp_max}
              unit="°C"
            />
            <InfoDisplay
              title="Pressure"
              value={currentWeather.main.pressure}
              unit="hPa"
            />
            <InfoDisplay
              title="Humidity"
              value={currentWeather.main.humidity}
              unit="%"
            />
            <InfoDisplay
              title="Sea Level"
              value={currentWeather.main.sea_level}
              unit="hPa"
            />
            <InfoDisplay
              title="Ground level"
              value={currentWeather.main.grnd_level}
              unit="hPa"
            />
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Min Temp:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.main.temp_min}°C
              </p>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Max Temp:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.main.temp_min}°C
              </p>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Pressure:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.main.pressure} hPa
              </p>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Humidity:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.main.humidity} %
              </p>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Sea level:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.main.sea_level} hPa
              </p>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Ground level:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.main.grnd_level} hPa
              </p>
            </div> */}
          </div>

          <div
            className="mt-5"
            style={{
              marginTop: "10px",
              border: "2px solid red",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <InfoDisplay
              title="Wind speed"
              value={currentWeather.wind.speed}
              unit="meter/sec"
            />
            <InfoDisplay
              title="Degree"
              value={currentWeather.wind.deg}
              unit="degrees "
            />
            <InfoDisplay
              title="Gust"
              value={currentWeather.wind.gust}
              unit="meter/sec"
            />

            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Wind speed:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.wind.speed} meter/sec
              </p>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Degree:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.wind.deg} degrees
              </p>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Gust:
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {currentWeather.wind.gust} meter/sec
              </p>
            </div> */}
          </div>
        </div>
      ) : (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
