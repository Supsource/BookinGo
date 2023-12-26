// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="big-blue-800 py-6">
//       <div className="container mx-auto flex justify-between">
//         <span className="text-3xl text-white font-bold tracking-tight">
//           <Link to="/">BookinGo.com</Link>
//         </span>
//         <span className="flex space-x-2">
//           <Link
//             to="/sign-in"
//             className="flex items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
//           >
//             Sign In
//           </Link>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-pink-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="text-white no-underline">
            BookinGo.com
          </Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex bg-white items-center text-pink-600 px-3 font-bold hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
