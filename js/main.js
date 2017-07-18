(function() {
    var initValue = {
        userCount: 100,
        startBallance: 10000,
        changePerStep: 100,
        stepCounts: 1000,
    }
    var peoples = [];
    var peoplesAVG = [];

    var rand = function(max) {
        return Math.floor(Math.random() * max);
    }

    var randExcludeNum = function(max, exclude) {
        var rnd = rand(max - 1);
        if (rnd >= exclude) { rnd++; }
        return rnd;

    }
    var makeChange = function() {
        var length = peoples.length;
        for (var i = 0; i < length; i++) {
            peoplesAVG[i] = 0;
        }
        for (var j = 0; j < initValue.stepCounts; j++) {
            for (var i = 0; i < length; i++) {
                var rnd = randExcludeNum(length, i);
                if ((peoples[i] - initValue.changePerStep) >= 0) {
                    peoples[i] -= initValue.changePerStep;
                    peoples[rnd] += initValue.changePerStep;
                } else {
                    peoples[rnd] += peoples[i];
                    peoples[i] = 0;
                }

            }
            for (var i = 0; i < length; i++) {
                peoplesAVG[i] = (peoplesAVG[i] * (j) + peoples[i]) / (j + 1);
            }
        }
    }

    var sortNumber = function(a, b) {
        return a - b;
    }
    var init = function() {

        for (var i = 0; i < initValue.userCount; i++) {
            peoples[i] = initValue.startBallance;
        }
        console.log(peoples);
        makeChange();


        console.log(peoples);
        console.log(peoplesAVG.sort(sortNumber));
        console.log(peoples.sort(sortNumber));


    }

    init();
})();