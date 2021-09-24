beforeEach(function () {
  jasmine.addMatchers({
    toBeAGoodInvestment: function () {
      return {
        compare: function (actual, expected) {
          const investment = actual;
          return {
            pass: investment.isGood(),
          };
        },
      };
    },
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying,
          };
        },
      };
    },
  });
});
