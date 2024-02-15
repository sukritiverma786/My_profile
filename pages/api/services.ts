import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data"; // Assuming you're importing some data

// Assign the arrow function to a variable
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(services);
  res.status(200).json({ services });
};

// Export the variable as the default export
export default handler;
