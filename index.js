// Your code here
const saturdayFun = (something = 'roller-skate') => (
  `This Saturday, I want to ${something}!`
)

const mondayWork = (activity = 'go to the office') => (
  `This Monday, I will ${activity}.`
)

const wrapAdjective = (flair = '*') => (
  (msg="special") => ( 
    `You are ${flair}${msg}${flair}!`
  )
)

const Calculator = {
  add: (x, y) => (
    x + y
  ),
  subtract: (a, b) => (
    a - b
  ),
  multiply: (m, n) => (
    m * n
  ),
  divide: (grizzly, adams) => (
    grizzly / adams
  )
};

const actionApplyer = (integer, actions) => {
    actions.forEach(func => {
        integer = func(integer)
    })
  return integer
}
