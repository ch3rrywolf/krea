import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Chart from 'react-apexcharts'

const AdminDashboard = () => {
  const state = {
    series : [
      {
        name : "Orders",
        data : [34,65,34,65,34,34,34,56,23,67,23,45]
      },
      {
        name : "Revenue",
        data : [34,32,45,32,34,34,43,56,65,67,45,78]
      },
      {
        name : "Archis",
        data : [78,32,34,54,65,34,54,21,54,43,45,43]
      }
    ],
    options : {
      color : ['#181ee8','#181ee8'],
      plotOptions : {
        raduis : 30
      },
      chart : {
        background : 'transparent',
        foreColor : '#d0d2d6'
      },
      dataLabels : {
        enabled : false
      },
      stroke : {
        show : true,
        curve : ['smooth','straight','stepline'],
        lineCap : 'butt',
        colors : '#f0f0f0',
        width : .5,
        dashArray : 0
      },
      xaxis : {
        categories : ['Jan','Fab','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      legend : {
        position : 'top'
      }
    }
  }

  return (
    <div className='px-2 md:px-7 py-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bolf'>20 000.00 $</h2>
            <span className='text-md font-medium'>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
            <BsCurrencyDollar className='text-[#28c76f] shadow-lg' />
          </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bolf'>20</h2>
            <span className='text-md font-medium'>Products</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
            <RiProductHuntLine className='text-[#cd00e8] shadow-lg' />
          </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bolf'>4</h2>
            <span className='text-md font-medium'>Archis</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
            <FaUsers className='text-[#00cfe8] shadow-lg' />
          </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bolf'>12</h2>
            <span className='text-md font-medium'>Orders</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
            <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg' />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-wrap mt-7'>
        <div className='w-full lg:w-7/12 lg:pr-3'>
          <div className='w-full bg-[#283046] p-4 rounded-md'>
            <Chart options={state.options} series={state.series} type='bar' height={350} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard