import React from 'react';

//api call
async function getList() {
  const listUrl = "https://jsonplaceholder.typicode.com/posts";
  const queryOptions = {};

  const response = await fetch(listUrl, queryOptions);

  return response.json();
}

function App() {
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
          .map((item: any, index: number) => <li key={index} >{item.title}</li>)}
      </ul>
    </div>
  );

}

export default App;
