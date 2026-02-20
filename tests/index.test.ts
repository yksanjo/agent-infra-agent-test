import { describe, it } from 'node:test';
import assert from 'node:assert';
import { AgentTest } from '../src/index.js';

describe('AgentTest', () => {
  it('should initialize', async () => {
    const instance = new AgentTest();
    await instance.initialize();
    assert.ok(instance);
  });

  it('should execute successfully', async () => {
    const instance = new AgentTest();
    const result = await instance.execute({ test: 'data' });
    assert.strictEqual(result.success, true);
  });
});
