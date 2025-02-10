import { clsx, type ClassValue } from "clsx"
// fazer variaveis, mudancas de cor com mudancas de valor por ex
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  // junta as duas bibliotecas e consegue resolver problemas de classe - prioriza a ultima (tipo usar !important)
  return twMerge(clsx(inputs))
}


