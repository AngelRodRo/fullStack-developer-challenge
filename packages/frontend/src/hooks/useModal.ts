import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isModalVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(() => !isModalVisible);
  }, [isModalVisible, setIsVisible]);

  const hideModal = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const showModal = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  return {
    isModalVisible,
    showModal,
    toggleVisibility,
    hideModal,
  };
};
