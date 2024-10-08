import Team from '../iterator'
const party = new Team ()
const it = party[Symbol.iterator]()
test.each([
    ["Первый персонаж", {
        value: {
            name: 'Mage',
            type: 'Magician',
            health: 100,
            lavel: 1,
            attack: 10,
            defence: 40
        },
        done: false
    }],
    ['Второй персонаж', {
        value: {
            name: 'Swordman',
            type: 'Swordsman',
            health: 100,
            lavel: 1,
            attack: 40,
            defence: 10
        },
        done: false
    }],
    ["Третий персонаж", {
        value: {
            name: 'Deadman',
            type: 'Undead',
            health: 100,
            lavel: 1,
            attack: 25,
            defence: 25
        },
        done: false
    }],
    ['Четвертый персонаж', {
        value: {
            name: 'Mr.Zombie',
            type: 'Zombie',
            health: 100,
            lavel: 1,
            attack: 40,
            defence: 10
        },
        done: false
    }],
    ["Пятый персонаж", {
        value: {
            name: 'Bowman',
            type: 'Bowerman',
            health: 100,
            lavel: 1,
            attack: 25,
            defence: 25
        },
        done: false
    }],
    ['Шестой персонаж', {
        value: undefined,
        done: true
    }],
  ])('%s', (msg, value) => {
        expect(it.next()).toMatchObject(value)
  })
  