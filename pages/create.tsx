import { NextPage } from 'next';
import { EditText } from 'react-edit-text';
import styles from '../styles/Palette.module.scss';
import { PencilIcon, PlusIcon } from '@heroicons/react/outline';
import CircularColor from '../components/CircularColor';
import { useRef, useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import { usePopper } from 'react-popper';
import { useClickAway } from 'react-use';

const Create: NextPage = () => {
  const [colors, setColors] = useState<Array<string>>([]);
  const [pickerColor, setPickerColor] = useState<ColorResult['hex']>('#ffffff');
  const [pickerOpen, setPickerOpen] = useState(false);
  const popperElement = useRef(null);
  const referenceElement = useRef(null);
  useClickAway(popperElement, () => {
    setPickerOpen(false);
  });
  const { styles: popperStyles, attributes, update } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      placement: 'bottom',
    }
  );
  const openColorPicker = async () => {
    setPickerOpen(!pickerOpen);
    await update?.();
  };

  return (
    <div className={styles['create']}>
      <div className={styles['create__container']}>
        <div className={styles['create__container__header']}>
          <h1>Create your palette</h1>
          <p>Click the templates below to assign colors to your palette</p>
        </div>
        <div className={`${styles['create__container__palette']}`}>
          {colors.map((color, index) => (
            <CircularColor key={index} background={color} />
          ))}
          <div ref={referenceElement}>
            <CircularColor
              onClick={openColorPicker}
              showAction={false}
              stroke="dashed"
            >
              <PlusIcon
                className={`${styles['create__container__palette__plus-icon']}`}
              />
            </CircularColor>
          </div>
          <div
            ref={popperElement}
            style={{
              ...popperStyles.popper,
              display: pickerOpen ? 'block' : 'none',
            }}
            {...attributes.popper}
          >
            {pickerOpen && (
              <SketchPicker
                color={pickerColor}
                onChange={(colorResult) => setPickerColor(colorResult.hex)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
