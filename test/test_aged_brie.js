import {expect} from 'chai';
import {Shop, Item} from '../src/gilded_rose.js';
describe("Aged Brie", function() {

    it("should increase in quality by one if before sell-by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(2);
    });

    it("should increase in quality by two if after sell-by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(3);
    });

    it("should not have its quality go above 50 if increased by 1", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it("should not have its quality go above 50 if increased by 2", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", -1, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it("should decrease sellin value by 1 when updateQuality called", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", -1, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-2);
    });

});