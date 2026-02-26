const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: "l6h37b29",
  dataset: "production",
  apiVersion: "2024-02-25",
  useCdn: false,
  token:
    "sky0OsPWqUUUORGIFyNuq8shWoTDgLosWHEdic3LapmqrHrCVw1LwTMSVxGY5JRuVOeaIcDBEhP9Y5sylVpKtrz1gS6Noo6e8cG8S0ZuNnKHdH43VFAATiffuFEVXCCmJcIi3U5DHawcO4o5iSCZtZuMpUabUgXeiyzPiOHEYRpCC0gISCxT",
});

async function run() {
  const data = await client.fetch('*[_type == "works"]');
  console.log("Found works:", data.length);
  if (data.length > 0) {
    console.log("Sample:", data[0]);
  } else {
    const allTypes = await client.fetch("array::unique(*[]._type)");
    console.log("Available Types in Dataset:", allTypes);
  }
}

run().catch(console.error);
