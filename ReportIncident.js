import React, { useState } from 'react';
import axios from 'axios';

function ReportIncident() {
  const [incidentDetails, setIncidentDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/incident/report', { details: incidentDetails });
    setIncidentDetails('');
    alert('Incident reported successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report Incident</h2>
      <textarea
        value={incidentDetails}
        onChange={(e) => setIncidentDetails(e.target.value)}
        placeholder="Describe the incident"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReportIncident;

