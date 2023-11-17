"use client"
import Image from 'next/image'
import { useState } from 'react'
import styles from './members.module.css'
import alrenoMask from './../../../public/alreno-mask.png'
import honeycomb from './../../../public/honeycomb.png'
const Accordion = ({ title, content, isOpen, toggleAccordion }: {
    title:any, content:any, isOpen:boolean, toggleAccordion: any
}) => {
    return (
        <div className={[styles.member, isOpen && styles.selected].filter(e => !!e).join(' ')} onClick={toggleAccordion}>
            {title}
            {isOpen && (
            <div className={styles.full}>
                {content}
            </div>
            )}
        </div>
    );
  };

  
export default function Home() {
    
    const accordionData = [
        { 
            title: 
                <Image src="/fma.jpeg" className={styles.fma} alt="Francis Albores" width={1959} height={2610} objectFit={'contain'}  priority />, 
            content: 
            <>
                <Image
                    src="/alreno.png"
                    className={styles.alreno}
                    alt="Alreno"
                    width={695} height={698} objectFit={'contain'} 
                    priority
                />
                <Image
                    src="/fma.jpeg"
                    className={styles.fma_full}
                    alt="Francis Albores"
                    width={736} height={980} objectFit={'contain'} 
                    priority
                />
                <div className={styles.meta}>
                    <h3>Francis M. Albores <br />
                    CEO - Innovator</h3>
                    <h4>09279214081 <br />
                    admin@alreno.site</h4>
                    <p>“I&apos;ve started loving programming
                    since I was 11 years old and will
                    ever be up until I&apos;m 90.”
                    </p>
                </div>
                <div className={styles.badges}>
                    <Image
                        src="/dcv.png"
                        alt="Davao CEO Valley"
                        width={100} height={100}
                        priority
                    />
                    <Image
                        src="/ryori.png"
                        alt="Ryori - QR code restaurant ordering system"
                        width={100} height={100}
                        priority
                    />
                    <Image
                        src="/ddc.png"
                        alt="Davao Defi Community"
                        width={103} height={66}
                        priority
                    />
                </div>
            </> 
        },
        { 
            title: 
                <Image src="/lchen.jpeg" className={styles.lchen} alt="Elchen Tanauan" width={1959} height={2610} objectFit={'contain'}  priority />, 
            content: 
            <>
                <Image
                    src="/alreno.png"
                    className={styles.alreno}
                    alt="Alreno"
                    width={695} height={698} objectFit={'contain'} 
                    priority
                />
                <Image
                    src="/lchen.jpeg"
                    className={styles.lchen_full}
                    alt="Elchen T."
                    width={736} height={980} objectFit={'contain'} 
                    priority
                />
                <div className={styles.meta}>
                    <h3>Elchen T. <br />
                    CTO</h3>
                    <p>Our CTO&apos;s visionary leadership and technical expertise have been instrumental in driving our company&apos;s innovation and technological advancement, setting a remarkable standard for excellence.</p>
                </div>
                <div className={styles.badges}>
                    <Image
                        src="/ryori.png"
                        alt="Ryori - QR code restaurant ordering system"
                        width={100} height={100}
                        priority
                    />
                    <Image
                        src="/ddc.png"
                        alt="Davao Defi Community"
                        width={103} height={66}
                        priority
                    />
                </div>
            </> 
        },
        { 
            title: 
                <Image src="/kyle.jpeg" className={styles.kyle} alt="Kyle" width={1959} height={2610} objectFit={'contain'}  priority />, 
            content: 
            <>
                <Image
                    src="/alreno.png"
                    className={styles.alreno}
                    alt="Alreno"
                    width={695} height={698} objectFit={'contain'} 
                    priority
                />
                <Image
                    src="/kyle.jpeg"
                    className={styles.kyle_full}
                    alt="Kyle S."
                    width={736} height={980} objectFit={'contain'} 
                    priority
                />
                <div className={styles.meta}>
                    <h3>Kyle S. <br />
                    CMO</h3>
                    <p>Our CMO&apos;s passionate ingenuity has sparked impactful marketing initiatives, fueling our initial growth and carving a distinctive brand identity, laying a solid foundation for our journey ahead.</p>
                </div>
                <div className={styles.badges}>
                    <Image
                        src="/ryori.png"
                        alt="Ryori - QR code restaurant ordering system"
                        width={100} height={100}
                        priority
                    />
                </div>
            </> 
        },
        { 
            title: 
                <Image src="/juris.jpeg" className={styles.juris} alt="Juris" width={1959} height={2610} objectFit={'contain'}  priority />, 
            content: 
            <>
                <Image
                    src="/alreno.png"
                    className={styles.alreno}
                    alt="Alreno"
                    width={695} height={698} objectFit={'contain'} 
                    priority
                />
                <Image
                    src="/juris.jpeg"
                    className={styles.juris_full}
                    alt="Jurris T."
                    width={736} height={980} objectFit={'contain'} 
                    priority
                />
                <div className={styles.meta}>
                    <h3>Jurris T. <br />
                    CIO</h3>
                    <p>Our CIO&apos;s astute technological foresight and strategic implementation have revolutionized our startup&apos;s digital infrastructure, fortifying it to scale efficiently while safeguarding our innovation-driven ethos.</p>
                </div>
                <div className={styles.badges}>
                    <Image
                        src="/ryori.png"
                        alt="Ryori - QR code restaurant ordering system"
                        width={100} height={100}
                        priority
                    />
                    <Image
                        src="/ddc.png"
                        alt="Davao Defi Community"
                        width={103} height={66}
                        priority
                    />
                </div>
            </> 
        },
        { 
            title: 
                <Image src="/febie.jpeg" className={styles.febie} alt="Febie" width={1959} height={2610} objectFit={'contain'}  priority />, 
            content: 
            <>
                <Image
                    src="/alreno.png"
                    className={styles.alreno}
                    alt="Alreno"
                    width={695} height={698} objectFit={'contain'} 
                    priority
                />
                <Image
                    src="/febie.jpeg"
                    className={styles.febie_full}
                    alt="Jurris T."
                    width={736} height={980} objectFit={'contain'} 
                    priority
                />
                <div className={styles.meta}>
                    <h3>Febie A. <br />
                    CFO</h3>
                    <p>Her remarkable leadership as our CFO and HR head embodies a rare blend of financial acumen and empathetic people-first strategies, shaping a thriving workplace culture while ensuring our financial health, an invaluable asset to our startup&apos;s journey.</p>
                </div>
                <div className={styles.badges}>
                    <Image
                        src="/ryori.png"
                        alt="Ryori - QR code restaurant ordering system"
                        width={100} height={100}
                        priority
                    />
                </div>
            </> 
        },
      ];

      const [accordions, setAccordions] = useState(
        accordionData.map(() => ({
          isOpen: false,
        }))
      );
      const toggleAccordion = (index:number) => {
        setAccordions((prevState) =>
          prevState.map((accordion, i) => {
            if (i === index) {
              return { ...accordion, isOpen: !accordion.isOpen };
            } else {
              return { ...accordion, isOpen: false };
            }
          })
        );
      };
  return (
    <main className={styles.main}>
        <span style={{
            backgroundImage: `url(${alrenoMask.src})`,
            width: '100%',
            height: '100%',
            position: 'fixed',
            opacity: '0.2',
            pointerEvents: 'none',
        }}></span>
        <span style={{
            backgroundImage: `url(${honeycomb.src})`,
            width: '100%',
            height: '100%',
            position: 'fixed',
            opacity: '0.2',
            zIndex: '1',
            pointerEvents: 'none',
            backgroundSize: '60%',
        }}></span>
        {accordionData.map((accordion, index) => (
            <Accordion
            key={index}
            title={accordion.title}
            content={accordion.content}
            isOpen={accordions[index].isOpen}
            toggleAccordion={() => toggleAccordion(index)}
            />
        ))}
    </main>
  )
}
