import { Listener } from './Listener'

export type Subscribe = (eventName: string, listener: Listener) => () => void
