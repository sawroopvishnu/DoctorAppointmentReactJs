import React, { useState, useEffect } from 'react';

const DoctorProfile = () => {

    const [fullname, setFullname] = useState({});
    const [specialization, setSpecialization] = useState('');
    const [profile, setProfile] = useState({});
    const [username, setUsername] = useState('');

      useEffect(() => {
    // Fetch doctor profile data from the backend
    const authToken = 'secret'; 
    const fetchUsername = localStorage.getItem("username");
    const id = localStorage.getItem("id"); 
      fetch(`http://localhost:9096/api/doctors/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': authToken,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       console.log('Doctor data......................');
        console.log(JSON.stringify(data));
        console.log('user name ......................');
        console.log(data.username);
        setProfile(data);
        setUsername(data.username);
      })
      .catch(error => {
        console.error('Error fetching doctor profile:', error);
      });
  }, []);

  const handleProfileUpdate = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated profile data to the server
    console.log('Updated profile:', profile);
  };

  return (
    <div>
      <h2>Doctor Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={profile.fullName}
            onChange={(e) => handleProfileUpdate('fullName', e.target.value)}
          />
        </div>
        <div>
          <label>Specialization:</label>
          <input
            type="text"
            value={profile.specialization}
            onChange={(e) =>
              handleProfileUpdate('specialization', e.target.value)
            }
          />
        </div>
        {/* Add more profile fields here */}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default DoctorProfile;
