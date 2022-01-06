import {machine1, machine2} from '../database/MachineDB'

export type Roll = {
  identification: string
  diameter: number
  hardness: number
  statusAlert: StatusAlert

}

export type Machine = {
  identification: string
  rolls: Roll[]
}

type StatusAlert = "Success" | "Danger" | "Warning"

export const getAllMachines = (): Machine[] => {
  return [machine1, machine2]
}