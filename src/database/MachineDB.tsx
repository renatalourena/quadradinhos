import {Machine, Roll} from '../service/MachineApi'

const roll1: Roll = {
  identification: "001",
  diameter: 1,
  hardness: 1,
  statusAlert: "Success"
}

const roll2: Roll = {
  identification: "002",
  diameter: 2,
  hardness: 2,
  statusAlert: "Danger"
}
const roll3: Roll = {
  identification: "003",
  diameter: 3,
  hardness: 3,
  statusAlert: "Warning"
}

export const machine1: Machine = {
  identification: "machine 1",
  rolls: [roll1, roll1, roll1, roll3, roll2,roll1, roll1, roll1, roll3, roll2,roll1, roll1, roll3, roll2]
}

export const machine2: Machine = {
  identification: "machine 2",
  rolls: [roll3]
}