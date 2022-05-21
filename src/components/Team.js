import React from 'react'

const team = [
    {"name" : "ALAA Naoufal", "job" : "Big Data and Cloud computing Engineering Student","country":"🇲🇦" , "image":"https://media-exp1.licdn.com/dms/image/C4E03AQHzFZ7fxQNlZw/profile-displayphoto-shrink_800_800/0/1640987860603?e=1658361600&v=beta&t=Fe78tZ3xGN3L1pymZ_QJDs8i0MmFidTVwLfafmdKMxY"},
    {"name" : "ALLAT Mouad", "job" : "Big Data and Cloud computing Engineering Student","country":"🇲🇦" , "image":"https://media-exp1.licdn.com/dms/image/C4D03AQElbmvvF8MesQ/profile-displayphoto-shrink_800_800/0/1647249478634?e=1658361600&v=beta&t=xRGvILZZLM__SDmYXQg5kbG2DfQXCDQcAMRmpDcMfRc"},
    {"name" : "ARROUKHSIS Abdenasser", "job" : "Big Data and Cloud computing Engineering Student","country":"🇲🇦" , "image":"https://media-exp1.licdn.com/dms/image/C5603AQFQVCUuLKDANA/profile-displayphoto-shrink_800_800/0/1651285476793?e=1658361600&v=beta&t=oYMlVWip1ZATjOHvzK6bg_ybMHfFdEkRcA7MVGJxg-o"},
    {"name" : "BOUHLALA ARIJ", "job" : "Big Data and Cloud computing Engineering Student","country":"🇲🇦" , "image":"https://media-exp1.licdn.com/dms/image/C4E03AQG_F--lNrklLA/profile-displayphoto-shrink_800_800/0/1615415476027?e=1658361600&v=beta&t=lKmHqn7_L9bvwacPEQbF2ylEkX2pIPOH5sNcEqRyOZU"},
    {"name" : "DIALLO Assimi", "job" : "Big Data and Cloud computing Engineering Student","country":"🇧🇫" , "image":""},
    {"name" : "KAFANDO T. Bertrand", "job" : "Big Data and Cloud computing Engineering Student","country":"🇧🇫" , "image":"https://media-exp1.licdn.com/dms/image/C4D03AQGGeqme_fLRxQ/profile-displayphoto-shrink_800_800/0/1651264991176?e=1658361600&v=beta&t=Q2Eoo7AiQjkkvUPL50oprrmQbLUzhACHtPEk5T9ns7k"}
]
export default function Team() {
  return (
    <div class="p-12 md:flex justify-between items-center" href='#team'>
        <div className='basis-1/3 p-6 m-6 bg-gray-50 rounded-md border-2 border-dashed border-slate-300'>
            <h2 className='text-3xl font-extrabold '><span className='text-blue-800 border-b-8 border-blue-800'>Our </span>team</h2>
            <p className='text-gray-700 mt-4'>
                Meet our <span className='font-semibold'>ELITE</span> team of experts.<br/>
                We are a team of passionate people who are ready to help you.
                Big Data and Cloud computing Engineering Students @ENSETMohammedia
            </p>
        </div>
        <div className="basis-2/3 ">
            <div className='grid md:grid-cols-3 grid-cols-2 gap-2 align-middle'>
            {team.map((member) => (
                <div className='text-center'>
                    <div className='h-20 w-20 mx-auto bg-gray-400 rounded-full overflow-hidden'>
                        <img src={member.image} alt={member.name}/>
                    </div>
                    <div>
                        <span className='text-sm text-center font-semibold'>{member.name} {member.country}</span><br/>
                        <span className='text-xs font-light'>{member.job}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
