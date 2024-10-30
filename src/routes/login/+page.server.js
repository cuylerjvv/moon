import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

/** @satisfies {import('./$types').Actions} */
export const actions = {
  // default: async ({ request }) => {
  //   const data = await request.formData();
  //   const name = data.get("name");
  //   const surname = data.get("surname");
  //   console.log(`Name: ${JSON.stringify(name, null, 2)}`);
  //   console.log(`Surname: ${JSON.stringify(surname, null, 2)}`);
  //   //   const { data, error } = await supabase.from("users").insert( {
  //   //     created_at: new Date(),
  //   //     name: name,
  //   //     surname: requestsurname,
  //   // }).select();
  //   // @ts-ignore

  //   // console.log(JSON.stringify(event, null, 2));
  //   console.log(JSON.stringify(data, null, 2));
  // },

  login: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const surname = data.get("surname");
    console.log(`Name: ${JSON.stringify(name, null, 2)}`);
    console.log(`Surname: ${JSON.stringify(surname, null, 2)}`);
  },

  close: async ({ request }) => {
    console.log("Closed");
  },
};

// export async function load() {
//   const { data } = await supabase.from("users").select();
//   return {
//     users: data ?? [],
//   };
// }
