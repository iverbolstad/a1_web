// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: new Date().toISOString().split('T')[0], // dynamically set to current date
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getEvents() {
  const posts = await client.fetch(
    `*[_type == "event"]{
      title, 
      tekst,
      ongoing, 
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


export async function updateDocumentTitle(_id: string, title: string) {
  const result = client.patch(_id).set({ title });
  return result;
}
