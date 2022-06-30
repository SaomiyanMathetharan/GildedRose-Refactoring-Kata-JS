import {expect} from 'chai';
import {Shop, Item} from '../src/gilded_rose.js';
describe("Backstage pass", function() {

    it("should increase in quality by 1 when sellIn > 10", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(2);
    });

    it("should increase in quality by 2 when 5 < sellIn <= 10", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(3);
    });

    it("should increase in quality by 2 when 0 < sellIn <= 5", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(4);
    });

    it("should reduce quality to 0 when sellIn <= 0", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 23) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it("should not have its quality go above 50", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it("should decrease sellIn value by 1 when updateQuality called", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
    });

});