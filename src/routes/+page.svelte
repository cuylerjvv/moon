<script>
    export let data;

</script>

<div>
    <a href="/home">Home</a>
    {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</div>