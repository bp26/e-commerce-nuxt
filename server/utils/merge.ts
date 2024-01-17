export type TypedObject = {
  [key: string]: any
}

export const merge = <T extends TypedObject, S extends TypedObject>(target: T, source: S) => {
  const result = { ...target, ...source }
  for (const key of Object.keys(result)) {
    result[key as keyof typeof result] =
      typeof target[key] === 'object' && typeof source[key] === 'object'
        ? merge(target[key], source[key])
        : structuredClone(result[key])
  }
  return result
}

export default merge
