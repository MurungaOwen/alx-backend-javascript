const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
      assert.strictEqual(calculateNumber(1, 3), 4); // 1 + 3 = 4
    });
  
    it('should handle floats numbers correctly', function() {
      assert.strictEqual(calculateNumber(1, 3.7), 5); // 1 + 4 = 5
    });
  
    it('should handle 2 floats correctly', function() {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5); // 1 + 4 = 5
    });

    it('should handle 2 floats that are over .5 well', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    })

  });
