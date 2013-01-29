enchant();
var picNumber = 0;
window.onload = function() {
    var game = new Game(320, 480);
    game.preload('http://enchantjs.com/assets/images/chara1.gif');
    game.onload = function() {
        var bgSprite = new Sprite(320, 480); //背景画像となるスプライト
        var bgSurface = new Surface(320, 480); //スプライトの画像データ 
        var bear = new Sprite(32,32);
        bear.x = 50;
        bear.y = 80;
        bear.scaleX = 5;
        bear.scaleY = 5;
        bear.image = game.assets['http://enchantjs.com/assets/images/chara1.gif'];
        bear.frame = 0;
        bear.addEventListener(Event.ENTER_FRAME, function() {
            picNumber++;
            if (picNumber > 2) {
                picNumber = 1;
            }
            bear.frame = picNumber;
            bear.x += 1;
            
        });
        game.rootScene.addChild(bear);
    };
    game.start();
};