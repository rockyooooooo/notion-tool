export type TypeBarPropsType = {
  progressLength: string
  startChar: string
  endChar: string
  doneChar: string
  currentValueName: string
  totalValueName: string
  isShowNumber: boolean
  isFullBar?: boolean
}

export type TYPE_OPTIONS_MAP_TYPE = {
  [key: string]: {
    label: string
    value: string
  }
}
