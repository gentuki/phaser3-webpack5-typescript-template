export class GameScene extends Phaser.Scene
{
	constructor() {
		super({ key: 'GameScene' })
	}

    preload(): void {
    }

    create(): void {
       this.add.text(440, 270, 'テンプレート')
    }

    update(): void {
    }

}