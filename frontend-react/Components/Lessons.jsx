import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useEffect,useState } from 'react';
import axios from 'axios';
function Lessons() {
    const [lessons,setcourseList]=useState([
        {title:"Python for Coding Interviews",img:"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/fe189989-f574-4bf8-a562-b8e44d286000/public"},
        {title:"Big-O Notation",img:"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c21f735d-f9f7-4efe-1cb1-2982fa151400/public"},
        {title:"8 Design Patterns Every Programmer Should Know",img:"https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d1971965-f033-4c26-6925-c0b06a270500/public"}
        ]);
    

    //   console.log(lessons)
    if(!lessons || lessons.length===0){
        
        return(
            <div style={{width:"100%",height:"100vh"}}  className=' d-flex justify-content-center  align-items-center'>
                <div   className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    // console.log(lessons)
  return (
    
    <div className='ml-8 m-4 mr-8  d-flex justify-content-around'  >
        
        {
            lessons.map((lesson)=>{
                return (
                <div className='w-25'    key={lesson.title}>
            <a href="" className='text-decoration-none'>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src={lesson.img}
                    
                    alt="Norway"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text 
                     variant="gradient"
                     gradient={{ from: 'black', to: 'black', deg: 45 }}
                     sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                     ta="center"
                     fz="xl"
                     fw={700}
                    >{lesson.title}</Text>
                    
                </Group>

                </Card>
            </a>
        </div>

                );
            })
        }
        
    </div>
  );
}

export default Lessons;