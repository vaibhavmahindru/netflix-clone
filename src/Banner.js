import React, { useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <header></header>
    </React.Fragment>
  );
}

export default Banner;
