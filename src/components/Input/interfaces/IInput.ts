export interface IInput {
  name: string
  value: string
  customClass?: string
  placeholder: string
  iconLeft?: string
  iconRight?: string
  onChange: () => void
}
