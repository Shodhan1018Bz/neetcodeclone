import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useEffect,useState } from 'react';
import axios from 'axios';
function Courses(props) {
    const [coursesList,setcourseList]=useState([]);
    async function fetchCourse(){
        await axios.get("https://drab-cyan-gecko-wig.cyclic.app/coursesList",{mode:'cors'})
        .then(async res=>{
          setcourseList(await res.data.courses)
          // console.log(coursesList);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }
      useEffect(()=>{
          fetchCourse();
      },[])

    //   console.log(coursesList)
    if(!coursesList || coursesList.length===0){
        
        return(
            <div style={{width:"100%",height:"100vh"}}  className=' d-flex justify-content-center  align-items-center'>
                <div   className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    // console.log(coursesList)
  return (
    
    <div className='m-4'>
        {
            coursesList.map((courses)=>{
                return (
                <div className='w-25'>
            <a href="" className='text-decoration-none'>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src="https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a65736b6-151f-4572-8e10-87b2b75ab100/public"
                    
                    alt="Norway"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{courses.title}</Text>
                    
                </Group>

                <Text size="sm" color="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>

                <div className='text-center' >
                    <Badge color="green" variant="light">
                     {courses.level}
                    </Badge>
                </div>
                </Card>
            </a>
        </div>
                );
            })
        }
    </div>
  );
}

export default Courses;