

import React, { useState } from 'react';
import './Registartion.css'
function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    motherName: '',
    birthday: '',
    nationality: '',
    gender: '',
    email: '',
    maritalStatus: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mrgnvobe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     
               <div>
    <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
    </div>
     <div>
      <label>Mother's Name:</label>
         <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
     </div>
      <div>
         <label>Birthday:</label>
          <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
     </div>
        <div>
         <label>Nationality:</label>
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
        </div>
      <div>
          <label>Gender:</label>
     <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
        <option value="male">Male</option>
          <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
      </div>
         <div>
          <label>Email:</label>
         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
       </div>
 <div>
         <label>Marital Status:</label>
         <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required />
      </div>
       <div>
        <label>Mobile Number:</label>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
       </div>
         <div>
         <label>Upload Passport Size Photo:</label>
         <input type="file" name="photo" onChange={handleChange} required />
      </div>
        <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;


// import React, { useState } from 'react';
// import './Registartion.css'
// function RegistrationForm() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         motherName: '',
//         birthday: '',
//         nationality: '',
//         gender: '',
//         email: '',
//         maritalStatus: '',
//         mobileNumber: '',
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
    
//         const emailContent = `
//           Full Name: ${formData.fullName}
//           Mother's Name: ${formData.motherName}
//           Birthday: ${formData.birthday}
//           Nationality: ${formData.nationality}
//           Gender: ${formData.gender}
//           Email: ${formData.email}
//           Marital Status: ${formData.maritalStatus}
//           Mobile Number: ${formData.mobileNumber}
//         `;
    
//         const mailtoLink = `mailto:suryaviswanath22@gmail.com?subject=New Registration Form Submission&body=${encodeURIComponent(emailContent)}`;
    
//         window.location.href = mailtoLink;
//       };
    
//   return (
//     <form onSubmit={handleSubmit}>
     
//                <div>
//     <label>Full Name:</label>
//           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//     </div>
//      <div>
//       <label>Mother's Name:</label>
//          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
//      </div>
//       <div>
//          <label>Birthday:</label>
//           <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
//      </div>
//         <div>
//          <label>Nationality:</label>
//         <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
//         </div>
//       <div>
//           <label>Gender:</label>
//      <select name="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select</option>
//         <option value="male">Male</option>
//           <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//       </div>
//          <div>
//           <label>Email:</label>
//          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//        </div>
//  <div>
//          <label>Marital Status:</label>
//          <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required />
//       </div>
//        <div>
//         <label>Mobile Number:</label>
//           <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
//        </div>
//          <div>
//          <label>Upload Passport Size Photo:</label>
//          <input type="file" name="photo" onChange={handleChange} required />
//       </div>
//         <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default RegistrationForm;