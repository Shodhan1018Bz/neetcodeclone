import { Tabs } from '@mantine/core';
import Courses from './courses';
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import Lessons from './Lessons';

// Second tab panel will be mounted only when user activates second tab
function CourseLessonTabs() {
const[course,setCourse]=useState("course");
  
  return(
    <div >
      <div className='d-flex justify-content-center'>
      <SegmentedControl
          value={course}
          onChange={setCourse}
          
          size="lg"
          transitionDuration={500}
          data={[
            {label:"Course",value:"course"},
            {label:"Lesson",value:"lesson"},
          ]}
      />


    </div>
      {
        course=="course"?<Courses/>:<Lessons/>
      }
    </div>
    
    
  )
  
}
export default CourseLessonTabs;