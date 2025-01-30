// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "17bn8p48",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2000-09-22", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getEvents() {
  const posts = await client.fetch(
    `*[_type == "event"]{
      title, 
      tekst, 
      "imageUrl": bilde.asset->url
    }`
  );
  return posts;
}


export async function getLogo() {
  const posts = await client.fetch(
    `*[_type == "logo"]{
      title, 
      "imageUrl": logo.asset->url
    }`
  );
  return posts;
}

export async function getImage() {
  const posts = await client.fetch(
    `*[_type == "bilde"]{
      tekst, 
      "imageUrl": bilde.asset->url
    }`
  );
  return posts;
}

export async function getForside() {
  const posts = await client.fetch(
    `*[_type == "forside"]{
      tekst, 
      "imageUrl": bilde.asset->url
    }`
  );
  return posts;
}

export async function getKundeLogo() {
  const posts = await client.fetch(
    `*[_type == "kunder"]{
      text, 
      "imageUrl": image.asset->url
    }`
  );
  return posts;
}

export async function getTjenester() {
  const posts = await client.fetch(
    `*[_type == "tjeneste"]{
      title,
      "imageUrl": image.asset->url,
      beskrivelse,
    }`
  );
  return posts;
}

export async function createPost(post: any) {
  const result = client.create(post);
  return result;
}

export async function updateDocumentTitle(_id: string, title: string) {
  const result = client.patch(_id).set({ title });
  return result;
}
