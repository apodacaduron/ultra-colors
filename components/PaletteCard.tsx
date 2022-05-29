import toast from 'react-hot-toast';
import { useCopyToClipboard } from 'react-use';
import styles from '../styles/Palette.module.scss';

type PaletteData = {
  colors: Array<string>;
  paletteName: string;
  authorName: string;
  authorId: string;
};

interface Props {
  paletteData: PaletteData;
}

const PaletteCard: React.FC<Props> = (props) => {
  const [_, copyToClipboard] = useCopyToClipboard();

  const copyColor = (color: string) => {
    copyToClipboard(color);
    toast.success(`Color ${color} copied to clipboard`);
  };

  return (
    <div className="palette-card">
      <div className={styles['palette-card__colors']}>
        {props.paletteData.colors.map((color, index) => (
          <button
            key={index}
            onClick={() => copyColor(color)}
            className={styles['palette-card__colors__color']}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className={styles['palette-card__info']}>
        <div className={styles['palette-card__info__name']}>
          {props.paletteData.paletteName}
        </div>
        <div className={styles['palette-card__info__author']}>
          By {props.paletteData.authorName}
        </div>
      </div>
    </div>
  );
};

export default PaletteCard;
