export default class Team {
    constructor() {
        this.members = [{
            name: 'Mage',
            type: 'Magician',
            health: 100,
            lavel: 1,
            attack: 10,
            defence: 40
        },
        {
            name: 'Swordman',
            type: 'Swordsman',
            health: 100,
            lavel: 1,
            attack: 40,
            defence: 10
        },
        {
            name: 'Deadman',
            type: 'Undead',
            health: 100,
            lavel: 1,
            attack: 25,
            defence: 25
        },
        {
            name: 'Mr.Zombie',
            type: 'Zombie',
            health: 100,
            lavel: 1,
            attack: 40,
            defence: 10
        },
        {
            name: 'Bowman',
            type: 'Bowerman',
            health: 100,
            lavel: 1,
            attack: 25,
            defence: 25
        }];
        this.membersCount = 5
     }
    *[Symbol.iterator]() {
        yield this.members[0];
        yield this.members[1];
        yield this.members[2];
        yield this.members[3];
        yield this.members[4];
        // это генератор
        // и здесь есть доступ к this
        // остаётся лишь правильно написать yield
    }
}
