import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Type from './type';

export const ModalContext = createContext<Type.ModalContextType>({
  modal: null,
  setModal: () => {},
  setOverlay: () => {} 
});

export default function ModalContextProvider(props: Type.ModalContextProviderType) {
  const { children } = props;
  const { pathname } = useRouter();
  const [modal, setModal] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const value = { modal, setModal, setOverlay };

  const closeModal = (e: React.FormEvent) => {
    (e.target === e.currentTarget) && setModal(null);
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    modal ? body.classList.add('modal-open') : body.classList.remove('modal-open');
  }, [modal]);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.scrollTo(0, 0);
    setModal(null);
  }, [pathname]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <div className="modal" onClick={closeModal}>{modal}</div>
      {overlay && <div className='overlay' />}
    </ModalContext.Provider>
  );
}
