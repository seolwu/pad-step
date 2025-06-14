export default function ps(...args: (string | number)[]): string | null {
  if (args.length % 2 !== 0) {
    console.error('Error: Arguments must be in (string, number) pairs.')
    return null
  }

  for (let i = 0; i < args.length; i += 2) {
    if (typeof args[i] !== 'string' || typeof args[i + 1] !== 'number') {
      console.error(`Error: Argument pair at index ${i} must be (string, number).`)
      return null
    }
  }

  let output = ''
  for (let i = 0; i < args.length; i += 2) {
    const text = args[i] as string
    const pad = args[i + 1] as number

    if (pad > 0) {
      output += text.padEnd(pad)
    } else if (pad < 0) {
      output += text.padStart(-pad)
    } else {
      output += text
    }
  }

  return output
}

export function psp(...args: (string | number)[]): void {
  const output = ps(...args)

  if (output) {
    console.log(output)
  }
}
