import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Card = styled.div`
   
    background-color: ${({ theme }) => theme.card - 10};
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
   
`

const Image = styled.img`
    width: 100%;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 15px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

export default function ProjectModal({ project, close, isOpen }) {

  return (
    <>


      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <Card>

                <Title>
                  <div className='flex'>
                    <div>
                      {project.title}
                      <Date>
                        {project.date}
                      </Date>
                    </div>

                    <div className="mx-auto mr-0">
                      
                      <Button
                        className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold  shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1  data-[open]:bg-gray-700"
                        onClick={close}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                </Title>

                <Image src={project.image}  className={project.category === 'android app' ? 'h-80 object-contain' : ''}/>
                <Description className='text-justify'>
                  {project.description}
                </Description>

                <Tags>
                  {project.tags?.map((tag, index) => (
                    <Tag key={index} >{tag}</Tag>
                  ))}
                </Tags>

                <Link to={project.github} target='_blank'>
                  <Description className='underline decoration-4 hover:decoration-sky-400'>
                    GitHub Link 👆
                  </Description>
                </Link>
                {
                  project.webapp &&
                  <Link to={project.webapp} target='_blank'>
                    <Description className='underline decoration-4 hover:decoration-sky-400'>
                      Deployed Link. 👆
                    </Description>
                  </Link>
                }

              </Card>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
