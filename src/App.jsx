import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase'; // replace with your firebase import path

function App() {
  // State to hold the fetched data
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
// Function to fetch data from Firestore
// Function to fetch data from Firestore
const fetchData = async () => {
  // Get a reference to the 'Anchor' and 'Tag' collections
  const anchorCollection = collection(db, 'Anchor');
  const tagCollection = collection(db, 'Tag');

  // Fetch the documents in both collections
  const anchorData = await getDocs(anchorCollection);
  const tagDocs = await getDocs(tagCollection);

  // Fetch the documents in the 'Tag' collection
  const tagData = await Promise.all(tagDocs.docs.map(async (doc) => {
    const tagCoordinateCollection = collection(db, 'Tag', doc.id, 'Tag_coordinate');
    const tagCoordinateData = await getDocs(tagCoordinateCollection);
    
    return tagCoordinateData.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }));

  // Map over the documents and format them into an array of objects
  const formattedAnchorData = anchorData.docs.map((doc) => ({
    ...doc.data(), // Spread the data in the document
    id: doc.id, // Include the document ID
  }));

  // Combine the data from both collections and store it in state
  setFilteredData([...formattedAnchorData, ...tagData.flat()]);
};


    // Call the fetchData function
    fetchData();

  }, []); // Empty dependency array means this effect runs once on mount

  // Function to render a coordinate
  const renderCoordinate = (coord, index) => <p key={index}>{coord}</p>;

  // Function to render an item
  const renderItem = (item) => (
    <div key={item.id}>
      {item.id}: {item.coordinate.join(', ')}
    </div>
  );

  return (
    <div>
      {filteredData.map(renderItem)}
    </div>
  );
}

export default App;