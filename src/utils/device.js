export function isTouchDevice() {
    return typeof window !== 'undefined' && 'ontouchstart' in window 
}
