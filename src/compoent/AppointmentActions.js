// import React, { useState } from 'react';
// import axios from 'axios';
// import './AppointmentActions.css';

// const AppointmentActions = ({ appointment, onUpdate }) => {

//   const [loading, setLoading] = useState(false);
//   const id = localStorage.getItem('id');

//   const handleAccept = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.put(
//         `http://localhost:9096/api/doctors/appointments/accept/${id}`
//       );
//       if (response.status === 200) {
//         onUpdate(appointment.id, 'accepted');
//       }
//     } catch (error) {
//       console.error('Error accepting appointment:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReject = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.put(
//         `http://localhost:9096/api/doctors/appointments/reject/${id}`
//       );
//       if (response.status === 200) {
//         onUpdate(appointment.id, 'rejected');
//       }
//     } catch (error) {
//       console.error('Error rejecting appointment:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="appointment-actions">
//       <button
//         onClick={handleAccept}
//         disabled={loading || appointment.status === 'accepted'}
//       >
//         Accept
//       </button>
//       <button
//         onClick={handleReject}
//         disabled={loading || appointment.status === 'rejected'}
//       >
//         Reject
//       </button>
//     </div>
//   );
// };

// export default AppointmentActions;
