import { createClient } from "@sanity/client";

 const Client = createClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_KEY,
   dataset: process.env.NEXT_PUBLIC_DATABASE,
   apiVersion: "2023-01-01",
   useCdn: true,
 });

export default Client