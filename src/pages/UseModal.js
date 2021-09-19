import React from 'react'
import { ModalContext } from '../context/ModalContext';

export default function UseModal() {
  return (
    <div>
      <Component />
    </div>
  )
}


const Component = () => {
  let { handleModal } = React.useContext(ModalContext);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quidem
        asperiores?
      </p>
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() => handleModal("This is component modal content")}
      >
        open this modal!
      </button>
    </>
  );
};
