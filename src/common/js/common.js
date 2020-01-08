import React from  'react'
 const  globalContext={
     name:'全局context'
}
export const wrapContext=React.createContext(globalContext.name)
//
