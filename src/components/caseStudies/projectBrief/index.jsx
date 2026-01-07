import Image from 'next/image';
import './projectbrief.scss';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
export default function ProjectBrief({ data }) {
    const { topTitle, title, img, rightTitle, rightPara, list } = data
    return (
        <MaxWidthWrapper>
            <div id='projectBrief'>
                <div className="grid-box">
                    <div className="left">
                        <div className='box'>
                            <h3 className="head-span">{topTitle}</h3>
                            <h2 className="title">{title}</h2>
                            <figure>
                                <Image src={img} height={400} width={400} />
                            </figure>
                        </div>
                    </div>
                    <div className="right">
                        {rightTitle && <h5>{rightTitle}</h5>}
                        {rightPara && <p>{rightPara}</p>}
                        <ul className='listing'>
                            {list.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}
