import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({slug, key , imageUrl ,altImage , title}) => {


  return (
    <article>
        <Link to={`/post/${slug}`} key={slug}>
            <span className='bloc h-65 relative rounded shadow leading-snug bg-white border-l-8 border-green-400 ' key={key}>
                <img src={imageUrl} alt={altImage} 
                className='w-full h-full rounded-r object-cover absolute'/>
                <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                    <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>{title}</h3>
                </span>
            </span>
        </Link>
    </article>
    
  )
}

export default Post
