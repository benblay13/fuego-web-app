import React, { useState } from 'react';

function Profile() {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    vehicle: 'Toyota Corolla',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
    // Save the updated data to a backend here (if implemented)
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Profile Management</h2>
      <div>
        {Object.keys(profileData).map((key) => (
          <div key={key} style={{ margin: '10px 0' }}>
            <label style={{ fontWeight: 'bold', marginRight: '10px', textTransform: 'capitalize' }}>
              {key}:
            </label>
            {isEditing ? (
              <input
                type="text"
                name={key}
                value={profileData[key]}
                onChange={handleInputChange}
                style={{
                  padding: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  width: '70%',
                }}
              />
            ) : (
              <span>{profileData[key]}</span>
            )}
          </div>
        ))}
      </div>
      {isEditing ? (
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Save Changes
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}

export default Profile;
