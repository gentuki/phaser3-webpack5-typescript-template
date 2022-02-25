import * as Phaser from 'phaser';
import { SCENES } from './scenes';

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;

const config: Phaser.Types.Core.GameConfig = {
    title: 'マイゲーム',
    type: Phaser.AUTO,
    backgroundColor: '#48C4F8',
    pixelArt: true,
    scale: {
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
    },
    scene: SCENES,
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: false,
        },
    },
};

export const game: Phaser.Game = new Phaser.Game(config);
