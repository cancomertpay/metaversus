import styles from '../styles';



const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <article className='flex-1 flex flex-col sm:max-w[250px] min-w-[210px]'>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img 
        src={imgUrl}
        alt="icon"
        className='w-1/2 h-1/2 object-contain'
      />
    </div>
      <h2 className='mt-[26px] font-bold text-[24px] leading-[30px] text-white'>Title {title} </h2>
      <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]'> {subtitle} </p>
  </article>
);

export default NewFeatures;
