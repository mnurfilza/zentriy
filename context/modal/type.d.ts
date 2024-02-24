export type ModalContextType = {
  modal: null, 
  setModal: (modal: any) => void,
  setOverlay: (overlay: any) => void,
}

export type ModalContextProviderType = {
  children: node
}