import React from 'react'
import Comment from './Comment'

const comments=[
    {"name":"Carlos Mucco","message":"I loved your service, professional work and good care.", "image":"../assets/img/person1.jpg"},
    {"name":"Nacco Benedetto","message":"Great .", "image":"../assets/img/person2.jpg"},
    {"name":"Manos ZEKO","message":"I loved your service, professional work and good care.", "image":"../assets/img/person3.jpg"},
]

export default function Comments() {
  return (
    <div className=''>
        <h1 className='text-3xl mb-10 font-extrabold text-center'><span className='text-blue-800 border-b-8 border-blue-800'>Our </span> Reviews</h1>
        <div className="flex flex-wrap mx-auto w-2/3">
            {
                comments.map( (comment) => (
                    <div className="w-1/3">
                        <Comment name={comment.name} message={comment.message} image={comment.image} />
                    </div>
                ) )
            }
        </div>

        <div className="flex flex-no-wrap mx-auto w-2/3">
            <div className="w-20 h-1 rounded-full mx-5 bg-blue-600 hover:scale-150 transition-all delay-150 duration-500">
            </div>
            <div className="w-10 h-1 rounded-full mx-5 bg-gray-300 hover:scale-150 transition-all delay-150 duration-500">
            </div>
            <div className="w-10 h-1 rounded-full mx-5 bg-gray-300 hover:scale-150 transition-all delay-150 duration-500">
            </div>
        </div>
    </div>
  )
}
