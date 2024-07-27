import React from 'react';
import styles from './page.module.css';

const ImageGridBox: React.FC = () => {
    return (
        <div className='flex justify-around p-24 items-center'>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-8 flex-row'>
                    <div className={`${styles['flip-card']} w-80 h-48`}>
                        <div className={styles['flip-card-inner']}>
                            <div className={`${styles['flip-card-front']} rounded-xl bg-[url(https://stocktutor.in/static/media/certificate.78e108a584cbf6ce527c.jpeg)] bg-no-repeat bg-cover`} />
                            <div className={styles['flip-card-back']}>
                                <p style={{ fontSize: '16px', fontWeight: '500', paddingBottom: '4px', marginBottom: '8px', borderBottom: '1px solid white' }}>BSE CERTIFICATION</p>
                                <p style={{ fontSize: '12px' }}>Master the art of selecting stocks with Stocktutor’s financial experts simplifying all the strategies to maximize your profits and minimize your loss</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['flip-card']} w-60 h-48`}>
                        <div className={styles['flip-card-inner']}>
                            <div className={`${styles['flip-card-front']} rounded-xl bg-[url(https://res.cloudinary.com/dixi57x2b/image/upload/v1721716545/mvl0mk2eurtdkw7vqtit.png)] bg-no-repeat bg-cover`} />
                            <div className={styles['flip-card-back']}>
                                <p style={{ fontSize: '16px', fontWeight: '500', paddingBottom: '4px', marginBottom: '8px', borderBottom: '1px solid white' }}>AWARDED</p>
                                <p style={{ fontSize: '12px' }}>Master the art of selecting stocks with Stocktutor’s financial experts simplifying all the strategies to maximize your profits and minimize your loss</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 flex-row'>
                    <div className={`${styles['flip-card']} w-60 h-48`}>
                        <div className={styles['flip-card-inner']}>
                            <div className={`${styles['flip-card-front']} rounded-xl bg-[url(https://res.cloudinary.com/dixi57x2b/image/upload/v1721716632/mwrbpciertckqxw2nvvb.png)] bg-no-repeat bg-cover`} />
                            <div className={styles['flip-card-back']}>
                                <p style={{ fontSize: '16px', fontWeight: '500', paddingBottom: '4px', marginBottom: '8px', borderBottom: '1px solid white' }}>BSE CERTIFICATION</p>
                                <p style={{ fontSize: '12px' }}>Master the art of selecting stocks with Stocktutor’s financial experts simplifying all the strategies to maximize your profits and minimize your loss</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['flip-card']} w-80 h-48`}>
                        <div className={styles['flip-card-inner']}>
                            <div className={`${styles['flip-card-front']} rounded-xl bg-[url(https://res.cloudinary.com/dixi57x2b/image/upload/v1721716631/e5rqtgvl5tplbhhnuscs.png)] bg-no-repeat bg-cover`} />
                            <div className={styles['flip-card-back']}>
                                <p style={{ fontSize: '16px', fontWeight: '500', paddingBottom: '4px', marginBottom: '8px', borderBottom: '1px solid white' }}>BSE CERTIFICATION</p>
                                <p style={{ fontSize: '12px' }}>Master the art of selecting stocks with Stocktutor’s financial experts simplifying all the strategies to maximize your profits and minimize your loss</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-8xl font-bold text-stone-100 opacity-25 tracking-widest text-center alfa-slab-one-regular'>
                    WE<br/>THE<br/>ONLY<br/>ONE
                </h1>
            </div>
        </div>
    );
}

export default ImageGridBox;
