import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export async function onRequest(context) {
  try {
    return await getAssetFromKV(context);
  } catch (e) {
    return new Response('Not Found', { status: 404 });
  }
}
