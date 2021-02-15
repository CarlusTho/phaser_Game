import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }

    init(){
        this.ducksShot = 0
    }

    preload()
    {
        this.load.image('background', 'assets/bg_wood.png')
        this.load.image('duck', 'assets/duck_target_brown.png')
        this.load.image('rifle', 'assets/rifle.png')
    }

    create()
    {
        this.add.image(0, 0, 'background')
            .setScale(1)

        this.add.sprite(340, 320, 'rifle')
            .setScale(0.4)

        const ducks = this.physics.add.staticGroup()

        for (let i = 0; i<3;++i)
        {
            const x = 100 + 150 * i //Phaser.Math.Between(80, 400) pour de l'aléatoire
            const y = 50

            /** @type {Phaser.Physics.Arcade.Sprite} */
            const duck = ducks.create(x, y, 'duck')

            /** @type {Phaser.Physics.Arcade.StaticBody}*/
            const body = duck.body
            body.updateFromGameObject()

            this.physics.add.collider(duck)
        }
    }

    update()
    {
        /*const touche = this.duck.body.touching ||

        if (touche)
        {
            this.duck.setVelocityY(-300)
        }*/
    }
}