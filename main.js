import DesktopScene from './scenes/DesktopScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x222222,
    parent: 'game',
    scene: [DesktopScene],
};

const game = new Phaser.Game(config);