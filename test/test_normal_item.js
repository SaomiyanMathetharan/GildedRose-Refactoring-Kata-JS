import {expect} from 'chai';
import {Shop, Item} from '../src/gilded_rose.js';
describe("Normal item", function() {

    it("should decrease in quality by one if before sell-by date", function() {
        const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it("should decrease in quality by two if after sell-by date", function() {
        const gildedRose = new Shop([ new Item("foo", -4, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it("should not have its quality go below 0", function() {
        const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it("should decrease sellin value by 1 when updateQuality called", function() {
        const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
    });

});
