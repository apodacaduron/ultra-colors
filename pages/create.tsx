import { NextPage } from 'next';
import { InputHTMLAttributes, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import { PlusIcon } from '@heroicons/react/outline';

import CircularColor from '../components/CircularColor';
import TopToolbar from '../components/create/TopToolbar';
import DButton from '../components/primitives/Button/Button';
import { DCheckbox, DInput, DLabel } from '../components/primitives/Input';
import DFormRow from '../components/primitives/Input/FormRow';
import { DSidebar } from '../components/primitives/Sidebar';
import styles from '../styles/Create.module.scss';

type ColorMap = {
  id: string;
  hex: string;
};

const Create: NextPage = () => {
  const [colors, setColors] = useState<Array<ColorMap>>([]);
  const [pickerColor, setPickerColor] = useState('#ffffff');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [keepSidebarOpen, setKeepSidebarOpen] = useState(false);

  function pushColorToList() {
    setColors((state) => [
      ...state,
      { id: Date.now().toString(), hex: pickerColor },
    ]);
    if (!keepSidebarOpen) setSidebarOpen(false);
  }

  return (
    <div className={styles['create']}>
      <TopToolbar right={<DButton>Create</DButton>} />
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
            <div className="mt-6">
              <DFormRow gap="8px" flexDirection="column">
                <DLabel htmlFor="hex-color">Hex color</DLabel>
                <DInput
                  id="hex-color"
                  value={pickerColor}
                  onChange={(event) => setPickerColor(event.target.value)}
                />
              </DFormRow>
            </div>
            <div className="mt-6">
              <DFormRow gap="8px">
                <DCheckbox
                  id="keep-sidebar-open"
                  checked={keepSidebarOpen}
                  onChange={(event) => setKeepSidebarOpen(event.target.checked)}
                />
                <DLabel htmlFor="keep-sidebar-open">Keep sidebar open</DLabel>
              </DFormRow>
            </div>
            <div className="mt-6 flex justify-end">
              <DButton variant="text" onClick={() => setSidebarOpen(false)}>
                Close
              </DButton>
              <DButton onClick={pushColorToList}>Add color</DButton>
            </div>
          </DSidebar>
        </div>
      </div>
    </div>
  );
};

export default Create;
