export function getHistoryPosition(
  sectionStarts: readonly number[],
  scrollTop: number,
  viewportHeight: number,
  documentHeight: number,
) {
  const readingOffset = 48
  const lastReadingPosition = Math.max(0, documentHeight - viewportHeight) + readingOffset
  const readingPosition = Math.min(lastReadingPosition, Math.max(0, scrollTop) + readingOffset)
  // The last heading can sit below the sticky offset when its section is shorter than the viewport.
  const starts = sectionStarts.map((start) => Math.min(start, lastReadingPosition))
  let index = 0

  while (index + 1 < starts.length && readingPosition >= starts[index + 1]) index += 1

  const progress = index + 1 < starts.length
    ? Math.min(1, Math.max(0, (readingPosition - starts[index]) / Math.max(1, starts[index + 1] - starts[index])))
    : 0

  return { index, progress }
}
