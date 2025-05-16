import { getAssetFromKV };

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    return new Response('Not Found', { status: 404 });
  }
}
