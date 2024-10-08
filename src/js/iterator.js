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
    
    [Symbol.iterator](){
        let i =  this.members;
        let index =  -1
        const to = this.membersCount
    return {
        next() {
            index ++
            if (index >= to) {
                return {
                    value: undefined,
                    done: true
                }
            }
            return {
                value: i[index],
                done: false
            }
            
        }
    }  
    }
}