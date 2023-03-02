import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useEffect,useState } from 'react';
import axios from 'axios';
function Courses() {
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
    
    <div className='m-4' >
        
        {
            coursesList.map((courses)=>{
                return (
                <div className='w-25'  key={courses.id}>
            <a href="" className='text-decoration-none'>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src="https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a65736b6-151f-4572-8e10-87b2b75ab100/public"
                    
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
                    >Algorithms & Data Structures for Beginners</Text>
                    
                </Group>

                <Text fz="md" fw="700">
                Learn the foundations of coding interviews.
                </Text>

                <div className='text-center mt-4' >
                    <Badge color="blue" variant="light">
                     8.5hrs
                    </Badge>
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
