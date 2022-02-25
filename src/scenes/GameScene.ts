export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload(): void {
        // アセットのロード処理
    }

    create(): void {
        this.add.text(440, 270, 'テンプレート');
    }

    update(): void {
        // 毎フレーム更新処理
    }
}
