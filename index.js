addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname

  // Isi HTML dari tiap halaman (dari template Notion)
  const pages = {
    "/": `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Shopify Business Blueprint - Home</title>
  <!-- Tambahkan meta dan style yang diperlukan -->
</head>
<body>
  <!-- Isi lengkap dari halaman index.html -->
  <!-- Contoh singkat -->
  <h1>Shopify Business Blueprint</h1>
  <p>Welcome to the Shopify Business Blueprint Homepage.</p>
</body>
</html>
    `,
    "/1-planning": `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Planning - Shopify Blueprint</title>
  <!-- Style dan meta -->
</head>
<body>
  <!-- Isi lengkap planning.html -->
  <h1>Planning</h1>
  <p>Content for Planning step here...</p>
</body>
</html>
    `,
    "/2-framing": `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Framing - Shopify Blueprint</title>
</head>
<body>
  <!-- Isi lengkap framing.html -->
  <h1>Framing</h1>
  <p>Content for Framing step here...</p>
</body>
</html>
    `,
    "/3-building": `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Building - Shopify Blueprint</title>
</head>
<body>
  <!-- Isi lengkap building.html -->
  <h1>Building</h1>
  <p>Content for Building step here...</p>
</body>
</html>
    `
  }

  if (pages[path]) {
    return new Response(pages[path], {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    })
  } else {
    return new Response("Page not found", { status: 404 })
  }
}
