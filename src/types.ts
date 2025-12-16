export type countries = Array<countries>

export type country = {
  key: string,
  text: string,
  value: string,
  iso: string,
  name: string,
  localizedNames: {
    en: string
  }
}