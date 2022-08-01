import ProgressBar from 'react-bootstrap/ProgressBar';

const HabilidadesItem = ({ habilidades: { lenguaje, porcentaje } }) => (
  <div className='flex items-center justify-between w-100 tablet:w-50'>
    <ProgressBar variant='danger' animated now={porcentaje} className='w-50' />
    <h2>{lenguaje}</h2>
  </div>
);

export default HabilidadesItem;
