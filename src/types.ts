export type country = {
  iso: string,
  name: string,
  localizedNames: {
    en: string
  }
}

export type university = {
  domains: Array<string>,
  web_pages: Array<string>,
  alpha_two_code: string,
  country: string,
  name: string
}