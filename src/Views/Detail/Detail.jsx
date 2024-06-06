import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropertyDetailsView from '../../Components/PropertyDetailsView/PropertyDetailsView';

const PropertyDetailsPage = ({ match }) => {
    const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/property/${id}`);
        setProperty(response.data.data);
      
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchProperty();
  }, [id]);

  return (
    <div>
      {property && <PropertyDetailsView property={property} />}
    </div>
  );
};

export default PropertyDetailsPage;
