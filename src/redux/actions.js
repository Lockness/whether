
export const CALL_WHETHER = 'CALL_WHETHER';

export const callWhether = (origin, destination) => {
  return {
    type: CALL_WHETHER,
    origin,
    destination
  }
}
