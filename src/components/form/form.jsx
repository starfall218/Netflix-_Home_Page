// import { useState } from "react";

// function Form() {
//   const [data, useData] = useState([
//     {
//       firstName: '',
//       lasttName: '',
//       email: '',
//       password: '',
//       age: '',
//       isParent: false,
//       isTeen: false,
//       isMiddleAged: false,
//       isKid: false,
//     },
//   ]);
 
//   const handleData = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     const formData = new FormData(e.target);
//     const formObj = {
//       email: formData.get('email'),
//       password: formData.get('password'),
//     };
//     console.log(formObj);
//     useData((input) => [...input, formObj]);
//   };

//   // To check the password format
//   const [capital, setCapital] = useState(false);
//   const [isEight, setToEight] = useState(false);
//   const [hasNumber, setNumber] = useState(false);
//   const [hasSpecCharac, setSpecCharac] = useState(false);

//   const conditions = {
//     isCapital: false,
//     isEight: false,
//   }

//   const passwordCheck = (e) => {
//     const password = e.target.value;
//     const checkForCapital = /^(?=.*[A-Z])/.test(password);
//     const checkForLength = /.{8,}/.test(password);
//     const checkForNumber = /[0-9]/.test( password);
//     const checkForSpecial = /[^A-Za-z0-9]/.test(password);
//     if(!checkForCapital){
//       setCapital(true);
//       setToEight(false);
//       setNumber(false);
//       setSpecCharac(false);
//     } else if(!checkForLength) {
//       setCapital(false);
//       setToEight(true);
//       setNumber(false);
//       setSpecCharac(false);

//     }
//     else if(!checkForNumber) {
//       setCapital(false);
//       setToEight(false);
//       setNumber(true);
//       setSpecCharac(false)
//     }
//     else if(!checkForSpecial) {
//       setCapital(false);
//       setToEight(false);
//       setNumber(false);
//       setSpecCharac(true);
//     }
//     else {
//       setCapital(false);
//       setToEight(false);
//       setNumber(false);
//       setSpecCharac(false);
//     }
//   };


//   return (
//     <form onSubmit={handleData}>
//       <input type="text" name="email" id="firstName" placeholder="Enter email" />
//       <input
//         type="password"
//         name="password"
//         id="email"
//         placeholder="Enter password"
//         onChange={passwordCheck}
//       />
//       {capital && (
//         <p style={{ color: 'gray', fontSize: '12px' }}>
//           Password must contain at least one capital letter.
//         </p>
//       )}
//        {!capital && isEight && (
//         <p style={{ color: 'gray', fontSize: '12px' }}>
//           Password must be at least 8 characters long.
//         </p>
//       )}
//       {!capital && !isEight && hasNumber && (
//         <p style={{ color: 'gray', fontSize: '12px' }}>
//           Password must include a number.
//         </p>
//       )}
//        {!capital && !isEight && !hasNumber && hasSpecCharac && (
//         <p style={{ color: 'gray', fontSize: '12px' }}>
//           Password must include a special character.
//         </p>
//       )}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;