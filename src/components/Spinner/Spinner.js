import { ColorRing } from 'react-loader-spinner';
import css from '../Spinner/Spinner.module.css';
const Spinner = () => {
  return (
    <div  className={css.centered}>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    </div>
  );
};
export default Spinner;
