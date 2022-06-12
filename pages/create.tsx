import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import toast from 'react-hot-toast';
import { useLocalStorage } from 'react-use';
import ShortUniqueId from 'short-unique-id';

import { PlusIcon } from '@heroicons/react/outline';

import CircularColor from '../components/CircularColor';
import TopToolbar from '../components/create/TopToolbar';
import DButton from '../components/primitives/Button/Button';
import { DCheckbox, DInput, DLabel } from '../components/primitives/Input';
import DFormRow from '../components/primitives/Input/FormRow';
import { DSidebar } from '../components/primitives/Sidebar';
import { usePosts } from '../lib/usePosts';
import styles from '../styles/Create.module.scss';

type ColorMap = {
  id: string;
  hex: string;
  index: number;
};

const Create: NextPage = () => {
  const COLORS_LIMIT = 10;
  const [keepSidebarOpen, setKeepSidebarOpen] = useLocalStorage<boolean>(
    'keep-sidebar-open',
    false
  );
  const [colors, setColors] = useState<Array<ColorMap>>([]);
  const [pickerColor, setPickerColor] = useState('#ffffff');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { createPostCF } = usePosts();
  const uid = new ShortUniqueId({ length: 10 });

  function pushColorToList() {
    if (colors?.length >= COLORS_LIMIT) {
      return toast.error('You can only select up to 10 colors per palette');
    }
    setColors([
      ...colors,
      { id: uid(), hex: pickerColor, index: colors.length + 1 },
    ]);
    if (!keepSidebarOpen) setSidebarOpen(false);
  }

  function toggleKeepSidebarOpen(event: ChangeEvent<HTMLInputElement>) {
    setKeepSidebarOpen(event.target.checked);
  }

  function createColorPalette() {
    if (!colors.length) {
      return toast.error('Please add at least one color palette');
    }
    createPostCF(colors);
  }

  return (
    <div className={styles['create']}>
      <TopToolbar
        right={<DButton onClick={createColorPalette}>Create</DButton>}
      />
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
          {colors.length < COLORS_LIMIT && (
            <CircularColor
              onClick={() => setSidebarOpen(true)}
              showAction={false}
              stroke="dashed"
            >
              <PlusIcon
                className={styles['create__container__palette__plus-icon']}
              />
            </CircularColor>
          )}
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
                  onChange={toggleKeepSidebarOpen}
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
