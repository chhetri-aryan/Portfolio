
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar } from "react-icons/fa6";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;
const Image = styled.img`
    height: 50px;
    // background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Body = styled.div`
    width: 100%;
    // display: flex;
    // flex-direction: column; 
`

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`


const Card = styled.div`
  width: 100%; /* Adjust width as needed */
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
  }
  border: 0.1px solid #854ce6;
`;


const Education = ({ darkmode }) => {
    return (
        <Container id="education" className='z-auto'>
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth.
                </Desc>
                <VerticalTimeline className=''
                    lineColor={"#854ce6"}
                >
                    {
                        education.map(element => {
                            return (
                                <VerticalTimelineElement
                                    contentArrowStyle={{ borderRight: '7px solid #ff5733',  }}
                                    contentStyle={{ padding: 0, background: 'transparent', transition: "all 0.3 ease-in-out", hover: " transform: translateY(-5px)" }} // Remove default padding
                                    key={element.id}
                                    date={<Date>{element.date}</Date>}
                                    iconClassName={"bg-white"}
                                    icon={<img src={element.img} className='rounded-full bg-white' />}
                                    
                                >
                                    <Card>
                                        <Top>
                                            <Image src={element.img}/>
                                            <Body>
                                                <Name>{element.school}</Name>
                                                <Degree>{element.degree}</Degree>
                                                <Grade>{element.grade}</Grade>
                                            </Body>


                                        </Top>

                                        <Description>
                                            <Span className='text-justify'>{element.desc}</Span>
                                        </Description>
                                    </Card>

                                </VerticalTimelineElement>
                            )
                        })
                    }

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaStar />}
                    />


                </VerticalTimeline>
            </Wrapper>


        </Container>
    )
}

export default Education