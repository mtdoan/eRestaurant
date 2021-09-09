import axios from "axios";
import React from "react";

export default function api() {
  const [data, setData] = React.useState({dishes: []});

  React.useEffect(() => {
    console.log('Call api');
    axios.get(`http://localhost:8081/dishes`).then((response) => {
      console.log(response);
      setData({dishes: response.data});
    });
  }, []);

  console.log('Render');
  if (!data) {
    return "No post!";
  }

  return (
    <div>
      {data.dishes.map(dish => <p key={dish.id}>{dish.name}</p>)}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
