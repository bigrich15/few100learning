
export function formatName(first: string, last: string, fn: any) {
    return fn(`${last}, ${first}`);
}

export function roundToTwoPlaces(amount: number) {
    return Math.round((amount * 1.3) * 100) / 100
} 