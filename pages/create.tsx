import { NextPage } from 'next';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import { PlusIcon } from '@heroicons/react/outline';

import CircularColor from '../components/CircularColor';
import DButton from '../components/primitives/Button/Button';
import { DSidebar } from '../components/primitives/Sidebar';
import styles from '../styles/Palette.module.scss';

type ColorMap = {
  id: string;
  hex: string;
};

const Create: NextPage = () => {
  const [colors, setColors] = useState<Array<ColorMap>>([]);
  const [pickerColor, setPickerColor] = useState('#ffffff00');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles['create']}>
      <div className={styles['create__container']}>
        <div className={styles['create__container__header']}>
          <h1>Create your palette</h1>
          <p>Click the templates below to assign colors to your palette</p>
        </div>
        <div className={styles['create__container__palette']}>
          {colors.map((color, index) => (
            <CircularColor
              key={index}
              background={color.hex}
              onAction={() => {
                setColors(() =>
                  colors.filter((currColor) => currColor.id !== color.id)
                );
              }}
            />
          ))}
          <CircularColor
            onClick={() => setSidebarOpen(true)}
            showAction={false}
            stroke="dashed"
          >
            <PlusIcon
              className={styles['create__container__palette__plus-icon']}
            />
          </CircularColor>
          <DSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            header={'Pick a color'}
          >
            <HexColorPicker
              color={pickerColor}
              onChange={setPickerColor}
              style={{ width: '100%', height: '256px' }}
            />

            <DButton variant="text">Cancel</DButton>
            <DButton>Add color</DButton>
          </DSidebar>
        </div>
      </div>
    </div>
  );
};

export default Create;
