

// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="bg-blue-900 text-white py-8">
//             <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
//                 <div className="flex-1">
//                     <h2 className="text-xl font-bold mb-2">Learn</h2>
//                     <p className="mb-4">Empowering students for competitive exam success.</p>
//                     <div className="flex space-x-4">
//                         <a href="#" className="text-white text-2xl"><i className="fab fa-youtube"></i></a>
//                         <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
//                         <a href="#" className="text-white text-2xl"><i className="fas fa-link"></i></a>
//                         <a href="#" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
//                     </div>
//                 </div>
//                 <div className="flex-1">
//                     <h2 className="text-xl font-bold mb-2">ACHIEVE</h2>
//                     <p className="mb-2">+91 (830) 876 7109</p>
//                     <p>info@apnacompetitivecorner.com</p>
//                 </div>
//                 <div className="flex-1">
//                     <h2 className="text-xl font-bold mb-2">EXCEL</h2>
//                     <form className="flex flex-col space-y-2">
//                         <input 
//                             type="email" 
//                             placeholder="Your email for updates" 
//                             className="p-2 rounded-md text-black" 
//                         />
//                         <button 
//                             type="submit" 
//                             className="bg-blue-600 text-white py-2 px-4 rounded-md">
//                             Join our learning community
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             <div className="text-center mt-8">
//                 <p>© 2024. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">Learn</h2>
                    <p className="mb-4">Empowering students for competitive exam success.</p>
                    <div className="flex space-x-4">
                        <button className="text-white text-2xl" aria-label="YouTube"><i className="fab fa-youtube"></i></button>
                        <button className="text-white text-2xl" aria-label="Instagram"><i className="fab fa-instagram"></i></button>
                        <button className="text-white text-2xl" aria-label="Link"><i className="fas fa-link"></i></button>
                        <button className="text-white text-2xl" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></button>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">ACHIEVE</h2>
                    <p className="mb-2">+91 (830) 876 7109</p>
                    <p>info@apnacompetitivecorner.com</p>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">EXCEL</h2>
                    <form className="flex flex-col space-y-2">
                        <input 
                            type="email" 
                            placeholder="Your email for updates" 
                            className="p-2 rounded-md text-black" 
                        />
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white py-2 px-4 rounded-md">
                            Join our learning community
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© 2024. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
