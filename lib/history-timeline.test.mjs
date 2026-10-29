import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getHistoryPosition } from './history-timeline.ts'

const starts = [400, 800, 1600, 2400, 2900]
const position = (scrollTop) => getHistoryPosition(starts, scrollTop, 900, 3700)

test('tracks actual section boundaries and unequal section lengths', () => {
  assert.deepEqual(position(0), { index: 0, progress: 0 })
  assert.deepEqual(position(552), { index: 0, progress: 0.5 })
  assert.deepEqual(position(752), { index: 1, progress: 0 })
  assert.deepEqual(position(1152), { index: 1, progress: 0.5 })
  assert.deepEqual(position(2352), { index: 3, progress: 0 })
})

test('reaches the last year smoothly even when its heading cannot reach the sticky offset', () => {
  assert.deepEqual(position(2800), { index: 4, progress: 0 })
  const beforeBottom = position(2799)
  assert.equal(beforeBottom.index, 3)
  assert.ok(beforeBottom.progress > 0.99 && beforeBottom.progress < 1)
})

test('tracks back up and clamps overscroll', () => {
  assert.deepEqual(position(2800), { index: 4, progress: 0 })
  assert.deepEqual(position(1152), { index: 1, progress: 0.5 })
  assert.deepEqual(position(-100), { index: 0, progress: 0 })
  assert.deepEqual(position(5000), { index: 4, progress: 0 })
})

test('handles a single chapter and several short chapters at the end without invalid progress', () => {
  assert.deepEqual(getHistoryPosition([400], 800, 900, 1400), { index: 0, progress: 0 })
  assert.deepEqual(getHistoryPosition(starts, 1500, 2200, 3700), { index: 4, progress: 0 })
})
