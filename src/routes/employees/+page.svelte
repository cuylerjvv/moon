<script>

  let employees = [];
  /**
   * @type {any[]}
   */
  let employees_displayed = [];
  let creating_new_employee = false;

  async function init() {
    await fetchEmployees();
  }

  async function fetchEmployees() {
    const res = await fetch("https://dummyjson.com/users?limit=10");
    const response_data = await res.json();
    employees = response_data.users;
    employees_displayed = employees;
  }

  const createEmployeeUtil = {
    openModal() {
      creating_new_employee = true;
    },

    closeModal() {
      creating_new_employee = false;
    },

    async createEmployee() {
      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Muhammad",
          lastName: "Ovi",
          age: 250,
          /* other user data */
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    },
  };

  init();
</script>

<div>
  <h1>Employees</h1>
  <a href="/home">home</a>

  <button on:click={createEmployeeUtil.openModal}>Create</button>

  {#if creating_new_employee}
    <div>
      <form method="POST">
        <label>
          First name
          <input name="first_name" type="text" />
        </label>
        <label>
          Surname
          <input name="surname" type="text" />
        </label>
        <button on:click={createEmployeeUtil.closeModal}>Close</button>
        <button on:click={createEmployeeUtil.createEmployee}>Create</button>
      </form>
    </div>
  {/if}

  <table>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Surname</th>
      </tr>
    </thead>
    <tbody>
      {#each employees_displayed as employee}
        <tr>
          <td>{employee.id}</td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
