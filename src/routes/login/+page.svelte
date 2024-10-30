<script>
  import { supabase } from '$lib/supabaseClient.ts';
  let creating_new_user = false;

  // export let data;
  // console.log(JSON.stringify(data.users, null, 2));

  const createUserUtil = {
    openModal() {
      creating_new_user = true;
    },

    closeModal() {
      creating_new_user = false;
    },

    // async createUser() {

    // },
  };
</script>

<div>
  <p>Login page</p>
  <a href="/home">Home</a>

  <button on:click={createUserUtil.openModal}>Create user</button>

  {#if creating_new_user}
    <div>
      <form method="POST" >
        <label>
          Name
          <input id="name" name="name" type="text" />
        </label>
        <label>
          Surname
          <input id="surname" name="surname" type="text" />
        </label>
        <!-- <button on:click={createUserUtil.createUser}>Create</button> -->
        <button type="submit" formaction="?/login">Create</button>
        <button formaction="?/close">Close</button>
      </form>
    </div>
  {/if}

  <ul>
    <!-- {#each data.users as user}
      <li>{user.name}</li>
      <li>{user.surname}</li>
      <li>{user.created_at}</li>
    {/each} -->
  </ul>
</div>
