import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default  function SWR() {
  const { data, error } =  useSWR(`https://api.github.com/users/zeldox258`, fetcher);
  
  if (error) return <div>Failed to load chat</div>;
  if (!data) return <div>Loading...</div>;
    console.log(data);
    
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

//hello myname is {yourName}


