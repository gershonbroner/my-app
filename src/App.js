import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([
    { key: "ירושלים", value: "ישראל" },
    { key: "מדריד", value: "ספרד" },
    { key: "אתונה", value: "יון" },
    { key: "עמאן", value: "ירדו" },
    { key: "פריז", value: "צרפת" },
    { key: "אמסטרדם", value: "הולנד" },
    { key: "ליסבון", value: "פורטוגל" },
    { key: "וושינגטון", value: "ארהב" },
    { key: "קהיר", value: "מצריים" },
    { key: "בגדאד", value: "עיראק" },
  ]);

  const [capital, setCapital] = useState([
    { value: "ירושלים" },
    { value: "מדריד" },
    { value: "אתונה" },
    { value: "עמאן" },
    { value: "פריז" },
    { value: "אמסטרדם" },
    { value: "ליסבון" },
    { value: "וושינגטון" },
    { value: "קהיר" },
    { value: "בגדאד" },
  ]);
  const [country, setcountry] = useState(null);
  const [capitalc, setcapitalc] = useState(null);

  const handleChoices = (index, typeChoice) => {
    if (country === null) {
      console.log(capitalc + "  " + country);
      if (typeChoice === "country") {
        setcountry(countries[index].key);
        // color green
        countries[index].bg = "green";
        capital.map((item) => {
          if (item.bg === "red") {
            item.bg = "";
          }
        });
        countries.map((item) => {
          if (item.bg === "red") {
            item.bg = "";
          }
        });
      }
    }
    if (capitalc === null) {
      if (typeChoice === "capital") {
        setcapitalc(capital[index].value);
        // color green
        capital[index].bg = "green";
        capital.map((item) => {
          if (item.bg === "red") {
            item.bg = "";
          }
        });
        countries.map((item) => {
          if (item.bg === "red") {
            item.bg = "";
          }
        });
      }
    }

    if (country !== null && capitalc !== null) {
      console.log("hi");
      if (capitalc === country) {
        // need delete from array
        const arrayUpdate = countries.filter((item) => item.key !== capitalc);
        setCountries(arrayUpdate);
        const arrayCapitalUpdate = capital.filter(
          (item) => item.value !== capitalc
        );
        setCapital(arrayCapitalUpdate);

        setcapitalc(null);
        setcountry(null);
        if (typeChoice === "capital") {
          setcapitalc(capital[index].value);
          // color green
          capital[index].bg = "green";
        }

        if (typeChoice === "country") {
          setcountry(countries[index].key);
          // color green
          countries[index].gb = "green";
        }
      } else {
        // color red on to choice
        capital.map((item) => {
          if (item.bg) {
            item.bg = "red";
          }
        });
        countries.map((item) => {
          if (item.bg) {
            item.bg = "red";
          }
        });
        // capital[index].bg = "red";
        // countries[index].bg = "red";

        setcapitalc(null);
        setcountry(null);
        if (typeChoice === "capital") {
          setcapitalc(capital[index].value);
          // color green
          capital[index].bg = "green";
        }
        if (typeChoice === "country") {
          setcountry(countries[index].key);
          // color green
          countries[index].bg = "green";
        }
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {countries.map((country, key) => (
          <button
            style={{ background: country.bg ? country.bg : "" }}
            onClick={() => handleChoices(key, "country")}
          >
            {country.value}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {capital.map((capital, key) => (
          <button
            style={{ background: capital.bg ? capital.bg : "" }}
            onClick={() => handleChoices(key, "capital")}
          >
            {capital.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
