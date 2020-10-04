export const gridKeys: string[] = ('col,xs,sm,md,lg,xl,xxl').split(',')
export const gridValues: string[] = ('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24').split(',')
export const fontSizes: string[] = ('9,10,11,12,13,14,15,16,17,18,24,32,48,64,72').split(',')
export const boxSize: string[] = ('mini,small,medium,big,large,huge').split(',')
export const direction: string[] = ('top,right,bottom,left,horizontal,vertical').split(',')
export const zeroToThirty: string[] = ('0,5,10,15,20,25,30').split(',') // padding, margin default values
export const oneToFour: string[] = ('1,2,3,4').split(',')
export const elements: string[] = ('input,h1,h2,h3,h4,h5,h6,p,nav,label,header,footer,button,btn,a,ul,ol,li,span,section,address').split(',')
export const colorsValues: any = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#fff',
  transparent: 'transparent'
}
export const colors: string[] = Object.keys(colorsValues).map((color: string) => `-${color}`)
export const rmeConfig: any = {
  colors: {} as any
}