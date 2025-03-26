"use client"
import { Userdata } from "@/interfaces/interfaces"
import React, { createContext, ReactNode, useContext } from "react"

const userData: Userdata = {
  name: 'Test name',
  profile: 'https://via.placeholder.com/100',
  title: '记忆暂留之地',
}

const AppContext = createContext<Userdata | undefined>(userData)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  
    return (
      <AppContext.Provider value={userData}>
        {children}
      </AppContext.Provider>
    )
  }

export function useUserData() {
const context = useContext(AppContext)
    if (!context) {
      throw new Error("useUserData must be used within an AppProvider")
    }
    
    return context
}