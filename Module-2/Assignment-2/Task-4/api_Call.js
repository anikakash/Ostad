const url = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};

fetchData();

