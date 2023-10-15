import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "uwl20q9a",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21", // use a UTC date string
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//Run this to add exception for loaclhost 3000 CORS Policy
// sanity cors add http://localhost:3000

export default client;
