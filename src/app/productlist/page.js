// // pages/index.js

// import React from 'react';

// const HomePage = ({ data }) => {
//   return (
//     <div>
//       <h1>Next.js External API Example</h1>
//       <p>Data from external API: {data.message}</p>
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   const res = await fetch('https://dummyjson.com/products');
//   const data = await res.json();

//   return {
//     <div>

//     <h1>API dataata</h1>
//     {products.map((product) => (
//       <div key={product.id}>
//         <p>Name: {product.title}, Price: {product.price}</p>
        
//       </div>
//     ))}
//   </div>
// );
// };



// export default HomePage;

'use client'
import React, { useEffect, useState } from 'react';
export default function HomePage () {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data ? (
        <div>
          {data.products.map((product) => (
            <div key={product.id}>
              <p>Name: {product.title}, Price: {product.price}</p>
              {/* Add more product details as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};



