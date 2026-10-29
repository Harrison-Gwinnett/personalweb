export const birthDate = '1998-06-21'

// Bump for substantive profile edits, rather than builds or automatic age updates.
export const profileUpdated = '2026-10-29T06:42:43Z'

export function getAge(today = new Date()) {
  const birth = new Date(birthDate)
  const birthdayThisYear = Date.UTC(today.getUTCFullYear(), birth.getUTCMonth(), birth.getUTCDate())
  return today.getUTCFullYear() - birth.getUTCFullYear() - (today.getTime() < birthdayThisYear ? 1 : 0)
}
