export default function checkConjuredAndReturnQualityChange(item, qualityChange) {
    if (item.name.startsWith("Conjured")) {
        qualityChange *= 2;
    }
    return qualityChange;
}