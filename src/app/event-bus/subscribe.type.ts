import { Listener } from './listener.type'

export type Subscribe = (eventName: string, listener: Listener) => () => void
