import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IncidentList() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      const response = await axios.get('/api/incident/view');
      setIncidents(response.data);
    };
    fetchIncidents();
  }, []);

  return (
    <div>
      <h2>Incident List</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>{incident.details}</li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentList;

