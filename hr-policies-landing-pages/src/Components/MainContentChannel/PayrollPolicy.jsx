import React from 'react'
import Banner from '../CommonComponents/Banner'
import FAQSection from '../CommonComponents/FAQSection'
import TrainPanel from '../CommonComponents/TrainPanel'
function PayrollPolicy({banner_information, sidebar_data, Active_section}) {
  console.log(Active_section)
  return (
    <>
    <Banner banner_information={banner_information}/>
    {/* // <Sidebar side_bar_activesection={side_bar_activesection}, sidebar_data={sidebar_data}/> */}
    <div>

      
    </div>
    <TrainPanel policy_name={Active_section}/>
    <FAQSection policy_name ={Active_section}/>
    </>
  )
}

export default PayrollPolicy
