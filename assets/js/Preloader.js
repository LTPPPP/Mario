function Preloader() {
  var view = View.getInstance();

  var loadingPercentage;

  var imageSources;
  var soundSources;

  var that = this;

  this.init = function () {
    loadingPercentage = view.create("div");

    view.addClass(loadingPercentage, "loading-percentage");
    view.setHTML(loadingPercentage, "0%");
    view.appendToBody(loadingPercentage);

    imageSources = {
      1: "assets/images/back-btn.png",
      2: "assets/images/bg.png",
      3: "assets/images/bullet.png",
      4: "assets/images/clear-map-btn.png",
      5: "assets/images/coin.png",
      6: "assets/images/delete-all-btn.png",
      7: "assets/images/editor-btn.png",
      8: "assets/images/elements.png",
      9: "assets/images/enemies.png",
      10: "assets/images/flag-pole.png",
      11: "assets/images/flag.png",
      12: "assets/images/start-screen.png",
      13: "assets/images/grid-large-btn.png",
      14: "assets/images/grid-medium-btn.png",
      15: "assets/images/grid-small-btn.png",
      16: "assets/images/grid.png",
      17: "assets/images/lvl-size.png",
      18: "assets/images/mario-head.png",
      19: "assets/images/mario-sprites.png",
      20: "assets/images/powerups.png",
      21: "assets/images/save-map-btn.png",
      22: "assets/images/saved-btn.png",
      23: "assets/images/slider-left.png",
      24: "assets/images/slider-right.png",
      25: "assets/images/start-btn.png",
    };

    that.loadImages(imageSources);
  };

  this.loadImages = function (imageSources) {
    var images = {};
    var loadedImages = 0;
    var totalImages = 0;

    for (var key in imageSources) {
      totalImages++;
    }

    for (var key in imageSources) {
      images[key] = new Image();
      images[key].src = imageSources[key];

      images[key].onload = function () {
        loadedImages++;
        percentage = Math.floor((loadedImages * 100) / totalImages);

        view.setHTML(loadingPercentage, percentage + "%"); //displaying percentage

        if (loadedImages >= totalImages) {
          view.removeFromBody(loadingPercentage);
          that.initMainApp();
        }
      };
    }
  };

  this.initMainApp = function () {
    var marioMakerInstance = MarioMaker.getInstance();
    marioMakerInstance.init();
  };
}

window.onload = function () {
  var preloader = new Preloader();
  preloader.init();
};
