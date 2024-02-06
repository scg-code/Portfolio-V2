// // TechStack.jsx
// import React from 'react';
// import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiFlask } from 'react-icons/si';
// import './TechStack.css'; // Import the CSS file

// const TechStack = () => {
//     const techStackIcons = [
//         { Icon: SiMongodb, color: "#4DB33D" },
//         { Icon: SiExpress, color: "#000000" },
//         { Icon: FaNodeJs, color: "#3C873A" },
//         { Icon: FaHtml5, color: "#E34F26" },
//         { Icon: FaCss3, color: "#1572B6" },
//         { Icon: FaJs, color: "#F7DF1E" },
//         { Icon: FaPython, color: "#3776AB" },
//         { Icon: SiFlask, color: "#000000" },
//         { Icon: FaDatabase, color: "#4479A1" }, // Representing SQL
//         { Icon: FaGitAlt, color: "#F05032" },
//         { Icon: FaReact, color: "#61DAFB" },
//         // Add more icons as needed
//     ];

//     return (
//         <div className="flex justify-center gap-4">
//             {techStackIcons.map((tech, index) => {
//                 const { Icon, color } = tech;
//                 return (
//                     <div key={index} className={`icon-container icon-${index}`}>
//                         <Icon size={40} color={color} />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default TechStack;