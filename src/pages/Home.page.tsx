import React from 'react';
import { Link } from 'react-router-dom';

async function getList() {
  const listUrl = "https://jsonplaceholder.typicode.com/posts";
  const queryOptions = {};

  const response = await fetch(listUrl, queryOptions);

  return response.json();
}

function HomePage() {
  const [data, setData] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    getList().then((data) => {
      setData(data)
    })
  }, [])
  return (
    <div>
      <input
        onChange={event => setSearchTerm(event.target.value)}
      />

      <ul>
        {data
          .filter((data: any) => data.title.includes(searchTerm))
          .map((item: any, index: number) => <li key={index} ><Link to={`view/${item.id}`}> {item.title}</Link></li>)}
      </ul>
    </div>
  );
};

export default HomePage;