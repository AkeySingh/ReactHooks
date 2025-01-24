/* RandomUserData.js */

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffectHooks() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://jsonplaceholder.typicode.com/users`);
      setData(result.data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {data &&
        data.map((index, item) => {
          <div>
            <h2>User Information</h2>
            <p>
              Name:
              {item.name}
              {/* {userData.last_name} */}
            </p>
            <p>Email: {item.email}</p>
            {/* Add more user data fields as needed */}
          </div>;
        })}
    </div>
  );
}
