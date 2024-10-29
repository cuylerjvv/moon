<script>
  // @ts-nocheck
  // import Logo1 from "../../lib/assets/wl_01.jpg";
  // import Logo2 from "../../lib/assets/wl_02.jpg";

  //Pagination variables
  let current = 1;
  let num_items = 30;
  let per_page = 10;

  let search_string = "";
  let products = [];
  let products_displayed = [];

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const response_data = await res.json();
    products = response_data.products;
    products_displayed = products;
  }

  fetchProducts();

  function searchProducts() {
    products_displayed = products.filter(product => product.title.includes(search_string.toLocaleLowerCase()));
    console.log(JSON.stringify(products_displayed, null, 2));
  }
</script>

<div class="flex justify-center">
  <div class="max-w-md index">
    <!-- <img alt="WL Logo" src={Logo2} /> -->

    <div class="max-w-md">
      <input
        class="w-[70%] my-4 p-2 pl-2 pr-12 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-800 transition w-80"
        type="text"
        placeholder="Search"
        bind:value={search_string}
      />

      <button
        class="space-y-4 p-4 px-6 py-2 rounded-lg border border-gray-300 bg-gray-800 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        on:click={searchProducts}>Search</button
      >
    </div>

    <div class="max-w-md flex px-4 justify-between">
      <div>
        <button>Filter</button>
      </div>
      <div>
        <button>Sort</button>
      </div>
    </div>

    <div class="max-w-md">
      <ul
        role="list"
        class="space-y-4 p-4 sm:p-6 md:p-8 divide-y divide-gray-100"
      >
        {#each products_displayed as product (product.id)}
          <li class="flex justify-between gap-x-6 py-1">
            <div class="flex min-w-0 gap-x-4">
              <div class="min-w-0 flex-auto pl-2">
                <p
                  class="text-left text-sm font-semibold leading-6 text-gray-900"
                >
                  {product.title}
                </p>
              </div>
            </div>
            <div class="min-w-32 sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">
                {product.discountPercentage} | {product.price}
              </p>
            </div>
          </li>
        {/each}
      </ul>
    </div>
    <div>
    <a href="/home">Home</a>
    </div>
  </div>
</div>

<style>
  .index {
    text-align: center;
    display: block;
    text-align: center;
  }
</style>
