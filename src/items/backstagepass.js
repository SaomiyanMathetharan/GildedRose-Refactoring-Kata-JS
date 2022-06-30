export default function qualityAmountToChange(item) {
    let qualityChange = -1;
    if (item.sellIn < 0) {
        qualityChange *= 2;
    }
    return qualityChange;
}