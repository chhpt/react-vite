import { createState, useState } from '@hookstate/core'

/**
 * global state
 */
const global = createState({})

export const useGlobalState = () => useState(global)
