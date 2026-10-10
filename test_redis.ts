import { setCache, getCache } from './src/shared/redis.service.js';
import { connectRedis, disconnectRedis } from './src/shared/redis.service.js';

async function test() {
  await connectRedis();
  await setCache('test_key', '1234', 2);
  console.log('Set test_key to 1234 with EX 2');
  const val1 = await getCache('test_key');
  console.log('Immediate get:', val1);
  await new Promise(r => setTimeout(r, 2500));
  const val2 = await getCache('test_key');
  console.log('After 2.5s get:', val2);
  await disconnectRedis();
}
test().catch(console.error);
