import React, {useEffect} from 'react'
import AgricultureCard from '../Component/DepartmentCards/agriculture'
import EducationCard from '../Component/DepartmentCards/education'
import FoodCard from '../Component/DepartmentCards/food'
import ForestCard from '../Component/DepartmentCards/forest'
import HealthCard from '../Component/DepartmentCards/health'
import PanchayatiCard from '../Component/DepartmentCards/panchayati'
import RuralDevelopmentCard from '../Component/DepartmentCards/ruralDevelopment'
import RuralWorksCard from '../Component/DepartmentCards/ruralWorks'
import ScheduleCard from '../Component/DepartmentCards/scheduleTribe'
import SchoolCard from '../Component/DepartmentCards/schoolEducation'
import SocialCard from '../Component/DepartmentCards/socialSecurity'
import UrbanCard from '../Component/DepartmentCards/urbanDevelopment'
import WaterCard from '../Component/DepartmentCards/water'

function OutcomeBudget() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);

  return (
    <div className = 'flex flex-wrap mh1 mh4-m mh5-ns br3'>
          <AgricultureCard />
          <EducationCard />
          <ForestCard />
          <HealthCard />
          <SchoolCard />
          <RuralWorksCard />
          <RuralDevelopmentCard />
          <PanchayatiCard />
          <UrbanCard />
          <WaterCard />
          <SocialCard />
          <FoodCard />
          <ScheduleCard />
        </div>
  )
}

export default OutcomeBudget