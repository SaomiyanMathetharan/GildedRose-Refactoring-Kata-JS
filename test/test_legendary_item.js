import {expect} from 'chai';
import {Shop, Item} from '../src/gilded_rose.js';
describe("Legendary item", function() {

    it("shouldn't decrease in quality", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(1);
    });

    it("shouldn't decrease sellIn value", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(1);
    });

});