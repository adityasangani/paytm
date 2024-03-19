// export const Button = ({ text }) => {
//   return (
//     <div className="flex justify-center mt-4 ">
//       <div className="bg-gray-800 text-white rounded-md w-72 p-2  text-center cursor-pointer hover:bg-gray-700">
//         {text}
//       </div>
//     </div>
//   );
// };

export function Button({ text }) {
  return (
    <button
      type="button"
      class=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 mt-2"
    >
      {text}
    </button>
  );
}
