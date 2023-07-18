import { formatTime, changeLengthUnit, changeSpeedUnit } from '../../../src/app/utils/common';

describe("formatTime", () => {
    it("formatTime function testing", () => {
        expect(formatTime(0, 19800)).toBe('5:30 AM');
        expect(formatTime(1980, 19800)).toBe('6:03 AM');
    });
});

describe("changeLengthUnit", () => {
    it("changeLengthUnit function testing", () => {
        expect(changeLengthUnit(10000)).toBe(10);
    });
});

describe("changeSpeedUnit", () => {
    it("changeSpeedUnit function testing", () => {
        expect(changeSpeedUnit(10)).toBe(36);
    });
});