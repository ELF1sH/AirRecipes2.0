import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import HeaderView from './HeaderView';
import { CombinedRef } from './types';
import { HeaderViewModel } from './HeaderViewModel';
import dims from './styles/Header.module.scss';

interface HeaderControllerProps {
  isFixed: boolean,
  viewModel: HeaderViewModel,
}

const HeaderController: React.FC<HeaderControllerProps> = ({ isFixed, viewModel }) => {
  const textFieldRef = useRef<HTMLInputElement | null>(null);
  const upperHeaderBgRef = useRef<HTMLDivElement | null>(null);
  const headerWrapperRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<CombinedRef>({ textFieldRef, upperHeaderBgRef, headerWrapperRef });

  const contentContainerRef = useRef<HTMLDivElement | null>(null);

  const inputMiddleY = useRef<number>(0);
  const rectTextField = useRef<DOMRect | null>(null);

  const prevTranslateY = useRef<string>('');

  const navigate = useNavigate();

  const { setNameFilter, applyFilters, contentContainer } = viewModel;

  const handleScroll = () => {
    if (!contentContainerRef.current) return;

    if (contentContainerRef.current.getBoundingClientRect().top < inputMiddleY.current) {
      upperHeaderBgRef.current!.style.display = 'block';
    } else {
      const diff = Math.abs(contentContainerRef.current.getBoundingClientRect().bottom
        - window.innerHeight);

      if (diff < 3) return;

      contentContainerRef.current.style.transform = `translateY(-${window.scrollY}px)`;
      upperHeaderBgRef.current!.style.display = 'none';
    }
  };

  const handleSearchFieldChange = (value: string) => {
    if (!value) {
      setNameFilter(value);

      (async () => {
        await applyFilters();
      })();
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && textFieldRef.current !== null) {
      setNameFilter(textFieldRef.current.value);

      (async () => {
        await applyFilters();
      })();

      navigate('/');
    }
  };

  useEffect(() => {
    contentContainerRef.current = contentContainer;

    if (contentContainerRef.current) {
      contentContainerRef.current.style.marginBottom = `-${headerWrapperRef.current!.getBoundingClientRect().height}px`;
    }
  }, [contentContainer]);

  useEffect(() => {
    rectTextField.current = textFieldRef.current?.getBoundingClientRect() ?? null;

    inputMiddleY.current = rectTextField.current
      ? rectTextField.current.top + rectTextField.current.height / 2
      : 0;

    upperHeaderBgRef.current!.style.height = `${inputMiddleY.current}px`;

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isModalOpened]);

  useEffect(() => {
    if (!contentContainerRef.current) return;

    if (isFixed) {
      prevTranslateY.current = contentContainerRef.current.style.transform;

      headerWrapperRef.current!.style.height = `${inputMiddleY.current}px`;
      contentContainerRef.current.style.transform = 'translateY(0px)';
    } else {
      headerWrapperRef.current!.style.height = dims.headerWrapperDefaultHeight;
      contentContainerRef.current.style.transform = prevTranslateY.current;
    }
  }, [isFixed, contentContainerRef.current]);

  return (
    <HeaderView
      ref={ref}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
      handleSearchFieldChange={handleSearchFieldChange}
    />
  );
};

export default observer(HeaderController);
