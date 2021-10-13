import React, {createContext} from 'react'

const LoadingContext = createContext()

export const LoadingProvider = LoadingContext.Provider
export const LoadingConsumer = LoadingContext.Consumer

export default LoadingContext