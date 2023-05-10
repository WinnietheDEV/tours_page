import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Empty from "./Empty";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTour = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    return setTours(newTours);
  };
  console.log(tours.length);
  const refresh = () => {
    getTour();
  };

  useEffect(() => {
    getTour();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (!isLoading && tours.length > 0) {
    return (
      <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
          </div>
          <Tours tours={tours} removeTour={removeTour} />
        </section>
      </main>
    );
  } else if (tours.length === 0) {
    return <Empty refresh={refresh} />;
  }
}

export default App;
