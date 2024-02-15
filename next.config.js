/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  exportPathMap: async function () {
    return {
      "/projects": { page: "/Projects" }, // Ensure this matches the updated filename
      "/resume": { page: "/Resume" }, // Ensure this matches the updated filename
    };
  },
};
module.exports = nextConfig;

// const nextConfig = {
//   // Example custom route configuration
//   exportPathMap: async function () {
//     return {
//       '/projects': { page: '/Projects' }, // Ensure this matches the updated filename
//       '/resume': { page: '/Resume' }, // Ensure this matches the updated filename
//     };
//   },
// };

// module.exports = nextConfig;
