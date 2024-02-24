import { Children } from "react"
import ModalContextProvider, { ModalContext } from "./modal"
import Type from './type'

export { ModalContext };

export default function ContextProvider(props: Type.ContextProviderType) {
  const { children } = props;
  return(
    <ModalContextProvider>
      {children}
    </ModalContextProvider>
  )
}