// Generated by CoffeeScript 1.7.1
(function() {
  exports.getEditDistance = function(a, b) {
    var i, j, matrix, _i, _j, _k, _l, _ref, _ref1, _ref2, _ref3;
    if (a.length === 0) {
      return b.length;
    }
    if (b.length === 0) {
      return a.length;
    }
    matrix = [];
    for (i = _i = 0, _ref = b.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      matrix[i] = [i];
    }
    for (j = _j = 0, _ref1 = a.length; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; j = 0 <= _ref1 ? ++_j : --_j) {
      matrix[0][j] = j;
    }
    for (i = _k = i, _ref2 = b.length; i <= _ref2 ? _k <= _ref2 : _k >= _ref2; i = i <= _ref2 ? ++_k : --_k) {
      for (j = _l = j, _ref3 = a.length; j <= _ref3 ? _l <= _ref3 : _l >= _ref3; j = j <= _ref3 ? ++_l : --_l) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 2, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
        }
      }
    }
    return matrix[b.length][a.length];
  };

}).call(this);
