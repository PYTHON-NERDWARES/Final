import React from 'react'
import { useSelector } from 'react-redux';
import jsonwebtoken from 'jsonwebtoken';


const EmployeesProfile = () => {



    const state = useSelector((state) => {
        return {
            data: state.stateReducer.data,
            token: state.stateReducer.token,
            branches: state.stateReducer.branches,
            departments: state.stateReducer.departments,
        }
    });
    let decodedPayload = jsonwebtoken.decode(state.token.token.access)
    console.log(state.data.payload)
    // let prfile_data = state.data.payload.map((item)=>{
    //     let data = []
    //     state.data.payload.item.id == decodedPayload.user_id && data.push(item)
    //     return data
    // })

    return (
        <>
            {state.data.payload &&
                <div className='w-3/4'>
                    {/* First Row */}

                    {/* Second Row */}
                    <div className='flex justify-evenly'>
                        {/* Basic info */}
                        <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Basic Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details .</p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Full Name: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.first_name + ' ' + state.data.payload.last_name}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Social Status: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.marital_status}</dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Position: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.role}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Username: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.username}</dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Employee ID: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.employee_id}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">work_type: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.work_type}</dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Nationality: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.nationality}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Department: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.department}</dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Branch: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.branch}</dd>
                                        </div>




                                        {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nationality: </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div> */}
                                    </dl>
                                </div>
                            </div>

                        </div>
                        {/* Contacts */}
                        <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Contacts Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Contacts Information details .</p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Mobile No: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.phone}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Email Address: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.email}</dd>
                                        </div>

                                    </dl>

                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Permissions & Leave</h3>
                                    </div>
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Annual Off Days : </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.annual_off_days}</dd>
                                            <dt className="text-sm font-medium text-gray-500">Days Taken : </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.days_taken}</dd>
                                            <dt className="text-sm font-medium text-gray-500">Days Remaining : </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.days_remaining}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Monthly Permission Hours: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.monthly_permission_hours}</dd>
                                            <dt className="text-sm font-medium text-gray-500">Hours Taken: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.hours_taken}</dd>
                                            <dt className="text-sm font-medium text-gray-500">hours Remaining: </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.hours_remaining}</dd>
                                        </div>

                                    </dl>


                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Dates */}
                    <div div className='flex w-auto ml-20 px-15'>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Dates Information</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Dates Information details .</p>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Joined Date: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.date_joined}</dd>
                                    </div>

                                </dl>
                            </div>

                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Last Login : </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{state.data.payload.last_login}</dd>
                                    </div>

                                </dl>
                            </div>
                        </div>
                    </div>


                </div>
            }
        </>
    )
}

export default EmployeesProfile
