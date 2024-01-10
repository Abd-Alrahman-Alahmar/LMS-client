"use client"
import React, { useState } from 'react'
import DashboardHeader from './DashboardHeader'
import Dashboardwidgets from './Widgets/DashboardWidget';

type Props = {
  isDashboard?: boolean;
};

const DashboardHero = ({isDashboard}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <DashboardHeader open={open} setOpen={setOpen}/>
      {
        isDashboard && (
          <Dashboardwidgets open={open} />
        )
        }
    </div>
  )
}

export default DashboardHero