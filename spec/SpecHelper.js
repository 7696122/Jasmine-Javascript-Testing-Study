beforeEach(function () {
  // jasmine.expect.expand({
  //   toBeABedInvestment(received) {
  //     const pass = received.isGood();
  //     if (pass) {
  //       return {
  //         pass: true,
  //         message: ``,
  //       };
  //     } else {
  //       return {
  //         pass: false,
  //         message: ``,
  //       };
  //     }
  //   },
  // });

  jasmine.addMatchers({
    toBeAGoodInvestment: function () {
      return {
        compare: function (actual, isNot) {
          const investment = actual;
          let what = isNot ? "bad" : "good";
          return {
            pass: investment.isGood(),
            message: `Expected investment to be a ${what} investment`,
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
