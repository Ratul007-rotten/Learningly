import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const ClassesContext = createContext();

// 2. Proveedor del contexto
export function ClassesProvider({ children }) {
  const [myClasses, setMyClasses] = useState([]);

  const joinClass = (classData) => {
    // Evitar duplicados
    if (!myClasses.find(c => c.id === classData.id)) {
      setMyClasses([...myClasses, classData]);
    }
  };

  return (
    <ClassesContext.Provider value={{ myClasses, joinClass }}>
      {children}
    </ClassesContext.Provider>
  );
}

// 3. Hook para consumir el contexto
export function useClasses() {
  return useContext(ClassesContext);
}
