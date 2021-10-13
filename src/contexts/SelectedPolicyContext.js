import React, {Component, createContext} from 'react'

const SelectedPolicyContext = createContext()

export const SelectedPolicyProvider = SelectedPolicyContext.Provider
export const SelectedPolicyConsumer = SelectedPolicyContext.Consumer

export default SelectedPolicyContext