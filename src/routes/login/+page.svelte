<script>
  import { supabase } from '$lib/supabaseClient.ts';
  let creating_new_user = false;

  export let data;
  console.log(JSON.stringify(data.users, null, 2));

  const createUserUtil = {
    openModal() {
      creating_new_user = true;
    },

    closeModal() {
      creating_new_user = false;
    },

    async createUser() {
      const { data } = await supabase.from("users").update( {
          created_at: new Date(),
          name: "Annelma",
          surname: "Kellerman",
      })

      console.log(JSON.stringify(data, null, 2));
    },
  };
</script>

<div>
  <p>Login page</p>
  <a href="/home">Home</a>

  <button on:click={createUserUtil.openModal}>Create user</button>

  {#if creating_new_user}
    <div>
      <form method="POST">
        <label>
          Name
          <input name="name" type="text" />
        </label>
        <label>
          Surname
          <input name="surname" type="text" />
        </label>
        <button on:click={createUserUtil.closeModal}>Close</button>
        <button on:click={createUserUtil.createUser}>Create</button>
      </form>
    </div>
  {/if}

  <ul>
    {#each data.users as user}
      <li>{user.name}</li>
    {/each}
  </ul>
</div>
